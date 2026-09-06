import { SANITY_API_VERSION, SANITY_DATASET, SANITY_PROJECT_ID } from "./config";

const ENDPOINT =
  `https://${SANITY_PROJECT_ID}.apicdn.sanity.io` +
  `/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}`;

/**
 * Minimal read-only GROQ client.
 *
 * The dataset is public, so this is a plain GET against Sanity's CDN. Using
 * `fetch` directly instead of `@sanity/client` keeps ~180 kB out of the bundle
 * for what is a single query on page load.
 */
export async function groqFetch<T>(query: string, timeoutMs = 8000): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(
      `${ENDPOINT}?query=${encodeURIComponent(query)}`,
      { signal: controller.signal, headers: { Accept: "application/json" } },
    );

    if (!response.ok) {
      throw new Error(`Sanity responded ${response.status}`);
    }

    const body = (await response.json()) as { result: T };
    return body.result;
  } finally {
    clearTimeout(timer);
  }
}
