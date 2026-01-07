import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BusinessStrategyPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          BUSINESS STRATEGY
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Navigate complex business challenges and unlock sustainable growth with our strategic consulting expertise. We partner with organizations to develop and execute transformative strategies that drive competitive advantage and long-term value creation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Strategic Planning</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Develop comprehensive strategic plans that align organizational goals with market opportunities, creating clear roadmaps for sustainable growth and competitive positioning.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Vision & Mission Development</li>
              <li>• Strategic Roadmapping</li>
              <li>• Market Analysis</li>
              <li>• Competitive Strategy</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Digital Transformation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Guide organizations through digital transformation journeys, leveraging technology to reimagine business models, optimize operations, and enhance customer experiences.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Digital Strategy</li>
              <li>• Technology Roadmaps</li>
              <li>• Change Management</li>
              <li>• Innovation Programs</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Operational Excellence</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Optimize business processes and operational capabilities to drive efficiency, reduce costs, and improve quality across the entire value chain.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Process Optimization</li>
              <li>• Performance Management</li>
              <li>• Cost Reduction</li>
              <li>• Quality Improvement</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Growth Strategy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Identify and capitalize on growth opportunities through market expansion, new product development, strategic partnerships, and mergers and acquisitions.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Market Entry Strategy</li>
              <li>• Product Innovation</li>
              <li>• M&A Advisory</li>
              <li>• Partnership Development</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl p-12 text-white" style={{ backgroundColor: '#193362' }}>
          <h2 className="text-3xl font-light mb-4">Chart Your Path to Success</h2>
          <p className="text-lg mb-6 opacity-90">
            Partner with us to develop strategies that drive meaningful business transformation and sustainable competitive advantage. Let's discuss your strategic priorities.
          </p>
          <button className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#193362' }}>
            Schedule Consultation
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessStrategyPage;
