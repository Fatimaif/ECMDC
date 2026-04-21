import React from "react";

const Aidivs = () => {
  const services = [
    {
      title: "Defense Modernization",
      image: "https://images.pexels.com/photos/256379/pexels-photo-256379.jpeg",
    },
    {
      title: "Aviation Systems",
      image: "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg",
    },
    {
      title: "Cybersecurity",
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
    },
    {
      title: "Space Technology",
      image: "https://images.pexels.com/photos/220792/pexels-photo-220792.jpeg",
    },
    {
      title: "Supply Chain",
      image: "https://images.pexels.com/photos/1181623/pexels-photo-1181623.jpeg",
    },
    {
      title: "Digital Transformation",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Aerospace & Defense Services
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
