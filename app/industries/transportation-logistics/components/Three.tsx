"use client";
import React, { useState } from "react";

const Three = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter((i) => i !== index));
    } else {
      setExpandedSections([...expandedSections, index]);
    }
  };

    const sections = [
    {
      title: "Optimize Network Operations",
      content: "Transform logistics networks with data-driven optimization and digital tools. This includes route planning, capacity management, and real-time visibility that reduce costs while improving service levels and delivery speed."
    },
    {
      title: "Implement Smart Warehousing",
      content: "Modernize warehouse operations with automation and intelligent systems that enhance productivity. This involves deploying robotics, AI-powered inventory management, and connected systems that enable faster fulfillment and operational efficiency."
    }
  ];

  return (
    <section className="w-full bg-white px-4 md:px-10 pt-10 pb-20 flex flex-col items-center">
      <div className="flex justify-between items-center w-full max-w-4xl mb-2">
        <h2 className="text-sm font-semibold text-black leading-tight text-center">
          Expand All
        </h2>
      </div>
      <div className="border-t border-gray-300 w-full max-w-4xl"></div>

      {sections.map((section, index) => (
        <div key={index} className="w-full max-w-4xl">
          <div
            className={`flex items-center gap-4 py-4 cursor-pointer ${index !== sections.length - 1 ? 'border-b border-gray-300' : ''}`}
            onClick={() => toggleSection(index)}
          >
            <span className="text-3xl font-light text-black">
              {expandedSections.includes(index) ? "−" : "+"}
            </span>
            <span className="text-xl md:text-2xl font-light text-black">
              {section.title}
            </span>
          </div>
          {expandedSections.includes(index) && (
            <div className={`py-6 px-12 bg-gray-50 ${index !== sections.length - 1 ? 'border-b border-gray-300' : ''}`}>
              <p className="text-base text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Three;
