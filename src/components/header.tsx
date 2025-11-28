"use client"
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About us", path: "/about" },
    { label: "Book Appointment", path: "/book" },
    { label: "For Patients", path: "/patients" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header 
        className="fixed top-0 left-0 w-full z-50 py-4  backdrop-blur-md  transition-all duration-300"
      >
        <div className="w-full px-6 md:px-12 flex items-center justify-between">
          
          {/* Left Group: Logo + Nav */}
          <div className="flex items-center gap-10 lg:gap-14">
            {/* Logo - Enhanced Representation */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-10 h-10 bg-white rounded-xl shadow-sm border border-[#1d5343]/10 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
                <Image 
                  src="/logo.png" 
                  alt="Smile Science Dental Clinic logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col -space-y-0.5">
                <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-[#1A1A1A] group-hover:text-[#1d5343] transition-colors">
                  Smile Science
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Premium Typography */}
            <nav className="hidden lg:block">
                <ul className="flex items-center gap-8">
                    {navItems.map((item) => {
                      const isActive = pathname === item.path;
                      return (
                        <li key={item.path}>
                            <Link 
                                href={item.path}
                                className={`
                                    relative text-sm font-sans font-medium tracking-wide transition-all duration-300
                                    ${isActive 
                                      ? 'text-[#1d5343] font-bold' 
                                      : 'text-[#4B5563] hover:text-[#1d5343]'
                                    }
                                `}
                            >
                                {item.label}
                                {/* Active Dot Indicator */}
                                <span className={`
                                  absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1d5343] transition-all duration-300
                                  ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                                `} />
                            </Link>
                        </li>
                      );
                    })}
                </ul>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            
            {/* Desktop Phone - Elegant Pill Style */}
            <a href="tel:+916206700442" className="hidden lg:flex items-center gap-2.5 text-sm font-semibold text-[#1d5343] hover:text-[#153e32] transition-all bg-[#1d5343]/5 px-5 py-2.5 rounded-full border border-[#1d5343]/10 hover:border-[#1d5343]/30 hover:bg-[#1d5343]/10 hover:shadow-sm">
               <Phone className="w-4 h-4 fill-current" />
               <span className="tracking-wide font-sans">+91 62067 00442</span>
            </a>

            {/* Mobile Actions: Call Button + Toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <a href="tel:+916206700442" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1d5343] text-white shadow-md active:scale-95 transition-transform hover:bg-[#153e32]">
                <Phone className="w-4 h-4 fill-current" />
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-[#1A1A1A] active:scale-95 transition-transform hover:bg-gray-50"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-[#FDFBF0] pt-24 px-6 pb-6 lg:hidden animate-in slide-in-from-top-10 fade-in duration-300 flex flex-col"
        >
          <nav className="flex-1 mt-6">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      flex items-center justify-between text-2xl font-serif py-4 border-b border-[#1d5343]/5 transition-all
                      ${pathname === item.path ? 'text-[#1d5343] pl-3 border-[#1d5343]/20 font-medium' : 'text-[#1A1A1A] hover:text-[#1d5343] hover:pl-3'}
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto space-y-4 mb-4">
            <a href="tel:08048903967">
              <Button className="w-full bg-[#1d5343] text-white h-14 rounded-2xl text-lg font-medium shadow-xl shadow-[#1d5343]/20 flex items-center justify-center gap-2 hover:bg-[#153e32] active:scale-[0.98] transition-all">
                <Phone className="w-5 h-5 fill-current" /> Book Appointment
              </Button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};2