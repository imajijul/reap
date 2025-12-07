import { cn } from "@/lib/utils";
import "./globals.css";
import React from "react";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased font-heading overflow-x-hidden !scrollbar-hide",
                
                )}
            >
                 {children}
            </body>
        </html>
    );
};
