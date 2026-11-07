import { DiagnosticCTA } from "@/components/home/DiagnosticCTA";
import { Hero } from "@/components/home/Hero";
import { Methodology } from "@/components/home/Methodology";
import { Problem } from "@/components/home/Problem";
import { Solution } from "@/components/home/Solution";
import { TrustSignals } from "@/components/home/TrustSignals";
import { Verticals } from "@/components/home/Verticals";

export function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <TrustSignals />
      <Verticals />
      <Methodology />
      <DiagnosticCTA />
    </>
  );
}
