"use client";

import React, {useState} from 'react'
import Logo from "@/app/components/logo";
import NavLinks from "@/app/components/nav-links";
import AuthSection from "@/app/components/auth-section";
import {redirect, usePathname} from "next/navigation";
import {EXCLUDED_NAV_ROUTES} from "@/constants";
import {Button} from "@/components/ui/button";
import {Bookmark, CornerDownLeft} from "lucide-react";
import {clsx} from "clsx";
import Link from "next/link";
import {useAuth} from "@clerk/nextjs";
import {Input} from "@/components/ui/input";

const Navbar = () => {
    const pathname = usePathname();
    const {userId} = useAuth();
    const [search, setSearch] = useState("");

    if (EXCLUDED_NAV_ROUTES.includes(pathname)) return null;

    function onEnter(e: React.KeyboardEvent<HTMLInputElement>){
        if(e.key === 'Enter'){
            const params = new URLSearchParams({
                search_query:search.toLowerCase()
            });

            redirect(`/search?${params.toString()}`)
        }
    }

    return (
        <nav
            className={'sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 px-20 py-5 border-b border-gray-500 flex items-center justify-between'}>
            <Logo/>
            <NavLinks/>
            <div className={'flex items-center gap-4'}>
                <div className={'relative'}>
                    <Input onKeyDown={onEnter} value={search} onChange={(e) => setSearch(e.target.value)} placeholder={'Search...'} />
                    <CornerDownLeft className={'h-4 w-4 absolute top-1/2 -translate-y-1/2 right-3'}/>
                </div>
                {userId && <Button className={clsx({
                    'text-orange-500': pathname === '/bookmarks'
                })} variant={'link'} asChild>
                    <Link href={'/bookmarks'}>
                        <Bookmark/>
                        {/*Bookmarks*/}
                    </Link>
                </Button>}
                <AuthSection/>
            </div>
        </nav>
    )
}
export default Navbar
