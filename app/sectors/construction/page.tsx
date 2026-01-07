import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ConstructionPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Construction
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Comprehensive construction services including project planning, feasibility studies, design, and execution across diverse infrastructure projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Project Management</h3>
            <p className="text-gray-700 leading-relaxed">
              End-to-end project management from conception through completion, ensuring quality and timely delivery.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Feasibility Studies</h3>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive analysis and feasibility assessment for construction projects of all scales.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Design & Engineering</h3>
            <p className="text-gray-700 leading-relaxed">
              Innovative structural and architectural design solutions backed by rigorous engineering principles.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Quality Assurance</h3>
            <p className="text-gray-700 leading-relaxed">
              Strict quality control and site supervision to ensure construction excellence and safety standards.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConstructionPage;
