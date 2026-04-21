import React from "react";

const Stats = () => {
  const stats = [
    { value: "1000+", label: "Client Projects Delivered" },
    { value: "85%", label: "Return Clients" },
    { value: "$50B+", label: "Value Created" },
    { value: "45+", label: "Countries Served" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "500+", label: "Industry Awards" }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-10 text-center">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-light text-[#1B3662] mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
