import { Placeholder } from "@/components/ui/placeholder";

export function BookingEmbed() {
  const bookingUrl = import.meta.env.VITE_BOOKING_URL;

  if (!bookingUrl) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-card/50 p-8 text-center metallic-border">
        <Placeholder label="booking-embed-missing-url" as="p" className="text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border metallic-border">
      <iframe
        title="booking"
        src={bookingUrl}
        className="h-[min(640px,80vh)] w-full border-0 bg-background"
        loading="lazy"
      />
    </div>
  );
}
