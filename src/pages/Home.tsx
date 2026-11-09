import { Faq, HOME_FAQ_GROUPS } from "@/components/faq";
import { Seo } from "@/components/seo";
import { DiagnosticCTA } from "@/components/home/DiagnosticCTA";
import { Hero } from "@/components/home/Hero";
import { Methodology } from "@/components/home/Methodology";
import { Testimonials } from "@/components/home/Testimonials";
import { Problem } from "@/components/home/Problem";
import { Solution } from "@/components/home/Solution";
import { TrustSignals } from "@/components/home/TrustSignals";
import { Verticals } from "@/components/home/Verticals";

export function Home() {
  return (
    <>
      <Seo
        title="Strategic Intake & Risk Advisory | Virtus-Strategy"
        description="Your intake layer is your largest unmanaged liability. We help regulated firms implement secure, rules-based controls to stop chasing documents and start practising."
        url="/"
      />
      <Hero />
      <Problem />
      <Solution />
      <TrustSignals />
      <Verticals />
      <Methodology />
      <Testimonials />
      <DiagnosticCTA />
      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-8 font-serif text-2xl md:text-3xl">Frequently Asked Questions</h2>
          <Faq groups={HOME_FAQ_GROUPS} />
        </div>
      </section>
    </>
  );
}
