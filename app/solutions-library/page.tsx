"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MdAdb } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { BsArrowRepeat } from "react-icons/bs";
import { FaIndustry, FaWater, FaBolt, FaRoad } from "react-icons/fa";

const SolutionsLibraryPage = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Engineering', 'Consulting', 'Water & Energy', 'Infrastructure'];

  const solutions = [
    {
      name: "Hydropower Engineering Solutions",
      category: "Water & Energy",
      icon: <FaBolt />,
      description: "Comprehensive dam design, construction, and water management solutions for sustainable energy generation.",
      features: ["Dam Design & Construction", "Hydrology Studies", "Power Generation Systems", "Environmental Compliance"]
    },
    {
      name: "Water Supply & Sanitation",
      category: "Engineering",
      icon: <FaWater />,
      description: "Complete water supply network design and wastewater management systems for communities and municipalities.",
      features: ["Water Treatment Plants", "Distribution Networks", "Sewerage Systems", "Quality Management"]
    },
    {
      name: "Infrastructure Development",
      category: "Infrastructure",
      icon: <FaRoad />,
      description: "Highway design, bridge engineering, and transportation infrastructure for resilient connectivity.",
      features: ["Highway Design", "Bridge Engineering", "Pavement Design", "Traffic Engineering"]
    },
    {
      name: "Project Management Services",
      category: "Consulting",
      icon: <IoMdTimer />,
      description: "End-to-end project management, feasibility studies, and strategic consulting for infrastructure projects.",
      features: ["Feasibility Studies", "Project Planning", "Quality Assurance", "Risk Management"]
    },
    {
      name: "Environmental Engineering",
      category: "Engineering",
      icon: <FaIndustry />,
      description: "Environmental impact assessments and sustainability solutions for responsible development.",
      features: ["Impact Assessment", "Sustainability Planning", "Resource Management", "Compliance Monitoring"]
    },
    {
      name: "Energy Sector Consulting",
      category: "Water & Energy",
      icon: <FaBolt />,
      description: "Comprehensive energy consulting for power generation, transmission, and renewable energy projects.",
      features: ["Power Generation", "Grid Design", "Renewable Energy", "Energy Efficiency"]
    },
    {
      name: "Agricultural Infrastructure",
      category: "Infrastructure",
      icon: <MdAdb />,
      description: "Irrigation systems and rural infrastructure development for agricultural productivity.",
      features: ["Irrigation Design", "Farm Infrastructure", "Water Management", "Rural Development"]
    },
    {
      name: "Solid Waste Management",
      category: "Engineering",
      icon: <BsArrowRepeat />,
      description: "Integrated waste collection, disposal, and recycling solutions for sustainable communities.",
      features: ["Collection Systems", "Landfill Design", "Recycling Facilities", "Waste-to-Energy"]
    },
    {
      name: "Oil & Gas Engineering",
      category: "Infrastructure",
      icon: <FaIndustry />,
      description: "Upstream and downstream engineering services for oil and gas sector projects.",
      features: ["Pipeline Design", "Production Engineering", "Refining Infrastructure", "Safety Systems"]
    }
  ];

  const filteredSolutions = selectedCategory === 'All'
    ? solutions
    : solutions.filter(s => s.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          ECMDC Solutions Library
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Comprehensive engineering and consulting solutions backed by 24+ years of expertise, scientific rigor, and proven methodologies to accelerate your infrastructure and development projects.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>250+</div>
            <div className="text-gray-700">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>35+</div>
            <div className="text-gray-700">Countries Served</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>11</div>
            <div className="text-gray-700">Core Sectors</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>56+</div>
            <div className="text-gray-700">Satisfied Clients</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={selectedCategory === cat ? { backgroundColor: '#193362' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSolutions.map((solution, idx) => (
            <div key={idx} className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#193362] transition-all duration-300 hover:shadow-xl flex flex-col h-full">
              {/* Header */}
              <div className="p-6 pb-4" style={{ backgroundColor: '#193362' }}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 text-2xl" style={{ color: '#193362' }}>
                    {solution.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-blue-200 uppercase tracking-wide">
                      {solution.category}
                    </div>
                    <h3 className="text-xl font-semibold text-white mt-1">
                      {solution.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {solution.description}
                </p>

                <div className="mb-4 flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span style={{ color: '#193362' }}>•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default SolutionsLibraryPage;
