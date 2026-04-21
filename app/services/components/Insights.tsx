import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Insights = () => {
  return (
    <section className="w-full bg-[#f5f3ee] py-20">
      <div className="w-full px-6 mb-14 flex flex-col items-center">
        <h2 className="text-5xl font-light text-gray-900 max-w-3xl leading-tight text-center">
          Our Clients&apos; Success in Artificial Intelligence
        </h2>

        <div className="mt-6 w-full text-center">
          <a
            href="#"
            className="text-sm font-semibold tracking-wide underline underline-offset-4"
          >
            FIND MORE OF OUR AI CLIENT WORK
          </a>
        </div>
      </div>
      <div className="w-full px-6 flex justify-center">
        <div className="flex gap-4 w-full max-w-7xl">
          <div className="relative w-[70%] rounded-3xl overflow-hidden">
            <img
              src="/pictures/multi.jpg"
              alt="AI Case Study"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 right-8 bg-[#efe4d6] rounded-3xl px-8 py-2 max-w-sm">
              <p className="text-xs font-semibold uppercase tracking-wider mb-3">
                Client Impact
              </p>

              <h3 className="text-2xl font-light mb-4">
                AI Agents Reinvent the Consumer Experience
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                BCG experts reveal how a leading beauty company is using AI to
                redefine the consumer.
                
              </p>

              <button className="px-6 py-3 rounded-2xl font-semibold text-sm text-white flex items-center gap-2" style={{ backgroundColor: "#1A3560" }}>
                LEARN MORE →
              </button>
            </div>
          </div>
          <div className="relative w-[30%] rounded-3xl overflow-hidden">
            <img
              src="/pictures/modern.jpg"
              alt="Train Maintenance"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-[#e9ece6] rounded-3xl p-6 max-w-sm">
              <p className="text-xs font-semibold uppercase tracking-wider mb-2">
                Client Impact
              </p>

              <h3 className="text-xl font-light leading-snug">
                SBB Is Transforming Train Maintenance Through XR and AI
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
