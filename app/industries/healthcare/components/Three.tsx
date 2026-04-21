'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Three() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const strategies = [
    {
      title: "Digitize Patient Care",
      summary: "Transform care delivery with digital health platforms that improve access, engagement, and clinical outcomes.",
      details: "Implement comprehensive telehealth solutions that enable virtual consultations, remote monitoring, and asynchronous care delivery across specialties. Deploy AI-powered clinical decision support systems that assist physicians with diagnosis, treatment planning, and medication management. Create patient portals and mobile apps that empower patients to manage their health, schedule appointments, access records, and communicate with care teams. Integrate wearables and IoT devices for continuous monitoring of chronic conditions and early detection of health deterioration. Build interoperable systems that enable seamless data exchange across the care continuum.",
      image: "https://images.pexels.com/photos/9000045/pexels-photo-9000045.jpeg"
    },
    {
      title: "Optimize Operations",
      summary: "Enhance operational efficiency with intelligent automation, predictive analytics, and lean process improvement.",
      details: "Implement AI-powered scheduling systems that optimize provider utilization, reduce patient wait times, and minimize appointment no-shows. Deploy supply chain optimization that ensures critical medical supplies are available while reducing inventory carrying costs by 25-30%. Automate revenue cycle management with intelligent coding, claim submission, and denial management that accelerates cash flow. Optimize bed management and patient flow to reduce length of stay and increase capacity utilization. Create command centers with real-time visibility into operations that enable proactive problem solving and resource allocation.",
      image: "https://images.pexels.com/photos/127875/pexels-photo-127875.jpeg"
    },
    {
      title: "Advance Value-Based Care",
      summary: "Transition to value-based payment models with population health management and care coordination capabilities.",
      details: "Build population health platforms that stratify patients by risk, identify care gaps, and coordinate interventions to improve outcomes and reduce costs. Deploy care management programs for high-risk patients with chronic conditions, focusing on medication adherence, lifestyle modification, and preventive care. Implement clinical pathways and protocols that standardize care delivery while allowing for personalization based on patient characteristics. Create accountable care organizations and clinically integrated networks that align incentives across providers. Develop advanced analytics capabilities that measure quality, track outcomes, and identify opportunities for clinical and operational improvement.",
      image: "https://images.pexels.com/photos/263404/pexels-photo-263404.jpeg"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#1B3662] mb-6">
            Three Strategic Plays for Healthcare Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Proven strategies that improve outcomes, enhance efficiency, and reduce costs
          </p>
        </div>

        <div className="space-y-6">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-6">
                  <span className="text-5xl font-light text-[#1B3662]/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold text-[#1B3662] mb-2">
                      {strategy.title}
                    </h3>
                    <p className="text-gray-600">
                      {strategy.summary}
                    </p>
                  </div>
                </div>
                {expandedIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-[#1B3662] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#1B3662] flex-shrink-0" />
                )}
              </button>

              {expandedIndex === index && (
                <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-gray-700 leading-relaxed">
                        {strategy.details}
                      </p>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                      <img
                        src={strategy.image}
                        alt={strategy.title}
                        className="w-full h-64 object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
