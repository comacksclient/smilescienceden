"use client"

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  Smile, 
  Activity, 
  Stethoscope,
  Zap,
  Award,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const ServiceItem = ({ 
  icon: Icon, 
  title, 
  description,
  href
}: { 
  icon: any; 
  title: string; 
  description: string;
  href: string;
}) => (
  <div className="bg-white p-8 rounded-[2rem] border border-[#1d5343]/5 hover:border-[#1d5343]/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group relative overflow-hidden">
    
    {/* Hover Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1d5343]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    {/* Icon */}
    <div className="w-14 h-14 rounded-2xl bg-[#FDFBF0] flex items-center justify-center mb-6 group-hover:bg-[#1d5343] transition-colors duration-300 relative z-10">
      <Icon className="w-7 h-7 text-[#1d5343] group-hover:text-white transition-colors duration-300" />
    </div>
    
    {/* Content */}
    <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-3 group-hover:text-[#1d5343] transition-colors relative z-10">
      {title}
    </h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow font-light relative z-10">
      {description}
    </p>
    
    {/* CTA Button */}
    <Link href={href} className="relative z-10 mt-auto">
      <button className="w-full py-3 px-6 rounded-xl border border-[#1d5343]/10 text-[#1d5343] font-semibold text-sm flex items-center justify-between group-hover:bg-[#1d5343] group-hover:text-white transition-all duration-300">
        Learn More
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </Link>
  </div>
);

export const ServicesList = () => {
  const services = [
    {
      icon: ShieldCheck,
      title: "Dental Implants",
      description: "Regain confidence with secure, natural-looking implants. Our implant specialists help you know your exact dental implant cost before starting treatment.",
      href: "/services/dentalimplant"
    },
    {
      icon: Zap,
      title: "Root Canal Treatment",
      description: "Save your natural tooth with our precise, pain-free, single-sitting root canal procedures performed by specialists.",
      href: "/services/rootcanal"
    },
    {
      icon: Award,
      title: "Crowns & Bridges",
      description: "Protect and restore damaged teeth with strong, custom-designed crowns and bridges that match your natural smile.",
      href: "/services/dentalcrowns"
    },
    {
      icon: Heart,
      title: "Children's Dental Care",
      description: "Gentle and expert care for children — from fillings to preventive treatments with our certified pediatric dentist.",
      href: "/services/pediatric"
    },
    {
      icon: Smile,
      title: "Braces & Aligners",
      description: "Achieve perfectly aligned teeth with traditional braces or discreet invisible aligners.",
      href: "/services/braces"
    },
    {
      icon: Stethoscope,
      title: "Painless Extraction",
      description: "Advanced, gentle extraction techniques for a stress-free, comfortable experience.",
      href: "/services/extraction"
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with veneers, teeth whitening, composite bonding and complete smile makeovers.",
      href: "/services/cosmetic"
    },
    {
      icon: Activity,
      title: "Dentures",
      description: "Comfortable, natural-looking dentures designed for full or partial tooth replacement.",
      href: "/services/dentures"
    },
    {
      icon: Stethoscope,
      title: "General Dentistry",
      description: "Routine check-ups, cleanings, fillings, and emergency care to keep your oral health perfect year-round.",
      href: "/services/general"
    },
    {
      icon: Heart,
      title: "Gum Disease Treatment",
      description: "Comprehensive treatment for gingivitis and periodontitis to restore your gum health.",
      href: "/services/gumdisease"
    },
    {
      icon: Sparkles,
      title: "Professional Cleaning",
      description: "Professional teeth cleaning and polishing to remove plaque and keep teeth bright and healthy.",
      href: "/services/cleaning"
    },
    {
      icon: Smile,
      title: "Teeth Whitening",
      description: "Professional teeth whitening treatments for a brighter, more youthful smile in just one visit.",
      href: "/services/whitening"
    },
    {
      icon: Zap,
      title: "Emergency Dental Care",
      description: "Immediate relief for dental emergencies including severe pain, broken teeth, and infections.",
      href: "/services/emergency"
    },
    {
      icon: Award,
      title: "Wisdom Teeth Removal",
      description: "Safe and painless wisdom teeth extraction with minimal discomfort and fast recovery.",
      href: "/services/wisdom"
    }
  ];

  return (
    <section className="bg-[#FDFBF0] px-6 md:px-12 py-24 relative z-10">
      <ScrollAnimation>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">
            Clinical Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] tracking-tight mb-4">
            A Complete Dental Ecosystem
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            From routine hygiene to complex full-mouth reconstruction, everything you need is under one roof in Electronic City.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
        {services.map((service, index) => (
          <ScrollAnimation key={service.title} delay={index * 0.05}>
            <ServiceItem {...service} />
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};