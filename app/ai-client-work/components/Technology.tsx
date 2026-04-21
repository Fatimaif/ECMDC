import React from "react";

const Technology = () => {
  const technologies = [
    {
      category: "AI & Machine Learning",
      items: ["Natural Language Processing", "Computer Vision", "Recommendation Engines", "Predictive Analytics"]
    },
    {
      category: "Customer Experience",
      items: ["Conversational AI", "AR Virtual Try-On", "Personalization Engine", "Omnichannel Platform"]
    },
    {
      category: "Data & Analytics",
      items: ["Customer Data Platform", "Real-time Analytics", "A/B Testing Framework", "Behavioral Tracking"]
    },
    {
      category: "Infrastructure",
      items: ["Cloud-Native Architecture", "Scalable APIs", "Security & Compliance", "MLOps Pipeline"]
    }
  ];

  return (
    <section className="w-full bg-white px-4 md:px-10 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-6 text-center">
          Technology Stack
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
          A comprehensive technology ecosystem powering intelligent beauty experiences
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-[#f5f2ee] rounded-2xl p-8">
              <h3 className="text-2xl font-light text-[#1a1a1a] mb-6 pb-4 border-b border-gray-300">
                {tech.category}
              </h3>
              <ul className="space-y-3">
                {tech.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#1B3662] mr-3 mt-1">✓</span>
                    <span className="text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
