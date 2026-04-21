import React from "react";
import { TrendingUp, ShoppingBag, Smartphone, BarChart3 } from "lucide-react";

const Client = () => {
  const icons = [TrendingUp, ShoppingBag, Smartphone, BarChart3];
  const stories = [
    {
      title: "Omnichannel Transformation",
      description: "ECMDC helped a national retailer implement a comprehensive omnichannel strategy, integrating online and offline experiences that increased same-store sales by 25%, improved inventory turnover by 40%, and achieved 90% customer satisfaction.",
    },
    {
      title: "E-commerce Platform",
      description: "At a specialty retailer, we designed and launched a next-generation e-commerce platform with AI-powered personalization, increasing online revenue by 150%, improving conversion rates by 60%, and reducing cart abandonment by 35%.",
    },
    {
      title: "Supply Chain Optimization",
      description: "ECMDC supported a fashion retailer in transforming its supply chain with demand forecasting and inventory optimization, reducing stockouts by 70%, decreasing markdowns by 30%, and improving gross margins by 5 percentage points.",
    },
    {
      title: "Store Experience Innovation",
      description: "ECMDC helped a luxury retailer reimagine its store experience with digital integration, clienteling tools, and experiential elements, increasing store productivity by 45% and improving customer engagement metrics by 80%.",
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
