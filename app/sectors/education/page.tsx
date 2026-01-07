import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const EducationPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Education
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Institutional capacity building and educational infrastructure development to support learning and development initiatives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Capacity Building</h3>
            <p className="text-gray-700 leading-relaxed">
              Training programs and institutional strengthening for educational organizations and personnel.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Infrastructure Development</h3>
            <p className="text-gray-700 leading-relaxed">
              Design and construction of educational facilities including schools, training centers, and laboratories.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Program Development</h3>
            <p className="text-gray-700 leading-relaxed">
              Curriculum development and educational program design for technical and vocational training.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Technical Training</h3>
            <p className="text-gray-700 leading-relaxed">
              Specialized training in engineering, technology, and infrastructure management.
            </p>
          </div>
        </div>

        <div className="rounded-2xl p-12 text-white" style={{ backgroundColor: '#193362' }}>
          <h2 className="text-3xl font-light mb-4">Partner with ECMDC</h2>
          <p className="text-lg mb-6 opacity-90">
            Build educational capacity and infrastructure that empowers communities and drives development.
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

export default EducationPage;
