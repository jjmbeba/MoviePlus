import React from 'react'
import {Carousel, CarouselContent, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import CardListItem from "@/app/components/card-list-item";
import CardList from "@/app/components/card-list";
import {z} from "zod";
import {movieListSchema} from "@/trpc/schemas";

type Props = {
    title: string;
    movieType: 'movies' | 'tv-series' | 'people';
    movieData: z.infer<typeof movieListSchema.shape.results>
}

const MovieListTemplate = ({title, movieType, movieData}: Props) => {
    return (
        <CardList title={title}>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {movieData.map(({id, title, backdrop_path, poster_path}) => (
                        <CardListItem
                            movieType={movieType}
                            title={title}
                            id={id}
                            backdropPath={backdrop_path}
                            posterPath={poster_path}
                            key={id}/>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </CardList>
    )
}
export default MovieListTemplate
