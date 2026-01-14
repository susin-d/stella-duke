// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Centralized download hub for all Stella Duke binaries and clients.

import React from 'react';

export const DownloadsPage: React.FC = () => {
  const platforms = [
    {
      name: 'macOS',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.039 2.48-4.5 2.597-4.571-1.429-2.09-3.623-2.324-4.402-2.376-1.844-.156-3.442 1.117-4.398 1.117zm.585-1.922c1.442-1.74 2.416-4.156 2.156-6.56-2.065.078-4.558 1.364-6.039 3.09-1.325 1.52-2.48 3.974-2.156 6.3 2.286.182 4.61-1.091 6.039-2.83z"/></svg>
      ),
      versions: [
        { label: 'Apple Silicon (M1/M2/M3)', size: '124 MB' },
        { label: 'Intel Core', size: '136 MB' }
      ]
    },
    {
      name: 'Windows',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.401h-13.051M0 12.6h9.75v9.451L0 20.699m10.949-8.099H24V24l-13.051-1.849"/></svg>
      ),
      versions: [
        { label: 'x64 Installer', size: '142 MB' },
        { label: 'ARM64 Build', size: '118 MB' }
      ]
    },
    {
      name: 'Linux',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .007c-.473 0-.947.05-1.419.15-2.227.468-4.14 2.016-5.116 4.148-.255.556-.412 1.152-.464 1.761-.002.03-.01.058-.01.088 0 .151.01.301.028.452.022.185.05.37.087.552.04.195.093.388.156.577.068.204.148.404.24.598.02.043.04.086.063.128.017.032.034.064.053.096.023.037.046.075.071.112.02.028.04.056.062.083.025.032.051.064.078.095.02.024.043.047.065.07.03.033.06.064.093.096.02.02.044.04.067.06.035.03.072.06.11.088.02.015.04.03.06.044.045.033.092.064.14.093.018.01.036.02.054.03.053.03.109.06.166.086.015.007.03.015.046.02.063.03.129.056.195.08.013.004.026.01.04.013.072.024.146.046.222.065.008.002.016.004.024.006.082.02.166.038.252.053.003 0 .007.002.01.002.093.016.188.028.284.037.002 0 .004 0 .006.002.11.01.222.016.336.018h.105c.114-.002.226-.008.336-.018.002 0 .004 0 .006-.002.096-.009.191-.02.284-.037.003 0 .007-.002.01-.002.086-.015.17-.033.252-.053.008-.002.016-.004.024-.006.076-.02.15-.04.222-.065.013-.004.026-.01.04-.013.066-.024.132-.05.195-.08.016-.006.03-.013.046-.02.057-.027.113-.056.166-.086.018-.01.036-.02.054-.03.048-.03.095-.06.14-.093.02-.014.04-.03.06-.044.038-.028.075-.057.11-.088.023-.02.046-.04.067-.06.032-.03.063-.063.093-.096.022-.023.045-.046.065-.07.027-.03.053-.063.078-.095.022-.027.042-.055.062-.083.025-.037.048-.075.071-.112.019-.032.036-.064.053-.096.022-.042.043-.085.063-.128.092-.194.172-.394.24-.598.063-.19.116-.382.156-.577.037-.182.065-.367.087-.552.018-.15.028-.3.028-.452 0-.03-.008-.058-.01-.088-.052-.609-.21-1.205-.464-1.761-.976-2.132-2.889-3.68-5.116-4.148-.472-.1-.946-.15-1.419-.15z"/></svg>
      ),
      versions: [
        { label: 'AppImage', size: '156 MB' },
        { label: 'Debian/Ubuntu (.deb)', size: '148 MB' },
        { label: 'Flatpak', size: '162 MB' }
      ]
    },
    {
      name: 'Mobile',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>
      ),
      versions: [
        { label: 'iOS App Store', size: '82 MB' },
        { label: 'Android Play Store', size: '94 MB' }
      ]
    }
  ];

  return (
    <div className="pt-40 pb-32 min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24 animate-fade">
          <span className="text-[11px] font-bold tracking-[0.4em] text-slate-500 uppercase mb-6 block">Resource Protocol</span>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-none">
            Get the <span className="gradient-text">Suite.</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Install the native Stella Duke client for zero-latency engineering performance. Optimized for your hardware architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {platforms.map((platform, idx) => (
            <div key={idx} className="silver-card p-10 flex flex-col animate-fade" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  {platform.icon}
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">{platform.name}</h2>
              </div>
              
              <div className="space-y-4">
                {platform.versions.map((version, vIdx) => (
                  <button key={vIdx} className="w-full p-6 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl flex items-center justify-between group transition-all">
                    <div className="text-left">
                      <div className="text-white font-bold text-sm mb-1">{version.label}</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Stable Release v4.0.2 • {version.size}</div>
                    </div>
                    <svg className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="silver-card p-12 bg-white/[0.01] border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 animate-fade" style={{ animationDelay: '400ms' }}>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">CLI Access</h3>
            <p className="text-slate-500 text-sm max-w-md">Prefer the terminal? Install our global orchestration CLI via curl or npm for headless engineering.</p>
          </div>
          <div className="w-full md:w-auto">
            <div className="bg-black border border-white/10 rounded-2xl px-6 py-4 font-mono text-[13px] text-slate-300 flex items-center justify-between gap-6 group">
              <code>curl -sS https://stella.duke/install | sh</code>
              <button className="text-slate-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- End of components/pages/DownloadsPage.tsx ---