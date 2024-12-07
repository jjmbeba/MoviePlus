"use client";

import React from 'react'
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavLinkItem = ({route, text, onClick}: { route: string; text: string; onClick?: () => void }) => {
    const pathname = usePathname();
    const currentRoute = pathname.split('/')[1] ?? '/';

    return (
        <li className={`${currentRoute === route.slice(1) ? 'text-orange-600' : ''} w-full`}>
            <Link href={route} className="block py-2 md:py-0" onClick={onClick}>
                {text}
            </Link>
        </li>
    )
}
export default NavLinkItem

