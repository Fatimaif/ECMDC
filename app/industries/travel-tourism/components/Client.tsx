"use client";
import React from "react";

const Client = () => {
  const stories = [
    {
      metric: "35%",
      subtitle: "increase in direct bookings",
      description: "We helped a major hotel chain transform their digital booking experience and loyalty program. Through personalized marketing, mobile optimization, and seamless integration across channels, we achieved a 35% increase in direct bookings while reducing distribution costs significantly."
    },
    {
      metric: "$180m",
      subtitle: "in revenue optimization",
      description: "We partnered with a leading airline to implement advanced revenue management systems and dynamic pricing strategies. By leveraging AI and predictive analytics, we unlocked $180 million in annual revenue improvements while maintaining customer satisfaction."
    },
    {
      metric: "50%",
      subtitle: "reduction in carbon footprint",
      description: "We guided a tourism operator through a comprehensive sustainability transformation. By implementing green practices, renewable energy, and circular economy initiatives, we achieved a 50% reduction in carbon footprint while attracting eco-conscious travelers and improving brand reputation."
    }
  ];

  return (
    <section className="w-full pt-20 pb-8" style={{ backgroundColor: '#F1EEEA' }}>
      <div className="px-4 md:px-10">
        <div className="bg-white rounded-3xl p-8" style={{ width: '70%' }}>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Transforming Travel Experiences
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
