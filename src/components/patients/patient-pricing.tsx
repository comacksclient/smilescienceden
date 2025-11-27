"use client";

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { BadgePercent, ShieldCheck, Wallet } from 'lucide-react';

const highlights = [
  "Written, itemized treatment plan for every procedure",
  "Transparent insurance estimates before you commit",
  "Flexible payment arrangements for uncovered amounts",
];

export const PatientPricing = () => {
  return (
    <section className="bg-white px-6 md:px-12 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollAnimation>
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.35em] mb-3 block">
              Transparent Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#0F172A] mb-4">
              No-surprises financial clarity
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Before treatment begins, you’ll receive a detailed breakdown of recommended procedures, estimated insurance coverage, and your payment options. 
              Our coordinators work closely with you so that every rupee is accounted for—no hidden fees, no uncertainty.
            </p>
            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <ShieldCheck className="w-5 h-5 text-[#1B4D3E] shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.15}>
          <div className="bg-[#FDFBF0] rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <BadgePercent className="w-6 h-6 text-[#1B4D3E]" />
              <div>
                <h3 className="text-xl font-serif font-medium text-[#0F172A]">Payment options</h3>
                <p className="text-sm text-gray-500">Pick what suits you best</p>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>• Insurance coordination with detailed pre-approvals</li>
              <li>• Installment-based treatment plans for complex care</li>
              <li>• Secure online payments and in-clinic POS</li>
            </ul>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <Wallet className="w-5 h-5 text-[#1B4D3E]" />
                <p className="text-sm font-semibold text-[#0F172A]">Need a quote?</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Share your treatment recommendation or referral notes and we’ll send a written estimate within one business day.
              </p>
              <a href="mailto:drpranjal@smilescience.in" className="text-sm font-semibold text-[#1B4D3E] hover:underline">
                drpranjal@smilescience.in →
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};


