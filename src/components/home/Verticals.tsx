import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Placeholder } from "@/components/ui/placeholder";

const verticals = [
  {
    id: "wealth",
    title: "Wealth Management & Insurance",
    image:
      "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=800",
    bottleneck:
      "Advisors spend up to 70% of their day on manual administrative work, client onboarding, and compliance documentation.",
    install:
      "A secure front door that pre-qualifies prospects based on asset thresholds or policy needs, captures basic data, and books them directly onto the advisor's calendar.",
  },
  {
    id: "legal",
    title: "Legal Services",
    image:
      "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800",
    bottleneck:
      "Intake takes 1.5 to 3 hours per client, and 67% of malpractice claims stem from intake-stage failures.",
    install:
      "A rule-based intake system that asks the exact compliance and KYC questions upfront. It routes qualified matters to partners while generating an automated audit trail.",
  },
  {
    id: "accounting",
    title: "Accounting, Tax & SR&ED",
    image:
      "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800",
    bottleneck:
      "Upstream bottlenecks in client intake and the endless document chase. Firms lose capacity manually chasing down information before work can begin.",
    install:
      "A web presence that establishes institutional authority, paired with an intake bot that screens for eligibility and automates the initial document request phase.",
  },
  {
    id: "healthcare",
    title: "Healthcare & Digital Clinics",
    image:
      "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800",
    bottleneck:
      "Strict patient privacy laws make it risky to adopt generic AI tools for patient triage and intake.",
    install:
      "A deterministic, rule-based patient intake system that captures demographics and routes to the right practitioner without exposing sensitive health data to an LLM.",
  },
] as const;

export function Verticals() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Placeholder
          label="home-verticals-section-title"
          as="h2"
          className="text-center text-3xl font-bold md:text-4xl"
        >
          Built for regulated firms.
        </Placeholder>
        <Placeholder
          label="home-verticals-section-intro"
          as="p"
          className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground"
        >
          We focus exclusively on industries where a single client is high value and the compliance
          burden is heavy. If your front door requires manual triage, we can automate it securely.
        </Placeholder>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {verticals.map((vertical) => (
            <Card key={vertical.id} className="metallic-border overflow-hidden">
              <img
                src={vertical.image}
                alt=""
                className="photo-treatment mb-4 h-48 w-full object-cover"
              />
              <CardHeader>
                <CardTitle className="text-lg font-sans">{vertical.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    Bottleneck
                  </p>
                  <Placeholder
                    label={`home-vertical-${vertical.id}-bottleneck`}
                    as="p"
                    className="mt-2 text-muted-foreground"
                  >
                    {vertical.bottleneck}
                  </Placeholder>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    What we install
                  </p>
                  <Placeholder
                    label={`home-vertical-${vertical.id}-install`}
                    as="p"
                    className="mt-2 text-muted-foreground"
                  >
                    {vertical.install}
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
