import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "@/App";
import { restoreGitHubPagesRoute } from "@/lib/github-pages";
import "@/index.css";

const redirect = restoreGitHubPagesRoute();
if (redirect) {
  window.history.replaceState(null, "", redirect);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
