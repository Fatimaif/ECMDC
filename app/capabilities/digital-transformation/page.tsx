import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DigitalTransformationPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Digital Transformation
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Drive meaningful change across your organization with comprehensive digital transformation strategies that reimagine business processes, enhance customer experiences, and unlock new value streams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Strategy & Roadmap</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Develop comprehensive digital transformation strategies aligned with your business objectives, complete with actionable roadmaps for implementation.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Digital maturity assessment</li>
              <li>• Transformation roadmap development</li>
              <li>• Change management planning</li>
              <li>• ROI modeling and tracking</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Process Optimization</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Streamline operations and eliminate inefficiencies through intelligent automation and process redesign.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Business process reengineering</li>
              <li>• Workflow automation</li>
              <li>• Legacy system modernization</li>
              <li>• Operational excellence</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Customer Experience</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Transform customer interactions across all touchpoints with digital-first experiences that drive engagement and loyalty.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Customer journey mapping</li>
              <li>• Omnichannel experience design</li>
              <li>• Personalization strategies</li>
              <li>• Digital touchpoint optimization</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Technology Enablement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Leverage cutting-edge technologies to enable new capabilities and accelerate your digital transformation journey.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Cloud migration and optimization</li>
              <li>• API and integration platforms</li>
              <li>• Data platform modernization</li>
              <li>• DevOps and agile adoption</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl p-12 text-white mb-12" style={{ backgroundColor: '#193362' }}>
          <h2 className="text-3xl font-light mb-4">Start Your Transformation Journey</h2>
          <p className="text-lg mb-6 opacity-90">
            Partner with our experts to design and execute a digital transformation strategy that delivers measurable business value.
          </p>
          <button className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#193362' }}>
            Get Started
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalTransformationPage;
