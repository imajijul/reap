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
  const [mobileMenu, setMobileMenu] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { locale, messages, setLocale } = useI18n();

  const languages = [
    { code: "en", label: "EN" },
    { code: "bn", label: "বাংলা" },
    { code: "ar", label: "عربى" },
  ];

  return (
    <div className="sticky top-0 w-full h-16 bg-[#2F524D] z-50">
      <Wrapper className="h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-white cursor-pointer"
          >
            REAP
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center justify-center gap-6">
            {LinkData.map((link, i) => (
              <li key={i} className="cursor-pointer">
                <Link
                  href={link.href}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {messages[link.key]}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons + Language */}
          <div className="hidden lg:flex items-center gap-4">
            <Button className="bg-transparent text-white hover:bg-white/10 transition-colors">
              {messages.signIn}
            </Button>

            <Button className="bg-white text-black hover:bg-gray-200 transition-colors">
              {messages.bookDemo}
            </Button>

            {/* Language Dropdown */}
            <div className="relative">
              <Button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 px-3 py-1 border rounded bg-white text-black hover:bg-gray-100 transition-colors"
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
                      className={`w-full text-left px-3 py-2 hover:bg-gray-100 transition-colors ${
                        locale === lang.code ? "bg-black text-white" : ""
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Right Side */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Language */}
            <div className="relative">
              <Button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 px-2 py-1 border rounded bg-white text-black hover:bg-gray-100 transition-colors"
              >
                {languages.find((l) => l.code === locale)?.label}
                <ChevronDown size={14} />
              </Button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-lg z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLocale(lang.code as "en" | "bn" | "ar");
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 hover:bg-gray-100 transition-colors ${
                        locale === lang.code ? "bg-black text-white" : ""
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu */}
            <div className="cursor-pointer">
              <MobileMenu />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
