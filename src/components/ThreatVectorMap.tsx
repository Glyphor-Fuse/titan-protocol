import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldAlert, Cpu, Network, Zap, Lock } from 'lucide-react';

const vectors = [
  { id: 'v1', name: 'Endpoint.Injection', risk: 'CRITICAL', icon: Cpu },
  { id: 'v2', name: 'Network.Infiltration', risk: 'HIGH', icon: Network },
  { id: 'v3', name: 'Cloud.Exfiltration', risk: 'MODERATE', icon: Globe },
  { id: 'v4', name: 'Identity.Compromise', risk: 'CRITICAL', icon: Lock },
];

export const ThreatVectorMap = () => {
  const [activeVector, setActiveVector] = useState(vectors[0]);

  return (
    <section id="vectors" className="py-24 border-b border-border bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="space-y-2">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.2em]">[ 02 // THREAT_VECTOR_ANALYSIS ]</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter">Global Vector <span className="text-primary underline decoration-2 underline-offset-8">Simulation</span></h2>
          </div>
          <div className="max-w-md text-right text-muted-foreground font-mono text-sm">
            Active monitoring of decentralized banking nodes. Select a vector to view simulated attack pathing and mitigation strategy.
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border border-border divide-x divide-border">
          {/* Vector Selector */}
          <div className="flex flex-col">
            {vectors.map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveVector(v)}
                className={`p-8 text-left transition-all group relative overflow-hidden ${activeVector.id === v.id ? 'bg-primary text-background' : 'hover:bg-accent'}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <v.icon className={`w-6 h-6 ${activeVector.id === v.id ? 'text-background' : 'text-primary'}`} />
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 border ${activeVector.id === v.id ? 'border-background/50' : 'border-primary/20'}`}>
                    {v.risk}
                  </span>
                </div>
                <div className="text-xl font-black uppercase italic">{v.name}</div>
                <div className={`mt-2 font-mono text-xs ${activeVector.id === v.id ? 'text-background/70' : 'text-muted-foreground'}`}>
                  0x{v.id}_PROX_LOG
                </div>
                {activeVector.id === v.id && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <Zap className="w-4 h-4" />
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          {/* Interactive Visualizer */}
          <div className="lg:col-span-2 p-12 bg-black relative min-h-[500px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,255,0,0.15),transparent_70%)]" />
            </div>
            
            {/* Simulated Map Visuals */}
            <div className="relative w-full aspect-video border border-border/30 p-8 flex flex-col justify-between">
              <div className="flex justify-between text-[10px] font-mono text-primary/50">
                <span>LAT_COORD: 40.7128° N</span>
                <span>LNG_COORD: 74.0060° W</span>
              </div>
              
              <div className="relative flex-1 flex items-center justify-center">
                {/* Simplified SVG Topology */}
                <svg className="w-full h-full max-w-lg" viewBox="0 0 400 200">
                  <motion.circle 
                    cx="200" cy="100" r="40" 
                    fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" 
                    className="text-primary/40"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <circle cx="200" cy="100" r="2" className="fill-primary" />
                  <line x1="100" y1="100" x2="160" y2="100" className="stroke-primary/20" strokeWidth="1" />
                  <line x1="300" y1="100" x2="240" y2="100" className="stroke-primary/20" strokeWidth="1" />
                  
                  {/* Active attack dots */}
                  <motion.circle 
                    r="3" 
                    fill="currentColor" 
                    className="text-primary"
                    animate={{ cx: [100, 200], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.circle 
                    r="3" 
                    fill="currentColor" 
                    className="text-primary"
                    animate={{ cx: [300, 200], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: 0.5 }}
                  />
                </svg>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="font-mono text-[10px] text-primary mb-2 tracking-widest uppercase">Target_Surface</div>
                  <div className="text-4xl font-black italic uppercase tracking-tighter">CORE_DB_01</div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-8">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="h-1 bg-border relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-primary"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2 + i, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal Overlay */}
            <div className="absolute bottom-4 right-4 bg-background border border-border p-3 font-mono text-[9px] w-64 shadow-2xl">
              <div className="text-primary mb-1">LOGS_PROC: {activeVector.name}</div>
              <div className="text-muted-foreground">
                &gt; sniffing packets... [OK]<br />
                &gt; injection sequence 8%<br />
                &gt; bypass checksum: active<br />
                &gt; root_access: PENDING
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreatVectorMap;
