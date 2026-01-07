import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-5xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl font-light text-gray-900 mb-4">About ECMDC</h1>
        <p className="text-gray-600 mb-12">Transforming businesses through strategic consulting</p>

        <div className="space-y-10 text-gray-800">
          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Our Story</h2>
            <p className="leading-relaxed">
              ECMDC is a leading enterprise consulting firm dedicated to helping organizations navigate complex business challenges and achieve sustainable growth. With decades of combined experience, we bring strategic insights and innovative solutions to businesses across industries.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Our Mission</h2>
            <p className="leading-relaxed">
              We empower organizations to reach their full potential through strategic advisory, digital transformation, and operational excellence. Our mission is to deliver measurable impact and create lasting value for our clients.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Our Values</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Excellence in everything we do</li>
              <li>Integrity and transparency</li>
              <li>Client-first mindset</li>
              <li>Innovation and creativity</li>
              <li>Collaboration and teamwork</li>
              <li>Continuous learning and improvement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">What We Do</h2>
            <p className="leading-relaxed mb-4">
              Our comprehensive suite of services includes:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Strategic Planning & Business Advisory</li>
              <li>Digital Transformation & Technology Consulting</li>
              <li>Operational Excellence & Process Optimization</li>
              <li>Leadership Development & Change Management</li>
              <li>Market Analysis & Competitive Intelligence</li>
              <li>Sustainability & ESG Consulting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Global Presence</h2>
            <p className="leading-relaxed">
              With offices around the world, we serve clients across multiple continents, bringing global expertise with local insights.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Contact Us</h2>
            <div className="mt-4 p-6 bg-gray-50 rounded-lg">
              <p className="font-semibold">ECMDC</p>
              <p>Office No. 36, The Pearl Continental, Mall Road, Lahore</p>
              <p>Email: info@ecmdc.co</p>
              <p>Phone: +92 300 5557859</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
