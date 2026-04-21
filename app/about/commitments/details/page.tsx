'use client';

import React, { useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const CommitmentsDetailsPage = () => {
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

      {/* Hero Section */}
      <section className="w-full" style={{ backgroundColor: '#F1EEEA' }}>
        <div className="w-full px-4 md:px-10 pt-20 pb-16 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-light text-[#1a1a1a] mb-10 text-center">
            Our Commitments in Detail
          </h1>
          <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-[#1a1a1a] text-center">
            A comprehensive look at how we're building a better future through concrete actions and measurable outcomes
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 md:px-10 py-20">

        {/* Excellence in Client Service - Detailed */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8">
          <h2 className="text-4xl font-light text-[#1a1a1a] mb-6">
            Excellence in Client Service
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We are committed to delivering exceptional value to every client through innovative
            solutions, deep expertise, and unwavering dedication to their success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#1B3662] mb-3">Client-Centric Approach</h3>
              <p className="text-gray-700">
                We put our clients at the heart of everything we do, ensuring every solution is tailored to their unique needs and challenges.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#1B3662] mb-3">Measurable Results</h3>
              <p className="text-gray-700">
                Our commitment is backed by data-driven outcomes, with 95% client satisfaction and proven ROI across all engagements.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#1B3662] mb-3">Continuous Innovation</h3>
              <p className="text-gray-700">
                We invest heavily in research and development to bring cutting-edge solutions to our clients' most pressing challenges.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#1B3662] mb-3">Long-term Partnership</h3>
              <p className="text-gray-700">
                85% of our clients return for additional engagements, testament to the lasting relationships we build.
              </p>
            </div>
          </div>
        </div>

        {/* Innovation & Impact - Detailed */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8">
          <h2 className="text-4xl font-light text-[#1a1a1a] mb-6">
            Innovation & Impact
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We continuously push boundaries to create transformative solutions that drive
            measurable impact and lasting change for organizations worldwide.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-[#1B3662] pl-6">
              <h3 className="text-2xl font-light text-[#1a1a1a] mb-3">Research & Development</h3>
              <p className="text-gray-700 leading-relaxed">
                We dedicate 15% of our resources to R&D, exploring emerging technologies like AI, blockchain, and quantum computing to stay ahead of industry trends and deliver innovative solutions.
              </p>
            </div>

            <div className="border-l-4 border-[#1B3662] pl-6">
              <h3 className="text-2xl font-light text-[#1a1a1a] mb-3">Thought Leadership</h3>
              <p className="text-gray-700 leading-relaxed">
                Our team publishes over 200 thought leadership pieces annually, sharing insights and shaping industry conversations on critical business topics.
              </p>
            </div>

            <div className="border-l-4 border-[#1B3662] pl-6">
              <h3 className="text-2xl font-light text-[#1a1a1a] mb-3">Global Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                Our work has created over $50 billion in value for clients across 45+ countries, transforming industries and improving lives.
              </p>
            </div>
          </div>
        </div>

        {/* Sustainability & Responsibility - Detailed */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8">
          <h2 className="text-4xl font-light text-[#1a1a1a] mb-6">
            Sustainability & Responsibility
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We champion sustainable business practices and social responsibility, helping clients
            build resilient organizations that create positive impact for society and the environment.
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 mb-6">
            <h3 className="text-2xl font-semibold text-[#1B3662] mb-4">Our Environmental Goals</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#1B3662] mr-3">•</span>
                <span>Achieve carbon neutrality across all operations by 2025</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1B3662] mr-3">•</span>
                <span>Help clients reduce their carbon footprint by 30% through our consulting services</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1B3662] mr-3">•</span>
                <span>Invest $100M in green technology and sustainable innovation initiatives</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1B3662] mr-3">•</span>
                <span>Support renewable energy transition projects in emerging markets</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-4xl font-light text-[#1B3662] mb-2">100%</div>
              <div className="text-sm text-gray-700">Renewable Energy Offices</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-4xl font-light text-[#1B3662] mb-2">50%</div>
              <div className="text-sm text-gray-700">Reduction in Emissions</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-4xl font-light text-[#1B3662] mb-2">$20M</div>
              <div className="text-sm text-gray-700">Social Impact Investment</div>
            </div>
          </div>
        </div>

        {/* Diversity & Inclusion - Detailed */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8">
          <h2 className="text-4xl font-light text-[#1a1a1a] mb-6">
            Diversity & Inclusion
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We foster a culture of diversity, equity, and inclusion, believing that diverse
            perspectives drive better outcomes for our clients and communities.
          </p>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#1B3662] mb-3">Workforce Diversity</h3>
              <p className="text-gray-700 mb-4">
                We're committed to building a workforce that reflects the diversity of the communities we serve.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-light text-[#1B3662]">48%</div>
                  <div className="text-xs text-gray-600">Women in Leadership</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-[#1B3662]">60%</div>
                  <div className="text-xs text-gray-600">Diverse Hiring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-[#1B3662]">100+</div>
                  <div className="text-xs text-gray-600">Nationalities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-[#1B3662]">12</div>
                  <div className="text-xs text-gray-600">ERG Groups</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#1B3662] mb-3">Inclusive Culture</h3>
              <p className="text-gray-700">
                We provide comprehensive training, mentorship programs, and career development opportunities to ensure every team member can thrive and reach their full potential regardless of background.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#1B3662] mb-3">Community Engagement</h3>
              <p className="text-gray-700">
                Through partnerships with diverse organizations and scholarship programs, we're working to increase representation in consulting and create pathways for underrepresented talent.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#1B3662] text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Join Us in Making a Difference</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our commitments are more than words—they're actions that drive real change. Partner with us to create a better future.
          </p>
          <a href="/contact">
            <button className="bg-white text-[#1B3662] px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all text-lg">
              Get in Touch
            </button>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommitmentsDetailsPage;
