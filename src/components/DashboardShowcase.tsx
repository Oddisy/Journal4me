'use client';

import { motion } from 'framer-motion';

export default function DashboardShowcase() {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950 to-zinc-950 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Your Complete Trading Control Center
          </motion.h2>
          <motion.p 
            className="text-xl text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The Notion template automatically calculates and updates these metrics based on your entries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          <MetricCard title="Initial Balance" value="$10,000.00" index={0} />
          <MetricCard title="Total Net PnL" value="+$627.77" valueColor="text-emerald-400" index={1} />
          <MetricCard title="Current Balance" value="$10,627.77" valueColor="text-white" index={2} />
          <MetricCard title="Risk Limit" value="$1,000.00" valueColor="text-red-400" index={3} />
          <MetricCard title="Target Balance" value="$11,000.00" index={4} />
        </div>

        <motion.div 
          className="relative mx-auto max-w-6xl rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-[0_0_50px_rgba(16,185,129,0.1)] aspect-[16/9] flex items-center justify-center bg-[url('/mockup-dashboard.jpg')] bg-cover bg-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Fallback */}
          <div className="absolute inset-0 bg-zinc-900/80 flex items-center justify-center flex-col text-zinc-500">
             <span className="text-2xl font-bold mb-2">Main Dashboard View</span>
             <p>High-quality product screenshot</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MetricCard({ title, value, valueColor = "text-white", index }: { title: string, value: string, valueColor?: string, index: number }) {
  return (
    <motion.div 
      className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-xl flex flex-col justify-center items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <span className="text-sm text-zinc-400 font-medium mb-2 uppercase tracking-wider">{title}</span>
      <span className={`text-2xl font-bold ${valueColor}`}>{value}</span>
    </motion.div>
  );
}
