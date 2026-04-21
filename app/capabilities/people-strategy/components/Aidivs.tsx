import React from "react";

const Aidivs = () => {
  const services = [
    {
        title: "Talent Strategy",
        image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg"
    },
    {
        title: "Leadership Development",
        image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
    },
    {
        title: "Employee Experience",
        image: "https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg"
    },
    {
        title: "HR Transformation",
        image: "https://images.pexels.com/photos/3184327/pexels-photo-3184327.jpeg"
    },
    {
        title: "Diversity & Inclusion",
        image: "https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg"
    },
    {
        title: "Workforce Analytics",
        image: "https://images.pexels.com/photos/3184358/pexels-photo-3184358.jpeg"
    }
];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our People Strategy Services
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
