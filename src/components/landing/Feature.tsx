"use client";
import { CheckCircle, Users, PenLine, Plus, Send } from "lucide-react";
import { useState } from "react";
import Container from "../global/Container";
import { useI18n } from "context/I18nContext";

// features
import enFeatures from "@/locales/landing/en/feature/feature.json";
import bnFeatures from "@/locales/landing/bn/feature/feature.json";
import arFeatures from "@/locales/landing/ar/feature/feature.json";

const Feature = () => {
  const [message, setMessage] = useState("");
  const { locale } = useI18n();

  const texts =
    locale === "bn" ? bnFeatures : locale === "ar" ? arFeatures : enFeatures;

  return (
    <div className="min-h-screen p-4 md:p-12">
      {/* feature header */}
      <Container>
        <div className="text-center pb-6 sm:pb-12 flex flex-col items-center justify-center">
          {/* Pre-heading badge */}
          <div className="inline-flex items-center justify-center gap-2 bg-[#476260] text-white font-bold text-[11px] sm:text-[12px] px-3 py-1 rounded-full mb-4">
            <PenLine className="w-4 h-4" />
            {texts.preHeading}
          </div>

          {/* Page title */}
          <h1 className="max-w-md text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {texts.pageTitle}
          </h1>
        </div>
      </Container>

      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Left Panel */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              {/* Green Header Box */}
              <div className="bg-teal-700 text-white rounded-xl p-5 mb-8 flex items-start gap-4 shadow-md hover:shadow-lg transition-shadow duration-200">
                {/* Icon */}
                <div className=" flex items-center justify-center w-10 h-10 bg-teal-800 rounded-full">
                  <Plus className="w-5 h-5 text-white" />
                </div>

                {/* Text */}
                <div>
                  <p className="font-semibold text-sm">
                    {texts.greenHeaderTitle}
                  </p>
                  <p className="text-xs mt-1 leading-relaxed opacity-95">
                    {texts.greenHeaderDesc}
                  </p>
                </div>
              </div>

              {/* Chat Content */}
              <div className="mb-8">
                <p className="text-gray-500 text-sm mb-6">
                  {texts.chatReceived}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                  {texts.chatHeading}
                </h1>
                <p className="text-gray-600 text-base font-medium">
                  {texts.chatDesc}
                </p>
              </div>

              {/* Input Area */}
              <div className="flex gap-3 mt-8">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={texts.inputPlaceholder}
                  className="flex-1 px-4 py-3 bg-stone-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white"
                />
                <button className="bg-teal-700 hover:bg-teal-800 text-white w-12 h-12 rounded-full flex items-center justify-center transition ">
                  <Send className="w-5 h-5" />
                </button>
                <button className="bg-stone-200 hover:bg-stone-300 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center transition">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.225m0-4.761a2.5 2.5 0 013.536 3.536l-1.225 1.225m0 0a2.5 2.5 0 01-3.536 0m0 0l1.225-1.225"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="mb-8">
                <input
                  type="text"
                  placeholder={texts.searchPlaceholder}
                  className="w-full px-4 py-3 bg-stone-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white text-gray-400"
                />
              </div>

              {/* Forms Status Card */}
              <div className="bg-white border-2 border-gray-100 rounded-xl p-4 md:p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-bold text-sm">
                      {texts.signedForms}
                    </span>
                  </div>
                  <span className="text-red-500 text-sm font-semibold">
                    23/04
                  </span>
                </div>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full bg-teal-600"
                    style={{ width: "96%" }}
                  ></div>
                </div>

                <div>
                  <p className="text-gray-600 text-xs font-semibold mb-2">
                    {texts.progressLevel}
                  </p>
                  <div className="h-3 bg-gray-200 rounded-full"></div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                {texts.trackTitle}
              </h2>
              <p className="text-gray-600 text-base">{texts.trackDesc}</p>
            </div>
          </div>
        </div>

        {/*  Cards 3*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="p-6 md:p-8 h-full flex flex-col">
              <div className="mb-6 flex-1">
                <div className="h-40  from-gray-100 to-gray-50 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-end p-3">
                    <div className="w-full space-y-2">
                      <div className="h-2 bg-teal-600 rounded-full w-4/5"></div>
                      <div className="h-2 bg-gray-300 rounded-full w-3/4"></div>
                      <div className="h-2 bg-gray-300 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{texts.card1Title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {texts.card1Desc}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="p-6 md:p-8 h-full flex flex-col">
              <div className="mb-6 flex-1 space-y-3">
                <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <div className=" mt-1">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 font-medium">
                      {texts.card2Timeline1Date}
                    </p>
                    <p className="font-bold text-sm text-gray-900">
                      {texts.card2Timeline1Title}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 bg-stone-50 rounded-lg border border-gray-200">
                  <div className=" mt-1">
                    <div className="w-5 h-5 border-2 border-teal-300 rounded-full"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 font-medium">
                      {texts.card2Timeline2Date}
                    </p>
                    <p className="font-bold text-sm text-gray-900">
                      {texts.card2Timeline2Title}
                    </p>
                    <p className="text-xs text-teal-600 mt-1 font-semibold">
                      {texts.card2Timeline2Desc}
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{texts.card2Title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {texts.card2Desc}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition relative p-6 md:p-8">
            {/* Left button */}
            <div className="absolute top-6 left-6">
              <button className="flex items-center gap-2 bg-teal-700 text-white px-4 py-2 rounded-full font-bold text-xs">
                <img
                  src="/images/man1.jpg"
                  alt="Avatar 1"
                  className="w-6 h-6 rounded-full"
                />
                <span>{texts.avatar1}</span>
              </button>
            </div>

            {/* Right button */}
            <div className="absolute top-6 right-6">
              <button className="flex items-center gap-2 bg-teal-700 text-white px-4 py-2 rounded-full font-bold text-xs">
                <img
                  src="/images/man2.jpg"
                  alt="Avatar 2"
                  className="w-6 h-6 rounded-full"
                />
                <span>{texts.avatar2}</span>
              </button>
            </div>

            {/* Bottom button above Users icon */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-36">
              <button className="flex items-center gap-2 bg-teal-700 text-white px-4 py-2 rounded-full font-bold text-xs">
                <img
                  src="/images/women1.jpg"
                  alt="Avatar 3"
                  className="w-6 h-6 rounded-full"
                />
                <span>{texts.avatar3}</span>
              </button>
            </div>

            {/* Main center Users icon */}
            <div className="flex justify-center items-center h-78 ">
              <div className="w-15 h-15 bg-teal-700 rounded-full flex items-center justify-center shadow-lg">
                <Users className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Card content */}
            <h3 className="text-lg font-bold mb-2">{texts.card3Title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {texts.card3Desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
