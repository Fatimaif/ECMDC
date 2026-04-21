import React from "react";
import { TrendingUp, Settings, Package, Gauge } from "lucide-react";

const Client = () => {
  const icons = [TrendingUp, Settings, Package, Gauge];
  const stories = [
    {
      title: "Smart Factory Implementation",
      description: "ECMDC helped a global manufacturing company implement a comprehensive smart factory solution with IoT sensors, predictive maintenance, and AI-powered quality control, resulting in 35% improvement in OEE and 50% reduction in unplanned downtime.",
    },
    {
      title: "Supply Chain Resilience",
      description: "At a major industrial goods manufacturer, we redesigned the global supply chain network with real-time visibility and predictive analytics, reducing lead times by 40% and improving on-time delivery to 98%.",
    },
    {
      title: "Operational Excellence Program",
      description: "ECMDC supported a diversified industrial company in implementing a lean manufacturing program across 15 facilities, achieving $120M in annual cost savings and improving production efficiency by 45%.",
    },
    {
      title: "Sustainability Transformation",
      description: "ECMDC helped an industrial manufacturer develop and execute a comprehensive sustainability strategy, reducing carbon emissions by 55%, achieving zero waste to landfill, and creating new revenue streams from circular economy initiatives.",
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
