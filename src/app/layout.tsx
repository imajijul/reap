import type { Metadata } from "next";
import "./globals.css";
import {Roboto} from "next/font/google"


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Reap",
  description: "Develop By flowentech",
};

import React from "react";
import { cn } from "../lib/utils";
import "./globals.css"
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased font-heading overflow-x-hidden !scrollbar-hide"
                )}
            >
                    
                    {children}
            </body>
        </html>
    );
};
