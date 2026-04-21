'use client';

import { useState } from 'react';

export default function Client() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Academic Medical Center Digital Transformation",
      client: "Leading Academic Medical Center",
      challenge: "A large academic medical center struggled with fragmented systems, poor care coordination, and declining patient satisfaction scores.",
      solution: "Implemented integrated EHR platform across 5 hospitals and 200+ clinics, deployed telehealth services, created patient portal with appointment scheduling and secure messaging, and optimized clinical workflows with AI-powered tools.",
      results: [
        "95% patient portal adoption",
        "30% reduction in readmissions",
        "40-point increase in satisfaction scores",
        "$75M annual cost savings"
      ],
      image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg"
    },
    {
      title: "Regional Health Plan Value-Based Care Program",
      client: "Regional Health Insurance Plan",
      challenge: "A health plan needed to transition providers from fee-for-service to value-based payment while managing medical costs and improving quality.",
      solution: "Designed accountable care organization model, implemented population health platform with risk stratification, created care management programs for high-risk members, and developed quality measurement and attribution methodology.",
      results: [
        "8% reduction in total cost of care",
        "15% improvement in HEDIS scores",
        "200+ providers in ACO network",
        "$120M in shared savings"
      ],
      image: "https://images.pexels.com/photos/263403/pexels-photo-263403.jpeg"
    },
    {
      title: "Community Hospital Operations Optimization",
      client: "Multi-Hospital Health System",
      challenge: "A community hospital system faced financial pressures from declining volumes, operational inefficiencies, and reimbursement challenges.",
      solution: "Optimized scheduling and patient flow, implemented supply chain consolidation, deployed revenue cycle automation, created ambulatory surgery center for high-margin procedures, and redesigned emergency department workflows.",
      results: [
        "25% improvement in OR utilization",
        "35% reduction in supply costs",
        "20% faster ED throughput",
        "$40M margin improvement"
      ],
      image: "https://images.pexels.com/photos/127874/pexels-photo-127874.jpeg"
    },
    {
      title: "Pharmaceutical Company Real-World Evidence Platform",
      client: "Global Pharmaceutical Company",
      challenge: "A pharma company needed real-world evidence to support regulatory submissions, market access, and product lifecycle management.",
      solution: "Built data lake integrating claims, EHR, genomic, and patient-reported outcomes data, developed advanced analytics for comparative effectiveness studies, created interactive dashboards for commercial and medical teams, and established data partnerships with health systems.",
      results: [
        "100M+ patient records integrated",
        "15 successful regulatory submissions",
        "30% faster time to insights",
        "5 new indication approvals"
      ],
      image: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#1B3662] mb-6">
            Healthcare Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Transforming healthcare organizations with measurable improvements in quality and efficiency
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Project Thumbnails */}
          <div className="lg:col-span-2 space-y-4">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeProject === index
                    ? 'bg-[#1B3662] text-white shadow-xl'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className={`text-3xl font-light ${
                    activeProject === index ? 'text-white/60' : 'text-[#1B3662]/30'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${
                      activeProject === index ? 'text-white' : 'text-[#1B3662]'
                    }`}>
                      {project.client}
                    </h3>
                    <p className={`text-sm ${
                      activeProject === index ? 'text-white/80' : 'text-gray-600'
                    }`}>
                      {project.title}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Project Details */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-semibold text-[#1B3662] mb-6">
                  {projects[activeProject].title}
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Challenge
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {projects[activeProject].challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {projects[activeProject].solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Results
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {projects[activeProject].results.map((result, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-[#1B3662]/5 to-[#1B3662]/10 rounded-xl p-4"
                        >
                          <p className="text-2xl font-semibold text-[#1B3662] mb-1">
                            {result.split(' ')[0]}
                          </p>
                          <p className="text-sm text-gray-600">
                            {result.split(' ').slice(1).join(' ')}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
