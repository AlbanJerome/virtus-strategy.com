import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Seo } from "@/components/seo";

export function Terms() {
  return (
    <Section>
      <Seo
        title="Terms | Virtus-Strategy"
        description="Terms of Service for Virtus-Strategy (1001486026 Ontario Inc.): conditions for using our website and services."
        url="/terms"
      />
      <Container>
        <article className="mx-auto max-w-3xl space-y-6 text-foreground">
          <header className="space-y-2">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Terms of Service</h1>
            <p className="text-sm text-muted-foreground">Last Updated: January 1, 2026</p>
          </header>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the 1001486026
              Ontario Inc. operating as Virtus-Strategy (&quot;Virtus-Strategy&quot;, &quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;) website (virtus-strategy.com) and any related digital
              properties. By
              accessing or using our website, you agree to be bound by these Terms. If you do not agree,
              please do not use our site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">2. Services</h2>
            <p className="text-muted-foreground">
              1001486026 Ontario Inc. operating as Virtus-Strategy provides secure client intake
              infrastructure and advisory services to
              regulated professional services firms. The specific scope, fees, and deliverables for any
              consulting engagement (such as the Intake & Risk Diagnostic or optional Implementation phase)
              will be defined in a
              separate written agreement, such as a Statement of Work (SOW) or Master Services Agreement
              (MSA). These Terms govern the use of this website only.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">3. No Professional Advice</h2>
            <p className="text-muted-foreground">
              While our systems are built to support compliance workflows, the information on this website
              and the services provided by Virtus-Strategy do not constitute legal, regulatory, financial,
              or medical advice. You are solely responsible for ensuring that your firm&apos;s operations
              and the systems we build meet the specific requirements of your regulatory body.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">4. Fees and Payment</h2>
            <p className="text-muted-foreground">
              Fees for the Intake & Risk Diagnostic and any optional implementation services will be detailed
              in the governing Statement of Work (SOW). Scope, payment schedules, and any applicable taxes
              will be set out in that agreement. Terms are fixed once the governing SOW is signed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">5. Intellectual Property</h2>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Our Website:</strong> The content, design, and code on
              this website are owned by 1001486026 Ontario Inc. and are protected by Canadian and
              international
              copyright laws.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">The Diagnostic and Implementation Deliverables:</strong> Upon
              full payment, you
              will own the custom web assets and the specific intake routing logic built for your firm.
              However, Virtus-Strategy retains all rights to our underlying methodology, frameworks, and the
              proprietary &quot;Sandboxed AI and Deterministic Routing&quot; architecture. You may not resell
              or distribute our underlying framework as your own product.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">6. Client Responsibilities</h2>
            <p className="text-muted-foreground">
              To use our services, you agree to provide accurate, current, and complete information during
              the lead qualification process. You agree not to use this website or our systems for any
              unlawful purpose or in violation of any applicable privacy laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">7. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, 1001486026 Ontario Inc. shall not be liable for any
              indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
              whether incurred directly or indirectly, or any loss of data, use, goodwill, or other
              intangible losses resulting from (a) your use or inability to use the website; or (b) any
              conduct or content of any third party on the website.
            </p>
            <p className="text-muted-foreground">
              In no event shall our aggregate liability for any claims related to the use of the website
              exceed one hundred Canadian dollars ($100 CAD). Liability for consulting engagements is strictly
              governed by the limitation of liability clause in the specific SOW.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">8. Indemnification</h2>
            <p className="text-muted-foreground">
              You agree to indemnify and hold harmless 1001486026 Ontario Inc. operating as Virtus-Strategy,
              its principal, and its contractors
              from any claims, damages, or expenses (including legal fees) arising out of your use of the
              website or your violation of these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">9. Third-Party Links and Tools</h2>
            <p className="text-muted-foreground">
              Our site may contain links to or embeds from third-party services (such as Cal.com or Supabase).
              We are not responsible for the content, privacy policies, or practices of these third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">10. Termination</h2>
            <p className="text-muted-foreground">
              We reserve the right to terminate or suspend your access to our website, without prior notice,
              for any reason, including if we believe you have violated these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">11. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with the laws of the Province of
              Ontario and the federal laws of Canada applicable therein, without regard to its conflict of law
              provisions. You agree to submit to the exclusive jurisdiction of the courts located in Toronto,
              Ontario.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">12. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms, please contact:
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
