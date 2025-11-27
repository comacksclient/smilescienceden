"use client"

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from '../figma/imagewirtfallback';

const TestimonialCard = ({ 
  name, 
  role, 
  image, 
  text 
}: { 
  name: string; 
  role: string; 
  image: string; 
  text: string;
}) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
    <Quote className="w-8 h-8 text-[#1B4D3E]/20 mb-6" />
    <p className="text-gray-700 text-base leading-relaxed mb-8 font-normal">
      {text}
    </p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
        <ImageWithFallback 
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 text-sm">{name}</h4>
        <p className="text-gray-500 text-xs">{role}</p>
      </div>
    </div>
  </div>
);

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient since 2020",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&q=80",
      text: "The best dental care experience I've ever had. The team is professional, caring, and the facilities are top-notch."
    },
    {
      name: "Michael Chen",
      role: "Family Member",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces&q=80",
      text: "Affordable membership plans and excellent service. My whole family benefits from their preventive care programs."
    },
    {
      name: "Emily Rodriguez",
      role: "Regular Patient",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces&q=80",
      text: "I love how personalized the care is. They really take time to understand my needs and provide the best solutions."
    }
  ];

  return (
    <section className="bg-[#FDFBF0] px-6 md:px-12 py-24">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">
            005 — Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 tracking-tight mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Real experiences from our valued patients
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <ScrollAnimation key={testimonial.name} delay={index * 0.1}>
            <TestimonialCard {...testimonial} />
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

