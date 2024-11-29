import React from 'react'
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {useAuth, UserButton} from "@clerk/nextjs";

const AuthSection = () => {
    const {isSignedIn} = useAuth();

    return (
        <div>
            {isSignedIn ? (
                <UserButton/>
                ) : (
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
            )}
        </div>
    )
}
export default AuthSection
