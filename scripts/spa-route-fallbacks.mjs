/**
 * GitHub Pages serves static files only. Deep links must have a real path
 * (e.g. dist/privacy/index.html) or the server responds 404 before the SPA loads.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const indexPath = path.join(distDir, "index.html");

const SPA_ROUTES = ["services", "labs", "privacy", "cookies", "terms"];

if (!fs.existsSync(indexPath)) {
  console.error("spa-route-fallbacks: dist/index.html not found — run vite build first.");
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexPath, "utf8");

for (const route of SPA_ROUTES) {
  const routeDir = path.join(distDir, route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, "index.html"), indexHtml);
}

console.log(`spa-route-fallbacks: wrote index.html for ${SPA_ROUTES.length} routes.`);
