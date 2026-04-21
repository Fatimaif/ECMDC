import React from "react";

const Aidivs = () => {
  const services = [
    {
        title: "Smart Manufacturing",
        image: "https://images.pexels.com/photos/1267339/pexels-photo-1267339.jpeg"
    },
    {
        title: "Production Excellence",
        image: "https://images.pexels.com/photos/1170413/pexels-photo-1170413.jpeg"
    },
    {
        title: "Quality Management",
        image: "https://images.pexels.com/photos/3184332/pexels-photo-3184332.jpeg"
    },
    {
        title: "Supply Chain",
        image: "https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg"
    },
    {
        title: "Industry 4.0",
        image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg"
    },
    {
        title: "Lean Operations",
        image: "https://images.pexels.com/photos/162568/factory-worker-processing-chicken-162568.jpeg"
    }
];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Manufacturing Services
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
