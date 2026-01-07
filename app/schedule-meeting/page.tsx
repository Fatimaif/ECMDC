"use client";
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ScheduleMeetingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    meetingType: 'davos-2026',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Meeting request submitted! We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="max-w-5xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Schedule a Meeting
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Connect with ECMDC leaders to discuss collaboration opportunities, project inquiries, or explore our engineering and consulting services.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#193362]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#193362]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#193362]"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#193362]"
                    placeholder="+92 300 1234567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Meeting Type *
                </label>
                <select
                  name="meetingType"
                  required
                  value={formData.meetingType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#193362]"
                >
                  <option value="davos-2026">Davos 2026 Meeting</option>
                  <option value="project-inquiry">Project Inquiry</option>
                  <option value="consulting-services">Consulting Services</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="career-discussion">Career Discussion</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#193362]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#193362]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message / Topics to Discuss *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#193362]"
                  placeholder="Please provide details about the purpose of the meeting and topics you'd like to discuss..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 text-white rounded-lg font-semibold hover:brightness-90 transition-all text-lg"
                  style={{ backgroundColor: '#193362' }}
                >
                  Submit Meeting Request
                </button>
              </div>
            </form>
          </div>

          {/* Right - Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-blue-50 rounded-2xl p-6" style={{ borderLeft: '4px solid #193362' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900">Email:</p>
                  <p>info@ecmdc.co</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone:</p>
                  <p>+92 300 5557859</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Office Hours:</p>
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 5:00 PM PKT</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Meeting Locations</h3>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900">Lahore (Head Office)</p>
                  <p>Office No. 36, The Pearl Continental, Mall Road</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Islamabad</p>
                  <p>Suite No. 202, One Constitution Avenue</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Karachi</p>
                  <p>House No 67, Khayban-e-Badban, Phase V</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Virtual Meetings</p>
                  <p>Video conferencing available</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#193362' }}>✓</span>
                  <span>Response within 24-48 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#193362' }}>✓</span>
                  <span>Meeting confirmation via email</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#193362' }}>✓</span>
                  <span>Agenda shared before meeting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#193362' }}>✓</span>
                  <span>Expert consultation and guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ScheduleMeetingPage;
