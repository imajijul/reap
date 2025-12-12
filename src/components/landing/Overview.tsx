"use client";
import React from "react";
import Container from "../global/Container";

// overview
import enOverview from "@/locales/landing/en/overview/overview.json";
import bnOverview from "@/locales/landing/bn/overview/overview.json";
import arOverview from "@/locales/landing/ar/overview/overview.json";
import { OverviewData } from "@/constant/OverviewData";
import { useI18n } from "context/I18nContext";

const Overview = () => {
  const { locale } = useI18n();

  const texts =
    locale === "bn" ? bnOverview : locale === "ar" ? arOverview : enOverview;

  return (
    <div className="w-full py-10 sm:py-20 bg-gray-200/50">
      <div className="grid sm:grid-cols-3 gap-3 justify-items-center">
        {OverviewData.map((item, i) => (
          <div key={i}>
            <Container delay={0.1 * i + 0.2}>
              <h1 className="text-5xl font-bold">
                {texts[item.title as keyof typeof texts]}
              </h1>
              <p>{texts[item.description as keyof typeof texts]}</p>
            </Container>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
