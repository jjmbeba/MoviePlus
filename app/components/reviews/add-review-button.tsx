import React from 'react'
import {buttonVariants} from "@/components/ui/button";
import {PlusCircle} from "lucide-react";

const AddReviewButton = () => {
    return (
        <div className={buttonVariants({
            variant:'outline'
        })}>
            <PlusCircle/>
            Add review
        </div>
    )
}
export default AddReviewButton
