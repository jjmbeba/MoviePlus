import React from 'react'
import {CarouselItem} from "@/components/ui/carousel";
import {Card} from "@/components/ui/card";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import slug from "slug";
import BookmarkButton from "@/app/components/bookmark-button";
import {auth} from "@clerk/nextjs/server";
import Image from "next/image";
import {generateImageUrl} from "@/lib/utils";

//gets title, image_url, id,
//generate url using id and slug
type Props = {
    title: string;
    posterPath: string;
    backdropPath: string;
    id: number;
    mediaType: string
}


const CardListItem = async ({title, id, mediaType, posterPath, backdropPath}: Props) => {
    const {userId} = await auth();
    const imageUrl = posterPath === '' ? 'https://placehold.co/228x341.jpg' : generateImageUrl(posterPath);
    console.log(imageUrl, title, mediaType)

    return (
        <CarouselItem className="md:basis-1/2 lg:basis-1/5">
            <Card className={'relative'}>
                <Image className={'rounded-xl'} width={227} height={312} src={imageUrl} alt={title}/>
                {userId && <BookmarkButton title={title} mediaType={mediaType} recordId={id}
                                           backdropPath={backdropPath ?? ''}
                                           posterPath={posterPath ?? ''} className={'absolute top-1 right-2'}/>}
            </Card>
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
