export const COOKIE_CONSENT_KEY = "virtus-cookie-consent";

export function getCookieConsent(): string | null {
  return localStorage.getItem(COOKIE_CONSENT_KEY);
}

export function setCookieConsent(accepted: boolean): void {
  localStorage.setItem(COOKIE_CONSENT_KEY, accepted ? "true" : "false");
}

export function clearCookieConsent(): void {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
}
