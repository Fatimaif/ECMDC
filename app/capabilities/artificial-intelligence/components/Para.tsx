import React from 'react'

const Para = () => {
  return (
    <section className="w-full bg-white px-4 md:px-10 py-20 flex flex-col items-start">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-light text-[#1a1a1a] leading-tight text-left mb-10">
        Our Approach to Transformation
      </h1>
      <div className="grid grid-cols-2 gap-x-12 gap-y-4 w-full max-w-6xl">
        <div className="flex items-start">
          <span className="mr-3 mt-1">•</span>
          <span className="text-sm md:text-base text-[#1a1a1a] leading-relaxed">We build lasting capabilities within your organization to ensure sustained success beyond our engagement</span>
        </div>
        <div className="flex items-start">
          <span className="mr-3 mt-1">•</span>
          <span className="text-sm md:text-base text-[#1a1a1a] leading-relaxed">Build and deploy custom machine learning models that deliver measurable ROI and competitive advantage</span>
        </div>
        <div className="flex items-start">
          <span className="mr-3 mt-1">•</span>
          <span className="text-sm md:text-base text-[#1a1a1a] leading-relaxed">Leverage generative AI and large language models to automate processes and enhance decision-making</span>
        </div>
        <div className="flex items-start">
          <span className="mr-3 mt-1">•</span>
          <span className="text-sm md:text-base text-[#1a1a1a] leading-relaxed">Implement robust MLOps practices to ensure models perform reliably at scale in production</span>
        </div>
        <div className="flex items-start">
          <span className="mr-3 mt-1">•</span>
          <span className="text-sm md:text-base text-[#1a1a1a] leading-relaxed">Establish AI governance frameworks to ensure ethical, responsible, and compliant AI deployment</span>
        </div>
        <div className="flex items-start">
          <span className="mr-3 mt-1">•</span>
          <span className="text-sm md:text-base text-[#1a1a1a] leading-relaxed">Drive organizational change and upskill teams to build lasting AI capabilities within your enterprise</span>
        </div>
      </div>
    </section>
  )
}

export default Para
