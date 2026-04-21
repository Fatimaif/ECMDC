import React from "react";
import { MdArrowOutward } from "react-icons/md";

interface KeyArea {
  title: string;
  description: string;
}

interface KeyAreasSectionProps {
  areas: KeyArea[];
}

const KeyAreasSection: React.FC<KeyAreasSectionProps> = ({ areas }) => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-16 text-center">
          Key Areas of Focus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-[#F1EEEA] rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-light text-[#1a1a1a] mb-4">
                {area.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAreasSection;
