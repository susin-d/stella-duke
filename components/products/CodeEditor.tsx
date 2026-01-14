// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Product page for the Stella Duke Code Editor (Black and Silver edition)

import React from 'react';
import { Page } from '../../App';

interface CodeEditorPageProps {
  setPage: (page: Page) => void;
}

export const CodeEditorPage: React.FC<CodeEditorPageProps> = ({ setPage }) => {
  return (
    <div className="pt-40 pb-32 min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24 animate-fade">
          <div className="flex-1">
            <span className="text-[11px] font-bold tracking-[0.4em] text-slate-500 uppercase mb-6 block">Module: High Frequency</span>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-none">
              Forge <span className="gradient-text">Absolute Speed</span>
            </h1>
            <p className="text-2xl text-slate-400 leading-relaxed max-w-2xl mb-12">
              A zero-latency, cloud-native IDE forged for engineering teams that cannot afford to wait.
            </p>
            <div className="flex gap-6">
              <button onClick={() => setPage('downloads')} className="silver-button !px-10">Download Binary</button>
              <button className="ghost-button !px-10">Launch Web IDE</button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200" 
              alt="Engineered Code" 
              className="rounded-[32px] border border-white/10 grayscale opacity-60 shadow-2xl"
            />
          </div>
        </div>

        <div className="relative mb-32 group animate-fade [animation-delay:200ms]">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-[40px] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="relative silver-card border-white/10 overflow-hidden shadow-3xl">
            <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex items-center justify-between">
              <div className="flex gap-2.5">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="text-[11px] text-slate-500 font-mono tracking-widest">kernel_init.wasm</div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Nodes Active</span>
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row h-[600px]">
              <div className="w-full md:w-72 bg-white/[0.02] border-r border-white/5 p-6 font-mono text-[13px] space-y-3 text-slate-600">
                <div className="text-white bg-white/5 rounded-lg px-3 py-2 border border-white/5">core/</div>
                <div className="pl-6 hover:text-white cursor-pointer transition-colors">main.rs</div>
                <div className="pl-6 text-white font-bold bg-white/5 rounded-lg px-3 py-2 border border-white/10">stella_wasm.ts</div>
                <div className="pl-6 hover:text-white cursor-pointer transition-colors">manifest.json</div>
              </div>
              
              <div className="flex-1 p-8 font-mono text-[14px] leading-relaxed overflow-auto bg-black">
                <pre className="text-slate-400">
                  <code>
                    <span className="text-slate-600">01</span> <span className="text-white">pub fn</span> <span className="text-slate-200">initialize_engine</span>() &#123;<br/>
                    <span className="text-slate-600">02</span>   <span className="text-slate-500">// Stella Kernel Optimization</span><br/>
                    <span className="text-slate-600">03</span>   <span className="text-white">let</span> context = <span className="text-slate-300">StellaContext</span>::<span className="text-slate-200">new</span>();<br/>
                    <span className="text-slate-600">04</span>   <span className="text-slate-200">context.apply_latency_offset</span>(<span className="text-slate-300">Offset::Zero</span>);<br/>
                    <span className="text-slate-600">05</span>   <br/>
                    <span className="text-slate-600">06</span>   <span className="text-slate-500">// Syncing nodes</span><br/>
                    <span className="text-slate-600">07</span>   <span className="text-white">for</span> node <span className="text-white">in</span> <span className="text-slate-200">context.nodes()</span> &#123;<br/>
                    <span className="text-slate-600">08</span>     <span className="text-slate-200">node.sync()</span>;<br/>
                    <span className="text-slate-600">09</span>   &#125;<br/>
                    <span className="text-slate-600">10</span> &#125;
                  </code>
                </pre>
              </div>

              <div className="w-full md:w-80 bg-white/[0.03] border-l border-white/5 p-8">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 mb-6">Neural Insights</div>
                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-[12px]">
                    <p className="text-slate-300 mb-3">Optimize <span className="font-mono text-white">node.sync()</span> using batch threading?</p>
                    <button className="text-white font-bold hover:text-slate-300 transition-colors uppercase text-[10px] tracking-widest">Apply Patch</button>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/10 border border-white/20 text-[12px]">
                    <p className="text-white font-bold mb-1">Status: Synced</p>
                    <p className="text-slate-400">Zero conflicts detected in upstream.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-20">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Silver Latency</h3>
            <p className="text-slate-500 leading-relaxed">
              Proprietary Rust-based kernel ensuring sub-millisecond input registration even on low-bandwidth connections.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Context Engine</h3>
            <p className="text-slate-500 leading-relaxed">
              Every file is indexed in a private neural vector space, allowing for intelligent code generation that respects your entire architecture.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Edge Compilation</h3>
            <p className="text-slate-500 leading-relaxed">
              Distributed builds that happen instantly across our global node network, bypassing local CPU constraints entirely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- End of components/products/CodeEditor.tsx ---