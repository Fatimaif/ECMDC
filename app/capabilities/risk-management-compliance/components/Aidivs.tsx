import React from "react";

const Aidivs = () => {
  const services = [
    {
        title: "Risk Assessment",
        image: "https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg"
    },
    {
        title: "Regulatory Compliance",
        image: "https://images.pexels.com/photos/6863313/pexels-photo-6863313.jpeg"
    },
    {
        title: "Risk Framework",
        image: "https://images.pexels.com/photos/5240548/pexels-photo-5240548.jpeg"
    },
    {
        title: "Audit & Controls",
        image: "https://images.pexels.com/photos/7821681/pexels-photo-7821681.jpeg"
    },
    {
        title: "Risk Analytics",
        image: "https://images.pexels.com/photos/5474029/pexels-photo-5474029.jpeg"
    },
    {
        title: "Compliance Management",
        image: "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg"
    }
];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Risk Management and Compliance Services
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
