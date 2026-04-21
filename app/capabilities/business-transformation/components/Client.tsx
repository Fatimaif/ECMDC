import React from "react";
import { TrendingUp, Rocket, CircleDollarSign, Globe2 } from "lucide-react";

const Client = () => {
  const icons = [TrendingUp, Rocket, CircleDollarSign, Globe2];
  const stories = [
    {
      title: "Business Transformation Transformation",
      description: "Helped a Fortune 500 company transform their business transformation operations, resulting in 40% improvement in key metrics and significant competitive advantage in their market.",
    },
    {
      title: "Strategic Initiative",
      description: "Supported a global organization in implementing comprehensive business transformation solutions that drove operational excellence and delivered measurable business value.",
    },
    {
      title: "Innovation Program",
      description: "Partnered with industry leaders to develop and deploy innovative business transformation capabilities that enhanced performance and enabled sustainable growth.",
    },
    {
      title: "Excellence Achievement",
      description: "Guided an enterprise through a complete business transformation overhaul, achieving best-in-class performance and establishing new industry benchmarks.",
    },
  ];

  return (
    <section className="w-full pt-20 pb-8" style={{ backgroundColor: '#F1EEEA' }}>
      <div className="w-full px-4 md:px-10 flex flex-col items-center">
        <h2 className="text-5xl font-light text-gray-900 leading-tight text-center mb-12">
          Transformation Outcomes
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
