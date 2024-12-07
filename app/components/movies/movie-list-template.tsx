import React from 'react'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CardListItem from "@/app/components/card-list-item";
import CardList from "@/app/components/card-list";
import { z } from "zod";
import { movieListSchema } from "@/trpc/schemas/movies";

type Props = {
    title: string;
    mediaType: 'movie' | 'tv';
    movieData: z.infer<typeof movieListSchema.shape.results>
}

const MovieListTemplate = ({ title, mediaType, movieData }: Props) => {
    return (
        <CardList title={title}>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {movieData.map(({ id, title, backdrop_path, poster_path }) => (
                        <CardListItem
                            mediaType={mediaType}
                            title={title}
                            id={id}
                            backdropPath={backdrop_path ?? ''}
                            posterPath={poster_path ?? ''}
                            key={id}
                        />
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex left-0 sm:-left-4 md:-left-6" />
                <CarouselNext className="hidden sm:flex right-0 sm:-right-4 md:-right-6" />
            </Carousel>
        </CardList>
    )
}

export default MovieListTemplate

