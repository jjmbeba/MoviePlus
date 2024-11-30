import React from 'react'
import StarRating from "@/app/components/reviews/star-rating";
import {auth} from "@clerk/nextjs/server";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {MoreVertical} from "lucide-react";

type Props = {
    id: number
    title: string
    rating: number
    body: string
    recordId: number
    mediaType: string
    userId: string
    userName: string
}

const ReviewListItem = async ({title, body, rating, userName, userId}: Props) => {
    const {userId: currentUserId} = await auth();
    return (
        <div className={'mt-10'}>
            <div className={'flex items-center justify-between'}>
                <h3 className={'text-lg'}>
                    {title}
                </h3>
                <div className={'flex items-center gap-8'}>
                    <StarRating rating={rating}/>
                    {userId === currentUserId && (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div className={cn(buttonVariants({
                                    variant: "ghost",
                                    size: "icon"
                                }))}>
                                    <MoreVertical/>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem>Edit review</DropdownMenuItem>
                                <DropdownMenuItem className={'text-red-500'}>Delete review</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    )}
                </div>
            </div>
            <p className={'mt-6'}>
                {body}
            </p>
            <small>
                Reviewed by: <strong>{userName}</strong>
            </small>
        </div>
    )
}
export default ReviewListItem
