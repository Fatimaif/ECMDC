import React from "react";

const Challenge = () => {
  return (
    <section className="w-full bg-white px-4 md:px-10 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-6">
              The Challenge
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A leading beauty company faced declining in-store engagement and struggled to replicate
              the personalized consultation experience in digital channels. With thousands of products
              and diverse customer needs, they needed a scalable solution to provide expert guidance
              at every touchpoint.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-[#1B3662] mr-3 mt-1 text-xl">•</span>
                <span className="text-base text-gray-700">Limited personalization in digital shopping experiences</span>
              </div>
              <div className="flex items-start">
                <span className="text-[#1B3662] mr-3 mt-1 text-xl">•</span>
                <span className="text-base text-gray-700">High customer acquisition costs without retention</span>
              </div>
              <div className="flex items-start">
                <span className="text-[#1B3662] mr-3 mt-1 text-xl">•</span>
                <span className="text-base text-gray-700">Inability to scale expert beauty consultation across markets</span>
              </div>
              <div className="flex items-start">
                <span className="text-[#1B3662] mr-3 mt-1 text-xl">•</span>
                <span className="text-base text-gray-700">Fragmented customer data across channels</span>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
              alt="The Challenge"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
