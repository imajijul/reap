"use client";
import Wrapper from "@/components/global/Wrapper";
import { IntroData } from "@/constant/IntroData";

// introduce
import enIntro from "@/locales/landing/en/introduce/introduce.json"
import bnIntro from "@/locales/landing/bn/introduce/introduce.json"
import arIntro from "@/locales/landing/ar/introduce/introduce.json"
import { useI18n } from "context/I18nContext";

const Introduce = () => {
    const {locale} = useI18n()    

    const texts = locale === "bn" ? bnIntro : locale=== "ar"? arIntro: enIntro

  return (
    <div className="py-16 sm:py-20">
      <Wrapper>
        {/* Section Title */}
        <div className="text-center pb-6 sm:pb-10 flex flex-col items-center justify-center">
          <p className="text-sm sm:text-base text-gray-600 font-semibold mb-2">
            {texts.preHeading}
          </p>
          <h2 className="max-w-md text-xl sm:text-3xl font-semibold text-gray-900">
            {texts.pageTitle}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 px-4 sm:px-0">
          {IntroData.map((item, i) => (
            <div
              key={i}
              className="px-2 sm:px-4 flex flex-col items-center text-center"
            >
              <div className="inline-block mb-2">

                 < item.icon />

              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-1">
                {texts[item.title]}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {texts[item.description]}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Introduce;
