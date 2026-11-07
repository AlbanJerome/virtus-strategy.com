import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function Privacy() {
  return (
    <Section>
      <Container>
        <article className="mx-auto max-w-3xl space-y-6 text-foreground">
          <header className="space-y-2">
            <h1 className="text-4xl font-bold md:text-5xl">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last Updated: January 1, 2026</p>
          </header>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">1. Introduction and Scope</h2>
            <p className="text-muted-foreground">
              Virtus-Strategy (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides secure client
              intake infrastructure and advisory services to regulated professional services firms. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your personal
              information when you visit our website (virtus-strategy.com), use our digital receptionist
              (the &quot;Widget&quot;), or interact with us.
            </p>
            <p className="text-muted-foreground">
              We are committed to complying with the Personal Information Protection and Electronic
              Documents Act (PIPEDA) and applicable provincial privacy laws, including Quebec&apos;s Act
              to modernize legislative provisions as regards the protection of personal information (Law
              25).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">2. Who We Are and Our Privacy Officer</h2>
            <ul className="list-none space-y-1 text-muted-foreground">
              <li>
                <strong className="text-foreground">Organization:</strong> Virtus-Strategy
              </li>
              <li>
                <strong className="text-foreground">Privacy Officer:</strong> Alban Jerome, Principal
              </li>
              <li>
                <strong className="text-foreground">Contact Email:</strong> contact@virtus-strategy.com
              </li>
              <li>
                <strong className="text-foreground">Mailing Address:</strong> 2 Eva Road, Etobicoke, ON,
                Canada
              </li>
            </ul>
            <p className="text-muted-foreground">
              Our Privacy Officer is responsible for compliance with this policy and for responding to your
              privacy-related inquiries.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">3. What Information We Collect</h2>
            <p className="text-muted-foreground">
              We only collect information that is necessary to respond to your inquiries, qualify
              potential engagements, and operate our website.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Information You Provide Directly:</strong> First name,
              last name, email address, phone number, company/firm name, and qualification data regarding
              your firm&apos;s vertical, operational bottlenecks, size, and timeline.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Information Collected Automatically:</strong> Standard
              technical data (IP address, browser type, pages visited) via cookies or similar technologies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">4. How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect to respond to inquiries, schedule diagnostic calls, qualify
              your firm&apos;s fit for our Intake Infrastructure Sprint, send transactional communications,
              and comply with legal obligations. We do not sell your personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">
              5. Our &quot;Digital Receptionist&quot; (The Widget) and Automated Decision-Making
            </h2>
            <p className="text-muted-foreground">
              Our website features a conversational lead qualification tool (the &quot;Widget&quot;).
            </p>
            <p className="text-muted-foreground">
              It is not an LLM. The Widget is a deterministic state machine. It follows a strict script and
              does not use generative AI to invent responses, provide advice, or process sensitive client
              data.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Automated Routing.</strong> The Widget collects your
              answers to categorize your inquiry as &quot;HOT&quot; or &quot;STANDARD&quot; based on
              pre-defined criteria (e.g., timeline, firm size). This automated scoring is used solely to
              prioritize our response. You always have the right to request a human review of this
              qualification by emailing our Privacy Officer.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">No Sensitive Data.</strong> The Widget is designed to
              capture non-sensitive business contact and operational information. It does not ask for, read,
              or process confidential client information, SR&amp;ED details, or health data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">6. Disclosure and Third-Party Service Providers</h2>
            <p className="text-muted-foreground">
              We do not disclose your personal information to third parties for marketing purposes. We use
              the following trusted service providers to operate our business, and they are contractually
              obligated to protect your data:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong className="text-foreground">Supabase:</strong> Our secure database. All lead data
                captured via the Widget or contact form is stored in Supabase.
              </li>
              <li>
                <strong className="text-foreground">Cal.com:</strong> Our scheduling tool. When you book a
                call, your name and email are processed by this provider to manage the calendar invitation.
              </li>
              <li>
                <strong className="text-foreground">Email Service Providers:</strong> We may use a service
                to send you confirmation emails.
              </li>
              <li>
                <strong className="text-foreground">GitHub Pages:</strong> Our website is hosted on GitHub
                Pages.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">7. Data Storage, Location, and Cross-Border Transfers</h2>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Storage:</strong> Your data is stored in our Supabase
              database, which implements industry-standard security measures, including encryption at rest
              and in transit.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Location:</strong> Supabase data is hosted in the Canada
              Central (Montreal) region.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Third-Party Transfers:</strong> Some third-party service
              providers (like Cal.com or our email providers) may process data outside of Canada, including
              in the United States. Where data is transferred outside Canada, we require the provider to
              maintain comparable privacy protections.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">8. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain personal information only as long as necessary to fulfill the purposes for which it
              was collected. If you are a prospective client, we retain your lead data for up to 12 months
              to follow up. If you request deletion, we will comply within 30 days. If you become a
              client, we retain your information for the duration of our engagement and for a period afterward
              as required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">9. Your Rights (PIPEDA and Law 25)</h2>
            <p className="text-muted-foreground">
              Subject to applicable law, you have the right to request access to your information, request
              corrections, request deletion, withdraw consent, request data portability (Quebec Law 25), and
              request an explanation of the logic used by our Widget to score your inquiry. To exercise these
              rights, contact contact@virtus-strategy.com. We will respond within 30 days.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">10. Cookies and Tracking</h2>
            <p className="text-muted-foreground">
              Our website uses essential cookies to ensure basic functionality. You can instruct your browser
              to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">11. Security</h2>
            <p className="text-muted-foreground">
              We have implemented appropriate technical and organizational security measures to protect your
              personal information, including the use of encrypted connections (HTTPS) and restricted access
              to our Supabase database. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">12. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new policy on this page and updating the &quot;Last Updated&quot; date.
            </p>
          </section>
        </article>
      </Container>
    </Section>
  );
}
