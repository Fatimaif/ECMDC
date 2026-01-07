import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DataAnalyticsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          DATA ANALYTICS
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Transform your data into actionable insights with our advanced analytics capabilities. We help organizations harness the power of data to drive informed decision-making, optimize operations, and unlock new opportunities for growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Advanced Analytics</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Leverage cutting-edge analytical techniques to extract meaningful patterns and insights from complex datasets, enabling predictive and prescriptive decision-making.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Predictive Modeling</li>
              <li>• Machine Learning</li>
              <li>• Statistical Analysis</li>
              <li>• Pattern Recognition</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Business Intelligence</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Create comprehensive dashboards and reporting solutions that provide real-time visibility into business performance and key metrics.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Interactive Dashboards</li>
              <li>• Custom Reporting</li>
              <li>• KPI Tracking</li>
              <li>• Data Visualization</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Data Strategy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Develop a comprehensive data strategy aligned with your business objectives, ensuring data quality, governance, and effective utilization across the organization.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Data Governance</li>
              <li>• Quality Management</li>
              <li>• Architecture Design</li>
              <li>• Roadmap Development</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Big Data Solutions</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Implement scalable big data platforms and processing frameworks to handle massive volumes of structured and unstructured data efficiently.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Data Lakes & Warehouses</li>
              <li>• Real-time Processing</li>
              <li>• Cloud Analytics</li>
              <li>• ETL/ELT Pipelines</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl p-12 text-white" style={{ backgroundColor: '#193362' }}>
          <h2 className="text-3xl font-light mb-4">Transform Your Data into Value</h2>
          <p className="text-lg mb-6 opacity-90">
            Discover how our data analytics solutions can help you make smarter decisions and drive measurable business outcomes. Contact us for a consultation.
          </p>
          <button className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#193362' }}>
            Get Started
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataAnalyticsPage;
