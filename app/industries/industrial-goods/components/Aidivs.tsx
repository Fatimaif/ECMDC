import React from "react";

const Aidivs = () => {
  const services = [
    {
      title: "Smart Manufacturing",
      image: "https://images.pexels.com/photos/1267340/pexels-photo-1267340.jpeg",
    },
    {
      title: "Supply Chain",
      image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg",
    },
    {
      title: "Asset Management",
      image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg",
    },
    {
      title: "Quality Excellence",
      image: "https://images.pexels.com/photos/1108103/pexels-photo-1108103.jpeg",
    },
    {
      title: "Sustainability",
      image: "https://images.pexels.com/photos/3184331/pexels-photo-3184331.jpeg",
    },
    {
      title: "Digital Transformation",
      image: "https://images.pexels.com/photos/3184369/pexels-photo-3184369.jpeg",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Industrial Services
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
