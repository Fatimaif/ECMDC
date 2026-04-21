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
      title: "Build Innovation Capabilities",
      content: "Develop processes and culture that support continuous innovation. This includes establishing innovation labs, implementing stage-gate processes, and creating partnerships that bring new ideas and technologies into the organization."
    },
    {
      title: "Commercialize Innovation",
      content: "Transform innovative ideas into successful products and services. This involves validating concepts, developing business cases, and executing go-to-market strategies that capture value from innovation investments."
    }
  ];

  return (
    <section className="w-full bg-white px-4 md:px-10 pt-10 pb-20 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-black max-w-4xl leading-tight text-center">
        Two Strategic Plays for Innovation Success
      </h2>
      <div className="mt-6 border-t border-gray-300 w-full max-w-4xl"></div>

      {sections.map((section, index) => (
        <div key={index} className="w-full max-w-4xl">
          <div
            className="flex items-center gap-4 py-4 border-b border-gray-300 cursor-pointer"
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
            <div className="py-6 px-12 bg-gray-50 border-b border-gray-300">
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
