import React from 'react'
import {Carousel, CarouselContent, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import CardList from "@/app/components/card-list";
import {trpc} from "@/trpc/server";
import CardListItem from "@/app/components/card-list-item";

type Props = {
    name: string;
    collectionId: number;
}

const Collections = async ({name, collectionId}: Props) => {
    const collection = await trpc.collections.getCollectionById({
        id: collectionId
    });

    return (
        <CardList title={name}>
            <p className="text-sm md:text-base mb-4 md:mb-6">
                {collection.overview}
            </p>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full mt-4 md:mt-8"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {collection.parts.map(({title, id, poster_path, backdrop_path, media_type}) => (
                        <CardListItem key={id} title={title} posterPath={poster_path} backdropPath={backdrop_path}
                                      id={id} mediaType={media_type}/>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex left-0 sm:-left-4 md:-left-6" />
                <CarouselNext className="hidden sm:flex right-0 sm:-right-4 md:-right-6" />
            </Carousel>
        </CardList>
    )
}
export default Collections

