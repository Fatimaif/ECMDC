"use client";
import React, { useState } from "react";

const Client = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      image: "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg",
      largeImage: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg",
      title: "EV Platform",
      largeTitle: "Next-Generation EV Platform Launch",
      bg: "#efe4d6",
    },
    {
      image: "https://images.pexels.com/photos/63294/autos-technology-vw-multi-storey-car-park-63294.jpeg",
      largeImage: "https://images.pexels.com/photos/1592354/pexels-photo-1592354.jpeg",
      title: "Smart Factory",
      largeTitle: "Digital Manufacturing Transformation",
      bg: "#e9ece6",
    },
    {
      image: "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg",
      largeImage: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
      title: "Autonomous Tech",
      largeTitle: "Advanced Driver Assistance Systems",
      bg: "#efe4d6",
    },
    {
      image: "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg",
      largeImage: "https://images.pexels.com/photos/2127022/pexels-photo-2127022.jpeg",
      title: "Connected Services",
      largeTitle: "Digital Customer Experience Platform",
      bg: "#e9ece6",
    },
  ];

  return (
    <section className="w-full bg-[#f5f3ee] py-20">
      <div className="w-full px-6 mb-14 flex flex-col items-center">
        <h2 className="text-5xl font-light text-gray-900 max-w-3xl leading-tight text-center">
          Our Client Success Stories
        </h2>

        <div className="mt-6 w-full text-center">
          <a
            href="#"
            className="text-sm font-semibold tracking-wide underline underline-offset-4"
          >
            EXPLORE MORE CLIENT PROJECTS
          </a>
        </div>
      </div>
      <div className="w-full px-6 flex justify-center">
        <div className="flex gap-4 w-full max-w-7xl h-[600px]">
          <div className="w-[60%] relative rounded-3xl overflow-hidden">
            <img
              src={cards[activeIndex].largeImage}
              alt={cards[activeIndex].largeTitle}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div
              className="absolute bottom-8 left-8 rounded-3xl p-6 max-w-xs z-10"
              style={{ backgroundColor: cards[activeIndex].bg }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider mb-2">
                Client Impact
              </p>
              <h3 className="text-xl font-light leading-snug">
                {cards[activeIndex].largeTitle}
              </h3>
            </div>
          </div>
          <div className="w-[38%] grid grid-cols-2 auto-rows-fr gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out h-full focus:outline-none outline-none ${
                  activeIndex === index ? '' : 'hover:scale-105'
                }`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-black ${index === 0 ? 'opacity-50' : 'opacity-30'}`}></div>
                <div
                  className="absolute bottom-4 left-4 rounded-2xl p-3 max-w-[150px] z-10"
                  style={{ backgroundColor: card.bg }}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wider mb-1">
                    Client Impact
                  </p>
                  <h3 className="text-sm font-light leading-tight">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
