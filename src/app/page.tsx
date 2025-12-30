
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/herosection";
import { Membership } from "@/components/home/membership";
import { OurWorks } from "@/components/home/ourworks";
import { PersonalizedCare } from "@/components/home/personalisedcare";
import { Testimonials } from "@/components/home/testimonials";

import { CTA } from "@/components/home/cta";



export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF0] font-sans antialiased selection:bg-green-100 selection:text-green-900">
  
    <main>
      <Hero />
      <Membership/>
      <Features />
      <OurWorks />
     
      <PersonalizedCare></PersonalizedCare>
      <Testimonials />
     
      <CTA />
    </main>
   
  </div> 
  );
}
