"use client";
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import { fontAspenExtralight } from "../fonts"

const Assist = () => {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const capabilities = [
    { name: "Agriculture", path: "/sectors/agriculture" },
    { name: "Construction", path: "/sectors/construction" },
    { name: "Education", path: "/sectors/education" },
    { name: "Environment", path: "/sectors/environment" },
    { name: "Energy", path: "/sectors/energy" },
    { name: "Hydropower", path: "/sectors/hydropower" }
  ];

  const industries = [
    { name: "Management Consulting", path: "/sectors/management-consulting" },
    { name: "Roads & Bridges", path: "/sectors/roads-bridges" },
    { name: "Oil & Gas", path: "/sectors/oil-gas" },
    { name: "Public Health Engineering", path: "/sectors/public-health" },
    { name: "Solid Waste Management", path: "/sectors/solid-waste" }
  ];

  const handleDropdownClick = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleItemClick = (path: string) => {
    router.push(path);
  };

  return (
   <section className={`w-full grid grid-cols-2 mt-20 ${fontAspenExtralight}`}>
      <div className="w-full min-h-[600px] bg-[#2C2C2C] flex flex-col justify-center px-10 py-10">
        <h1 className="text-5xl font-light text-white leading-tight">
          How can we assist you today?
        </h1>

        <p className="text-lg text-gray-200 mt-5">
          Learn more about our core areas of expertise by selecting <br/> your topic
          of interest.
        </p>

        <div className="flex gap-4 mt-10">
          {/* Capabilities Dropdown */}
          <div className="relative">
            <div
              className="w-52 border border-black rounded-xl px-6 py-3 flex justify-between items-center bg-white cursor-pointer hover:bg-gray-50 transition-colors"
              style={{borderWidth: '1px'}}
              onClick={() => handleDropdownClick('capabilities')}
            >
              <span className="text-lg text-gray-400">Sectors</span>
              {openDropdown === 'capabilities' ? (
                <FaArrowUp color="#4B5563" size={16} />
              ) : (
                <FaArrowDown color="#4B5563" size={16} />
              )}
            </div>
            {openDropdown === 'capabilities' && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden z-10 min-w-full">
                {capabilities.map((item, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 hover:bg-gray-100 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 whitespace-nowrap"
                    onClick={() => handleItemClick(item.path)}
                  >
                    <span className="text-gray-700">{item.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div className="relative">
            <div
              className="w-52 border border-black rounded-xl px-6 py-3 flex justify-between items-center bg-white cursor-pointer hover:bg-gray-50 transition-colors"
              style={{borderWidth: '1px'}}
              onClick={() => handleDropdownClick('industries')}
            >
              <span className="text-lg text-gray-400">More Sectors</span>
              {openDropdown === 'industries' ? (
                <FaArrowUp color="#4B5563" size={16} />
              ) : (
                <FaArrowDown color="#4B5563" size={16} />
              )}
            </div>
            {openDropdown === 'industries' && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden z-10 min-w-full">
                {industries.map((item, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 hover:bg-gray-100 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 whitespace-nowrap"
                    onClick={() => handleItemClick(item.path)}
                  >
                    <span className="text-gray-700">{item.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-[600px]">
        <img
          src="/pictures/blackxxx.jpg"
          alt="blackxxx"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}

export default Assist