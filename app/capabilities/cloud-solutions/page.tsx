import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CloudSolutionsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Cloud Solutions
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Accelerate innovation and reduce costs with cloud-native solutions that provide scalability, flexibility, and resilience for your business operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Cloud Migration</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Seamlessly migrate your applications and data to the cloud with minimal disruption and maximum efficiency.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Migration strategy and planning</li>
              <li>• Application modernization</li>
              <li>• Data migration and validation</li>
              <li>• Hybrid cloud architecture</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Cloud-Native Development</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Build scalable, resilient applications using cloud-native technologies and modern development practices.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Microservices architecture</li>
              <li>• Containerization and Kubernetes</li>
              <li>• Serverless computing</li>
              <li>• API-first design</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Cloud Optimization</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Optimize your cloud infrastructure for performance, cost, and security to maximize return on investment.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Cost optimization and FinOps</li>
              <li>• Performance tuning</li>
              <li>• Resource right-sizing</li>
              <li>• Multi-cloud management</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Cloud Security</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Protect your cloud infrastructure with comprehensive security solutions and best practices.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Security architecture design</li>
              <li>• Identity and access management</li>
              <li>• Compliance and governance</li>
              <li>• Threat detection and response</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl p-12 text-white mb-12" style={{ backgroundColor: '#193362' }}>
          <h2 className="text-3xl font-light mb-4">Transform with Cloud</h2>
          <p className="text-lg mb-6 opacity-90">
            Leverage the full potential of cloud computing to drive agility, innovation, and growth across your organization.
          </p>
          <button className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#193362' }}>
            Start Cloud Journey
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CloudSolutionsPage;
