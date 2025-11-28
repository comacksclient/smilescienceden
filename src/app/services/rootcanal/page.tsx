"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Smile, 
  Phone,
  Award,
  Zap,
  Heart,
  Building2
} from "lucide-react";
import Link from "next/link";

export default function RootCanalPage() {
  return (
    <div className="bg-[#FDFBF0] min-h-screen font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#1d5343]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div>
              <div className="inline-flex items-center gap-2 mb-6 bg-white/50 border border-[#1d5343]/10 px-4 py-1.5 rounded-full">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1d5343] opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1d5343]"></span>
                 </span>
                 <span className="text-[11px] font-bold tracking-widest uppercase text-[#1d5343]">
                   Root Canal Treatment in Bangalore
                 </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#1A1A1A] mb-6 tracking-tight leading-[1.1]">
                Save Your Tooth <br/>
                <span className="italic text-[#1d5343]">Painlessly.</span>
              </h1>
              
              <p className="text-[#4B5563] text-lg leading-relaxed mb-8 font-light max-w-lg">
                At <strong>Smile Science Dental Clinic</strong>, we understand tooth pain can be debilitating. Our expert endodontists perform precise, painless root canal treatments using advanced microscope-assisted techniques to save your natural tooth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button className="h-14 px-8 rounded-full bg-[#1A1A1A] text-white hover:bg-[#1d5343] transition-all shadow-lg hover:shadow-xl flex items-center gap-2 text-base font-medium">
                    Book Appointment
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="h-14 px-8 rounded-full border border-[#1A1A1A]/10 text-[#1A1A1A] hover:bg-white transition-all flex items-center gap-2 text-base font-medium">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="relative">
               <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 aspect-[4/3]">
                 <img 
                   src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1080" 
                   alt="Root Canal Treatment" 
                   className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-[#1d5343] mix-blend-multiply opacity-10 pointer-events-none" />
               </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- WHAT IS ROOT CANAL TREATMENT? --- */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A] mb-6">
                What is Root Canal Treatment?
              </h2>
              <div className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto space-y-4">
                <p>Root Canal Treatment (RCT), also known as endodontic therapy, is a dental procedure performed to remove infected or damaged pulp tissue from within the tooth.</p>
                <p>The pulp, located in the center of the tooth, contains nerves, veins, and connective tissue. When it becomes infected or inflamed, it can cause severe pain and other complications.</p>
                <p>RCT treatment aims to alleviate pain, eliminate infection, and preserve the tooth's structure and functions, saving your natural tooth from extraction.</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Indications Grid */}
          <ScrollAnimation>
            <div className="mb-16">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8 text-center">When Do You Need Root Canal Treatment?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Serious toothache, especially while biting or applying pressure",
                  "Prolonged sensitivity to hot or cold temperatures",
                  "Swelling and tenderness in the gums close to the affected tooth",
                  "Discoloration or darkening of the tooth",
                  "Presence of a pimple on the gums",
                  "Severe decay or damage to the tooth structure"
                ].map((indication, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-[#FDFBF0] p-6 rounded-2xl border border-[#1d5343]/5">
                    <CheckCircle2 className="w-6 h-6 text-[#1d5343] shrink-0 mt-1" />
                    <p className="text-gray-700 font-light">{indication}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Pain Relief",
                desc: "Eliminate severe tooth pain and restore comfort in your daily life.",
                icon: Smile
              },
              {
                title: "Tooth Preservation",
                desc: "Save your natural tooth and avoid extraction, maintaining your natural bite.",
                icon: ShieldCheck
              },
              {
                title: "Infection Elimination",
                desc: "Remove infected pulp tissue completely, preventing spread of infection.",
                icon: Zap
              },
              {
                title: "Long-lasting Results",
                desc: "With proper care, treated teeth can last a lifetime with 90%+ success rate.",
                icon: Clock
              }
            ].map((item, idx) => (
              <ScrollAnimation key={idx} delay={idx * 0.1}>
                <div className="bg-[#FDFBF0] p-8 rounded-[2rem] border border-[#1d5343]/5 hover:border-[#1d5343]/20 transition-all hover:-translate-y-1 hover:shadow-lg h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#1d5343] mb-4 shadow-sm shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* --- SUCCESS RATE & AFTERCARE --- */}
      <section className="py-20 px-6 md:px-12 bg-[#FDFBF0]">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-6">Success Rate & Longevity</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl border border-[#1d5343]/5">
                    <div className="text-4xl font-bold text-[#1d5343] mb-2">90%+</div>
                    <p className="text-gray-600">Success rate for root canal treatments performed by our specialists</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Root canals have one of the highest success rates in dentistry. With proper care and maintenance, a treated tooth can last a lifetime.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-6">Aftercare Tips</h2>
                <div className="space-y-4">
                  {[
                    "Maintain excellent oral hygiene with regular brushing and flossing",
                    "Avoid chewing on hard foods or ice",
                    "Schedule regular dental check-ups every 6 months",
                    "Wear a crown or restoration to protect the treated tooth",
                    "Avoid smoking and excessive alcohol consumption",
                    "Use a soft-bristled toothbrush and gentle brushing technique"
                  ].map((tip, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#1d5343] shrink-0 mt-1" />
                      <p className="text-gray-600 text-sm">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-[#1d5343]/5">
        <div className="max-w-[1200px] mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">
                Excellence in Endodontics
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A]">
                Why Choose Smile Science?
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Expert Endodontists",
                desc: "Highly qualified specialists with extensive experience in advanced RCT procedures.",
                icon: Award
              },
              {
                title: "Microscope-Assisted",
                desc: "Precision treatment using operating microscopes for superior outcomes.",
                icon: Zap
              },
              {
                title: "Painless Procedures",
                desc: "Advanced anesthesia and gentle techniques ensure a comfortable experience.",
                icon: Heart
              },
              {
                title: "Modern Technology",
                desc: "State-of-the-art equipment and sterilization protocols for safety and efficacy.",
                icon: CheckCircle2
              }
            ].map((item, idx) => (
              <ScrollAnimation key={idx} delay={idx * 0.1}>
                <div className="bg-[#FDFBF0] p-8 rounded-[2rem] text-center border border-[#1d5343]/5 shadow-sm hover:shadow-md transition-all">
                  <div className="w-14 h-14 mx-auto bg-[#1d5343]/5 rounded-full flex items-center justify-center text-[#1d5343] mb-6">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="py-20 px-6 md:px-12">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto bg-[#1d5343] rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 relative z-10">
               Don't Suffer from Tooth Pain
             </h2>
             <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-light relative z-10">
               Schedule your root canal consultation today and save your natural tooth with our painless, expert treatment.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
               <a href="tel:08048903967">
                 <Button className="h-14 px-8 rounded-full bg-white text-[#1d5343] hover:bg-gray-100 transition-all font-bold flex items-center gap-2">
                   <Phone className="w-4 h-4 fill-current" /> Call 080 4890 3967
                 </Button>
               </a>
               <Link href="/book">
                 <Button variant="outline" className="h-14 px-8 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all font-medium">
                   Book Online
                 </Button>
               </Link>
             </div>
          </div>
        </ScrollAnimation>
      </section>

    </div>
  );
}
