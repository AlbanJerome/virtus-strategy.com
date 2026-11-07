import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Placeholder } from "@/components/ui/placeholder";

type FormState = {
  fullName: string;
  workEmail: string;
  organization: string;
};

const initialState: FormState = {
  fullName: "",
  workEmail: "",
  organization: "",
};

export function ContactForm() {
  const formId = import.meta.env.VITE_FORMSPREE_ID;
  const [values, setValues] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!values.fullName.trim() || !values.workEmail.trim() || !values.organization.trim()) {
      setError("missing-fields");
      return;
    }

    if (!formId) {
      setError("missing-form-id");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: values.fullName,
          workEmail: values.workEmail,
          organization: values.organization,
        }),
      });

      if (!response.ok) {
        throw new Error("submit-failed");
      }

      setSubmitted(true);
      setValues(initialState);
    } catch {
      setError("submit-failed");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-card p-6 metallic-border text-center">
        <Placeholder label="contact-form-success-title" as="h3" className="text-xl font-bold">
          Message sent
        </Placeholder>
        <Placeholder label="contact-form-success-body" as="p" className="mt-2 text-muted-foreground">
          We will be in touch shortly.
        </Placeholder>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="fullName">
          <Placeholder label="contact-form-label-full-name">Full Name</Placeholder>
        </Label>
        <Input
          id="fullName"
          name="fullName"
          value={values.fullName}
          onChange={onChange}
          autoComplete="name"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="workEmail">
          <Placeholder label="contact-form-label-work-email">Work Email</Placeholder>
        </Label>
        <Input
          id="workEmail"
          name="workEmail"
          type="email"
          value={values.workEmail}
          onChange={onChange}
          autoComplete="email"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="organization">
          <Placeholder label="contact-form-label-organization">Organization</Placeholder>
        </Label>
        <Input
          id="organization"
          name="organization"
          value={values.organization}
          onChange={onChange}
          autoComplete="organization"
        />
      </div>

      {error === "missing-fields" && (
        <p className="text-sm text-destructive">
          <Placeholder label="contact-form-error-missing-fields">
            Please fill in all fields.
          </Placeholder>
        </p>
      )}
      {error === "missing-form-id" && (
        <p className="text-sm text-destructive">
          <Placeholder label="contact-form-error-missing-env">
            The form is temporarily unavailable. Please email contact@virtus-strategy.com.
          </Placeholder>
        </p>
      )}
      {error === "submit-failed" && (
        <p className="text-sm text-destructive">
          <Placeholder label="contact-form-error-submit-failed">
            Something went wrong. Please try again.
          </Placeholder>
        </p>
      )}

      <Button type="submit" className="w-full" disabled={submitting || !formId}>
        {submitting ? (
          <Placeholder label="contact-form-submitting">Sending...</Placeholder>
        ) : (
          <Placeholder label="contact-form-submit">Send message</Placeholder>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        <Placeholder label="contact-form-consent">
          By submitting this form, you agree to be contacted regarding your inquiry.
        </Placeholder>
      </p>
    </form>
  );
}
