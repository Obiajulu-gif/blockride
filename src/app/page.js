import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CoreFeaturesSection from "./components/CoreFeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection"
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      <CoreFeaturesSection/>
      <HowItWorksSection />
    </>
  );
}
