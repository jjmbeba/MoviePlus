"use client";

import React from 'react'
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavLinkItem = ({route, text}: { route: string; text: string; }) => {
    const pathname = usePathname();
    const currentRoute = pathname.split('/')[1] ?? '/';

    return (
        <li className={currentRoute === route.slice(1) ? 'text-orange-600' : ''}>
            <Link href={route}>
                {text}
            </Link>
        </li>
    )
}
export default NavLinkItem
