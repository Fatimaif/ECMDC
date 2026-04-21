import React from "react";

const Hero = () => {
  return (
    <section className="w-full" style={{ backgroundColor: '#F1EEEA' }}>
      <div className="w-full px-4 md:px-10 pt-20 pb-16 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-light text-[#1a1a1a] mb-10 text-center">
          Travel and Tourism
        </h1>

        <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-[#1a1a1a] text-center">
          ECMDC helps travel and tourism companies reimagine the customer experience, build resilience, and drive sustainable growth in a transforming industry
        </p>
      </div>
      <div className="w-full px-4 md:px-10 pb-0 flex justify-center">
        <div className="w-full overflow-hidden rounded-3xl">
          <div className="h-[420px] md:h-[500px] w-full">
            <img
              src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg"
              alt="Travel and Tourism"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <p className="text-sm md:text-base leading-relaxed text-[#1a1a1a] text-center max-w-4xl mx-auto">
            We partner with airlines, hotels, and tourism operators to navigate industry disruption, enhance digital capabilities, and create exceptional guest experiences. Our expertise spans revenue management, sustainability, and operational excellence to drive profitable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
