"use client";

import React from 'react'
import Logo from "@/app/components/logo";
import NavLinks from "@/app/components/nav-links";
import AuthSection from "@/app/components/auth-section";
import {usePathname} from "next/navigation";
import {EXCLUDED_NAV_ROUTES} from "@/constants";
import {Button} from "@/components/ui/button";
import {Bookmark} from "lucide-react";
import {clsx} from "clsx";
import Link from "next/link";
import {useAuth} from "@clerk/nextjs";

const Navbar = () => {
    const pathname = usePathname();
    const {userId} = useAuth();

    if (EXCLUDED_NAV_ROUTES.includes(pathname)) return null;

    return (
        <nav
            className={'sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 px-20 py-5 border-b border-gray-500 flex items-center justify-between'}>
            <Logo/>
            <NavLinks/>
            <div className={'flex items-center gap-4'}>
                {userId && <Button className={clsx({
                    'text-orange-500': pathname === '/bookmarks'
                })} variant={'link'} asChild>
                    <Link href={'/bookmarks'}>
                        <Bookmark/>
                        Bookmarks
                    </Link>
                </Button>}
                <AuthSection/>
            </div>
        </nav>
    )
}
export default Navbar
