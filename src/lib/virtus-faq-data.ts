export type FaqEntry = {
  q: string;
  a: string;
};

export type FaqGroup = {
  category: string;
  questions: FaqEntry[];
};

export const VIRTUS_FAQ_GROUPS: FaqGroup[] = [
  {
    category: "General",
    questions: [
      {
        q: "What exactly is Client Intake Infrastructure?",
        a: "It is the client intake layer for your firm: your web presence, the data capture mechanism, and the routing logic that turns a website visitor into a qualified, booked client. We build a secure, automated boundary between the public and your practice.",
      },
      {
        q: "Is this just a fancy contact form?",
        a: "No. A contact form passively collects an email address and leaves you to sort out the rest. Intake infrastructure actively qualifies the prospect, captures necessary compliance data (like KYC), and routes them directly to the right partner's calendar.",
      },
    ],
  },
  {
    category: "Technology & AI",
    questions: [
      {
        q: "What is Sandboxed AI in client intake?",
        a: "Sandboxed AI confines the language model strictly to data extraction. It parses intent and contact information without making qualification decisions, preventing hallucinations and compliance risks.",
      },
      {
        q: "How does deterministic routing work?",
        a: "Deterministic routing uses hard-coded logic to process extracted data against your firm's regulatory criteria. It ensures every lead is routed securely and consistently, eliminating guesswork.",
      },
      {
        q: "How is this different from the AI chatbots I see on other websites?",
        a: "Most chatbots use generic Large Language Models that generate unscripted answers and can hallucinate. We build deterministic systems using Sandboxed AI. The AI is strictly confined to extracting data. Hard-coded logic makes all the qualification and routing decisions.",
      },
      {
        q: "Will the AI ever give legal, financial, or medical advice?",
        a: "Never. The system is designed to ask specific qualifying questions and capture contact information. It does not answer complex queries or provide advice.",
      },
      {
        q: "Does this system improve lead quality?",
        a: "Yes. By filtering out unqualified enquiries before a human touches them, your senior partners only spend time on high-value prospects who meet your baseline criteria.",
      },
    ],
  },
  {
    category: "Security & Compliance",
    questions: [
      {
        q: "Is this safe for highly regulated industries like law or healthcare?",
        a: "Yes. We do not send confidential client data, medical information, or legal details to a public LLM. The system is designed to capture basic demographic and operational data before a human touches it, ensuring compliance with regulations like PIPEDA and PHIPA.",
      },
      {
        q: "Where is our data stored?",
        a: "All lead data is stored in an encrypted database hosted in Canada (we use Supabase). We can also configure the system to push data directly into your existing, secure CRM.",
      },
      {
        q: "How does this handle legal KYC and conflict checks?",
        a: "The deterministic routing engine can be programmed to ask standard KYC or conflict check questions based on your firm's specific rules. If a prospect fails the check, they are automatically filtered out before reaching a partner.",
      },
    ],
  },
  {
    category: "Process & Engagement",
    questions: [
      {
        q: "How much does an engagement cost?",
        a: "Because every firm's compliance requirements and intake volume are different, we do not use a one size fits all price. We map your specific operational bottleneck during the initial diagnostic and provide a fixed scope proposal based on the exact infrastructure required.",
      },
      {
        q: "Do we need to rebuild our website first?",
        a: "No. We can layer the intake infrastructure onto your existing site. However, if your current site lacks the institutional authority required to convert high value clients, we can rebuild the frontend as part of the sprint.",
      },
      {
        q: "How long does a Virtus Strategy intake sprint take?",
        a: "The sprint is a three week engagement. Weeks one and two are dedicated to diagnostic and content preparation, followed by a one week technical build and compliance stress test.",
      },
      {
        q: "What happens during the 3 week sprint?",
        a: "Week 1 is the Governance and Workflow Diagnostic. Week 2 is dedicated to content preparation and system architecture. Week 3 is the technical build, rigorous compliance stress test, and final handover.",
      },
      {
        q: "What happens after the sprint?",
        a: "You own the system. We hand over the keys, the documentation, and the standard operating procedures. You can run it yourself or engage us for future advisory work.",
      },
    ],
  },
  {
    category: "Verticals & Fit",
    questions: [
      {
        q: "Does this work for a solo practitioner, or is it only for large firms?",
        a: "It is designed for boutique firms and independent advisors where one client is high value and the administrative burden is high. Solo practitioners benefit heavily because it gives them the operational leverage of a larger firm.",
      },
      {
        q: "How does this help accounting firms and SR&ED practices?",
        a: "For accounting and SR&ED firms, the system automates the document chase. It screens clients on eligibility criteria and collects necessary baseline documents before a senior accountant or consultant has to step in.",
      },
      {
        q: "How does this help wealth management and insurance advisors?",
        a: "It captures and pre-qualifies high net worth leads based on your asset or policy thresholds. It routes qualified prospects directly to an advisor's calendar, freeing up capacity currently lost to manual onboarding.",
      },
      {
        q: "Does the system integrate with our current CRM?",
        a: "The system is built to capture leads into a secure database and push them to your calendar. We can push leads to standard CRMs via webhooks. Deep custom API development is outside the scope of the fixed sprint, but we build the system so your team can easily export the data.",
      },
    ],
  },
];
