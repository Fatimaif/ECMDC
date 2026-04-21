import React from "react";

const Aidivs = () => {
  const services = [
    {
        title: "Security Assessment",
        image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"
    },
    {
        title: "Threat Detection",
        image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg"
    },
    {
        title: "Compliance & Governance",
        image: "https://images.pexels.com/photos/8761554/pexels-photo-8761554.jpeg"
    },
    {
        title: "Identity Management",
        image: "https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg"
    },
    {
        title: "Security Operations",
        image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg"
    },
    {
        title: "Incident Response",
        image: "https://images.pexels.com/photos/5240547/pexels-photo-5240547.jpeg"
    }
];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12 text-center">
        Our Cybersecurity Services
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
