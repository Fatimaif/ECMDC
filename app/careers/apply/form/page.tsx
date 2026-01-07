"use client";
import React, { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { useRouter } from 'next/navigation';

const ApplicationFormPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    location: '',
    linkedIn: '',
    portfolio: '',
    experience: '',
    education: '',
    coverLetter: '',
    resume: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your application! We will review it and get back to you soon.');
    router.push('/careers/apply');
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          Application Form
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12">
          Complete the form below to submit your application to ECMDC. All fields marked with * are required.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-light text-black mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#193362] focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#193362] focus:border-transparent"
                  placeholder="Enter your last name"
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
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#193362] focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#193362] focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
          </div>

          {/* Position Details */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-light text-black mb-6">Position Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Position Applied For *
                </label>
                <select
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#193362] focus:border-transparent"
                >
                  <option value="">Select a position</option>
                  <option value="consultant">Consultant</option>
                  <option value="senior-consultant">Senior Consultant</option>
                  <option value="manager">Manager</option>
                  <option value="senior-manager">Senior Manager</option>
                  <option value="director">Director</option>
                  <option value="analyst">Analyst</option>
                  <option value="software-engineer">Software Engineer</option>
                  <option value="data-scientist">Data Scientist</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Preferred Location *
                </label>
                <select
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#193362] focus:border-transparent"
                >
                  <option value="">Select a location</option>
                  <option value="new-york">New York</option>
                  <option value="san-francisco">San Francisco</option>
                  <option value="london">London</option>
                  <option value="singapore">Singapore</option>
                  <option value="tokyo">Tokyo</option>
                  <option value="remote">Remote</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Professional Links */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-light text-black mb-6">Professional Links</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#193362] focus:border-transparent"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Portfolio/Website
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#193362] focus:border-transparent"
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>
          </div>

          {/* Background */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-light text-black mb-6">Background</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Work Experience *
                </label>
                <textarea
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#193362] focus:border-transparent"
                  placeholder="Briefly describe your relevant work experience..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Education *
                </label>
                <textarea
                  name="education"
                  required
                  value={formData.education}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#193362] focus:border-transparent"
                  placeholder="List your educational qualifications..."
                />
              </div>
            </div>
          </div>

          {/* Cover Letter */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-light text-black mb-6">Cover Letter</h2>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Why do you want to join ECMDC? *
              </label>
              <textarea
                name="coverLetter"
                required
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#193362] focus:border-transparent"
                placeholder="Tell us about your motivations, relevant skills, and what you can bring to ECMDC..."
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-light text-black mb-6">Resume/CV</h2>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Upload Resume/CV * (PDF, DOC, DOCX - Max 5MB)
              </label>
              <input
                type="file"
                name="resume"
                required
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#193362] focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#193362] file:text-white hover:file:bg-[#152a50] file:cursor-pointer"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-[#193362] text-white px-8 py-4 rounded-lg font-semibold hover:brightness-90 transition-all text-lg"
            >
              Submit Application
            </button>
            <button
              type="button"
              onClick={() => router.push('/careers/apply')}
              className="px-8 py-4 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-all text-lg"
            >
              Cancel
            </button>
          </div>

          <p className="text-sm text-gray-600 text-center">
            By submitting this application, you agree to our privacy policy and terms of use.
          </p>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationFormPage;
