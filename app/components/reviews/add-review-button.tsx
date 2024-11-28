import React from 'react'
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";
import {PlusCircle} from "lucide-react";

const AddReviewButton = () => {
    const isUserSignedIn = false;
    return isUserSignedIn ? (
        <Button variant={'outline'}>
            <PlusCircle/>
            Add review
        </Button>
    ) : (
        <Link className={buttonVariants({
            variant: 'link'
        })} href={'/login'}>
            Sign in to add review
        </Link>
    )
}
export default AddReviewButton
