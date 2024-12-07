import React from 'react'
import {Carousel, CarouselContent, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import CardListItem from "@/app/components/card-list-item";
import CardList from "@/app/components/card-list";
import {z} from "zod";
import {tvListSchema} from "@/trpc/schemas/tv";

type Props = {
    title: string;
    mediaType: 'movies' | 'tv';
    tvData: z.infer<typeof tvListSchema.shape.results>
}

const TvListTemplate = ({title, mediaType, tvData}: Props) => {
    return (
        <CardList title={title}>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-4">
                    {tvData.map(({id, name, backdrop_path, poster_path}) => (
                        <CardListItem
                            mediaType={mediaType}
                            title={name}
                            id={id}
                            backdropPath={backdrop_path ?? ''}
                            posterPath={poster_path ?? ''}
                            key={id}/>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </CardList>
    )
}
export default TvListTemplate
