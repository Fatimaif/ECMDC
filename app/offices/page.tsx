import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OfficesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section with Image */}
      <section className="w-full" style={{ backgroundColor: '#F1EEEA' }}>
        <div className="w-full px-4 md:px-10 pt-20 pb-16 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-light text-[#1a1a1a] mb-10 text-center">
            Our Global Offices
          </h1>
          <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-[#1a1a1a] text-center">
            Serving clients worldwide with local expertise and global reach
          </p>
        </div>
        <div className="w-full px-4 md:px-10 pb-0 flex justify-center">
          <div className="w-full overflow-hidden rounded-3xl">
            <div className="h-[420px] md:h-[500px] w-full">
              <img
                src="https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg"
                alt="Global Offices"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 md:px-10 py-16">

        <div className="space-y-10 text-gray-800">
          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Global Presence</h2>
            <p className="leading-relaxed mb-8">
              ECMDC maintains a strong global presence with offices strategically located across key business hubs. Our international network enables us to deliver world-class consulting services with deep local market knowledge.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-6">Office Locations</h2>

            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-3xl border-l-4 border-blue-900">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lahore, Pakistan (Headquarters)</h3>
                <p className="text-gray-700 mb-2">Office No. 36, The Pearl Continental</p>
                <p className="text-gray-700 mb-2">Mall Road, Lahore</p>
                <p className="text-gray-700 mb-2">Email: lahore@ecmdc.co</p>
                <p className="text-gray-700">Phone: +92 300 5557859</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-3xl border-l-4 border-blue-900">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Dubai, UAE</h3>
                <p className="text-gray-700 mb-2">Business Bay Tower</p>
                <p className="text-gray-700 mb-2">Dubai, United Arab Emirates</p>
                <p className="text-gray-700 mb-2">Email: dubai@ecmdc.co</p>
                <p className="text-gray-700">Phone: +971 4 XXX XXXX</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-3xl border-l-4 border-blue-900">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">London, United Kingdom</h3>
                <p className="text-gray-700 mb-2">Canary Wharf</p>
                <p className="text-gray-700 mb-2">London, United Kingdom</p>
                <p className="text-gray-700 mb-2">Email: london@ecmdc.co</p>
                <p className="text-gray-700">Phone: +44 20 XXXX XXXX</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-3xl border-l-4 border-blue-900">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">New York, USA</h3>
                <p className="text-gray-700 mb-2">Manhattan Financial District</p>
                <p className="text-gray-700 mb-2">New York, NY</p>
                <p className="text-gray-700 mb-2">Email: newyork@ecmdc.co</p>
                <p className="text-gray-700">Phone: +1 212 XXX XXXX</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-3xl border-l-4 border-blue-900">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Singapore</h3>
                <p className="text-gray-700 mb-2">Marina Bay Financial Centre</p>
                <p className="text-gray-700 mb-2">Singapore</p>
                <p className="text-gray-700 mb-2">Email: singapore@ecmdc.co</p>
                <p className="text-gray-700">Phone: +65 XXXX XXXX</p>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Visit Us</h2>
            <p className="leading-relaxed">
              We welcome the opportunity to meet with you at any of our office locations. Please contact us in advance to schedule a meeting with our team. Our offices are equipped with modern facilities and meeting spaces to facilitate productive discussions.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-light text-gray-900 mb-4">General Inquiries</h2>
            <div className="mt-4 p-6 bg-gray-50 rounded-3xl">
              <p className="font-semibold">ECMDC Global Headquarters</p>
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

export default OfficesPage;
