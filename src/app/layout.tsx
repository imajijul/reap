import "./globals.css";
import React from "react";

import { I18nProvider } from "../../context/I18nContext";
import { cn } from "@/lib/utils";

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
                    base.variable,
                    heading.variable,
                    subheading.variable,
                )}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
