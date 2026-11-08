import { Placeholder } from "@/components/ui/placeholder";
import { cn } from "@/lib/utils";

export type BookingLeadContext = {
  vertical?: string;
  bottleneck?: string;
  size?: string;
  timeline?: string;
};

export type BookingKind = "diagnostic" | "followup";

export type BookingEmbedProps = {
  name?: string;
  email?: string;
  leadContext?: BookingLeadContext;
  iframeClassName?: string;
  /** diagnostic = new qualification booking; followup = returning visitor follow-up */
  bookingKind?: BookingKind;
};

function resolveBookingBaseUrl(kind: BookingKind): string | undefined {
  if (kind === "followup") {
    const followUp = import.meta.env.VITE_FOLLOWUP_BOOKING_URL;
    return followUp || undefined;
  }
  return import.meta.env.VITE_BOOKING_URL || undefined;
}

export function buildBookingEmbedUrl(
  name?: string,
  email?: string,
  leadContext?: BookingLeadContext,
  bookingKind: BookingKind = "diagnostic"
): string | undefined {
  const baseUrl = resolveBookingBaseUrl(bookingKind);
  if (!baseUrl) {
    return undefined;
  }

  const url = new URL(baseUrl);
  if (name) {
    url.searchParams.append("name", name);
  }
  if (email) {
    url.searchParams.append("email", email);
  }
  if (leadContext) {
    const { vertical, bottleneck, size, timeline } = leadContext;
    if (vertical && bottleneck && size && timeline) {
      const notes = `Vertical: ${vertical} | Bottleneck: ${bottleneck} | Size: ${size} | Timeline: ${timeline}`;
      url.searchParams.append("notes", notes);
    }
  }
  return url.toString();
}

export function BookingEmbed({
  name,
  email,
  leadContext,
  iframeClassName,
  bookingKind = "diagnostic",
}: BookingEmbedProps = {}) {
  const bookingUrl = buildBookingEmbedUrl(name, email, leadContext, bookingKind);

  if (!bookingUrl) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-card/50 p-8 text-center metallic-border">
        <Placeholder label="booking-embed-missing-url" as="p" className="text-muted-foreground">
          Booking calendar is loading. If it does not appear, please use the form below.
        </Placeholder>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border metallic-border">
      <iframe
        title="booking"
        src={bookingUrl}
        className={cn(
          "h-[min(640px,80vh)] w-full border-0 bg-background",
          iframeClassName
        )}
        loading="lazy"
      />
    </div>
  );
}
