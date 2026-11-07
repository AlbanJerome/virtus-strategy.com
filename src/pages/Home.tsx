import { Faq, VIRTUS_FAQ_GROUPS } from "@/components/faq";
import { Seo } from "@/components/seo";
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
      <Seo
        title="Virtus-Strategy | Secure Client Intake Infrastructure"
        description="Virtus-Strategy builds secure, deterministic client intake systems for regulated professional services. We design the intake layer at your front door so your firm can stop chasing documents and start practising."
        url="/"
      />
      <Hero />
      <Problem />
      <Solution />
      <TrustSignals />
      <Verticals />
      <Methodology />
      <DiagnosticCTA />
      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-8 font-serif text-2xl md:text-3xl">Frequently Asked Questions</h2>
          <Faq groups={VIRTUS_FAQ_GROUPS} />
        </div>
      </section>
    </>
  );
}
