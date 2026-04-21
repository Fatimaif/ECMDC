import React from "react";

const Results = () => {
  const results = [
    { value: "85%", label: "Increase in Online Engagement" },
    { value: "3.5x", label: "Higher Conversion Rates" },
    { value: "92%", label: "Customer Satisfaction Score" },
    { value: "45%", label: "Reduction in Return Rates" },
    { value: "$200M", label: "Additional Annual Revenue" },
    { value: "60%", label: "Increase in Repeat Purchases" }
  ];

  return (
    <section className="w-full bg-[#1B3662] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6 text-center">
          Measurable Results
        </h2>
        <p className="text-lg text-white/90 mb-12 text-center max-w-3xl mx-auto">
          Within the first year of deployment, the AI-powered solution delivered transformative business outcomes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-light text-white mb-4">
                {result.value}
              </div>
              <div className="text-lg text-white/90">
                {result.label}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 rounded-3xl p-8 md:p-12 backdrop-blur">
          <h3 className="text-2xl font-light text-white mb-6 text-center">
            Client Testimonial
          </h3>
          <blockquote className="text-lg text-white/95 leading-relaxed text-center max-w-4xl mx-auto italic">
            "The AI solution transformed how we connect with our customers. What used to require
            in-person consultation is now available 24/7 across all our digital channels. Our
            customers love the personalized experience, and we've seen remarkable improvements in
            both satisfaction and sales. This partnership has redefined what's possible in beauty retail."
          </blockquote>
          <p className="text-white/80 text-center mt-6">
            — Chief Digital Officer, Global Beauty Leader
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;
