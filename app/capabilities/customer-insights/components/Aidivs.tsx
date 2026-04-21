import React from "react";

const Aidivs = () => {
  const services = [
    {
        title: "Customer Analytics",
        image: "https://images.pexels.com/photos/7688465/pexels-photo-7688465.jpeg"
    },
    {
        title: "Segmentation",
        image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
    },
    {
        title: "Journey Mapping",
        image: "https://images.pexels.com/photos/7688465/pexels-photo-7688465.jpeg"
    },
    {
        title: "Voice of Customer",
        image: "https://images.pexels.com/photos/3184345/pexels-photo-3184345.jpeg"
    },
    {
        title: "Behavioral Analysis",
        image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
    },
    {
        title: "Market Research",
        image: "https://images.pexels.com/photos/7821685/pexels-photo-7821685.jpeg"
    }
];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Customer Insights Services
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
