"use client";
import { useRouter } from "next/navigation";
import { MdArrowOutward } from "react-icons/md";
import { fontAspenExtralight } from "../fonts";

const Career = () => {
  const router = useRouter();

  return (
    <section className={`w-full flex flex-col md:flex-row mt-20 overflow-hidden ${fontAspenExtralight}`}>
      <div className="w-full md:w-1/2 h-[450px] bg-[#F1EEEA] flex flex-col justify-center items-start px-4 md:px-6 lg:px-10">
        <p className="text-sm font-bold tracking-wide text-gray-900 mb-3 mt-4">
          ECMDC CAREERS
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
          Go Beyond the Expected
        </h1>

        <p className="text-base md:text-lg text-gray-700 mt-5">
          We are dedicated to helping our clients do amazing things <br/> and
          unlocking the potential of those who advance the world. Join us, and
          you can too.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-10 w-full max-w-full">
          <div
            className="border border-black rounded-2xl px-4 md:px-6 py-2.5 flex justify-between items-center gap-2 md:gap-4 bg-white cursor-pointer hover:bg-[#1B3662] hover:border-transparent transition-all group"
            onClick={() => router.push('/careers')}
          >
            <span className="text-xs md:text-sm font-semibold text-black group-hover:text-white whitespace-nowrap transition-all">EXPLORE ECMDC CAREERS</span>
            <span className="text-gray-600 group-hover:text-white transition-all">
              <MdArrowOutward size={18} />
            </span>
          </div>
          <div
            className="rounded-2xl px-4 md:px-6 py-2.5 flex justify-between items-center gap-2 md:gap-4 cursor-pointer hover:brightness-90 transition-all"
            style={{ backgroundColor: "#1B3662" }}
            onClick={() => router.push('/careers/apply')}
          >
            <span className="text-xs md:text-sm font-semibold text-white whitespace-nowrap">APPLY TODAY</span>
            <MdArrowOutward color="#FFFFFF" size={18} />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[450px]">
        <img
          src="/pictures/troll.jpg"
          alt="troll"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Career;
