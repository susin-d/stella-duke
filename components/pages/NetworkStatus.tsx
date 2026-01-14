// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Real-time network status and node visualization page.

import React from 'react';

export const NetworkStatusPage: React.FC = () => {
  const nodes = [
    { name: 'US-EAST-1', status: 'Optimal', load: '12%', latency: '8ms' },
    { name: 'EU-CENTRAL-1', status: 'Optimal', load: '45%', latency: '14ms' },
    { name: 'AP-SOUTH-1', status: 'Optimal', load: '22%', latency: '21ms' },
    { name: 'SA-EAST-1', status: 'Operational', load: '68%', latency: '42ms' },
  ];

  return (
    <div className="pt-40 pb-32 min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24 animate-fade">
          <span className="text-[11px] font-bold tracking-[0.4em] text-slate-500 uppercase mb-6 block">Protocol: Global Mesh</span>
          <h1 className="text-6xl font-bold text-white mb-8 tracking-tighter leading-none">
            Network <span className="gradient-text">Integrity</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Live telemetry from the Stella Duke global node network. Our distributed kernel maintains sub-millisecond drift across 42 availability zones.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <div className="silver-card p-10 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Core Uptime</div>
              <div className="text-5xl font-bold text-white tracking-tighter">99.9998%</div>
            </div>
            <div className="mt-8 text-green-500 font-mono text-xs">NO DOWNTIME DETECTED IN 365 DAYS</div>
          </div>
          <div className="silver-card p-10 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Traffic Load</div>
              <div className="text-5xl font-bold text-white tracking-tighter">4.2 PB/s</div>
            </div>
            <div className="mt-8 text-slate-500 font-mono text-xs">NOMINAL OPERATING RANGE</div>
          </div>
          <div className="silver-card p-10 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Active Sockets</div>
              <div className="text-5xl font-bold text-white tracking-tighter">1.2M</div>
            </div>
            <div className="mt-8 text-slate-500 font-mono text-xs">ENCRYPTED END-TO-END</div>
          </div>
        </div>

        <div className="silver-card overflow-hidden border-white/10">
          <div className="bg-white/5 px-8 py-4 border-b border-white/10 flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Regional Node Manifest</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-white">SYNC_OK</span>
            </div>
          </div>
          <div className="divide-y divide-white/5">
            {nodes.map((node, i) => (
              <div key={i} className="px-8 py-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-6">
                  <div className="w-2 h-8 bg-white/10 rounded-full" />
                  <div>
                    <div className="text-white font-bold">{node.name}</div>
                    <div className="text-[10px] text-slate-500 font-mono">ID: {Math.random().toString(16).slice(2, 8).toUpperCase()}</div>
                  </div>
                </div>
                <div className="text-right flex items-center gap-12">
                  <div className="hidden md:block">
                    <div className="text-[10px] text-slate-600 uppercase font-bold tracking-widest mb-1">Load</div>
                    <div className="text-white font-mono text-xs">{node.load}</div>
                  </div>
                  <div className="hidden md:block">
                    <div className="text-[10px] text-slate-600 uppercase font-bold tracking-widest mb-1">Latency</div>
                    <div className="text-white font-mono text-xs">{node.latency}</div>
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-300">
                      {node.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- End of components/pages/NetworkStatus.tsx ---