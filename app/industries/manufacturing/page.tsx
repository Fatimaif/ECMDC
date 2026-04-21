import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ManufacturingPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          MANUFACTURING
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Drive operational excellence and embrace Industry 4.0 with intelligent manufacturing solutions. We help manufacturers optimize production, improve quality, and build resilient supply chains through digital transformation and advanced technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Smart Manufacturing</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Transform production operations with IoT, automation, and real-time analytics that enable predictive maintenance and optimized performance.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Industrial IoT</li>
              <li>• Predictive Maintenance</li>
              <li>• Process Automation</li>
              <li>• Digital Twins</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Supply Chain Optimization</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Build resilient, efficient supply chains with advanced planning, visibility, and collaboration capabilities across the value network.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Demand Planning</li>
              <li>• Supply Chain Visibility</li>
              <li>• Procurement Optimization</li>
              <li>• Supplier Collaboration</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Quality Management</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Enhance product quality and compliance with integrated quality management systems and data-driven continuous improvement programs.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Quality Control Systems</li>
              <li>• Statistical Process Control</li>
              <li>• Compliance Management</li>
              <li>• Root Cause Analysis</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Production Planning</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Optimize production scheduling, resource allocation, and capacity planning to maximize throughput and minimize costs.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Advanced Planning Systems</li>
              <li>• Capacity Management</li>
              <li>• Shop Floor Control</li>
              <li>• Performance Analytics</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl p-12 text-white" style={{ backgroundColor: '#193362' }}>
          <h2 className="text-3xl font-light mb-4">Modernize Your Manufacturing Operations</h2>
          <p className="text-lg mb-6 opacity-90">
            Embrace Industry 4.0 and drive operational excellence with our comprehensive manufacturing solutions. Discover how we can help transform your operations.
          </p>
          <button className="bg-white px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#193362' }}>
            Request Demo
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ManufacturingPage;
