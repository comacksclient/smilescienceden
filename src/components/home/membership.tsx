"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button'; 
import { ImageWithFallback } from '../figma/imagewirtfallback';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

export const Membership = () => {
  return (
    <section className="bg-[#FDFBF0] px-6 md:px-12 py-16 relative z-10">
      
      {/* --- Header Section --- */}
      <ScrollAnimation>
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-6 bg-[#1d5343]"></span>
              <span className="text-[10px] font-bold text-[#1d5343] uppercase tracking-[0.2em]">001 — The E-City Club</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] mb-3 tracking-tight leading-tight">
              Bangalore’s Smartest <br /> Dental Plan
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-normal tracking-wide max-w-sm leading-relaxed">
              Join <strong>500+ Neeladri families</strong> who stopped paying full price for premium care. No hidden costs. Just savings.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      {/* --- Compact Cards Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1 - The "No Brainer" Hook */}
        <ScrollAnimation delay={0.1}>
          <div className="bg-[#E9F7F3] p-8 md:p-10 rounded-[2rem] relative min-h-[320px] flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 border border-[#163C35]/5">
              <div className="absolute top-8 right-8 text-[#163C35] opacity-40">
                  <StarIcon size={32} />
              </div>

              <div className="mt-2">
                  <h3 className="text-6xl md:text-7xl font-serif text-[#163C35] mb-0 tracking-tight">80%</h3>
              </div>
              
              <div className="max-w-sm relative z-10">
                  <h4 className="text-lg font-bold text-[#163C35] mb-2">The Daily Essentials</h4>
                  <p className="text-[#3A6B62] text-sm leading-relaxed font-medium">
                      Never pay full price for a checkup again. Huge savings on Consultations, X-Rays, and Scaling. 
                      <span className="block mt-2 font-bold text-[#163C35]">Perfect for yearly maintenance.</span>
                  </p>
              </div>
          </div>
        </ScrollAnimation>

        {/* Card 2 - The "Safety Net" Hook */}
        <ScrollAnimation delay={0.2}>
          <div className="bg-[#243439] p-8 md:p-10 rounded-[2rem] relative min-h-[320px] flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
               <div className="absolute top-8 right-8 text-white opacity-30">
                  <StarIcon size={32} />
              </div>

              <div className="mt-2">
                  <h3 className="text-6xl md:text-7xl font-serif text-white mb-0 tracking-tight">40%</h3>
              </div>
              
              <div className="max-w-sm relative z-10">
                  <h4 className="text-lg font-bold text-white mb-2">The "Big Treatment" Safety Net</h4>
                  <p className="text-gray-300/90 text-sm leading-relaxed font-medium">
                      Need a Root Canal (RCT) or Crown? Don't panic. Members get exclusive flat rates on all major procedures.
                      <span className="block mt-2 text-white">Peace of mind for the unexpected.</span>
                  </p>
              </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

// Smaller, tighter star icon
const StarIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
  </svg>
);