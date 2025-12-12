import Wrapper from "@/components/global/Wrapper";
import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const Footer = () => {
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
                Menu
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    How it works
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              {/* Phone */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                  Phone
                </h4>
                <a
                  href="tel:+15186583200"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  518-658-3200
                </a>
              </div>

              {/* Email */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                  Email
                </h4>
                <a
                  href="mailto:contact@getreap.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  contact@getreap.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-3">
            <p className="text-gray-400 text-sm">© Reap. All rights reserved</p>
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
            <li>
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
