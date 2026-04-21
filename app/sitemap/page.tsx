import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const SitemapPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-5xl mx-auto px-4 md:px-10 py-20">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-20 text-center">Sitemap</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12">
          <div>
            <h2 className="text-xs font-semibold tracking-widest text-gray-400 mb-4">MAIN</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-900 hover:text-[#1A3560] transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-900 hover:text-[#1A3560] transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-900 hover:text-[#1A3560] transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-900 hover:text-[#1A3560] transition-colors">Contact</Link></li>
              <li><Link href="/offices" className="text-gray-900 hover:text-[#1A3560] transition-colors">Offices</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-widest text-gray-400 mb-4">CAPABILITIES</h2>
            <ul className="space-y-2">
              <li><Link href="/capabilities/digital-transformation" className="text-gray-900 hover:text-[#1A3560] transition-colors">Digital Transformation</Link></li>
              <li><Link href="/capabilities/ai-machine-learning" className="text-gray-900 hover:text-[#1A3560] transition-colors">AI & Machine Learning</Link></li>
              <li><Link href="/capabilities/cloud-solutions" className="text-gray-900 hover:text-[#1A3560] transition-colors">Cloud Solutions</Link></li>
              <li><Link href="/capabilities/data-analytics" className="text-gray-900 hover:text-[#1A3560] transition-colors">Data Analytics</Link></li>
              <li><Link href="/capabilities/cybersecurity" className="text-gray-900 hover:text-[#1A3560] transition-colors">Cybersecurity</Link></li>
              <li><Link href="/capabilities/business-strategy" className="text-gray-900 hover:text-[#1A3560] transition-colors">Business Strategy</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-widest text-gray-400 mb-4">INDUSTRIES</h2>
            <ul className="space-y-2">
              <li><Link href="/industries/financial-services" className="text-gray-900 hover:text-[#1A3560] transition-colors">Financial Services</Link></li>
              <li><Link href="/industries/healthcare" className="text-gray-900 hover:text-[#1A3560] transition-colors">Healthcare</Link></li>
              <li><Link href="/industries/retail-consumer-goods" className="text-gray-900 hover:text-[#1A3560] transition-colors">Retail & Consumer Goods</Link></li>
              <li><Link href="/industries/technology" className="text-gray-900 hover:text-[#1A3560] transition-colors">Technology</Link></li>
              <li><Link href="/industries/manufacturing" className="text-gray-900 hover:text-[#1A3560] transition-colors">Manufacturing</Link></li>
              <li><Link href="/industries/energy-utilities" className="text-gray-900 hover:text-[#1A3560] transition-colors">Energy & Utilities</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-widest text-gray-400 mb-4">INSIGHTS</h2>
            <ul className="space-y-2">
              <li><Link href="/ai-report" className="text-gray-900 hover:text-[#1A3560] transition-colors">AI Report</Link></li>
              <li><Link href="/green-economy-report" className="text-gray-900 hover:text-[#1A3560] transition-colors">Green Economy Report</Link></li>
              <li><Link href="/leadership-interview" className="text-gray-900 hover:text-[#1A3560] transition-colors">Leadership Interview</Link></li>
              <li><Link href="/client-impact" className="text-gray-900 hover:text-[#1A3560] transition-colors">Client Impact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-widest text-gray-400 mb-4">CAREERS</h2>
            <ul className="space-y-2">
              <li><Link href="/careers" className="text-gray-900 hover:text-[#1A3560] transition-colors">Explore Careers</Link></li>
              <li><Link href="/careers/apply" className="text-gray-900 hover:text-[#1A3560] transition-colors">Apply Today</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-widest text-gray-400 mb-4">LEGAL</h2>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-gray-900 hover:text-[#1A3560] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="text-gray-900 hover:text-[#1A3560] transition-colors">Terms of Use</Link></li>
              <li><Link href="/responsible-disclosure" className="text-gray-900 hover:text-[#1A3560] transition-colors">Responsible Disclosure</Link></li>
              <li><Link href="/cookie-preferences" className="text-gray-900 hover:text-[#1A3560] transition-colors">Cookie Preferences</Link></li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SitemapPage;

