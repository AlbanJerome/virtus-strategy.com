export type FaqEntry = {
  question: string;
  answer: string;
};

export type FaqGroup = {
  category: string;
  items: FaqEntry[];
};

export const VIRTUS_FAQ_GROUPS: FaqGroup[] = [
  {
    category: "General",
    items: [
      {
        question: "What exactly is Client Intake Infrastructure?",
        answer:
          "It is the front door to your firm. It is the combination of your web presence, the data capture mechanism, and the routing logic that turns a website visitor into a qualified, booked client. We build a secure, automated boundary between the public and your practice.",
      },
      {
        question: "Is this just a fancy contact form?",
        answer:
          "No. A contact form passively collects an email address and leaves you to sort out the rest. Intake infrastructure actively qualifies the prospect, captures necessary compliance data (like KYC), and routes them directly to the right partner's calendar.",
      },
    ],
  },
  {
    category: "Technology & AI",
    items: [
      {
        question: "How is this different from the AI chatbots I see on other websites?",
        answer:
          "Most chatbots use generic Large Language Models that generate unscripted answers and can hallucinate. We build deterministic systems using Sandboxed AI. The AI is strictly confined to extracting data. Hard-coded logic makes all the qualification and routing decisions.",
      },
      {
        question: 'What does "Deterministic Routing" mean?',
        answer:
          "It means the path a prospect takes is based on strict, predictable rules. If a prospect answers a specific way, the system routes them to a specific calendar or document request. There is no guessing, which means you get a reliable, auditable trail.",
      },
      {
        question: "Will the AI ever give legal, financial, or medical advice?",
        answer:
          "Never. The system is designed to ask specific qualifying questions and capture contact information. It does not answer complex queries or provide advice.",
      },
    ],
  },
  {
    category: "Security & Compliance",
    items: [
      {
        question: "Is this safe for highly regulated industries like law or healthcare?",
        answer:
          "Yes. We do not send confidential client data, medical information, or legal details to a public LLM. The system is designed to capture basic demographic and operational data before a human touches it, ensuring compliance with regulations like PIPEDA and PHIPA.",
      },
      {
        question: "Where is our data stored?",
        answer:
          "All lead data is stored in an encrypted database hosted in Canada (we use Supabase). We can also configure the system to push data directly into your existing, secure CRM.",
      },
    ],
  },
  {
    category: "Process & Engagement",
    items: [
      {
        question: "How much does an engagement cost?",
        answer:
          "Because every firm's compliance requirements and intake volume are different, we do not use a one-size-fits-all price. We map your specific operational bottleneck during the initial diagnostic and provide a fixed-scope proposal based on the exact infrastructure required.",
      },
      {
        question: "Do we need to rebuild our website first?",
        answer:
          "No. We can layer the intake infrastructure onto your existing site. However, if your current site lacks the institutional authority required to convert high-value clients, we can rebuild the frontend as part of the sprint.",
      },
      {
        question: "What happens during the 3-week sprint?",
        answer:
          "Week 1 is the Governance and Workflow Diagnostic. Week 2 is the Build. Weeks 2 and 3 include a rigorous Stress Test to ensure compliance. Week 3 ends with the Handover, where we train your team and transfer all documentation.",
      },
      {
        question: "What happens after the sprint?",
        answer:
          "You own the system. We hand over the keys, the documentation, and the standard operating procedures. You can run it yourself or engage us for future advisory work.",
      },
    ],
  },
  {
    category: "Verticals & Fit",
    items: [
      {
        question: "Does this work for a solo practitioner, or is it only for large firms?",
        answer:
          "It is designed for boutique firms and independent advisors where one client is high value and the administrative burden is high. Solo practitioners benefit heavily because it gives them the operational leverage of a larger firm.",
      },
      {
        question: "Does the system integrate with our current CRM?",
        answer:
          "The system is built to capture leads into a secure database and push them to your calendar. We can push leads to standard CRMs via webhooks. Deep custom API development is outside the scope of the fixed sprint, but we build the system so your team can easily export the data.",
      },
    ],
  },
];
