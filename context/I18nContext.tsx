"use client";
import { createContext, useContext, useState, ReactNode } from "react";

//navbar
import enNavbar from "@/locales/landing/en/navber/navber.json";
import bnNavbar from "@/locales/landing/bn/navber/navber.json";
import arNavbar from "@/locales/landing/ar/navber/navber.json";

//hero
import enHero from "@/locales/landing/en/hero/hero.json";
import bnHero from "@/locales/landing/bn/hero/hero.json";
import arHero from "@/locales/landing/ar/hero/hero.json";


// introduce
import enIntro from "@/locales/landing/en/introduce/introduce.json"
import bnIntro from "@/locales/landing/bn/introduce/introduce.json"
import arIntro from "@/locales/landing/ar/introduce/introduce.json"

// features
import enFeatures from "@/locales/landing/en/feature/feature.json"
import bnFeatures from "@/locales/landing/bn/feature/feature.json"
import arFeatures from "@/locales/landing/ar/feature/feature.json"

// process
import enProcess from "@/locales/landing/en/process/process.json"
import bnProcess from "@/locales/landing/bn/process/process.json"
import arProcess from "@/locales/landing/ar/process/process.json"

// overview
import enOverview from "@/locales/landing/en/overview/overview.json"
import bnOverview from "@/locales/landing/bn/overview/overview.json"
import arOverview from "@/locales/landing/ar/overview/overview.json"

// FIX: allow nested objects
type Messages = Record<string, any>;

interface I18nContextProps {
  locale: "en" | "bn" | "ar";
  messages: Messages;
  setLocale: (lang: "en" | "bn" | "ar") => void;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<"en" | "bn" | "ar">("en");

  let messages: Messages;

  switch (locale) {
    case "bn":
      messages = { ...bnNavbar, ...bnHero, ...bnIntro, ...bnFeatures, ...bnProcess, ...bnOverview };
      break;
    case "ar":
      messages = { ...arNavbar, ...arHero, ...arIntro, ...arFeatures, ...arProcess, ...arOverview };
      break;
    default:
      messages = { ...enNavbar, ...enHero, ...enIntro, ...enFeatures, ...enProcess, ...enOverview };
  }

  return (
    <I18nContext.Provider value={{ locale, messages, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
};
