import React from 'react'
import {RouterOutputs} from "@/trpc/routers/_app";
import Bookmark from "@/app/components/bookmarks/bookmark";
import { Ghost } from 'lucide-react';

type Props = {
    bookmarks: RouterOutputs['bookmarks']['getUserBookmarks']
}

const BookmarkList = ({bookmarks}: Props) => {
    return (
        <>
            {bookmarks.length > 0 ? (
                <div className="mt-6 sm:mt-8 md:mt-10 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
                    {bookmarks.map((bookmark) => (
                        <Bookmark key={bookmark.id} bookmark={bookmark}/>
                    ))}
                </div>
            ) : (
                <div className="mt-10 sm:mt-12 md:mt-16 pb-10 sm:pb-12 md:pb-16 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center sm:text-left">
                    <Ghost className="w-12 h-12 sm:w-16 sm:h-16"/>
                    <p className="text-sm sm:text-base">
                        Unfortunately, you have no bookmarks for this category.
                    </p>
                </div>
            )}
        </>
    )
}
export default BookmarkList

