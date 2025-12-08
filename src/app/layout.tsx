import { cn } from "@/lib/utils";
import "./globals.css";
import React from "react";
import { cn } from "../lib/utils";
import { I18nProvider } from "../../context/I18nContext";

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
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
