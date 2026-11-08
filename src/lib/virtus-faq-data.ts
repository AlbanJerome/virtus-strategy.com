export type FaqEntry = {
  q: string;
  a: string;
};

export type FaqGroup = {
  category: string;
  questions: FaqEntry[];
};

const FAQ_BY_QUESTION: Record<string, FaqEntry> = {
  "What exactly is Client Intake Infrastructure?": {
    q: "What exactly is Client Intake Infrastructure?",
    a: "It is the client intake layer for your firm: your web presence, the data capture mechanism, and the routing logic that turns a website visitor into a qualified, booked client. We build a secure, automated boundary between the public and your practice.",
  },
  "Is this just a fancy contact form?": {
    q: "Is this just a fancy contact form?",
    a: "No. A contact form passively collects an email address and leaves you to sort out the rest. Intake infrastructure actively qualifies the prospect, captures necessary compliance data (like KYC), and routes them directly to the right partner's calendar.",
  },
  "What is Sandboxed AI in client intake?": {
    q: "What is Sandboxed AI in client intake?",
    a: "Sandboxed AI confines the language model strictly to data extraction. It parses intent and contact information without making qualification decisions, preventing hallucinations and compliance risks.",
  },
  "How does deterministic routing work?": {
    q: "How does deterministic routing work?",
    a: "Deterministic routing uses hard-coded logic to process extracted data against your firm's regulatory criteria. It ensures every lead is routed securely and consistently, eliminating guesswork.",
  },
  "How is this different from the AI chatbots I see on other websites?": {
    q: "How is this different from the AI chatbots I see on other websites?",
    a: "Most chatbots use generic Large Language Models that generate unscripted answers and can hallucinate. We build deterministic systems using Sandboxed AI. The AI is strictly confined to extracting data. Hard-coded logic makes all the qualification and routing decisions.",
  },
  "Will the AI ever give legal, financial, or medical advice?": {
    q: "Will the AI ever give legal, financial, or medical advice?",
    a: "Never. The system is designed to ask specific qualifying questions and capture contact information. It does not answer complex queries or provide advice.",
  },
  "Is this safe for highly regulated industries like law or healthcare?": {
    q: "Is this safe for highly regulated industries like law or healthcare?",
    a: "Yes. We do not send confidential client data, medical information, or legal details to a public LLM. The system is designed to capture basic demographic and operational data before a human touches it, ensuring compliance with regulations like PIPEDA and PHIPA.",
  },
  "Where is our data stored?": {
    q: "Where is our data stored?",
    a: "All lead data is stored in an encrypted database hosted in Canada (we use Supabase). We can also configure the system to push data directly into your existing, secure CRM.",
  },
  "How does this handle legal KYC and conflict checks?": {
    q: "How does this handle legal KYC and conflict checks?",
    a: "The deterministic routing engine can be programmed to ask standard KYC or conflict check questions based on your firm's specific rules. If a prospect fails the check, they are automatically filtered out before reaching a partner.",
  },
  "Does this work for a solo practitioner, or is it only for large firms?": {
    q: "Does this work for a solo practitioner, or is it only for large firms?",
    a: "It is designed for boutique firms and independent advisors where one client is high value and the administrative burden is high. Solo practitioners benefit heavily because it gives them the operational leverage of a larger firm.",
  },
  "How much does an engagement cost?": {
    q: "How much does an engagement cost?",
    a: "Engagements begin with a fixed-scope Diagnostic. Pricing for the subsequent Implementation phase (if required) is determined based on the complexity of the workflow mapped during the diagnostic.",
  },
  "Do we need to rebuild our website first?": {
    q: "Do we need to rebuild our website first?",
    a: "No. We can layer the intake infrastructure onto your existing site. However, if your current site lacks the institutional authority required to convert high value clients, we can rebuild the frontend as part of the sprint.",
  },
  "How is the engagement structured?": {
    q: "How is the engagement structured?",
    a: "We begin with a fixed-scope Diagnostic: workflow mapping, compliance risk assessment, and a board-ready capacity recovery model. Strategy and optional Implementation follow only when you choose to proceed, culminating in full handover and documentation if you build.",
  },
  "What happens during the engagement?": {
    q: "What happens during the engagement?",
    a: "Phase 1 is the Workflow Diagnostic. Phase 2 defines Intake Architecture and rules-based controls. Phase 3 is an optional Controlled Build of the secure intake layer. Phase 4 is System Handover with full IP transfer and operating procedures.",
  },
  "What happens after implementation?": {
    q: "What happens after implementation?",
    a: "You own the system. We hand over the keys, the documentation, and the standard operating procedures. You can run it yourself or engage us for future advisory work.",
  },
  "How does this help accounting firms and SR&ED practices?": {
    q: "How does this help accounting firms and SR&ED practices?",
    a: "For accounting and SR&ED firms, the system automates the document chase. It screens clients on eligibility criteria and collects necessary baseline documents before a senior accountant or consultant has to step in.",
  },
  "How does this help wealth management and insurance advisors?": {
    q: "How does this help wealth management and insurance advisors?",
    a: "It captures and pre-qualifies high net worth leads based on your asset or policy thresholds. It routes qualified prospects directly to an advisor's calendar, freeing up capacity currently lost to manual onboarding.",
  },
  "Does the system integrate with our current CRM?": {
    q: "Does the system integrate with our current CRM?",
    a: "The system is built to capture leads into a secure database and push them to your calendar. We can push leads to standard CRMs via webhooks. Deep custom API development is outside the scope of the fixed sprint, but we build the system so your team can easily export the data.",
  },
};

function pickFaq(questions: string[]): FaqEntry[] {
  return questions.map((q) => FAQ_BY_QUESTION[q]);
}

export const HOME_FAQ_GROUPS: FaqGroup[] = [
  {
    category: "General",
    questions: pickFaq([
      "What exactly is Client Intake Infrastructure?",
      "Is this just a fancy contact form?",
    ]),
  },
  {
    category: "Technology & AI",
    questions: pickFaq([
      "What is Sandboxed AI in client intake?",
      "How does deterministic routing work?",
      "How is this different from the AI chatbots I see on other websites?",
      "Will the AI ever give legal, financial, or medical advice?",
    ]),
  },
  {
    category: "Security & Compliance",
    questions: pickFaq([
      "Is this safe for highly regulated industries like law or healthcare?",
      "Where is our data stored?",
      "How does this handle legal KYC and conflict checks?",
    ]),
  },
  {
    category: "Verticals & Fit",
    questions: pickFaq([
      "Does this work for a solo practitioner, or is it only for large firms?",
    ]),
  },
];

export const SERVICES_FAQ_GROUPS: FaqGroup[] = [
  {
    category: "Process & Engagement",
    questions: pickFaq([
      "How much does an engagement cost?",
      "Do we need to rebuild our website first?",
      "How is the engagement structured?",
      "What happens during the engagement?",
      "What happens after implementation?",
    ]),
  },
  {
    category: "Verticals & Fit",
    questions: pickFaq([
      "How does this help accounting firms and SR&ED practices?",
      "How does this help wealth management and insurance advisors?",
      "Does the system integrate with our current CRM?",
    ]),
  },
];

function mergeFaqGroups(a: FaqGroup[], b: FaqGroup[]): FaqGroup[] {
  const byCategory = new Map<string, FaqEntry[]>();

  for (const group of [...a, ...b]) {
    const existing = byCategory.get(group.category) ?? [];
    byCategory.set(group.category, [...existing, ...group.questions]);
  }

  return Array.from(byCategory.entries(), ([category, questions]) => ({
    category,
    questions,
  }));
}

/** Full site FAQ catalogue (e.g. JSON-LD). */
export const VIRTUS_FAQ_GROUPS = mergeFaqGroups(HOME_FAQ_GROUPS, SERVICES_FAQ_GROUPS);

/** Curated FAQ for the Ripley intake widget (short list, common objections). */
export const RIPLEY_FAQ_GROUPS: FaqGroup[] = [
  {
    category: "Security & Trust",
    questions: [
      {
        q: "Is this safe for regulated industries?",
        a: "Yes. We do not send confidential data to public LLMs. We use Sandboxed AI to extract data and Deterministic Routing for compliance, adhering to PIPEDA and PHIPA.",
      },
      {
        q: "Where is our data stored?",
        a: "All lead data is stored in an encrypted database hosted in Canada (Supabase).",
      },
    ],
  },
  {
    category: "Process & Pricing",
    questions: [
      {
        q: "How much does an engagement cost?",
        a: "Engagements begin with a fixed-scope Diagnostic. Pricing for the subsequent Implementation phase (if required) is determined based on the complexity of the workflow mapped during the diagnostic.",
      },
      {
        q: "How is the engagement structured?",
        a: "We begin with advisory diagnostic work, then strategy and optional implementation. Timing depends on workflow complexity mapped during the diagnostic.",
      },
    ],
  },
  {
    category: "Technology",
    questions: [
      {
        q: "How is this different from a generic chatbot?",
        a: "Generic tools use LLMs that guess. Our system uses Sandboxed AI to extract data, and hard-coded Deterministic Routing to qualify and route the lead securely.",
      },
    ],
  },
];
