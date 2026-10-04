'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import tradeDashboard from "../../public/tradingDashboard.png"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-zinc-950 to-zinc-950 -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6 border border-emerald-500/20">
              The Ultimate Notion Trading System
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Trade. Journal. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Analyze. Improve.</span>
          </motion.h1>

          <motion.p
            className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Journal4me is designed to help you track your trades, understand your performance, and monitor your account progress — all in one place.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="#pricing" className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Get Journal4me
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#video" className="w-full sm:w-auto px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 border border-zinc-700">
              <Play className="w-5 h-5" />
              Watch How It Works
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 relative mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl blur opacity-20"></div>
          <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl aspect-[16/9] flex items-center justify-center bg-[url('/mockup-placeholder.jpg')] bg-cover bg-center">
            {/* Fallback visual if no image */}
            <div className="absolute inset-0 bg-zinc-900/80 flex items-center justify-center flex-col text-zinc-500">
              <Image width={1024} height={576} objectFit='cover' loading='eager' src={tradeDashboard} alt="trade gallery picture" />
              {/* <span className="text-2xl font-bold mb-2">Notion Dashboard Mockup</span> */}
              {/* <p>High-quality product screenshot goes here</p> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
