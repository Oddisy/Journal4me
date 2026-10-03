'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function TradeReview() {
  const highlights = [
    "Screenshot-based trade review",
    "Calendar-based trade history",
    "Trade-by-trade records",
    "Easy performance review"
  ];

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Keep your trading history organized and easy to review.
            </h2>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              Visualize your progress with the integrated Trade Gallery and Trading Calendar. Easily look back at past setups to see what worked and what didn't.
            </p>
            
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center gap-3 text-zinc-300 text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="flex-1 w-full relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-2xl blur-xl"></div>
            <div className="relative grid grid-cols-1 gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden aspect-[16/10] shadow-2xl relative flex items-center justify-center bg-[url('/mockup-gallery.jpg')] bg-cover bg-center">
                 <div className="absolute inset-0 bg-zinc-900/80 flex items-center justify-center flex-col text-zinc-500">
                   <span className="text-xl font-bold mb-2">Trade Gallery View</span>
                 </div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden aspect-[16/10] shadow-2xl relative flex items-center justify-center bg-[url('/mockup-calendar.jpg')] bg-cover bg-center">
                 <div className="absolute inset-0 bg-zinc-900/80 flex items-center justify-center flex-col text-zinc-500">
                   <span className="text-xl font-bold mb-2">Calendar View</span>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
