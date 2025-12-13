'use client'
import Wrapper from "@/components/global/Wrapper";
import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { useI18n } from "context/I18nContext";

// footer
import enFooter from "@/locales/landing/en/footer/footer.json"
import bnFooter from "@/locales/landing/bn/footer/footer.json"
import arFooter from "@/locales/landing/ar/footer/footer.json"


const Footer = () => {

    const { locale } = useI18n();
  
    const texts =
      locale === "bn" ? bnFooter : locale === "ar" ? arFooter : enFooter;

  return (
    <footer className="w-full bg-[#0F1619] text-white py-12 sm:py-16">
      <Wrapper>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8 mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-gray-700/50">
          {/* Left Section - Company Info */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Reap
              </h1>
            </div>

            {/* Address */}
            <address className="not-italic text-gray-300 text-sm leading-relaxed mb-8">
              800 SE 4th Ave Suite 107,
              <br />
              Hallandale Beach, FL 33019
            </address>

            {/* HIPAA Compliant Badge */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-xs text-gray-400 font-semibold">
                HIPAA
                <br />
                COMPLIANT
              </span>
            </div>
          </div>

          {/* Right Section - Links & Contact */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            {/* Menu Links */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
                {texts.navTitle}
              </h3>
              <ul className="space-y-3">
                  {
                    texts.navMenu.map((nav, i)=>{
                      return(
                        <li key={i}><Link href={"#"}>{nav}</Link></li>
                      )
                    })
                  }
              </ul>
            </div>


            {/* Contact Info */}
            <div>
              {
              texts.contact.map((item,i)=>{
                return(

                  // email === mailto: phone === tel:
                  <div className="mb-6" key={i}>
                    <h4 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                     {item.label}</h4>
                    <a
                      href={ `${item.id==="phone"? "tel:": "mailto:"}${item.link}`}
                      className="text-gray-300 hover:text-white transition-colors text-sm">
                      {item.link}</a>
                  </div>
                )

              })
            }
            </div>
            
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-3">
            <p className="text-gray-400 text-sm">© Reap. {texts.copyRight}</p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Footer Links */}
          <ul className="flex flex-wrap gap-4 sm:gap-6">
            
            {
              texts.termsConditon.map((item,i)=>{
                return(
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                     {item}
                    </Link>
                  </li>
                )
              })
            }

          </ul>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
