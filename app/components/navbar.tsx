"use client";

import React from 'react'
import Logo from "@/app/components/logo";
import NavLinks from "@/app/components/nav-links";
import AuthSection from "@/app/components/auth-section";
import {usePathname} from "next/navigation";
import {EXCLUDED_NAV_ROUTES} from "@/constants";

const Navbar = () => {
    const pathname = usePathname();

    if(EXCLUDED_NAV_ROUTES.includes(pathname)) return null;

    return (
        <nav className={'sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 px-20 py-5 border-b border-gray-500 flex items-center justify-between'}>
            <Logo/>
            <NavLinks/>
            <AuthSection/>
        </nav>
    )
}
export default Navbar
