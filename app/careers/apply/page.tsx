"use client";
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useRouter } from 'next/navigation';

const ApplyPage = () => {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Apply Today
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Take the next step in your career journey. Submit your application and join a team of exceptional professionals making a difference in the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Application Process</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our streamlined application process is designed to help us understand your skills and experience.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Submit your application</li>
              <li>• Initial screening</li>
              <li>• Interview rounds</li>
              <li>• Offer and onboarding</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">What We Look For</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We seek talented individuals who are passionate about solving complex problems and driving meaningful impact.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Problem-solving skills</li>
              <li>• Collaborative mindset</li>
              <li>• Analytical thinking</li>
              <li>• Continuous learning attitude</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Required Documents</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Please prepare the following documents to complete your application successfully.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Updated resume/CV</li>
              <li>• Cover letter</li>
              <li>• Portfolio (if applicable)</li>
              <li>• References</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Interview Tips</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prepare for success with these helpful tips for your ECMDC interview.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Research our company</li>
              <li>• Practice case studies</li>
              <li>• Prepare questions</li>
              <li>• Be authentic</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl p-12 text-white mb-12" style={{ backgroundColor: '#193362' }}>
          <h2 className="text-3xl font-light mb-4">Submit Your Application</h2>
          <p className="text-lg mb-6 opacity-90">
            Complete our online application form and upload your documents. Our recruitment team will review your application and reach out if there's a fit.
          </p>
          <button
            onClick={() => router.push('/careers/apply/form')}
            className="bg-white px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
            style={{ color: '#193362' }}
          >
            Start Application
          </button>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-light text-black mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">How long does the hiring process take?</h4>
              <p className="text-gray-700">Typically, our hiring process takes 2-4 weeks from initial application to final decision, though this may vary by position.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I apply for multiple positions?</h4>
              <p className="text-gray-700">Yes, you're welcome to apply for multiple positions that match your skills and interests.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer internships?</h4>
              <p className="text-gray-700">Yes, we offer internship programs for students and recent graduates. Check our careers page for current opportunities.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What if I don't see a suitable position?</h4>
              <p className="text-gray-700">You can submit a general application, and we'll keep your profile on file for future opportunities that match your background.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyPage;
