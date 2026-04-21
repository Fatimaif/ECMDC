import React from "react";

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
  backgroundColor?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({
  stats,
  backgroundColor = "#1B3662"
}) => {
  return (
    <section className="w-full py-20" style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-light text-white mb-4">
                {stat.value}
              </div>
              <div className="text-lg text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
