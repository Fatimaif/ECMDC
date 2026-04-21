import React from "react";
import { TrendingUp, Zap, CircleDollarSign, Leaf } from "lucide-react";

const Client = () => {
  const icons = [TrendingUp, Zap, CircleDollarSign, Leaf];
  const stories = [
    {
      title: "Renewable Energy Integration",
      description: "ECMDC helped a major utility company develop and implement a comprehensive renewable energy strategy, integrating solar and wind assets that resulted in a 40% reduction in carbon emissions and significant cost savings over five years.",
    },
    {
      title: "Smart Grid Transformation",
      description: "At a regional energy provider, we led the implementation of advanced metering infrastructure and grid optimization systems, improving reliability by 35% and enabling real-time demand response capabilities.",
    },
    {
      title: "Energy Trading Optimization",
      description: "ECMDC supported a global energy company in developing an AI-powered trading platform, resulting in 25% improvement in trading margins and enhanced risk management capabilities.",
    },
    {
      title: "Carbon Management Strategy",
      description: "ECMDC helped a major oil and gas company develop a comprehensive carbon reduction roadmap, identifying pathways to achieve net-zero targets while maintaining operational performance and profitability.",
    },
  ];

  return (
    <section className="w-full pt-20 pb-8" style={{ backgroundColor: '#F1EEEA' }}>
      <div className="w-full px-4 md:px-10 flex flex-col items-center">
        <h2 className="text-5xl font-light text-gray-900 leading-tight text-center mb-12">
          Our Client Success Stories
        </h2>

        <div className="bg-white rounded-3xl p-8 w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story, index) => {
              const Icon = icons[index];
              return (
                <div key={index}>
                  <Icon className="w-8 h-8 text-[#1B3662] mb-4" strokeWidth={1.5} />
                  <h3 className="text-2xl font-light leading-snug text-gray-900 mb-4">
                    {story.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {story.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
