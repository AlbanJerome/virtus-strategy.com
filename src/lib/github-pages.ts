const REDIRECT_KEY = "spa-redirect";

/** Restore deep links after GitHub Pages serves public/404.html. */
export function restoreGitHubPagesRoute(): string | null {
  const redirect = sessionStorage.getItem(REDIRECT_KEY);
  if (!redirect) {
    return null;
  }
  sessionStorage.removeItem(REDIRECT_KEY);
  return redirect;
}
