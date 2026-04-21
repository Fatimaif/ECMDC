import React from "react";

const Hero = () => {
  return (
    <section className="w-full" style={{ backgroundColor: '#F1EEEA' }}>
      <div className="w-full px-4 md:px-10 pt-20 pb-16 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-light text-[#1a1a1a] mb-10 text-center">
          Automotive Industry Transformation
        </h1>

        <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-[#1a1a1a] text-center">
          ECMDC helps automotive companies transform operations, embrace electrification, and deliver innovative mobility solutions in a rapidly evolving industry.
        </p>
      </div>
      <div className="w-full px-4 md:px-10 pb-0 flex justify-center">
        <div className="w-full overflow-hidden rounded-3xl">
          <div className="h-[420px] md:h-[500px] w-full">
            <img
              src="https://images.pexels.com/photos/9000042/pexels-photo-9000042.jpeg"
              alt="Automotive Industry"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <p className="text-sm md:text-base leading-relaxed text-[#1a1a1a] text-center max-w-4xl mx-auto">
            From electric vehicle strategy to smart manufacturing and digital customer experiences, we support automotive leaders in building the future of transportation. Our solutions address product development, operational excellence, and sustainable growth strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
