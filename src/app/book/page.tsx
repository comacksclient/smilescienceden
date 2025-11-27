"use client";
import { Phone, MapPin, Clock, Mail, ArrowRight, MessageCircle } from "lucide-react";
import { ScrollAnimation } from '@/components/ui/scroll-animation';

export default function BookPage() {
  return (
    <section className="relative min-h-screen bg-[#FDFBF0] py-20 px-4 sm:px-8 overflow-hidden font-sans">
   
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#FFF8E7] rounded-full blur-[120px] pointer-events-none opacity-80" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#1d5343]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto relative z-10">

        <div className="text-center mb-16">
          <ScrollAnimation delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-[#1d5343]/5 border border-[#1d5343]/10 px-4 py-1.5 rounded-full mb-6">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1d5343] opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1d5343]"></span>
               </span>
               <span className="text-[11px] font-bold tracking-widest uppercase text-[#1d5343]">Ready to Smile?</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#0F172A] mb-4 tracking-tight">
              Book Your <span className="font-serif italic text-[#1A1A1A]">Appointment</span>
            </h1>
            <p className="text-[#4B5563] text-lg max-w-lg mx-auto leading-relaxed">
              Choose your preferred way to connect with us. We are ready to assist you on your dental journey.
            </p>
          </ScrollAnimation>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          

          <ScrollAnimation delay={0.2}>
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#1d5343]/5 h-full flex flex-col justify-between group hover:border-[#1d5343]/20 transition-colors duration-500">
              <div>
                <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-6">Direct Contact</h3>
                
               
                <div className="space-y-4 mb-8">
                  <a href="tel:08048903967" className="block">
                    <button className="w-full group relative bg-[#1A1A1A] text-white rounded-full h-[64px] flex items-center justify-between px-2 pl-8 hover:bg-black transition-all shadow-lg hover:shadow-xl hover:scale-[1.01]">
                       <span className="font-medium text-lg tracking-wide flex items-center gap-3">
                         <Phone className="w-5 h-5" /> 
                         <span>Call 080 4890 3967</span>
                       </span>
                       <div className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center text-black transition-transform duration-300 group-hover:rotate-[-45deg]">
                          <ArrowRight className="w-5 h-5" />
                       </div>
                    </button>
                  </a>

                  <a href="https://wa.me/916206700442" target="_blank" rel="noopener" className="block">
                    <button className="w-full group bg-[#25D366] text-white rounded-full h-[64px] flex items-center justify-center gap-3 text-lg font-bold hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg hover:scale-[1.01]">
                      <MessageCircle className="w-6 h-6 fill-current" />
                      WhatsApp Us
                    </button>
                  </a>
                </div>

                {/* Secondary Links */}
                <div className="space-y-4 pt-6 border-t border-gray-100">
                   <a href="mailto:drpranjal@smilescience.in" className="flex items-center gap-4 p-4 rounded-xl bg-[#FDFBF0] hover:bg-[#F5F3E6] transition-colors group/link">
                      <div className="w-10 h-10 rounded-full bg-[#1d5343]/10 flex items-center justify-center text-[#1d5343]">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="text-[#1A1A1A] font-medium group-hover/link:text-[#1d5343] transition-colors">drpranjal@smilescience.in</span>
                   </a>
                   
                   <a href="tel:+916206700442" className="flex items-center gap-4 p-4 rounded-xl bg-[#FDFBF0] hover:bg-[#F5F3E6] transition-colors group/link">
                      <div className="w-10 h-10 rounded-full bg-[#1d5343]/10 flex items-center justify-center text-[#1d5343]">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="text-[#1A1A1A] font-medium group-hover/link:text-[#1d5343] transition-colors">+91 62067 00442 (Mobile)</span>
                   </a>
                </div>
              </div>
              
              <div className="mt-8 bg-green-50 text-[#1d5343] px-4 py-3 rounded-xl text-sm font-semibold text-center border border-green-100">
                 ✨ Walk-ins welcome! No appointment required.
              </div>
            </div>
          </ScrollAnimation>


          {/* RIGHT COLUMN: LOCATION & HOURS */}
          <ScrollAnimation delay={0.3}>
             <div className="bg-white rounded-[2rem] p-3 md:p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#1d5343]/5 h-full flex flex-col">
                
                {/* Map Container - Styled to look embedded */}
                <div className="w-full h-[300px] md:h-[350px] rounded-[1.5rem] overflow-hidden relative shadow-inner border border-gray-100 mb-6 group">
                   <iframe
                    src="https://maps.google.com/maps?q=Smile%20Science%20Dental%20Clinic%20Electronic%20City%20Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    className="grayscale group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                    title="Smile Science Location"
                  ></iframe>
                  {/* Custom Map Overlay Button */}
                  <a 
                    href="https://maps.google.com/?q=4th+Floor,+224,+3rd+Cross+Road,+Neeladri+Nagar,+Electronic+City,+Bangalore"
                    target="_blank"
                    rel="noopener"
                    className="absolute bottom-4 right-4 bg-white text-[#1A1A1A] px-4 py-2 rounded-lg text-xs font-bold shadow-lg hover:bg-[#1A1A1A] hover:text-white transition-colors flex items-center gap-2"
                  >
                    Open in Maps <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="px-5 pb-5 flex-1 flex flex-col justify-center">
                   <div className="flex items-start gap-4 mb-6">
                      <MapPin className="w-6 h-6 text-[#1d5343] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-serif text-lg font-bold text-[#1A1A1A] mb-1">Visit Our Clinic</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          4th Floor, 224, 3rd Cross Road, Neeladri Nagar,<br/>
                          Above ICICI Bank, Electronic City Phase 1,<br/>
                          Bangalore - 560100
                        </p>
                      </div>
                   </div>

                   <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-[#1d5343] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-serif text-lg font-bold text-[#1A1A1A] mb-1">Opening Hours</h4>
                        <div className="text-gray-500 text-sm grid grid-cols-2 gap-x-8">
                           <span>Mon - Sat</span>
                           <span className="text-[#1A1A1A] font-medium">12:00 PM - 08:00 PM</span>
                           <span>Sunday</span>
                           <span className="text-[#1A1A1A] font-medium">12:00 PM - 05:00 PM</span>
                        </div>
                      </div>
                   </div>
                </div>
             </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
}