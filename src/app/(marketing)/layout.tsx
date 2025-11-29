import type { Metadata } from "next";
import Footer from "@/src/components/landing/Footer";
import Navbar from "@/src/components/landing/Navbar";
import {Roboto} from "next/font/google"



const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Reap",
  description: "Develop By flowentech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      > 
        <Navbar/>
        <main className="min-h-screen">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
