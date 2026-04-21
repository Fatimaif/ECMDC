import React from "react";

const Aidivs = () => {
  const services = [
    {
      title: "Electric Vehicles",
      image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg",
    },
    {
      title: "Autonomous Driving",
      image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg",
    },
    {
      title: "Smart Manufacturing",
      image: "https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg",
    },
    {
      title: "Connected Mobility",
      image: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-6 text-center">
          Our Approach to Automotive Strategy
        </h2>
        <p className="text-sm md:text-base leading-relaxed text-[#1a1a1a] text-center max-w-4xl mb-6 mx-auto">
          The automotive industry is shifting rapidly, propelled by new ideas and possibilities. ECMDC helps companies turn inspiration into innovation, creating the vision that takes them—and the industry—even further, while building the resilience to respond quickly to challenges and uncertainty, such as volatile supply chains. We partner with clients to create a next-generation automotive strategy that accelerates the journey to sustainable mobility and electrifies the future, as well as the cars themselves. And we empower them to seize new opportunities long after we've left the scene.
        </p>
        <p className="text-sm md:text-base leading-relaxed text-[#1a1a1a] text-center max-w-4xl mx-auto">
          Collaboration and enablement are at the heart of our automotive consulting work. So is our holistic approach. With more than 1,100 experts around the globe and across the value chain, we help companies both new and old develop connected and autonomous vehicles, pursue new businesses, and launch large-scale automotive digital transformation projects. Five key themes stand out:
        </p>
      </div>
    </section>
  );
};

export default Aidivs;
