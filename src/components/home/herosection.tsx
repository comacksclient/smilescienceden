"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "../figma/imagewirtfallback";

// Star icon
const StarIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
  </svg>
);

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#FFFDF5] via-[#FDFBF0] to-[#F3EFE0] overflow-hidden flex items-center pt-24 lg:pt-0">

      {/* Ambient background */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-[#FFF8E7]/60 rounded-full blur-[100px]" />

      {/* Mobile BG image */}
      <div className="absolute inset-0 w-full h-full lg:hidden z-0 pointer-events-none">
        <ImageWithFallback
          src="/img.jpeg"
          alt="Dental clinic"
          className="object-cover w-full h-full  "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF0] via-[#FDFBF0]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent mix-blend-overlay" />
      </div>

      <div className="w-full px-8 md:px-12 flex flex-col lg:flex-row items-center z-20 py-16">

        {/* LEFT CONTENT */}
        {/* UPDATED: Changed 'pt-20' to 'pt-6' to shift text UP in mobile view */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center h-full pt-6 lg:pt-0 pl-[3px] relative">
          
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[80%] h-[80%] bg-white/40 blur-3xl -z-10 rounded-full" />

          <div className="flex items-center gap-1 mb-1 ml-1">
            <span className="relative flex h-2.5 w-2.5">
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1d5343]"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#1d5343] px-3 py-1.5 ">
              Dental Care
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-serif font-medium text-[#0F172A] leading-[1.1] mb-6 tracking-[-0.02em] drop-shadow-sm">
            Your Smile,{" "}
            {/* WRAPPER */}
            <span className="inline-block">
              <img 
                src="/tooth.png" 
                alt="Tooth Icon" 
                className="w-12 h-12 md:w-16 md:h-16 lg:w-[4.5rem] lg:h-[4.5rem] object-contain -rotate-12 drop-shadow-md translate-y-2 md:translate-y-3 ml-1" 
              />
            </span>
            <br />
            Our <span className=" font-light text-[#0F172A]">Science</span>
          </h1>

          {/* Subtext */}
          <p className="text-[#4B5563] text-[15px] leading-[1.7] max-w-[480px] mb-10 font-normal opacity-90">
          Trusted specialist dentists in Neeladri Nagar, Electronic City Phase 1 , offering painless and advanced dental treatments for every smile.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <a href="/book">
              <Button className="bg-[#1A1A1A] hover:bg-black text-white rounded-full pl-6 pr-2 h-[50px] text-sm tracking-wide flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 border border-white/10">
                Book Now
                <div className="w-[38px] h-[38px] bg-white rounded-full flex items-center justify-center text-black">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Button>
            </a>
          </div>

        </div>

        {/* RIGHT IMAGE Desktop Only */}
        <div className="absolute top-0 right-0 w-full lg:w-[58%] h-full hidden lg:block pointer-events-none">
          <div
            className="relative w-full h-full"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 35%, black 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 35%, black 100%)",
            }}
          >
            <ImageWithFallback
              src="/img.jpeg"
              alt="Dental clinic"
              className="object-cover w-full h-full object-[center_35%] scale-105  "
            />
            <div className="absolute inset-0 bg-[#FDFBF0] opacity-10 mix-blend-overlay" />
            <div className="absolute top-[22%] right-[14%] text-[#1d5343]/30">
              <StarIcon size={24} />
            </div>
            <div className="absolute bottom-[28%] right-[10%] text-[#1d5343]/20">
              <StarIcon size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FDFBF0] to-transparent pointer-events-none" />
    </section>
  );
};