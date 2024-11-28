import React from 'react'
import AddReviewButton from "@/app/components/reviews/add-review-button";

const ReviewsList = () => {
    return (
        <div className={'mt-10'}>
            <div className={'flex items-center justify-between'}>
                <h2 className={'font-bold text-2xl'}>
                    Reviews
                </h2>
                <AddReviewButton/>
            </div>
        </div>
    )
}
export default ReviewsList
