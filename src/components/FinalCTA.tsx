'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      <div className="absolute inset-0 bg-emerald-900/5 -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Turn Your Trades Into Data.
          </motion.h2>
          
          <motion.p 
            className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Stop relying on memory. Start tracking your decisions, performance and progress.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="#pricing" className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Get Journal4me
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#video" className="w-full sm:w-auto px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 border border-zinc-700">
              <Play className="w-5 h-5" />
              Watch the Walkthrough
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
