"use client"

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Users, Award, Heart, Star } from 'lucide-react';

const StatCard = ({ 
  icon: Icon, 
  value, 
  label 
}: { 
  icon: any; 
  value: string; 
  label: string;
}) => (
  <div className="text-center">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1B4D3E]/10 mb-6">
      <Icon className="w-8 h-8 text-[#1B4D3E]" />
    </div>
    <h3 className="text-5xl md:text-6xl font-serif font-medium text-gray-900 mb-3">
      {value}
    </h3>
    <p className="text-gray-600 text-sm font-medium uppercase tracking-wider">
      {label}
    </p>
  </div>
);

export const Stats = () => {
  const stats = [
    { icon: Users, value: "10K+", label: "Happy Patients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Heart, value: "98%", label: "Satisfaction Rate" },
    { icon: Star, value: "4.9", label: "Average Rating" }
  ];

  return (
    <section className="bg-white px-6 md:px-12 py-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, index) => (
          <ScrollAnimation key={stat.label} delay={index * 0.1}>
            <StatCard {...stat} />
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

