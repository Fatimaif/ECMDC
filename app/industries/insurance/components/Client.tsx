import React from "react";
import { TrendingUp, Shield, Clock, BarChart3 } from "lucide-react";

const Client = () => {
  const icons = [TrendingUp, Shield, Clock, BarChart3];
  const stories = [
    {
      title: "Digital Insurance Platform",
      description: "ECMDC helped a major insurance company launch a fully digital insurance platform, reducing policy issuance time from days to minutes, improving customer satisfaction by 50%, and capturing 15% market share in the direct-to-consumer segment.",
    },
    {
      title: "AI-Powered Underwriting",
      description: "At a life insurance provider, we implemented an AI-powered underwriting system that improved risk assessment accuracy by 40%, reduced underwriting time by 70%, and enabled instant quotes for 80% of applications.",
    },
    {
      title: "Claims Automation",
      description: "ECMDC supported a property & casualty insurer in implementing end-to-end claims automation, reducing claims processing time by 60%, improving customer satisfaction scores by 35%, and achieving $45M in annual cost savings.",
    },
    {
      title: "Risk Analytics Transformation",
      description: "ECMDC helped a global insurance company modernize its risk analytics capabilities with advanced modeling and real-time data integration, improving loss ratios by 12% and enabling more competitive pricing strategies.",
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
