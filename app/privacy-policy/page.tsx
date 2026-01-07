import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="max-w-5xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl font-light text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-12">Last Updated: January 2025</p>

        <div className="space-y-10 text-gray-800">
          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              ECMDC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="leading-relaxed mb-4">We may collect information about you in a variety of ways. The information we may collect includes:</p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Personal Data</h3>
            <p className="leading-relaxed">
              Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Derivative Data</h3>
            <p className="leading-relaxed">
              Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Financial Data</h3>
            <p className="leading-relaxed">
              Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">3. Use of Your Information</h2>
            <p className="leading-relaxed mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Create and manage your account</li>
              <li>Process your transactions and send you related information</li>
              <li>Email you regarding your account or order</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions</li>
              <li>Generate a personal profile about you to make future visits more personalized</li>
              <li>Increase the efficiency and operation of the Site</li>
              <li>Monitor and analyze usage and trends to improve your experience</li>
              <li>Notify you of updates to the Site</li>
              <li>Offer new products, services, and/or recommendations to you</li>
              <li>Perform other business activities as needed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">4. Disclosure of Your Information</h2>
            <p className="leading-relaxed mb-4">We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">By Law or to Protect Rights</h3>
            <p className="leading-relaxed">
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Business Transfers</h3>
            <p className="leading-relaxed">
              We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">5. Security of Your Information</h2>
            <p className="leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">6. Policy for Children</h2>
            <p className="leading-relaxed">
              We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">8. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
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

export default PrivacyPolicyPage;
