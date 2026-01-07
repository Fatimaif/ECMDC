"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fontAspenExtralight } from "../fonts";

const styles = `
  @keyframes slideRightToLeft {
    0% { width: 100%; right: auto; left: 0; }
    50% { width: 0%; right: 0; left: auto; }
    100% { width: 100%; right: auto; left: 0; }
  }
  .animate-slide:hover span.underline-animate {
    animation: slideRightToLeft 2s ease-out;
  }
`;

export default function NavBar() {
  const router = useRouter();

  const tabs = [
    { name: "ECMDC SPOTLIGHT", path: "/spotlight" },
    { name: "ECMDC X", path: "/ecmdc-x" },
    { name: "CLIENT IMPACT LIBRARY", path: "/client-impact" },
    { name: "CEO ADVISORY", path: "/ceo-advisory" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleTabClick = (index: number, path: string) => {
    setActiveIndex(index);
    router.push(path);
  };

  useEffect(() => {
    const updateUnderline = () => {
      const activeTab = tabRefs.current[activeIndex];
      if (activeTab && underlineRef.current) {
        underlineRef.current.style.width = `${activeTab.offsetWidth}px`;
        underlineRef.current.style.left = `${activeTab.offsetLeft}px`;
      }
    };
    setTimeout(updateUnderline, 0);
  }, [activeIndex]);

  return (
    <>
      <style>{styles}</style>
      <div
        className={`w-full flex justify-center py-8 bg-white overflow-hidden ${fontAspenExtralight}`}
      >
        <div
          className="bg-white rounded-xl px-12 py-6"
          style={{
            boxShadow:
              "0 -2px 4px -1px rgba(0, 0, 0, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 -1px 2px -1px rgba(0, 0, 0, 0.03), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        >
          <div className="relative flex gap-8 items-center">
            {tabs.map((tab, index) => (
              <div
                key={tab.name}
                className={`relative text-sm tracking-wide cursor-pointer transition-colors duration-300 ${
                  index === 0 ? "font-normal" : "font-semibold animate-slide"
                } ${
                  index === 0
                    ? activeIndex === index
                      ? "text-black"
                      : "text-gray-500"
                    : "text-black"
                }`}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                onClick={() => handleTabClick(index, tab.path)}
              >
                {tab.name}
                {index !== 0 && (
                  <span className="underline-animate absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-600"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
