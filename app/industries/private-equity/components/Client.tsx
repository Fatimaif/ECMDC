import React from "react";
import { TrendingUp, Target, Zap, Award } from "lucide-react";

const Client = () => {
  const icons = [TrendingUp, Target, Zap, Award];
  const stories = [
    {
      title: "Portfolio Company Turnaround",
      description: "ECMDC partnered with a PE firm to transform an underperforming manufacturing portfolio company, implementing operational improvements and strategic initiatives that delivered 3x EBITDA growth in 24 months and a successful exit at premium valuation.",
    },
    {
      title: "Commercial Due Diligence",
      description: "At a mid-market PE firm evaluating a $500M acquisition, we conducted comprehensive commercial due diligence that identified $80M in hidden value creation opportunities and validated the investment thesis, leading to a confident investment decision.",
    },
    {
      title: "Post-Merger Integration",
      description: "ECMDC supported a PE-backed company through three bolt-on acquisitions, delivering seamless integrations that achieved 95% of targeted synergies within 18 months and positioned the combined entity for a strategic exit.",
    },
    {
      title: "Value Creation Planning",
      description: "ECMDC helped a PE firm develop and execute a comprehensive 100-day value creation plan for a new healthcare investment, delivering $45M in EBITDA improvements in the first year and accelerating the path to exit.",
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
