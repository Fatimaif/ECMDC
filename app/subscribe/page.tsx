"use client";
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SubscribePage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const interestOptions = [
    'Strategic Consulting',
    'Digital Transformation',
    'Leadership Development',
    'Industry Insights',
    'Market Research',
    'Sustainability & ESG',
    'Technology Trends',
    'Events & Webinars'
  ];

  const handleInterestToggle = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter(i => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ email, name, interests });
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="max-w-3xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl font-light text-gray-900 mb-4">Subscribe to Our Newsletter</h1>
        <p className="text-gray-600 mb-12">Stay informed with the latest insights, trends, and updates from ECMDC</p>

        {!submitted ? (
          <div className="space-y-10 text-gray-800">
            <section>
              <h2 className="text-3xl font-light text-gray-900 mb-4">Why Subscribe?</h2>
              <ul className="list-disc ml-6 space-y-2 mb-8">
                <li>Exclusive industry insights and market analysis</li>
                <li>Latest trends in business strategy and innovation</li>
                <li>Invitations to webinars and events</li>
                <li>Thought leadership articles from our experts</li>
                <li>Case studies and success stories</li>
                <li>Early access to reports and publications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light text-gray-900 mb-6">Sign Up</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Areas of Interest (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {interestOptions.map((interest) => (
                      <label
                        key={interest}
                        className="flex items-center space-x-3 p-3 border border-gray-200 rounded-3xl hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={interests.includes(interest)}
                          onChange={() => handleInterestToggle(interest)}
                          className="w-4 h-4 text-blue-900 border-gray-300 rounded focus:ring-blue-900"
                        />
                        <span className="text-sm text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white py-4 px-6 rounded-2xl hover:bg-blue-800 transition-colors duration-200 font-medium"
                  >
                    Subscribe Now
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  By subscribing, you agree to receive marketing emails from ECMDC. You can unsubscribe at any time.
                  View our <a href="/privacy-policy" className="underline">Privacy Policy</a>.
                </p>
              </form>
            </section>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mb-6">
              <svg
                className="mx-auto h-16 w-16 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Thank You for Subscribing!</h2>
            <p className="text-gray-600 mb-8">
              Welcome to the ECMDC community. You'll start receiving our newsletter soon.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setEmail('');
                setName('');
                setInterests([]);
              }}
              className="text-blue-900 hover:underline"
            >
              Subscribe another email
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SubscribePage;
