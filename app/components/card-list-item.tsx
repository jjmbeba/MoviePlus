import React from 'react'
import { CarouselItem } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import slug from "slug";
import BookmarkButton from "@/app/components/bookmark-button";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { generateImageUrl } from "@/lib/utils";

type Props = {
    title: string;
    posterPath: string;
    backdropPath: string;
    id: number;
    mediaType: string
}

const CardListItem = async ({ title, id, mediaType, posterPath, backdropPath }: Props) => {
    const { userId } = await auth();
    const imageUrl = posterPath === '' ? 'https://placehold.co/228x341.jpg' : generateImageUrl(posterPath);

    return (
        <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 pl-4 pr-4 pb-4">
            <Card className="relative w-full overflow-hidden">
                <div className="aspect-[2/3] relative">
                    <Image
                        className="rounded-t-xl object-cover"
                        src={imageUrl}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, (max-width: 1280px) 23vw, 18vw"
                    />
                    {userId && (
                        <BookmarkButton
                            title={title}
                            mediaType={mediaType}
                            recordId={id}
                            backdropPath={backdropPath ?? ''}
                            posterPath={posterPath ?? ''}
                            className="absolute top-2 right-2 z-10"
                        />
                    )}
                </div>
            </Card>
            <Link
                href={`/${mediaType}/${id}/${slug(title)}`}
                className={`${buttonVariants({
                    variant: 'link'
                })} w-full justify-start px-0 mt-2`}
            >
                <h2 className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-base sm:text-sm md:text-base">
                    {title}
                </h2>
            </Link>
        </CarouselItem>
    )
}

export default CardListItem

