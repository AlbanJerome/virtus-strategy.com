import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Seo } from "@/components/seo";

export function Cookies() {
  return (
    <Section>
      <Seo
        title="Cookies | Virtus-Strategy"
        description="Cookie Policy for Virtus-Strategy: how we use cookies, analytics, and how you can manage consent."
        url="/cookies"
      />
      <Container>
        <article className="mx-auto max-w-3xl space-y-6 text-foreground">
          <header className="space-y-2">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Cookie Policy</h1>
            <p className="text-sm text-muted-foreground">Last Updated: January 1, 2026</p>
          </header>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p className="text-muted-foreground">
              This Cookie Policy explains how 1001486026 Ontario Inc. operating as Virtus-Strategy
              (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar tracking
              technologies on our website
              (virtus-strategy.com). It should be read alongside our Privacy Policy, which explains how we
              handle your personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">2. What Are Cookies?</h2>
            <p className="text-muted-foreground">
              Cookies are small text files that are placed on your computer or mobile device when you visit a
              website. They are widely used to make websites work more efficiently and to provide information
              to the owners of the site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">3. How We Use Cookies</h2>
            <p className="text-muted-foreground">
              We use a minimal number of cookies to ensure our website functions securely and to understand
              how visitors interact with our site. We categorize them as follows:
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Strictly Necessary Cookies:</strong> These cookies are
              essential for the operation of our website. They allow us to provide secure connections,
              maintain session integrity, and enable the functionality of our &quot;Digital
              Receptionist&quot; (Widget) and scheduling tool (Cal.com). You cannot opt out of these cookies
              without severely impacting your ability to use the site.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Performance and Analytics Cookies:</strong> These cookies
              help us understand how visitors use our site (e.g., which pages are visited most often). We use
              this information to improve the site&apos;s performance and user experience. The data collected
              is aggregated and anonymized.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Third-Party Cookies:</strong> When you interact with embedded
              tools on our site (such as booking a review call via Cal.com), those third-party providers
              may set their own cookies to manage your session and secure your booking.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">4. What We Do Not Use</h2>
            <p className="text-muted-foreground">
              We do not use advertising or targeting cookies to track your behaviour across other websites or
              to serve you targeted ads. We do not sell cookie data to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">5. Managing Your Cookie Preferences</h2>
            <p className="text-muted-foreground">
              Most web browsers automatically accept cookies, but you can usually modify your browser setting
              to decline cookies if you prefer.
            </p>
            <p className="text-muted-foreground">
              To manage cookies, please refer to the &quot;Help&quot; or &quot;Settings&quot; section of your
              browser (e.g., Chrome, Safari, Firefox, Edge).
            </p>
            <p className="text-muted-foreground">
              Please note that if you disable strictly necessary cookies, some parts of our website (like the
              booking calendar) may not function properly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">6. Quebec Law 25 Compliance</h2>
            <p className="text-muted-foreground">
              In accordance with Quebec&apos;s Law 25, we are transparent about the use of cookies. By
              continuing to use our website, you consent to the use of the cookies described in this policy. If
              you wish to withdraw your consent regarding analytical cookies, you may block them via your
              browser settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">7. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Cookie Policy from time to time to reflect changes in technology, regulation,
              or our business practices. Any changes will be posted on this page with an updated &quot;Last
              Updated&quot; date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">8. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about our use of cookies, please contact our Privacy Officer:
            </p>
            <ul className="list-none space-y-1 text-muted-foreground">
              <li>1001486026 Ontario Inc. operating as Virtus-Strategy</li>
              <li>2 Eva Road, Etobicoke, ON, Canada</li>
              <li>contact@virtus-strategy.com</li>
            </ul>
          </section>
        </article>
      </Container>
    </Section>
  );
}
