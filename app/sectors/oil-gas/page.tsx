import Header from '../../components/Header';
import Footer from '../../components/Footer';

const OilGasPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Oil & Gas
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Upstream and downstream sector engineering expertise for oil and gas exploration, production, and distribution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Upstream Services</h3>
            <p className="text-gray-700 leading-relaxed">
              Exploration, drilling, and production engineering for oil and gas fields.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Downstream Services</h3>
            <p className="text-gray-700 leading-relaxed">
              Refining, processing, and distribution infrastructure development.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Pipeline Engineering</h3>
            <p className="text-gray-700 leading-relaxed">
              Design and construction of oil and gas pipeline networks and storage facilities.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Safety & Compliance</h3>
            <p className="text-gray-700 leading-relaxed">
              Safety management systems and regulatory compliance for oil and gas operations.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OilGasPage;
