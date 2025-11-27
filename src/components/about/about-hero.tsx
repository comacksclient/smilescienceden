"use client"

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { ImageWithFallback } from '../figma/imagewirtfallback';

export const AboutHero = () => {
  return (
    <section className="relative w-full min-h-[70vh] bg-[#FDFBF0] overflow-hidden flex items-center pt-28 pb-20">
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-50/40 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">
                About Us
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-medium text-[#0F172A] leading-[1.05] mb-6 tracking-tight">
                Your Trusted Dental Care Partner
              </h1>
              <p className="text-[#4B5563] text-lg md:text-xl leading-relaxed">
                With over 15 years of experience, we've been dedicated to providing exceptional 
                dental care to families in our community. Our team combines expertise with 
                compassion to deliver personalized treatment plans.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1080"
                  alt="Dental clinic"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

