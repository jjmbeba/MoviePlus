import React from 'react'
import BookmarksSearch from "@/app/components/bookmarks/bookmarks-search";
import BookmarkTabs from "@/app/components/bookmarks/bookmark-tabs";
import {trpc} from "@/trpc/server";

const Page = async () => {
    const bookmarks = await trpc.bookmarks.getUserBookmarks();

    return (
        <div className={'mt-10'}>
            <div className={'flex items-center justify-between w-full'}>
                <h2 className={'font-bold text-2xl'}>
                    Bookmarks
                </h2>
                <BookmarksSearch/>
            </div>
            <div className={'mt-8 w-full'}>
                <BookmarkTabs bookmarks={bookmarks}/>
            </div>
        </div>
    )
}


export default Page
