import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Seo } from "@/components/seo";

export function Privacy() {
  return (
    <Section>
      <Seo
        title="Privacy | Virtus-Strategy"
        description="Privacy Policy for Virtus-Strategy (1001486026 Ontario Inc.): how we collect, use, and protect your personal information."
        url="/privacy"
      />
      <Container>
        <article className="mx-auto max-w-3xl space-y-6 text-foreground">
          <header className="space-y-2">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Effective Date: Jan 01, 2026</p>
            <p className="text-sm text-muted-foreground">Last Updated: Jan 01, 2026</p>
          </header>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">1. Introduction and Scope</h2>
            <p className="text-muted-foreground">
              1001486026 Ontario Inc. operating as Virtus-Strategy (&quot;Virtus-Strategy&quot;, &quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy and confidentiality of
              personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website or engage our professional services.
            </p>
            <p className="text-muted-foreground">
              This policy is governed by the Personal Information Protection and Electronic Documents Act
              (PIPEDA) and applicable provincial privacy laws in Ontario, Canada. It applies to website
              visitors, individuals who submit inquiries through our lead capture forms, and clients who engage
              us for advisory and implementation services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">2. Who We Are</h2>
            <ul className="list-none space-y-1 text-muted-foreground">
              <li>
                <strong className="text-foreground">Organization:</strong> 1001486026 Ontario Inc. operating as
                Virtus-Strategy
              </li>
              <li>
                <strong className="text-foreground">Privacy Officer:</strong> Alban Jerome, Principal
              </li>
              <li>
                <strong className="text-foreground">Contact Email:</strong> contact@virtus-strategy.com
              </li>
              <li>
                <strong className="text-foreground">Mailing Address:</strong> 2 Eva Road, Etobicoke, ON, Canada
              </li>
            </ul>
            <p className="text-muted-foreground">
              Our Privacy Officer is responsible for compliance with this policy and for responding to your
              privacy related inquiries.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">3. What Information We Collect</h2>
            <p className="text-muted-foreground">We collect information in two primary ways:</p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Website and Lead Capture:</strong> When you interact with our
              website, book an Intake and Risk Review, or contact us, we collect personal information such as
              your name, email address, company name, job title, and the content of your communications. We use
              tools such as Zoho and Supabase to manage these inquiries and store lead data.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Client Data During Engagements:</strong> When we provide
              Operational Diagnostics, Intake Architecture, or System Implementation services, we process
              sensitive client data. This may include proprietary operational workflows, compliance
              documentation, and other information necessary for us to deliver our services. This data is stored
              securely in platforms including Supabase and Zoho.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">4. How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>To respond to your inquiries and schedule requested risk reviews.</li>
              <li>
                To deliver our advisory and implementation services, including mapping workflows and designing
                secure intake interfaces.
              </li>
              <li>
                To communicate with you regarding ongoing projects, updates, and administrative matters.
              </li>
              <li>To improve our website, services, and operational methodologies.</li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">5. Controlled AI Extraction and Data Processing</h2>
            <p className="text-muted-foreground">
              Virtus-Strategy utilizes &quot;Controlled AI Extraction&quot; and &quot;Rules-Based Controls&quot;
              within our secure intake architecture. We take the following steps to protect your data in this
              context:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong className="text-foreground">Data Isolation:</strong> Client data processed through our AI
                extraction tools is strictly isolated. It is used solely to perform the specific extraction tasks
                defined in your engagement.
              </li>
              <li>
                <strong className="text-foreground">No Public LLM Training:</strong> We do not use your client
                data to train public Large Language Models (LLMs). Your data is never used to improve public AI
                models.
              </li>
              <li>
                <strong className="text-foreground">Canadian Data Residency:</strong> We prioritize Canadian data
                residency. Where applicable, your data is hosted in secure Canadian data centres (for example,
                Montreal or ca-central-1).
              </li>
              <li>
                <strong className="text-foreground">Deterministic Routing:</strong> The AI systems we deploy
                perform specific tasks within strict operational constraints. They do not make qualification
                decisions; routing is governed by rules based controls to ensure traceable execution.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">6. Legal Basis and Consent</h2>
            <p className="text-muted-foreground">
              We collect, use, and disclose your personal information only with your consent, except where
              otherwise permitted or required by law. By using our website or engaging our services, you consent
              to the collection and use of your information as described in this policy.
            </p>
            <p className="text-muted-foreground">
              Where our engagement involves sensitive client data, we rely on the contractual agreements
              established in our Statement of Work and your explicit consent to process that data for the purposes
              of the engagement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">7. Disclosure of Information</h2>
            <p className="text-muted-foreground">
              We do not sell your personal information. We may share your information with third party service
              providers who assist us in operating our business and delivering our services. These providers are
              contractually obligated to protect your information and are restricted from using it for any other
              purpose.
            </p>
            <p className="text-muted-foreground">Our current third party service providers include:</p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong className="text-foreground">Cloudflare:</strong> For website security and performance
                optimization.
              </li>
              <li>
                <strong className="text-foreground">Website Analytics Providers:</strong> For measuring website
                traffic and usage.
              </li>
              <li>
                <strong className="text-foreground">Supabase:</strong> For secure database management and data
                storage.
              </li>
              <li>
                <strong className="text-foreground">Zoho:</strong> For email management, lead intake, and client
                communications.
              </li>
            </ul>
            <p className="text-muted-foreground">
              We may also disclose your information if required to do so by law, or in response to valid requests
              by public authorities (for example, to meet national security or law enforcement requirements).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">8. Data Retention and Security</h2>
            <p className="text-muted-foreground">
              We retain your personal information only for as long as necessary to fulfill the purposes for which
              it was collected, or as required by law. Client data is retained in accordance with the terms of the
              applicable Statement of Work.
            </p>
            <p className="text-muted-foreground">
              We use reasonable administrative, technical, and physical safeguards to protect your personal
              information against unauthorized access, loss, or alteration. These safeguards include secure data
              storage environments, access controls, and encrypted communications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">9. Your Rights under PIPEDA</h2>
            <p className="text-muted-foreground">
              Subject to applicable law, you have the following rights regarding your personal information:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong className="text-foreground">Access:</strong> You have the right to request access to the
                personal information we hold about you.
              </li>
              <li>
                <strong className="text-foreground">Correction:</strong> You have the right to request that we
                correct any inaccuracies in your personal information.
              </li>
              <li>
                <strong className="text-foreground">Withdrawal of Consent:</strong> You may withdraw your consent
                to the collection, use, or disclosure of your personal information at any time, subject to legal or
                contractual restrictions and reasonable notice. If you withdraw your consent, we may be unable to
                provide certain services to you.
              </li>
            </ul>
            <p className="text-muted-foreground">
              To exercise these rights, please contact our Privacy Officer using the contact information provided
              in Section 2.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">10. Complaints and Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions, concerns, or complaints about this Privacy Policy or our handling of your
              personal information, please contact our Privacy Officer. We will investigate and respond to your
              inquiry in a timely manner.
            </p>
            <p className="text-muted-foreground">
              If you are not satisfied with our response, you have the right to contact the Office of the Privacy
              Commissioner of Canada or the Information and Privacy Commissioner of Ontario.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">11. Changes to this Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal
              requirements. We will post the updated policy on our website with a revised &quot;Last Updated&quot;
              date. We encourage you to review this policy periodically.
            </p>
          </section>
        </article>
      </Container>
    </Section>
  );
}
