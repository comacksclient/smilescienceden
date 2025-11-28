"use client"
import { ArrowRight, Instagram, Facebook, Linkedin, Youtube, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-[#FDFBF0] pt-20 pb-10 font-sans border-t border-[#1d5343]/5">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-20">
           
           {/* --- COLUMN 1: BRAND & CTA --- */}
           <div className="lg:w-[35%] space-y-8">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group w-fit">
                <div className="relative w-8 h-8">
                  <Image 
                    src="/logo.png" 
                    alt="Smile Science Dental Clinic Logo" 
                    width={32} 
                    height={32} 
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-[#1A1A1A] font-serif group-hover:text-[#1d5343] transition-colors">
                  Smile Science
                </span>
              </Link>

              {/* Tagline */}
              <p className="text-[#4B5563] text-lg leading-relaxed max-w-[320px]">
                Empowering your smile with innovative and reliable dental solutions in Electronic City.
              </p>

              {/* Button */}
              <Link href="/book" className="inline-block">
                <button className="group bg-[#1d5343] text-white px-8 py-3.5 rounded-full flex items-center gap-2 text-sm font-semibold transition-all hover:bg-[#153e32] hover:shadow-lg hover:-translate-y-0.5">
                  Book Appointment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
           </div>

           {/* --- MIDDLE COLUMNS: LINKS --- */}
           <div className="flex flex-col sm:flex-row gap-12 lg:gap-24 lg:w-[30%]">
              
              {/* Navigations */}
              <div className="flex flex-col gap-5">
                 <h4 className="font-bold text-[#1A1A1A] text-base font-serif">Quick Links</h4>
                 <ul className="space-y-3">
                    {[
                      { label: 'Home', href: '/' },
                      { label: 'Services', href: '/services' },
                      { label: 'About Us', href: '/about' },
                      { label: 'For Patients', href: '/patients' },
                      { label: 'Contact', href: '/contact' }
                    ].map((item) => (
                      <li key={item.label}>
                        <Link href={item.href} className="text-[#4B5563] hover:text-[#1d5343] transition-colors text-sm font-medium">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                 </ul>
              </div>

              {/* Support / Legal */}
              <div className="flex flex-col gap-5">
                 <h4 className="font-bold text-[#1A1A1A] text-base font-serif">Support</h4>
                 <ul className="space-y-3">
                    {[
                        { label: 'Privacy Policy', href: '/privacy' },
                        { label: 'Terms of Service', href: '/terms' },
                        { label: 'Emergency Care', href: '/contact' },
                        { label: 'FAQs', href: '/services' }
                    ].map((item) => (
                      <li key={item.label}>
                         <Link href={item.href} className="text-[#4B5563] hover:text-[#1d5343] transition-colors text-sm font-medium">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                 </ul>
              </div>
           </div>

           {/* --- COLUMN 4: NEWSLETTER --- */}
           <div className="lg:w-[35%] space-y-5">
              <h4 className="font-bold text-[#1A1A1A] text-base font-serif">Stay Connected</h4>
              <p className="text-[#4B5563] text-sm leading-relaxed">
                Join our newsletter for dental health tips, exclusive offers, and clinic updates.
              </p>
              
              {/* Input Field */}
              <div className="relative max-w-[340px]">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-white border border-gray-200 rounded-full py-3.5 px-5 text-sm text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none focus:border-[#1d5343] focus:ring-1 focus:ring-[#1d5343] transition-all"
                />
                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[#1d5343] hover:bg-[#153e32] text-white rounded-full transition-all hover:scale-105 active:scale-95 shadow-sm">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
           </div>

        </div>

        {/* --- DIVIDER --- */}
        <div className="h-px w-full bg-[#1d5343]/10 mb-8"></div>

        {/* --- BOTTOM SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[#4B5563] text-sm text-center md:text-left font-medium">
             © {new Date().getFullYear()} Smile Science Dental Clinic. All rights reserved.
           </p>

           {/* Social Icons */}
           <div className="flex items-center gap-3">
              {[Instagram, Facebook, Linkedin, Youtube, Twitter].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-[#1d5343]/10 rounded-full flex items-center justify-center text-[#4B5563] hover:bg-[#1d5343] hover:text-white hover:border-[#1d5343] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} /> 
                </a>
              ))}
           </div>
        </div>

      </div>
    </footer>
  );
};