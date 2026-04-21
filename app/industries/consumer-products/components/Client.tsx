import React from "react";
import { TrendingUp, Rocket, CircleDollarSign, Globe2 } from "lucide-react";

const Client = () => {
  const icons = [TrendingUp, Rocket, CircleDollarSign, Globe2];
  const stories = [
    {
      title: "Global Brand Transformation",
      description: "ECMDC helped a leading consumer goods company transform its brand portfolio, resulting in a 25% increase in market share and improved margins across key categories through strategic repositioning and innovation.",
    },
    {
      title: "DTC Channel Launch",
      description: "We partnered with a premium beauty brand to launch a direct-to-consumer platform, achieving $100M in online sales within the first year and establishing a foundation for long-term customer relationships.",
    },
    {
      title: "Sustainable Packaging Initiative",
      description: "ECMDC supported a food and beverage company in transitioning to 100% recyclable packaging across its portfolio, reducing environmental impact while maintaining product integrity and consumer appeal.",
    },
    {
      title: "Omnichannel Excellence",
      description: "We helped a fashion retailer integrate its online and offline channels, creating a seamless shopping experience that increased customer lifetime value by 40% and improved inventory turnover.",
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
