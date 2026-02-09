import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronRight, Share2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary text-primary font-mono text-xs">
              <Terminal className="w-3 h-3" />
              AUTH_LEVEL: ZERO_TRUST_ENFORCED
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase italic">
              Elite <span className="text-primary">Penetration</span> <br /> 
              Engineering.
            </h1>
            
            <p className="max-w-xl text-lg text-muted-foreground font-mono leading-relaxed">
              Titan Protocol provides hyper-density security validation for enterprise banking infrastructure. We don't just find holes; we simulate full-spectrum state-sponsored offensive campaigns.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="h-14 px-8 bg-primary text-background font-black text-lg uppercase flex items-center gap-2 group">
                Establish Connection
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="h-14 px-8 border border-border font-mono text-sm uppercase hover:bg-accent transition-colors flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                View Protocols
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-border font-mono">
              <div>
                <div className="text-xs text-muted-foreground uppercase mb-1">Success_Rate</div>
                <div className="text-2xl font-bold">99.9%</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase mb-1">Threats_Mapped</div>
                <div className="text-2xl font-bold">4.2M+</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase mb-1">Response_Time</div>
                <div className="text-2xl font-bold">&lt;150ms</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="border border-border bg-card p-6 font-mono text-[10px] leading-tight text-primary/70 shadow-2xl">
              <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
                <span>TERMINAL_SESSION_ID: TP-8842</span>
                <span className="animate-pulse">● LIVE</span>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">[0.002] Initializing Titan Offense Engine...</p>
                <p>[0.015] Loading payload: CVE-2024-TITAN-X</p>
                <p>[0.042] Target: bank-node-prime.internal</p>
                <p>[0.089] Bypassing WAF layer 7...</p>
                <p className="text-primary font-bold">[0.124] ACCESS_GRANTED (Root Privilege)</p>
                <p className="text-muted-foreground">[0.130] Escalating privileges across subnet 10.0.x.x</p>
                <p>[0.145] Dumping encrypted hashes...</p>
                <p className="text-white">[0.150] Report generated: 4 critical, 12 high</p>
                <p className="text-primary mt-4">_</p>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="aspect-square border border-border bg-muted/20 p-4 flex flex-col justify-end">
                <div className="text-xs text-muted-foreground mb-1 uppercase tracking-tighter">Hardware_Audit</div>
                <div className="text-xl font-bold italic tracking-tighter">T-SERIES 9</div>
              </div>
              <div className="aspect-square border border-border bg-primary/10 p-4 flex flex-col justify-end relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 text-[8px] opacity-20">ENCRYPTED_DATA</div>
                <div className="text-xs text-primary mb-1 uppercase tracking-tighter italic">Neural_Map</div>
                <div className="text-xl font-bold text-primary italic tracking-tighter">LIVE_SENSE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
