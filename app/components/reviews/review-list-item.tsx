import React from 'react'
import StarRating from "@/app/components/reviews/star-rating";
import {auth} from "@clerk/nextjs/server";
import ReviewActions from "@/app/components/reviews/review-actions";

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
        <div className={'mt-6 sm:mt-10'}>
            <div className={'flex flex-col sm:flex-row sm:items-center sm:justify-between'}>
                <h3 className={'text-base sm:text-lg font-semibold mb-2 sm:mb-0'}>
                    {title}
                </h3>
                <div className={'flex items-center gap-4 sm:gap-8'}>
                    <StarRating rating={rating}/>
                    {userId === currentUserId && (
                        <ReviewActions review={review}/>
                    )}
                </div>
            </div>
            <p className={'mt-3 sm:mt-6 text-sm sm:text-base'}>
                {body}
            </p>
            <small className="block mt-2 text-xs sm:text-sm">
                Reviewed by: <strong>{userName}</strong>
            </small>
        </div>
    )
}
export default ReviewListItem

