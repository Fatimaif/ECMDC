import React from "react";
import { TrendingUp, Rocket, CircleDollarSign, Globe2 } from "lucide-react";

const Client = () => {
  const icons = [TrendingUp, Rocket, CircleDollarSign, Globe2];
  const stories = [
    {
      title: "University Digital Transformation",
      description: "ECMDC helped a major university system implement a comprehensive digital learning platform, reaching 50,000 students and improving completion rates by 18% while reducing operational costs.",
    },
    {
      title: "K-12 Personalized Learning",
      description: "We partnered with a school district to design and deploy personalized learning programs, resulting in significant improvements in student engagement and standardized test scores across all grade levels.",
    },
    {
      title: "EdTech Platform Integration",
      description: "ECMDC supported a college consortium in selecting and integrating modern EdTech solutions, creating a unified learning ecosystem that improved faculty efficiency and student satisfaction.",
    },
    {
      title: "Workforce Development Program",
      description: "We helped a community college network launch industry-aligned certification programs, placing 85% of graduates in relevant jobs within six months and establishing sustainable funding models.",
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
