import React from "react";

const Aidivs = () => {
  const services = [
    {
        title: "Strategic Planning",
        image: "https://images.pexels.com/photos/7681097/pexels-photo-7681097.jpeg"
    },
    {
        title: "Competitive Analysis",
        image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
    },
    {
        title: "Growth Strategy",
        image: "https://images.pexels.com/photos/4491497/pexels-photo-4491497.jpeg"
    },
    {
        title: "Market Entry",
        image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg"
    },
    {
        title: "Portfolio Optimization",
        image: "https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg"
    },
    {
        title: "Business Model Innovation",
        image: "https://images.pexels.com/photos/3184313/pexels-photo-3184313.jpeg"
    }
];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Business Strategy Services
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
