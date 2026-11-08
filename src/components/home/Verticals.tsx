import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Placeholder } from "@/components/ui/placeholder";

const verticals = [
  {
    id: "wealth",
    title: "Wealth Management & Insurance",
    imageAlt: "Wealth management client intake automation",
    image:
      "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=800",
    risk:
      "Advisors spend up to 70% of their day on manual administrative work, client onboarding, and compliance documentation.",
    solution:
      "A secure intake layer that pre-qualifies prospects, captures basic compliance data, and routes high-value clients directly to the advisor's calendar.",
  },
  {
    id: "legal",
    title: "Legal Services",
    imageAlt: "Legal KYC compliance routing",
    image:
      "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800",
    risk:
      "Intake takes 1.5 to 3 hours per client, and 67% of malpractice claims stem from intake-stage failures.",
    solution:
      "A rule-based intake workflow that asks the exact compliance and KYC questions upfront. It routes qualified matters to partners while generating an automated audit trail.",
  },
  {
    id: "accounting",
    title: "Accounting, Tax & SR&ED",
    imageAlt: "Accounting and tax client intake automation",
    image:
      "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800",
    risk:
      "Upstream bottlenecks in client intake and the endless document chase. Firms lose capacity manually chasing down information before work can begin.",
    solution:
      "An authoritative web presence paired with an intake system that screens for eligibility and automates the initial document request phase.",
  },
  {
    id: "healthcare",
    title: "Healthcare & Digital Clinics",
    imageAlt: "Healthcare patient intake compliance routing",
    image:
      "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800",
    risk:
      "Strict patient privacy laws make it risky to adopt generic AI tools for patient triage and intake.",
    solution:
      "A deterministic, rule-based patient intake system that captures demographics and routes to the right practitioner without exposing sensitive health data to an LLM.",
  },
] as const;

export function Verticals() {
  return (
    <section className="border-t border-border pb-16 pt-10 md:pb-24 md:pt-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Placeholder
          label="home-verticals-section-title"
          as="h2"
          className="text-center text-2xl font-bold md:text-3xl lg:text-4xl"
        >
          Built for regulated firms.
        </Placeholder>
        <Placeholder
          label="home-verticals-section-intro"
          as="p"
          className="mx-auto mt-4 max-w-5xl text-balance text-center text-lg leading-snug text-muted-foreground"
        >
          We focus exclusively on industries where a single client is high value and the compliance
          burden is heavy. When manual triage is the norm, we design a secure, auditable path from first
          contact to qualified matter.
        </Placeholder>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {verticals.map((vertical) => (
            <Card key={vertical.id} className="metallic-border overflow-hidden">
              <img
                src={vertical.image}
                alt={vertical.imageAlt}
                className="photo-treatment mb-4 h-48 w-full max-w-full object-cover"
              />
              <CardHeader>
                <CardTitle className="text-lg font-sans">{vertical.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    The risk
                  </p>
                  <Placeholder
                    label={`home-vertical-${vertical.id}-risk`}
                    as="p"
                    className="mt-2 text-muted-foreground"
                  >
                    {vertical.risk}
                  </Placeholder>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    The solution
                  </p>
                  <Placeholder
                    label={`home-vertical-${vertical.id}-solution`}
                    as="p"
                    className="mt-2 text-muted-foreground"
                  >
                    {vertical.solution}
                  </Placeholder>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
