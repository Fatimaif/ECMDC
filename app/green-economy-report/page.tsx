import React from 'react';
import Header from '../components/Header';
import Exploremore from '../services/components/Exploremore';
import Footer from '../components/Footer';

const GreenEconomyReportPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <div className="bg-blue-50 border-l-8 p-10 mb-16" style={{ borderColor: '#193362' }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive Summary</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            The green economy represents a <strong>$12 trillion opportunity</strong> by 2030. Our research surveyed 200+ CEOs and identified five strategic imperatives for sustainable growth. Companies that act now will capture disproportionate value in the emerging climate economy.
          </p>
          <div className="flex gap-8 mt-6">
            <div>
              <div className="text-4xl font-bold" style={{ color: '#193362' }}>70%</div>
              <div className="text-sm text-gray-700">View climate as opportunity</div>
            </div>
            <div>
              <div className="text-4xl font-bold" style={{ color: '#193362' }}>$12T</div>
              <div className="text-sm text-gray-700">Market potential 2030</div>
            </div>
            <div>
              <div className="text-4xl font-bold" style={{ color: '#193362' }}>200+</div>
              <div className="text-sm text-gray-700">CEOs interviewed</div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Report Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { chapter: "Chapter 1", title: "The $12T Green Economy Opportunity", page: "04" },
              { chapter: "Chapter 2", title: "Five Strategic Imperatives for CEOs", page: "18" },
              { chapter: "Chapter 3", title: "Case Studies: Climate Leaders", page: "32" },
              { chapter: "Chapter 4", title: "Technology & Innovation Pathways", page: "48" },
              { chapter: "Chapter 5", title: "Implementation Roadmap", page: "64" },
              { chapter: "Appendix", title: "Methodology & Research Data", page: "78" }
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center p-4 bg-white border-2 border-gray-200 rounded-3xl transition-all cursor-pointer hover:border-[#193362]">
                <div>
                  <div className="text-xs font-semibold" style={{ color: '#193362' }}>{item.chapter}</div>
                  <div className="text-lg font-semibold text-gray-900">{item.title}</div>
                </div>
                <div className="text-2xl font-bold text-gray-400">{item.page}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Insights</h2>
          <div className="space-y-6">
            <div className="p-8 rounded-2xl text-white" style={{ background: 'linear-gradient(to right, #193362, #2a4a7f)' }}>
              <div className="text-6xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-3">Climate Leaders Outperform</h3>
              <p className="text-lg opacity-90">
                Companies with strong climate commitments delivered 15% higher shareholder returns over the past 5 years compared to industry peers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-3xl border-2 border-blue-200">
                <div className="text-4xl mb-3">🌍</div>
                <h4 className="font-bold text-gray-900 mb-2">Renewable Energy Transition</h4>
                <p className="text-sm text-gray-700">85% of energy leaders plan to double renewable capacity by 2025</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-3xl border-2 border-purple-200">
                <div className="text-4xl mb-3">🔋</div>
                <h4 className="font-bold text-gray-900 mb-2">Supply Chain Innovation</h4>
                <p className="text-sm text-gray-700">Carbon-neutral supply chains reduce costs by 12-18% through efficiency gains</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-3xl border-2 border-orange-200">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-bold text-gray-900 mb-2">Green Tech Investment</h4>
                <p className="text-sm text-gray-700">$850B invested in climate tech in 2023, up 40% from prior year</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white p-12 rounded-3xl mb-16 text-center">
          <div className="text-6xl mb-6">"</div>
          <p className="text-3xl font-light italic mb-6 leading-relaxed">
            The green economy isn't just about sustainability—it's the biggest business opportunity of our generation.
          </p>
          <div className="text-sm font-semibold tracking-wide text-gray-300">
            — Fortune 500 CEO, Energy Sector
          </div>
        </div>
      </main>
      <Exploremore />
      <Footer />
    </div>
  );
};

export default GreenEconomyReportPage;
