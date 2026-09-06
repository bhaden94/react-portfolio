/**
 * Fetches Sanity content at build time and writes it to
 * src/content/generated.json, which the app imports directly.
 *
 * Running this in Node sidesteps browser CORS entirely, so the deployed site
 * always ships with real content even if no CORS origin is configured.
 * A failure here is non-fatal: the previous snapshot (or `{}`) is left alone
 * and the app falls back to its bundled defaults.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const PROJECT_ID = "0kc6p0xa";
const DATASET = "production";
const API_VERSION = "2024-01-01";

const query = readFileSync(resolve(root, "src/sanity/site.groq"), "utf8");
const target = resolve(root, "src/content/generated.json");

// Uncached endpoint on purpose: builds are infrequent and must never bake in a
// stale CDN response. The browser still reads from apicdn.
const url =
  `https://${PROJECT_ID}.api.sanity.io` +
  `/v${API_VERSION}/data/query/${DATASET}?query=${encodeURIComponent(query)}`;

try {
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(20000),
  });

  if (!response.ok) {
    throw new Error(`Sanity responded ${response.status} ${response.statusText}`);
  }

  const { result } = await response.json();

  const populated = Object.entries(result ?? {}).filter(([, value]) =>
    Array.isArray(value) ? value.length > 0 : value != null,
  );

  if (populated.length === 0) {
    console.warn(
      "[content] Sanity returned no matching documents. " +
        "Import the seed with: npx sanity dataset import sanity-seed.ndjson production",
    );
    writeFileSync(target, "{}\n", "utf8");
  } else {
    writeFileSync(target, `${JSON.stringify(result, null, 2)}\n`, "utf8");
    console.log(
      `[content] Captured from Sanity: ${populated
        .map(([key, value]) => `${key}(${Array.isArray(value) ? value.length : 1})`)
        .join(", ")}`,
    );
  }
} catch (error) {
  console.warn(
    `[content] Could not reach Sanity (${error.message}). ` +
      "Building with the last captured snapshot.",
  );
  process.exitCode = 0;
}
