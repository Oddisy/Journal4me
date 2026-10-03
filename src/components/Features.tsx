'use client';

import { motion } from 'framer-motion';
import { BookOpen, Calculator, Target, TrendingUp, Wallet, Image as ImageIcon, Calendar, BrainCircuit } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: "Journal4me",
    description: "Log asset, session, strategy, direction, and PnL for every single trade seamlessly."
  },
  {
    icon: Calculator,
    title: "Automated PnL Tracking",
    description: "Calculates your initial and final Net PnL instantly so you always know your numbers."
  },
  {
    icon: Target,
    title: "Asset Win Rate",
    description: "Automatically analyzes which pairs and assets are making you the most money."
  },
  {
    icon: TrendingUp,
    title: "Strategy Win Rate",
    description: "Discover which trading strategies actually work for you in the long run."
  },
  {
    icon: Wallet,
    title: "Account Progress",
    description: "Track your initial balance versus current balance and monitor your progress towards your goals."
  },
  {
    icon: ImageIcon,
    title: "Trade Gallery",
    description: "Attach screenshots to your entries and view them visually to study your setups."
  },
  {
    icon: Calendar,
    title: "Trading Calendar",
    description: "View your trades organized by date, making it easy to review daily and weekly performance."
  },
  {
    icon: BrainCircuit,
    title: "Emotion & Reflection Tracking",
    description: "Record your mindset and emotions to identify behavioral patterns that cost you money."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Everything You Need To Elevate Your Trading
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-2xl hover:bg-zinc-900 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
