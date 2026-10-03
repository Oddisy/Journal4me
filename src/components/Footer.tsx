'use client';

import { config } from '@/config';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const waLink = `https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello, I have a question about Journal4me.')}`;

  return (
    <footer className="bg-zinc-950 py-12 border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
             <span className="text-zinc-900 leading-none mt-0.5">T</span>
          </div>
          Journal4me
        </div>
        
        <div className="text-zinc-500 text-sm">
          &copy; {currentYear} Journal4me. All rights reserved.
        </div>
        
        <div>
          <Link 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}
