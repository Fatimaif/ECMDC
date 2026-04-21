import React from 'react';
import Header from '../components/Header';
import Exploremore from '../services/components/Exploremore';
import Footer from '../components/Footer';

const EcmdcXPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          ECMDC X
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          A global, state-of-the-art engineering and consulting service provider engaged in water resources, energy, agriculture, infrastructure, environment, oil and gas, transit systems, highways, and development across 35+ countries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">AI & GenAI Solutions</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Harness the power of artificial intelligence and generative AI to drive innovation, enhance productivity, and create new value streams across your organization.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Custom AI Model Development</li>
              <li>• GenAI Integration</li>
              <li>• Machine Learning Solutions</li>
              <li>• Natural Language Processing</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Platform Development</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Build scalable, industrial-grade platforms tailored to your unique business requirements, leveraging modern architecture and best practices.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Cloud-Native Architecture</li>
              <li>• Microservices Design</li>
              <li>• API Development</li>
              <li>• Data Infrastructure</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Digital Transformation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Reimagine your business processes and customer experiences through comprehensive digital transformation strategies and implementation.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Process Automation</li>
              <li>• Legacy System Modernization</li>
              <li>• Customer Experience Design</li>
              <li>• Agile Implementation</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Technology Implementation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Execute technology initiatives with precision through our proven implementation methodologies and hands-on technical expertise.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Full-Stack Development</li>
              <li>• DevOps & CI/CD</li>
              <li>• Quality Assurance</li>
              <li>• Performance Optimization</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>250+</div>
            <div className="text-gray-700">Projects Completed</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>42</div>
            <div className="text-gray-700">Employees</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>24+</div>
            <div className="text-gray-700">Years Experience</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>56+</div>
            <div className="text-gray-700">Satisfied Clients</div>
          </div>
        </div>
      </main>
      <Exploremore />
      <Footer />
    </div>
  );
};

export default EcmdcXPage;
