import React from "react";
import { TrendingUp, Rocket, CircleDollarSign, Globe2, Zap, Award } from "lucide-react";

const CaseStudies = () => {
  const icons = [TrendingUp, Rocket, CircleDollarSign, Globe2, Zap, Award];
  const caseStudies = [
    {
      title: "Fortune 500 Digital Transformation",
      industry: "Retail",
      description: "Helped a leading retail company implement AI-powered inventory management and personalized customer experiences, resulting in 35% increase in sales and 40% reduction in inventory costs.",
    },
    {
      title: "Healthcare System Modernization",
      industry: "Healthcare",
      description: "Transformed clinical operations for a major healthcare network with integrated digital platforms, improving patient outcomes by 45% and reducing operational costs by $200M annually.",
    },
    {
      title: "Financial Services Innovation",
      industry: "Banking",
      description: "Deployed next-generation digital banking platform for a global bank, increasing customer engagement by 60% and reducing transaction costs by 50% through automation.",
    },
    {
      title: "Manufacturing Excellence Program",
      industry: "Manufacturing",
      description: "Implemented Industry 4.0 technologies and lean operations for a manufacturing leader, achieving 30% productivity gains and 25% reduction in defect rates.",
    },
    {
      title: "Energy Sector Sustainability",
      industry: "Energy",
      description: "Guided an energy company through renewable transition strategy, reducing carbon footprint by 55% while maintaining profitability and creating new growth opportunities.",
    },
    {
      title: "Technology Scale-Up Success",
      industry: "Technology",
      description: "Supported a tech start-up's global expansion strategy, achieving 10x revenue growth in 2 years and successful market entry in 15 countries across 4 continents.",
    },
  ];

  return (
    <section className="w-full bg-white px-4 md:px-10 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-4 text-center">
          Case Studies
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Explore our comprehensive collection of client success stories showcasing measurable impact across industries
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="bg-[#f5f2ee] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <Icon className="w-10 h-10 text-[#1B3662] mb-4" strokeWidth={1.5} />
                <div className="text-xs font-semibold text-[#1B3662] mb-2 uppercase tracking-wider">
                  {study.industry}
                </div>
                <h3 className="text-2xl font-light text-[#1a1a1a] mb-4 leading-snug">
                  {study.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {study.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
