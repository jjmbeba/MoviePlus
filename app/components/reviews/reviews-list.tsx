import React from 'react'
import ReviewListItem from "@/app/components/reviews/review-list-item";
import CreateReviewForm from "@/app/components/reviews/create-review-form";
import {trpc} from "@/trpc/server";
import {RouterOutputs} from "@/trpc/routers/_app";
import {auth} from "@clerk/nextjs/server";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {Ghost} from "lucide-react";

type Props = {
    recordId: number;
    mediaType: string;
}

const ReviewsList = async ({recordId, mediaType}: Props) => {
    const reviews = await trpc.reviews.getReviewsByRecordId({
        recordId,
        mediaType
    });
    const {userId} = await auth();

    function hasUserReviewed(userId: string, reviews: RouterOutputs['reviews']['getReviewsByRecordId']) {
        return reviews.some((review) => review.userId === userId);
    }

    return (
        <div className={'mt-10'}>
            <div className={'flex items-center justify-between'}>
                <h2 className={'font-bold text-2xl'}>
                    Reviews
                </h2>
                {userId ? !hasUserReviewed(userId, reviews) && (
                    <CreateReviewForm recordId={recordId} mediaType={mediaType}/>) : (
                    <Link className={buttonVariants({
                        variant: 'link'
                    })} href={'/login'}>
                        Sign in to add review
                    </Link>
                )}

            </div>
            {reviews.length > 0 ? reviews.map((review) => (
                <ReviewListItem key={review.id} {...review} />
            )) : (
                <div className={'mt-16 pb-16 flex items-center justify-center gap-5'}>
                    <Ghost className={'w-16 h-16'}/>
                    <p>
                        Unfortunately, there are no reviews for this record.
                    </p>
                </div>
            )}
        </div>
    )
}
export default ReviewsList
