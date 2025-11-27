"use client"

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/imagewirtfallback';

export const AboutPreview = () => {
  const features = [
    "Expert dental professionals",
    "State-of-the-art equipment",
    "Comfortable environment",
    "Personalized treatment plans"
  ];

  return (
    <section className="bg-[#FDFBF0] px-6 md:px-12 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollAnimation>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1080"
                alt="Dental clinic"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-4xl font-serif font-medium text-[#1B4D3E] mb-1">15+</div>
              <div className="text-sm text-gray-600 font-medium">Years of Excellence</div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">
              006 — About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 tracking-tight mb-6">
              Your Trusted Dental Care Partner
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              With over 15 years of experience, we've been dedicated to providing exceptional dental care 
              to families in our community. Our team of skilled professionals combines expertise with 
              compassion to deliver personalized treatment plans tailored to your unique needs.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1B4D3E] shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="bg-[#1A1A1A] text-white rounded-full px-6 h-12 text-sm font-semibold hover:bg-black shadow-lg transition-all duration-300 group">
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

