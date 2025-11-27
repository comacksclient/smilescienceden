"use client"

import { Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

const ServiceCard = ({ icon: Icon, title, text }: { icon: any, title: string, text: string }) => (
  <div className="group bg-white p-8 rounded-[2rem] flex flex-col items-center justify-center text-center transition-all duration-500 border border-[#1d5343]/5 hover:border-[#1d5343]/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 h-full">
    {/* Icon Container - Green Tint */}
    <div className="mb-6 w-14 h-14 rounded-full bg-[#1d5343]/5 flex items-center justify-center group-hover:bg-[#1d5343] transition-colors duration-500">
        <Icon className="w-6 h-6 text-[#1d5343] stroke-[1.5] group-hover:text-white transition-colors duration-500" />
    </div>
    
    {/* Typography Upgrade */}
    <h3 className="text-[#1A1A1A] font-serif font-medium mb-3 text-xl tracking-tight">
      {title}
    </h3>
    
    <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
      {text}
    </p>
  </div>
);

export const Features = () => {
  return (
    <section className="bg-[#FDFBF0] px-6 md:px-12 pb-24 relative z-20 -mt-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          <ScrollAnimation delay={0.1}>
            <ServiceCard 
                icon={Heart} 
                title="Preventive Care"
                text="Comprehensive exams and cleanings to prevent cavities and gum disease before they start." 
            />
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <ServiceCard 
                icon={Sparkles} 
                title="Teeth Whitening"
                text="Professional whitening treatments to keep your smile sparkling clean and confident." 
            />
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <ServiceCard 
                icon={ShieldCheck} 
                title="Early Detection"
                text="Advanced screening technology for the early detection and treatment of dental issues." 
            />
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
};