import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HydropowerPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Hydropower
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Engineering sustainable energy solutions through dam design, construction, and comprehensive water resource management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Dam Design & Construction</h3>
            <p className="text-gray-700 leading-relaxed">
              Expert design and construction services for hydropower dams of all scales and configurations.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Hydrology Studies</h3>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive hydrological assessments and river basin analysis for hydropower development.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Power Generation Systems</h3>
            <p className="text-gray-700 leading-relaxed">
              Design and implementation of turbines, generators, and power evacuation systems.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Environmental Compliance</h3>
            <p className="text-gray-700 leading-relaxed">
              Environmental impact assessment and mitigation measures for hydropower projects.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HydropowerPage;
