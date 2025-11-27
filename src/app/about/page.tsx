
import { AboutHero } from "@/components/about/about-hero";
import { AboutMission } from "@/components/about/about-mission";
import { AboutTeam } from "@/components/about/about-team";
import { Stats } from "@/components/home/stats";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF0] font-sans antialiased selection:bg-green-100 selection:text-green-900">
    
      <main>
        <AboutHero />
        <AboutMission />
        <Stats />
        <AboutTeam />
      </main>

    </div>
  );
}

