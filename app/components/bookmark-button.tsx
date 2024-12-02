"use client";

import React from 'react'
import {Button} from "@/components/ui/button";
import {Bookmark, Loader} from "lucide-react";
import {cn} from "@/lib/utils";
import {trpc} from "@/trpc/client";
import {toast} from "sonner";

type Props = {
    className?: string;
    recordId: number;
    mediaType: string;
    posterPath: string;
    backdropPath: string;
    title:string;
}

const BookmarkButton = ({className, recordId, mediaType, posterPath, backdropPath, title}: Props) => {

    const {mutate: createBookmark, isPending} = trpc.bookmarks.createBookmark.useMutation({
        onSuccess: ({message}) => {
            toast.success(message);
        }
    })

    return (
        <Button onClick={() => createBookmark(
            {
                recordId,
                backdropPath,
                posterPath,
                mediaType,
                title
            }
        )} disabled={isPending} className={cn(className)} variant={'ghost'} size={'icon'}>
            {isPending ? <Loader className={'animate-spin'}/> : <Bookmark/>}
        </Button>
    )
}
export default BookmarkButton
