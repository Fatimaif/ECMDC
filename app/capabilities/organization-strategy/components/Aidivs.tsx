import React from "react";

const Aidivs = () => {
  const services = [
    {
        title: "Org Design",
        image: "https://images.pexels.com/photos/3184343/pexels-photo-3184343.jpeg"
    },
    {
        title: "Operating Model",
        image: "https://images.pexels.com/photos/3184348/pexels-photo-3184348.jpeg"
    },
    {
        title: "Workforce Planning",
        image: "https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg"
    },
    {
        title: "Capability Building",
        image: "https://images.pexels.com/photos/3184344/pexels-photo-3184344.jpeg"
    },
    {
        title: "Cultural Change",
        image: "https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg"
    },
    {
        title: "Agile Organizations",
        image: "https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg"
    }
];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Organization Strategy Services
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
