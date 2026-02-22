import HeroSection from "@/components/sections/HeroSection";
import WhatIsSection from "@/components/sections/WhatIsSection";
import IncludesSection from "@/components/sections/IncludesSection";
import VantagesSection from "@/components/sections/VantagesSection";
import ForWhoSection from "@/components/sections/ForWhoSection";
import BonusSection from "@/components/sections/BonusSection";
import LostSection from "@/components/sections/LostSection";
import CommunityBanner from "@/components/sections/CommunityBanner";
import TestimonialsDirectSection from "@/components/sections/TestimonialsDirectSection";
import PricingSection from "@/components/sections/PricingSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import FaqSection from "@/components/sections/FaqSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor && anchor.getAttribute("href")?.startsWith("#")) {
        const targetId = anchor.getAttribute("href");
        if (!targetId || targetId === "#") return;

        const element = document.querySelector(targetId);
        if (element) {
          e.preventDefault();

          const targetPosition = element.getBoundingClientRect().top + window.scrollY - 80;
          const startPosition = window.scrollY;
          const distance = targetPosition - startPosition;

          // Duração mais ágil: entre 1.5s e 2.5s
          const duration = Math.min(Math.max(Math.abs(distance) * 0.5, 1500), 2500);
          let start: number | null = null;

          // Easing Cúbico (mais responsivo no início que o Quártico)
          const easeInOutCubic = (t: number) => {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
          };

          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);

            window.scrollTo(0, startPosition + distance * easeInOutCubic(percentage));

            if (progress < duration) {
              window.requestAnimationFrame(step);
            } else {
              window.history.pushState(null, "", targetId);
            }
          };

          window.requestAnimationFrame(step);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <main className="min-h-screen overflow-clip">
      <HeroSection />
      <WhatIsSection />
      <IncludesSection />
      <VantagesSection />
      <ForWhoSection />
      <BonusSection />
      <LostSection />
      <CommunityBanner />
      <TestimonialsDirectSection />
      <PricingSection />
      <GuaranteeSection />
      <FaqSection />
    </main>
  );
};

export default Index;
