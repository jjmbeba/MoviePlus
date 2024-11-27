import React from 'react'
import {CarouselItem} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import BookmarkButton from "@/app/components/bookmark-button";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import slug from "slug";

const CardListItem = ({index, movieType = 'movies'}:{index:number; movieType:string;}) => {
    return (
        <CarouselItem className="md:basis-1/2 lg:basis-1/5">
            <div className="p-1">
                <Card className={'relative'}>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{index + 1}</span>
                    </CardContent>
                    <BookmarkButton className={'absolute top-1 right-2'}/>
                </Card>
            </div>
            <Link href={`/${movieType}/${index}/${slug('title')}`} className={`${buttonVariants({
                variant: 'link'
            })}`}>
                Title
            </Link>
        </CarouselItem>
    )
}
export default CardListItem
