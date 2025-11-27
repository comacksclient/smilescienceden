"use client"
import React from "react";
import { ImageWithFallback } from "../figma/imagewirtfallback";
import { ArrowUpRight } from "lucide-react";
import { ScrollAnimation } from '@/components/ui/scroll-animation';

const WorkCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col gap-5 group cursor-pointer">
    <div className="rounded-3xl overflow-hidden aspect-[3/4] relative bg-gray-200">
      <ImageWithFallback
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="px-1">
      <h3 className="text-xl font-serif font-medium text-gray-900 mb-1 tracking-tight">
        {title}
      </h3>
      <p className="text-sm text-gray-500 max-w-[220px] font-medium">
        {description}
      </p>
    </div>
  </div>
);

export const OurWorks = () => {
  return (
    <section className="bg-[#F0FDF4] px-6 md:px-12 py-24">
      <ScrollAnimation>
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">
            002 — Our Works
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 text-left max-w-xs tracking-tight">
            A Healthy Smile Starts Here
          </h2>
        </div>
      </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
        <ScrollAnimation delay={0.1}>
        <WorkCard
          image="https://images.unsplash.com/photo-1584516151140-f79fde30d55f?q=80&w=1080"
          title="Teeth Straightening"
          description="Improve your smile with cleaning."
        />
        </ScrollAnimation>
        <ScrollAnimation delay={0.2}>
        <WorkCard
          image="https://images.unsplash.com/photo-1758612897972-dba54225048a?q=80&w=1080"
          title="Revitalized Cleaning"
          description="A simple way to enhance your smile."
        />
        </ScrollAnimation>
        <ScrollAnimation delay={0.3}>
        <WorkCard
          image="https://images.unsplash.com/photo-1758205307912-5896ff0c65ae?q=80&w=1080"
          title="Dental Implant"
          description="To replace and complete the function."
        />
        </ScrollAnimation>
      </div>

      <ScrollAnimation delay={0.4}>
      <div className="flex flex-col items-center text-center gap-10">
        <div className="w-28 h-28 rounded-full border border-gray-300 flex items-center justify-center relative group cursor-pointer hover:bg-white hover:border-gray-400 transition-all bg-[#FDFBF0]">
          <div className="absolute inset-0 animate-[spin_12s_linear_infinite] opacity-60">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
            >
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text
                fontSize="10"
                fill="currentColor"
                fontWeight="bold"
                letterSpacing="1.5"
              >
                <textPath
                  href="#circlePath"
                  className="uppercase text-[9px]"
                >
                  View All Works • View All Works •
                </textPath>
              </text>
            </svg>
          </div>
          <ArrowUpRight className="w-8 h-8 text-gray-900" />
        </div>

        <div className="max-w-lg space-y-6">
          <p className="text-gray-500 text-base leading-relaxed font-light">
            Expert Dental Care and Cleaning Procedures for a
            Brighter, Healthier Smile and Lasting Confidence
          </p>
          <div className="h-px w-12 bg-green-300 mx-auto"></div>
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            Odentrics Clinic
          </p>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};