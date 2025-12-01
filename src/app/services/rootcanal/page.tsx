"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { 
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Star,
  Activity,
  MessageCircle,
  User,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function RootCanalPage() {
  return (
    <div className="bg-[#FDFBF0] min-h-screen font-sans pb-32 md:pb-0">
      
      {/* --- 📱 STICKY MOBILE FOOTER (Clean & Professional) --- */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-t border-gray-200 p-4 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.05)] safe-area-pb">
        <div className="flex items-center justify-between gap-4 max-w-sm mx-auto">
          {/* Left: Status */}
          <a 
            href="https://wa.me/918048903967?text=Hi%20Dr.%20Pranjal,%20I%E2%80%99m%20in%20pain%20and%20need%20an%20emergency%20appointment.%20When%20is%20your%20earliest%20slot?" 
            className="flex flex-col flex-1"
          >
            <span className="text-sm font-bold text-[#1d5343] flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
              </span>
              Emergency: OPEN
            </span>
            <span className="text-[10px] text-gray-500 font-medium ml-4">Reply time: ~40 sec</span>
          </a>
          
          {/* Right: Call Button */}
          <a href="tel:08048903967">
            <Button 
              className="bg-[#1d5343] hover:bg-[#153e32] text-white rounded-full px-6 h-12 text-xs font-bold shadow-lg flex items-center gap-2"
              aria-label="Call doctor now"
            >
              CALL DOCTOR
            </Button>
          </a>
        </div>
      </div>

      {/* --- 🦷 HERO SECTION --- */}
      <section className="relative pt-24 pb-16 px-6 md:px-12 overflow-hidden">
        
        <div className="max-w-[600px] lg:max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div>
              {/* Premium Location Pill (Matches Image) */}
              <div className="w-full bg-[#f0e4d4] rounded-full py-3 px-5 mb-8 flex items-start gap-3 border border-[#e6d8c6]">
                 <MapPin className="w-4 h-4 text-[#cf4646] mt-0.5 shrink-0" />
                 <span className="text-[11px] md:text-xs font-bold tracking-wide uppercase text-[#5a4a3a] leading-tight">
                   JUST 500M FROM WIPRO GATE — NO TRAFFIC, NO WAIT
                 </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-[#1A1A1A] mb-6 tracking-tight leading-[1.15]">
                Severe Tooth Pain? <br/>
                <span className="text-[#1d5343]">We Stop It Within 60 Minutes.</span>
              </h1>
              
              <h2 className="text-lg text-gray-600 font-light mb-10 leading-relaxed max-w-md">
                Painless, Single-Sitting Root Canal Treatment in Neeladri Nagar.
              </h2>
              
              {/* PAIN SCALE CARD (Exact Match to Image) */}
              <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 mb-10">
                <p className="font-bold text-[#1A1A1A] mb-6 flex items-center gap-3 text-lg">
                  <Activity className="w-6 h-6 text-orange-400"/> How bad is your pain right now?
                </p>
                
                <div className="flex flex-col gap-4">
                  {/* Mild - Soft Yellow */}
                  <a href="https://wa.me/918048903967?text=Hi%20Dr.%20Pranjal,%20I%20have%20mild%20tooth%20pain." target="_blank" className="w-full">
                    <div className="relative group cursor-pointer bg-[#FFF9E6] hover:bg-[#fff5d6] rounded-2xl p-4 text-center transition-all border border-[#faeebf]">
                      <div className="w-4 h-4 rounded-full bg-[#FCD34D] mx-auto mb-2 shadow-sm"></div>
                      <span className="font-bold text-[#854D0E] text-sm group-hover:scale-105 inline-block transition-transform">Mild</span>
                    </div>
                  </a>

                  {/* Throbbing - Soft Orange */}
                  <a href="https://wa.me/918048903967?text=Hi%20Dr.%20Pranjal,%20I%20have%20throbbing%20tooth%20pain." target="_blank" className="w-full">
                    <div className="relative group cursor-pointer bg-[#FFF0E0] hover:bg-[#ffe6cc] rounded-2xl p-4 text-center transition-all border border-[#fddbb5]">
                       <div className="w-4 h-4 rounded-full bg-[#F97316] mx-auto mb-2 shadow-sm"></div>
                      <span className="font-bold text-[#9A3412] text-sm group-hover:scale-105 inline-block transition-transform">Throbbing</span>
                    </div>
                  </a>

                  {/* Unbearable - Soft Pink/Red (No Harsh Red) */}
                  <a href="https://wa.me/918048903967?text=Hi%20Dr.%20Pranjal,%20I%E2%80%99m%20in%20UNBEARABLE%20pain." target="_blank" className="w-full">
                    <div className="relative group cursor-pointer bg-[#FFF0F0] hover:bg-[#ffe0e0] rounded-2xl p-4 text-center transition-all border border-[#fecaca]">
                       <div className="w-4 h-4 rounded-full bg-[#EF4444] mx-auto mb-2 shadow-sm animate-pulse"></div>
                      <span className="font-bold text-[#991B1B] text-sm group-hover:scale-105 inline-block transition-transform">Unbearable</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col gap-2 mb-8 text-sm font-medium text-gray-700">
                 <div className="flex items-center gap-2">
                   <Star className="w-4 h-4 text-yellow-500 fill-current" /> 
                   <span>4.9 / 87 Google Reviews</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#1d5343]" /> 
                    <span>Dr. Pranjal — Owner & Chief Dentist</span>
                 </div>
              </div>

              {/* Primary Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/918048903967?text=Hi%20Dr.%20Pranjal,%20I%20need%20an%20emergency%20slot." className="w-full sm:w-auto">
                  <Button className="w-full h-14 px-8 rounded-full bg-[#1A1A1A] hover:bg-[#333] text-white transition-all shadow-xl flex items-center justify-center gap-2 text-base font-bold">
                    <MessageCircle className="w-5 h-5" /> Check Availability
                  </Button>
                </a>
              </div>
              
               <div className="mt-6 text-xs text-gray-500 bg-white/50 inline-block px-3 py-1 rounded-lg">
                 💰 <strong>₹500 Consultation WAIVED</strong> if treatment starts today.
              </div>

            </div>
          </ScrollAnimation>

           {/* Hero Image */}
          <ScrollAnimation delay={0.2}>
            <div className="relative mt-8 lg:mt-0 hidden lg:block">
               <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 aspect-[3/4] border-8 border-white">
                 <img 
                   src="/" 
                   alt="Dr Pranjal Chief Dentist" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-lg">
                    <div className="flex items-center gap-4">
                        <div className="bg-[#1d5343] text-white p-3 rounded-full shrink-0">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-serif font-medium text-[#1A1A1A] text-xl">60-Minute Relief</p>
                            <p className="text-sm text-gray-500">Walk out pain-free in one visit.</p>
                        </div>
                    </div>
                 </div>
               </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- 😰 FEAR KILLER — ZERO-PAIN PROTOCOL --- */}
      <section className="py-20 px-6 md:px-12 bg-white rounded-t-[3rem]">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">Our Promise</span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A] mb-6">Scared of the Needle?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                If your biggest fear is “the injection”, you’re not alone. We use a specialized <span className="font-medium text-[#1A1A1A]">2-Step Zero-Pain Protocol</span>:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { step: "1", title: "The Pre-Numb", desc: "Flavoured surface gel applied to gums. We wait 2 minutes until gums are completely numb." },
                { step: "2", title: "Sleep-Gel Injection", desc: "We use a micro-thin needle. You hardly feel a thing because of Step 1." },
                { step: "3", title: "Silent Technology", desc: "Electric rotary instruments. Quiet, gentle, and vibration-free. No loud drills." }
              ].map((item, i) => (
                <div key={i} className="bg-[#FDFBF0] p-8 rounded-[2.5rem] text-center hover:translate-y-[-5px] transition-transform duration-300">
                  <div className="w-12 h-12 bg-[#1d5343]/10 text-[#1d5343] rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl font-serif">{item.step}</div>
                  <h3 className="font-bold text-xl text-[#1A1A1A] mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- 🧠 LOGIC BLOCK --- */}
      <section className="py-20 px-6 md:px-12 bg-[#FDFBF0]">
        <div className="max-w-[900px] mx-auto">
            <ScrollAnimation>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-medium text-[#1A1A1A]">Modern Science vs Old-School</h2>
                </div>
                
                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-[#1A1A1A] text-white">
                                    <th className="p-6 font-sans font-medium text-sm text-gray-400 uppercase tracking-wider w-1/3">Feature</th>
                                    <th className="p-6 font-sans font-medium text-sm text-gray-400 uppercase tracking-wider w-1/3">Standard Clinic</th>
                                    <th className="p-6 font-sans font-bold text-sm text-white uppercase tracking-wider w-1/3 bg-[#1d5343]">Smile Science</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm md:text-base">
                                <tr>
                                    <td className="p-6 font-medium text-[#1A1A1A]">Technique</td>
                                    <td className="p-6 text-gray-500">Hand Files (Slow)</td>
                                    <td className="p-6 font-bold text-[#1d5343] bg-green-50/30">Silent Rotary Electric</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-medium text-[#1A1A1A]">Visits</td>
                                    <td className="p-6 text-gray-500">3–4 Visits</td>
                                    <td className="p-6 font-bold text-[#1d5343] bg-green-50/30">Single Sitting (60 mins)</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-medium text-[#1A1A1A]">Doctor</td>
                                    <td className="p-6 text-gray-500">Junior Dentist</td>
                                    <td className="p-6 font-bold text-[#1d5343] bg-green-50/30">Owner-Doctor (15 Yrs)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
      </section>

      {/* --- 💰 PRICING --- */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[800px] mx-auto">
            <ScrollAnimation>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-medium text-[#1A1A1A]">Simple, Fixed Pricing.</h2>
                </div>

                <div className="space-y-4">
                    {/* Consultation */}
                    <div className="p-6 rounded-2xl bg-[#FDFBF0] flex justify-between items-center border border-[#1d5343]/10">
                        <span className="font-medium text-[#1A1A1A]">Emergency Consultation</span>
                        <div className="text-right">
                           <span className="block text-xs text-gray-400 line-through">₹500</span>
                           <span className="font-bold text-[#1d5343]">FREE <span className="hidden sm:inline text-xs font-normal text-black">(with treatment)</span></span>
                        </div>
                    </div>
                    {/* Treatments */}
                    {[
                        { name: "Painless RCT (Standard)", price: "₹4,500 – ₹6,500" },
                        { name: "Rotary RCT (Premium)", price: "₹6,500 – ₹8,500", note: "Recommended for molars" },
                        { name: "Zirconia Crown (15yr Warranty)", price: "₹8,500 – ₹12,000" }
                    ].map((item, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 flex justify-between items-center hover:shadow-md transition-all">
                            <div>
                                <p className="font-medium text-[#1A1A1A]">{item.name}</p>
                                {item.note && <p className="text-xs text-gray-400 mt-1">{item.note}</p>}
                            </div>
                            <span className="font-bold text-[#1A1A1A]">{item.price}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 mb-6 flex items-center justify-center gap-2">
                         <ShieldCheck className="w-4 h-4 text-[#1d5343]" /> No hidden fees. Final quote before starting.
                    </p>
                    <a href="https://wa.me/918048903967?text=Hi%20Doctor,%20I%20want%20an%20estimate.">
                        <Button variant="outline" className="rounded-full border-[#1A1A1A] text-[#1A1A1A] px-8">Get Quote on WhatsApp</Button>
                    </a>
                </div>
            </ScrollAnimation>
        </div>
      </section>

      {/* --- 🔥 FINAL CTA --- */}
      <section className="py-24 px-6 md:px-12 bg-[#1d5343] text-white rounded-t-[3rem]">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6">
               Don’t Sleep With That Toothache.
             </h2>
             <p className="text-white/80 text-lg mb-10 font-light">
               We have <span className="font-bold text-[#FCD34D] underline decoration-[#FCD34D]/30 underline-offset-4">2 emergency slots</span> open for this evening.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a href="https://wa.me/918048903967?text=Hi%20Dr.%20Pranjal,%20I%20am%20in%20pain.%20Do%20you%20have%20an%20emergency%20slot%20now?" className="w-full sm:w-auto">
                 <Button className="h-16 w-full rounded-full bg-white text-[#1d5343] hover:bg-gray-100 px-10 text-lg font-bold shadow-2xl">
                   Chat on WhatsApp
                 </Button>
               </a>
               <a href="tel:08048903967" className="w-full sm:w-auto">
                 <Button variant="outline" className="h-16 w-full rounded-full border-white/20 text-white hover:bg-white/10 px-10 text-lg">
                   Call Clinic
                 </Button>
               </a>
             </div>
          </div>
        </ScrollAnimation>
      </section>

    </div>
  );
}