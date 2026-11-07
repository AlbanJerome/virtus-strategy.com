export type LeadVertical =
  | "Wealth/Insurance"
  | "Legal"
  | "Accounting/Tax"
  | "Healthcare";

export type LeadBottleneck =
  | "Manual data entry"
  | "Compliance/KYC risk"
  | "Chasing documents"
  | "Too many unqualified leads";

export type LeadSize = "1-5" | "6-20" | "20+";

export type LeadTimeline = "Next 30 days" | "This quarter" | "Just exploring";

export type LeadStatus = "HOT" | "STANDARD";

export type LeadPayload = {
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  phone: string;
  vertical: LeadVertical;
  bottleneck: LeadBottleneck;
  size: LeadSize;
  timeline: LeadTimeline;
  status: LeadStatus;
};

export type QualificationStep =
  | "greeting"
  | "vertical"
  | "bottleneck"
  | "size"
  | "timeline"
  | "capture"
  | "handover"
  | "browsing";

export function calculateLeadStatus(
  timeline: LeadTimeline,
  size: LeadSize,
  bottleneck: LeadBottleneck
): LeadStatus {
  let score = 0;
  if (timeline === "Next 30 days") score += 3;
  if (size === "6-20" || size === "20+") score += 3;
  if (bottleneck === "Compliance/KYC risk" || bottleneck === "Chasing documents") {
    score += 2;
  }
  return score >= 6 ? "HOT" : "STANDARD";
}

export const TYPING_DELAY_MS = 900;

export const SCRIPT = {
  greeting:
    "Hi, I'm the Virtus digital receptionist. I can help map where your intake process is leaking. Mind if I ask a few quick questions?",
  vertical: "First, which best describes your firm?",
  bottleneck: "What is your biggest front-door bottleneck right now?",
  size: "How many partners or advisors are in your firm?",
  timeline:
    "Are you looking to install a system in the next 30 days, this quarter, or just exploring?",
  capture:
    "Got it. What's the best email and phone number to reach you?",
  captureCompany: "And what is the name of your firm?",
  handover:
    "Thanks! Based on that, I'm routing this straight to Alban. You can grab a time on his calendar right here:",
  browsing:
    "No problem. When you're ready to talk intake, we're here. Feel free to open this chat again anytime.",
} as const;
