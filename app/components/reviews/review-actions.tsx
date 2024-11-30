"use client";

import React, {useState} from 'react'
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
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
import EditReviewForm from "@/app/components/reviews/edit-review-form";
import {RouterOutputs} from "@/trpc/routers/_app";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import DeleteReviewForm from "@/app/components/reviews/delete-review-form";

type Props = {
    review: RouterOutputs['reviews']['getReviewsByRecordId'][number]
}

const ReviewActions = ({review}: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <AlertDialog>
            <Dialog open={open} onOpenChange={setOpen}>
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
                        <AlertDialogTrigger asChild>
                            <DropdownMenuItem className={'text-red-500'}>Delete review</DropdownMenuItem>
                        </AlertDialogTrigger>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Review</DialogTitle>
                    </DialogHeader>
                    <EditReviewForm setOpen={setOpen} review={review}/>
                </DialogContent>
            </Dialog>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your review from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <DeleteReviewForm reviewId={review.id}/>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
export default ReviewActions
