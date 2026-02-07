import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProblemSection />
      <FeaturedServices />
      <ProcessSection />
      <SocialProofSection />
    </>
  );
}
