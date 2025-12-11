"use client";

import { CircleCheckBig, HandCoins, Shredder } from "lucide-react";
import Wrapper from "@/components/global/Wrapper";

const Introduce = () => {
  const IntroData = [
    {
      icon: (
        <CircleCheckBig
          className="w-6 h-6 sm:w-8 sm:h-8"
          style={{ color: "#2F524D" }}
        />
      ),
      title: "Contrary to popular belief, Lorem",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    },
    {
      icon: (
        <HandCoins
          className="w-6 h-6 sm:w-8 sm:h-8"
          style={{ color: "#2F524D" }}
        />
      ),
      title: "Contrary to popular belief, Lorem",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    },
    {
      icon: (
        <Shredder
          className="w-6 h-6 sm:w-8 sm:h-8"
          style={{ color: "#2F524D" }}
        />
      ),
      title: "Contrary to popular belief, Lorem",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    },
  ];

  return (
    <div className="py-16 sm:py-20">
      <Wrapper>
        {/* Section Title */}
        <div className="text-center pb-6 sm:pb-10 flex flex-col items-center justify-center">
          <p className="text-sm sm:text-base text-gray-600 font-semibold mb-2">
            Introducing our first module...
          </p>
          <h2 className="max-w-md text-xl sm:text-3xl font-semibold text-gray-900">
            AI powered medicaid case management
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 px-4 sm:px-0">
          {IntroData.map((item, i) => (
            <div
              key={i}
              className="px-2 sm:px-4 flex flex-col items-center text-center"
            >
              <div className="inline-block mb-2">{item.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Introduce;
