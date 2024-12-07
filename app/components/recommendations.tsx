import React from 'react'
import CardList from "@/app/components/card-list";
import {Carousel, CarouselContent, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {trpc} from "@/trpc/server";
import CardListItem from "@/app/components/card-list-item";
import {z} from "zod";
import {recommendationSchema} from "@/trpc/schemas/tv";

type Props = {
    recordId: number;
    mediaType: 'movie' | 'tv'
}

const Recommendations = async ({recordId, mediaType}: Props) => {
    let recommendations;

    switch (mediaType){
        case 'movie':
            recommendations = await trpc.movies.getRecommendationsById({
                id:recordId
            });
            break;
        case "tv":
            recommendations = await trpc.tv.getRecommendationsById({
                id:recordId
            })
            break;
    }

    if (!recommendations.results) return null;

    return (
        <CardList title={'Recommendations'}>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {recommendations.results.map((recommendation) => {
                        const {poster_path, id, backdrop_path, media_type} = recommendation;
                        const title = 'title' in recommendation ? recommendation.title : (recommendation as z.infer<typeof recommendationSchema>).name;

                        return (
                            <CardListItem key={id} title={title} posterPath={poster_path} backdropPath={backdrop_path}
                                          id={id} mediaType={media_type}/>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex left-0 sm:-left-4 md:-left-6" />
                <CarouselNext className="hidden sm:flex right-0 sm:-right-4 md:-right-6" />
            </Carousel>
        </CardList>
    )
}
export default Recommendations

