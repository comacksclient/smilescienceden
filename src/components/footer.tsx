"use client"
import { ArrowRight, Instagram, Facebook, Linkedin, Youtube, Twitter } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#FDFBF0] pt-20 pb-10 font-sans border-t border-[#1B4D3E]/5">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-20">
           
           {/* --- COLUMN 1: BRAND & CTA --- */}
           <div className="lg:w-[35%] space-y-8">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                <span className="text-xl font-bold text-[#1A1A1A]">Smile Science Dental</span>
              </div>

              {/* Tagline */}
              <p className="text-[#4B5563] text-lg leading-relaxed max-w-[300px]">
                Empowering your smile with innovative and reliable dental solutions.
              </p>

              {/* Button: Styled exactly like "learn More" */}
              <a href="tel:08048903967">
                <button className="group bg-[#1A1A1A] text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium transition-all hover:bg-black hover:scale-105 hover:shadow-lg">
                  Book Appointment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
           </div>

           {/* --- MIDDLE COLUMNS: LINKS --- */}
           <div className="flex flex-col sm:flex-row gap-12 lg:gap-20 lg:w-[30%]">
              
              {/* Navigations */}
              <div className="flex flex-col gap-4">
                 <h4 className="font-bold text-[#1A1A1A] text-base">Navigations</h4>
                 <ul className="space-y-3">
                    {['Home', 'Services', 'Membership', 'Technology', 'Contact us'].map((item) => (
                      <li key={item}>
                        <Link href="/" className="text-[#4B5563] hover:text-[#1A1A1A] transition-colors text-sm">
                          {item}
                        </Link>
                      </li>
                    ))}
                 </ul>
              </div>

              {/* About us */}
              <div className="flex flex-col gap-4">
                 <h4 className="font-bold text-[#1A1A1A] text-base">About us</h4>
                 <ul className="space-y-3">
                    {['Our Clinic', 'Our Mission', 'Careers', 'Blog', 'Press releases'].map((item) => (
                      <li key={item}>
                         <Link href="/" className="text-[#4B5563] hover:text-[#1A1A1A] transition-colors text-sm">
                          {item}
                        </Link>
                      </li>
                    ))}
                 </ul>
              </div>
           </div>

           {/* --- COLUMN 4: NEWSLETTER --- */}
           <div className="lg:w-[35%] space-y-4">
              <h4 className="font-bold text-[#1A1A1A] text-base">Subscribe newsletter</h4>
              <p className="text-[#4B5563] text-sm mb-4">
                Stay updated with the latest news and offers!
              </p>
              
              {/* Input Field with Internal Button */}
              <div className="relative max-w-[340px]">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-transparent border border-gray-400 rounded-full py-3 px-5 text-sm text-[#1A1A1A] placeholder:text-gray-500 focus:outline-none focus:border-[#1A1A1A] transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors text-[#1A1A1A]">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
           </div>

        </div>

        {/* --- DIVIDER --- */}
        <div className="h-px w-full bg-[#1A1A1A]/10 mb-8"></div>

        {/* --- BOTTOM SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[#4B5563] text-sm">
             Copyright © Smile Science Dental Clinic 2024
           </p>

           {/* Social Icons - Circular Outlines */}
           <div className="flex items-center gap-3">
              {[Youtube, Twitter, Linkedin, Instagram, Facebook].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-9 h-9 border border-[#1A1A1A]/20 rounded-full flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" fill="currentColor" strokeWidth={0} /> 
                  {/* Note: fill="currentColor" works best for social icons if they are filled svgs, otherwise remove fill */}
                </a>
              ))}
           </div>
        </div>

      </div>
    </footer>
  );
};