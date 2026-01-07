import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const RetailConsumerGoodsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          RETAIL & CONSUMER GOODS
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Thrive in the evolving retail landscape with solutions that deliver seamless omnichannel experiences, optimize operations, and drive customer loyalty. We help retailers and consumer goods companies adapt to changing consumer expectations and market dynamics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Omnichannel Commerce</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Create seamless shopping experiences across all channels, integrating online and offline touchpoints to meet customers wherever they are.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• E-commerce Platforms</li>
              <li>• Mobile Commerce</li>
              <li>• In-Store Technology</li>
              <li>• Unified Commerce</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Customer Experience</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Deliver personalized, engaging customer experiences powered by data insights and AI-driven recommendations that drive loyalty and growth.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Personalization Engines</li>
              <li>• Customer Analytics</li>
              <li>• Loyalty Programs</li>
              <li>• Marketing Automation</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Supply Chain Excellence</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Optimize supply chain operations with advanced planning, inventory management, and logistics solutions that ensure product availability and efficiency.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Demand Forecasting</li>
              <li>• Inventory Optimization</li>
              <li>• Logistics Management</li>
              <li>• Supplier Collaboration</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Store Operations</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Enhance store productivity and customer service with modern POS systems, workforce management, and operational analytics.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Point of Sale Systems</li>
              <li>• Workforce Management</li>
              <li>• Store Analytics</li>
              <li>• Loss Prevention</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl p-12 text-white" style={{ backgroundColor: '#193362' }}>
          <h2 className="text-3xl font-light mb-4">Transform Your Retail Business</h2>
          <p className="text-lg mb-6 opacity-90">
            Deliver exceptional customer experiences and operational excellence with our retail and consumer goods solutions. Let's explore how we can help.
          </p>
          <button className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#193362' }}>
            Connect With Us
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RetailConsumerGoodsPage;
