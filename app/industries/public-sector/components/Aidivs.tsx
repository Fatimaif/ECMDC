import React from "react";

const Aidivs = () => {
  const services = [
    {
      title: "Digital Government",
      image: "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg",
    },
    {
      title: "Citizen Services",
      image: "https://images.pexels.com/photos/3184438/pexels-photo-3184438.jpeg",
    },
    {
      title: "Policy Implementation",
      image: "https://images.pexels.com/photos/3184372/pexels-photo-3184372.jpeg",
    },
    {
      title: "Infrastructure Modernization",
      image: "https://images.pexels.com/photos/3184368/pexels-photo-3184368.jpeg",
    },
    {
      title: "Data & Analytics",
      image: "https://images.pexels.com/photos/3184372/pexels-photo-3184372.jpeg",
    },
    {
      title: "Change Management",
      image: "https://images.pexels.com/photos/3184370/pexels-photo-3184370.jpeg",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Public Sector Services
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
