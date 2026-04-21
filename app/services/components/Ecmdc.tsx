"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MdArrowOutward } from "react-icons/md";
import { fontAspenExtralight } from "../../fonts";

const Ecmdc = () => {
  const router = useRouter();

  return (
    <section className={`w-full overflow-hidden bg-white ${fontAspenExtralight}`}>
      <div className="w-full h-[250px] relative">
        <img
          src="/pictures/frans.jpg"
          alt="frans"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute left-[3%] top-0 w-[60%] h-full flex flex-col justify-center items-start px-4 md:px-6 lg:px-10 bg-[#1B3662]/80"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight">
           ECMDC at Davos 2026
          </h1>

          <p className="text-xs md:text-sm text-white mt-5">
            ECMDC leaders will join luminaries from business, academia, and civil
            society in Davos to explore how responsible innovation can unlock
            growth and build prosperity within planetary boundaries.
          </p>
        </div>
        <div className="absolute bottom-6 right-6">
          <div
            className="rounded-2xl px-4 md:px-6 py-2.5 flex justify-between items-center gap-2 md:gap-4 cursor-pointer hover:brightness-90 transition-all"
            style={{ backgroundColor: "#1B3662" }}
            onClick={() => router.push('/davos-2026')}
          >
            <span className="text-xs md:text-sm font-semibold text-white whitespace-nowrap">
              LEARN MORE →{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecmdc;
