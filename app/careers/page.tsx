import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';

const CareersPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Careers at ECMDC
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Join a team of exceptional professionals advancing infrastructure development and engineering excellence across diverse sectors.
        </p>

        {/* Why Join ECMDC Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-8">
            Why Join ECMDC
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-light text-black mb-4">Impactful Work</h3>
              <p className="text-gray-700 leading-relaxed">
                Contribute to transformative infrastructure projects that shape communities and drive sustainable development across multiple sectors.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-light text-black mb-4">Professional Growth</h3>
              <p className="text-gray-700 leading-relaxed">
                Access continuous learning opportunities, mentorship programs, and career advancement pathways in a dynamic environment.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-light text-black mb-4">Collaborative Culture</h3>
              <p className="text-gray-700 leading-relaxed">
                Work alongside industry experts in a supportive environment that values innovation, teamwork, and excellence.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-light text-black mb-4">Competitive Benefits</h3>
              <p className="text-gray-700 leading-relaxed">
                Enjoy comprehensive compensation packages, health benefits, and work-life balance initiatives designed for your well-being.
              </p>
            </div>
          </div>
        </div>

        {/* Career Opportunities Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-8">
            Career Opportunities
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-300 hover:border-gray-400 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-light text-black mb-2">Engineering Roles</h3>
                  <p className="text-gray-600">Multiple Positions Available</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">Open</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Civil, electrical, mechanical, and environmental engineering positions across hydropower, energy, infrastructure, and environmental sectors.
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>• Project Engineers</li>
                <li>• Senior Engineers</li>
                <li>• Design Engineers</li>
                <li>• Site Engineers</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-300 hover:border-gray-400 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-light text-black mb-2">Consulting & Advisory</h3>
                  <p className="text-gray-600">Multiple Positions Available</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">Open</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Strategic consulting positions in management, planning, and organizational development across public and private sectors.
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>• Management Consultants</li>
                <li>• Strategic Advisors</li>
                <li>• Policy Analysts</li>
                <li>• Project Managers</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-300 hover:border-gray-400 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-light text-black mb-2">Technical Specialists</h3>
                  <p className="text-gray-600">Multiple Positions Available</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">Open</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Specialized technical roles in data analytics, digital transformation, GIS, and emerging technologies.
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>• Data Analysts</li>
                <li>• GIS Specialists</li>
                <li>• Digital Solutions Experts</li>
                <li>• Technical Researchers</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-300 hover:border-gray-400 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-light text-black mb-2">Support & Administration</h3>
                  <p className="text-gray-600">Multiple Positions Available</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">Open</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Administrative, finance, HR, and operational support roles that enable organizational excellence.
              </p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>• Finance Officers</li>
                <li>• HR Specialists</li>
                <li>• Administrative Coordinators</li>
                <li>• Operations Managers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What We Look For Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-8">
            What We Look For
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-medium text-black mb-3">Core Competencies</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Technical excellence and professional expertise</li>
                  <li>• Problem-solving and analytical thinking</li>
                  <li>• Strong communication and collaboration skills</li>
                  <li>• Commitment to quality and continuous improvement</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-medium text-black mb-3">Values & Mindset</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Passion for sustainable development</li>
                  <li>• Integrity and professional ethics</li>
                  <li>• Innovation and adaptability</li>
                  <li>• Client-focused service orientation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Application Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-8">
            Application Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">1</span>
              </div>
              <h4 className="text-lg font-medium text-black mb-2">Apply</h4>
              <p className="text-gray-600 text-sm">Submit your application through our online portal</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">2</span>
              </div>
              <h4 className="text-lg font-medium text-black mb-2">Review</h4>
              <p className="text-gray-600 text-sm">Our team reviews your qualifications and experience</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">3</span>
              </div>
              <h4 className="text-lg font-medium text-black mb-2">Interview</h4>
              <p className="text-gray-600 text-sm">Meet with our team to discuss opportunities</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">4</span>
              </div>
              <h4 className="text-lg font-medium text-black mb-2">Join Us</h4>
              <p className="text-gray-600 text-sm">Welcome to the ECMDC team</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#193362] rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Ready to Make an Impact?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join ECMDC and be part of a team that's shaping the future of infrastructure and sustainable development.
          </p>
          <Link href="/careers/apply">
            <button className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2" style={{ color: '#193362' }}>
              Apply Today
              <MdArrowOutward size={20} />
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
