import React from "react";
import { TrendingUp, Users, Building2, FileCheck } from "lucide-react";

const Client = () => {
  const icons = [TrendingUp, Users, Building2, FileCheck];
  const stories = [
    {
      title: "Digital Service Transformation",
      description: "ECMDC helped a state government agency modernize its citizen services platform, implementing a mobile-first digital portal that improved service accessibility by 300%, reduced processing times by 70%, and achieved 95% citizen satisfaction scores.",
    },
    {
      title: "Healthcare System Modernization",
      description: "At a federal healthcare agency, we led a comprehensive technology modernization program that integrated legacy systems, improved data sharing, and enhanced patient care coordination across 50+ facilities, serving 2 million beneficiaries.",
    },
    {
      title: "Infrastructure Planning",
      description: "ECMDC supported a metropolitan government in developing a 20-year infrastructure investment plan using advanced analytics and scenario modeling, optimizing $5B in capital allocation and improving long-term sustainability outcomes.",
    },
    {
      title: "Organizational Transformation",
      description: "ECMDC helped a federal agency restructure its operations and workforce, implementing agile methodologies and digital tools that improved program delivery speed by 60% and increased employee engagement by 40%.",
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
