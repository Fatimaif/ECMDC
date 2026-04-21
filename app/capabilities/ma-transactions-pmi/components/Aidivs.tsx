import React from "react";

const Aidivs = () => {
  const services = [
    {
        title: "Deal Strategy",
        image: "https://images.pexels.com/photos/4560083/pexels-photo-4560083.jpeg"
    },
    {
        title: "Due Diligence",
        image: "https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg"
    },
    {
        title: "Integration Planning",
        image: "https://images.pexels.com/photos/3184347/pexels-photo-3184347.jpeg"
    },
    {
        title: "Synergy Capture",
        image: "https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg"
    },
    {
        title: "Carve-Out",
        image: "https://images.pexels.com/photos/6863354/pexels-photo-6863354.jpeg"
    },
    {
        title: "Post-Merger Integration",
        image: "https://images.pexels.com/photos/7821680/pexels-photo-7821680.jpeg"
    }
];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our M&A, Transactions, and PMI Services
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
