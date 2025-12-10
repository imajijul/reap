"use client"
import Container from "../global/Container"
import { IntroData } from "@/constant/IntroData"
import { useI18n } from "context/I18nContext"

import enIntro from "@/locales/landing/en/introduce/introduce.json"
import bnIntro from "@/locales/landing/bn/introduce/introduce.json"
import arIntro from "@/locales/landing/ar/introduce/introduce.json"

const Introduce = () => {
    const {locale} = useI18n()    

    const texts = locale === "bn" ? bnIntro : locale=== "ar"? arIntro: enIntro

  return (
    <div  className="py-20">
       <Container>
         <div className="text-center pb-5 sm:pb-10 flex flex-col items-center justify-center">
                <p className="pb-3 text-[#111] font-semibold">{texts.preHeading}</p>
                <h1 className="max-w-md text-2xl sm:text-4xl font-semibold">{texts.pageTitle}</h1>
        </div>
       </Container>
        
        <div className="grid sm:grid-cols-3 px-10 gap-8 sm:gap-12">
            {
                IntroData && IntroData.map((item, i)=>{
                    return(
                        <Container key={i} delay={.1*i+.2}>
                            <div className="px-4 sm:px-10" key={i}>
                                <span className="inline-block text-[#1A3D64] pb-2 sm:pb-5">< item.icon /></span>
                                <h1 className="pb-2 sm:pb-3 text-xl font-semibold">{texts[item.title]}</h1>
                                <p className="text-gray-600">{texts[item.description]}</p>
                            </div>
                        </Container>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Introduce
