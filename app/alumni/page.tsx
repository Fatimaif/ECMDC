import Header from '../components/Header';
import Footer from '../components/Footer';

const AlumniPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="max-w-5xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl font-light text-gray-900 mb-4">ECMDC Alumni Network</h1>
        <p className="text-gray-600 mb-12">Stay connected with our global community</p>

        <div className="space-y-10 text-gray-800">
          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Welcome Alumni</h2>
            <p className="leading-relaxed">
              Once part of ECMDC, always part of our family. Our alumni network spans the globe, connecting former colleagues, fostering professional relationships, and creating opportunities for continued collaboration and growth.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Alumni Benefits</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Access to exclusive networking events and conferences</li>
              <li>Professional development resources and workshops</li>
              <li>Alumni directory and connection platform</li>
              <li>Career transition support and mentorship programs</li>
              <li>Industry insights and thought leadership content</li>
              <li>Opportunities to contribute to ECMDC projects</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Stay Connected</h2>
            <p className="leading-relaxed mb-4">
              Join our vibrant alumni community and stay informed about:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Alumni events and reunions</li>
              <li>Career opportunities and job postings</li>
              <li>Industry news and trends</li>
              <li>ECMDC updates and achievements</li>
              <li>Alumni spotlights and success stories</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Alumni Stories</h2>
            <p className="leading-relaxed">
              Our alumni have gone on to lead major organizations, start successful ventures, and make significant contributions to their industries. We celebrate their achievements and are proud to have been part of their professional journey.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Get Involved</h2>
            <p className="leading-relaxed mb-4">
              There are many ways to engage with the ECMDC alumni community:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Mentor current employees or recent alumni</li>
              <li>Speak at alumni events or webinars</li>
              <li>Participate in industry panels and discussions</li>
              <li>Share your expertise through guest articles</li>
              <li>Recruit talent from our network</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Contact Alumni Relations</h2>
            <div className="mt-4 p-6 bg-gray-50 rounded-lg">
              <p className="font-semibold">ECMDC Alumni Relations</p>
              <p>Office No. 36, The Pearl Continental, Mall Road, Lahore</p>
              <p>Email: alumni@ecmdc.co</p>
              <p>Phone: +92 300 5557859</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AlumniPage;
