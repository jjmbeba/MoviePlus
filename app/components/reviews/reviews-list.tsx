import React from 'react'
import ReviewListItem from "@/app/components/reviews/review-list-item";
import CreateReviewForm from "@/app/components/reviews/create-review-form";

type Props = {
    recordId:number;
    mediaType:string;
}

const ReviewsList = (props:Props) => {
    return (
        <div className={'mt-10'}>
            <div className={'flex items-center justify-between'}>
                <h2 className={'font-bold text-2xl'}>
                    Reviews
                </h2>
                <CreateReviewForm {...props} />
            </div>
            {Array.from({length:5}).map((_,index) => (
                <ReviewListItem key={`review-${index}`} />
            ))}
        </div>
    )
}
export default ReviewsList
