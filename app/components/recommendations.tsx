import React from 'react'
import CardList from "@/app/components/card-list";
import {Carousel, CarouselContent, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {trpc} from "@/trpc/server";
import CardListItem from "@/app/components/card-list-item";

type Props = {
    recordId: number;
}

const Recommendations = async ({recordId}: Props) => {
    const recommendations = await trpc.movies.getRecommendationsById({
        id: recordId
    });

    return (
        <CardList title={'Recommendations'}>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {recommendations.results.map(({title, poster_path, backdrop_path, id, media_type}) => (
                        <CardListItem key={id} title={title} posterPath={poster_path} backdropPath={backdrop_path}
                                      id={id} mediaType={media_type}/>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </CardList>
    )
}
export default Recommendations
