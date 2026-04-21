import Header from '../components/Header';
import Footer from '../components/Footer';
import { MdAdb } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { BsArrowRepeat } from "react-icons/bs";

const AISolutionsPage = () => {

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          AI Solutions for Business Transformation
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          ECMDC X offers comprehensive AI-powered solutions backed by scientific rigor, extensive intellectual property, and sophisticated AI components to accelerate business transformation across critical industries.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-3xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>250+</div>
            <div className="text-gray-700">AI Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-3xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>35+</div>
            <div className="text-gray-700">Countries Served</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-3xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>15+</div>
            <div className="text-gray-700">Industry Sectors</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-3xl">
            <div className="text-4xl font-light mb-2" style={{ color: '#193362' }}>98%</div>
            <div className="text-gray-700">Client Satisfaction</div>
          </div>
        </div>

        {/* AI Solutions Grid */}
        <h2 className="text-4xl font-light text-black mb-8">Our AI Solutions</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Retail AI */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#193362] transition-all duration-300 hover:shadow-xl">
            <div className="p-8 pb-6" style={{ backgroundColor: '#193362' }}>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-14 h-14 bg-white rounded-3xl flex-shrink-0 flex items-center justify-center">
                  <MdAdb color="#193362" size="1.875rem" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-blue-200 uppercase tracking-wide">
                    AI Platform
                  </div>
                  <h3 className="text-2xl font-semibold text-white mt-1">
                    Retail AI
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Using holistic, tailored retail intelligence software, Retail AI by ECMDC X unlocks critical advantages across the six vital components of the retail value chain.
              </p>

              <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Capabilities:</h4>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Demand forecasting and inventory optimization</span>
                </li>
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Dynamic pricing and promotion strategies</span>
                </li>
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Customer behavior analytics and personalization</span>
                </li>
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Supply chain visibility and automation</span>
                </li>
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Store operations optimization</span>
                </li>
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Fraud detection and loss prevention</span>
                </li>
              </ul>

              <div className="bg-blue-50 rounded-3xl p-4 border-l-4" style={{ borderColor: '#193362' }}>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Impact:</span> Average 15-25% improvement in inventory turnover and 10-20% increase in revenue through AI-driven insights.
                </p>
              </div>
            </div>
          </div>

          {/* Auto AI */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#193362] transition-all duration-300 hover:shadow-xl">
            <div className="p-8 pb-6" style={{ backgroundColor: '#193362' }}>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-14 h-14 bg-white rounded-3xl flex-shrink-0 flex items-center justify-center">
                  <IoMdTimer color="#193362" size="1.875rem" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-blue-200 uppercase tracking-wide">
                    AI Platform
                  </div>
                  <h3 className="text-2xl font-semibold text-white mt-1">
                    Auto AI
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Revolutionizing the automotive industry with AI-driven solutions for manufacturing excellence, supply chain optimization, and enhanced customer experiences.
              </p>

              <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Capabilities:</h4>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Predictive maintenance for manufacturing equipment</span>
                </li>
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Quality control automation with computer vision</span>
                </li>
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Production line optimization and scheduling</span>
                </li>
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Dealer network and sales forecasting</span>
                </li>
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>After-sales service optimization</span>
                </li>
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Connected vehicle data analytics</span>
                </li>
              </ul>

              <div className="bg-blue-50 rounded-3xl p-4 border-l-4" style={{ borderColor: '#193362' }}>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Impact:</span> Reduce manufacturing defects by 30-40% and improve production efficiency by 20-35% through AI automation.
                </p>
              </div>
            </div>
          </div>

          {/* Supply Chain AI */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#193362] transition-all duration-300 hover:shadow-xl">
            <div className="p-8 pb-6" style={{ backgroundColor: '#193362' }}>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-14 h-14 bg-white rounded-3xl flex-shrink-0 flex items-center justify-center">
                  <BsArrowRepeat color="#193362" size="1.875rem" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-blue-200 uppercase tracking-wide">
                    AI Platform
                  </div>
                  <h3 className="text-2xl font-semibold text-white mt-1">
                    Supply Chain AI
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Transform supply chain operations with intelligent forecasting, dynamic optimization, and real-time visibility across your entire supply network.
              </p>

              <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Capabilities:</h4>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>AI-powered demand sensing and forecasting</span>
                </li>
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Route optimization and logistics planning</span>
                </li>
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Supplier risk assessment and management</span>
                </li>
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Warehouse automation and robotics integration</span>
                </li>
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Real-time shipment tracking and visibility</span>
                </li>
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <span style={{ color: '#193362' }}>•</span>
                  <span>Carbon footprint optimization</span>
                </li>
              </ul>

              <div className="bg-blue-50 rounded-3xl p-4 border-l-4" style={{ borderColor: '#193362' }}>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Impact:</span> Achieve 25-35% reduction in logistics costs and 40-50% improvement in delivery accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Approach */}
        <div className="mb-16">
          <h2 className="text-4xl font-light text-black mb-8">Our Implementation Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-3xl p-6 border-l-4" style={{ borderColor: '#193362' }}>
              <div className="text-3xl font-light mb-3" style={{ color: '#193362' }}>01</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery & Assessment</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Comprehensive analysis of your business processes, data infrastructure, and AI readiness to identify high-impact opportunities.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-6 border-l-4" style={{ borderColor: '#193362' }}>
              <div className="text-3xl font-light mb-3" style={{ color: '#193362' }}>02</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Solution Design</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Custom AI architecture design tailored to your specific requirements, integrating seamlessly with existing systems.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-6 border-l-4" style={{ borderColor: '#193362' }}>
              <div className="text-3xl font-light mb-3" style={{ color: '#193362' }}>03</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deployment & Integration</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Agile implementation with continuous testing, validation, and refinement to ensure optimal performance.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-6 border-l-4" style={{ borderColor: '#193362' }}>
              <div className="text-3xl font-light mb-3" style={{ color: '#193362' }}>04</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimization & Support</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ongoing monitoring, model refinement, and support to maximize ROI and adapt to evolving business needs.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gray-50 rounded-2xl p-10 mb-16">
          <h2 className="text-3xl font-light text-black mb-6">Advanced Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-3xl p-4 mb-2 shadow-sm">
                <p className="font-semibold text-gray-900">Machine Learning</p>
              </div>
              <p className="text-xs text-gray-600">TensorFlow, PyTorch</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-3xl p-4 mb-2 shadow-sm">
                <p className="font-semibold text-gray-900">Deep Learning</p>
              </div>
              <p className="text-xs text-gray-600">Neural Networks, CNNs</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-3xl p-4 mb-2 shadow-sm">
                <p className="font-semibold text-gray-900">NLP</p>
              </div>
              <p className="text-xs text-gray-600">GPT, BERT, Transformers</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-3xl p-4 mb-2 shadow-sm">
                <p className="font-semibold text-gray-900">Computer Vision</p>
              </div>
              <p className="text-xs text-gray-600">OpenCV, YOLO</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-3xl p-4 mb-2 shadow-sm">
                <p className="font-semibold text-gray-900">Big Data</p>
              </div>
              <p className="text-xs text-gray-600">Spark, Hadoop</p>
            </div>
          </div>
        </div>

        {/* Industries Served */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-black mb-6">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Retail & E-commerce',
              'Automotive',
              'Manufacturing',
              'Logistics & Transportation',
              'Healthcare',
              'Financial Services',
              'Energy & Utilities',
              'Telecommunications',
              'Agriculture',
              'Construction',
              'Oil & Gas',
              'Public Sector'
            ].map((industry, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 rounded-3xl p-4 text-center hover:border-[#193362] transition-all">
                <p className="font-semibold text-gray-900">{industry}</p>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default AISolutionsPage;
