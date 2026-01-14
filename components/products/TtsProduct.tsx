// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Product page for Stella Voice Synthesis (TTS) - Black and Silver edition

import React, { useState } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";

export const TtsProductPage: React.FC = () => {
  const [text, setText] = useState('Welcome to the Stella Duke Voice Synthesis Protocol.');
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  const handleSynthesize = async () => {
    setIsSynthesizing(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Say with a premium, professional engineering tone: ${text}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({sampleRate: 24000});
        const binaryString = atob(base64Audio);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        
        const dataInt16 = new Int16Array(bytes.buffer);
        const frameCount = dataInt16.length;
        const buffer = audioContext.createBuffer(1, frameCount, 24000);
        const channelData = buffer.getChannelData(0);
        for (let i = 0; i < frameCount; i++) {
          channelData[i] = dataInt16[i] / 32768.0;
        }

        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start();
      }
    } catch (error) {
      console.error("Synthesis failed:", error);
    } finally {
      setIsSynthesizing(false);
    }
  };

  return (
    <div className="pt-40 pb-32 min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24 mb-32">
          <div className="flex-1 text-left animate-fade">
            <span className="text-[11px] font-bold tracking-[0.4em] text-slate-500 uppercase mb-6 block">Acoustic Module: Active</span>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
              Voice <br/><span className="gradient-text">Synthesis.</span>
            </h1>
            <p className="text-2xl text-slate-400 leading-relaxed mb-12 max-w-xl">
              Precision audio generation for enterprise interfaces. Low-latency, emotionally aware, and forged in silver.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800" 
              alt="Acoustic Waves" 
              className="rounded-[24px] border border-white/10 grayscale opacity-40 shadow-xl hidden lg:block"
            />
          </div>

          <div className="flex-1 relative animate-fade [animation-delay:200ms]">
            <div className="silver-card p-12 bg-black border-white/10 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
               <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8">Synthesis Terminal</div>
               
               <textarea
                 value={text}
                 onChange={(e) => setText(e.target.value)}
                 className="w-full h-40 bg-white/5 border border-white/10 rounded-2xl p-6 text-white font-mono text-sm focus:outline-none focus:border-white/30 transition-all resize-none mb-8"
               />

               <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/40">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/></svg>
                     </div>
                     <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/40">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                     </div>
                  </div>
                  <button 
                    onClick={handleSynthesize}
                    disabled={isSynthesizing}
                    className="silver-button disabled:opacity-50"
                  >
                    {isSynthesizing ? 'Synthesizing...' : 'Synthesize Audio'}
                  </button>
               </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
           <div className="p-8 silver-card">
              <h3 className="text-xl font-bold text-white mb-4">Neural Timbre</h3>
              <p className="text-slate-500 text-sm">Every voice is synthesized using high-dimensional spectral modeling for unmatched realism.</p>
           </div>
           <div className="p-8 silver-card">
              <h3 className="text-xl font-bold text-white mb-4">Stream Pipeline</h3>
              <p className="text-slate-500 text-sm">Sub-200ms time-to-first-byte ensures real-time conversational capability in your apps.</p>
           </div>
           <div className="p-8 silver-card">
              <h3 className="text-xl font-bold text-white mb-4">Silver Privacy</h3>
              <p className="text-slate-500 text-sm">All audio data is encrypted in transit and purged immediately after the session ends.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- End of components/products/TtsProduct.tsx ---