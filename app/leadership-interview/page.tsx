import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LeadershipInterviewPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="max-w-5xl mx-auto px-4 md:px-10 py-16">
        {/* Article Layout with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Opening Image */}
            <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-8xl mb-4">👔</div>
                <p className="text-xl font-light">Dr. Wayne Frederick</p>
              </div>
            </div>

            {/* Lead Paragraph */}
            <p className="text-2xl font-serif leading-relaxed text-gray-800 border-l-4 border-red-600 pl-6">
              In a world facing unprecedented challenges, true leadership isn't measured by quarterly results alone—it's defined by the ability to inspire hope, drive meaningful change, and create lasting impact that transcends organizational boundaries.
            </p>

            {/* Interview Content */}
            <div className="prose max-w-none space-y-8">
              <div>
                <p className="text-lg leading-relaxed text-gray-700">
                  Dr. Wayne Frederick has spent over two decades at the helm of organizations navigating transformation. His approach to leadership—rooted in empathy, strategic vision, and unwavering commitment to purpose—offers invaluable lessons for today's executives.
                </p>
              </div>

              {/* Q&A Format */}
              <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-red-600">
                <p className="font-bold text-lg text-gray-900 mb-3">Q: What does leadership mean to you in today's context?</p>
                <p className="text-gray-700 leading-relaxed italic">
                  "Leadership today is fundamentally about creating an environment where hope isn't just a sentiment—it's a strategic asset. When people believe in the future we're building together, they unlock capabilities we never knew existed."
                </p>
              </div>

              <p className="text-lg leading-relaxed text-gray-700">
                This philosophy has guided Dr. Frederick through numerous organizational transformations, from healthcare innovation to educational reform. His track record speaks volumes: institutions under his leadership consistently outperform peers while maintaining remarkable employee satisfaction.
              </p>

              {/* Large Pull Quote */}
              <div className="my-12 py-12 px-8 bg-red-600 text-white rounded-2xl text-center">
                <div className="text-7xl font-serif mb-4">"</div>
                <p className="text-3xl md:text-4xl font-serif italic leading-relaxed">
                  Hope is not passive optimism—it's the active belief that our actions today will create a better tomorrow.
                </p>
                <div className="mt-6 text-sm tracking-widest opacity-90">DR. WAYNE FREDERICK</div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-red-600">
                <p className="font-bold text-lg text-gray-900 mb-3">Q: How do you build resilience in organizations?</p>
                <p className="text-gray-700 leading-relaxed italic">
                  "Resilience isn't built in boardrooms—it's cultivated in daily practices. We invest heavily in psychological safety, encourage experimentation, and celebrate learning from failure as much as we celebrate success."
                </p>
              </div>

              <p className="text-lg leading-relaxed text-gray-700">
                Dr. Frederick points to specific examples where this approach paid dividends. During a major industry disruption, his team not only weathered the storm but emerged stronger, launching three innovative products that captured significant market share.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600">25+</div>
                  <div className="text-sm text-gray-700 mt-1">Years Leading</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600">500+</div>
                  <div className="text-sm text-gray-700 mt-1">Leaders Developed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600">12</div>
                  <div className="text-sm text-gray-700 mt-1">Awards Received</div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-red-600">
                <p className="font-bold text-lg text-gray-900 mb-3">Q: What advice do you have for emerging leaders?</p>
                <p className="text-gray-700 leading-relaxed italic">
                  "Find your purpose first, then build your strategy around it. The most successful leaders I've mentored aren't those with the best plans—they're those who inspire others to join them in a mission larger than any individual."
                </p>
              </div>

              <p className="text-lg leading-relaxed text-gray-700">
                As our conversation draws to a close, Dr. Frederick reflects on his legacy: not the titles or accolades, but the leaders he's developed and the positive change they're creating in the world. It's this ripple effect, he believes, that defines true leadership success.
              </p>

              {/* Closing Box */}
              <div className="bg-black text-white p-10 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Key Takeaways</h3>
                <ul className="space-y-3 text-gray-200">
                  <li>✦ Leadership is about inspiring hope through action, not just words</li>
                  <li>✦ Build resilience through psychological safety and learning culture</li>
                  <li>✦ Purpose-driven strategies outperform profit-driven ones long-term</li>
                  <li>✦ Your legacy is measured by the leaders you develop, not just results you achieve</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-100 p-6 rounded-xl sticky top-24">
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-600 mb-4">About Dr. Frederick</h4>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Current Role:</strong> President & CEO</p>
                <p><strong>Experience:</strong> 25+ years</p>
                <p><strong>Expertise:</strong> Healthcare, Education, Leadership</p>
                <p><strong>Education:</strong> MD, MBA</p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-300">
                <h5 className="font-bold text-sm mb-3">More in This Series</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="hover:text-red-600 cursor-pointer">→ Leading Through Crisis</li>
                  <li className="hover:text-red-600 cursor-pointer">→ Building Resilient Teams</li>
                  <li className="hover:text-red-600 cursor-pointer">→ The Future of Work</li>
                </ul>
              </div>

              <button className="w-full mt-6 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-all">
                Share Interview
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LeadershipInterviewPage;
