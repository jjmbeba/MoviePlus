import React from 'react'
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

const AuthSection = () => {
    return (
        <div>
            <Link href={'/register'} className={buttonVariants({
                variant: 'outline'
            })}>
                Register
            </Link>
            <Link href={'/login'} className={buttonVariants({
                variant: 'link'
            })}>
                Login
            </Link>
        </div>
    )
}
export default AuthSection
