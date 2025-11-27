"use client"

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { CheckCircle2 } from 'lucide-react';

export const ServicesFeatures = () => {
  const features = [
    "State-of-the-art equipment and technology",
    "Experienced and certified dental professionals",
    "Comfortable and relaxing environment",
    "Personalized treatment plans",
    "Flexible payment options",
    "Emergency care availability"
  ];

  return (
    <section className="bg-white px-6 md:px-12 py-24">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 tracking-tight mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-gray-500 text-base">
              We're committed to providing exceptional dental care
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <ScrollAnimation key={feature} delay={index * 0.1}>
              <div className="flex items-start gap-4 p-6 bg-[#FDFBF0] rounded-2xl">
                <CheckCircle2 className="w-6 h-6 text-[#1B4D3E] shrink-0 mt-0.5" />
                <p className="text-gray-700 text-base font-medium">{feature}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

