import React from "react";

const Aidivs = () => {
  const services = [
    {
        title: "Purpose Definition",
        image: "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg"
    },
    {
        title: "Values Alignment",
        image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg"
    },
    {
        title: "Stakeholder Engagement",
        image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
    },
    {
        title: "Purpose-Driven Strategy",
        image: "https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg"
    },
    {
        title: "Cultural Transformation",
        image: "https://images.pexels.com/photos/3184310/pexels-photo-3184310.jpeg"
    },
    {
        title: "Impact Measurement",
        image: "https://images.pexels.com/photos/7893734/pexels-photo-7893734.jpeg"
    }
];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Business and Organizational Purpose Services
      </h2>

      <div className="grid grid-cols-3 gap-4" style={{ maxWidth: '972px' }}>
        {services.map((item, index) => (
          <div className="flex flex-col bg-[#f5f2ee] rounded-2xl overflow-hidden h-64" key={index}>
            <div className="w-full h-[70%]">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="px-6 pb-6 pt-3 flex items-start justify-start h-[30%]">
              <h3 className="text-xl font-light text-[#1a1a1a]">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Aidivs;
