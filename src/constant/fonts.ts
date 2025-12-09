import { Instrument_Serif, Inter } from "next/font/google";

export const heading = Inter({
    subsets: ["latin"],
    variable: "--font-heading",
});

export const base = Inter({
    subsets: ["latin"],
    variable: "--font-base",
});

export const subheading = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-subheading",
});