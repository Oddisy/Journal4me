'use client';

import { config } from '@/config';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function WhatsAppButton() {
  const waLink = `https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello, I have a question about Journal4me.')}`;

  return (
    <Link 
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 hover:scale-110 transition-all cursor-pointer group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-4 bg-zinc-800 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Need help?
      </span>
    </Link>
  );
}
