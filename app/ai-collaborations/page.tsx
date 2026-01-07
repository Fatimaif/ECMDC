import Header from '../components/Header';
import Footer from '../components/Footer';

const AICollaborationsPage = () => {

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Our AI and GenAI Collaborations
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          ECMDC is more than just a strategic consultant. Our clients benefit from our global ecosystem of AI and GenAI collaborations with leading technology companies and AI-centered enterprises, ensuring best-in-class enablement and maximizing investments.
        </p>

        {/* Four Transformation Pillars */}
        <div className="mb-16">
          <h2 className="text-4xl font-light text-black mb-8">Four Critical Transformation Pillars</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
            Working together with our partners, we deliver unprecedented value across four critical transformation pillars:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-[#193362] transition-all">
              <div className="text-4xl font-light mb-4" style={{ color: '#193362' }}>01</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Optimizing Existing Technology</h3>
              <p className="text-gray-700 leading-relaxed">
                Maximize the value of your current technology stack by integrating AI and GenAI capabilities to enhance performance, efficiency, and user experience across existing systems.
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-[#193362] transition-all">
              <div className="text-4xl font-light mb-4" style={{ color: '#193362' }}>02</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Reshaping Business Functions</h3>
              <p className="text-gray-700 leading-relaxed">
                Transform core business processes with intelligent automation, predictive analytics, and AI-driven decision-making to improve productivity and reduce operational costs.
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-[#193362] transition-all">
              <div className="text-4xl font-light mb-4" style={{ color: '#193362' }}>03</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Inventing New Business Opportunities</h3>
              <p className="text-gray-700 leading-relaxed">
                Discover and develop innovative revenue streams through AI-powered products, services, and business models that create competitive advantages in your market.
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-[#193362] transition-all">
              <div className="text-4xl font-light mb-4" style={{ color: '#193362' }}>04</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Reimagining Entire Organizations</h3>
              <p className="text-gray-700 leading-relaxed">
                Drive holistic organizational transformation by embedding AI across culture, operations, and strategy to create agile, data-driven enterprises ready for the future.
              </p>
            </div>
          </div>
        </div>

        {/* Partner Ecosystem */}
        <div className="mb-16">
          <h2 className="text-4xl font-light text-black mb-8">Our Technology Partner Ecosystem</h2>

          {/* Leading Tech Companies */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Leading Technology Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {['AWS', 'Google', 'IBM', 'Microsoft', 'Salesforce', 'SAP'].map((company, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center border-2 border-gray-200 hover:border-[#193362] transition-all">
                  <p className="text-xl font-semibold text-gray-900">{company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI-Centered Enterprises */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">AI-Centered Enterprises</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {['OpenAI', 'Anthropic', 'Articul8', 'LangChain', 'Palantir'].map((company, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center border-2 border-gray-200 hover:border-[#193362] transition-all">
                  <p className="text-xl font-semibold text-gray-900">{company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ECMDC X Section */}
        <div className="mb-16 bg-blue-50 rounded-2xl p-10 border-l-8" style={{ borderColor: '#193362' }}>
          <h2 className="text-3xl font-light text-black mb-6">ECMDC X: Design-and-Build Capability</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With ECMDC X, our in-house design-and-build capability, we remain at the forefront of technology, offering practical solutions to companies that seek to transform their business with AI and develop customized, industrial-grade platforms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Capabilities</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Custom AI platform development</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Industrial-grade GenAI solutions</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>End-to-end system integration</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Scalable cloud architecture</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Advantages</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Faster time to market</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Reduced implementation risk</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Proven best practices</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Continuous innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Collaboration Benefits */}
        <div className="mb-16">
          <h2 className="text-4xl font-light text-black mb-8">Benefits of Our Collaborative Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#193362' }}>
                <span className="text-3xl text-white">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Best-in-Class Technology</h3>
              <p className="text-gray-700 leading-relaxed">
                Access to cutting-edge AI and GenAI technologies from world-leading companies ensures you stay ahead of the competition.
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#193362' }}>
                <span className="text-3xl text-white">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation Acceleration</h3>
              <p className="text-gray-700 leading-relaxed">
                Leverage proven frameworks and methodologies to rapidly prototype, test, and deploy AI solutions that drive real business value.
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#193362' }}>
                <span className="text-3xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maximized ROI</h3>
              <p className="text-gray-700 leading-relaxed">
                Strategic guidance ensures your AI investments deliver measurable outcomes and sustainable competitive advantages.
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#193362' }}>
                <span className="text-3xl text-white">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise-Grade Security</h3>
              <p className="text-gray-700 leading-relaxed">
                Built on secure, compliant platforms with robust data governance and privacy controls for peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#193362' }}>
                <span className="text-3xl text-white">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Ecosystem Access</h3>
              <p className="text-gray-700 leading-relaxed">
                Tap into a worldwide network of experts, resources, and knowledge to solve complex challenges at any scale.
              </p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#193362' }}>
                <span className="text-3xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Future-Ready Solutions</h3>
              <p className="text-gray-700 leading-relaxed">
                Stay ahead with continuous access to emerging technologies and evolving AI capabilities as they become available.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-4xl font-light text-black mb-8">Real-World Applications</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-8 border-l-4" style={{ borderColor: '#193362' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Intelligent Customer Service</h3>
              <p className="text-gray-700 leading-relaxed">
                Deploy GenAI-powered chatbots and virtual assistants that understand context, provide personalized responses, and resolve customer inquiries 24/7 across multiple channels.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border-l-4" style={{ borderColor: '#193362' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Data Analytics</h3>
              <p className="text-gray-700 leading-relaxed">
                Harness AI to uncover hidden patterns, predict trends, and generate actionable insights from massive datasets in real-time for better decision-making.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border-l-4" style={{ borderColor: '#193362' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Process Automation</h3>
              <p className="text-gray-700 leading-relaxed">
                Automate repetitive tasks and complex workflows using intelligent process automation that learns and adapts, freeing your team to focus on high-value work.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border-l-4" style={{ borderColor: '#193362' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Experiences</h3>
              <p className="text-gray-700 leading-relaxed">
                Create hyper-personalized customer experiences using AI-driven recommendations, content generation, and dynamic user interfaces that adapt to individual preferences.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border-l-4" style={{ borderColor: '#193362' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Management & Compliance</h3>
              <p className="text-gray-700 leading-relaxed">
                Proactively identify and mitigate risks with AI-powered monitoring, anomaly detection, and automated compliance reporting across your organization.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>11+</div>
            <div className="text-gray-700">Technology Partners</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>250+</div>
            <div className="text-gray-700">AI Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>35+</div>
            <div className="text-gray-700">Countries Served</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>24+</div>
            <div className="text-gray-700">Years of Experience</div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default AICollaborationsPage;
