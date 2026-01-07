import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AgriculturePage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Agriculture
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Supporting agricultural productivity and rural infrastructure development through comprehensive engineering and consulting services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Irrigation Systems</h3>
            <p className="text-gray-700 leading-relaxed">
              Design and implementation of modern irrigation infrastructure to maximize crop yields and water efficiency.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Farm Infrastructure</h3>
            <p className="text-gray-700 leading-relaxed">
              Development of agricultural facilities, storage systems, and rural road networks.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Water Management</h3>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive water resource planning for agricultural applications and sustainability.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Agricultural Consulting</h3>
            <p className="text-gray-700 leading-relaxed">
              Expert guidance on agricultural project planning, feasibility studies, and capacity building.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgriculturePage;
