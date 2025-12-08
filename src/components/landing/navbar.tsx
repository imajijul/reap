"use client";
import Wrapper from "../global/Wrapper";
import Link from "next/link";

import { useState } from "react";
import { Button } from "../ui/button";
import MobileMenu from "./MobileMenu";
import { ChevronDown } from "lucide-react";

import { LinkData } from "@/constant/LinkData";
import { useI18n } from "../../../context/I18nContext";

const Navbar = () => {
  let [mobileMenu, setMobileMenu] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { locale, messages, setLocale } = useI18n();

  const languages = [
    { code: "en", label: "EN" },
    { code: "bn", label: "বাংলা" },
    { code: "ar", label: "عربى" },
  ];

  return (
    <div className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50">
      <Wrapper className="h-full">
        <div className="flex items-center justify-between h-full">
          {/* Desktop View */}
          <Link href={"/"} className="text-xl font-bold">
            REAP
          </Link>

          {/* nav links */}
          <ul className="hidden lg:flex items-center justify-center gap-4">
            {LinkData.map((link, i) => (
              <li key={i}>
                <Link href={link.href}>{messages[link.key]}</Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button className="bg-transparent text-primary hover:bg-transparent">
              {messages.signIn}
            </Button>
            <Button variant={"ghost"}> {messages.bookDemo}</Button>
            {/* Language Dropdown */}
            <div className="relative">
              <Button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center text-black gap-1 px-3 py-1 border rounded bg-white hover:bg-gray-100"
              >
                {languages.find((l) => l.code === locale)?.label}
                <ChevronDown size={16} />
              </Button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLocale(lang.code as "en" | "bn" | "ar");
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 hover:bg-gray-100 ${
                        locale === lang.code ? "bg-primary text-white" : ""
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <MobileMenu />
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
