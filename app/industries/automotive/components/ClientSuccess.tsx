"use client";
import React from "react";
import { TrendingUp, Rocket, CircleDollarSign, Globe2 } from "lucide-react";

const ClientSuccess = () => {
  const stories = [
    {
      metric: "$7b+",
      subtitle: "in cash and EBIT improvement",
      description: "Through a large-scale cost transformation, we enabled a European premium vehicle manufacturer to realize more than $7 billion in cash and earnings before interest and taxes (EBIT) improvement, helping navigate tough market conditions and helping fund the internal combustions engine (ICE) to battery-electric vehicle (BEV) journey. We also helped strengthen their supply chain and lowered material cost, including for the new BEV platforms."
    },
    {
      metric: "€2b+",
      subtitle: "in annual R&D spend optimized",
      description: "We worked with a global vehicle manufacturer to optimize their partner network for their next generation of software-defined vehicles. We enabled quicker and broader access to cutting-edge technology and optimized the deployment of more than 10,000 engineers and more than €2 billion annual R&D spend."
    },
    {
      metric: "~$250m",
      subtitle: "in annual EBIT opportunity",
      description: "We helped a leading off-highway vehicle manufacturer revamp its supply chain and improve its engineering efficiency by supporting initiatives that will deliver approximately $250 million in annual EBIT opportunity. Within engineering, our team also outlined ways to reduce costs by 10% and improve speed to market by up to 35%."
    }
  ];

  return (
    <section className="w-full pt-20 pb-8" style={{ backgroundColor: '#F1EEEA' }}>
      <div className="px-4 md:px-10">
        <div className="bg-white rounded-3xl p-8" style={{ width: '70%' }}>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Our Client Success Stories
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <div key={index}>
                <h3 className="text-4xl md:text-5xl font-light text-[#1B3662] mb-2">
                  {story.metric}
                </h3>
                <p className="text-lg font-medium text-gray-900 mb-4">
                  {story.subtitle}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {story.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccess;
