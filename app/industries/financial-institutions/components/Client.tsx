import React from "react";
import { TrendingUp, Shield, Users, CreditCard } from "lucide-react";

const Client = () => {
  const icons = [TrendingUp, Shield, Users, CreditCard];
  const stories = [
    {
      title: "Digital Banking Transformation",
      description: "ECMDC helped a regional bank implement a comprehensive digital banking platform, resulting in a 60% increase in mobile adoption, 45% reduction in branch transactions, and significantly improved customer satisfaction scores.",
    },
    {
      title: "Risk Management Modernization",
      description: "At a major investment bank, we designed and implemented an AI-powered risk management system that improved risk assessment accuracy by 40% and reduced compliance costs by $30M annually.",
    },
    {
      title: "Wealth Management Platform",
      description: "ECMDC supported a global wealth management firm in developing a personalized investment platform using AI and advanced analytics, resulting in 35% increase in assets under management and improved client retention.",
    },
    {
      title: "Payments Innovation",
      description: "ECMDC helped a financial services company modernize its payments infrastructure, enabling real-time payments, reducing transaction costs by 50%, and supporting new revenue streams through embedded finance.",
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
