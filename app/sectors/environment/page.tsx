import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const EnvironmentPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Environment
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Environmental management and sustainability solutions that protect natural resources and promote ecological balance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Environmental Impact Assessment</h3>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive environmental impact studies and mitigation strategies for development projects.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Sustainability Planning</h3>
            <p className="text-gray-700 leading-relaxed">
              Long-term environmental sustainability frameworks and conservation strategies.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Resource Management</h3>
            <p className="text-gray-700 leading-relaxed">
              Sustainable management of natural resources including water, soil, and biodiversity.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Environmental Monitoring</h3>
            <p className="text-gray-700 leading-relaxed">
              Ongoing environmental monitoring systems and compliance reporting.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnvironmentPage;
