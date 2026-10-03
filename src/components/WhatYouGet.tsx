'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const includes = [
  "Complete Notion Journal4me",
  "Automated PnL calculations",
  "Asset performance tracking",
  "Strategy performance tracking",
  "Account progress dashboard",
  "Trade Gallery",
  "Trading Calendar",
  "Emotion tracking",
  "Trade reflection",
  "Account target tracking"
];

export default function WhatYouGet() {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Journal4me Includes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {includes.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-zinc-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
