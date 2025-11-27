import { Chatbot } from "@/components/chatbot";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesList } from "@/components/services/services-list";
import { ServicesFeatures } from "@/components/services/services-features";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF0] font-sans antialiased selection:bg-green-100 selection:text-green-900">
     
      <main>
        <ServicesHero />
        <ServicesList />
        <ServicesFeatures />
      </main>
  
    </div>
  );
}

