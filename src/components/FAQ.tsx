'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What do I receive after purchasing?",
    answer: "You will receive instant access to a duplicate link for the Notion Journal4me template, along with instructions on how to set it up."
  },
  {
    question: "Do I need a Notion account?",
    answer: "Yes, you need a free Notion account to duplicate and use this template."
  },
  {
    question: "Can I use this on mobile?",
    answer: "Yes! Notion has a great mobile app, allowing you to journal trades on the go, though the dashboard is best viewed on a desktop or tablet."
  },
  {
    question: "Can I use it for Forex?",
    answer: "Absolutely. You can customize the asset list to include any Forex pairs you trade."
  },
  {
    question: "Can I use it for Gold and Indices?",
    answer: "Yes, the template is asset-agnostic. You can add Gold, US30, NAS100, Crypto, or Stocks."
  },
  {
    question: "Are the calculations automatic?",
    answer: "Yes! Once you input your initial balance and trade results, the template automatically calculates your Win Rate, Net PnL, and Account Progress."
  },
  {
    question: "Can I customize the template?",
    answer: "Yes, once you duplicate it into your workspace, it is 100% yours to customize."
  },
  {
    question: "Is this a one-time payment?",
    answer: "Yes, it is a one-time payment for lifetime access."
  },
  {
    question: "How do I access the template after payment?",
    answer: "After successful payment, you will be redirected to a success page containing the private Notion link and instructions."
  },
  {
    question: "Does this guarantee profitable trading?",
    answer: "No. The template is a journaling and performance-tracking tool. It helps you organize your data to make better decisions, but it does not guarantee trading profits."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
            >
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-white text-lg">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-zinc-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
