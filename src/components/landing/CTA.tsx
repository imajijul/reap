import React from "react";
import Wrapper from "../global/Wrapper";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import Container from "../global/Container";

const CTA = () => {
  return (
    <div className="py-16 bg-[#2F524D] text-white max-sm:px-5">
      <div className="max-w-lg mx-auto flex flex-col items-center text-center gap-6">
        {/* Title + Description */}
        <Container delay={0.15}>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            See Reap in Action
          </h1>
          <p className="font-semibold text-gray-100 mt-4">
            Get a demo of our Medicaid case workflow and a preview of what's
            coming next.
          </p>
        </Container>

        {/* Email Input + Button */}
        <Container delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 w-full sm:min-w-[90%] bg-white rounded-lg p-2 sm:p-1 shadow-md">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="outline-none text-[#111] bg-transparent placeholder:font-semibold font-semibold px-3 py-2 w-full rounded-md"
            />
            <Button className="bg-[#2E625A] hover:bg-[#256855] text-white font-semibold px-6 py-2 rounded-md w-full sm:w-auto">
              Book a demo
            </Button>
          </div>
        </Container>

        {/* Features */}
        <Container delay={0.35}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-4 text-sm font-semibold text-gray-100">
            <p className="flex items-center gap-2">
              <Check className="w-5 h-5 text-teal-400" /> No credit card needed
            </p>
            <p className="flex items-center gap-2">
              <Check className="w-5 h-5 text-teal-400 " /> Cancel anytime
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CTA;
