
import { ArrowRight, Phone } from 'lucide-react';
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
    <section className="relative w-full min-h-screen bg-[#FDFBF0] overflow-hidden flex items-center pt-20 lg:pt-0">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-50/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-[#FFF8E7]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-6 md:px-12 h-full flex flex-col lg:flex-row items-center relative z-20 py-12 lg:py-0">
        
        {/* --- LEFT SIDE CONTENT --- */}
        <div className="w-full lg:w-[50%] relative z-30 flex flex-col justify-center h-full pt-12 lg:pt-0">
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 left-0 text-3xl text-gray-300/70 font-light hidden lg:block select-none">+</div>
          <div className="absolute bottom-[-80px] left-[40%] text-2xl text-gray-300/70 font-light hidden lg:block select-none">+</div>
          
          <ScrollAnimation delay={0.1}>
            {/* 1. Label */}
            <div className="flex items-center gap-3 mb-8 pl-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1d5343] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1d5343]"></span>
              </span>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#1d5343]/80 font-sans">
                Electronic City, Bangalore
              </span>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            {/* 2. Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-medium text-[#0F172A] leading-[1.05] mb-8 tracking-[-0.02em]">
              <span className="inline-flex items-center gap-3">
                Achieve Your
                <span className="text-5xl md:text-7xl lg:text-[5rem] drop-shadow-md filter grayscale-[0.2] transform -rotate-12">🦷</span>
              </span>
              <br />
              Desired <span className="italic text-[#0F172A] font-light">Smile</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            {/* 3. Paragraph */}
            <p className="text-[#4B5563] text-lg leading-[1.7] max-w-[500px] mb-12 font-normal font-sans">
              Your smile matters. Our experienced team provides painless, modern, and personalized dental care right here in Neeladri Nagar, Electronic City Phase 1, Bengaluru.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            {/* 4. Buttons */}
            <div className="mb-8 lg:mb-0 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <a href="tel:08048903967">
                <Button className="bg-[#1A1A1A] hover:bg-black text-white rounded-full pl-8 pr-2 py-1 h-[64px] transition-all duration-300 group flex items-center justify-between min-w-[220px] shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  <span className="font-medium tracking-wide text-base ml-1 font-sans">Book Appointment</span>
                  <div className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center text-black group-hover:scale-105 transition-transform duration-300 ml-4">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Button>
              </a>
          
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* --- RIGHT SIDE IMAGE --- */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-10 pointer-events-none hidden lg:block">
         <div 
            className="relative w-full h-full"
            style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)'
            }}
         >
              <ImageWithFallback 
                 src="/img.jpeg" 
                 alt="Smiling woman dental care"
                 className="object-cover w-full h-full object-[center_35%] scale-105 opacity-90" 
              />
              {/* Texture Overlay */}
              <div className="absolute inset-0 bg-[#FDFBF0] opacity-15 mix-blend-multiply"></div>
              
              {/* Decorative Stars */}
              <div className="absolute top-[20%] right-[15%] text-[#1d5343]/30 animate-pulse delay-700">
                <StarIcon size={24} />
              </div>
              <div className="absolute bottom-[30%] right-[10%] text-[#1d5343]/20">
                <StarIcon size={18} />
              </div>
         </div>
      </div>
      
      {/* --- BOTTOM GRADIENT --- */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FDFBF0] to-transparent z-20 pointer-events-none" />
    </section>
  );
};