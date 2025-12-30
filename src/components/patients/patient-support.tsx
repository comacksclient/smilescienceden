"use client";

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Phone, Mail, MessageCircle, MapPin, ArrowRight } from 'lucide-react';

export const PatientSupport = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-[#1B4D3E] overflow-hidden">
      
     
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B4D3E] to-[#12362b] z-0" />
     
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FDFBF0]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1200px] mx-auto relative z-10 text-white">
        
      
        <ScrollAnimation>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                 <span className="h-[1px] w-8 bg-white/30"></span>
                 <span className="text-xs font-bold text-white/60 uppercase tracking-[0.2em]">
                   Patient Support
                 </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-medium leading-[1.1] tracking-tight">
                We’re here to help you <br/>
                <span className="text-white/60 italic">every step of the way.</span>
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <a href="tel:08048903967" className="group flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-4 pr-5 py-2.5 hover:bg-white/10 transition-all duration-300">
                <div className="w-6 h-6 rounded-full bg-white text-[#1B4D3E] flex items-center justify-center">
                   <Phone className="w-3 h-3 fill-current" />
                </div>
                <span className="text-sm font-medium tracking-wide">080 4890 3967</span>
              </a>
            </div>
          </div>
        </ScrollAnimation>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <ScrollAnimation delay={0.1}>
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 h-full flex flex-col justify-between group">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4 font-bold">Call Us</p>
                <p className="text-2xl font-serif font-medium mb-2">+91 62067 00442</p>
                <p className="text-sm text-white/60 leading-relaxed">Speak directly with our treatment coordinators for scheduling.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> Front Desk
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 h-full flex flex-col justify-between group">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4 font-bold">Message Us</p>
                <p className="text-2xl font-serif font-medium mb-2">+91 6206700442</p>
                <p className="text-sm text-white/60 leading-relaxed">WhatsApp support available for quick questions and updates.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" /> Chat Support
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 h-full flex flex-col justify-between group">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4 font-bold">Visit Us</p>
                <p className="text-2xl font-serif font-medium mb-2">Electronic City</p>
                <p className="text-sm text-white/60 leading-relaxed">Neeladri Layout, Above ICICI Bank, Phase 1, Bangalore.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                <MapPin className="w-4 h-4" /> Get Directions
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* BOTTOM HELP BAR */}
        <ScrollAnimation delay={0.4}>
          <div className="bg-[#FDFBF0] rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
             {/* Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#1B4D3E]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
             
             <div className="w-14 h-14 rounded-full bg-[#1B4D3E]/10 flex items-center justify-center shrink-0">
               <Mail className="w-6 h-6 text-[#1B4D3E]" />
             </div>
             
             <div className="flex-1 text-center md:text-left relative z-10">
               <h3 className="text-xl font-serif font-medium text-[#1A1A1A] mb-1">
                 Need help with insurance, referrals, or records?
               </h3>
               <p className="text-[#4B5563] text-sm">
                 Email us anytime and we’ll respond within one business day.
               </p>
             </div>

             <a href="mailto:drpranjal@smilescience.in" className="group/btn relative z-10 bg-[#1B4D3E] text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#153e32] transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
               drpranjal@smilescience.in
               <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
             </a>
          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
};