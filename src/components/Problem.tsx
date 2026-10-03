'use client';

import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';

const problems = [
  "Forgetting why they entered a trade",
  "Not knowing which assets perform best",
  "Not knowing which strategies actually work for them",
  "Losing track of their PnL",
  "Not reviewing their emotions and decision-making",
  "Having trading screenshots scattered across different places",
  "Not having a clear view of account progress"
];

export default function Problem() {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Stop Trading Without a Record.
          </motion.h2>
          <motion.p 
            className="text-xl text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Most traders fail because they don't treat their trading like a business. If you're experiencing any of these issues, you are leaving money on the table.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mt-1 flex-shrink-0">
                <XCircle className="w-6 h-6 text-red-500/80" />
              </div>
              <p className="text-zinc-300 text-lg">{problem}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
