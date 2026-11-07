import { BookingEmbed } from "@/components/booking-embed";
import { ContactForm } from "@/components/contact-form";
import { Placeholder } from "@/components/ui/placeholder";

export function Contact() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Placeholder label="contact-page-title" as="h1" className="text-4xl font-bold md:text-5xl">
          Book a diagnostic.
        </Placeholder>
        <Placeholder
          label="contact-page-intro"
          as="p"
          className="mt-4 max-w-2xl text-lg text-muted-foreground"
        >
          Select a time below for a 30-minute consultation. We will map your current intake flow and
          identify where your capacity is leaking.
        </Placeholder>

        <div className="mt-8 max-w-3xl">
          <BookingEmbed />
        </div>

        <div className="mt-16 max-w-xl rounded-lg border border-border bg-card p-6 md:p-8 metallic-border">
          <Placeholder label="contact-form-section-title" as="h2" className="text-2xl font-bold">
            Send a message.
          </Placeholder>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
