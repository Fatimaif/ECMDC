import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const RoadsBridgesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Roads & Bridges
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Highway and transportation infrastructure development connecting communities and enabling economic growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Highway Design</h3>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive highway planning, geometric design, and alignment optimization.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Bridge Engineering</h3>
            <p className="text-gray-700 leading-relaxed">
              Design and construction of bridges, culverts, and other transportation structures.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Pavement Design</h3>
            <p className="text-gray-700 leading-relaxed">
              Structural and material design for durable and cost-effective road pavements.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Traffic Engineering</h3>
            <p className="text-gray-700 leading-relaxed">
              Traffic studies, capacity analysis, and intelligent transportation systems.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RoadsBridgesPage;
