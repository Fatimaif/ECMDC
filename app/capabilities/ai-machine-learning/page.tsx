import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AIMLPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          AI & Machine Learning
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Harness the power of artificial intelligence and machine learning to unlock insights, automate complex processes, and create intelligent systems that drive competitive advantage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">AI Strategy & Consulting</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Develop comprehensive AI strategies that align with business goals and identify high-value use cases for implementation.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• AI readiness assessment</li>
              <li>• Use case identification</li>
              <li>• AI ethics and governance</li>
              <li>• ROI analysis and planning</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Custom ML Solutions</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Build tailored machine learning models that address your specific business challenges and drive measurable outcomes.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Predictive analytics</li>
              <li>• Computer vision systems</li>
              <li>• Natural language processing</li>
              <li>• Recommendation engines</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Generative AI</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Leverage cutting-edge generative AI technologies to enhance creativity, automate content creation, and improve decision-making.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Large language model integration</li>
              <li>• AI-powered automation</li>
              <li>• Content generation systems</li>
              <li>• AI assistants and chatbots</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">MLOps & Production</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Deploy, monitor, and maintain machine learning models at scale with robust MLOps practices.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Model deployment pipelines</li>
              <li>• Performance monitoring</li>
              <li>• A/B testing frameworks</li>
              <li>• Model retraining automation</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl p-12 text-white mb-12" style={{ backgroundColor: '#193362' }}>
          <h2 className="text-3xl font-light mb-4">Unlock the Power of AI</h2>
          <p className="text-lg mb-6 opacity-90">
            Transform your business with intelligent AI solutions designed to deliver measurable results and sustainable competitive advantage.
          </p>
          <button className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#193362' }}>
            Explore AI Solutions
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIMLPage;
