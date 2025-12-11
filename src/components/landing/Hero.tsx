"use client";

import Wrapper from "../global/Wrapper";
import { Sparkle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useI18n } from "../../../context/I18nContext";
import Container from "../global/Container";

const Hero = () => {
  const { messages } = useI18n();

  return (
    <div className="relative bg-[#2F524D] h-full w-full overflow-hidden">
      {/* Hero Content */}
      <Wrapper>
        <div className="relative  z-10 flex flex-col items-center justify-center text-center pt-16 pb-8 px-4">
          {/* AI Badge */}
          <div className="bg-[#476260] flex items-center justify-center gap-2 text-[11px] sm:text-[12px] text-white font-bold px-2 py-1 mb-4 rounded-full">
            <Sparkle className="w-4 h-4" />
            <p>{messages.aiPowered}</p>
          </div>

          {/* Title */}
          <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading ">
            {messages.title}
          </h1>

          {/* Subtitle */}
          <p className="text-gray-200 font-medium max-w-2xl mb-6 text-sm sm:text-base">
            {messages.subtitle}
          </p>

          {/* Email + Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-8 bg-white rounded px-2 py-1">
            <input
              type="email"
              name="email"
              placeholder={messages.emailPlaceholder}
              className="outline-none bg-transparent placeholder:font-semibold font-medium px-2 py-1 rounded w-full sm:w-auto text-sm"
            />
            <Button className="bg-[#2E625A] text-white px-4 py-1 rounded font-medium text-sm">
              {messages.bookDemo}
            </Button>
          </div>

          {/* Partner Text */}
          <h4 className="text-white font-medium text-sm sm:text-base">
            {messages.partnerText}{" "}
            <Link href="/" className="font-semibold text-base sm:text-lg">
              {messages.partnerName}
            </Link>
          </h4>
        </div>
      </Wrapper>

      {/* Dashboard Image Card */}
      <div className=" w-full flex justify-center ">
        <div className="relative rounded-xl lg:rounded-[32px] border border-border p-2 backdrop-blur-lg max-w-6xl mx-auto">
          <div className="absolute top-1/8 left-1/2 -z-10 bg-gradient-to-r from-primary to-primary w-1/2 lg:w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[4rem] lg:blur-[10rem] animate-image-glow"></div>
          <div className="hidden lg:block absolute -top-1/8 left-1/2 -z-20 bg-primary w-1/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem] animate-image-glow"></div>

          <div className="rounded-lg lg:rounded-[22px] border border-border bg-background overflow-hidden">
            <Image
              src="/images/hero-image.png"
              alt="Reap Dashboard"
              width={1920}
              height={1080}
              className="rounded-lg lg:rounded-[20px]"
              priority
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
            />
          </div>
        </div>

        <div className="bg-gradient-to-t from-background to-transparent absolute bottom-0 inset-x-0 w-full h-1/2"></div>
      </div>
    </div>




  );
};

export default Hero;
