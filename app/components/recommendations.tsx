import React from 'react'
import CardList from "@/app/components/card-list";
import {Carousel, CarouselContent, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import CardListItem from "@/app/components/card-list-item";

const Recommendations = () => {
    return (
        <CardList title={'Recommendations'}>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {Array.from({length: 10}).map((_, index) => (
                        <CardListItem movieType={'movies'} index={index} key={index}/>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </CardList>
    )
}
export default Recommendations
