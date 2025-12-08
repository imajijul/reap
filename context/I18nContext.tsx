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
      messages = { ...bnNavbar, ...bnHero };
      break;
    case "ar":
      messages = { ...arNavbar, ...arHero };
      break;
    default:
      messages = { ...enNavbar, ...enHero };
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
