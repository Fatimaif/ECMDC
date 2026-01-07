"use client";
import React, { useState } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { fontAspenExtralight } from '../fonts'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className={`bg-white w-full flex items-center justify-between px-6 py-4 border-b border-gray-100 ${fontAspenExtralight}`}>
        <div className="fixed top-4 left-6 z-50 flex items-center gap-5 bg-white shadow-md rounded-3xl pl-2 pr-5 py-2">
          <div
            className="bg-white rounded-2xl p-3 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" style={{ color: "#1B3662" }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: "#1B3662" }} />
            )}
          </div>
          <Link href="/">
            <img src="/pictures/ecmdclogo.webp" alt="ECMDC Logo" className="h-8 cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Full-width Mega Menu */}
      <div className={`fixed top-20 left-0 w-full bg-white shadow-xl z-40 transform transition-all duration-400 ease-out ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
      }`}>
        <div className="max-w-7xl mx-auto px-12 py-12">
          <div className="grid grid-cols-4 gap-12">
            {/* Home Column */}
            <div className="group">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block"
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-transparent group-hover:border-[#1B3662] transition-all duration-300">
                  <h3 className="text-2xl font-light text-[#212427] group-hover:text-[#1B3662] transition-colors">
                    Home
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#1B3662] transform group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Discover our vision and commitment to unlocking potential worldwide
                </p>
              </Link>
            </div>

            {/* Services Column */}
            <div className="group">
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="block"
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-transparent group-hover:border-[#1B3662] transition-all duration-300">
                  <h3 className="text-2xl font-light text-[#212427] group-hover:text-[#1B3662] transition-colors">
                    Our Services
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#1B3662] transform group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Explore our comprehensive AI solutions and strategic consulting services
                </p>
              </Link>
              <div className="mt-6 space-y-3">
                <Link
                  href="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm text-gray-700 hover:text-[#1B3662] transition-colors py-1"
                >
                  Artificial Intelligence at Scale
                </Link>
                <Link
                  href="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm text-gray-700 hover:text-[#1B3662] transition-colors py-1"
                >
                  Business Transformation
                </Link>
                <Link
                  href="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm text-gray-700 hover:text-[#1B3662] transition-colors py-1"
                >
                  Strategic Consulting
                </Link>
              </div>
            </div>

            {/* Company Column */}
            <div className="group">
              <div className="block">
                <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-[#1B3662]">
                  <h3 className="text-2xl font-light text-[#212427]">
                    Company
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Learn more about ECMDC and join our team
                </p>
              </div>
              <div className="space-y-3">
              </div>
            </div>

            {/* Contact Column */}
            <div className="group">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block"
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-transparent group-hover:border-[#1B3662] transition-all duration-300">
                  <h3 className="text-2xl font-light text-[#212427] group-hover:text-[#1B3662] transition-colors">
                    Contact Us
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#1B3662] transform group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Get in touch with our team of experienced professionals
                </p>
              </Link>
              <div className="mt-6 space-y-3">
                <div className="text-sm text-gray-700">
                  <p className="font-medium text-[#212427] mb-1">Let's Connect</p>
                  <p className="text-gray-600">We're ready to assist you</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Unlocking the Potential of Those Who Advance the World
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header