import { MessageCircle, X } from "lucide-react";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";

import { BookingEmbed } from "@/components/booking-embed";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  calculateLeadStatus,
  SCRIPT,
  TYPING_DELAY_MS,
  type LeadBottleneck,
  type LeadPayload,
  type LeadSize,
  type LeadTimeline,
  type LeadVertical,
  type QualificationStep,
} from "@/lib/lead-qualification";
import { INTAKE_WIDGET_OPEN_EVENT } from "@/lib/open-intake-widget";
import { submitLead } from "@/lib/submit-lead";
import { cn } from "@/lib/utils";

type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
};

type DraftLead = {
  vertical?: LeadVertical;
  bottleneck?: LeadBottleneck;
  size?: LeadSize;
  timeline?: LeadTimeline;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
};

const initialDraft: DraftLead = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
};

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 rounded-lg bg-secondary px-3 py-2">
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:0ms]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:150ms]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:300ms]" />
    </div>
  );
}

export function LeadQualificationWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<QualificationStep | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState<DraftLead>(initialDraft);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const messageId = useRef(0);

  const nextId = () => {
    messageId.current += 1;
    return `msg-${messageId.current}`;
  };

  const scrollToEnd = useCallback(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToEnd();
  }, [messages, typing, step, scrollToEnd]);

  const pushBot = useCallback((text: string, onDone?: () => void) => {
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: nextId(), role: "bot", text }]);
      onDone?.();
    }, TYPING_DELAY_MS);
  }, []);

  const pushUser = (text: string) => {
    setMessages((prev) => [...prev, { id: nextId(), role: "user", text }]);
  };

  const startFlow = useCallback(() => {
    setOpen(true);
    setStep("greeting");
    setMessages([]);
    setDraft(initialDraft);
    setSubmitError(null);
    pushBot(SCRIPT.greeting);
  }, [pushBot]);

  useEffect(() => {
    const onOpenIntakeWidget = () => {
      startFlow();
    };
    window.addEventListener(INTAKE_WIDGET_OPEN_EVENT, onOpenIntakeWidget);
    return () => window.removeEventListener(INTAKE_WIDGET_OPEN_EVENT, onOpenIntakeWidget);
  }, [startFlow]);

  const goToStep = (next: QualificationStep, botText: string) => {
    setStep(next);
    pushBot(botText);
  };

  const onGreetingYes = () => {
    pushUser("Yes, let's go");
    goToStep("vertical", SCRIPT.vertical);
  };

  const onGreetingBrowse = () => {
    pushUser("Just browsing");
    setStep("browsing");
    pushBot(SCRIPT.browsing);
  };

  const onVertical = (value: LeadVertical) => {
    pushUser(value);
    setDraft((d) => ({ ...d, vertical: value }));
    goToStep("bottleneck", SCRIPT.bottleneck);
  };

  const onBottleneck = (value: LeadBottleneck) => {
    pushUser(value);
    setDraft((d) => ({ ...d, bottleneck: value }));
    goToStep("size", SCRIPT.size);
  };

  const onSize = (value: LeadSize) => {
    pushUser(value);
    setDraft((d) => ({ ...d, size: value }));
    goToStep("timeline", SCRIPT.timeline);
  };

  const onTimeline = (value: LeadTimeline) => {
    pushUser(value);
    setDraft((d) => ({ ...d, timeline: value }));
    setStep("capture");
    pushBot(SCRIPT.capture, () => {
      pushBot(SCRIPT.captureCompany);
    });
  };

  const onCaptureSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitError(null);

    const { vertical, bottleneck, size, timeline } = draft;
    if (!vertical || !bottleneck || !size || !timeline) return;

    const firstName = draft.firstName.trim();
    const lastName = draft.lastName.trim();
    const company = draft.company.trim();
    const email = draft.email.trim();
    const phone = draft.phone.trim();

    if (!firstName || !lastName || !company || !email || !phone) {
      setSubmitError("Please fill in all fields.");
      return;
    }

    pushUser(`${firstName} ${lastName} · ${company} · ${email} · ${phone}`);

    const status = calculateLeadStatus(timeline, size, bottleneck);
    const payload: LeadPayload = {
      first_name: firstName,
      last_name: lastName,
      company,
      email,
      phone,
      vertical,
      bottleneck,
      size,
      timeline,
      status,
    };

    setSubmitting(true);
    try {
      await submitLead(payload);
      setStep("handover");
      pushBot(SCRIPT.handover);
    } catch (err) {
      const code = err instanceof Error ? err.message : "submit-failed";
      if (code === "missing-supabase-config") {
        setSubmitError(
          "Lead capture is temporarily unavailable. Please email contact@virtus-strategy.com."
        );
      } else {
        setSubmitError("Something went wrong saving your details. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const showChoices = !typing && !submitting;

  const renderActions = () => {
    if (!showChoices || step === null) return null;

    switch (step) {
      case "greeting":
        return (
          <div className="flex flex-col gap-2">
            <Button type="button" size="sm" className="w-full justify-start" onClick={onGreetingYes}>
              Yes, let&apos;s go
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="w-full justify-start"
              onClick={onGreetingBrowse}
            >
              Just browsing
            </Button>
          </div>
        );
      case "vertical":
        return (
          <ChoiceGroup
            options={[
              "Wealth/Insurance",
              "Legal",
              "Accounting/Tax",
              "Healthcare",
            ]}
            onSelect={onVertical}
          />
        );
      case "bottleneck":
        return (
          <ChoiceGroup
            options={[
              "Manual data entry",
              "Compliance/KYC risk",
              "Chasing documents",
              "Too many unqualified leads",
            ]}
            onSelect={onBottleneck}
          />
        );
      case "size":
        return <ChoiceGroup options={["1-5", "6-20", "20+"]} onSelect={onSize} />;
      case "timeline":
        return (
          <ChoiceGroup
            options={["Next 30 days", "This quarter", "Just exploring"]}
            onSelect={onTimeline}
          />
        );
      case "capture":
        return (
          <form onSubmit={onCaptureSubmit} className="space-y-3">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div className="space-y-1">
                <Label htmlFor="lq-first" className="text-xs">
                  First name
                </Label>
                <Input
                  id="lq-first"
                  value={draft.firstName}
                  onChange={(e) => setDraft((d) => ({ ...d, firstName: e.target.value }))}
                  autoComplete="given-name"
                  className="h-9 text-sm"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="lq-last" className="text-xs">
                  Last name
                </Label>
                <Input
                  id="lq-last"
                  value={draft.lastName}
                  onChange={(e) => setDraft((prev) => ({ ...prev, lastName: e.target.value }))}
                  autoComplete="family-name"
                  className="h-9 text-sm"
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="lq-company" className="text-xs">
                Company name
              </Label>
              <Input
                id="lq-company"
                value={draft.company}
                onChange={(e) => setDraft((d) => ({ ...d, company: e.target.value }))}
                autoComplete="organization"
                className="h-9 text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="lq-email" className="text-xs">
                Email
              </Label>
              <Input
                id="lq-email"
                type="email"
                value={draft.email}
                onChange={(e) => setDraft((d) => ({ ...d, email: e.target.value }))}
                autoComplete="email"
                className="h-9 text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="lq-phone" className="text-xs">
                Phone
              </Label>
              <Input
                id="lq-phone"
                type="tel"
                value={draft.phone}
                onChange={(e) => setDraft((d) => ({ ...d, phone: e.target.value }))}
                autoComplete="tel"
                className="h-9 text-sm"
              />
            </div>
            {submitError && <p className="text-xs text-destructive">{submitError}</p>}
            <Button type="submit" size="sm" className="w-full" disabled={submitting}>
              {submitting ? "Saving…" : "Submit"}
            </Button>
          </form>
        );
      case "handover": {
        const fullName = `${draft.firstName.trim()} ${draft.lastName.trim()}`.trim();
        return (
          <div className="[&>div]:rounded-md">
            <BookingEmbed
              name={fullName || undefined}
              email={draft.email.trim() || undefined}
              iframeClassName="!min-h-[16rem] !h-72 !w-full"
            />
          </div>
        );
      }
      case "browsing":
        return (
          <Button type="button" size="sm" variant="outline" className="w-full" onClick={() => setOpen(false)}>
            Close
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col items-start gap-3">
      {open && (
        <div
          className={cn(
            "flex w-[calc(100vw-2rem)] max-w-[350px] flex-col overflow-hidden rounded-lg border border-border bg-card shadow-2xl metallic-border",
            "max-h-[min(560px,calc(100vh-6rem))]"
          )}
          role="dialog"
          aria-label="Virtus intake assistant"
        >
          <header className="flex items-center justify-between border-b border-border bg-secondary/80 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-foreground">Virtus reception</p>
              <p className="text-xs text-muted-foreground">Intake qualification</p>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 shrink-0"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "max-w-[92%] rounded-lg px-3 py-2 text-sm leading-relaxed",
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <TypingIndicator />
              </div>
            )}
          </div>

          <footer className="border-t border-border bg-card px-4 py-3">{renderActions()}</footer>
        </div>
      )}

      {!open && (
        <Button
          type="button"
          size="lg"
          className="h-12 gap-2 rounded-full px-5 shadow-lg"
          onClick={startFlow}
        >
          <MessageCircle className="h-5 w-5" />
          Intake chat
        </Button>
      )}
    </div>
  );
}

type ChoiceProps<T extends string> = {
  options: readonly T[];
  onSelect: (value: T) => void;
};

function ChoiceGroup<T extends string>({ options, onSelect }: ChoiceProps<T>) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => (
        <Button
          key={option}
          type="button"
          size="sm"
          variant="outline"
          className="h-auto min-h-9 w-full justify-start whitespace-normal py-2 text-left text-sm"
          onClick={() => onSelect(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}
