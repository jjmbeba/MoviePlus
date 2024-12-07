import React from 'react'
import {buttonVariants} from "@/components/ui/button";
import { PlusCircle } from 'lucide-react';

const AddReviewButton = () => {
    return (
        <div className={buttonVariants({
            variant:'outline',
            className: 'text-sm sm:text-base py-1 px-2 sm:py-2 sm:px-4'
        })}>
            <PlusCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"/>
            Add review
        </div>
    )
}
export default AddReviewButton

