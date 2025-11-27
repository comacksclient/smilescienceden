"use client"

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const PlanCard = ({ 
  name, 
  price, 
  period, 
  features, 
  popular = false,
  savings 
}: { 
  name: string; 
  price: string; 
  period: string;
  features: string[];
  popular?: boolean;
  savings?: string;
}) => (
  <div className={`relative bg-white p-8 rounded-3xl border-2 transition-all duration-300 hover:shadow-xl ${
    popular ? 'border-[#1B4D3E] shadow-lg' : 'border-gray-200'
  }`}>
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1B4D3E] text-white px-4 py-1 rounded-full text-xs font-bold">
        MOST POPULAR
      </div>
    )}
    
    <div className="mb-8">
      <h3 className="text-2xl font-serif font-medium text-gray-900 mb-2">{name}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-5xl font-serif font-medium text-gray-900">${price}</span>
        <span className="text-gray-500 text-sm">/{period}</span>
      </div>
      {savings && (
        <p className="text-sm text-[#1B4D3E] font-medium mt-2">{savings}</p>
      )}
    </div>

    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#1B4D3E] shrink-0 mt-0.5" />
          <span className="text-gray-700 text-sm">{feature}</span>
        </li>
      ))}
    </ul>

    <Button 
      className={`w-full rounded-full h-12 font-semibold transition-all duration-300 ${
        popular 
          ? 'bg-[#1B4D3E] text-white hover:bg-[#163C35]' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }`}
    >
      Choose Plan
      <ArrowRight className="w-4 h-4 ml-2" />
    </Button>
  </div>
);

export const MembershipPlans = () => {
  const plans = [
    {
      name: "Individual",
      price: "29",
      period: "month",
      savings: "Save up to 40%",
      features: [
        "2 cleanings per year",
        "Annual exam included",
        "20% off all procedures",
        "Emergency care access",
        "X-rays included"
      ]
    },
    {
      name: "Family",
      price: "79",
      period: "month",
      popular: true,
      savings: "Save up to 80%",
      features: [
        "Up to 4 family members",
        "2 cleanings per person/year",
        "Annual exams for all",
        "40% off all procedures",
        "Priority scheduling",
        "Emergency care 24/7"
      ]
    },
    {
      name: "Premium",
      price: "149",
      period: "month",
      savings: "Maximum savings",
      features: [
        "Unlimited family members",
        "Unlimited cleanings",
        "All exams included",
        "80% off all procedures",
        "Cosmetic treatments included",
        "VIP priority access",
        "Annual dental health report"
      ]
    }
  ];

  return (
    <section className="bg-white px-6 md:px-12 py-24">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 tracking-tight mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Flexible membership options to fit your needs
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <ScrollAnimation key={plan.name} delay={index * 0.1}>
            <PlanCard {...plan} />
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

