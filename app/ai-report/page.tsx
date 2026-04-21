import Header from '../components/Header';
import Footer from '../components/Footer';

const AIReportPage = () => {

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Our Latest Thinking on Artificial Intelligence
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Comprehensive insights and strategic perspectives on how artificial intelligence is transforming industries, reshaping business models, and creating unprecedented opportunities for innovation and growth.
        </p>

        {/* Key Insights Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-light text-black mb-8">Executive Summary</h2>
          <div className="bg-blue-50 rounded-2xl p-10 border-l-8 mb-8" style={{ borderColor: '#193362' }}>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              As artificial intelligence rapidly evolves from experimental technology to essential business infrastructure, organizations face a critical imperative: transform now or risk obsolescence. Our latest research reveals that AI adoption is accelerating across all sectors, with early adopters already realizing significant competitive advantages.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This report synthesizes insights from 250+ AI implementations, partnerships with leading technology providers, and strategic consulting engagements across 35+ countries to provide actionable guidance for business leaders navigating the AI transformation journey.
            </p>
          </div>
        </div>

        {/* Key Findings */}
        <div className="mb-16">
          <h2 className="text-4xl font-light text-black mb-8">Key Findings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-[#193362] transition-all">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">ROI Acceleration</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Organizations implementing AI strategically are seeing 25-40% improvements in operational efficiency within the first 12-18 months of deployment.
              </p>
              <div className="bg-gray-50 rounded-3xl p-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold" style={{ color: '#193362' }}>Key Metric:</span> Average ROI of 3.5x within 24 months for comprehensive AI initiatives
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-[#193362] transition-all">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Innovation Velocity</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                GenAI is dramatically reducing time-to-market for new products and services, with leading companies launching innovations 50-70% faster than traditional methods.
              </p>
              <div className="bg-gray-50 rounded-3xl p-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold" style={{ color: '#193362' }}>Key Metric:</span> 60% reduction in product development cycles with AI-assisted design
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-[#193362] transition-all">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Customer Experience</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                AI-powered personalization is driving customer satisfaction scores up by 30-45% while reducing service costs through intelligent automation.
              </p>
              <div className="bg-gray-50 rounded-3xl p-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold" style={{ color: '#193362' }}>Key Metric:</span> 35% improvement in Net Promoter Score (NPS) with AI implementations
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-[#193362] transition-all">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Advantage</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                First-movers in AI are establishing market positions that will be difficult for laggards to challenge, creating winner-take-most dynamics in many sectors.
              </p>
              <div className="bg-gray-50 rounded-3xl p-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold" style={{ color: '#193362' }}>Key Metric:</span> AI leaders growing 2-3x faster than industry peers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Recommendations */}
        <div className="mb-16">
          <h2 className="text-4xl font-light text-black mb-8">Strategic Recommendations</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-3xl p-8 border-l-4" style={{ borderColor: '#193362' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl font-light" style={{ color: '#193362' }}>01</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Start with Business Value, Not Technology</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    The most successful AI implementations begin by identifying specific business challenges and opportunities where AI can deliver measurable impact. Focus on use cases with clear ROI potential and strategic importance.
                  </p>
                  <div className="bg-white rounded-3xl p-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Action Items:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Conduct AI opportunity assessment across key business functions</li>
                      <li>• Prioritize use cases based on value potential and feasibility</li>
                      <li>• Establish clear success metrics before implementation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border-l-4" style={{ borderColor: '#193362' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl font-light" style={{ color: '#193362' }}>02</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Build AI-Ready Data Infrastructure</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    AI is only as good as the data that powers it. Organizations must invest in data quality, governance, and infrastructure to unlock AI's full potential and ensure responsible deployment.
                  </p>
                  <div className="bg-white rounded-3xl p-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Action Items:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Audit current data assets and identify gaps</li>
                      <li>• Implement robust data governance frameworks</li>
                      <li>• Invest in cloud-native data platforms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border-l-4" style={{ borderColor: '#193362' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl font-light" style={{ color: '#193362' }}>03</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Develop AI Talent and Culture</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Successful AI transformation requires more than technology—it demands new skills, ways of working, and organizational mindsets. Build internal capabilities while leveraging external expertise.
                  </p>
                  <div className="bg-white rounded-3xl p-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Action Items:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Launch AI literacy programs for all employees</li>
                      <li>• Recruit and retain top AI talent</li>
                      <li>• Foster experimentation and learning culture</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border-l-4" style={{ borderColor: '#193362' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl font-light" style={{ color: '#193362' }}>04</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Partner with AI Ecosystem Leaders</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    No organization can master AI alone. Strategic partnerships with technology providers, AI specialists, and industry experts accelerate implementation and reduce risk.
                  </p>
                  <div className="bg-white rounded-3xl p-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Action Items:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Identify strategic technology partners aligned with your needs</li>
                      <li>• Engage specialized AI consultants for complex initiatives</li>
                      <li>• Join industry consortiums and knowledge-sharing networks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border-l-4" style={{ borderColor: '#193362' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl font-light" style={{ color: '#193362' }}>05</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Scale Responsibly with Ethics and Governance</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    As AI systems become more powerful and pervasive, ethical considerations and governance frameworks become critical for maintaining trust, compliance, and social license to operate.
                  </p>
                  <div className="bg-white rounded-3xl p-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Action Items:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Establish AI ethics board and governance policies</li>
                      <li>• Implement bias detection and mitigation processes</li>
                      <li>• Ensure transparency and explainability in AI systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Perspectives */}
        <div className="mb-16">
          <h2 className="text-4xl font-light text-black mb-8">AI Impact Across Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Manufacturing</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Predictive maintenance, quality control automation, and supply chain optimization driving 20-30% productivity gains.
              </p>
            </div>
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Retail</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Personalized experiences, demand forecasting, and dynamic pricing increasing revenue by 15-25%.
              </p>
            </div>
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Healthcare</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Diagnostic assistance, drug discovery, and patient care optimization improving outcomes while reducing costs.
              </p>
            </div>
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Financial Services</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Fraud detection, risk assessment, and algorithmic trading delivering competitive advantages and compliance.
              </p>
            </div>
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Energy</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Grid optimization, renewable forecasting, and asset management advancing sustainability goals.
              </p>
            </div>
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Infrastructure</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Predictive engineering, project optimization, and smart monitoring improving delivery and safety.
              </p>
            </div>
          </div>
        </div>

        {/* Looking Ahead */}
        <div className="mb-16 bg-gray-50 rounded-2xl p-10">
          <h2 className="text-3xl font-light text-black mb-6">Looking Ahead: The Future of AI</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <span className="font-semibold" style={{ color: '#193362' }}>Generative AI Evolution:</span> The rapid advancement of large language models and multimodal AI will continue to unlock new applications, from creative content generation to complex problem-solving across domains.
            </p>
            <p>
              <span className="font-semibold" style={{ color: '#193362' }}>AI + Industry Convergence:</span> Specialized AI models trained on industry-specific data will deliver superior performance for vertical use cases, creating opportunities for differentiation.
            </p>
            <p>
              <span className="font-semibold" style={{ color: '#193362' }}>Responsible AI Imperative:</span> Regulatory frameworks, ethical guidelines, and governance standards will mature, requiring organizations to balance innovation with responsibility.
            </p>
            <p>
              <span className="font-semibold" style={{ color: '#193362' }}>Human-AI Collaboration:</span> The most successful organizations will focus on augmenting human capabilities rather than replacing them, creating new forms of work that leverage the best of both.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-3xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>250+</div>
            <div className="text-gray-700">AI Projects Analyzed</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-3xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>35+</div>
            <div className="text-gray-700">Countries Studied</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-3xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>15+</div>
            <div className="text-gray-700">Industries Covered</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-3xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>3.5x</div>
            <div className="text-gray-700">Average ROI</div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default AIReportPage;
