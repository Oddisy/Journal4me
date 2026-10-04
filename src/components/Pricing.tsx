'use client';

import { motion } from 'framer-motion';
import PaystackPop from '@paystack/inline-js';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import {
  setPaymentSuccess,
  setProcessing,
} from '@/store/checkoutSlice';

export default function Pricing() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const router = useRouter();
  const dispatch = useDispatch();

  const handleCheckout = async () => {
    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setEmailError('');
    dispatch(setProcessing(true));

    try {
      // 1. Ask our server to initialize the Paystack transaction
      const response = await fetch('/api/paystack/initialize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        console.error(
          'Payment initialization failed:',
          data.error
        );

        dispatch(setProcessing(false));

        alert(
          data.error ||
          'Unable to initialize payment. Please try again.'
        );

        return;
      }

      // 2. Get the access code created by Paystack
      const { access_code } = data;

      if (!access_code) {
        throw new Error(
          'Paystack did not return an access code'
        );
      }

      // 3. Open Paystack checkout
      const popup = new PaystackPop();

      popup.resumeTransaction(access_code);

    } catch (error) {
      console.error(
        'Payment initialization error:',
        error
      );

      dispatch(setProcessing(false));

      alert(
        'An error occurred while starting the payment. Please try again.'
      );
    }
  };

  return (
    <section
      id="pricing"
      className="py-24 bg-zinc-950 relative border-t border-zinc-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <motion.div
            className="bg-zinc-900 border border-emerald-500/30 rounded-3xl p-8 relative shadow-[0_0_50px_rgba(16,185,129,0.1)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white text-sm font-bold uppercase tracking-wider py-1 px-4 rounded-full">
              Most Popular
            </div>

            <h3 className="text-2xl font-bold text-white text-center mb-2">
              Journal4me & Performance Dashboard
            </h3>

            <p className="text-zinc-400 text-center mb-6">
              Complete Notion Template
            </p>

            <div className="text-center mb-8">
              <span className="text-5xl font-extrabold text-white">
                $10
              </span>

              <span className="text-zinc-400">
                /one-time
              </span>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-300 mb-1"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {emailError && (
                  <p className="text-red-400 text-sm mt-1">
                    {emailError}
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={false}
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-emerald-500/25"
            >
              Get Instant Access
            </button>

            <p className="text-center text-zinc-500 text-sm mt-4">
              Secure payment via Paystack. Instant access after purchase.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
