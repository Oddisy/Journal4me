'use client';

import { motion } from 'framer-motion';

const audiences = [
  "Forex Traders",
  "Gold Traders",
  "Index Traders",
  "Prop Firm Traders",
  "Day Traders",
  "Swing Traders"
];

export default function TargetAudience() {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Who Is This For?
          </motion.h2>
          <motion.p 
            className="text-xl text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Built for serious traders who want to treat their trading like a business. Note: This template is a journaling and performance-tracking tool and does not guarantee trading profits.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl text-center flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span className="text-lg font-medium text-white">{audience}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
