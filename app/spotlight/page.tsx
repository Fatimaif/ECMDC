import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SpotlightPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          ECMDC SPOTLIGHT
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Discover the latest insights, innovations, and thought leadership from ECMDC. Our spotlight series features cutting-edge research, expert perspectives, and transformative solutions that are shaping the future of business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Latest Research</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Access our comprehensive research library featuring industry-leading publications, white papers, and analytical reports that provide deep insights into emerging trends and best practices.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• AI & Technology Research</li>
              <li>• Market Analysis Reports</li>
              <li>• Industry Trend Studies</li>
              <li>• Quarterly Insights</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Expert Perspectives</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gain insights from our global network of industry experts, thought leaders, and practitioners who share their knowledge and experiences on critical business challenges.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Executive Interviews</li>
              <li>• Expert Commentary</li>
              <li>• Podcast Series</li>
              <li>• Webinar Archive</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Case Studies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Explore real-world success stories showcasing how organizations have achieved transformative results through strategic implementation and innovation.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Digital Transformation</li>
              <li>• AI Implementation</li>
              <li>• Organizational Change</li>
              <li>• Business Model Innovation</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Industry Insights</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Stay ahead with our curated collection of industry-specific insights, trends, and forecasts across multiple sectors and geographic regions.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Sector-Specific Analysis</li>
              <li>• Regional Market Trends</li>
              <li>• Competitive Intelligence</li>
              <li>• Future Forecasts</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpotlightPage;
