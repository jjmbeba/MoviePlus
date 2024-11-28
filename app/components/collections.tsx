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
            <p>
                {collection.overview}
            </p>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full mt-8"
            >
                <CarouselContent>
                    {collection.parts.map(({title, id, poster_path, backdrop_path, media_type}) => (
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
export default Collections
