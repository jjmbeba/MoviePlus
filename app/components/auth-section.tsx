import React from 'react'
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

const AuthSection = () => {
    return (
        <div>
            <Link href={'/sign-up'} className={buttonVariants({
                variant: 'outline'
            })}>
                Register
            </Link>
            <Link href={'/sign-in'} className={buttonVariants({
                variant: 'link'
            })}>
                Login
            </Link>
        </div>
    )
}
export default AuthSection
