"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoMdTimer } from "react-icons/io";
import { MdAdb } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";

const Oursolutions = () => {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
   <section className="w-full px-8 -mt-12 pb-20 bg-white">
      <h2 className="text-5xl font-light mt-0 mb-6">
        Our Solutions for AI in Business
      </h2>
      <h3 className="text-3xl font-light mb-4 mt-32">
        Our Solutions for AI in Business
      </h3>
      <p className="max-w-4xl text-lg text-gray-700 mb-8 leading-relaxed">
        <span className="underline">ECMDC X</span> offers a comprehensive library of
        products—backed by scientific rigor, extensive IP, and sophisticated AI
        components—to accelerate AI business transformation in support of our
        clients' top objectives.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl">
        <div
          className="bg-[#1f1f22] text-white p-8 min-h-[500px] flex flex-col relative overflow-hidden cursor-pointer"
          onMouseEnter={() => setHoveredCard(0)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => router.push('/ai-solutions')}
        >
          <div className="mb-10">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white rounded-md flex-shrink-0 flex items-center justify-center">
                <MdAdb color="black" size="1.875rem" />
              </div>
              <div className="-mt-1">
                <span className="text-sm uppercase tracking-wide whitespace-nowrap block">Retail AI</span>
                <p className="text-[10px] text-gray-400 -mt-1">by ECMDC</p>
              </div>
            </div>
          </div>
          <div className={`transition-all duration-500 ease-in-out ${
            hoveredCard === 0
              ? 'translate-y-0 opacity-100'
              : 'translate-y-[200px] opacity-0'
          }`}>
            <h3 className="text-3xl font-light mb-6">
              Retail AI by ECMDC X
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Using holistic, tailored retail intelligence software, Retail AI
              by ECMDC X unlocks critical advantages across the six vital
              components of the value chain.
            </p>
          </div>
        </div>
        <div
          className="bg-[#1f1f22] text-white p-8 min-h-[500px] flex flex-col relative overflow-hidden cursor-pointer"
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => router.push('/ai-solutions')}
        >
          <div className="mb-10">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white rounded-md flex-shrink-0 flex items-center justify-center">
                <IoMdTimer color="black" size="1.875rem" />
              </div>
              <div className="-mt-1">
                <span className="text-sm uppercase tracking-wide whitespace-nowrap block">Auto AI</span>
                <p className="text-[10px] text-gray-400 -mt-1">by ECMDC</p>
              </div>
            </div>
          </div>
          <div className={`transition-all duration-500 ease-in-out ${
            hoveredCard === 1
              ? 'translate-y-0 opacity-100'
              : 'translate-y-[200px] opacity-0'
          }`}>
            <h3 className="text-3xl font-light mb-6">
              Auto AI by ECMDC X
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Revolutionizing automotive industry with AI-driven solutions for manufacturing, supply chain optimization, and customer experience enhancement.
            </p>
          </div>
        </div>
        <div
          className="bg-[#1f1f22] text-white p-8 min-h-[500px] flex flex-col relative overflow-hidden cursor-pointer"
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => router.push('/ai-solutions')}
        >
          <div className="mb-10">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white rounded-md flex-shrink-0 flex items-center justify-center">
                <BsArrowRepeat color="black" size="1.875rem" />
              </div>
              <div className="-mt-1">
                <span className="text-sm uppercase tracking-wide whitespace-nowrap block">Supply Chain AI</span>
                <p className="text-[10px] text-gray-400 -mt-1">by ECMDC</p>
              </div>
            </div>
          </div>
          <div className={`transition-all duration-500 ease-in-out ${
            hoveredCard === 2
              ? 'translate-y-0 opacity-100'
              : 'translate-y-[200px] opacity-0'
          }`}>
            <h3 className="text-3xl font-light mb-6">
              Supply Chain AI by ECMDC X
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Transform supply chain operations with intelligent forecasting, dynamic optimization, and real-time visibility across your entire network.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div
          className="rounded-xl px-4 md:px-6 py-2.5 flex items-center gap-2 md:gap-4 cursor-pointer hover:brightness-90 transition-all w-fit"
          style={{ backgroundColor: "#1B3662" }}
          onClick={() => router.push('/solutions-library')}
        >
          <span className="text-xs md:text-sm font-semibold text-white whitespace-nowrap">
            EXPLORE THE LIBRARY →
          </span>
        </div>
      </div>
    </section>
  )
}

export default Oursolutions