// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Product page for Collaborative Workspace (Black and Silver edition)

import React from 'react';

export const WorkspacePage: React.FC = () => {
  return (
    <div className="pt-40 pb-32 min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24 animate-fade">
          <div className="flex-1">
            <span className="text-[11px] font-bold tracking-[0.4em] text-slate-500 uppercase mb-6 block">Ecosystem: Collaboration</span>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-none">
              Unified <span className="gradient-text">Space</span>
            </h1>
            <p className="text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Where high-performance teams converge. An integrated spatial environment for engineering orchestration.
            </p>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Professional Workspace" 
              className="rounded-[32px] border border-white/10 grayscale opacity-50 shadow-2xl"
            />
          </div>
        </div>

        <div className="silver-card border-white/10 p-8 md:p-12 mb-32 animate-fade [animation-delay:200ms] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-72 border-r border-white/5 pr-10 hidden lg:block">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8">Engineering Nodes</div>
              <div className="space-y-4">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 text-white font-bold text-sm">System Alpha</div>
                <div className="p-4 hover:bg-white/5 rounded-2xl text-slate-500 font-medium text-sm transition-colors cursor-pointer">Protocol Delta</div>
                <div className="p-4 hover:bg-white/5 rounded-2xl text-slate-500 font-medium text-sm transition-colors cursor-pointer">Network 7</div>
              </div>
            </div>

            <div className="flex-1 flex gap-8 overflow-x-auto pb-4">
               {[
                 { title: 'Neural Tasks', count: 12, color: 'bg-white' },
                 { title: 'Active Sprints', count: 3, color: 'bg-slate-400' },
                 { title: 'Deployed Units', count: 85, color: 'bg-slate-600' }
               ].map((col, i) => (
                 <div key={i} className="min-w-[300px] flex-1">
                   <div className="flex items-center justify-between mb-6">
                     <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{col.title}</span>
                     <span className="text-[11px] font-mono text-white/50">{col.count} units</span>
                   </div>
                   <div className="space-y-4">
                     <div className="p-6 bg-white/5 border border-white/10 rounded-[28px] group hover:border-white/30 transition-all">
                       <div className={`w-2 h-2 rounded-full ${col.color} mb-4 shadow-lg`} />
                       <div className="text-white font-bold mb-2">Protocol Validation</div>
                       <div className="text-[12px] text-slate-500">Node analysis in progress...</div>
                     </div>
                     <div className="p-6 bg-white/[0.02] border border-white/5 rounded-[28px] opacity-40 grayscale">
                       <div className="text-white font-bold mb-2">Legacy Cleanup</div>
                     </div>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-24">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Predictive Velocity</h2>
            <p className="text-slate-500 leading-relaxed text-lg">
              Our workspace doesn't just list tasks—it predicts them. Using Genius AI, we forecast delivery dates with surgical precision based on real-time commit data.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Zero-Friction Context</h2>
            <p className="text-slate-500 leading-relaxed text-lg">
              Integrated documentation and task management ensure that architectural context is never lost. Every PR link is natively connected to its design doc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- End of components/products/Workspace.tsx ---