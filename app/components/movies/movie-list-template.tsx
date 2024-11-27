import React from 'react'
import {Carousel, CarouselContent, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import CardListItem from "@/app/components/card-list-item";
import CardList from "@/app/components/card-list";

type Props = {
    title:string;
    movieType: 'movies' | 'tv-series' | 'people';
    movieData:never[]
    
}

const MovieListTemplate = ({title, movieType, movieData}:Props) => {
    return (
        <CardList title={title}>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {movieData.map((_, index) => (
                        <CardListItem movieType={movieType} index={index} key={index}/>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </CardList>
    )
}
export default MovieListTemplate
