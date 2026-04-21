import React from "react";

const Aidivs = () => {
  const services = [
    {
        title: "Financial Planning",
        image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
    },
    {
        title: "Capital Allocation",
        image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg"
    },
    {
        title: "Value Creation",
        image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg"
    },
    {
        title: "Investment Strategy",
        image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg"
    },
    {
        title: "Financial Modeling",
        image: "https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg"
    },
    {
        title: "Shareholder Value",
        image: "https://images.pexels.com/photos/6772076/pexels-photo-6772076.jpeg"
    }
];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Corporate Finance and Strategy Services
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
