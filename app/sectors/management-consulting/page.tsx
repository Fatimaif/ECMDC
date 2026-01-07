import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ManagementConsultingPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Management Consulting
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Organizational reform and strategic guidance for public and private sector entities across multiple industries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Strategic Planning</h3>
            <p className="text-gray-700 leading-relaxed">
              Development of comprehensive strategies for organizational growth and operational excellence.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Organizational Development</h3>
            <p className="text-gray-700 leading-relaxed">
              Institutional strengthening and organizational restructuring for improved efficiency.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Project Management</h3>
            <p className="text-gray-700 leading-relaxed">
              End-to-end project management services and PMO establishment.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Process Optimization</h3>
            <p className="text-gray-700 leading-relaxed">
              Business process reengineering and operational efficiency improvements.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ManagementConsultingPage;
