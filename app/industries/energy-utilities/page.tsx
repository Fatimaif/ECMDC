import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const EnergyUtilitiesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          ENERGY & UTILITIES
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Navigate the energy transition and modernize utility operations with innovative solutions. We help energy and utility companies embrace clean energy, optimize grid operations, and deliver reliable service while meeting sustainability goals and regulatory requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Smart Grid Solutions</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Modernize grid infrastructure with advanced metering, distribution automation, and real-time monitoring for improved reliability and efficiency.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Advanced Metering Infrastructure</li>
              <li>• Distribution Automation</li>
              <li>• Grid Analytics</li>
              <li>• Outage Management</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Renewable Energy Integration</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Enable the transition to clean energy with solutions for renewable integration, energy storage, and distributed energy resource management.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Renewable Energy Management</li>
              <li>• Energy Storage Systems</li>
              <li>• Microgrid Solutions</li>
              <li>• Virtual Power Plants</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Asset Management</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Optimize asset performance and lifecycle management with predictive analytics, maintenance planning, and risk-based decision-making.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Predictive Maintenance</li>
              <li>• Asset Performance Management</li>
              <li>• Risk Assessment</li>
              <li>• Work Management</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Customer Experience</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Enhance customer engagement with digital self-service platforms, demand response programs, and personalized energy management tools.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Customer Portals</li>
              <li>• Demand Response</li>
              <li>• Energy Management</li>
              <li>• Billing & Payment Systems</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl p-12 text-white" style={{ backgroundColor: '#193362' }}>
          <h2 className="text-3xl font-light mb-4">Power the Energy Transition</h2>
          <p className="text-lg mb-6 opacity-90">
            Transform your energy and utility operations for a sustainable future. Connect with us to explore solutions for grid modernization and clean energy integration.
          </p>
          <button className="bg-white px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#193362' }}>
            Get in Touch
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnergyUtilitiesPage;
