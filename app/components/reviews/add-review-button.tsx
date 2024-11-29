import React from 'react'
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {PlusCircle} from "lucide-react";
import {useAuth} from "@clerk/nextjs";

const AddReviewButton = () => {
    const {isSignedIn} = useAuth();
    return isSignedIn ? (
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
