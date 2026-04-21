"use client";
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import { fontAspenExtralight } from "../fonts"

const Assist = () => {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const capabilities = [
    { name: "Artificial Intelligence", path: "/services" },
    { name: "Business and Organizational Purpose", path: "/capabilities/business-organizational-purpose" },
    { name: "Business Resilience", path: "/capabilities/business-resilience" },
    { name: "Business Strategy", path: "/capabilities/business-strategy" },
    { name: "Business Transformation", path: "/capabilities/business-transformation" },
    { name: "Climate Change and Sustainability", path: "/capabilities/climate-change-sustainability" },
    { name: "Cloud Solutions", path: "/capabilities/cloud-solutions" },
    { name: "Corporate Finance and Strategy", path: "/capabilities/corporate-finance-strategy" },
    { name: "Cost Management", path: "/capabilities/cost-management" },
    { name: "Customer Insights", path: "/capabilities/customer-insights" },
    { name: "Cybersecurity", path: "/capabilities/cybersecurity" },
    { name: "Data Analytics", path: "/capabilities/data-analytics" },
    { name: "Digital Transformation", path: "/capabilities/digital-transformation" },
    { name: "Digital, Technology, and Data", path: "/capabilities/digital-technology-data" },
    { name: "Innovation Strategy and Delivery", path: "/capabilities/innovation-strategy-delivery" },
    { name: "International Business", path: "/capabilities/international-business" },
    { name: "Manufacturing", path: "/capabilities/manufacturing" },
    { name: "Marketing and Sales", path: "/capabilities/marketing-sales" },
    { name: "M&A, Transactions, and PMI", path: "/capabilities/ma-transactions-pmi" },
    { name: "Operations", path: "/capabilities/operations" },
    { name: "Organization Strategy", path: "/capabilities/organization-strategy" },
    { name: "People Strategy", path: "/capabilities/people-strategy" },
    { name: "Pricing and Revenue Management", path: "/capabilities/pricing-revenue-management" },
    { name: "Risk Management and Compliance", path: "/capabilities/risk-management-compliance" },
    { name: "Social Impact", path: "/capabilities/social-impact" }
  ];

  const industries = [
    { name: "Aerospace and Defense", path: "/industries/aerospace-defense" },
    { name: "Automotive Industry", path: "/industries/automotive" },
    { name: "Consumer Products Industry", path: "/industries/consumer-products" },
    { name: "Education", path: "/industries/education" },
    { name: "Energy", path: "/industries/energy" },
    { name: "Financial Institutions", path: "/industries/financial-institutions" },
    { name: "Health Care Industry", path: "/industries/healthcare" },
    { name: "Industrial Goods", path: "/industries/industrial-goods" },
    { name: "Insurance Industry", path: "/industries/insurance" },
    { name: "Principal Investors and Private Equity", path: "/industries/private-equity" },
    { name: "Public Sector", path: "/industries/public-sector" },
    { name: "Retail Industry", path: "/industries/retail" },
    { name: "Technology, Media, and Telecommunications", path: "/industries/technology-media-telecom" },
    { name: "Transportation and Logistics", path: "/industries/transportation-logistics" },
    { name: "Travel and Tourism", path: "/industries/travel-tourism" },
    { name: "Urban Planning", path: "/industries/urban-planning" }
  ];

  const handleDropdownClick = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleItemClick = (path: string) => {
    router.push(path);
  };

  return (
   <section className={`w-full grid grid-cols-2 mt-20 ${fontAspenExtralight}`}>
      <div className="w-full min-h-[600px] bg-[#1B3662] flex flex-col justify-center px-10 py-10">
        <h1 className="text-5xl font-light text-white leading-tight">
          How can we assist you today?
        </h1>

        <p className="text-lg text-gray-200 mt-5">
          Learn more about our core areas of expertise by selecting <br/> your topic
          of interest.
        </p>

        <div className="flex gap-4 mt-10">
          <div className="relative">
            <div
              className="w-52 border border-black rounded-2xl px-6 py-3 flex justify-between items-center bg-white cursor-pointer hover:bg-gray-50 transition-colors"
              style={{borderWidth: '1px'}}
              onClick={() => handleDropdownClick('capabilities')}
            >
              <span className="text-lg text-gray-400">Capabilities</span>
              {openDropdown === 'capabilities' ? (
                <FaArrowUp color="#4B5563" size={16} />
              ) : (
                <FaArrowDown color="#4B5563" size={16} />
              )}
            </div>
            {openDropdown === 'capabilities' && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl border border-gray-200 shadow-lg z-10 w-52 max-h-96 overflow-hidden">
                <div className="overflow-y-auto overflow-x-hidden max-h-96">
                  {capabilities.map((item, index) => (
                    <div
                      key={index}
                      className="px-6 py-3 hover:bg-gray-100 cursor-pointer transition-colors"
                      onClick={() => handleItemClick(item.path)}
                    >
                      <span className="text-gray-700 text-sm break-words">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div className="relative">
            <div
              className="w-52 border border-black rounded-2xl px-6 py-3 flex justify-between items-center bg-white cursor-pointer hover:bg-gray-50 transition-colors"
              style={{borderWidth: '1px'}}
              onClick={() => handleDropdownClick('industries')}
            >
              <span className="text-lg text-gray-400">Industries</span>
              {openDropdown === 'industries' ? (
                <FaArrowUp color="#4B5563" size={16} />
              ) : (
                <FaArrowDown color="#4B5563" size={16} />
              )}
            </div>
            {openDropdown === 'industries' && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl border border-gray-200 shadow-lg z-10 w-52 max-h-96 overflow-hidden">
                <div className="overflow-y-auto overflow-x-hidden max-h-96">
                  {industries.map((item, index) => (
                    <div
                      key={index}
                      className="px-6 py-3 hover:bg-gray-100 cursor-pointer transition-colors"
                      onClick={() => handleItemClick(item.path)}
                    >
                      <span className="text-gray-700 text-sm break-words">{item.name}</span>
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
          src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg"
          alt="Professional Consulting"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}

export default Assist