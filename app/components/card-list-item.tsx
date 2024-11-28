import React from 'react'
import {CarouselItem} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import BookmarkButton from "@/app/components/bookmark-button";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import slug from "slug";

//gets title, image_url, id,
//generate url using id and slug
type Props = {
    title:string;
    posterPath:string;
    backdropPath:string;
    id:number;
    mediaType:string
}


const CardListItem = ({title, id, mediaType = 'movies'}:Props) => {
    return (
        <CarouselItem className="md:basis-1/2 lg:basis-1/5">
            <div className="p-1">
                <Card className={'relative'}>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">1</span>
                    </CardContent>
                    <BookmarkButton className={'absolute top-1 right-2'}/>
                </Card>
            </div>
            <Link href={`/${mediaType}/${id}/${slug(title)}`} className={`${buttonVariants({
                variant: 'link'
            })}`}>
                <h2 className={'w-[200px] overflow-hidden text-ellipsis whitespace-nowrap'}>
                    {title}
                </h2>
            </Link>
        </CarouselItem>
    )
}
export default CardListItem
