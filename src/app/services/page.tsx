import { Chatbot } from "@/components/chatbot";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ServicesFAQ } from "@/components/services/services-features";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesList } from "@/components/services/services-list";


export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF0] font-sans antialiased selection:bg-green-100 selection:text-green-900">
     
      <main>
        <ServicesHero />
        <ServicesList />
        <ServicesFAQ />
      </main>
  
    </div>
  );
}

