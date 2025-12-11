import "./globals.css";
import React from "react";

import { I18nProvider } from "../../context/I18nContext";
import { cn } from "@/lib/utils";
import { base } from "motion/react-client";

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
                  texts
                )}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
