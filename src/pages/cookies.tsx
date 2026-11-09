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
            <p className="text-sm text-muted-foreground">Effective Date: January 1, 2026</p>
            <p className="text-sm text-muted-foreground">Last Updated: January 1, 2026</p>
          </header>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p className="text-muted-foreground">
              This Cookie Policy explains how 1001486026 Ontario Inc. operating as Virtus-Strategy
              (&quot;Virtus-Strategy&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and
              similar tracking technologies on our website. It explains what these technologies are, why we use
              them, and your rights to control our use of them.
            </p>
            <p className="text-muted-foreground">
              This policy is governed by the Personal Information Protection and Electronic Documents Act
              (PIPEDA) and applicable provincial privacy laws in Ontario, Canada. It should be read alongside
              our Privacy Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">2. How Virtus-Strategy Uses Cookies</h2>
            <p className="text-muted-foreground">
              We use cookies and other client-side storage technologies to operate our website, process lead
              intake, and analyze website traffic. We categorize our cookies into the following types:
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Essential Cookies and Security:</strong> These are required
              for the website to function securely. We use Cloudflare Turnstile during our Ripley lead capture
              step to verify that users are human and to protect our site from spam and abuse. Cloudflare may set
              its own cookies or storage.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Functional Cookies:</strong> We use Cal.com to provide a
              booking iframe for our Intake and Risk Review handover. This iframe may set third-party cookies
              required for the booking system to function correctly.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Analytics Cookies:</strong> With your consent, we use Google
              Analytics (GA4/GTM) to understand how visitors interact with our website. These cookies help us
              measure traffic and improve user experience. These scripts are only loaded after you click
              &quot;Accept&quot; on our cookie consent banner.
            </p>
            <p className="text-muted-foreground">
              We do not currently use any marketing, advertising, or retargeting cookies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">3. Third-Party Cookies and Providers</h2>
            <p className="text-muted-foreground">
              When you use our website, certain third-party service providers may set cookies or access storage
              on your device. These providers have their own privacy and cookie policies, which we encourage you
              to review:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong className="text-foreground">Cloudflare:</strong> Provides security and bot management
                (Turnstile).
              </li>
              <li>
                <strong className="text-foreground">Cal.com:</strong> Provides the scheduling and booking
                interface.
              </li>
              <li>
                <strong className="text-foreground">Supabase:</strong> Processes lead submission requests to our
                edge functions. Note that our user interface does not set cookies via Supabase, but your request
                will hit Supabase servers.
              </li>
              <li>
                <strong className="text-foreground">Google:</strong> Provides analytics services (GA4/GTM)
                subject to your consent.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">4. Other Client-Side Storage</h2>
            <p className="text-muted-foreground">
              In addition to cookies, we use browser localStorage and sessionStorage to improve your experience.
              These storage mechanisms are not gated by the cookie consent banner because they are strictly
              necessary for the functionality of our lead intake process.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">localStorage:</strong> When you complete the Ripley
              qualification or successfully submit a lead, we store keys such as ripley_qualified, ripley_name,
              ripley_lead_context, and ripley_lead_data. This is used for returning visitor user experience and to
              restore your draft if you navigate away and return.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">sessionStorage:</strong> We use a spa-redirect key for deep-link
              restoration. This is short-lived and helps redirect users to the correct page if they encounter a
              404 error (for example, after a GitHub Pages redirect).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">5. Managing and Withdrawing Consent</h2>
            <p className="text-muted-foreground">
              When you first visit our website, you will be presented with a cookie consent banner. You can choose
              to accept or reject non-essential cookies (such as Google Analytics). Essential cookies and strictly
              necessary storage will still function.
            </p>
            <p className="text-muted-foreground">
              You can also manage or withdraw your consent at any time by adjusting the settings in your web
              browser. Most browsers allow you to block or delete cookies. Please note that if you disable essential
              cookies or clear your localStorage, certain features of our website (such as the lead intake form and
              booking process) may not function properly.
            </p>
            <p className="text-muted-foreground">
              To learn more about how to manage cookies in your specific browser, please consult the help
              documentation provided by your browser manufacturer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">6. Changes to this Policy</h2>
            <p className="text-muted-foreground">
              We may update this Cookie Policy from time to time to reflect changes in our technology or legal
              requirements. We will post the updated policy on our website with a revised &quot;Last Updated&quot;
              date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">7. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions or concerns about our use of cookies or this policy, please contact our
              Privacy Officer:
            </p>
            <ul className="list-none space-y-1 text-muted-foreground">
              <li>
                <strong className="text-foreground">Privacy Officer:</strong> Alban Jerome, Principal
              </li>
              <li>
                <strong className="text-foreground">Organization:</strong> 1001486026 Ontario Inc. operating as
                Virtus-Strategy
              </li>
              <li>
                <strong className="text-foreground">Email:</strong> contact@virtus-strategy.com
              </li>
              <li>
                <strong className="text-foreground">Mailing Address:</strong> 2 Eva Road, Etobicoke, ON, Canada
              </li>
            </ul>
          </section>
        </article>
      </Container>
    </Section>
  );
}
