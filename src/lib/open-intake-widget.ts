export const INTAKE_WIDGET_OPEN_EVENT = "open-intake-widget";

export function openIntakeWidget(): void {
  window.dispatchEvent(new Event(INTAKE_WIDGET_OPEN_EVENT));
}
