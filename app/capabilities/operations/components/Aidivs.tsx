import React from "react";

const Aidivs = () => {
  const services = [
    {
        title: "Operational Excellence",
        image: "https://images.pexels.com/photos/3184353/pexels-photo-3184353.jpeg"
    },
    {
        title: "Process Optimization",
        image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg"
    },
    {
        title: "Supply Chain",
        image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg"
    },
    {
        title: "Lean Six Sigma",
        image: "https://images.pexels.com/photos/3862131/pexels-photo-3862131.jpeg"
    },
    {
        title: "Performance Management",
        image: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg"
    },
    {
        title: "Continuous Improvement",
        image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg"
    }
];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Operations Services
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
