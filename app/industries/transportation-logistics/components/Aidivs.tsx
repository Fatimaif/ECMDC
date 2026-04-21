import React from "react";

const Aidivs = () => {
  const services = [
    {
      title: "Fleet Management",
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg",
    },
    {
      title: "Supply Chain Optimization",
      image: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg",
    },
    {
      title: "Last-Mile Delivery",
      image: "https://images.pexels.com/photos/5025634/pexels-photo-5025634.jpeg",
    },
    {
      title: "Warehouse Automation",
      image: "https://images.pexels.com/photos/4246221/pexels-photo-4246221.jpeg",
    },
    {
      title: "Route Optimization",
      image: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg",
    },
    {
      title: "Sustainable Logistics",
      image: "https://images.pexels.com/photos/3964406/pexels-photo-3964406.jpeg",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Transportation & Logistics Services
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
