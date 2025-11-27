"use client"

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Percent, Calendar, Users, Shield, Heart, Zap } from 'lucide-react';

const BenefitCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: any; 
  title: string; 
  description: string;
}) => (
  <div className="bg-[#FDFBF0] p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
    <div className="w-12 h-12 rounded-xl bg-[#1B4D3E]/10 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-[#1B4D3E]" />
    </div>
    <h3 className="text-lg font-serif font-medium text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export const MembershipBenefits = () => {
  const benefits = [
    {
      icon: Percent,
      title: "Exclusive Savings",
      description: "Save 30-80% on all dental procedures including exams, cleanings, and treatments."
    },
    {
      icon: Calendar,
      title: "Priority Scheduling",
      description: "Get preferred appointment times and faster access to our dental services."
    },
    {
      icon: Users,
      title: "Family Coverage",
      description: "Cover your entire family with our flexible family membership plans."
    },
    {
      icon: Shield,
      title: "No Waiting Periods",
      description: "Start using your benefits immediately after enrollment, no delays."
    },
    {
      icon: Heart,
      title: "Preventive Care",
      description: "Regular cleanings and exams included to maintain optimal oral health."
    },
    {
      icon: Zap,
      title: "24/7 Support",
      description: "Access emergency dental care and support whenever you need it."
    }
  ];

  return (
    <section className="bg-[#FDFBF0] px-6 md:px-12 py-24">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 tracking-tight mb-4">
            Membership Benefits
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Everything you need for comprehensive dental care
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <ScrollAnimation key={benefit.title} delay={index * 0.1}>
            <BenefitCard {...benefit} />
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

