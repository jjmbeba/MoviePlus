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
        <div className={'mt-10'}>
            <div className={'flex items-center justify-between'}>
                <h3 className={'text-lg'}>
                    {title}
                </h3>
                <div className={'flex items-center gap-8'}>
                    <StarRating rating={rating}/>
                    {userId === currentUserId && (
                        <ReviewActions review={review}/>
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
