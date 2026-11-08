import { RIPLEY_FAQ_GROUPS, type FaqEntry } from "@/lib/virtus-faq-data";

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
  | "faq_categories"
  | "faq_questions"
  | "faq_followup"
  | "vertical"
  | "bottleneck"
  | "size"
  | "timeline"
  | "capture"
  | "handover"
  | "browsing";

export const WIDGET_FAQ_CATEGORY_BUTTONS = RIPLEY_FAQ_GROUPS.map((group) => ({
  buttonLabel: group.category,
  groupCategory: group.category,
}));

export function getFaqItemsForGroup(groupCategory: string): FaqEntry[] {
  return RIPLEY_FAQ_GROUPS.find((group) => group.category === groupCategory)?.questions ?? [];
}

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

const CAPTURE_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CAPTURE_PHONE_REGEX = /^\+?[0-9\s\-()]{7,15}$/;

export type CaptureContactFieldErrors = {
  email?: string;
  phone?: string;
};

function countPhoneDigits(phone: string): number {
  return (phone.match(/\d/g) ?? []).length;
}

/** Strip characters that are not valid in a phone field (digits, +, spaces, (), -). */
export function sanitizePhoneInput(value: string): string {
  return value.replace(/[^\d+()\-\s]/g, "").slice(0, 20);
}

export function getCaptureEmailFieldError(
  email: string,
  options?: { showWhenEmpty?: boolean }
): string | undefined {
  const trimmed = email.trim();
  if (!trimmed) {
    return options?.showWhenEmpty ? "Please enter a valid email address." : undefined;
  }
  if (!CAPTURE_EMAIL_REGEX.test(trimmed)) {
    return "Please enter a valid email address.";
  }
  return undefined;
}

export function getCapturePhoneFieldError(
  phone: string,
  options?: { showWhenEmpty?: boolean }
): string | undefined {
  const trimmed = phone.trim();
  if (!trimmed) {
    return options?.showWhenEmpty ? "Please enter a valid phone number." : undefined;
  }
  if (!CAPTURE_PHONE_REGEX.test(trimmed) || countPhoneDigits(trimmed) < 10) {
    return "Please enter a valid phone number.";
  }
  return undefined;
}

export function validateCaptureContact(
  email: string,
  phone: string
): CaptureContactFieldErrors {
  const errors: CaptureContactFieldErrors = {};
  const emailError = getCaptureEmailFieldError(email, { showWhenEmpty: true });
  const phoneError = getCapturePhoneFieldError(phone, { showWhenEmpty: true });
  if (emailError) errors.email = emailError;
  if (phoneError) errors.phone = phoneError;
  return errors;
}

export const RIPLEY_QUALIFIED_STORAGE_KEY = "ripley_qualified";

export const RIPLEY_NAME_STORAGE_KEY = "ripley_name";

export const RIPLEY_LEAD_CONTEXT_STORAGE_KEY = "ripley_lead_context";

export const RIPLEY_LEAD_DATA_STORAGE_KEY = "ripley_lead_data";

export type StoredLeadContext = Pick<
  LeadPayload,
  "vertical" | "bottleneck" | "size" | "timeline"
>;

export type StoredLeadData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
};

export const SCRIPT = {
  greeting:
    "Welcome to Virtus-Strategy. I'm Ripley. We help firms review and secure their client intake workflows. Shall we start a brief assessment of your operational needs?",
  returningGreeting:
    "Welcome back. Do you need to book a follow-up, update your firm details, or ask a question?",
  bookMeeting:
    "I can help with that. To ensure we connect you with the right review session, mind if I ask a few quick questions first?",
  faqAsk: "Of course. What would you like to know about?",
  faqQuestions: "Here are the questions I can answer:",
  faqFollowUp:
    "Does that answer your question? Or would you like to start the intake process?",
  vertical: "First, which best describes your firm?",
  bottleneck: "What is the biggest bottleneck in your client intake layer right now?",
  size: "How many partners or advisors are in your firm?",
  timeline:
    "Are you looking to move forward in the next 30 days, this quarter, or just exploring?",
  capture:
    "Got it. What's the best email and phone number to reach you?",
  captureCompany: "And what is the name of your firm?",
  handover:
    "Thanks! Based on that, I'm routing this straight to Alban. You can grab a time on his calendar right here:",
  browsing:
    "No problem. When you're ready to talk intake, we're here. Feel free to open this chat again anytime.",
} as const;

export function formatReturningGreeting(firstName: string): string {
  return `Welcome back, ${firstName}. Do you need to book a follow-up, update your firm details, or ask a question?`;
}
