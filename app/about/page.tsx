"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Exploremore from "../services/components/Exploremore";
import { FaRegStar, FaChartLine, FaExpand, FaBriefcase, FaHandshake, FaBullhorn, FaUsers, FaLightbulb, FaRocket, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const capabilities = [
    { name: "AI & Machine Learning", path: "/capabilities/ai-machine-learning" },
    { name: "Artificial Intelligence", path: "/capabilities/artificial-intelligence" },
    { name: "Business & Organizational Purpose", path: "/capabilities/business-organizational-purpose" },
    { name: "Business Resilience", path: "/capabilities/business-resilience" },
    { name: "Business Strategy", path: "/capabilities/business-strategy" },
    { name: "Business Transformation", path: "/capabilities/business-transformation" },
    { name: "Climate Change & Sustainability", path: "/capabilities/climate-change-sustainability" },
    { name: "Cloud Solutions", path: "/capabilities/cloud-solutions" },
    { name: "Corporate Finance & Strategy", path: "/capabilities/corporate-finance-strategy" },
    { name: "Cost Management", path: "/capabilities/cost-management" },
    { name: "Customer Insights", path: "/capabilities/customer-insights" },
    { name: "Cybersecurity", path: "/capabilities/cybersecurity" },
    { name: "Data Analytics", path: "/capabilities/data-analytics" },
    { name: "Digital, Technology & Data", path: "/capabilities/digital-technology-data" },
    { name: "Digital Transformation", path: "/capabilities/digital-transformation" },
    { name: "Innovation Strategy & Delivery", path: "/capabilities/innovation-strategy-delivery" },
    { name: "International Business", path: "/capabilities/international-business" },
    { name: "M&A, Transactions & PMI", path: "/capabilities/ma-transactions-pmi" },
    { name: "Manufacturing", path: "/capabilities/manufacturing" },
    { name: "Marketing & Sales", path: "/capabilities/marketing-sales" },
    { name: "Operations", path: "/capabilities/operations" },
    { name: "Organization Strategy", path: "/capabilities/organization-strategy" },
    { name: "People Strategy", path: "/capabilities/people-strategy" },
    { name: "Pricing & Revenue Management", path: "/capabilities/pricing-revenue-management" },
    { name: "Risk Management & Compliance", path: "/capabilities/risk-management-compliance" },
    { name: "Social Impact", path: "/capabilities/social-impact" }
  ];

  const industries = [
    { name: "Aerospace & Defense", path: "/industries/aerospace-defense" },
    { name: "Automotive", path: "/industries/automotive" },
    { name: "Consumer Products", path: "/industries/consumer-products" },
    { name: "Education", path: "/industries/education" },
    { name: "Energy", path: "/industries/energy" },
    { name: "Energy & Utilities", path: "/industries/energy-utilities" },
    { name: "Financial Institutions", path: "/industries/financial-institutions" },
    { name: "Financial Services", path: "/industries/financial-services" },
    { name: "Healthcare", path: "/industries/healthcare" },
    { name: "Industrial Goods", path: "/industries/industrial-goods" },
    { name: "Insurance", path: "/industries/insurance" },
    { name: "Manufacturing", path: "/industries/manufacturing" },
    { name: "Private Equity", path: "/industries/private-equity" },
    { name: "Public Sector", path: "/industries/public-sector" },
    { name: "Retail", path: "/industries/retail" },
    { name: "Retail & Consumer Goods", path: "/industries/retail-consumer-goods" },
    { name: "Technology", path: "/industries/technology" },
    { name: "Technology, Media & Telecom", path: "/industries/technology-media-telecom" },
    { name: "Transportation & Logistics", path: "/industries/transportation-logistics" },
    { name: "Travel & Tourism", path: "/industries/travel-tourism" },
    { name: "Urban Planning", path: "/industries/urban-planning" }
  ];

  const handleDropdownClick = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleItemClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F1EEEA" }}>
      <Header />

      {/* Hero Section with Image */}
      <section className="w-full" style={{ backgroundColor: "#F1EEEA" }}>
        <div className="w-full px-4 md:px-10 pt-20 pb-16 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-light text-[#1a1a1a] mb-10 text-center">
            About ECMDC
          </h1>
          <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-[#1a1a1a] text-center">
            Boston Consulting Group is a global consulting firm that partners
            with leaders in business and society to tackle their most important
            challenges and capture their greatest opportunities.
          </p>
        </div>
        <div className="w-full px-4 md:px-10 pb-0 flex justify-center">
          <div className="w-full overflow-hidden rounded-3xl">
            <div className="h-[420px] md:h-[500px] w-full">
              <img
                src="https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg"
                alt="About ECMDC"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History and Statistics Section */}
      <section className="w-full" style={{ backgroundColor: "#F1EEEA" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-10 py-16">
          <p className="text-lg md:text-xl leading-relaxed text-[#1a1a1a] text-center mb-16 max-w-4xl mx-auto">
            Since its founding in 1963, ECMDC has been a pioneer in business strategy. Today, we work closely with clients to empower their organizations to grow, build sustainable competitive advantage, and drive positive societal impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-[#1B3662] mb-2">1963</div>
              <div className="text-sm md:text-base text-gray-700">Founded by Bruce Henderson</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-[#1B3662] mb-2">33k</div>
              <div className="text-sm md:text-base text-gray-700">employees</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-[#1B3662] mb-2">$13.5B</div>
              <div className="text-sm md:text-base text-gray-700">annual revenue</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-[#1B3662] mb-2">100+</div>
              <div className="text-sm md:text-base text-gray-700">cities with ECMDC offices, in more than 50 countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="w-full bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-10 py-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-8 text-center">
            Our Purpose
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[#1a1a1a] mb-12 text-center max-w-4xl mx-auto">
            At ECMDC, we have one simple statement that encapsulates our broader purpose as a global business consulting firm: unlocking the potential of those who advance the world. We try to live our purpose through our work every day by focusing on five purpose principles:
          </p>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-lg leading-relaxed text-gray-800">
                <span className="font-semibold text-[#1B3662]">We bring insight to light</span> by challenging traditional thinking and ways of operating and bringing new perspectives to the toughest problems.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-lg leading-relaxed text-gray-800">
                <span className="font-semibold text-[#1B3662]">We drive inspired impact</span> by looking beyond the next deadline to the next decade and by collaborating closely with our clients to enable and energize their organizations.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-lg leading-relaxed text-gray-800">
                <span className="font-semibold text-[#1B3662]">We conquer complexity</span> by discovering unique sources of competitive advantage and hidden truths in dynamic, complex systems.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-lg leading-relaxed text-gray-800">
                <span className="font-semibold text-[#1B3662]">We lead with integrity</span> by confronting the hard issues, staying true to our values, and stating our views candidly and directly.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-lg leading-relaxed text-gray-800">
                <span className="font-semibold text-[#1B3662]">We grow by growing others</span>, enabling our clients, colleagues, and the broader community to build success and achieve their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-10 py-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-8 text-center">
            Our Values
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[#1a1a1a] mb-12 text-center max-w-4xl mx-auto">
            Maintaining a strong culture anchored in clear, frequently communicated values is at the heart of what makes ECMDC a market leader. We are committed to the highest standards of ethics, business conduct, and company principles, and every employee is expected to uphold these standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
              <div className="flex flex-col">
                <div className="text-3xl text-[#1B3662] mb-3 font-light">
                  <FaRegStar />
                </div>
                <h3 className="text-lg font-normal text-[#1a1a1a] mb-2">Clients Come First</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">and their success is the measure of our success</p>
              </div>

              <div className="flex flex-col">
                <div className="text-3xl text-[#1B3662] mb-3 font-light">
                  <FaChartLine />
                </div>
                <h3 className="text-lg font-normal text-[#1a1a1a] mb-2">The Strategic Perspective</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">enabling our clients to deliver superior results in a sustainable manner</p>
              </div>

              <div className="flex flex-col">
                <div className="text-3xl text-[#1B3662] mb-3 font-light">
                  <FaExpand />
                </div>
                <h3 className="text-lg font-normal text-[#1a1a1a] mb-2">Expanding the Art of the Possible</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">because the goal is not simply to apply best practice, but also to invent it</p>
              </div>

              <div className="flex flex-col">
                <div className="text-3xl text-[#1B3662] mb-3 font-light">
                  <FaBriefcase />
                </div>
                <h3 className="text-lg font-normal text-[#1a1a1a] mb-2">Integrity</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">we uphold the highest ethical standards in everything we do</p>
              </div>

              <div className="flex flex-col">
                <div className="text-3xl text-[#1B3662] mb-3 font-light">
                  <FaHandshake />
                </div>
                <h3 className="text-lg font-normal text-[#1a1a1a] mb-2">Respect for the Individual</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">we value diversity, inclusion, and personal growth</p>
              </div>

              <div className="flex flex-col">
                <div className="text-3xl text-[#1B3662] mb-3 font-light">
                  <FaBullhorn />
                </div>
                <h3 className="text-lg font-normal text-[#1a1a1a] mb-2">Social Impact</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">we strive to make a positive difference in society</p>
              </div>

              <div className="flex flex-col">
                <div className="text-3xl text-[#1B3662] mb-3 font-light">
                  <FaUsers />
                </div>
                <h3 className="text-lg font-normal text-[#1a1a1a] mb-2">Collaboration</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">we believe in the power of teamwork and partnership</p>
              </div>

              <div className="flex flex-col">
                <div className="text-3xl text-[#1B3662] mb-3 font-light">
                  <FaLightbulb />
                </div>
                <h3 className="text-lg font-normal text-[#1a1a1a] mb-2">Innovation</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">we continuously push boundaries and embrace new ideas</p>
              </div>

              <div className="flex flex-col">
                <div className="text-3xl text-[#1B3662] mb-3 font-light">
                  <FaRocket />
                </div>
                <h3 className="text-lg font-normal text-[#1a1a1a] mb-2">Excellence</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">we pursue the highest quality in everything we deliver</p>
              </div>
            </div>

          <div className="mt-16 mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-6 text-center">
              Our Code of Conduct
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6 text-center">
              Our Code of Conduct encapsulates ECMDC's commitment to acting responsibly, backed by individual integrity and professional conduct. It outlines our expectations for behavior to all employees and others working on our behalf, and serves as a bridge between our purpose, our values, and our global processes and policies. It is intended to foster integrity and inform decision making while aligning our actions with expected standards of professional conduct.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 text-center">
              We periodically review and if needed update the Code of Conduct to reflect developments in corporate ethics and compliance: <span className="text-[#1B3662] font-medium">Code of Conduct</span> | <span className="text-[#1B3662] font-medium">Supplier Code of Conduct</span> | <span className="text-[#1B3662] font-medium">AI Code of Conduct</span>
            </p>
          </div>
        </div>

        {/* Our Expertise Section - Custom for About Page */}
        <section className="w-full grid grid-cols-2 mt-20">
          <div className="w-full min-h-[600px] bg-[#1B3662] flex flex-col justify-center px-10 py-10">
            <h1 className="text-5xl font-light text-white leading-tight">
              Our Expertise
            </h1>

            <p className="text-lg text-gray-200 mt-5">
              Our experts bring industry and functional expertise and a range of perspectives that spark change. We work in a collaborative model, fueled by the goal of helping our clients thrive and enabling them to make the world a better place.
            </p>

            <div className="flex gap-4 mt-10">
              <div className="relative">
                <div
                  className="w-72 border border-black rounded-2xl px-6 py-3 flex justify-between items-center bg-white cursor-pointer hover:bg-gray-50 transition-colors"
                  style={{borderWidth: '1px'}}
                  onClick={() => handleDropdownClick('capabilities')}
                >
                  <span className="text-lg text-[#1B3662] font-medium">Capabilities</span>
                  {openDropdown === 'capabilities' ? (
                    <FaArrowUp color="#1B3662" size={16} />
                  ) : (
                    <FaArrowDown color="#1B3662" size={16} />
                  )}
                </div>
                {openDropdown === 'capabilities' && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-200 shadow-lg z-10 w-full overflow-hidden">
                    <div className="max-h-80 overflow-y-auto overflow-x-hidden py-2 pr-2">
                      {capabilities.map((item, index) => (
                        <div
                          key={index}
                          className="px-6 py-3 hover:bg-gray-100 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                          onClick={() => handleItemClick(item.path)}
                        >
                          <span className="text-gray-700">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <div
                  className="w-72 border border-black rounded-2xl px-6 py-3 flex justify-between items-center bg-white cursor-pointer hover:bg-gray-50 transition-colors"
                  style={{borderWidth: '1px'}}
                  onClick={() => handleDropdownClick('industries')}
                >
                  <span className="text-lg text-[#1B3662] font-medium">Industries</span>
                  {openDropdown === 'industries' ? (
                    <FaArrowUp color="#1B3662" size={16} />
                  ) : (
                    <FaArrowDown color="#1B3662" size={16} />
                  )}
                </div>
                {openDropdown === 'industries' && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-200 shadow-lg z-10 w-full overflow-hidden">
                    <div className="max-h-80 overflow-y-auto overflow-x-hidden py-2 pr-2">
                      {industries.map((item, index) => (
                        <div
                          key={index}
                          className="px-6 py-3 hover:bg-gray-100 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                          onClick={() => handleItemClick(item.path)}
                        >
                          <span className="text-gray-700">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full h-[600px] bg-[#1B3662]">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Professional Consulting"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </section>

      {/* Our Specialty Businesses Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-8 text-center">
            Our Specialty Businesses
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[#1a1a1a] mb-16 text-center max-w-4xl mx-auto">
            ECMDC's specialty teams combine unique expertise and leading capabilities to better serve clients' evolving needs—from procurement to purpose and tech to transformation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#1B3662]">ECMDC X</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                builds and designs bold new tech products, services, and businesses.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#1B3662]">ECMDC Platinion</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                creates, builds, and implements platforms, tech products, and IT architectures.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#1B3662]">ECMDC Digital</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                unleashes the power of organizational purpose to transform productivity and profitability.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#1B3662]">ECMDC Henderson Institute</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                brings the ideas and inspiration that will help forward-looking leaders shape their next game.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#1B3662]">ECMDC U</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                builds organizational learning and employee development programs.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#1B3662]">ECMDC Expand</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                delivers unique decision-support services including benchmark comparisons and industry diagnostics.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#1B3662]">Inverto</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                provides tailored industry-specific strategies, consistent implementation, and measurable results for procurement and supply chain management.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#1B3662]">Centre for Public Impact</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                partners with governments, public servants, and the diverse network of changemakers leading the charge to reimagine government for everyone.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#1B3662]">Quantis</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                partners with organizations globally to drive sustainable transformation to align with planetary boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Exploremore />

      <Footer />
    </div>
  );
};

export default AboutPage;
