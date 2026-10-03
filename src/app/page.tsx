import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import DashboardShowcase from '@/components/DashboardShowcase';
import HowItWorks from '@/components/HowItWorks';
import TradeReview from '@/components/TradeReview';
import VideoWalkthrough from '@/components/VideoWalkthrough';
import TargetAudience from '@/components/TargetAudience';
import WhatYouGet from '@/components/WhatYouGet';
import PricingWrapper from '@/components/PricingWrapper';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 text-zinc-50 relative">
      <Hero />
      <Problem />
      <Features />
      <DashboardShowcase />
      <HowItWorks />
      <TradeReview />
      <VideoWalkthrough />
      <TargetAudience />
      <WhatYouGet />
      <PricingWrapper />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
