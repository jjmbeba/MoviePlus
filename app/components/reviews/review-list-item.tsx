import React from 'react'
import StarRating from "@/app/components/reviews/star-rating";

const ReviewListItem = () => {
    return (
        <div className={'mt-10'}>
            <div className={'flex items-center justify-between'}>
                <h3 className={'text-lg'}>
                    Review Title
                </h3>
                <StarRating rating={4}/>
            </div>
            <p className={'mt-6'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum id libero quaerat quibusdam
                quos sapiente? Aperiam dolorum facilis illum itaque molestias placeat provident! Fugiat iusto possimus
                rerum totam vitae?
            </p>
            <small>
                Reviewed by: <strong>User name</strong>
            </small>
        </div>
    )
}
export default ReviewListItem
