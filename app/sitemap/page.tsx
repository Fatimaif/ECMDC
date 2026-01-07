import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const SitemapPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl font-light text-gray-900 mb-4">Sitemap</h1>
        <p className="text-gray-600 mb-12">Navigate through all pages on our website</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Main Pages */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">Main Pages</h2>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-700 hover:text-[#193362] transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-700 hover:text-[#193362] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-[#193362] transition-colors">Contact</Link></li>
            </ul>
          </section>

          {/* ECMDC Features */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">ECMDC Features</h2>
            <ul className="space-y-3">
              <li><Link href="/spotlight" className="text-gray-700 hover:text-[#193362] transition-colors">ECMDC Spotlight</Link></li>
              <li><Link href="/ecmdc-x" className="text-gray-700 hover:text-[#193362] transition-colors">ECMDC X</Link></li>
              <li><Link href="/client-impact" className="text-gray-700 hover:text-[#193362] transition-colors">Client Impact Library</Link></li>
              <li><Link href="/ceo-advisory" className="text-gray-700 hover:text-[#193362] transition-colors">CEO Advisory</Link></li>
            </ul>
          </section>

          {/* Capabilities */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">Capabilities</h2>
            <ul className="space-y-3">
              <li><Link href="/capabilities/digital-transformation" className="text-gray-700 hover:text-[#193362] transition-colors">Digital Transformation</Link></li>
              <li><Link href="/capabilities/ai-machine-learning" className="text-gray-700 hover:text-[#193362] transition-colors">AI & Machine Learning</Link></li>
              <li><Link href="/capabilities/cloud-solutions" className="text-gray-700 hover:text-[#193362] transition-colors">Cloud Solutions</Link></li>
              <li><Link href="/capabilities/data-analytics" className="text-gray-700 hover:text-[#193362] transition-colors">Data Analytics</Link></li>
              <li><Link href="/capabilities/cybersecurity" className="text-gray-700 hover:text-[#193362] transition-colors">Cybersecurity</Link></li>
              <li><Link href="/capabilities/business-strategy" className="text-gray-700 hover:text-[#193362] transition-colors">Business Strategy</Link></li>
            </ul>
          </section>

          {/* Industries */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">Industries</h2>
            <ul className="space-y-3">
              <li><Link href="/industries/financial-services" className="text-gray-700 hover:text-[#193362] transition-colors">Financial Services</Link></li>
              <li><Link href="/industries/healthcare" className="text-gray-700 hover:text-[#193362] transition-colors">Healthcare</Link></li>
              <li><Link href="/industries/retail-consumer-goods" className="text-gray-700 hover:text-[#193362] transition-colors">Retail & Consumer Goods</Link></li>
              <li><Link href="/industries/technology" className="text-gray-700 hover:text-[#193362] transition-colors">Technology</Link></li>
              <li><Link href="/industries/manufacturing" className="text-gray-700 hover:text-[#193362] transition-colors">Manufacturing</Link></li>
              <li><Link href="/industries/energy-utilities" className="text-gray-700 hover:text-[#193362] transition-colors">Energy & Utilities</Link></li>
            </ul>
          </section>

          {/* Careers */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">Careers</h2>
            <ul className="space-y-3">
              <li><Link href="/careers" className="text-gray-700 hover:text-[#193362] transition-colors">Explore Careers</Link></li>
              <li><Link href="/careers/apply" className="text-gray-700 hover:text-[#193362] transition-colors">Apply Today</Link></li>
            </ul>
          </section>

          {/* Resources */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">Resources</h2>
            <ul className="space-y-3">
              <li><Link href="/green-economy-report" className="text-gray-700 hover:text-[#193362] transition-colors">Green Economy Report</Link></li>
              <li><Link href="/leadership-interview" className="text-gray-700 hover:text-[#193362] transition-colors">Leadership Interview</Link></li>
              <li><Link href="/product-library" className="text-gray-700 hover:text-[#193362] transition-colors">Product Library</Link></li>
            </ul>
          </section>

          {/* Legal */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">Legal</h2>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-gray-700 hover:text-[#193362] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="text-gray-700 hover:text-[#193362] transition-colors">Terms of Use</Link></li>
              <li><Link href="/responsible-disclosure" className="text-gray-700 hover:text-[#193362] transition-colors">Responsible Disclosure</Link></li>
              <li><Link href="/cookie-preferences" className="text-gray-700 hover:text-[#193362] transition-colors">Cookie Preferences</Link></li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SitemapPage;
