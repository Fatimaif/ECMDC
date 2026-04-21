import React from "react";
import { TrendingUp, Rocket, CircleDollarSign, Globe2 } from "lucide-react";

const Client = () => {
  const icons = [TrendingUp, Rocket, CircleDollarSign, Globe2];
  const stories = [
    {
      title: "Predictive Analytics Platform",
      description: "Helped a Fortune 500 retail company develop a machine learning platform that improved demand forecasting accuracy by 35%, resulting in reduced inventory costs and improved customer satisfaction.",
    },
    {
      title: "AI-Powered Automation",
      description: "Deployed intelligent automation solutions for a financial services firm that reduced manual processing time by 70% and improved accuracy, enabling staff to focus on higher-value activities.",
    },
    {
      title: "Generative AI Implementation",
      description: "Integrated large language models for a healthcare organization to automate documentation and clinical decision support, improving clinician productivity by 40% while maintaining compliance standards.",
    },
    {
      title: "Computer Vision System",
      description: "Built a custom computer vision solution for a manufacturing company that automated quality inspection, detecting defects with 99% accuracy and reducing inspection time by 80%.",
    },
  ];

  return (
    <section className="w-full pt-20 pb-8" style={{ backgroundColor: '#F1EEEA' }}>
      <div className="w-full px-4 md:px-10 flex flex-col items-center">
        <h2 className="text-5xl font-light text-gray-900 leading-tight text-center mb-12">
          AI Success Stories
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
