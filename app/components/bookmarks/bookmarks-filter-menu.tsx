import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import React from "react";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {Filter} from "lucide-react";

const BookmarksFilterMenu = () => {
    return (
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

    )
}

export default BookmarksFilterMenu