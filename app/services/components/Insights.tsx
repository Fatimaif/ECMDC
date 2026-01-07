"use client";
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const Insights = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      image: "/pictures/multi.jpg",
      title: "AI Agents Reinvent the Consumer Experience",
      bg: "#efe4d6",
    },
    {
      image: "/pictures/modern.jpg",
      title: "SBB Is Transforming Train Maintenance Through XR and AI",
      bg: "#e9ece6",
    },
  ];

  return (
    <section className="w-full py-6">
      <div className="w-full px-6 mb-4 flex flex-col items-center">
        <h2 className="text-5xl font-light text-gray-900 max-w-3xl leading-tight text-center">
          Our Clients&apos; Success in Artificial Intelligence
        </h2>
      </div>
      <div className="w-full px-6 flex justify-center">
        <div className="w-full flex gap-4 h-[600px]">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
                activeIndex === index ? 'flex-[3]' : 'flex-[1]'
              }`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-8 left-8 rounded-3xl p-6 max-w-xs"
                style={{ backgroundColor: card.bg }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-2">
                  Client Impact
                </p>
                <h3 className="text-xl font-light leading-snug">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
