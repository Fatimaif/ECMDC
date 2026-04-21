import React from "react";
import { TrendingUp, Rocket, CircleDollarSign, Globe2 } from "lucide-react";

const Client = () => {
  const icons = [TrendingUp, Rocket, CircleDollarSign, Globe2];
  const stories = [
    {
      title: "Post-Merger Integration",
      description: "ECMDC helped define guiding principles, processes, team structure, and timelines for the merger of two diversified defense companies, which created one of the world's largest aerospace and defense companies and led to a significant increase in shareholder value.",
    },
    {
      title: "Aerospace and Defense Innovation and Strategy",
      description: "At a US shipbuilding company, we led a cross-functional team through a sprint to generate ideas for cutting costs in the materials value stream and provided procurement personnel with new capabilities and tools to make supplier negotiations more strategic.",
    },
    {
      title: "Parts Pricing",
      description: "ECMDC supported a major aircraft producer to develop an algorithm to optimize parts pricing, resulting in a multi-million-dollar uplift in revenue in just the first year.",
    },
    {
      title: "Excellence in Export and Business Development",
      description: "ECMDC helped a major defense prime restructure its sales and business development functions, achieving faster response time, unlocking new export opportunities, and maximizing the outcome of non-recurring costs.",
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
