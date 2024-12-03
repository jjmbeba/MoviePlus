import React from 'react'
import {Input} from "@/components/ui/input";
import {CornerDownLeft} from "lucide-react";

const BookmarksSearch = () => {
    return (
        <div className={'max-w-64 relative'}>
            <Input placeholder={'Search bookmarks'} className={'pr-8'}/>
            <CornerDownLeft className={'h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2'}/>
        </div>
    )
}
export default BookmarksSearch
