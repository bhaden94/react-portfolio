/**
 * Turns src/content/defaultContent.ts into a Sanity import file.
 *
 *   npm run seed
 *   npx sanity dataset import sanity-seed.ndjson production --replace
 *
 * Everything the site renders becomes an editable document, so content can be
 * changed in the Studio without touching code.
 */
import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");

// The content module is plain TypeScript data, so strip the types to import it.
const source = await import("node:fs").then((fs) =>
  fs.readFileSync(resolve(root, "src/content/defaultContent.ts"), "utf8"),
);

const js = source
  .replace(/^import[^\n]*\n/gm, "")
  .replace(/:\s*SiteContent\b/, "")
  .replace(/^export const/m, "const")
  .concat("\n;globalThis.__content = defaultContent;");

const mod = await import(
  `data:text/javascript;base64,${Buffer.from(js).toString("base64")}`
);
void mod;
const content = globalThis.__content;

const docs = [];
const slug = (value) =>
  String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);

/* singleton */
const { resumeUrl, ...settings } = content.settings;
void resumeUrl; // derived from the uploaded file, never seeded directly

const settingsDoc = { _id: "siteSettings", _type: "siteSettings", ...settings };

// Re-importing with --replace overwrites the whole document, which would drop
// the résumé uploaded in the Studio. Carry the existing file reference across.
try {
  const query = encodeURIComponent('*[_id == "siteSettings"][0]{ resumeFile }');
  const response = await fetch(
    `https://0kc6p0xa.api.sanity.io/v2024-01-01/data/query/production?query=${query}`,
    { signal: AbortSignal.timeout(15000) },
  );
  const existing = (await response.json())?.result?.resumeFile;
  if (existing) {
    settingsDoc.resumeFile = existing;
    console.log("[seed] Preserved the résumé already uploaded in Sanity.");
  }
} catch {
  console.warn(
    "[seed] Could not check Sanity for an existing résumé. " +
      "Re-upload it in the Studio if importing with --replace clears it.",
  );
}

docs.push(settingsDoc);

/* heroes */
for (const hero of content.heroes) {
  docs.push({
    _id: `hero-${hero.lens}`,
    _type: "lensHero",
    ...hero,
    metrics: hero.metrics.map((m, i) => ({
      _key: `m${i}`,
      _type: "metric",
      ...m,
    })),
    agenda: hero.agenda.map((a, i) => ({
      _key: `a${i}`,
      _type: "agendaItem",
      ...a,
    })),
  });
}

/* section questions */
for (const section of content.sections) {
  docs.push({
    _id: `section-${section.key}`,
    _type: "sectionCopy",
    key: section.key,
    ...Object.fromEntries(
      Object.entries(section.lenses).map(([lens, cfg]) => [
        lens,
        { _type: "lensSectionConfig", ...cfg },
      ]),
    ),
  });
}

/* case studies */
for (const study of content.caseStudies) {
  docs.push({
    _id: `case-${study.id}`,
    _type: "caseStudy",
    title: study.title,
    slug: { _type: "slug", current: study.slug },
    section: study.section,
    lede: study.lede,
    tagHm: study.tagHm,
    tagEngineer: study.tagEngineer,
    hmDetails: study.hmDetails.map((d, i) => ({
      _key: `h${i}`,
      _type: "detailRow",
      ...d,
    })),
    engineerDetails: study.engineerDetails.map((d, i) => ({
      _key: `e${i}`,
      _type: "detailRow",
      ...d,
    })),
    chips: study.chips,
    links: study.links.map((l, i) => ({
      _key: `l${i}`,
      _type: "linkRef",
      ...l,
    })),
    internalLabel: study.internalLabel,
    featured: study.featured,
    order: study.order,
  });
}

const simple = [
  ["deltas", "deltaRow", (d) => `delta-${slug(d.label)}`],
  ["leadership", "leadershipCard", (d) => `lead-${slug(d.title)}`],
  ["stack", "stackTier", (d) => `stack-${slug(d.name)}`],
  ["history", "historyItem", (d) => `history-${slug(d.role)}-${d.order}`],
  ["credentials", "credential", (d) => `cred-${slug(d.title)}`],
  ["repos", "repo", (d) => `repo-${slug(d.name)}`],
  ["shipped", "shippedItem", (d) => `shipped-${slug(d.name)}`],
  ["snapshot", "snapshotRow", (d) => `snap-${slug(d.label)}`],
  ["endpoints", "endpoint", (d) => `endpoint-${slug(d.path)}`],
];

for (const [key, type, id] of simple) {
  for (const item of content[key]) {
    docs.push({ _id: id(item), _type: type, ...item });
  }
}

/* strip undefined so the import file stays clean */
const clean = (value) =>
  JSON.parse(JSON.stringify(value, (_k, v) => (v === undefined ? undefined : v)));

const out = docs.map((d) => JSON.stringify(clean(d))).join("\n") + "\n";
const target = resolve(root, "sanity-seed.ndjson");
writeFileSync(target, out, "utf8");

console.log(`Wrote ${docs.length} documents to ${target}`);
console.log(
  "Import with:\n  npx sanity dataset import sanity-seed.ndjson production --replace",
);
