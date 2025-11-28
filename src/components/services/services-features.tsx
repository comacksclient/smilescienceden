"use client";

import { useState } from 'react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "Do you offer painless root canal treatments?",
    answer: "Yes. We specialize in single-sitting, microscopic Root Canal Treatments (RCT) right here in Electronic City. We use advanced rotary instruments and effective local anesthesia to ensure the procedure is virtually painless. Most patients return to work the same day."
  },
  {
    question: "How much do Dental Implants cost in Bangalore?",
    answer: "Our implant pricing is transparent and competitive. The cost depends on the implant brand (e.g., Nobel Biocare, Osstem) and the type of crown used (Metal-Free Zirconia vs. Ceramic). We provide a written, itemized estimate during your consultation—no hidden fees."
  },
  {
    question: "Do you see children (Pediatric Dentistry)?",
    answer: "Absolutely. We have a dedicated pediatric protocol to make visits fear-free for children. From fluoride applications and sealants to habit-breaking appliances, we ensure your child's dental foundation is strong."
  },
  {
    question: "Are you open on weekends?",
    answer: "Yes, we understand the busy schedules of IT professionals in Neeladri Nagar. We are open from 12:00 PM to 8:00 PM (Mon-Sat) and 12:00 PM to 5:00 PM on Sundays."
  },
  {
    question: "Do you accept dental insurance?",
    answer: "We accept most major insurance plans and can assist you with the pre-authorization paperwork to maximize your benefits. Please bring your policy details, and our front desk will handle the rest."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div 
      className={`border-b border-[#1d5343]/10 last:border-0 transition-all duration-300 ${isOpen ? 'bg-[#FDFBF0]/50 rounded-2xl px-4 -mx-4' : 'bg-transparent px-0'}`}
    >
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between gap-4 text-left group"
      >
        <h3 className={`text-lg md:text-xl font-serif font-medium transition-colors ${isOpen ? 'text-[#1d5343]' : 'text-[#1A1A1A] group-hover:text-[#1d5343]'}`}>
          {question}
        </h3>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#1d5343] text-white rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-[#1d5343]/10 group-hover:text-[#1d5343]'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-500 leading-relaxed text-base pr-8 font-light">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 md:px-12 py-24 relative z-10">
      <div className="max-w-[1000px] mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">
              Patient Queries
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] tracking-tight mb-4">
              Common Questions <span className="italic text-[#1d5343]">Answered</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              Clear answers about our treatments, pricing, and clinic policies to help you make informed decisions.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="bg-white rounded-[2.5rem] p-6 md:p-12 border border-[#1d5343]/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                {...faq} 
                isOpen={openIndex === index} 
                onClick={() => setOpenIndex(openIndex === index ? null : index)} 
              />
            ))}
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4">
            <p className="text-gray-500 text-sm">Have a specific question?</p>
            <a 
              href="https://wa.me/916206700442" 
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-[#1A1A1A] text-white font-semibold hover:bg-[#1d5343] transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};