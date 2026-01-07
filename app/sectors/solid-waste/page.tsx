import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SolidWastePage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Solid Waste Management
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Integrated waste handling and disposal solutions for sustainable and environmentally responsible waste management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Waste Collection Systems</h3>
            <p className="text-gray-700 leading-relaxed">
              Design and optimization of municipal solid waste collection networks and logistics.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Landfill Design</h3>
            <p className="text-gray-700 leading-relaxed">
              Engineered landfill design with environmental protection and leachate management systems.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Recycling Facilities</h3>
            <p className="text-gray-700 leading-relaxed">
              Material recovery facilities and recycling infrastructure development.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Waste-to-Energy</h3>
            <p className="text-gray-700 leading-relaxed">
              Energy recovery from waste through incineration and biogas generation systems.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SolidWastePage;
