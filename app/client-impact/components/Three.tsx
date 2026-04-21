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
      title: "Deliver Measurable Results",
      content: "We partner with clients to achieve tangible business outcomes through data-driven strategies and proven methodologies. Our approach combines deep industry expertise with advanced analytics to deliver sustainable value creation and competitive advantage across all operations."
    },
    {
      title: "Build Lasting Capabilities",
      content: "We don't just solve problems—we build internal capabilities that enable long-term success. Through knowledge transfer, training programs, and collaborative approaches, we ensure your teams have the skills and tools needed to sustain improvements and drive continuous innovation."
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
