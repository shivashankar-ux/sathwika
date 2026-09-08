import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { PortfolioSection } from "@/components/sections/portfolio";
import { SkillsSection } from "@/components/sections/skills";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
