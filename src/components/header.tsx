"use client"
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "For Patients", path: "/patients" },
    { label: "About", path: "/about" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
          ${isScrolled 
            ? 'py-4 bg-[#FDFBF0]/90 backdrop-blur-md shadow-sm border-b border-gray-200/50' 
            : 'py-8 bg-transparent border-none' // NO BG, NO BORDER at top
          }
        `}
      >
        <div className="w-full px-6 md:px-12 grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center">
          
          {/* 1. Logo Section */}
          <div className="flex justify-start">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="Smile Science Dental Clinic logo"
                  width={40}
                  height={40}
                  priority
                  className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-[#1A1A1A]">
                Smile Science
              </span>
            </Link>
          </div>

          {/* 2. Navigation - Shifted Right */}
          <nav className="hidden lg:block translate-x-12"> {/* Added translate-x-12 to shift right */}
              <ul className={`
                flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-500
                ${isScrolled ? 'bg-white/50 border border-white/40' : 'bg-transparent'} 
              `}>
                  {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                      <li key={item.path}>
                          <Link 
                              href={item.path}
                              className={`
                                  relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 block
                                  ${isActive
                                      ? 'text-[#1A1A1A] font-semibold' 
                                      : 'text-gray-600 hover:text-[#1A1A1A]'
                                  }
                                  ${isActive && isScrolled ? 'bg-white shadow-sm' : ''} 
                              `}
                          >
                              {item.label}
                          </Link>
                      </li>
                    );
                  })}
              </ul>
          </nav>

          {/* 3. Actions */}
          <div className="flex justify-end items-center gap-4">
            
            {/* Phone Number */}
            <a href="tel:+13784737781" className="hidden xl:flex items-center gap-3 text-sm font-medium text-[#4B5563] group hover:text-[#1B4D3E] transition-colors">
               <div className={`
                 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300
                 ${isScrolled 
                    ? 'bg-white shadow-sm' 
                    : 'bg-transparent' // Completely transparent at top
                 } 
                 group-hover:text-[#1B4D3E]
               `}>
                  <Phone className="w-4 h-4" />
               </div>
               <span className="font-sans font-medium tracking-wide">+1 378 473 7781</span>
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-all text-[#1A1A1A]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* CTA Button */}
            <a href="tel:08048903967">
              <Button 
                className={`
                  hidden lg:flex rounded-full px-6 h-11 text-sm font-medium tracking-wide transition-all duration-300
                  ${isScrolled 
                    ? 'bg-[#1A1A1A] text-white hover:bg-black shadow-md' 
                    : 'bg-transparent text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
                  }
                `}
              >
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          fixed inset-0 z-40 bg-[#FDFBF0] transition-transform duration-500 ease-in-out lg:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{ top: '0' }}
      >
        <div className="flex flex-col h-full pt-28 px-6 pb-6">
          <nav className="flex-1">
            <ul className="flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <li key={item.path} style={{ transitionDelay: `${idx * 50}ms` }} className={`${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-500`}>
                  <Link 
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between text-2xl font-serif text-[#1A1A1A] py-4 border-b border-gray-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto space-y-4">
            <a href="tel:08048903967">
              <Button className="w-full bg-[#1A1A1A] text-white h-12 rounded-xl text-lg">
                Book Appointment
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};