"use client"

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="bg-linear-to-br from-[#1B4D3E] to-[#163C35] px-6 md:px-12 py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollAnimation>
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6 tracking-tight">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Book your appointment today and experience the difference of personalized dental care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:08048903967">
              <Button className="bg-white text-[#1B4D3E] rounded-full px-8 h-14 text-base font-semibold hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="tel:+916206700442">
              <Button 
                variant="outline" 
                className="border-2 border-white text-white rounded-full px-8 h-14 text-base font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Call: +91 62067 00442
              </Button>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

