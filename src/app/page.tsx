import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhoWeAre from "@/components/WhoWeAre";
import VisionMission from "@/components/VisionMission";
import Stats from "@/components/Stats";
import AIFocus from "@/components/AIFocus";
import Capabilities from "@/components/Capabilities";
import TechStack from "@/components/TechStack";
import Industries from "@/components/Industries";
import WhyAcadeno from "@/components/WhyAcadeno";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface transition-colors duration-500">
      <Hero />
      <TrustBar />
      <WhoWeAre />
      <VisionMission />
      <Stats />
      <AIFocus />
      <Capabilities />
      <TechStack />
      <Industries />
      <WhyAcadeno />
      <Process />
      <Contact />
    </main>
  );
}
