"use client";

import React from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import BookmarkList from "@/app/components/bookmarks/bookmark-list";
import {RouterOutputs} from "@/trpc/routers/_app";

type Props = {
    bookmarks:RouterOutputs['bookmarks']['getUserBookmarks']
}

const BookmarkTabs = ({bookmarks}:Props) => {
    return (
        <Tabs defaultValue="all" className={'w-full'}>
            <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="movies">Movies</TabsTrigger>
                <TabsTrigger value="tv">Tv Series</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className={'w-full'}>
                <BookmarkList bookmarks={[...bookmarks]}/>
            </TabsContent>
            <TabsContent value="movies" className={'w-full'}>
                <BookmarkList bookmarks={[...bookmarks.filter((bookmark) => bookmark.mediaType === 'movie')]}/>
            </TabsContent>
            <TabsContent value="tv" className={'w-full'}>
                <BookmarkList bookmarks={[...bookmarks.filter((bookmark) => bookmark.mediaType === 'tv')]}/>
            </TabsContent>
        </Tabs>
    )
}
export default BookmarkTabs
