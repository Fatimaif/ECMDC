import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PublicHealthPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Public Health Engineering
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Delivering clean water and sanitation to communities through comprehensive public health engineering solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Water Supply Systems</h3>
            <p className="text-gray-700 leading-relaxed">
              Design and implementation of municipal water supply networks and treatment facilities.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Wastewater Management</h3>
            <p className="text-gray-700 leading-relaxed">
              Sewerage systems, wastewater treatment plants, and disposal infrastructure.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Sanitation Infrastructure</h3>
            <p className="text-gray-700 leading-relaxed">
              Community sanitation facilities and public health infrastructure development.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Water Quality Management</h3>
            <p className="text-gray-700 leading-relaxed">
              Water quality monitoring, testing, and treatment optimization.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PublicHealthPage;
