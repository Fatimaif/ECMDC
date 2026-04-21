'use client';

import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HistoryPage = () => {
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
            Our History
          </h1>
          <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-[#1a1a1a] text-center">
            Two decades of transformation, innovation, and excellence in consulting
          </p>
        </div>
        <div className="w-full px-4 md:px-10 pb-0 flex justify-center">
          <div className="w-full overflow-hidden rounded-3xl">
            <div className="h-[420px] md:h-[500px] w-full">
              <img
                src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg"
                alt="Our History"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 md:px-10 py-20">

        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-4xl font-light text-[#1B3662]">2000</div>
            <div>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-3">
                The Beginning
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                ECMDC was founded with a vision to transform how organizations approach
                complex business challenges through innovative consulting and strategic insights.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-4xl font-light text-[#1B3662]">2010</div>
            <div>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-3">
                Global Expansion
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Expanded operations across 25 countries, establishing ourselves as a trusted
                partner for Fortune 500 companies and government organizations worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-4xl font-light text-[#1B3662]">2018</div>
            <div>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-3">
                Digital Innovation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pioneered AI and digital transformation services, helping clients harness
                cutting-edge technology to drive competitive advantage and operational excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-4xl font-light text-[#1B3662]">Today</div>
            <div>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-3">
                Leading the Future
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 1000 successful projects and $50B+ in value created, we continue to
                innovate and lead in strategic consulting, helping organizations navigate an
                increasingly complex business landscape.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HistoryPage;
