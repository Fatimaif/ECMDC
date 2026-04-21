"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Ourai = () => {
  const router = useRouter();

  return (
    <section className="w-full bg-white px-4 md:px-10 pt-20 pb-8 flex flex-col items-center">
    
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-light text-[#1a1a1a] leading-tight text-center">
      Our AI and GenAI Collaborations
      </h1>
     
      <p className="mt-4 mb-0 text-sm md:text-base text-[#1a1a1a] leading-relaxed max-w-[80%] text-center">
        ECMDC is more than just a strategic consultant. Our clients benefit from
        our global ecosystem of AI and GenAI collaborations, including those
        with leading tech companies like AWS, Google, IBM, Microsoft,
        Salesforce, and SAP—and with AI-centered enterprises such as OpenAI,
        Anthropic, Articul8, LangChain, and Palantir. This ecosystem provides
        best-in-class GenAI enablement that ensures our clients ability to
        maximize investments and stay ahead. Working together, we deliver
        unprecedented value across four critical transformation pillars:
        optimizing existing technology, reshaping business functions, inventing
        new business opportunities, and reimagining entire organizations. And
        with ECMDC X, our in-house design-and-build capability, we remain at the
        forefront of technology, offering practical solutions to companies that
        seek to transform their business with AI and develop customized,
        industrial-grade platforms.
      </p>
            <div className="mt-4">
        <div
          className="rounded-2xl px-4 md:px-6 py-2.5 flex items-center gap-2 md:gap-4 cursor-pointer hover:brightness-90 transition-all w-fit"
          style={{ backgroundColor: "#1B3662" }}
          onClick={() => router.push('/ai-collaborations')}
        >
          <span className="text-xs md:text-sm font-semibold text-white whitespace-nowrap">
            LEARN MORE →
          </span>
        </div>
      </div>
    </section>
  );
};

export default Ourai;
