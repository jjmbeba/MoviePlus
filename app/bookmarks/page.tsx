import React from 'react'
import {buttonVariants} from "@/components/ui/button";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {cn} from "@/lib/utils";
import {Filter} from "lucide-react";
import {trpc} from "@/trpc/server";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import BookmarkList from "@/app/components/bookmarks/bookmark-list";

const Page = async () => {
    const bookmarks = await trpc.bookmarks.getUserBookmarks();

    return (
        <div className={'mt-10'}>
            <div className={'flex items-center justify-between w-full'}>
                <h2 className={'font-bold text-2xl'}>
                    Bookmarks
                </h2>
                <Sheet>
                    <SheetTrigger>
                        <div className={cn(buttonVariants({
                            variant: 'outline',
                            size: 'icon'
                        }))}>
                            <Filter/>
                        </div>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            <div className={'mt-8 w-full'}>
                <Tabs defaultValue="all" className={'w-full'}>
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="movies">Movies</TabsTrigger>
                        <TabsTrigger value="tv">Tv Series</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className={'w-full'}>
                        <BookmarkList bookmarks={bookmarks}/>
                    </TabsContent>
                    <TabsContent value="movies" className={'w-full'}>
                        <BookmarkList bookmarks={bookmarks.filter((bookmark) => bookmark.mediaType === 'movie')}/>
                    </TabsContent>
                    <TabsContent value="tv" className={'w-full'}>
                        <BookmarkList bookmarks={bookmarks.filter((bookmark) => bookmark.mediaType === 'tv')}/>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}


export default Page
