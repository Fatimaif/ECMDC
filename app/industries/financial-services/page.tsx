import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const FinancialServicesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          FINANCIAL SERVICES
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Navigate the evolving financial services landscape with confidence. We help banks, insurance companies, and investment firms leverage technology, manage risk, and deliver exceptional customer experiences in an increasingly digital and regulated environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Digital Banking</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Transform traditional banking operations with digital-first solutions that enhance customer engagement, streamline processes, and drive operational efficiency.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Mobile Banking Platforms</li>
              <li>• Open Banking APIs</li>
              <li>• Digital Payments</li>
              <li>• Customer Experience</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Risk & Compliance</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Strengthen risk management frameworks and ensure regulatory compliance while maintaining agility in a complex and evolving regulatory landscape.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Risk Management</li>
              <li>• Regulatory Compliance</li>
              <li>• AML & Fraud Detection</li>
              <li>• Stress Testing</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Wealth Management</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Deliver personalized wealth management solutions powered by advanced analytics and digital advisory platforms that meet evolving client expectations.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Robo-Advisory</li>
              <li>• Portfolio Management</li>
              <li>• Client Analytics</li>
              <li>• Investment Platforms</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Insurance Innovation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Modernize insurance operations with AI-driven underwriting, claims processing automation, and innovative distribution channels.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Automated Underwriting</li>
              <li>• Claims Automation</li>
              <li>• Insurtech Solutions</li>
              <li>• Customer Portals</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl p-12 text-white" style={{ backgroundColor: '#193362' }}>
          <h2 className="text-3xl font-light mb-4">Accelerate Financial Innovation</h2>
          <p className="text-lg mb-6 opacity-90">
            Partner with us to navigate digital transformation, enhance customer experiences, and drive growth in the financial services sector.
          </p>
          <button className="bg-white px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#193362' }}>
            Explore Solutions
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FinancialServicesPage;
