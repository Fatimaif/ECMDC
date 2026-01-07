"use client";
import React, { useEffect, useState } from 'react'
import { fontGeistSans } from '../fonts'

interface HeroProps {
  currentIndex: number;
  onNextClick: () => void;
  onPrevClick: () => void;
}

const Hero = ({ currentIndex, onNextClick, onPrevClick }: HeroProps) => {
  const [hoveredImage, setHoveredImage] = useState<'left' | 'center' | 'right' | null>(null);

  const imageData = [
    { src: "/pictures/laptop.jpg", title: "Hydropower Projects", desc: "Engineering sustainable energy solutions through dam design and water management" },
    { src: "/pictures/office.jpg", title: "Infrastructure Development", desc: "Building resilient roads, bridges, and transportation networks" },
    { src: "/pictures/next.jpg", title: "Water Resources", desc: "Comprehensive water supply and sanitation systems for communities" },
    { src: "/pictures/meeting.jpg", title: "Project Management", desc: "Expert consulting for construction and infrastructure projects" },
    { src: "/pictures/danials.jpg", title: "Environmental Engineering", desc: "Sustainable solutions for environmental management and conservation" },
    { src: "/pictures/pebbels.jpg", title: "Agricultural Development", desc: "Supporting agricultural productivity and rural infrastructure" },
    { src: "/pictures/fande.jpg", title: "Energy Sector", desc: "Comprehensive energy consulting and power system solutions" },
    { src: "/pictures/pavel.jpg", title: "Oil & Gas Services", desc: "Upstream and downstream sector engineering expertise" },
    { src: "/pictures/conference.jpg", title: "Public Health Engineering", desc: "Delivering clean water and sanitation to communities" },
    { src: "/pictures/trade.jpg", title: "Solid Waste Management", desc: "Integrated waste handling and disposal solutions" },
    { src: "/pictures/maria4.jpg", title: "Construction Excellence", desc: "Quality project planning, feasibility studies, and execution" }
  ];

  // Preload all images
  useEffect(() => {
    imageData.forEach((data) => {
      const img = new Image();
      img.src = data.src;
    });
  }, []);

  const getPrevIndex = () => (currentIndex === 0 ? imageData.length - 1 : currentIndex - 1);
  const getNextIndex = () => (currentIndex === imageData.length - 1 ? 0 : currentIndex + 1);

  return (
    <div className="bg-white w-full flex flex-col items-center text-center px-4 mt-10 overflow-hidden max-w-full">
      <p className="text-sm font-bold tracking-wide text-black mb-3">
        WELCOME TO ECMDC
      </p>
      <h1 className="text-4xl md:text-5xl font-light text-black leading-tight max-w-4xl">
        Empowering Excellence through<br />Engineering & Consulting
      </h1>

      <div className="mt-12 w-full px-2 h-[34rem] flex items-center justify-center overflow-hidden">
        <div className="flex items-center gap-8" style={{ transition: 'none', transform: 'translateZ(0)' }}>
          {/* Left Image */}
          <div
            className="relative w-64 h-80 flex-shrink-0 overflow-hidden cursor-pointer"
            onClick={onPrevClick}
          >
            <img
              key={`prev-${getPrevIndex()}`}
              src={imageData[getPrevIndex()].src}
              alt="Previous"
              loading="eager"
              className="w-full h-full object-cover"
              style={{ transition: 'none', animation: 'none', transform: 'translateZ(0)', willChange: 'auto' }}
            />
          </div>

          {/* Center Image */}
          <div
            className="relative w-96 h-[32rem] flex-shrink-0 overflow-hidden"
          >
            <img
              key={`current-${currentIndex}`}
              src={imageData[currentIndex].src}
              alt="Current"
              loading="eager"
              className="w-full h-full object-cover"
              style={{ transition: 'none', animation: 'none', transform: 'translateZ(0)', willChange: 'auto' }}
            />
            {/* Button - Always visible */}
            <div className="absolute top-6 left-6">
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded px-3 py-1.5">
                <h3 className="text-sm font-light text-white">
                  {imageData[currentIndex].title}
                </h3>
              </div>
            </div>
            {/* Small white box - always visible */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/60 backdrop-blur-sm rounded-xl">
              <p className="text-xs text-gray-600 mb-2 text-left">Article 15, 2020</p>
              <p className="text-base text-black leading-relaxed text-left">
                {imageData[currentIndex].desc}
              </p>
            </div>

            {/* White overlay that slides up from bottom on hover */}
            <div
              className="absolute inset-0 overflow-hidden"
              onMouseEnter={() => setHoveredImage('center')}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className={`absolute inset-x-0 h-full bg-white/60 backdrop-blur-sm transition-transform duration-200 ease-out ${fontGeistSans} ${
                hoveredImage === 'center' ? 'translate-y-0' : 'translate-y-full'
              }`}>
                <div className="p-8 h-full flex flex-col justify-center">
                  <p className="text-xs text-gray-600 mb-2 text-left">Article 15, 2020</p>
                  <p className="text-base text-black leading-relaxed text-left mb-4">
                    {imageData[currentIndex].desc}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed text-left mt-4">
                    Learn more about our core areas of expertise by selecting your topic of interest.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative w-64 h-80 flex-shrink-0 overflow-hidden cursor-pointer"
            onClick={onNextClick}
          >
            <img
              key={`next-${getNextIndex()}`}
              src={imageData[getNextIndex()].src}
              alt="Next"
              loading="eager"
              className="w-full h-full object-cover"
              style={{ transition: 'none', animation: 'none', transform: 'translateZ(0)', willChange: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero