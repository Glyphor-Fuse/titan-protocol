import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, Activity } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border font-mono text-xs">
      <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 font-bold text-sm tracking-tighter">
            <div className="w-5 h-5 bg-primary flex items-center justify-center">
              <Shield className="w-3 h-3 text-background" />
            </div>
            TITAN_PROTOCOL_v4.2
          </div>
          <div className="hidden md:flex items-center gap-4 text-muted-foreground border-l border-border pl-4">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              SYSTEM_READY
            </span>
            <span className="flex items-center gap-1 uppercase tracking-widest">
              LATENCY: 12ms
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-6 text-muted-foreground uppercase">
            <a href="#vectors" className="hover:text-primary transition-colors">Vectors</a>
            <a href="#matrix" className="hover:text-primary transition-colors">Matrix</a>
            <a href="#feed" className="hover:text-primary transition-colors">Log_Feed</a>
          </div>
          <button className="bg-primary text-background px-4 py-1 font-bold hover:opacity-90 transition-opacity">
            INITIATE_SCAN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
