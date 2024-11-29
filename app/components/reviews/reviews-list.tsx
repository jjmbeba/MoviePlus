import React from 'react'
import AddReviewButton from "@/app/components/reviews/add-review-button";
import StarRating from "@/app/components/reviews/star-rating";
import ReviewListItem from "@/app/components/reviews/review-list-item";

const ReviewsList = () => {
    return (
        <div className={'mt-10'}>
            <div className={'flex items-center justify-between'}>
                <h2 className={'font-bold text-2xl'}>
                    Reviews
                </h2>
                <AddReviewButton/>
            </div>
            {Array.from({length:5}).map((_,index) => (
                <ReviewListItem key={`review-${index}`} />
            ))}
        </div>
    )
}
export default ReviewsList
