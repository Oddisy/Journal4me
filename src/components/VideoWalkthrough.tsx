'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { config } from '@/config';

export default function VideoWalkthrough() {
  return (
    <section id="video" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            See The Journal In Action
          </motion.h2>
          <motion.p 
            className="text-xl text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Watch a quick walkthrough of how Journal4me tracks and calculates your performance.
          </motion.p>
        </div>

        <motion.div 
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl aspect-video relative mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <iframe 
            src={config.videoUrl} 
            title="Journal4me Walkthrough" 
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Ready to organize your trading?</h3>
          <Link href="#pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-all shadow-lg">
            Get Instant Access
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
