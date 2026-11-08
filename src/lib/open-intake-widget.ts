export const INTAKE_WIDGET_OPEN_EVENT = "open-intake-widget";

let pendingIntakeOpen = false;

export function openIntakeWidget(): void {
  pendingIntakeOpen = true;
  window.dispatchEvent(new Event(INTAKE_WIDGET_OPEN_EVENT));
}

/** True once if open was requested before the widget chunk mounted. */
export function consumePendingIntakeOpen(): boolean {
  if (!pendingIntakeOpen) {
    return false;
  }
  pendingIntakeOpen = false;
  return true;
}
