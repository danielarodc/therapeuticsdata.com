import type { Content } from "@/lib/content";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { TrustStrip } from "./TrustStrip";
import { ProblemSection } from "./ProblemSection";
import { AreasSection } from "./AreasSection";
import { SmallStart } from "./SmallStart";
import { KPISection } from "./KPISection";
import { DemoDashboard } from "./DemoDashboard";
import { ScientificDemo } from "./ScientificDemo";
import { HowItWorks } from "./HowItWorks";
import { TechAI } from "./TechAI";
import { WhoItsFor } from "./WhoItsFor";
import { HowWeComplement } from "./HowWeComplement";
import { ResourcesSection } from "./ResourcesSection";
import { FAQ } from "./FAQ";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";

export function LandingPage({ content }: { content: Content }) {
  return (
    <>
      <Header content={content} />
      <main>
        <Hero content={content} />
        <TrustStrip content={content} />
        <ProblemSection content={content} />
        <AreasSection content={content} />
        <SmallStart content={content} />
        <KPISection content={content} />
        <DemoDashboard content={content} />
        <ScientificDemo content={content} />
        <HowItWorks content={content} />
        <TechAI content={content} />
        <WhoItsFor content={content} />
        <HowWeComplement content={content} />
        <ResourcesSection content={content} />
        <FAQ content={content} />
      </main>
      <FinalCTA content={content} />
      <Footer content={content} />
    </>
  );
}
