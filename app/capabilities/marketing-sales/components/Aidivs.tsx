import React from "react";

const Aidivs = () => {
  const services = [
    {
        title: "Marketing Strategy",
        image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg"
    },
    {
        title: "Sales Excellence",
        image: "https://images.pexels.com/photos/3183152/pexels-photo-3183152.jpeg"
    },
    {
        title: "Brand Management",
        image: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg"
    },
    {
        title: "Digital Marketing",
        image: "https://images.pexels.com/photos/7821683/pexels-photo-7821683.jpeg"
    },
    {
        title: "Channel Strategy",
        image: "https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg"
    },
    {
        title: "Sales Force Effectiveness",
        image: "https://images.pexels.com/photos/5632404/pexels-photo-5632404.jpeg"
    }
];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Marketing and Sales Services
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
