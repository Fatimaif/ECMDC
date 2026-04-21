import React from "react";
import { Brain, Sparkles, Users, TrendingUp } from "lucide-react";

const Solution = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Virtual Consultants",
      description: "Intelligent agents that understand skin types, preferences, and beauty goals to provide personalized product recommendations"
    },
    {
      icon: Sparkles,
      title: "Virtual Try-On Technology",
      description: "Advanced AR integration allowing customers to visualize products before purchase with realistic rendering"
    },
    {
      icon: Users,
      title: "Omnichannel Integration",
      description: "Seamless experience across web, mobile, in-store, and social media with unified customer profiles"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Machine learning models that anticipate customer needs and optimize inventory and marketing strategies"
    }
  ];

  return (
    <section className="w-full px-4 md:px-10 py-20" style={{ backgroundColor: '#F1EEEA' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-6 text-center">
          Our Solution
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
          We developed an integrated AI ecosystem that combines conversational AI, computer vision,
          and predictive analytics to create a transformative beauty shopping experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8">
                <Icon className="w-12 h-12 text-[#1B3662] mb-4" strokeWidth={1.5} />
                <h3 className="text-2xl font-light text-[#1a1a1a] mb-4">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-light text-[#1a1a1a] mb-6">
            Implementation Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-light text-[#1B3662] mb-3">01</div>
              <h4 className="text-lg font-semibold text-[#1a1a1a] mb-2">Discovery & Design</h4>
              <p className="text-sm text-gray-700">Deep dive into customer journey, data analysis, and AI architecture design</p>
            </div>
            <div>
              <div className="text-4xl font-light text-[#1B3662] mb-3">02</div>
              <h4 className="text-lg font-semibold text-[#1a1a1a] mb-2">Build & Train</h4>
              <p className="text-sm text-gray-700">Develop AI models, train on historical data, and create virtual consultant experiences</p>
            </div>
            <div>
              <div className="text-4xl font-light text-[#1B3662] mb-3">03</div>
              <h4 className="text-lg font-semibold text-[#1a1a1a] mb-2">Deploy & Scale</h4>
              <p className="text-sm text-gray-700">Phased rollout across channels with continuous optimization and learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
