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
      title: "Attract and Develop Talent",
      content: "Build workforce with skills needed for business success. This includes implementing recruiting strategies, developing career paths, and providing learning opportunities that attract top talent and build capabilities."
    },
    {
      title: "Engage and Retain Employees",
      content: "Create work environment that motivates and retains employees. This involves improving employee experience, providing competitive rewards, and building culture that fosters engagement and reduces turnover."
    }
  ];

  return (
    <section className="w-full bg-white px-4 md:px-10 pt-10 pb-20 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-light text-black max-w-4xl leading-tight text-center">
        Two Strategic Plays for Talent Excellence
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
