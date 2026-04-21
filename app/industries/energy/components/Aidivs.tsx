import React from "react";

const Aidivs = () => {
  const services = [
    {
      title: "Renewable Energy",
      image: "https://images.pexels.com/photos/3184351/pexels-photo-3184351.jpeg",
    },
    {
      title: "Grid Modernization",
      image: "https://images.pexels.com/photos/2499699/pexels-photo-2499699.jpeg",
    },
    {
      title: "Energy Trading",
      image: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg",
    },
    {
      title: "Carbon Management",
      image: "https://images.pexels.com/photos/3184350/pexels-photo-3184350.jpeg",
    },
    {
      title: "Asset Optimization",
      image: "https://images.pexels.com/photos/157039/pexels-photo-157039.jpeg",
    },
    {
      title: "Regulatory Strategy",
      image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Energy Services
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
