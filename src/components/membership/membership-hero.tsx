"use client"

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const MembershipHero = () => {
  return (
    <section className="relative w-full min-h-[60vh] bg-[#FDFBF0] overflow-hidden flex items-center pt-28 pb-20">
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-50/40 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full px-6 md:px-12 relative z-20">
        <div className="max-w-4xl">
          <ScrollAnimation>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">
              Membership Plans
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-[#0F172A] leading-[1.05] mb-6 tracking-tight">
              Affordable Dental Care for Your Family
            </h1>
            <p className="text-[#4B5563] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Unlock optimal dental wellness with our comprehensive membership plans. 
              Save up to 80% on dental procedures and enjoy exclusive benefits.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {["No waiting periods", "Family discounts", "Preventive care included", "24/7 support"].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4D3E]" />
                  <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <a href="tel:08048903967">
              <Button className="bg-[#1A1A1A] text-white rounded-full px-8 h-14 text-base font-semibold hover:bg-black shadow-lg transition-all duration-300 group">
                Join Membership Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

