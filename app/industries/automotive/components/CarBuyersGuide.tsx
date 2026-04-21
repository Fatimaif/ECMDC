import React from "react";

const CarBuyersGuide = () => {
  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto rounded-3xl overflow-hidden relative h-[280px]">
        <img
          src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg"
          alt="Car Buyers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 px-8 md:px-10 py-8 flex items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-light text-white">
              What Car Buyers Want: A Global Guide for Automotive OEMs
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              ECMDC's survey of 9,000 consumers across ten countries reveals how shifting preferences, younger generations, and regional nuances are redefining the road ahead for automakers.
            </p>
          </div>
          <button className="bg-transparent border border-white text-white px-6 py-2 rounded-2xl text-sm font-semibold hover:bg-white hover:text-black transition-all whitespace-nowrap absolute bottom-12 right-12 md:right-16">
            Read More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarBuyersGuide;
