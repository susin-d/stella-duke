// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Security protocols and compliance transparency page.

import React from 'react';

export const SecurityAuditPage: React.FC = () => {
  return (
    <div className="pt-40 pb-32 min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24 animate-fade">
          <span className="text-[11px] font-bold tracking-[0.4em] text-slate-500 uppercase mb-6 block">Defense: Hardened Core</span>
          <h1 className="text-6xl font-bold text-white mb-8 tracking-tighter leading-none">
            Security <span className="gradient-text">Architecture</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Stella Duke utilizes a multi-layered cryptographic defense system. Every bit of data is protected by quantum-resistant encryption and hardware-level isolation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="silver-card p-12">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Encryption Standards</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              We employ AES-256-GCM for data at rest and TLS 1.3 with Perfect Forward Secrecy for all transit. Our keys are rotated autonomously by Stella Genius every 24 hours.
            </p>
            <div className="space-y-4">
              {['Quantum-Resistant Key Exchange', 'Hardware Security Modules (HSM)', 'End-to-End Encrypted Tunneling'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="silver-card p-12">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Compliance & Audits</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Our platform undergoes continuous real-time auditing. We maintain the highest industry certifications to ensure your intellectual property remains yours.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['SOC2 TYPE II', 'ISO 27001', 'HIPAA READY', 'GDPR COMPLIANT'].map((cert, i) => (
                <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-xl text-center">
                  <span className="text-[10px] font-bold text-slate-400 tracking-widest">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Download Security Whitepaper</h2>
          <button className="silver-button">Download PDF (v4.1)</button>
        </div>
      </div>
    </div>
  );
};

// --- End of components/pages/SecurityAudit.tsx ---