import React from "react";

const SuccessStories = () => {
  const stories = [
    {
      company: "Global Automotive Leader",
      challenge: "Legacy systems hindering innovation and customer experience",
      solution: "End-to-end digital transformation with cloud migration and AI integration",
      results: ["45% faster time-to-market", "60% improvement in customer satisfaction", "$500M in cost savings"],
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg"
    },
    {
      company: "Major Insurance Provider",
      challenge: "Inefficient claims processing and high operational costs",
      solution: "Intelligent automation and predictive analytics implementation",
      results: ["70% reduction in processing time", "85% accuracy improvement", "50% cost reduction"],
      image: "https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg"
    },
    {
      company: "E-commerce Platform",
      challenge: "Scaling challenges and market competition pressure",
      solution: "Growth strategy with advanced analytics and personalization",
      results: ["200% revenue growth", "3x customer base expansion", "Market leader position"],
      image: "https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg"
    },
    {
      company: "Pharmaceutical Company",
      challenge: "Drug development inefficiencies and R&D cost pressures",
      solution: "AI-driven research acceleration and portfolio optimization",
      results: ["40% faster development cycle", "$300M R&D savings", "5 new drugs to market"],
      image: "https://images.pexels.com/photos/3861944/pexels-photo-3861944.jpeg"
    }
  ];

  return (
    <section className="w-full px-4 md:px-10 py-20" style={{ backgroundColor: '#F1EEEA' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-4 text-center">
          Success Stories
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Real transformation journeys from challenge to breakthrough results
        </p>

        <div className="space-y-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                  <h3 className="text-3xl font-light text-[#1a1a1a] mb-6">
                    {story.company}
                  </h3>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#1B3662] mb-2 uppercase tracking-wider">
                      The Challenge
                    </h4>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {story.challenge}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#1B3662] mb-2 uppercase tracking-wider">
                      Our Solution
                    </h4>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {story.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#1B3662] mb-3 uppercase tracking-wider">
                      Results Achieved
                    </h4>
                    <ul className="space-y-2">
                      {story.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#1B3662] mr-3 mt-1">✓</span>
                          <span className="text-base text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`h-[400px] lg:h-auto ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                  <img
                    src={story.image}
                    alt={story.company}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
