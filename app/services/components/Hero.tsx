import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-full px-4 md:px-10 pt-20 pb-16 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-light text-[#1a1a1a] mb-10 text-center">
          Artificial Intelligence at Scale
        </h1>

        <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-[#1a1a1a] text-center">
          With artificial intelligence at a crucial inflection point, ECMDC is
          helping organizations weave together human and technological
          capabilities to maximize value potential, productivity, and innovation
          from AI.
        </p>
      </div>
      <div className="w-full px-4 md:px-10 pb-10 flex justify-center">
        <div className="w-full overflow-hidden rounded-3xl">
          <div className="h-[420px] md:h-[500px] w-full">
            <img
              src="/pictures/strategy.jpg"
              alt="Artificial Intelligence"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:px-10 pb-20 flex justify-center">
        <div className="max-w-4xl">
          <p className="text-sm md:text-base leading-relaxed text-[#1a1a1a] mb-6 text-center">
            When predictive artificial intelligence is complemented by
            generative AI, their combined power offers stronger capabilities and
            greater, sustained AI value creation. Building from a proven
            strategic playbook, our AI strategy consulting team empowers clients
            to focus on key strategic opportunities and execute a comprehensive
            AI business transformation. By transforming your business with AI,
            we work to reimagine processes, foster adoption, and develop the
            right capabilities, roles, and governance to successfully—and
            responsibly—deploy AI at scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
