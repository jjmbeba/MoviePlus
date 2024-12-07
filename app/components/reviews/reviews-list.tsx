import React from 'react'
import ReviewListItem from "@/app/components/reviews/review-list-item";
import CreateReviewForm from "@/app/components/reviews/create-review-form";
import {trpc} from "@/trpc/server";
import {RouterOutputs} from "@/trpc/routers/_app";
import {auth} from "@clerk/nextjs/server";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import { Ghost } from 'lucide-react';

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
        <div className={'mt-8 sm:mt-10'}>
            <div className={'flex flex-col sm:flex-row sm:items-center sm:justify-between'}>
                <h2 className={'font-bold text-xl sm:text-2xl mb-4 sm:mb-0'}>
                    Reviews
                </h2>
                {userId ? !hasUserReviewed(userId, reviews) && (
                    <CreateReviewForm recordId={recordId} mediaType={mediaType}/>
                ) : (
                    <Link className={buttonVariants({
                        variant: 'link',
                        className: 'text-sm sm:text-base'
                    })} href={'/login'}>
                        Sign in to add review
                    </Link>
                )}
            </div>
            {reviews.length > 0 ? reviews.map((review) => (
                <ReviewListItem key={review.id} {...review} />
            )) : (
                <div className={'mt-12 sm:mt-16 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center sm:text-left'}>
                    <Ghost className={'w-12 h-12 sm:w-16 sm:h-16'}/>
                    <p className="text-sm sm:text-base">
                        Unfortunately, there are no reviews for this record.
                    </p>
                </div>
            )}
        </div>
    )
}
export default ReviewsList

