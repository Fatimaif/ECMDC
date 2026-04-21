import React from "react";

const Aidivs = () => {
  const services = [
    {
        title: "Digital Strategy",
        image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg"
    },
    {
        title: "Data Platforms",
        image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
    },
    {
        title: "Technology Roadmap",
        image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg"
    },
    {
        title: "Digital Products",
        image: "https://images.pexels.com/photos/5474026/pexels-photo-5474026.jpeg"
    },
    {
        title: "Data Governance",
        image: "https://images.pexels.com/photos/3184393/pexels-photo-3184393.jpeg"
    },
    {
        title: "Tech Innovation",
        image: "https://images.pexels.com/photos/3184354/pexels-photo-3184354.jpeg"
    }
];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Digital, Technology, and Data Services
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
