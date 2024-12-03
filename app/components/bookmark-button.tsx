"use client";

import React, {useState} from 'react'
import {Button} from "@/components/ui/button";
import {Bookmark, Loader} from "lucide-react";
import {cn} from "@/lib/utils";
import {trpc} from "@/trpc/client";
import {toast} from "sonner";
import {clsx} from "clsx";
import {useRouter} from "next/navigation";

type Props = {
    className?: string;
    recordId: number;
    mediaType: string;
    posterPath: string;
    backdropPath: string;
    title: string;
}

const BookmarkButton = ({className, recordId, mediaType, posterPath, backdropPath, title}: Props) => {
    const router = useRouter();
    const {data} = trpc.bookmarks.isBookmarked.useQuery({
        mediaType,
        recordId
    });

    const [isBookmarked, setIsBookmarked] = useState(data);

    const {mutate: createBookmark, isPending} = trpc.bookmarks.createBookmark.useMutation({
        onSuccess: ({message}) => {
            toast.success(message);
            router.refresh();
            setIsBookmarked((prev) => !prev);
        }
    });

    console.log(data)

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
            {isPending ? <Loader className={'animate-spin'}/> : <Bookmark className={cn(clsx({
                'fill-yellow-500  text-yellow-500': isBookmarked
            }))}/>}
        </Button>
    )
}
export default BookmarkButton
