"use client";

import React, {useState} from 'react'
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {MoreVertical} from "lucide-react";
import EditReviewForm from "@/app/components/reviews/edit-review-form";
import {RouterOutputs} from "@/trpc/routers/_app";

type Props = {
    review: RouterOutputs['reviews']['getReviewsByRecordId'][number]
}

const ReviewActions = ({review}: Props) => {
    const [open, setOpen] = useState(false);

    return (
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
                    <DropdownMenuItem className={'text-red-500'}>Delete review</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Review</DialogTitle>
                </DialogHeader>
                <EditReviewForm setOpen={setOpen} review={review}/>
            </DialogContent>
        </Dialog>
    )
}
export default ReviewActions
