"use client";

import React, {useMemo, useState} from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import BookmarkList from "@/app/components/bookmarks/bookmark-list";
import BookmarksSearch from "@/app/components/bookmarks/bookmarks-search";
import {trpc} from "@/trpc/client";
import {TAB_OPTIONS} from "@/constants";
import { Loader } from 'lucide-react';

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
        <div className="w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4 sm:gap-0">
                <h2 className="font-bold text-xl sm:text-2xl">
                    Bookmarks
                </h2>
                <BookmarksSearch setSearch={setSearch}/>
            </div>
            <div className="mt-6 sm:mt-8 w-full">
                {isLoading ? (
                    <div className="mt-10 sm:mt-16 h-[50vh] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center sm:text-left">
                        <Loader className="w-8 h-8 animate-spin"/>
                        <p className="text-sm sm:text-base">
                            Hang on. Loading your bookmarks ;)
                        </p>
                    </div>
                ) : (
                    <Tabs value={activeTab} className="w-full">
                        <TabsList className="w-full sm:w-auto flex flex-wrap justify-start">
                            {TAB_OPTIONS.map(({value, text}) => (
                                <TabsTrigger
                                    key={value}
                                    onClick={() => setActiveTab(value)}
                                    value={value}
                                    className="flex-grow sm:flex-grow-0"
                                >
                                    {text}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {TAB_OPTIONS.map(({value}) => (
                            <TabsContent key={value} value={value} className="w-full">
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

