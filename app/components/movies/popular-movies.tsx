import React from 'react'
import CardList from "@/app/components/card-list";
import {Card, CardContent} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const PopularMovies = () => {
    return (
        <CardList title={'Popular Movies'}>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {Array.from({length: 10}).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </CardList>
    )
}
export default PopularMovies
