"use client";
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiePreferencesPage = () => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false,
  });

  const handleToggle = (type: string) => {
    if (type !== 'necessary') {
      setPreferences(prev => ({
        ...prev,
        [type]: !prev[type as keyof typeof prev]
      }));
    }
  };

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectAll = () => {
    setPreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    });
  };

  const handleSavePreferences = () => {
    // Save to localStorage or cookie
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    alert('Your cookie preferences have been saved!');
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="max-w-5xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl font-light text-gray-900 mb-4">Cookie Preferences</h1>
        <p className="text-gray-600 mb-12">Manage how we use cookies and similar technologies on our website</p>

        <div className="space-y-10 text-gray-800">
          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="leading-relaxed">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and provide information to the owners of the site. We use cookies and similar tracking technologies to track activity on our website and store certain information.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Manage Your Cookie Preferences</h2>
            <p className="leading-relaxed mb-6">
              You can control which types of cookies we use on our website. Please note that blocking some types of cookies may impact your experience on our website and the services we are able to offer.
            </p>

            <div className="space-y-4">
              {/* Necessary Cookies */}
              <div className="p-6 bg-gray-50 rounded-3xl border-2 border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Strictly Necessary Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="relative inline-block w-14 h-8 bg-gray-400 rounded-full cursor-not-allowed opacity-50">
                      <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transform translate-x-6 transition-transform"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Always Active</p>
                  </div>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="p-6 bg-gray-50 rounded-3xl border-2 border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div
                      className={`relative inline-block w-14 h-8 rounded-full cursor-pointer transition-colors ${
                        preferences.functional ? 'bg-[#193362]' : 'bg-gray-300'
                      }`}
                      onClick={() => handleToggle('functional')}
                    >
                      <div className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transform transition-transform ${
                        preferences.functional ? 'translate-x-6' : ''
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="p-6 bg-gray-50 rounded-3xl border-2 border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics & Performance Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div
                      className={`relative inline-block w-14 h-8 rounded-full cursor-pointer transition-colors ${
                        preferences.analytics ? 'bg-[#193362]' : 'bg-gray-300'
                      }`}
                      onClick={() => handleToggle('analytics')}
                    >
                      <div className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transform transition-transform ${
                        preferences.analytics ? 'translate-x-6' : ''
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="p-6 bg-gray-50 rounded-3xl border-2 border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing & Advertising Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div
                      className={`relative inline-block w-14 h-8 rounded-full cursor-pointer transition-colors ${
                        preferences.marketing ? 'bg-[#193362]' : 'bg-gray-300'
                      }`}
                      onClick={() => handleToggle('marketing')}
                    >
                      <div className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transform transition-transform ${
                        preferences.marketing ? 'translate-x-6' : ''
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={handleSavePreferences}
                className="px-8 py-3 text-white rounded-2xl font-semibold hover:brightness-90 transition-all"
                style={{ backgroundColor: '#193362' }}
              >
                Save Preferences
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-8 py-3 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-gray-800 transition-all"
              >
                Accept All
              </button>
              <button
                onClick={handleRejectAll}
                className="px-8 py-3 bg-gray-200 text-gray-900 rounded-2xl font-semibold hover:bg-gray-300 transition-all"
              >
                Reject All
              </button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Cookie Details</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Duration</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">session_id</td>
                    <td className="border border-gray-300 px-4 py-3">Necessary</td>
                    <td className="border border-gray-300 px-4 py-3">Session</td>
                    <td className="border border-gray-300 px-4 py-3">Maintains user session</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">user_preferences</td>
                    <td className="border border-gray-300 px-4 py-3">Functional</td>
                    <td className="border border-gray-300 px-4 py-3">1 year</td>
                    <td className="border border-gray-300 px-4 py-3">Stores user settings and preferences</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">_ga</td>
                    <td className="border border-gray-300 px-4 py-3">Analytics</td>
                    <td className="border border-gray-300 px-4 py-3">2 years</td>
                    <td className="border border-gray-300 px-4 py-3">Google Analytics tracking</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">_fbp</td>
                    <td className="border border-gray-300 px-4 py-3">Marketing</td>
                    <td className="border border-gray-300 px-4 py-3">3 months</td>
                    <td className="border border-gray-300 px-4 py-3">Facebook advertising pixel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about our use of cookies or this cookie policy, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-gray-50 rounded-3xl">
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

export default CookiePreferencesPage;
