// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Black and Silver stats section for engineering metrics with refined alignment.

import React from 'react';

export const Stats: React.FC = () => {
  const statistics = [
    { label: 'System Uptime', value: '99.999%' },
    { label: 'Latency Offset', value: '-65ms' },
    { label: 'Active Nodes', value: '4.2k' },
    { label: 'Throughput', value: '12TB/s' },
  ];

  return (
    <section className="py-40 bg-black border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-12">
          {statistics.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-4 text-center group">
              <div className="text-[56px] md:text-[72px] font-bold text-white tracking-tighter leading-none transition-transform duration-700 group-hover:scale-105 group-hover:text-slate-100">
                {stat.value}
              </div>
              <div className="text-[12px] font-bold tracking-[0.5em] text-slate-500 uppercase">
                {stat.label}
              </div>
              <div className="w-8 h-0.5 bg-white/10 mx-auto mt-2 rounded-full group-hover:w-16 group-hover:bg-white/40 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- End of components/Stats.tsx ---