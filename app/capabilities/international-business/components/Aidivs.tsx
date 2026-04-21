import React from "react";

const Aidivs = () => {
  const services = [
    {
        title: "Global Strategy",
        image: "https://images.pexels.com/photos/3184321/pexels-photo-3184321.jpeg"
    },
    {
        title: "Market Entry",
        image: "https://images.pexels.com/photos/3184164/pexels-photo-3184164.jpeg"
    },
    {
        title: "International Expansion",
        image: "https://images.pexels.com/photos/3184364/pexels-photo-3184364.jpeg"
    },
    {
        title: "Cross-Border M&A",
        image: "https://images.pexels.com/photos/3184346/pexels-photo-3184346.jpeg"
    },
    {
        title: "Global Operations",
        image: "https://images.pexels.com/photos/3184349/pexels-photo-3184349.jpeg"
    },
    {
        title: "Localization",
        image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg"
    }
];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our International Business Services
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
