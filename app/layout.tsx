import type { Metadata } from "next";
import "./globals.css";
import { Doto } from 'next/font/google'
import Navbar from "@/app/components/navbar";
import { ThemeProvider } from "@/app/components/theme-provider";
import { TRPCProvider } from "@/trpc/client";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import QueryProvider from "@/app/providers/QueryProvider";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
    title: "MoviePlus",
    description: "Home of great movies reviews",
};

const doto = Doto({ subsets: ['latin'] });

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <QueryProvider>
            <ClerkProvider
                appearance={{
                    baseTheme: dark
                }}
            >
                <TRPCProvider>
                    <html lang="en" suppressHydrationWarning>
                    <body
                        className={`${doto.className} antialiased`}
                        suppressHydrationWarning
                    >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Navbar />
                        <main className="px-4 sm:px-6 md:px-8 lg:px-14 xl:px-20">
                            {children}
                        </main>
                    </ThemeProvider>
                    <Toaster richColors />
                    </body>
                    </html>
                </TRPCProvider>
            </ClerkProvider>
        </QueryProvider>
    );
}

