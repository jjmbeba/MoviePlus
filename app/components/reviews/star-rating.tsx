import React from 'react'
import {Star} from 'lucide-react'

type Props = {
    rating: number;
}

const StarRating = ({rating}: Props) => {
    const rem = 5 - rating;

    return (
        <div className={'flex'}>
            {Array.from({length: rating}).map((_, index) => (
                <Star key={`filled-${index}`} className={'text-yellow-400 fill-yellow-400'} />
            ))}
            {Array.from({length:rem}).map((_, index) => (
                <Star key={`blank-${index}`} />
            ))}
        </div>
    )
}
export default StarRating
