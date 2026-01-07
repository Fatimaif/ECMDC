import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HealthcarePage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          HEALTHCARE
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Transform healthcare delivery with innovative solutions that improve patient outcomes, enhance operational efficiency, and enable value-based care. We help healthcare organizations navigate digital transformation while maintaining focus on quality patient care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Digital Health Solutions</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Implement cutting-edge digital health technologies that enable remote care, improve patient engagement, and support clinical decision-making.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Telemedicine Platforms</li>
              <li>• Patient Portals</li>
              <li>• Mobile Health Apps</li>
              <li>• Remote Monitoring</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Healthcare Analytics</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Leverage advanced analytics and AI to derive insights from clinical and operational data, driving better outcomes and efficiency.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Clinical Analytics</li>
              <li>• Population Health</li>
              <li>• Predictive Modeling</li>
              <li>• Performance Metrics</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">EHR & Interoperability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Optimize electronic health record systems and enable seamless data exchange across the care continuum to improve coordination and outcomes.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• EHR Optimization</li>
              <li>• FHIR Integration</li>
              <li>• Data Exchange</li>
              <li>• System Integration</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Operational Excellence</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Streamline healthcare operations, reduce costs, and improve quality through process optimization and technology-enabled solutions.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Revenue Cycle Management</li>
              <li>• Supply Chain Optimization</li>
              <li>• Workflow Automation</li>
              <li>• Quality Improvement</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl p-12 text-white" style={{ backgroundColor: '#193362' }}>
          <h2 className="text-3xl font-light mb-4">Advance Healthcare Delivery</h2>
          <p className="text-lg mb-6 opacity-90">
            Transform your healthcare organization with solutions designed to improve patient care, operational efficiency, and clinical outcomes.
          </p>
          <button className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#193362' }}>
            Learn More
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HealthcarePage;
