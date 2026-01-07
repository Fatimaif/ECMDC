import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const EnergyPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Energy
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Comprehensive energy sector consulting and power system solutions for sustainable and reliable energy infrastructure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Power Generation</h3>
            <p className="text-gray-700 leading-relaxed">
              Planning and design of power generation facilities including renewable and conventional sources.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Transmission & Distribution</h3>
            <p className="text-gray-700 leading-relaxed">
              Design and optimization of electrical transmission and distribution networks.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Energy Efficiency</h3>
            <p className="text-gray-700 leading-relaxed">
              Energy audits and efficiency improvement strategies for industrial and commercial applications.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Renewable Energy</h3>
            <p className="text-gray-700 leading-relaxed">
              Solar, wind, and other renewable energy project development and implementation.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnergyPage;
