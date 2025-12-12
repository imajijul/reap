"use client";
import Wrapper from "@/components/global/Wrapper";
import { IntroData } from "@/constant/IntroData";

import enIntro from "@/locales/landing/en/introduce/introduce.json";
import bnIntro from "@/locales/landing/bn/introduce/introduce.json";
import arIntro from "@/locales/landing/ar/introduce/introduce.json";
import { useI18n } from "context/I18nContext";

const Introduce = () => {
  const { locale } = useI18n();

  const texts = locale === "bn" ? bnIntro : locale === "ar" ? arIntro : enIntro;

  return (
    <div className="py-16 sm:py-24 bg-white">
      <Wrapper>
        {/* Section Header */}
        <div className="text-center pb-12 sm:pb-16 flex flex-col items-center justify-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-gray-500 font-semibold tracking-wider mb-4 uppercase">
            {texts.preHeading}
          </p>
          <h2 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {texts.pageTitle}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 px-4 sm:px-0">
          {IntroData.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="mb-6 sm:mb-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-gray-700 group-hover:text-[#2D605A] transition-colors duration-300">
                  <item.icon
                    className="w-8 h-8 sm:w-10 sm:h-10 stroke-current"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {texts[item.title as keyof typeof texts]}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {texts[item.description as keyof typeof texts]}
                </p>
              </div>

              {/* Hover underline effect */}
              <div className="mt-4 w-12 h-1 bg-[#2D605A] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Introduce;
