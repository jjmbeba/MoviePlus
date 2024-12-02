import React from 'react'
import {trpc} from "@/trpc/server";
import CardList from "@/app/components/card-list";
import {Card, CardContent} from "@/components/ui/card";
import BookmarkButton from "@/app/components/bookmark-button";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import BookmarksFilterMenu from "@/app/components/bookmarks/bookmarks-filter-menu";

const Page = async () => {
    const bookmarks = await trpc.bookmarks.getUserBookmarks();
    console.log(bookmarks)

    return (
        <div className={'mt-10'}>
            <CardList title={'Bookmarks'} customHeaderElement={<BookmarksFilterMenu/>}>
                <div className={'w-full grid grid-cols-5 gap-5'}>
                    {Array.from({length: 20}).map((_, index) => (
                        <div key={`item-${index}`}>
                            <div className="p-1">
                                <Card className={'relative'}>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">1</span>
                                    </CardContent>
                                    <BookmarkButton className={'absolute top-1 right-2'}/>
                                </Card>
                            </div>
                            <Link href={`/`} className={`${buttonVariants({
                                variant: 'link'
                            })}`}>
                                <h2 className={'w-[200px] overflow-hidden text-ellipsis whitespace-nowrap'}>
                                    Title goes here
                                </h2>
                            </Link>
                        </div>
                    ))}
                </div>
            </CardList>
        </div>
    )
}


export default Page
