import React from "react";

const Aidivs = () => {
  const services = [
    {
        title: "Carbon Reduction",
        image: "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg"
    },
    {
        title: "Sustainability Strategy",
        image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg"
    },
    {
        title: "ESG Reporting",
        image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg"
    },
    {
        title: "Circular Economy",
        image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg"
    },
    {
        title: "Green Technology",
        image: "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg"
    },
    {
        title: "Climate Risk",
        image: "https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg"
    }
];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Climate Change and Sustainability Services
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
