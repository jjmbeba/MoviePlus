import React from 'react'
import {Card} from "@/components/ui/card";
import Link from "next/link";
import slug from "slug";
import {buttonVariants} from "@/components/ui/button";
import {RouterOutputs} from "@/trpc/routers/_app";
import BookmarkButton from "@/app/components/bookmark-button";
import Image from "next/image";
import {generateImageUrl} from "@/lib/utils";

type Props = {
    bookmark: RouterOutputs['bookmarks']['getUserBookmarks'][number]
}

const Bookmark = ({bookmark}: Props) => {
    const { mediaType, title, recordId, posterPath, backdropPath } = bookmark;

    const imageUrl = posterPath === '' ? 'https://placehold.co/228x341.jpg' : generateImageUrl(posterPath);

    return (
        <div className="flex flex-col">
            <div className="p-1">
                <Card className="relative w-full overflow-hidden">
                    <div className="aspect-[2/3] relative">
                        <Image
                            className="rounded-t-xl object-cover"
                            src={imageUrl}
                            alt={title}
                            fill
                            sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 23vw, 18vw"
                        />
                        <BookmarkButton
                            title={title}
                            mediaType={mediaType}
                            recordId={recordId}
                            backdropPath={backdropPath ?? ''}
                            posterPath={posterPath ?? ''}
                            className="absolute top-2 right-2 z-10"
                        />
                    </div>
                </Card>
            </div>
            <Link
                href={`/${mediaType}/${recordId}/${slug(title)}`}
                className={buttonVariants({
                    variant: 'link',
                    className: "mt-2 px-1 justify-start h-auto"
                })}
            >
                <h2 className="w-full text-sm sm:text-base overflow-hidden text-ellipsis whitespace-nowrap">
                    {title}
                </h2>
            </Link>
        </div>
    )
}
export default Bookmark

