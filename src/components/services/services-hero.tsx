"use client"

import { ScrollAnimation } from '@/components/ui/scroll-animation';

export const ServicesHero = () => {
  return (
    <section className="relative w-full min-h-[60vh] bg-[#FDFBF0] overflow-hidden flex items-center pt-28 pb-20">
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-50/40 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full px-6 md:px-12 relative z-20">
        <ScrollAnimation>
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">
              Our Services
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-[#0F172A] leading-[1.05] mb-6 tracking-tight">
              Comprehensive Dental Care Services
            </h1>
            <p className="text-[#4B5563] text-lg md:text-xl leading-relaxed max-w-2xl">
              From preventive care to advanced treatments, we offer a full range of dental services 
              to keep your smile healthy and beautiful.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

