'use client';

import { motion } from 'framer-motion';
import { PenTool, Activity, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: PenTool,
    title: "Step 1: Log Your Trade",
    description: "Record the asset, session, strategy, direction, PnL, emotion and reflection immediately after taking a trade."
  },
  {
    icon: Activity,
    title: "Step 2: Review Your Performance",
    description: "Use automated calculations and visual dashboards to understand your trading performance without manual spreadsheet math."
  },
  {
    icon: TrendingUp,
    title: "Step 3: Improve Your Process",
    description: "Use your journal history, screenshots, emotions and statistics to identify profitable patterns and eliminate costly mistakes."
  }
];

export default function HowItWorks() {
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
            How It Works
          </motion.h2>
          <motion.p 
            className="text-xl text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A simple, repeatable process to transform your trading consistency.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 -translate-y-1/2 z-0 pointer-events-none"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl relative z-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
