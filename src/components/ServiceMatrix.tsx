import React from 'react';
import { Cpu, Database, Radio, ShieldCheck, Star, Zap } from 'lucide-react';

const services = [
  { title: "Network Infiltration", code: "PROT_01", desc: "Full spectrum radio and physical network perimeter bypass simulations.", icon: Radio },
  { title: "Logic Exploit Engine", code: "PROT_02", desc: "Automated business logic flaw discovery for high-volume transaction systems.", icon: Binary },
  { title: "Kernel-Level Audits", code: "PROT_03", desc: "Deep system-level vulnerability discovery in proprietary OS kernels.", icon: Cpu },
  { title: "Data Integrity Scans", code: "PROT_04", desc: "Validating immutable ledger systems against consensus-layer attacks.", icon: Database },
  { title: "Rapid Response Red-Team", code: "PROT_05", desc: "24/7 unannounced offensive campaigns to stress-test SOC efficiency.", icon: Zap },
  { title: "Regulatory Compliance", code: "PROT_06", desc: "Mapping penetration results directly to PCI-DSS, SOC2, and ISO standards.", icon: ShieldCheck },
];

export const ServiceMatrix = () => {
  return (
    <section id="matrix" className="py-24 border-b border-border bg-accent/30">
      <div className="container">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1 space-y-4">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.2em]">[ 03 // SERVICES ]</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none">The <span className="text-primary">Matrix</span></h2>
            <p className="font-mono text-sm text-muted-foreground pt-4">
              Our offensive suite is designed for systems where failure is not an option. Each protocol is a precision-engineered process.
            </p>
          </div>
          
          <div className="lg:col-span-3 grid md:grid-cols-3 border-l border-t border-border">
            {services.map((s, idx) => (
              <div key={idx} className="p-8 border-r border-b border-border group hover:bg-background transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground group-hover:text-primary transition-colors">{s.code}</span>
                </div>
                <h3 className="text-xl font-black uppercase italic mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMatrix;
