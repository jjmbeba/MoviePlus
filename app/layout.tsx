import type {Metadata} from "next";
import "./globals.css";
import {Doto} from 'next/font/google'

export const metadata: Metadata = {
  title: "MoviePlus",
  description: "Home of great movie reviews",
};

const doto = Doto({subsets:['latin']});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${doto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
