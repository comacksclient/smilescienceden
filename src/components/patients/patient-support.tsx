"use client";

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export const PatientSupport = () => {
  return (
    <section className="bg-linear-to-br from-[#1B4D3E] to-[#163C35] px-6 md:px-12 py-24 text-white">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimation>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60 mb-3">Questions?</p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight">
                We’re here to help you every step of the way
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <a href="tel:08048903967" className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 hover:bg-white/15 transition">
                <Phone className="w-4 h-4" />
                080 4890 3967
              </a>
              <a href="mailto:drpranjal@smilescience.in" className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 hover:bg-white/15 transition">
                <Mail className="w-4 h-4" />
                drpranjal@smilescience.in
              </a>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Call us", detail: "+91 62067 00442", sub: "Speak with our treatment coordinators" },
              { title: "Message us", detail: "+91 94290 04884", sub: "WhatsApp support for quick questions" },
              { title: "Visit us", detail: "Neeladri Layout, Electronic City", sub: "Above ICICI Bank, Phase 1" },
            ].map((card) => (
              <div key={card.title} className="bg-white/10 border border-white/15 rounded-2xl p-6 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-2">{card.title}</p>
                <p className="text-xl font-serif font-medium">{card.detail}</p>
                <p className="text-sm text-white/70 mt-2">{card.sub}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="mt-10 bg-white/10 border border-white/15 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <MessageCircle className="w-10 h-10 text-white" />
            <div className="flex-1">
              <p className="text-lg font-semibold">Need help with insurance, referrals, or records?</p>
              <p className="text-sm text-white/80">
                Email us anytime at <a href="mailto:drpranjal@smilescience.in" className="underline">drpranjal@smilescience.in</a> and we’ll respond within one business day.
              </p>
            </div>
            <a href="tel:08048903967" className="text-sm font-semibold underline">
              Call now →
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};


