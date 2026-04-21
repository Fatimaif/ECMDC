"use client";
import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronRight, Search } from 'lucide-react'
import Link from 'next/link'

interface MegaMenuSection {
  title: string;
  links: Array<{ label: string; href: string }>;
}

interface NavItem {
  label: string;
  href?: string;
  megaMenu?: MegaMenuSection[];
}

const navItems: NavItem[] = [
  {
    label: 'Industries',
    megaMenu: [
      {
        title: 'Consumer & Retail',
        links: [
          { label: 'Automotive', href: '/industries/automotive' },
          { label: 'Consumer Products', href: '/industries/consumer-products' },
          { label: 'Retail & Consumer Goods', href: '/industries/retail-consumer-goods' },
        ],
      },
      {
        title: 'Financial Services',
        links: [
          { label: 'Financial Institutions', href: '/industries/financial-services' },
          { label: 'Banking', href: '/industries/banking' },
          { label: 'Insurance', href: '/industries/insurance' },
        ],
      },
      {
        title: 'Technology & Telecom',
        links: [
          { label: 'Technology', href: '/industries/technology' },
          { label: 'Telecommunications', href: '/industries/telecom' },
        ],
      },
      {
        title: 'Industrial & Energy',
        links: [
          { label: 'Energy & Utilities', href: '/industries/energy-utilities' },
          { label: 'Manufacturing', href: '/industries/manufacturing' },
          { label: 'Healthcare', href: '/industries/healthcare' },
        ],
      },
    ],
  },
  {
    label: 'Capabilities',
    megaMenu: [
      {
        title: 'Strategy',
        links: [
          { label: 'Business Strategy', href: '/capabilities/business-strategy' },
          { label: 'Digital Transformation', href: '/capabilities/digital-transformation' },
          { label: 'Mergers & Acquisitions', href: '/capabilities/ma' },
        ],
      },
      {
        title: 'Digital & Technology',
        links: [
          { label: 'AI & Machine Learning', href: '/capabilities/ai-machine-learning' },
          { label: 'Cloud Solutions', href: '/capabilities/cloud-solutions' },
          { label: 'Data Analytics', href: '/capabilities/data-analytics' },
          { label: 'Cybersecurity', href: '/capabilities/cybersecurity' },
        ],
      },
      {
        title: 'Operations',
        links: [
          { label: 'Operations Excellence', href: '/capabilities/operations' },
          { label: 'Supply Chain', href: '/capabilities/supply-chain' },
        ],
      },
      {
        title: 'People & Organization',
        links: [
          { label: 'Change Management', href: '/capabilities/change-management' },
          { label: 'Leadership Development', href: '/capabilities/leadership' },
        ],
      },
    ],
  },
  {
    label: 'Insights',
    megaMenu: [
      {
        title: 'Featured',
        links: [
          { label: 'All Insights', href: '/insights' },
          { label: 'AI Solutions', href: '/ai-solutions' },
          { label: 'AI Report', href: '/ai-report' },
          { label: 'Client Impact', href: '/client-impact' },
        ],
      },
      {
        title: 'Publications',
        links: [
          { label: 'Articles', href: '/insights/articles' },
          { label: 'Reports', href: '/insights/reports' },
          { label: 'Case Studies', href: '/insights/case-studies' },
        ],
      },
      {
        title: 'Topics',
        links: [
          { label: 'Green Economy', href: '/green-economy-report' },
          { label: 'Leadership', href: '/leadership-interview' },
        ],
      },
    ],
  },
  {
    label: 'About',
    megaMenu: [
      {
        title: 'About ECMDC',
        links: [
          { label: 'Who We Are', href: '/about' },
          { label: 'Leadership', href: '/about/leadership' },
          { label: 'Global Offices', href: '/offices' },
        ],
      },
      {
        title: 'News & Events',
        links: [
          { label: 'Davos 2026', href: '/davos-2026' },
          { label: 'CEO Advisory', href: '/ceo-advisory' },
          { label: 'ECMDC X', href: '/ecmdc-x' },
        ],
      },
      {
        title: 'Contact & Support',
        links: [
          { label: 'Contact Us', href: '/contact' },
          { label: 'Schedule Meeting', href: '/schedule-meeting' },
          { label: 'Subscribe', href: '/subscribe' },
        ],
      },
    ],
  },
  { label: 'Alumni', href: '/alumni' },
  { label: 'Careers', href: '/careers' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<string>('Industries');
  const [loginExpanded, setLoginExpanded] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}} />
      <div className="bg-transparent w-full flex items-center justify-between px-6 py-4">
        {!isMenuOpen ? (
          <div className="fixed top-0 left-6 z-50 flex items-center gap-5 bg-white shadow-md rounded-2xl pl-2 pr-5 py-1.5 border-t-2 border-gray-200 mt-4">
            <div
              className="bg-white rounded-2xl p-2 flex items-center justify-center cursor-pointer transition-colors group"
              style={{ backgroundColor: 'rgba(27, 54, 99, 0.2)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(27, 54, 99, 0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(27, 54, 99, 0.2)'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6 transition-colors" style={{ color: "#1B3662" }} />
            </div>
            <Link href="/">
              <img src="/pictures/ecmdclogo.webp" alt="ECMDC Logo" className="h-8 cursor-pointer" />
            </Link>
          </div>
        ) : (
          <div className="fixed top-0 left-6 z-50 flex items-center gap-3 mt-4">
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <X className="w-5 h-5" style={{ color: "#1B3662" }} />
            </div>
            <img src="/pictures/ecmdclogo.webp" alt="ECMDC Logo" className="h-6" style={{ marginRight: '-60px' }} />
          </div>
        )}

      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Full-width Mega Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-white shadow-xl z-40 transform transition-all duration-400 ease-out ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
      }`}>
        <div className="flex h-full overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {/* Left Sidebar - Menu Items */}
          <div className="w-72 bg-gray-50 border-r border-gray-200 py-8 px-6 pt-20">
            <div className="space-y-1">
              <div className="px-4 py-2 mb-2">
                <h3 className="text-lg font-semibold text-[#1B3662]">Our Services</h3>
              </div>
              <button
                onClick={() => setActiveMenuItem('Industries')}
                className={`w-full text-left px-4 py-3 pl-8 rounded-lg text-base font-light transition-all ${
                  activeMenuItem === 'Industries'
                    ? 'bg-[#1B3662]/10 text-[#1B3662]'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                Industries
              </button>
              <button
                onClick={() => setActiveMenuItem('Capabilities')}
                className={`w-full text-left px-4 py-3 pl-8 rounded-lg text-base font-light transition-all ${
                  activeMenuItem === 'Capabilities'
                    ? 'bg-[#1B3662]/10 text-[#1B3662]'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                Capabilities
              </button>
              <div className="my-4 border-t border-gray-300"></div>
              <div className="px-4 py-2 mb-2">
                <h3 className="text-lg font-semibold text-[#1B3662]">Our Company</h3>
              </div>
              <button
                onClick={() => setActiveMenuItem('About ECMDC')}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-light transition-all ${
                  activeMenuItem === 'About ECMDC'
                    ? 'bg-[#1B3662]/10 text-[#1B3662]'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                About ECMDC
              </button>
              <button
                onClick={() => setActiveMenuItem('Client Impact')}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-light transition-all ${
                  activeMenuItem === 'Client Impact'
                    ? 'bg-[#1B3662]/10 text-[#1B3662]'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                Client Impact
              </button>
              <button
                onClick={() => setActiveMenuItem('Join Us')}
                className={`w-full text-left px-4 py-2 mb-2 mt-4 rounded-lg transition-all ${
                  activeMenuItem === 'Join Us' ? 'bg-[#1B3662]/10' : ''
                }`}
              >
                <h3 className="text-lg font-semibold text-[#1B3662] hover:brightness-90 transition-all cursor-pointer">Join Us</h3>
              </button>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 pb-12 border-t border-gray-200">
            {activeMenuItem === 'Industries' && (
              <div>
                <div className="pt-2 px-8 pr-16">
                  <h2 className="text-2xl font-light text-[#1B3662]">Industries</h2>
                </div>
                <p className="text-base text-gray-600 pb-2 mb-4 px-8 pr-16 border-b border-gray-300">
                  Learn how we draw on industry expertise to make companies more competitive.
                </p>
                <div className="px-8 pr-16">
                <div className="grid grid-cols-2 gap-x-12 gap-y-1">
                  <Link href="/industries/aerospace-defense" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Aerospace and Defense
                  </Link>
                  <Link href="/industries/automotive" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Automotive Industry
                  </Link>
                  <Link href="/industries/consumer-products" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Consumer Products Industry
                  </Link>
                  <Link href="/industries/education" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Education
                  </Link>
                  <Link href="/industries/energy" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Energy
                  </Link>
                  <Link href="/industries/financial-institutions" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Financial Institutions
                  </Link>
                  <Link href="/industries/healthcare" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Health Care Industry
                  </Link>
                  <Link href="/industries/industrial-goods" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Industrial Goods
                  </Link>
                  <Link href="/industries/insurance" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Insurance Industry
                  </Link>
                  <Link href="/industries/private-equity" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Principal Investors and Private Equity
                  </Link>
                  <Link href="/industries/public-sector" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Public Sector
                  </Link>
                  <Link href="/industries/retail" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Retail Industry
                  </Link>
                  <Link href="/industries/technology-media-telecom" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Technology, Media, and Telecommunications
                  </Link>
                  <Link href="/industries/transportation-logistics" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Transportation and Logistics
                  </Link>
                  <Link href="/industries/travel-tourism" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Travel and Tourism
                  </Link>
                  <Link href="/industries/urban-planning" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Urban Planning
                  </Link>
                </div>
                </div>
              </div>
            )}

            {activeMenuItem === 'Capabilities' && (
              <div>
                <div className="pt-2 px-8 pr-16">
                  <h2 className="text-2xl font-light text-[#1B3662]">Capabilities</h2>
                </div>
                <p className="text-base text-gray-600 pb-2 mb-4 px-8 pr-16 border-b border-gray-300">
                  See how we help our clients expand their capabilities on multiple existing—and emerging—fronts.
                </p>
                <div className="px-8 pr-16">
                  <div className="grid grid-cols-2 gap-x-12 gap-y-1">
                    <Link href="/services" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      Artificial Intelligence
                    </Link>
                    <Link href="/capabilities/business-organizational-purpose" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      Business and Organizational Purpose
                    </Link>
                    <Link href="/capabilities/business-resilience" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      Business Resilience
                    </Link>
                    <Link href="/capabilities/business-transformation" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      Business Transformation
                    </Link>
                    <Link href="/capabilities/climate-change-sustainability" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      Climate Change and Sustainability
                    </Link>
                    <Link href="/capabilities/corporate-finance-strategy" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      Corporate Finance and Strategy
                    </Link>
                    <Link href="/capabilities/cost-management" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      Cost Management
                    </Link>
                    <Link href="/capabilities/customer-insights" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      Customer Insights
                    </Link>
                    <Link href="/capabilities/digital-technology-data" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      Digital, Technology, and Data
                    </Link>
                    <Link href="/capabilities/innovation-strategy-delivery" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      Innovation Strategy and Delivery
                    </Link>
                    <Link href="/capabilities/international-business" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      International Business
                    </Link>
                    <Link href="/capabilities/manufacturing" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      Manufacturing
                    </Link>
                    <Link href="/capabilities/marketing-sales" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      Marketing and Sales
                    </Link>
                    <Link href="/capabilities/ma-transactions-pmi" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      M&A, Transactions, and PMI
                    </Link>
                    <Link href="/capabilities/operations" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      Operations
                    </Link>
                    <Link href="/capabilities/organization-strategy" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      Organization Strategy
                    </Link>
                    <Link href="/capabilities/people-strategy" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      People Strategy
                    </Link>
                    <Link href="/capabilities/pricing-revenue-management" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      Pricing and Revenue Management
                    </Link>
                    <Link href="/capabilities/risk-management-compliance" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      Risk Management and Compliance
                    </Link>
                    <Link href="/capabilities/social-impact" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                      Social Impact
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeMenuItem === 'Our Company' && (
              <div>
                <h2 className="text-4xl font-light text-[#1B3662] mb-8">Our Company</h2>
                <div className="space-y-4">
                  <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    About ECMDC
                  </Link>
                  <Link href="/about/leadership" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Leadership
                  </Link>
                  <Link href="/client-impact" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Client Impact
                  </Link>
                  <Link href="/offices" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Offices
                  </Link>
                  <Link href="/newsroom" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-700 hover:text-[#1B3662] transition-colors py-2">
                    Corporate Newsroom
                  </Link>
                </div>
              </div>
            )}

            {activeMenuItem === 'About ECMDC' && (
              <div className="w-1/2 bg-gray-100 min-h-screen pb-40">
                <div className="px-6 pt-4 mb-4">
                  <img src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg" alt="About ECMDC Banner" className="w-full h-56 object-cover object-center rounded-lg mb-2" />
                  <h2 className="text-2xl font-light text-[#1B3662] mb-3">About</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    As a top consulting firm, ECMDC helps clients with total transformation—driving complex change, enabling organizations to grow, and driving bottom-line impact.
                  </p>
                  <Link
                    href="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-[#1B3662] hover:brightness-90 transition-all duration-200 rounded-2xl"
                  >
                    Visit Page
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="px-6 pt-4 border-t border-gray-300">
                  <h3 className="text-sm font-light text-gray-600 mb-2">Within About</h3>
                  <div className="space-y-1">
                    <Link href="/about/commitments" onClick={() => setIsMenuOpen(false)} className="block text-base text-gray-700 hover:text-[#1B3662] transition-colors py-1">
                      Our Commitments
                    </Link>
                    <Link href="/about/history" onClick={() => setIsMenuOpen(false)} className="block text-base text-gray-700 hover:text-[#1B3662] transition-colors py-1">
                      Our History
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeMenuItem === 'Client Impact' && (
              <div className="w-1/2 bg-gray-100 min-h-screen pb-40">
                <div className="px-6 pt-4 mb-4">
                  <img src="https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg" alt="Client Impact Banner" className="w-full h-56 object-cover object-center rounded-lg mb-2" />
                  <h2 className="text-2xl font-light text-[#1B3662] mb-3">Client Impact</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Discover how we help our clients achieve transformational results through strategic consulting and innovative solutions.
                  </p>
                  <Link
                    href="/client-impact"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-[#1B3662] hover:brightness-90 transition-all duration-200 rounded-2xl"
                  >
                    Visit Page
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            )}

            {activeMenuItem === 'Join Us' && (
              <div className="w-1/2 bg-gray-100 min-h-screen pb-40">
                <div className="px-6 pt-4 mb-4">
                  <img src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg" alt="Join Us Banner" className="w-full h-56 object-cover object-center rounded-lg mb-2" />
                  <h2 className="text-2xl font-light text-[#1B3662] mb-3">Begin.</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    When you start with Beyond there's no limit to how far we can advance the world.
                  </p>
                  <Link
                    href="/careers"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-[#1B3662] hover:brightness-90 transition-all duration-200 rounded-2xl"
                  >
                    Explore Careers
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </>
  )
}

export default Header
