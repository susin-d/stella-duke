// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Product page for Stella Neural Engine (LLM) - Black and Silver edition

import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

export const LlmProductPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isThinking, setIsThinking] = useState(false);

  const handleCompute = async () => {
    if (!prompt.trim()) return;
    setIsThinking(true);
    setResponse(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const res = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: prompt,
        config: {
          thinkingConfig: { thinkingBudget: 10000 }
        }
      });
      setResponse(res.text || "Calculation void.");
    } catch (err) {
      setResponse("Fatal reasoning error.");
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="pt-40 pb-32 min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24 animate-fade">
          <div className="flex-1">
            <span className="text-[11px] font-bold tracking-[0.4em] text-slate-500 uppercase mb-6 block">Logic Module: High-Precision</span>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-none">
              Neural <span className="gradient-text">Engine.</span>
            </h1>
            <p className="text-2xl text-slate-400 leading-relaxed max-w-2xl">
              The reasoning core behind the Stella Ecosystem. Massively parallel intelligence designed for architectural synthesis.
            </p>
          </div>
          <div className="flex-1">
             <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
              alt="Neural Processing" 
              className="rounded-[32px] border border-white/10 grayscale opacity-50 shadow-2xl"
            />
          </div>
        </div>

        <div className="relative mb-32 animate-fade [animation-delay:200ms]">
          <div className="silver-card p-1 bg-white/5 overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[500px] bg-black">
              <div className="lg:w-1/3 p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
                <div>
                   <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Neural Interface</div>
                   <h2 className="text-2xl font-bold text-white mb-6">Direct Compute</h2>
                   <p className="text-slate-500 text-sm leading-relaxed mb-8">
                     Access the raw reasoning power of the Pro-3 kernel. Perfect for stress-testing complex system designs.
                   </p>
                </div>
                <div className="space-y-4">
                   <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Model: Gemini-3-Pro</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Precision: FP16</span>
                   </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col p-12">
                 <div className="flex-1 mb-8 overflow-auto">
                    {response ? (
                      <div className="font-mono text-sm text-slate-300 leading-relaxed animate-fade">
                         <span className="text-white font-bold opacity-40 uppercase tracking-widest block mb-4">Output Log:</span>
                         {response}
                      </div>
                    ) : isThinking ? (
                      <div className="flex items-center gap-3 text-slate-600 font-mono text-sm italic">
                         <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                         Engine reasoning in progress...
                      </div>
                    ) : (
                      <div className="text-slate-700 italic font-mono text-sm">Awaiting logic prompt...</div>
                    )}
                 </div>

                 <div className="relative group">
                    <input 
                      type="text"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Execute reasoning protocol..."
                      className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white font-mono text-sm focus:outline-none focus:border-white/30 transition-all placeholder:text-slate-800"
                      onKeyDown={(e) => e.key === 'Enter' && handleCompute()}
                    />
                    <button 
                      onClick={handleCompute}
                      disabled={isThinking}
                      className="absolute right-2 top-2 bottom-2 silver-button !py-0 !px-8 disabled:opacity-50"
                    >
                      Run
                    </button>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-24">
           <div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Large-Scale Context</h2>
              <p className="text-slate-500 leading-relaxed text-lg">
                Process entire codebases with a 2-million token context window. The engine remembers every architectural decision across your system history.
              </p>
           </div>
           <div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Silver Reasoning</h2>
              <p className="text-slate-500 leading-relaxed text-lg">
                Deep-thinking protocols optimized for STEM and engineering logic. The model doesn't just predict text; it validates structural integrity.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- End of components/products/LlmProduct.tsx ---