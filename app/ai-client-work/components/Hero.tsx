import React from "react";

const Hero = () => {
  return (
    <section className="w-full" style={{ backgroundColor: '#F1EEEA' }}>
      <div className="w-full px-4 md:px-10 pt-20 pb-16 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-light text-[#1a1a1a] mb-10 text-center max-w-5xl">
          AI Agents Reinvent the Consumer Experience
        </h1>
        <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-[#1a1a1a] text-center">
          Discover how leading beauty companies are leveraging AI to transform customer engagement,
          personalize experiences, and drive unprecedented business growth.
        </p>
      </div>
      <div className="w-full px-4 md:px-10 pb-0 flex justify-center">
        <div className="w-full overflow-hidden rounded-3xl">
          <div className="h-[420px] md:h-[500px] w-full">
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="AI Consumer Experience"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <p className="text-sm md:text-base leading-relaxed text-[#1a1a1a] text-center max-w-4xl mx-auto">
            In partnership with a global beauty leader, we developed intelligent AI agents that
            revolutionize how consumers discover, experience, and purchase beauty products. By
            combining advanced machine learning with deep consumer insights, we created personalized
            virtual consultants that understand individual preferences, skin types, and beauty goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
