"use client";

import React, {useMemo, useState} from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import BookmarkList from "@/app/components/bookmarks/bookmark-list";
import BookmarksSearch from "@/app/components/bookmarks/bookmarks-search";
import {trpc} from "@/trpc/client";
import {TAB_OPTIONS} from "@/constants";
import {Loader} from "lucide-react";

const BookmarkTabs = () => {
    const {data: bookmarks, isLoading} = trpc.bookmarks.getUserBookmarks.useQuery();
    const [search, setSearch] = useState('');
    const [activeTab, setActiveTab] = useState('all');

    const filteredBookmarks = useMemo(() => {
        return bookmarks?.filter((bookmark) => {
            if (activeTab === 'all') {
                return bookmark.title.toLowerCase().includes(search.toLowerCase())
            }

            return bookmark.mediaType === activeTab && bookmark.title.toLowerCase().includes(search.toLowerCase())
        })
    }, [search, bookmarks, activeTab]);

    return (
        <div>
            <div className={'flex items-center justify-between w-full'}>
                <h2 className={'font-bold text-2xl'}>
                    Bookmarks
                </h2>
                <BookmarksSearch setSearch={setSearch}/>
            </div>
            <div className={'mt-8 w-full'}>
                {isLoading ? (
                    <div className={'mt-16 h-[50vh] flex items-center justify-center gap-5'}>
                        <Loader className={'w-8 h-8 animate-spin'}/>
                        <p>
                            Hang on. Loading your bookmarks ;)
                        </p>
                    </div>
                ) : (
                    <Tabs value={activeTab} className={'w-full'}>
                        <TabsList>
                            {TAB_OPTIONS.map(({value, text}) => (
                                <TabsTrigger key={value} onClick={() => setActiveTab(value)}
                                             value={value}>{text}</TabsTrigger>
                            ))}
                        </TabsList>
                        {TAB_OPTIONS.map(({value}) => (
                            <TabsContent key={value} value={value} className={'w-full'}>
                                <BookmarkList bookmarks={filteredBookmarks ?? []}/>
                            </TabsContent>
                        ))}
                    </Tabs>
                )}
            </div>
        </div>
    )
}
export default BookmarkTabs
