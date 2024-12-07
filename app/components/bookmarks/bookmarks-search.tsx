import React from 'react'
import {Input} from "@/components/ui/input";
import { CornerDownLeft } from 'lucide-react';

type Props = {
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const BookmarksSearch = ({setSearch}: Props) => {
    return (
        <div className="w-full sm:w-64 relative">
            <Input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search bookmarks"
                className="pr-8"
            />
            <CornerDownLeft className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2"/>
        </div>
    )
}
export default BookmarksSearch

