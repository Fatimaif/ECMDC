import React from "react";

const Aidivs = () => {
  const services = [
    {
        title: "Pricing Strategy",
        image: "https://images.pexels.com/photos/6801871/pexels-photo-6801871.jpeg"
    },
    {
        title: "Revenue Optimization",
        image: "https://images.pexels.com/photos/3184362/pexels-photo-3184362.jpeg"
    },
    {
        title: "Price Architecture",
        image: "https://images.pexels.com/photos/6801869/pexels-photo-6801869.jpeg"
    },
    {
        title: "Dynamic Pricing",
        image: "https://images.pexels.com/photos/7893731/pexels-photo-7893731.jpeg"
    },
    {
        title: "Commercial Excellence",
        image: "https://images.pexels.com/photos/6863185/pexels-photo-6863185.jpeg"
    },
    {
        title: "Value-Based Pricing",
        image: "https://images.pexels.com/photos/6801873/pexels-photo-6801873.jpeg"
    }
];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Pricing and Revenue Management Services
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
