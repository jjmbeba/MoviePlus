import React from 'react'
import {Card, CardContent} from "@/components/ui/card";
import Link from "next/link";
import slug from "slug";
import {buttonVariants} from "@/components/ui/button";
import {RouterOutputs} from "@/trpc/routers/_app";
import BookmarkButton from "@/app/components/bookmark-button";

type Props = {
    bookmark:RouterOutputs['bookmarks']['getUserBookmarks'][number]
}

const Bookmark = ({bookmark}:Props) => {
    const { mediaType, title, recordId, posterPath, backdropPath} = bookmark;

    return (
        <div>
            <div className="p-1">
                <Card className={'relative'}>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">1</span>
                    </CardContent>
                    <BookmarkButton mediaType={mediaType} recordId={recordId} title={title} posterPath={posterPath ?? ''} backdropPath={backdropPath ?? ''}   className={'absolute top-1 right-2'}/>
                </Card>
            </div>
            <Link href={`/${mediaType}/${recordId}/${slug(title)}`} className={`${buttonVariants({
                variant: 'link'
            })}`}>
                <h2 className={'w-[200px] overflow-hidden text-ellipsis whitespace-nowrap'}>
                    {title}
                </h2>
            </Link>
        </div>
    )
}
export default Bookmark
