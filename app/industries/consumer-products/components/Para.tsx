import React from "react";

const Para = () => {
  const points = [
    "Build powerful brands that resonate with today's conscious consumers through purpose-driven marketing and authentic storytelling",
    "Accelerate product innovation cycles with agile development methodologies and consumer-centric design thinking",
    "Create seamless omnichannel experiences that integrate physical and digital touchpoints across the customer journey",
    "Optimize supply chains for resilience and sustainability while reducing costs and improving service levels",
    "Leverage data analytics and AI to understand consumer behavior and personalize marketing at scale",
    "Develop sustainable business models that balance profitability with environmental and social responsibility",
  ];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <div className="grid grid-cols-2 gap-x-12 gap-y-4 w-full max-w-6xl">
        {points.map((point, index) => (
          <div key={index} className="flex items-start">
            <span className="mr-3 mt-1">•</span>
            <span className="text-sm md:text-base text-[#1a1a1a] leading-relaxed">
              {point}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Para;
