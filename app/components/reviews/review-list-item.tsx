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
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import EditReviewForm from "@/app/components/reviews/edit-review-form";

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

const ReviewListItem = async (review: Props) => {
    const {title, body, rating, userName, userId} = review;
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
                        <Dialog>
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
                                    <DialogTrigger asChild>
                                        <DropdownMenuItem>
                                            Edit review
                                        </DropdownMenuItem>
                                    </DialogTrigger>
                                    <DropdownMenuItem className={'text-red-500'}>Delete review</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Edit Review</DialogTitle>
                                </DialogHeader>
                                <EditReviewForm review={review}/>
                            </DialogContent>
                        </Dialog>
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
