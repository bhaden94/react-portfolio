/**
 * One-off: rewrites em-dash constructions in published Sanity copy.
 *
 *   node scripts/fix-em-dashes.mjs            # preview only
 *   node scripts/fix-em-dashes.mjs --write    # writes fix-em-dashes.ndjson
 *
 * Then import the generated file:
 *   npx sanity dataset import fix-em-dashes.ndjson production --replace
 *
 * Each document is fetched in full and only the target string is changed, so a
 * --replace import cannot drop unrelated fields.
 */
import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const edits = [
  {
    id: "section-contact",
    path: "recruiter.answer",
    from: "Email is fastest — I reply within 24 hours.",
    to: "Email is fastest. I reply within 24 hours.",
  },
  {
    id: "section-owned",
    path: "hm.answer",
    from: "Three systems, end to end — the design",
    to: "Three systems, end to end: the design",
  },
  {
    id: "section-customer",
    path: "engineer.answer",
    from: "data, not code — so the client",
    to: "data, not code, so the client",
  },
  {
    id: "section-stack",
    path: "engineer.answer",
    from: "No percentages — they don't mean anything.",
    to: "No percentages, because they don't mean anything.",
  },
  {
    id: "endpoint-resume-pdf",
    path: "value",
    from: "Download — updated 2026",
    to: "Updated 2026",
  },
  {
    id: "case-modern-alchemy",
    path: "engineerDetails[2].body",
    from: "with Zod — available days",
    to: "with Zod: available days",
  },
];

const ids = [...new Set(edits.map((e) => e.id))];
const query = `*[_id in [${ids.map((id) => `"${id}"`).join(",")}]]`;
const url =
  "https://0kc6p0xa.api.sanity.io/v2024-01-01/data/query/production" +
  `?query=${encodeURIComponent(query)}`;

const { result: docs } = await (await fetch(url)).json();
const byId = new Map(docs.map((d) => [d._id, d]));

const keys = (path) => path.replace(/\[(\d+)\]/g, ".$1").split(".");
const read = (obj, path) =>
  keys(path).reduce((acc, k) => (acc == null ? acc : acc[k]), obj);
const write = (obj, path, value) => {
  const parts = keys(path);
  const last = parts.pop();
  const target = parts.reduce((acc, k) => acc[k], obj);
  target[last] = value;
};

let changed = 0;

for (const edit of edits) {
  const doc = byId.get(edit.id);
  if (!doc) {
    console.warn(`skip ${edit.id}: not found`);
    continue;
  }
  const current = read(doc, edit.path);
  if (typeof current !== "string" || !current.includes(edit.from)) {
    console.warn(`skip ${edit.id}.${edit.path}: pattern not present`);
    continue;
  }
  write(doc, edit.path, current.replace(edit.from, edit.to));
  console.log(`fixed ${edit.id}.${edit.path}`);
  changed += 1;
}

const payload = docs.map((doc) => {
  // _rev and the timestamps are server-managed.
  const { _rev, _createdAt, _updatedAt, ...rest } = doc;
  void _rev, _createdAt, _updatedAt;
  return JSON.stringify(rest);
});

const remaining = payload.filter((line) => line.includes("\u2014")).length;
console.log(
  `\n${changed} field(s) changed. Docs still containing an em-dash: ${remaining}`,
);

if (process.argv.includes("--write")) {
  const target = resolve(root, "fix-em-dashes.ndjson");
  writeFileSync(target, payload.join("\n") + "\n", "utf8");
  console.log(`Wrote ${target}`);
} else {
  console.log("Preview only. Re-run with --write to emit the import file.");
}
