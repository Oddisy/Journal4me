'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ExternalLink } from 'lucide-react';
import { config } from '@/config';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Link from 'next/link';

export default function SuccessPage() {
  const { paymentSuccess } = useSelector((state: RootState) => state.checkout);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
      <motion.div 
        className="max-w-xl w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-400" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Payment Successful!</h1>
          
          <p className="text-zinc-400 mb-8 text-lg">
            Thank you for purchasing Journal4me. Your template is ready to use.
          </p>

          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 w-full mb-8 text-left">
            <h3 className="font-semibold text-white mb-2">Next Steps:</h3>
            <ol className="list-decimal list-inside text-zinc-400 space-y-2">
              <li>Click the button below to open the template in Notion.</li>
              <li>Click "Duplicate" in the top right corner.</li>
              <li>Select your Notion workspace.</li>
              <li>Start logging your trades!</li>
            </ol>
          </div>

          <Link 
            href={config.notionTemplateUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-emerald-500/25"
          >
            Access Notion Template
            <ExternalLink className="w-5 h-5" />
          </Link>
          
          <p className="text-zinc-500 text-sm mt-6">
            If you need any help, please contact us via WhatsApp.
          </p>
        </div>
      </motion.div>
    </main>
  );
}
