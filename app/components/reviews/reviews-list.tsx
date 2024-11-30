import React from 'react'
import ReviewListItem from "@/app/components/reviews/review-list-item";
import CreateReviewForm from "@/app/components/reviews/create-review-form";
import {trpc} from "@/trpc/server";

type Props = {
    recordId:number;
    mediaType:string;
}

const ReviewsList = async ({recordId, mediaType}:Props) => {
    const reviews = await trpc.reviews.getReviewsByRecordId({
        recordId,
        mediaType
    })

    return (
        <div className={'mt-10'}>
            <div className={'flex items-center justify-between'}>
                <h2 className={'font-bold text-2xl'}>
                    Reviews
                </h2>
                <CreateReviewForm recordId={recordId} mediaType={mediaType} />
            </div>
            {reviews.map((review) => (
                <ReviewListItem key={review.id} {...review} />
            ))}
        </div>
    )
}
export default ReviewsList
