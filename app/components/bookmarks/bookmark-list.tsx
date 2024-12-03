import React from 'react'
import {RouterOutputs} from "@/trpc/routers/_app";
import Bookmark from "@/app/components/bookmarks/bookmark";
import {Ghost} from "lucide-react";

type Props = {
    bookmarks: RouterOutputs['bookmarks']['getUserBookmarks']
}

const BookmarkList = ({bookmarks}: Props) => {
    return (
        <>
            {bookmarks.length > 0 ? (
                <div className={'mt-10 w-full grid grid-cols-5 gap-5'}>
                    {bookmarks.map((bookmark) => (
                        <Bookmark key={bookmark.id} bookmark={bookmark}/>
                    ))}
                </div>
            ) : (
                <div className={'mt-16 pb-16 flex items-center justify-center gap-5'}>
                    <Ghost className={'w-16 h-16'}/>
                    <p>
                        Unfortunately, there are no bookmarks for this category.
                    </p>
                </div>
            )}
        </>
    )
}
export default BookmarkList
