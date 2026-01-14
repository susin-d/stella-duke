// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Minimalist Black and Silver authentication interface.

import React from 'react';
import { Page } from '../../App';

interface SignInPageProps {
  setPage: (page: Page) => void;
}

export const SignInPage: React.FC<SignInPageProps> = ({ setPage }) => {
  return (
    <div className="pt-40 pb-32 min-h-screen bg-black flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-md">
        <div className="silver-card p-12 text-center animate-fade shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="w-12 h-12 rounded-full bg-white mx-auto mb-8 flex items-center justify-center text-black font-bold text-lg shadow-xl">S</div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tighter">Welcome Back</h1>
          <p className="text-slate-500 text-sm mb-10 uppercase tracking-widest font-bold text-[10px]">Authorization Required</p>
          
          <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Access ID</label>
              <input 
                type="email" 
                placeholder="architect@stella.duke"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/40 transition-all placeholder:text-slate-700"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Secret Key</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/40 transition-all placeholder:text-slate-700"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full silver-button mt-4"
              onClick={() => setPage('editor')}
            >
              Authorize Access
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-4">
            <button 
              onClick={() => setPage('signup')}
              className="text-[11px] font-bold text-slate-400 uppercase tracking-widest hover:text-white transition-colors"
            >
              Request New Node? <span className="text-white">Sign Up</span>
            </button>
            <button className="text-[10px] font-bold text-slate-600 uppercase tracking-widest hover:text-slate-400 transition-colors">
              Reset Security Token
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- End of components/pages/SignInPage.tsx ---