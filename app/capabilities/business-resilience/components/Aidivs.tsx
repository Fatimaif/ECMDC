import React from "react";

const Aidivs = () => {
  const services = [
    {
        title: "Risk Assessment",
        image: "https://images.pexels.com/photos/5673502/pexels-photo-5673502.jpeg"
    },
    {
        title: "Business Continuity",
        image: "https://images.pexels.com/photos/6774460/pexels-photo-6774460.jpeg"
    },
    {
        title: "Crisis Management",
        image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg"
    },
    {
        title: "Supply Chain Resilience",
        image: "https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg"
    },
    {
        title: "Operational Resilience",
        image: "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg"
    },
    {
        title: "Recovery Planning",
        image: "https://images.pexels.com/photos/3184336/pexels-photo-3184336.jpeg"
    }
];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Business Resilience Services
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
