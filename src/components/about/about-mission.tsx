"use client"

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Target, Heart, Award, Users } from 'lucide-react';

const ValueCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: any; 
  title: string; 
  description: string;
}) => (
  <div className="text-center">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1B4D3E]/10 mb-6">
      <Icon className="w-8 h-8 text-[#1B4D3E]" />
    </div>
    <h3 className="text-xl font-serif font-medium text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export const AboutMission = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide exceptional dental care that improves lives and creates beautiful, healthy smiles."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Compassion, integrity, and excellence guide everything we do for our patients."
    },
    {
      icon: Award,
      title: "Our Commitment",
      description: "We're committed to staying at the forefront of dental technology and techniques."
    },
    {
      icon: Users,
      title: "Our Community",
      description: "Building lasting relationships with families and contributing to community health."
    }
  ];

  return (
    <section className="bg-white px-6 md:px-12 py-24">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 tracking-tight mb-4">
            Our Mission & Values
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            What drives us every day
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <ScrollAnimation key={value.title} delay={index * 0.1}>
            <ValueCard {...value} />
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

