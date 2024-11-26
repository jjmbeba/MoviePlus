import React from 'react'
import Logo from "@/app/components/logo";
import NavLinks from "@/app/components/nav-links";
import AuthSection from "@/app/components/auth-section";

const Navbar = () => {
    return (
        <div className={'px-20 py-5 border border-red-600 flex items-center justify-between'}>
            <Logo/>
            <NavLinks/>
            <AuthSection/>
        </div>
    )
}
export default Navbar
