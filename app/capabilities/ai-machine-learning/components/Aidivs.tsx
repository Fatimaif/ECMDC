import React from "react";

const Aidivs = () => {
  const services = [
    {
      title: "AI Strategy",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    },
    {
      title: "Machine Learning Models",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    },
    {
      title: "Generative AI",
      image: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg",
    },
    {
      title: "Computer Vision",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
    },
    {
      title: "Natural Language Processing",
      image: "https://images.pexels.com/photos/8438982/pexels-photo-8438982.jpeg",
    },
    {
      title: "MLOps & Production",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our AI & Machine Learning Services
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
