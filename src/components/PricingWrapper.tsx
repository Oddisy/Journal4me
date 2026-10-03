'use client';

import dynamic from 'next/dynamic';

const Pricing = dynamic(() => import('./Pricing'), {
  ssr: false,
  loading: () => (
    <section id="pricing" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="bg-zinc-900 border border-emerald-500/30 rounded-3xl p-8 relative shadow-[0_0_50px_rgba(16,185,129,0.1)] h-96 animate-pulse">
          </div>
        </div>
      </div>
    </section>
  )
});

export default function PricingWrapper() {
  return <Pricing />;
}
