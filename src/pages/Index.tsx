import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ThreatVectorMap } from '@/components/ThreatVectorMap';
import { ServiceMatrix } from '@/components/ServiceMatrix';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background scanlines">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <ThreatVectorMap />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <ServiceMatrix />
      </motion.div>

      <section className="py-24 border-b border-border">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="font-mono text-xs text-primary uppercase tracking-[0.2em]">[ 04 // CASE_STUDY ]</span>
              <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none">Sub-Zero <br /> <span className="text-primary">Banking</span> Infrastructure</h2>
              <p className="text-muted-foreground font-mono leading-relaxed max-w-lg">
                We successfully breached a Tier-1 retail bank's core settlement engine within 48 hours using a multi-stage zero-day chain. Our report led to a 400% increase in their defense posture.
              </p>
              <div className="pt-4">
                <button className="px-8 py-3 bg-white text-black font-black uppercase italic text-sm hover:bg-primary transition-colors">
                  Read Technical Breakdown
                </button>
              </div>
            </div>
            <div className="relative aspect-video border border-border bg-muted overflow-hidden group">
              <img 
                src="/images/case-study.png" 
                alt="Hardware Schematic" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white bg-black/80 px-2 py-1 border border-primary/40">
                REF: 884-XJ-SCHEMATIC
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
