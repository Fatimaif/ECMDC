import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ClientImpactPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          CLIENT IMPACT LIBRARY
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Explore our comprehensive collection of client success stories, case studies, and measurable impact across industries. See how we've helped organizations achieve their most ambitious goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Success Stories</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Discover how leading organizations have partnered with ECMDC to overcome challenges, seize opportunities, and achieve remarkable results.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Fortune 500 Transformations</li>
              <li>• Start-up Scale Success</li>
              <li>• Cross-Industry Innovation</li>
              <li>• Global Expansion Stories</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Measurable Outcomes</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              View quantifiable results that demonstrate the tangible value and return on investment our clients have achieved through our partnerships.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Revenue Growth Metrics</li>
              <li>• Cost Reduction Results</li>
              <li>• Efficiency Improvements</li>
              <li>• Market Share Gains</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Industry Solutions</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Explore sector-specific success stories showcasing deep domain expertise and tailored solutions across diverse industries.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Retail & Consumer Goods</li>
              <li>• Financial Services</li>
              <li>• Healthcare & Life Sciences</li>
              <li>• Technology & Telecom</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Transformation Journeys</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Follow comprehensive transformation narratives from initial challenges through strategic planning to successful implementation and beyond.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Digital Transformation</li>
              <li>• Organizational Redesign</li>
              <li>• AI Implementation</li>
              <li>• Cultural Change</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>1000+</div>
            <div className="text-gray-700">Client Projects</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>85%</div>
            <div className="text-gray-700">Return Clients</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>$50B+</div>
            <div className="text-gray-700">Value Created</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>45+</div>
            <div className="text-gray-700">Countries</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClientImpactPage;
