"use client";

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { BadgePercent, ShieldCheck, Wallet, CheckCircle2, CreditCard } from 'lucide-react';

const highlights = [
  "Itemized treatment plans with zero hidden charges",
  "Pre-approved insurance estimates before we start",
  "Flexible EMI options for major procedures",
];

export const PatientPricing = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-[#FDFBF0] overflow-hidden">
      
      {/* --- HERO STYLE BACKGROUND --- */}
      {/* Green Ambient Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#1d5343]/5 rounded-full blur-[120px] pointer-events-none" />
      {/* Amber/Warm Glow */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: SEO OPTIMIZED CONTENT */}
          <ScrollAnimation>
            <div>
              <div className="flex items-center gap-3 mb-4">
                 <span className="h-[1px] w-8 bg-[#1d5343]"></span>
                 <span className="text-xs font-bold text-[#1d5343] uppercase tracking-[0.2em]">
                   Financial Peace of Mind
                 </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] mb-6 tracking-tight leading-[1.15]">
                Transparent pricing. <br/>
                <span className="italic text-[#1d5343]">No surprises.</span>
              </h2>
              
              <p className="text-gray-500 text-lg leading-relaxed mb-8 font-light">
                We believe premium dental care in <strong>Electronic City</strong> should be accessible and clear. 
                Before any treatment begins, you will receive a complete breakdown of costs, insurance coverage, and payment options. 
                <span className="font-medium text-[#1A1A1A]"> No hidden fees, ever.</span>
              </p>

              <div className="space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-base text-[#4B5563]">
                    <CheckCircle2 className="w-5 h-5 text-[#1d5343] shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* RIGHT: PRICING CARD (Glassmorphism + Premium Feel) */}
          <ScrollAnimation delay={0.15}>
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-[#1d5343]/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group">
              
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#1d5343]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#FDFBF0] flex items-center justify-center text-[#1d5343]">
                   <Wallet className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium text-[#1A1A1A]">Payment Options</h3>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Secure & Flexible</p>
                </div>
              </div>

              <ul className="space-y-5 mb-8 relative z-10">
                <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]">
                  <ShieldCheck className="w-4 h-4 text-[#1d5343]" />
                  Direct Insurance Billing
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]">
                  <CreditCard className="w-4 h-4 text-[#1d5343]" />
                  0% Interest EMI Options
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A]">
                  <BadgePercent className="w-4 h-4 text-[#1d5343]" />
                  Membership Plan Discounts
                </li>
              </ul>

              {/* Quote Box */}
              <div className="bg-[#1d5343] rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="flex items-center gap-3 mb-2 relative z-10">
                  <p className="text-sm font-bold tracking-wide">Need a Quote?</p>
                </div>
                <p className="text-white/80 text-sm mb-4 relative z-10 leading-relaxed">
                  Send us your referral notes or treatment plan and we'll provide a written estimate within 24 hours.
                </p>
                <a href="mailto:drpranjal@smilescience.in" className="inline-flex items-center text-white font-bold text-sm border-b border-white/30 pb-0.5 hover:border-white transition-colors relative z-10">
                  Get Estimate →
                </a>
                
                {/* Texture */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
              </div>

            </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
};