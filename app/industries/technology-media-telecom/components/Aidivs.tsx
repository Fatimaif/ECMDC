import React from "react";

const Aidivs = () => {
  const services = [
    {
      title: "Product Innovation",
      image: "https://images.pexels.com/photos/3184352/pexels-photo-3184352.jpeg",
    },
    {
      title: "5G & Networks",
      image: "https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg",
    },
    {
      title: "Digital Platforms",
      image: "https://images.pexels.com/photos/4164420/pexels-photo-4164420.jpeg",
    },
    {
      title: "Content Strategy",
      image: "https://images.pexels.com/photos/2582939/pexels-photo-2582939.jpeg",
    },
    {
      title: "Cloud Migration",
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
    },
    {
      title: "M&A Strategy",
      image: "https://images.pexels.com/photos/5474027/pexels-photo-5474027.jpeg",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our TMT Services
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
