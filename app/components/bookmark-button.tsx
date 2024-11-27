import React from 'react'
import {Button} from "@/components/ui/button";
import {Bookmark} from "lucide-react";
import {cn} from "@/lib/utils";

type Props = {
    className?:string;
}

const BookmarkButton = ({className}:Props) => {
    return (
        <Button className={cn(className)} variant={'ghost'} size={'icon'}>
            <Bookmark/>
        </Button>
    )
}
export default BookmarkButton
