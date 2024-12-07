import type {Metadata} from "next";
import "./globals.css";
import {Doto} from 'next/font/google'
import Navbar from "@/app/components/navbar";
import {ThemeProvider} from "@/app/components/theme-provider";
import {TRPCProvider} from "@/trpc/client";
import {ClerkProvider} from '@clerk/nextjs'
import {dark} from '@clerk/themes'
import QueryProvider from "@/app/providers/QueryProvider";
import {Toaster} from "@/components/ui/sonner"

export const metadata: Metadata = {
    title: "MoviePlus",
    description: "Home of great movies reviews",
};

const doto = Doto({subsets: ['latin']});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
       <QueryProvider>
           <ClerkProvider
               appearance={{
                   baseTheme:dark
               }}
           >
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
                       <div className={'px-14 lg:px-20'}>
                           {children}
                       </div>
                   </ThemeProvider>
                   <Toaster richColors />
                   </body>
                   </html>
               </TRPCProvider>
           </ClerkProvider>
       </QueryProvider>
    );
}
