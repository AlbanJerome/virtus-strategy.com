export const COOKIE_CONSENT_KEY = "virtus-cookie-consent";

export function getCookieConsent(): string | null {
  try {
    return localStorage.getItem(COOKIE_CONSENT_KEY);
  } catch {
    return null;
  }
}

export function setCookieConsent(accepted: boolean): void {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, accepted ? "true" : "false");
  } catch {
    /* storage disabled or quota exceeded */
  }
}

export function clearCookieConsent(): void {
  try {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
  } catch {
    /* storage disabled */
  }
}
