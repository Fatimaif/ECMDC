"use client";
import React from "react";

const Client = () => {
  const stories = [
    {
      metric: "$500m+",
      subtitle: "in annual cost savings achieved",
      description: "Through a comprehensive network optimization program, we helped a global logistics provider reduce operating costs by over $500 million annually. This included route optimization, facility consolidation, and technology deployment that improved delivery speed while reducing environmental impact."
    },
    {
      metric: "40%",
      subtitle: "improvement in delivery times",
      description: "We partnered with a major e-commerce logistics company to transform their last-mile operations. By implementing AI-powered route planning and predictive analytics, we achieved a 40% improvement in delivery times while reducing fuel consumption by 25%."
    },
    {
      metric: "€350m",
      subtitle: "in warehouse automation value",
      description: "We guided a European supply chain company through a digital transformation of their warehouse operations. By deploying robotics, automated storage systems, and intelligent inventory management, we delivered €350 million in operational improvements and positioned them for future growth."
    }
  ];

  return (
    <section className="w-full pt-20 pb-8" style={{ backgroundColor: '#F1EEEA' }}>
      <div className="px-4 md:px-10">
        <div className="bg-white rounded-3xl p-8" style={{ width: '70%' }}>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Driving Supply Chain Excellence
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

export default Client;
