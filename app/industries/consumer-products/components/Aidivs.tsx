import React from "react";

const Aidivs = () => {
  const services = [
    {
      title: "Brand Strategy",
      image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg",
    },
    {
      title: "Product Innovation",
      image: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg",
    },
    {
      title: "Omnichannel Retail",
      image: "https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg",
    },
    {
      title: "Supply Chain Excellence",
      image: "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg",
    },
    {
      title: "Sustainability",
      image: "https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg",
    },
    {
      title: "Digital Commerce",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Consumer Products Services
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
