"use client";
import { useRouter } from "next/navigation";

const Exploremore = () => {
  const router = useRouter();

  return (
    <div className="bg-white pt-4 md:pt-6 lg:pt-10 px-4 md:px-6 lg:px-10 pb-12 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-light text-black mb-10">
        Explore More
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 max-w-full">
        <div
          className="w-[600px] h-[320px] rounded-3xl p-10 flex flex-col justify-between border border-gray-300"
          style={{ backgroundColor: "#1A3560" }}
        >
          <div>
            <p className="text-sm text-white tracking-wide mb-2">
            Next Section
            </p>

            <h1 className="text-3xl font-light text-white leading-tight">
              Our Latest Thinking on Artificial Intelligence
            </h1>
          </div>

          <button
            className="bg-transparent border border-white text-white px-5 py-2 rounded-xl text-base font-semibold w-fit flex items-center gap-2 ml-auto hover:bg-white hover:text-[#1A3560] transition-all"
            onClick={() => router.push('/ai-report')}
          >
            DOWNLOAD THE REPORT →
          </button>
        </div>
        <div className="w-[600px] flex flex-col gap-4">
          <div className="rounded-3xl h-[150px] flex border border-gray-300 overflow-hidden">
            <div className="w-[300px] h-[150px] bg-white p-6 flex flex-col justify-start">
              <p className="text-xs text-gray-900 font-semibold tracking-wide mb-2">
                ECMDC X
              </p>

            </div>
            <div className="w-[300px] h-[150px]">
              <img src="/pictures/meeting.jpg" alt="ECMDC" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="rounded-3xl h-[150px] flex border border-gray-300 overflow-hidden">
            <div className="w-[300px] h-[150px] bg-white p-6 flex flex-col justify-start">
              <p className="text-xs text-gray-900 font-semibold tracking-wide mb-2">
                Capabilities
              </p>
              <h2 className="text-lg text-gray-900 font-light leading-tight">
             Digital, Technology, and Data
              </h2>
            </div>
            <div className="w-[300px] h-[150px]">
              <img src="/pictures/laptop.jpg" alt="ECMDC X" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exploremore;
