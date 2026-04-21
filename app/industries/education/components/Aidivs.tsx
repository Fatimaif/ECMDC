import React from "react";

const Aidivs = () => {
  const services = [
    {
      title: "Digital Learning",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    },
    {
      title: "Curriculum Innovation",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
    },
    {
      title: "Student Success",
      image: "https://images.pexels.com/photos/3184367/pexels-photo-3184367.jpeg",
    },
    {
      title: "Operational Excellence",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg",
    },
    {
      title: "EdTech Integration",
      image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg",
    },
    {
      title: "Financial Sustainability",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Education Services
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
