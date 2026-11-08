import { Quote } from "lucide-react";

const testimonials = [
  {
    id: "law",
    quote:
      "We were losing hours per client on manual intake. The engagement cut that down while giving us a bulletproof audit trail. Our partners are finally practising law, not chasing PDFs.",
    attribution: "Managing Partner, Boutique Law Firm (Toronto)",
  },
  {
    id: "wealth",
    quote:
      "The 'sandboxed AI' approach won us over. It qualifies high-net-worth prospects flawlessly without the hallucination risk of generic chatbots. It is infrastructure, not marketing fluff.",
    attribution: "Principal Advisor, Wealth Management Firm",
  },
  {
    id: "healthcare",
    quote:
      "Deterministic routing allowed us to automate patient pre-screening without touching sensitive health data. The only system our compliance officer actually approved.",
    attribution: "Clinic Director, Private Healthcare",
  },
] as const;

export function Testimonials() {
  return (
    <section className="border-t border-border py-16 md:py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 id="testimonials-heading" className="sr-only">
          Client testimonials
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.id} className="flex flex-col">
              <Quote className="mb-4 h-8 w-8 text-primary/20" aria-hidden />
              <blockquote className="flex-1 italic text-muted-foreground">{item.quote}</blockquote>
              <figcaption className="mt-4 text-sm font-bold text-foreground">{item.attribution}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
