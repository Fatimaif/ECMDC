import React from "react";

const Para = () => {
  const points = [
    "Design personalized learning experiences that leverage technology and data to meet diverse student needs and learning styles",
    "Develop innovative curricula that prepares students for the future workforce with emphasis on critical thinking and digital literacy",
    "Implement scalable digital learning platforms that extend educational access and improve learning outcomes",
    "Optimize operational processes and resource allocation to improve financial sustainability while maintaining quality",
    "Build strategic partnerships with industry and community organizations to enhance student opportunities and outcomes",
    "Create data-driven decision-making frameworks that improve institutional effectiveness and student success metrics",
  ];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <div className="grid grid-cols-2 gap-x-12 gap-y-4 w-full max-w-6xl">
        {points.map((point, index) => (
          <div key={index} className="flex items-start">
            <span className="mr-3 mt-1">•</span>
            <span className="text-sm md:text-base text-[#1a1a1a] leading-relaxed">
              {point}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Para;
