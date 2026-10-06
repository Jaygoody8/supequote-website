import { Navigation } from "@/components/navigation";
import { Credibility } from "@/sections/credibility";
import { FAQ } from "@/sections/faq";
import { Features } from "@/sections/features";
import { FinalCTA } from "@/sections/final-cta";
import { Footer } from "@/sections/footer";
import { Hero } from "@/sections/hero";
import { PricingEntry } from "@/sections/pricing";
import { Problem } from "@/sections/problem";
import { ProfitStory } from "@/sections/profit";
import { Showcase } from "@/sections/showcase";
import { Vision } from "@/sections/vision";
import { Workflow } from "@/sections/workflow";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Credibility />
        <Problem />
        <Workflow />
        <Showcase />
        <ProfitStory />
        <Features />
        <Vision />
        <PricingEntry />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
