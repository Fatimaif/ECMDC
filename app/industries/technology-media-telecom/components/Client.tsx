import React from "react";
import { TrendingUp, Zap, Radio, Tv } from "lucide-react";

const Client = () => {
  const icons = [TrendingUp, Zap, Radio, Tv];
  const stories = [
    {
      title: "5G Network Deployment",
      description: "ECMDC helped a major telecom operator develop and execute its 5G rollout strategy, deploying infrastructure across 50 cities, achieving 40% faster time-to-market, and capturing 25% market share in the first year.",
    },
    {
      title: "Streaming Platform Launch",
      description: "At a media company, we designed and launched a direct-to-consumer streaming platform that acquired 10M subscribers in the first year, achieved 85% customer retention, and generated $500M in new revenue streams.",
    },
    {
      title: "Cloud Migration",
      description: "ECMDC supported a software company in migrating its legacy systems to cloud-native architecture, reducing infrastructure costs by 60%, improving system reliability to 99.99%, and enabling 10x faster feature deployment.",
    },
    {
      title: "Product Portfolio Optimization",
      description: "ECMDC helped a technology company rationalize its product portfolio and accelerate innovation, divesting non-core assets worth $2B, launching 5 new AI-powered products, and improving overall profitability by 15 percentage points.",
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
