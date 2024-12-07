import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import React from "react";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import { Filter } from 'lucide-react';

const BookmarksFilterMenu = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <div className={cn(buttonVariants({
                    variant: 'outline',
                    size: 'icon',
                    className: "w-8 h-8 sm:w-10 sm:h-10"
                }))}>
                    <Filter className="w-4 h-4 sm:w-5 sm:h-5"/>
                </div>
            </SheetTrigger>
            <SheetContent className="w-[280px] sm:w-[400px]">
                <SheetHeader>
                    <SheetTitle className="text-lg sm:text-xl">Filter Bookmarks</SheetTitle>
                    <SheetDescription className="text-sm sm:text-base">
                        Use the options below to filter your bookmarks.
                    </SheetDescription>
                </SheetHeader>
                {/* Add filter options here */}
            </SheetContent>
        </Sheet>
    )
}

export default BookmarksFilterMenu

