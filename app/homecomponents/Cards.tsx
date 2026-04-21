"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Cards = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white p-4 md:p-6 lg:p-10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 max-w-full">
        <div
          className="lg:col-span-3 h-[650px] rounded-3xl p-10 flex flex-col justify-end border border-gray-300 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/pictures/brick.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60 rounded-3xl"></div>
          <div className="relative z-10">
            <p className="text-sm text-white tracking-wide mb-2">
              ECMDC-WEF PROJECT: CEO CLIMATE LEADERS
            </p>

            <h1 className="text-5xl font-light text-white leading-tight mb-6">
              CEO Guide to Growth in the <br /> Green Economy
            </h1>

            <div className="flex justify-end">
              <button
                className="bg-transparent border border-white text-white px-5 py-2 rounded-2xl text-base font-semibold flex items-center gap-2 hover:bg-white hover:text-[#1A3560] transition-all"
                onClick={() => router.push('/green-economy-report')}
              >
                DOWNLOAD THE REPORT →
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div
            className="rounded-3xl p-10 h-[350px] flex flex-col justify-between border border-gray-300 bg-cover bg-center relative"
            style={{ backgroundImage: "url('/pictures/tatiana.jpg')" }}
          >
            <div className="absolute inset-0 bg-black opacity-60 rounded-3xl"></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <p className="text-xs text-white font-semibold tracking-wide mb-2">
                  BEING THE CEO
                </p>
                <h2 className="text-4xl text-white font-light leading-snug ">
                  Dr. Wayne <br /> Frederick on Leadership That Inspires Hope
                </h2>
              </div>

              <div className="flex justify-end">
                <button
                  className="bg-transparent border border-white text-white px-5 py-2 rounded-2xl text-base font-semibold flex items-center gap-2 hover:bg-white hover:text-[#1A3560] transition-all"
                  onClick={() => router.push('/leadership-interview')}
                >
                  READ THE INTERVIEW →
                </button>
              </div>
            </div>
          </div>
          <div
            className="rounded-2xl h-[284px] p-10 flex flex-col justify-between border border-gray-300 bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: "url('/pictures/modern.jpg')" }}
          >
            <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <p className="text-sm text-white tracking-wide mb-2">
                  SOLUTIONS FOR A BETTER TOMORROW
                </p>

                <h2 className="text-4xl font-light text-white leading-tight">
                  ECMDC X Product <br /> Library
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
