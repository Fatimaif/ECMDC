'use client';

import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CommitmentsPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#F1EEEA';
    
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#F1EEEA', minHeight: '100vh' }}>
      <Header />

      {/* Hero Section with Image */}
      <section className="w-full" style={{ backgroundColor: '#F1EEEA' }}>
        <div className="w-full px-4 md:px-10 pt-20 pb-16 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-light text-[#1a1a1a] mb-10 text-center">
            Our Commitments
          </h1>
          <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-[#1a1a1a] text-center">
            Building a better future through excellence, innovation, and responsibility
          </p>
        </div>
        <div className="w-full px-4 md:px-10 pb-0 flex justify-center">
          <div className="w-full overflow-hidden rounded-3xl">
            <div className="h-[420px] md:h-[500px] w-full">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                alt="Our Commitments"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 md:px-10 py-20">

        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
            Excellence in Client Service
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are committed to delivering exceptional value to every client through innovative
            solutions, deep expertise, and unwavering dedication to their success.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
            Innovation & Impact
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We continuously push boundaries to create transformative solutions that drive
            measurable impact and lasting change for organizations worldwide.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
            Sustainability & Responsibility
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We champion sustainable business practices and social responsibility, helping clients
            build resilient organizations that create positive impact for society and the environment.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
            Diversity & Inclusion
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We foster a culture of diversity, equity, and inclusion, believing that diverse
            perspectives drive better outcomes for our clients and communities.
          </p>
        </div>

        <div className="text-center mt-12">
          <a href="/about/commitments/details">
            <button className="bg-[#1B3662] text-white px-8 py-4 rounded-2xl font-semibold hover:brightness-90 transition-all text-lg">
              Learn More About Our Commitments
            </button>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommitmentsPage;
