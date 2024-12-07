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
import { MoreVertical } from 'lucide-react';
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
                            size: "icon",
                            className: "h-8 w-8 sm:h-9 sm:w-9"
                        }))}>
                            <MoreVertical className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel className="text-sm sm:text-base">Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DialogTrigger asChild>
                            <DropdownMenuItem className="text-sm sm:text-base cursor-pointer">
                                Edit review
                            </DropdownMenuItem>
                        </DialogTrigger>
                        <AlertDialogTrigger asChild>
                            <DropdownMenuItem className="text-sm sm:text-base cursor-pointer text-red-500">Delete review</DropdownMenuItem>
                        </AlertDialogTrigger>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="text-lg sm:text-xl">Edit Review</DialogTitle>
                    </DialogHeader>
                    <EditReviewForm setOpen={setOpen} review={review}/>
                </DialogContent>
            </Dialog>
            <AlertDialogContent className="max-w-[90vw] sm:max-w-[425px]">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-lg sm:text-xl">Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription className="text-sm sm:text-base">
                        This action cannot be undone. This will permanently delete your review from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="sm:space-x-2">
                    <AlertDialogCancel className="mb-2 sm:mb-0">Cancel</AlertDialogCancel>
                    <DeleteReviewForm reviewId={review.id}/>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
export default ReviewActions

