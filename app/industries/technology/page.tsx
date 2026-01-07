import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TechnologyPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          TECHNOLOGY
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Accelerate innovation and scale your technology business with strategic guidance and technical expertise. We help technology companies navigate rapid growth, optimize product development, and deliver cutting-edge solutions in competitive markets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Product Engineering</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Build scalable, high-performance technology products with modern architectures, agile methodologies, and best-in-class engineering practices.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Cloud-Native Development</li>
              <li>• Microservices Architecture</li>
              <li>• DevOps & CI/CD</li>
              <li>• Quality Engineering</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">AI & Machine Learning</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Integrate artificial intelligence and machine learning capabilities into products and platforms to deliver intelligent, adaptive solutions.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• ML Model Development</li>
              <li>• AI Platform Engineering</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Platform Modernization</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Transform legacy systems into modern, cloud-based platforms that enable agility, scalability, and innovation while reducing technical debt.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Cloud Migration</li>
              <li>• Application Modernization</li>
              <li>• API Development</li>
              <li>• Infrastructure Automation</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Go-to-Market Strategy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Develop and execute effective go-to-market strategies that accelerate product adoption, expand market reach, and drive revenue growth.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Market Positioning</li>
              <li>• Product Launch</li>
              <li>• Channel Strategy</li>
              <li>• Customer Acquisition</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl p-12 text-white" style={{ backgroundColor: '#193362' }}>
          <h2 className="text-3xl font-light mb-4">Scale Your Technology Innovation</h2>
          <p className="text-lg mb-6 opacity-90">
            Partner with us to accelerate product development, enhance technical capabilities, and drive market success in the technology sector.
          </p>
          <button className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#193362' }}>
            Start a Conversation
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TechnologyPage;
