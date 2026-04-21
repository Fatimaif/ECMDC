import React from "react";

const Aidivs = () => {
  const services = [
    {
      title: "Due Diligence",
      image: "https://images.pexels.com/photos/6863355/pexels-photo-6863355.jpeg",
    },
    {
      title: "Value Creation",
      image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg",
    },
    {
      title: "Post-Merger Integration",
      image: "https://images.pexels.com/photos/7821682/pexels-photo-7821682.jpeg",
    },
    {
      title: "Portfolio Optimization",
      image: "https://images.pexels.com/photos/7893732/pexels-photo-7893732.jpeg",
    },
    {
      title: "Exit Preparation",
      image: "https://images.pexels.com/photos/7893730/pexels-photo-7893730.jpeg",
    },
    {
      title: "Operational Excellence",
      image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Private Equity Services
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
