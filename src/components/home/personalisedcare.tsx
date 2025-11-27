"use client"
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';


const CareCard = ({ image, title, description }: { image: string, title: string, description: string }) => (
  <div className="flex flex-col gap-4">
    <div className="rounded-2xl overflow-hidden aspect-[4/3] w-full bg-gray-100">
       
    </div>
    <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed max-w-xs font-medium">
            {description}
        </p>
    </div>
  </div>
);

export const PersonalizedCare = () => {
  return (
    <section className="bg-white px-6 md:px-12 py-24">
      <ScrollAnimation>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div className="max-w-2xl">
           <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">004 — Personalized Care</span>
           <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 tracking-tight leading-tight">
             We specialize in you, <br /> whatever your specialty
           </h2>
        </div>
        
        <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ArrowLeft className="w-5 h-5 text-gray-500" />
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ArrowRight className="w-5 h-5 text-gray-500" />
            </button>
        </div>
      </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ScrollAnimation delay={0.1}>
        <CareCard 
            image="https://images.unsplash.com/photo-1693692258834-74c62f467cb7?q=80&w=1080"
            title="Reinforced Fillings"
            description="We prioritize the longevity and functionality of our fillings, ensuring they offer a robust and lasting solution."
        />
        </ScrollAnimation>
        <ScrollAnimation delay={0.2}>
        <CareCard 
            image="https://images.unsplash.com/photo-1653508310729-7d6d2e2fd6c9?q=80&w=1080"
            title="Vibrant Checkups"
            description="At our dental practice, we understand that maintaining optimal oral health is essential for a radiant smile and overall well-being."
        />
        </ScrollAnimation>
        <ScrollAnimation delay={0.3}>
        <CareCard 
            image="https://images.unsplash.com/photo-1581585004042-bca38021ce1e?q=80&w=1080"
            title="Revitalized Cleaning"
            description="At our dental practice, we believe that regular dental cleaning is the cornerstone of a healthy and radiant smile."
        />
        </ScrollAnimation>
      </div>
    </section>
  );
};
