import React from 'react'
import StarRating from "@/app/components/reviews/star-rating";

type Props = {
    id: number
    title: string
    rating: number
    body: string
    recordId: number
    mediaType: string
    userId: string
    userName:string
}

const ReviewListItem = ({title, body, rating, userName}: Props) => {
    console.log(title)
    return (
        <div className={'mt-10'}>
            <div className={'flex items-center justify-between'}>
                <h3 className={'text-lg'}>
                    {title}
                </h3>
                <StarRating rating={rating}/>
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
