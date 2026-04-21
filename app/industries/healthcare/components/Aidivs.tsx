'use client';

import Link from 'next/link';

export default function Aidivs() {
  const services = [
    {
      title: "Digital Health Solutions",
      description: "Deploy telehealth platforms, remote patient monitoring, and AI-powered diagnostics to expand access and improve care quality.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
      link: "/services"
    },
    {
      title: "Value-Based Care",
      description: "Transform payment models and care delivery to improve outcomes while reducing costs through population health management and risk stratification.",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
      link: "/services"
    },
    {
      title: "Clinical Operations",
      description: "Optimize hospital operations with smart scheduling, supply chain management, and workflow automation that enhance efficiency and patient experience.",
      image: "https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg",
      link: "/services"
    },
    {
      title: "Data & Analytics",
      description: "Harness healthcare data with advanced analytics, predictive modeling, and real-world evidence to drive clinical and operational decisions.",
      image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg",
      link: "/services"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#1B3662] mb-6">
            Our Healthcare Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Innovative solutions that transform healthcare delivery and improve patient outcomes
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4" style={{ maxWidth: '972px' }}>
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#1B3662] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-[#1B3662] font-medium hover:gap-3 gap-2 transition-all duration-200"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
