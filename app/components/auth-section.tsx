import React from 'react'
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {useAuth, UserButton} from "@clerk/nextjs";

interface AuthSectionProps {
    isMobile?: boolean;
}

const AuthSection = ({ isMobile = false }: AuthSectionProps) => {
    const {isSignedIn} = useAuth();

    return (
        <div className={isMobile ? 'flex flex-col gap-4' : 'flex items-center gap-2'}>
            {isSignedIn ? (
                <UserButton />
            ) : (
                <>
                    <Link
                        href={'/sign-up'}
                        className={buttonVariants({
                            variant: 'outline',
                            className: isMobile ? 'w-full' : ''
                        })}
                    >
                        Register
                    </Link>
                    <Link
                        href={'/sign-in'}
                        className={buttonVariants({
                            variant: isMobile ? 'default' : 'link',
                            className: isMobile ? 'w-full' : ''
                        })}
                    >
                        Login
                    </Link>
                </>
            )}
        </div>
    )
}

export default AuthSection;