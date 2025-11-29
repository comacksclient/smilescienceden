"use client"
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { ImageWithFallback } from '../figma/imagewirtfallback';

const CareCard = ({ 
  image, 
  title, 
  description, 
  alt 
}: { 
  image: string, 
  title: string, 
  description: string, 
  alt: string 
}) => (
  <div className="flex flex-col gap-5 group cursor-pointer">
    {/* Card Image Container - Increased border radius for premium feel */}
    <div className="rounded-[2rem] overflow-hidden aspect-[4/3] w-full bg-gray-100 relative shadow-md group-hover:shadow-xl transition-all duration-500">
       <ImageWithFallback 
         src={image}
         alt={alt}
         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
       />
       {/* Premium gradient overlay */}
       <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
    <div className="px-2">
        <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-3 group-hover:text-[#1d5343] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed max-w-xs font-sans font-light">
            {description}
        </p>
    </div>
  </div>
);

export const PersonalizedCare = () => {
  return (
    <section className="bg-white px-6 md:px-12 py-24 border-t border-gray-100">
      <ScrollAnimation>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div className="max-w-2xl">
           <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-[#1d5343]"></span>
              <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest">
                003 — Specialized Treatments
              </span>
           </div>
           <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] tracking-tight leading-[1.15]">
             Comprehensive care, <br /> 
             <span className="text-gray-400 italic font-serif">tailored to your needs.</span>
           </h2>
        </div>
      </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        
        {/* Card 1: Root Canal (Image: Calm, Reassuring Professional Setting) */}
        <ScrollAnimation delay={0.1}>
        <CareCard 
            image="https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vdCUyMGNhbmFsc3xlbnwwfHwwfHx8MA%3D%3D"
            title="Root Canal & Fillings"
            alt="Painless root canal treatment Bangalore"
            description="Save your natural teeth with our painless single-sitting Root Canal Treatments (RCT) and aesthetic tooth-colored fillings."
        />
        </ScrollAnimation>

        {/* Card 2: Pediatric (Image: Happy Kid Brushing - Friendly Vibe) */}
        <ScrollAnimation delay={0.2}>
        <CareCard 
            image="https://images.unsplash.com/photo-1684607633251-8a4a8d94ddd2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGVkaWF0cmljJTIwRGVudGlzdHJ5fGVufDB8fDB8fHww"
            title="Pediatric Dentistry"
            alt="Kids dentist electronic city"
            description="Specialized dental care for children in a fear-free environment. From fluoride applications to habit breaking appliances."
        />
        </ScrollAnimation>

        {/* Card 3: Scaling/Hygiene (Image: Bright Clean Smile) */}
        <ScrollAnimation delay={0.3}>
        <CareCard 
            image="https://images.unsplash.com/photo-1663182234283-28941e7612da?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlZXRofGVufDB8fDB8fHww"
            title="Scaling & Polishing"
            alt="Dental teeth cleaning and scaling service"
            description="Remove stubborn plaque and stains with our advanced ultrasonic scaling. Essential for preventing gum disease and bad breath."
        />
        </ScrollAnimation>

      </div>
    </section>
  );
};