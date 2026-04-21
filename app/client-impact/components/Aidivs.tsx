import React from "react";

const Aidivs = () => {
  const services = [
    {
      title: "Digital Transformation",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    },
    {
      title: "Operational Excellence",
      image: "https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg",
    },
    {
      title: "Growth Strategy",
      image: "https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg",
    },
    {
      title: "Cost Optimization",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg",
    },
    {
      title: "Innovation Programs",
      image: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg",
    },
    {
      title: "Change Management",
      image: "https://images.pexels.com/photos/7681104/pexels-photo-7681104.jpeg",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        How We Drive Client Impact
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
