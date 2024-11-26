import type {Metadata} from "next";
import "./globals.css";
import {Doto} from 'next/font/google'
import Navbar from "@/app/components/navbar";
import {ThemeProvider} from "@/app/components/theme-provider";
import {TRPCProvider} from "@/trpc/client";

export const metadata: Metadata = {
    title: "MoviePlus",
    description: "Home of great movie reviews",
};

const doto = Doto({subsets: ['latin']});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <TRPCProvider>
            <html lang="en">
            <body
                className={`${doto.className} antialiased`}
            >
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <Navbar/>
                <div className={'px-20'}>
                    {children}
                </div>
            </ThemeProvider>
            </body>
            </html>
        </TRPCProvider>
    );
}
