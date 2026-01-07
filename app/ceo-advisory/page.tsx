import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CeoAdvisoryPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          CEO ADVISORY
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Strategic guidance for C-suite executives navigating complex business challenges. Our CEO Advisory services provide personalized insights, executive coaching, and strategic planning support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Executive Leadership Coaching</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              One-on-one coaching tailored to develop leadership capabilities, enhance decision-making skills, and navigate complex organizational challenges.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Personal Leadership Development</li>
              <li>• Executive Presence Building</li>
              <li>• Decision-Making Frameworks</li>
              <li>• Stakeholder Management</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Strategic Planning</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Comprehensive strategic planning support to help define vision, set priorities, and create actionable roadmaps for sustainable growth.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Vision & Strategy Development</li>
              <li>• Growth Planning</li>
              <li>• Market Positioning</li>
              <li>• Competitive Strategy</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Board Advisory Services</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Expert guidance for board effectiveness, governance, and strategic oversight to maximize organizational performance.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Board Effectiveness Reviews</li>
              <li>• Governance Frameworks</li>
              <li>• Director Development</li>
              <li>• Risk Oversight</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Change Management</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Strategic support for leading organizational change, managing transformation initiatives, and building resilient cultures.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Transformation Leadership</li>
              <li>• Culture Change</li>
              <li>• Stakeholder Alignment</li>
              <li>• Communication Strategy</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-light text-black mb-8">Our Advisory Team</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our CEO Advisory practice is led by former CEOs, board directors, and senior executives with decades of experience leading organizations through transformation, growth, and change.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>200+</div>
              <div className="text-gray-700">Years Combined Experience</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>50+</div>
              <div className="text-gray-700">Former CEOs</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>100%</div>
              <div className="text-gray-700">Confidential</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CeoAdvisoryPage;
