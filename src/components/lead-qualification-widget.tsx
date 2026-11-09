import { X } from "lucide-react";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";

import {
  TurnstileField,
  type TurnstileFieldHandle,
} from "@/components/turnstile-field";

import { BookingEmbed, type BookingKind } from "@/components/booking-embed";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  WIDGET_FAQ_CATEGORY_BUTTONS,
  calculateLeadStatus,
  getFaqItemsForGroup,
  formatReturningGreeting,
  SCRIPT,
  getCaptureEmailFieldError,
  getCapturePhoneFieldError,
  sanitizePhoneInput,
  validateCaptureContact,
  type LeadBottleneck,
  type LeadPayload,
  type LeadSize,
  type LeadTimeline,
  type LeadVertical,
  type QualificationStep,
} from "@/lib/lead-qualification";
import { useRipleyChat } from "@/hooks/useRipleyChat";
import { useRipleyPersistence } from "@/hooks/useRipleyPersistence";
import {
  INTAKE_WIDGET_OPEN_EVENT,
  consumePendingIntakeOpen,
} from "@/lib/open-intake-widget";

/** One GIF loop duration before showing static avatar on the launcher. */
const RIPLEY_GIF_LOOP_MS = 3_500;
/** Idle time before the launcher GIF plays again. */
const RIPLEY_STATIC_PAUSE_MS = 300_000;
import { submitLead } from "@/lib/submit-lead";
import { cn } from "@/lib/utils";

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
  const {
    messages,
    typing,
    pushBot,
    pushUser,
    scrollToEnd,
    scrollRef,
    clearMessages,
  } = useRipleyChat();
  const {
    isReturningVisitor,
    savedName,
    loadStoredDraftFields,
    persistQualifiedLead,
    readStoredLeadData,
  } = useRipleyPersistence();

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<QualificationStep | null>(null);
  const [draft, setDraft] = useState<DraftLead>(initialDraft);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [activeFaqGroup, setActiveFaqGroup] = useState<string | null>(null);
  const [bookingKind, setBookingKind] = useState<BookingKind>("diagnostic");
  const [captureValidatedOnce, setCaptureValidatedOnce] = useState(false);
  const [animateRipley, setAnimateRipley] = useState(true);
  const [gifKey, setGifKey] = useState(() => Date.now());
  const turnstileRef = useRef<TurnstileFieldHandle>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToEnd();
  }, [messages, typing, step, scrollToEnd]);

  useEffect(() => {
    if (!animateRipley) {
      const restartTimer = window.setTimeout(() => {
        setGifKey(Date.now());
        setAnimateRipley(true);
      }, RIPLEY_STATIC_PAUSE_MS);
      return () => window.clearTimeout(restartTimer);
    }

    const endGifTimer = window.setTimeout(() => {
      setAnimateRipley(false);
    }, RIPLEY_GIF_LOOP_MS);

    return () => window.clearTimeout(endGifTimer);
  }, [animateRipley, gifKey]);

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';

    const getFocusable = (root: HTMLElement) =>
      Array.from(root.querySelectorAll<HTMLElement>(focusableSelector)).filter(
        (el) =>
          !el.hasAttribute("disabled") &&
          el.tabIndex !== -1 &&
          (el.offsetParent !== null || el === document.activeElement),
      );

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;

      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusables = getFocusable(dialog);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (active === first || (active && !dialog.contains(active))) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const startFlow = useCallback(() => {
    setOpen(true);
    setStep("greeting");
    clearMessages();
    setDraft(initialDraft);
    setSubmitError(null);
    setActiveFaqGroup(null);
    setBookingKind("diagnostic");
    setCaptureValidatedOnce(false);
    const returningText =
      isReturningVisitor && savedName
        ? formatReturningGreeting(savedName)
        : isReturningVisitor
          ? SCRIPT.returningGreeting
          : SCRIPT.greeting;
    pushBot(returningText);
  }, [pushBot, isReturningVisitor, savedName, clearMessages]);

  useEffect(() => {
    const onOpenIntakeWidget = () => {
      startFlow();
    };
    if (consumePendingIntakeOpen()) {
      startFlow();
    }
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

  const onGreetingAskQuestion = () => {
    pushUser("Ask a question");
    setActiveFaqGroup(null);
    setStep("faq_categories");
    pushBot(SCRIPT.faqAsk);
  };

  const onGreetingBookMeeting = () => {
    pushUser("Book a meeting");
    pushBot(SCRIPT.bookMeeting, () => goToStep("vertical", SCRIPT.vertical));
  };

  const restoreStoredLeadFromLocalStorage = useCallback(() => {
    const fields = loadStoredDraftFields();
    if (!fields) return;
    setDraft((d) => ({ ...d, ...fields }));
  }, [loadStoredDraftFields]);

  const onGreetingBookFollowUp = () => {
    pushUser("Book a follow-up");
    restoreStoredLeadFromLocalStorage();
    setBookingKind("followup");
    setStep("handover");
    pushBot(SCRIPT.handover);
  };

  const onGreetingUpdateDetails = () => {
    pushUser("Update details");
    setDraft(initialDraft);
    goToStep("vertical", SCRIPT.vertical);
  };

  const onFaqCategory = (buttonLabel: string, groupCategory: string) => {
    pushUser(buttonLabel);
    setActiveFaqGroup(groupCategory);
    setStep("faq_questions");
  };

  const onFaqQuestion = (question: string) => {
    if (!activeFaqGroup) return;
    const entry = getFaqItemsForGroup(activeFaqGroup).find((item) => item.q === question);
    if (!entry) return;

    pushUser(question);
    pushBot(entry.a, () => {
      setStep("faq_followup");
      pushBot(SCRIPT.faqFollowUp);
    });
  };

  const onFaqStartIntake = () => {
    pushUser("Yes, let's start the intake");
    goToStep("vertical", SCRIPT.vertical);
  };

  const onFaqAskAnother = () => {
    pushUser("Ask another question");
    setActiveFaqGroup(null);
    setStep("faq_categories");
    pushBot(SCRIPT.faqAsk);
  };

  const onFaqJustBrowsing = () => {
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
    setCaptureValidatedOnce(false);
    setStep("capture");
    pushBot(SCRIPT.capture, () => {
      pushBot(SCRIPT.captureCompany);
    });
  };

  const onCaptureSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitError(null);
    setCaptureValidatedOnce(true);

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

    const contactErrors = validateCaptureContact(email, phone);
    if (contactErrors.email || contactErrors.phone) {
      return;
    }

    const turnstileToken = turnstileRef.current?.getToken();
    if (!turnstileToken) {
      setSubmitError("Please complete the verification check below.");
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
      await submitLead(payload, turnstileToken);
      persistQualifiedLead(
        firstName,
        { vertical, bottleneck, size, timeline },
        { firstName, lastName, email, phone, company },
      );
      setBookingKind("diagnostic");
      setStep("handover");
      pushBot(SCRIPT.handover);
    } catch (err) {
      const code = err instanceof Error ? err.message : "submit-failed";
      if (code === "missing-supabase-config") {
        setSubmitError(
          "Lead capture is temporarily unavailable. Please email contact@virtus-strategy.com."
        );
      } else if (code === "missing-turnstile-token") {
        setSubmitError("Please complete the verification check below.");
      } else {
        setSubmitError("Something went wrong saving your details. Please try again.");
      }
      turnstileRef.current?.reset();
    } finally {
      setSubmitting(false);
    }
  };

  const showChoices = !typing && !submitting;

  const renderActions = () => {
    if (!showChoices || step === null) return null;

    switch (step) {
      case "greeting":
        if (isReturningVisitor) {
          return (
            <div className="flex flex-col gap-2">
              <Button
                type="button"
                size="sm"
                className="w-full justify-start"
                onClick={onGreetingBookFollowUp}
              >
                Book a follow-up
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="w-full justify-start"
                onClick={onGreetingAskQuestion}
              >
                Ask a question
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="w-full justify-start"
                onClick={onGreetingUpdateDetails}
              >
                Update details
              </Button>
            </div>
          );
        }
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
              onClick={onGreetingBookMeeting}
            >
              Book a meeting
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="w-full justify-start"
              onClick={onGreetingAskQuestion}
            >
              Ask a question
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
      case "faq_categories":
        return (
          <div className="flex flex-col gap-2">
            {WIDGET_FAQ_CATEGORY_BUTTONS.map((category) => (
              <Button
                key={category.groupCategory}
                type="button"
                size="sm"
                variant="outline"
                className="h-auto min-h-9 w-full justify-start whitespace-normal py-2 text-left text-sm"
                onClick={() => onFaqCategory(category.buttonLabel, category.groupCategory)}
              >
                {category.buttonLabel}
              </Button>
            ))}
          </div>
        );
      case "faq_questions": {
        const questions = activeFaqGroup ? getFaqItemsForGroup(activeFaqGroup) : [];
        return (
          <div className="flex flex-col gap-2">
            <p className="text-xs text-muted-foreground">{SCRIPT.faqQuestions}</p>
            <ChoiceGroup
              options={questions.map((item) => item.q)}
              onSelect={onFaqQuestion}
            />
          </div>
        );
      }
      case "faq_followup":
        return (
          <div className="flex flex-col gap-2">
            <Button type="button" size="sm" className="w-full justify-start" onClick={onFaqStartIntake}>
              Yes, let&apos;s start the intake
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="w-full justify-start"
              onClick={onFaqAskAnother}
            >
              Ask another question
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="w-full justify-start"
              onClick={onFaqJustBrowsing}
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
      case "capture": {
        const showEmptyHints = captureValidatedOnce;
        const displayEmailError = getCaptureEmailFieldError(draft.email, {
          showWhenEmpty: showEmptyHints,
        });
        const displayPhoneError = getCapturePhoneFieldError(draft.phone, {
          showWhenEmpty: showEmptyHints,
        });

        return (
          <form
            onSubmit={onCaptureSubmit}
            className="flex max-h-[min(52vh,28rem)] min-h-0 flex-col gap-3 overflow-y-auto"
          >
            <div className="space-y-3">
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
                    aria-required="true"
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
                  aria-required="true"
                  aria-invalid={displayEmailError ? true : undefined}
                  className={cn("h-9 text-sm", displayEmailError && "border-destructive")}
                />
                <p
                  className={cn(
                    "min-h-4 text-xs text-destructive",
                    !displayEmailError && "invisible"
                  )}
                  role="alert"
                  aria-live="polite"
                >
                  {displayEmailError ?? " "}
                </p>
              </div>
              <div className="space-y-1">
                <Label htmlFor="lq-phone" className="text-xs">
                  Phone
                </Label>
                <Input
                  id="lq-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={draft.phone}
                  onChange={(e) =>
                    setDraft((d) => ({ ...d, phone: sanitizePhoneInput(e.target.value) }))
                  }
                  aria-required="true"
                  aria-invalid={displayPhoneError ? true : undefined}
                  className={cn("h-9 text-sm", displayPhoneError && "border-destructive")}
                />
                <p
                  className={cn(
                    "min-h-4 text-xs text-destructive",
                    !displayPhoneError && "invisible"
                  )}
                  role="alert"
                  aria-live="polite"
                >
                  {displayPhoneError ?? " "}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <TurnstileField ref={turnstileRef} className="min-h-[65px]" />
              {submitError && (
                <p className="text-xs text-destructive" role="alert" aria-live="assertive">
                  {submitError}
                </p>
              )}
              <Button type="submit" size="sm" className="mb-2 w-full" disabled={submitting}>
                {submitting ? "Saving…" : "Submit"}
              </Button>
            </div>
          </form>
        );
      }
      case "handover": {
        const storedLead = readStoredLeadData();
        const firstName = (storedLead?.firstName ?? draft.firstName).trim();
        const lastName = (storedLead?.lastName ?? draft.lastName).trim();
        const email = (storedLead?.email ?? draft.email).trim();
        const fullName = `${firstName} ${lastName}`.trim();
        return (
          <div className="[&>div]:rounded-md">
            <BookingEmbed
              name={fullName || undefined}
              email={email || undefined}
              leadContext={{
                vertical: draft.vertical,
                bottleneck: draft.bottleneck,
                size: draft.size,
                timeline: draft.timeline,
              }}
              bookingKind={bookingKind}
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
    <div className="fixed bottom-[5.5rem] left-4 z-[100] flex flex-col items-start gap-3 md:bottom-6">
      {open && (
        <div
          ref={dialogRef}
          className={cn(
            "flex h-[85vh] w-[calc(100vw-2rem)] max-w-[420px] min-h-0 flex-col overflow-hidden rounded-lg border border-border bg-card shadow-2xl metallic-border md:h-[600px]"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Ripley intake assistant"
        >
          <header className="relative border-b border-border bg-secondary/80 px-4 pb-3 pt-4">
            <Button
              ref={closeButtonRef}
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1 h-8 w-8 shrink-0"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="flex flex-col items-center text-center">
              <img
                src="/ripley-avatar.png"
                alt=""
                className="mb-2 h-14 w-14 rounded-full border-2 border-primary object-cover shadow-md"
              />
              <p className="text-sm font-semibold text-foreground">Ripley</p>
              <p className="text-xs text-muted-foreground">Virtus Concierge</p>
            </div>
          </header>

          <div
            ref={scrollRef}
            className="no-scrollbar min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-3"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "max-w-[92%] whitespace-pre-line rounded-lg px-3 py-2 text-sm leading-relaxed",
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

          <footer className="shrink-0 border-t border-border bg-card px-4 pt-3 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            {renderActions()}
          </footer>
        </div>
      )}

      {!open && (
        <button
          type="button"
          className="h-16 w-16 overflow-hidden rounded-full border-2 border-primary shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Talk to Ripley"
          onClick={startFlow}
        >
          <img
            src={
              animateRipley ? `/ripley-avatar.gif?t=${gifKey}` : "/ripley-static.png"
            }
            alt=""
            className="h-full w-full object-cover"
          />
        </button>
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
