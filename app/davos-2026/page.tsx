"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Davos2026Page = () => {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          ECMDC at Davos 2026
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          ECMDC leaders will join luminaries from business, academia, and civil society in Davos to explore how responsible innovation can unlock growth and build prosperity within planetary boundaries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Sustainable Infrastructure</h3>
            <p className="text-gray-700 leading-relaxed">
              Showcasing ECMDC's commitment to building climate-resilient infrastructure that serves communities while protecting our planet for future generations.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Water & Energy Innovation</h3>
            <p className="text-gray-700 leading-relaxed">
              Presenting breakthrough solutions in water resource management and renewable energy that balance economic growth with environmental stewardship.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Global Collaboration</h3>
            <p className="text-gray-700 leading-relaxed">
              Engaging with world leaders to share expertise and forge partnerships for sustainable development across emerging markets.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Engineering Excellence</h3>
            <p className="text-gray-700 leading-relaxed">
              Demonstrating how engineering innovation and consulting expertise can drive responsible growth in critical infrastructure sectors.
            </p>
          </div>
        </div>

        {/* Event Details */}
        <div className="bg-blue-50 border-l-8 p-10 mb-16" style={{ borderColor: '#193362' }}>
          <h2 className="text-3xl font-light text-gray-900 mb-6">Event Highlights</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-4">
              <span className="text-2xl" style={{ color: '#193362' }}>▸</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Panel Discussions</h4>
                <p>ECMDC leaders participating in key discussions on sustainable infrastructure and climate-smart engineering.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl" style={{ color: '#193362' }}>▸</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Project Showcases</h4>
                <p>Featuring successful hydropower, water supply, and renewable energy projects from across our global portfolio.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl" style={{ color: '#193362' }}>▸</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Networking Sessions</h4>
                <p>Connecting with global stakeholders, development organizations, and industry leaders to explore collaboration opportunities.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl" style={{ color: '#193362' }}>▸</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Innovation Workshops</h4>
                <p>Hands-on sessions exploring emerging technologies in sustainable infrastructure and environmental management.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Topics */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-[#193362] transition-all">
              <div className="text-5xl mb-4">💧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Water Security</h3>
              <p className="text-gray-700">Addressing global water challenges through innovative engineering and sustainable management practices.</p>
            </div>
            <div className="text-center p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-[#193362] transition-all">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Clean Energy</h3>
              <p className="text-gray-700">Accelerating the transition to renewable energy through hydropower and sustainable energy solutions.</p>
            </div>
            <div className="text-center p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-[#193362] transition-all">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Climate Resilience</h3>
              <p className="text-gray-700">Building infrastructure that withstands climate impacts while supporting sustainable development.</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>35+</div>
            <div className="text-gray-700">Countries Represented</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>250+</div>
            <div className="text-gray-700">Projects Portfolio</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>24+</div>
            <div className="text-gray-700">Years of Experience</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>2026</div>
            <div className="text-gray-700">World Economic Forum</div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-12 text-white mb-12" style={{ backgroundColor: '#193362' }}>
          <h2 className="text-3xl font-light mb-4">Join Us at Davos 2026</h2>
          <p className="text-lg mb-6 opacity-90">
            Connect with ECMDC leaders to explore how engineering excellence and sustainable innovation can drive responsible growth and build prosperity within planetary boundaries.
          </p>
          <button
            className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            style={{ color: '#193362' }}
            onClick={() => router.push('/schedule-meeting')}
          >
            Schedule a Meeting
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Davos2026Page;
