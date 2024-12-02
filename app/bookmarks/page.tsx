import React from 'react'
import {Card, CardContent} from "@/components/ui/card";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {cn} from "@/lib/utils";
import {Filter} from "lucide-react";

const Page = () => {
    return (
        <div className={'mt-10'}>
            <div className={'flex items-center justify-between'}>
                <div className={'flex items-center justify-between'}>
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
            </div>
            <div className={'mt-8'}>
                <div className={'w-full grid grid-cols-5 gap-5'}>
                    {Array.from({length: 20}).map((_, index) => (
                        <div key={`item-${index}`}>
                            <div className="p-1">
                                <Card className={'relative'}>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">1</span>
                                    </CardContent>
                                    {/*<BookmarkButton  className={'absolute top-1 right-2'}/>*/}
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
            </div>
        </div>
    )
}


export default Page
