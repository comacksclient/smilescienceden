"use client"

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  Smile, 
  Scissors, 
  Stethoscope,
  Zap,
  Award
} from 'lucide-react';

const ServiceItem = ({ 
  icon: Icon, 
  title, 
  description,
  features 
}: { 
  icon: any; 
  title: string; 
  description: string;
  features: string[];
}) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300">
    <div className="w-14 h-14 rounded-2xl bg-[#1B4D3E]/10 flex items-center justify-center mb-6">
      <Icon className="w-7 h-7 text-[#1B4D3E]" />
    </div>
    <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-base leading-relaxed mb-6">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1B4D3E]"></div>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export const ServicesList = () => {
  const services = [
    {
      icon: Heart,
      title: "Preventive Care",
      description: "Regular checkups and cleanings to maintain optimal oral health.",
      features: ["Routine exams", "Professional cleanings", "Fluoride treatments", "Oral cancer screenings"]
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with our aesthetic dental treatments.",
      features: ["Teeth whitening", "Veneers", "Bonding", "Smile makeovers"]
    },
    {
      icon: ShieldCheck,
      title: "Restorative Care",
      description: "Restore function and appearance with advanced dental solutions.",
      features: ["Fillings", "Crowns & bridges", "Dental implants", "Root canal therapy"]
    },
    {
      icon: Smile,
      title: "Orthodontics",
      description: "Straighten your teeth for a perfect smile alignment.",
      features: ["Clear aligners", "Traditional braces", "Retainers", "Teeth straightening"]
    },
    {
      icon: Scissors,
      title: "Oral Surgery",
      description: "Expert surgical procedures for complex dental needs.",
      features: ["Tooth extractions", "Wisdom teeth removal", "Dental implants", "Bone grafting"]
    },
    {
      icon: Stethoscope,
      title: "Periodontics",
      description: "Specialized care for gum health and periodontal disease.",
      features: ["Gum disease treatment", "Scaling & root planing", "Gum grafts", "Periodontal maintenance"]
    },
    {
      icon: Zap,
      title: "Emergency Care",
      description: "Immediate attention for urgent dental problems.",
      features: ["24/7 availability", "Pain relief", "Trauma treatment", "Quick response"]
    },
    {
      icon: Award,
      title: "Specialty Services",
      description: "Advanced treatments for specific dental conditions.",
      features: ["Endodontics", "Prosthodontics", "Pediatric dentistry", "Geriatric care"]
    }
  ];

  return (
    <section className="bg-[#FDFBF0] px-6 md:px-12 py-24">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 tracking-tight mb-4">
            All Our Services
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Comprehensive dental solutions tailored to your needs
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ScrollAnimation key={service.title} delay={index * 0.05}>
            <ServiceItem {...service} />
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

