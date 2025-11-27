"use client"
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button'; 
import { ImageWithFallback } from '../figma/imagewirtfallback';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

// Star icon component
const StarIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
  </svg>
);

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#FDFBF0] overflow-hidden flex items-center">
      
      {/* Background Ambient Glows - Toned down for a cleaner cream look */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-50/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-[#FFF8E7]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-6 md:px-12 h-full flex flex-col lg:flex-row items-center relative z-20 py-20 lg:py-28">
        
        {/* --- LEFT SIDE CONTENT --- */}
        <div className="w-full lg:w-[55%] relative z-30 flex flex-col justify-center h-full">
          
          {/* Decorative Elements - Positioned for better balance */}
          <div className="absolute -top-10 left-0 text-3xl text-gray-300/70 font-light hidden lg:block select-none">+</div>
          <div className="absolute bottom-[-80px] left-[40%] text-2xl text-gray-300/70 font-light hidden lg:block select-none">+</div>
          
          <ScrollAnimation delay={0.1}>
            {/* 1. Label - Polished and spaced */}
            <div className="flex items-center gap-3 mb-8 pl-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1d5343]"></span>
              </span>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#555] ">
                Electronic City, Bangalore
              </span>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            {/* 2. Heading - Refined and Elegant */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-[#0F172A] leading-[1.05] mb-6 tracking-[-0.02em]">
              <span className="inline-flex items-center gap-3">
                Achieve Your
                <span className="text-4xl md:text-6xl lg:text-7xl">🦷</span>
              </span>
              <br />
              Desired <span className="italic  text-[#1F2937]">Smile</span>
            </h1>
           
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            {/* 3. Paragraph - Refined size and spacing */}
            <p className="text-[#4B5563] text-base md:text-lg leading-[1.7] max-w-[520px] mb-10 font-normal font-sans">
              Expert dental care in Neeladri Layout, Electronic City. Experience premium dental services with our experienced team. Book your appointment today!
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            {/* 4. Button - Polished and Refined */}
            <div className="mb-8 lg:mb-0 flex flex-wrap gap-4 items-center">
              <a href="tel:08048903967">
                <Button className="bg-[#18181B] hover:bg-black text-white rounded-full pl-6 pr-2 py-1 h-[60px] transition-all duration-300 group flex items-center justify-between min-w-[200px] shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  <span className="font-medium tracking-wide text-sm md:text-base ml-1 font-sans">Book Appointment</span>
                  <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center text-black group-hover:scale-105 transition-transform duration-300 ml-2">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Button>
              </a>
              <a href="tel:+916206700442" className="text-gray-600 hover:text-[#1B4D3E] text-sm font-medium flex items-center gap-2">
                <span>Call: +91 62067 00442</span>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* --- RIGHT SIDE IMAGE --- */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-10 pointer-events-none">
         <div 
            className="relative w-full h-full"
            style={{
                // Enhanced Mask: Fades gracefully into the background color
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 50%, black 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, black 50%, black 100%)'
            }}
         >
              <ImageWithFallback 
                 src="/img.jpeg" 
                 alt="Smiling woman dental care"
                 // object-[center_35%] positions the face perfectly in the sweet spot
                 className="object-cover w-full h-full object-[center_35%] scale-105" 
              />
              {/* Texture Overlay */}
              <div className="absolute inset-0 bg-[#FDFBF0] opacity-15 mix-blend-multiply"></div>
              
              {/* Decorative Stars on Right Side */}
              <div className="absolute top-[15%] right-[10%] text-gray-300/40 hidden lg:block">
                <StarIcon size={20} />
              </div>
              <div className="absolute top-[35%] right-[8%] text-gray-300/30 hidden lg:block">
                <StarIcon size={16} />
              </div>
              <div className="absolute bottom-[25%] right-[12%] text-gray-300/40 hidden lg:block">
                <StarIcon size={18} />
              </div>
              <div className="absolute bottom-[45%] right-[6%] text-gray-300/35 hidden lg:block">
                <StarIcon size={14} />
              </div>
         </div>
      </div>
      
      {/* --- BOTTOM GRADIENT --- */}
      {/* Adds a subtle fade-out at the bottom using the background color */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FDFBF0] to-transparent z-20 pointer-events-none" />
    </section>
  );
};