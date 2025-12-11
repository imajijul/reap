'use client'
import Wrapper from "@/components/global/Wrapper";
import Image from "next/image";

import Container from "../global/Container";
import { ProcessData } from "@/constant/ProcessData";
import { useI18n } from "context/I18nContext";

// process
import enProcess from "@/locales/landing/en/process/process.json"
import bnProcess from "@/locales/landing/bn/process/process.json"
import arProcess from "@/locales/landing/ar/process/process.json"

const Process = () => {
    const {locale} = useI18n()    

    const texts = locale === "bn" ? bnProcess : locale=== "ar"? arProcess: enProcess

  return (


    <div className="py-20">

      {/* Proceess section header */}
        <Container>
          <div className="text-center pb-5 sm:pb-10 flex flex-col items-center justify-center">
            <p className="text-[#111] font-semibold flex items-center justify-center gap-2 border border-[#111] rounded-full px-5 py-1 mb-5 text-sm">
              PROCESS
            </p>
            <h1 className="max-w-sm text-[25px] sm:text-3xl font-semibold">
              How It Works Today
            </h1>
          </div>
        </Container>

        {/* prcess card list */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 sm:py-10 gap-12">
            {ProcessData &&
              ProcessData.map((item, i) => {
                return (
                  <Container key={i} delay={.1*i+.2}>
                    <div className="px-4 sm:px-10 bg-gray-200/30 p-5 rounded" key={i}>
                    {/* need to add dotted wave line here */}
                    <span className="max-px-1 max-w-6 max-h-6 bg-[#2D605A] rounded-[50%] text-white flex justify-center">
                      {i + 1}
                    </span>
                    <h1 className="text-md font-semibold py-2 sm:py-3">{texts[item.title]}</h1>
                    <p className="text-gray-600">{texts[item.description]}</p>
                  </div>
                  </Container>
                );
            })}
          </div>



      {/* styled bar */}
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="flex gap-1">
          <div className="w-2 h-4 bg-[#0F4E47] rotate-12"></div>
          <div className="w-2 h-4 bg-[#0F4E47] rotate-12"></div>
        </div>

            {/*  */}
        <div>


          {/* bottomTitle */}

          <Container>
            <h1 className="text-center sm:text-4xl max-w-2xl font-semibold py-15">{texts.bottomTitle}</h1>
          </Container>
        </div>
        
        {/* manager profile */}
        <div className="flex flex-col items-center justify-center">
            <Container delay={.15} className="flex flex-col items-center justify-center">
               <div className="w-10 h-10 border border-gray-200/30 rounded-full bg-gray-600 flex items-center justify-center"><Image width={50} height={50} src={"/profile.jpeg"} className={"w-full h-full rounded-full"} alt="photo"/></div>
            </Container>

            <Container delay={.25} className="text-center">
              <h1 className="font-semibold mt-2">{texts.managerName}</h1>
            </Container>
            <Container delay={.35} className="text-center">
              <p>{texts.managerDesig}</p>
            </Container>
        </div>
      </div>
    </div>
  );
};

export default Process;
