import React, { Suspense } from "react";
import HeroSection from "./Home/HeroSection";
import WhyChooseSection from "./Home/WhyChooseSection";
import ValuesGrid from "./Home/ValuesGrid";
import TechnologiesSection from "./Home/TechnologiesSection";
import PartnersSection from "./Home/PartnersSection";
import SuccessStoriesSection from "./Home/SuccessStoriesSection";
import AnimatedSection from "./Animation/AnimatedSection";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Suspense fallback={<div>Loading...</div>}>

        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>

        <AnimatedSection>
          <WhyChooseSection />
        </AnimatedSection>

        <AnimatedSection>
          <ValuesGrid />
        </AnimatedSection>

        <AnimatedSection>
          <TechnologiesSection />
        </AnimatedSection>

        <AnimatedSection>
          <PartnersSection />
        </AnimatedSection>

        <AnimatedSection>
          <SuccessStoriesSection />
        </AnimatedSection>

      </Suspense>
    </div>
  );
}
