"use client";
import Image from "next/image";

import Container from "../global/Container";
import { ProcessData } from "@/constant/ProcessData";
import { useI18n } from "context/I18nContext";

// process
import enProcess from "@/locales/landing/en/process/process.json";
import bnProcess from "@/locales/landing/bn/process/process.json";
import arProcess from "@/locales/landing/ar/process/process.json";
import { textarea } from "motion/react-client";

const Process = () => {
  const { locale } = useI18n();

  const texts =
    locale === "bn" ? bnProcess : locale === "ar" ? arProcess : enProcess;

  return (
    <div className="py-20 bg-white">
      {/* Process section header */}
      <Container>
        <div className="text-center pb-10 sm:pb-16 flex flex-col items-center justify-center">
          <p className="text-gray-500 text-xs sm:text-sm font-semibold tracking-wider mb-4">
            PROCESS
          </p>
          <h1 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            How It Works Today
          </h1>
        </div>
      </Container>

      {/* Process cards with zigzag layout */}
      <Container>
        <div className="relative w-full py-20">
          {/* Cards Grid - Alternating Top/Bottom */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {/* Item 1 - TOP */}
            {ProcessData && ProcessData[0] && (
              <div className="flex justify-start">
                <div className="flex flex-col items-start w-full">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2D605A] text-white font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {texts[ProcessData[0].title as keyof typeof texts]}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {texts[ProcessData[0].description as keyof typeof texts]}
                  </p>
                </div>
              </div>
            )}

            {/* Item 2 - BOTTOM */}
            {ProcessData && ProcessData[1] && (
              <div className="flex justify-center md:mt-64">
                <div className="flex flex-col items-start w-full">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2D605A] text-white font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {texts[ProcessData[1].title as keyof typeof texts]}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {texts[ProcessData[1].description as keyof typeof texts]}
                  </p>
                </div>
              </div>
            )}

            {/* Item 3 - TOP */}
            {ProcessData && ProcessData[2] && (
              <div className="flex justify-center">
                <div className="flex flex-col items-start w-full">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2D605A] text-white font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {texts[ProcessData[2].title as keyof typeof texts]}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {texts[ProcessData[2].description as keyof typeof texts]}
                  </p>
                </div>
              </div>
            )}

            {/* Item 4 - BOTTOM */}
            {ProcessData && ProcessData[3] && (
              <div className="flex justify-end md:mt-64">
                <div className="flex flex-col items-start w-full">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2D605A] text-white font-bold mb-4">
                    4
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {texts[ProcessData[3].title as keyof typeof texts]}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {texts[ProcessData[3].description as keyof typeof texts]}
                  </p>
                </div>
              </div>
            )}

            {/* Additional items if more than 4 */}
            {ProcessData &&
              ProcessData.length > 4 &&
              ProcessData.slice(4).map((item, i) => {
                const isOdd = (i + 5) % 2 === 1;
                return (
                  <div key={i + 4} className={isOdd ? "md:mt-0" : "md:mt-64"}>
                    <div className="flex flex-col items-start">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2D605A] text-white font-bold mb-4">
                        {i + 5}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                        {texts[item.title as keyof typeof texts]}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {texts[item.description as keyof typeof texts]}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>

      {/* Divider */}
      <div className="flex flex-col items-center justify-center mt-24 sm:mt-32 mb-12 sm:mb-20">
        <div className="flex gap-1">
          <div className="w-2 h-4 bg-[#0F4E47] rotate-12"></div>
          <div className="w-2 h-4 bg-[#0F4E47] rotate-12"></div>
        </div>
      </div>

      {/* Bottom section */}
      <Container>
        {/* Bottom Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-3xl mx-auto text-gray-900 leading-tight">
            {texts.bottomTitle}
          </h2>
        </div>

        {/* Manager profile */}
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-300 overflow-hidden bg-white flex items-center justify-center">
            <Image
              width={56}
              height={56}
              src={"/profile.jpeg"}
              className={"w-full h-full object-cover"}
              alt="manager photo"
            />
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
              {texts.managerName}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mt-1">
              {texts.managerDesig}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Process;
