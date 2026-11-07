import { BookingEmbed } from "@/components/booking-embed";
import { ContactForm } from "@/components/contact-form";
import { Placeholder } from "@/components/ui/placeholder";

export function Contact() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Placeholder
          label="contact-page-title"
          as="h1"
          className="text-4xl font-bold md:text-5xl"
        />
        <Placeholder
          label="contact-page-intro"
          as="p"
          className="mt-4 max-w-2xl text-lg text-muted-foreground"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6 md:p-8 metallic-border">
            <Placeholder label="contact-form-section-title" as="h2" className="text-2xl font-bold" />
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div>
            <Placeholder label="contact-booking-section-title" as="h2" className="text-2xl font-bold" />
            <div className="mt-6">
              <BookingEmbed />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
