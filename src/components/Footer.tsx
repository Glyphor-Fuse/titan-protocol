import React from 'react';
import { Mail, Star } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background py-24 border-t border-border">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter uppercase italic">
              <div className="w-8 h-8 bg-primary flex items-center justify-center">
                <Star className="w-5 h-5 text-background" />
              </div>
              Titan_Protocol
            </div>
            <p className="max-w-md text-muted-foreground font-mono text-sm uppercase tracking-wider leading-loose">
              Security is not a state. <br />
              Security is a constant, violent verification of assumptions. <br />
              Secure your infrastructure today.
            </p>
            <div className="flex gap-4">
              <button className="h-12 px-6 bg-primary text-background font-bold text-sm uppercase">Secure Entry</button>
              <button className="h-12 px-6 border border-border font-mono text-sm uppercase hover:bg-accent transition-colors">View Github</button>
            </div>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="font-mono text-xs font-bold text-primary uppercase">Protocols</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-mono uppercase">
                <li><a href="#" className="hover:text-foreground">Offense</a></li>
                <li><a href="#" className="hover:text-foreground">Defense</a></li>
                <li><a href="#" className="hover:text-foreground">Compliance</a></li>
                <li><a href="#" className="hover:text-foreground">Audit</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-mono text-xs font-bold text-primary uppercase">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-mono uppercase">
                <li><a href="#" className="hover:text-foreground">System_Log</a></li>
                <li><a href="#" className="hover:text-foreground">Personnel</a></li>
                <li><a href="#" className="hover:text-foreground">HQ_Node</a></li>
                <li><a href="#" className="hover:text-foreground">Legal</a></li>
              </ul>
            </div>
            <div className="space-y-4 col-span-2 md:col-span-1">
              <h4 className="font-mono text-xs font-bold text-primary uppercase">Status</h4>
              <div className="p-4 border border-border bg-accent/50 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-muted-foreground uppercase">Global_SLA</span>
                  <span className="text-primary font-bold">100%</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-muted-foreground uppercase">Threat_Level</span>
                  <span className="text-destructive font-bold">ELEVATED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-muted-foreground">
          <div>© 2024 TITAN_PROTOCOL_OFFENSIVE_SYSTEMS. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8 uppercase">
            <span>Lat: 34.0522° N, Lon: 118.2437° W</span>
            <span>Version: 4.2.0-STABLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
