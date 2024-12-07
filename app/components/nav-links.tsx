import React from 'react'
import { NAVLINKS } from "@/constants";
import NavLinkItem from "@/app/components/nav-link-item";

const NavLinks = () => {
    return (
        <ul className="flex md:flex-row flex-col md:items-center gap-6">
            {NAVLINKS.map((navlink) => (
                <NavLinkItem key={navlink.route} {...navlink} />
            ))}
        </ul>
    )
}

export default NavLinks

