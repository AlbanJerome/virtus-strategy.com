import { Placeholder } from "@/components/ui/placeholder";
import { cn } from "@/lib/utils";

export type BookingEmbedProps = {
  name?: string;
  email?: string;
  iframeClassName?: string;
};

export function buildBookingEmbedUrl(name?: string, email?: string): string | undefined {
  const baseUrl = import.meta.env.VITE_BOOKING_URL;
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
  return url.toString();
}

export function BookingEmbed({ name, email, iframeClassName }: BookingEmbedProps = {}) {
  const bookingUrl = buildBookingEmbedUrl(name, email);

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
