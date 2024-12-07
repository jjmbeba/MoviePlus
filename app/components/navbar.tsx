"use client";

import React, {useState} from 'react'
import Logo from "@/app/components/logo";
import NavLinks from "@/app/components/nav-links";
import AuthSection from "@/app/components/auth-section";
import {redirect, usePathname} from "next/navigation";
import {EXCLUDED_NAV_ROUTES} from "@/constants";
import {Button} from "@/components/ui/button";
import {Bookmark, CornerDownLeft, Menu, X} from 'lucide-react';
import {clsx} from "clsx";
import Link from "next/link";
import {useAuth} from "@clerk/nextjs";
import {Input} from "@/components/ui/input";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";

const Navbar = () => {
    const pathname = usePathname();
    const {userId} = useAuth();
    const [search, setSearch] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


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
        <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-500">
            <div className="px-4 sm:px-6 lg:px-20 py-5 flex items-center justify-between">
                <Logo />
                <div className="hidden md:flex items-center gap-6">
                    <NavLinks />
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <div className="relative">
                        <Input
                            onKeyDown={onEnter}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search..."
                        />
                        <CornerDownLeft className="h-4 w-4 absolute top-1/2 -translate-y-1/2 right-3" />
                    </div>
                    {userId && (
                        <Button
                            className={clsx({
                                'text-orange-500': pathname === '/bookmarks'
                            })}
                            variant="link"
                            asChild
                        >
                            <Link href="/bookmarks">
                                <Bookmark />
                            </Link>
                        </Button>
                    )}
                    <div className="hidden md:block">
                        <AuthSection />
                    </div>
                </div>
                <div className="md:hidden">
                    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between mb-6">
                                    <Logo />
                                    <SheetTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                            <X className="h-6 w-6" />
                                            <span className="sr-only">Close menu</span>
                                        </Button>
                                    </SheetTrigger>
                                </div>
                                <div className="space-y-4">
                                    <div className="relative">
                                        <Input
                                            onKeyDown={onEnter}
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            placeholder="Search..."
                                        />
                                        <CornerDownLeft className="h-4 w-4 absolute top-1/2 -translate-y-1/2 right-3" />
                                    </div>
                                    <NavLinks onLinkClick={() => setMobileMenuOpen(false)} />
                                    {userId && (
                                        <Button
                                            className={clsx("w-full justify-start pl-0", {
                                                'text-orange-500': pathname === '/bookmarks'
                                            })}
                                            variant="ghost"
                                            asChild
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <Link href="/bookmarks">
                                                Bookmarks
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                                <div className="mt-auto">
                                    <AuthSection isMobile onAuthAction={() => setMobileMenuOpen(false)} />
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}
export default Navbar

