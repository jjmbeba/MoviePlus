import React from 'react'
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";
import {PlusCircle} from "lucide-react";

const AddReviewButton = () => {
    const isUserSignedIn = true;
    return isUserSignedIn ? (
        <div className={buttonVariants({
            variant:'outline'
        })}>
            <PlusCircle/>
            Add review
        </div>
    ) : (
        <Link className={buttonVariants({
            variant: 'link'
        })} href={'/login'}>
            Sign in to add review
        </Link>
    )
}
export default AddReviewButton
