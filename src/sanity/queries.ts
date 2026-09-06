import type {
  CaseStudy,
  Credential,
  DeltaRow,
  Endpoint,
  HistoryItem,
  LeadershipCard,
  LensHero,
  Repo,
  SectionCopy,
  ShippedItem,
  SiteContent,
  SiteSettings,
  SnapshotRow,
  StackTier,
} from "../types";
import { defaultContent } from "../content/defaultContent";
import generated from "../content/generated.json";
import { groqFetch } from "./http";
import SITE_QUERY from "./site.groq?raw";

export interface RawSite {
  settings?: Partial<SiteSettings> | null;
  heroes?: LensHero[] | null;
  sections?: SectionCopy[] | null;
  caseStudies?: CaseStudy[] | null;
  deltas?: DeltaRow[] | null;
  leadership?: LeadershipCard[] | null;
  stack?: StackTier[] | null;
  history?: HistoryItem[] | null;
  credentials?: Credential[] | null;
  repos?: Repo[] | null;
  shipped?: ShippedItem[] | null;
  snapshot?: SnapshotRow[] | null;
  endpoints?: Endpoint[] | null;
}

/** Non-empty arrays win; otherwise keep the fallback. */
function pick<T>(incoming: T[] | null | undefined, fallback: T[]): T[] {
  return Array.isArray(incoming) && incoming.length > 0 ? incoming : fallback;
}

/** Drops null/empty fields so a partially filled Sanity doc can't erase defaults. */
function mergeSettings(
  incoming: Partial<SiteSettings> | null | undefined,
  fallback: SiteSettings,
): SiteSettings {
  if (!incoming) return fallback;
  const cleaned = Object.fromEntries(
    Object.entries(incoming).filter(
      ([, v]) => v !== null && v !== undefined && v !== "",
    ),
  );
  return { ...fallback, ...cleaned } as SiteSettings;
}

function normalizeSections(
  incoming: SectionCopy[] | null | undefined,
  fallback: SectionCopy[],
): SectionCopy[] {
  if (!Array.isArray(incoming) || incoming.length === 0) return fallback;
  // GROQ projects missing lens objects as null; strip them so `order` lookups stay clean.
  return incoming.map((section) => ({
    key: section.key,
    lenses: Object.fromEntries(
      Object.entries(section.lenses ?? {}).filter(([, cfg]) => cfg != null),
    ),
  })) as SectionCopy[];
}

/** Layers a Sanity payload over a base, collection by collection. */
export function mergeContent(
  raw: RawSite | null | undefined,
  base: SiteContent = defaultContent,
): SiteContent {
  const settings = mergeSettings(raw?.settings, base.settings);

  const endpoints = pick(raw?.endpoints, base.endpoints).map((ep) => ({
    ...ep,
    // The résumé row takes its URL from the uploaded file asset.
    url: ep.primary && settings.resumeUrl ? settings.resumeUrl : ep.url,
  }));

  const snapshot = pick(raw?.snapshot, base.snapshot).map((row) => ({
    ...row,
    href: row.isResume && settings.resumeUrl ? settings.resumeUrl : row.href,
  }));

  return {
    settings,
    heroes: pick(raw?.heroes, base.heroes),
    sections: normalizeSections(raw?.sections, base.sections),
    caseStudies: pick(raw?.caseStudies, base.caseStudies),
    deltas: pick(raw?.deltas, base.deltas),
    leadership: pick(raw?.leadership, base.leadership),
    stack: pick(raw?.stack, base.stack),
    history: pick(raw?.history, base.history),
    credentials: pick(raw?.credentials, base.credentials),
    repos: pick(raw?.repos, base.repos),
    shipped: pick(raw?.shipped, base.shipped),
    snapshot,
    endpoints,
  };
}

/**
 * Content captured from Sanity at build time. This renders on first paint and
 * is immune to browser CORS rules, because it was fetched in Node.
 *
 * The double assertion is deliberate: TypeScript infers a concrete literal
 * shape from the generated JSON, which won't structurally match the optional
 * fields on `RawSite`.
 */
export const buildTimeContent: SiteContent = mergeContent(
  generated as unknown as RawSite,
  defaultContent,
);

/** Live read, so edits show up without a redeploy once CORS allows the origin. */
export async function fetchSiteContent(): Promise<SiteContent> {
  const raw = await groqFetch<RawSite>(SITE_QUERY);
  return mergeContent(raw, buildTimeContent);
}
