import React from 'react'
import {Carousel, CarouselContent, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import CardList from "@/app/components/card-list";

const Collections = () => {
    return (
        <CardList title={'Collection'}>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {/*{Array.from({length: 10}).map((_, index) => (*/}
                    {/*    <CardListItem movieType={'movies'} index={index} key={index}/>*/}
                    {/*))}*/}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </CardList>
    )
}
export default Collections
