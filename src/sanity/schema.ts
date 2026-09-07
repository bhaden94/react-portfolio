import { defineArrayMember, defineField, defineType } from "sanity";

const LENS_OPTIONS = [
  { title: "Recruiter", value: "recruiter" },
  { title: "Hiring manager", value: "hm" },
  { title: "Engineer", value: "engineer" },
];

const SECTION_OPTIONS = [
  { title: "Snapshot (recruiter)", value: "snapshot" },
  { title: "Shipped (recruiter)", value: "shipped" },
  { title: "What have you owned?", value: "owned" },
  { title: "What changed?", value: "changed" },
  { title: "How do you lead?", value: "lead" },
  { title: "Real customer", value: "customer" },
  { title: "Public code", value: "code" },
  { title: "Stack", value: "stack" },
  { title: "History", value: "history" },
  { title: "Contact", value: "contact" },
];

const orderField = defineField({
  name: "order",
  title: "Order",
  type: "number",
  description: "Lower numbers appear first.",
  validation: (rule) => rule.required(),
});

/* ── objects ───────────────────────────────────────────── */

const metric = defineType({
  name: "metric",
  title: "Metric",
  type: "object",
  fields: [
    defineField({
      name: "value",
      type: "string",
      description: 'The big number, e.g. "40k" or "99.98".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "unit",
      type: "string",
      description: 'Small muted suffix, e.g. "+" or "%".',
    }),
    defineField({
      name: "label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "small",
      title: "Use smaller text",
      type: "boolean",
      description: 'Turn on for word values like "TS/SCI + FSP".',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "value", subtitle: "label" },
  },
});

const agendaItem = defineType({
  name: "agendaItem",
  title: "Agenda item",
  type: "object",
  fields: [
    defineField({ name: "num", type: "string", initialValue: "01" }),
    defineField({
      name: "question",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "target",
      title: "Links to section",
      type: "string",
      options: { list: SECTION_OPTIONS },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: { select: { title: "question", subtitle: "target" } },
});

const detailRow = defineType({
  name: "detailRow",
  title: "Detail row",
  type: "object",
  fields: [
    defineField({
      name: "label",
      type: "string",
      description: 'Short lowercase label, e.g. "constraint" or "result".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      type: "text",
      rows: 4,
      description: "Supports **bold** and `code`.",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: { select: { title: "label", subtitle: "body" } },
});

const linkRef = defineType({
  name: "linkRef",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      name: "label",
      type: "string",
      description: 'e.g. "live ↗"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      type: "url",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: { select: { title: "label", subtitle: "url" } },
});

const lensSectionConfig = defineType({
  name: "lensSectionConfig",
  title: "Lens configuration",
  type: "object",
  description: "Leave empty to hide this section for this lens.",
  fields: [
    defineField({
      name: "order",
      type: "number",
      description: "Position within this lens. The hero is always first.",
    }),
    defineField({
      name: "num",
      title: "Question number",
      type: "string",
      description: 'e.g. "01"',
    }),
    defineField({ name: "question", type: "string" }),
    defineField({
      name: "answer",
      type: "text",
      rows: 3,
      description: "Optional lead-in below the question. Supports **bold**.",
    }),
  ],
});

/* ── documents ─────────────────────────────────────────── */

const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", initialValue: "Brady Haden" }),
    defineField({
      name: "role",
      type: "string",
      description: "Small caps line under the name in the header.",
    }),
    defineField({
      name: "brandMark",
      type: "string",
      description: "Two letters for the logo tile.",
      initialValue: "bh",
    }),
    defineField({
      name: "kicker",
      type: "string",
      description: "Green monospace line above the hero headline.",
    }),
    defineField({
      name: "isAvailable",
      title: "Currently open to roles",
      type: "boolean",
      description:
        "On: green status bar using the available label and detail. Off: amber, using the unavailable pair below.",
      initialValue: true,
    }),
    defineField({
      name: "availableLabel",
      title: "Label — available",
      type: "string",
      initialValue: "Available",
    }),
    defineField({
      name: "availability",
      title: "Detail — available",
      type: "string",
      description: 'Follows the label, e.g. "open to senior cloud roles".',
    }),
    defineField({
      name: "unavailableLabel",
      title: "Label — not available",
      type: "string",
      initialValue: "Not looking",
    }),
    defineField({
      name: "unavailableDetail",
      title: "Detail — not available",
      type: "string",
    }),
    defineField({ name: "clearance", type: "string" }),
    defineField({ name: "location", type: "string" }),
    defineField({
      name: "pullQuote",
      type: "text",
      rows: 2,
      description: "Large quote in the leadership section.",
    }),
    defineField({ name: "keywordsLabel", type: "string" }),
    defineField({
      name: "keywords",
      type: "text",
      rows: 6,
      description: "Flat keyword list shown to recruiters.",
    }),
    defineField({ name: "footerStatus", type: "string" }),
    defineField({ name: "footerNote", type: "string" }),
    defineField({ name: "metaTitle", type: "string" }),
    defineField({ name: "metaDescription", type: "text", rows: 3 }),
    defineField({
      name: "resumeFile",
      title: "Résumé PDF",
      type: "file",
      description: "Upload the PDF. Every résumé link points here automatically.",
      options: { accept: ".pdf" },
    }),
    defineField({
      name: "resumeLabel",
      type: "string",
      initialValue: "Download — updated 2026",
    }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});

const lensHero = defineType({
  name: "lensHero",
  title: "Hero (per lens)",
  type: "document",
  fields: [
    defineField({
      name: "lens",
      type: "string",
      options: { list: LENS_OPTIONS },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleLead",
      title: "Headline",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleHighlight",
      title: "Headline (highlighted part)",
      type: "string",
      description: "Rendered in green on its own line.",
    }),
    defineField({
      name: "titleTail",
      title: "Headline (trailing text)",
      type: "string",
      description: 'Usually just punctuation, e.g. "."',
    }),
    defineField({
      name: "lede",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "metrics",
      type: "array",
      of: [defineArrayMember({ type: "metric" })],
      validation: (rule) => rule.max(4),
      description: "Four reads best.",
    }),
    defineField({
      name: "agenda",
      type: "array",
      of: [defineArrayMember({ type: "agendaItem" })],
      validation: (rule) => rule.max(4),
    }),
  ],
  preview: {
    select: { title: "lens", subtitle: "titleLead" },
    prepare: ({ title, subtitle }) => ({
      title: `Hero — ${title}`,
      subtitle,
    }),
  },
});

const sectionCopy = defineType({
  name: "sectionCopy",
  title: "Section question",
  type: "document",
  description:
    "Controls the question, numbering, order, and visibility of one section in each lens.",
  fields: [
    defineField({
      name: "key",
      title: "Section",
      type: "string",
      options: { list: SECTION_OPTIONS },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "recruiter", type: "lensSectionConfig" }),
    defineField({ name: "hm", title: "Hiring manager", type: "lensSectionConfig" }),
    defineField({ name: "engineer", type: "lensSectionConfig" }),
  ],
  preview: {
    select: { title: "key", subtitle: "hm.question" },
  },
});

const caseStudy = defineType({
  name: "caseStudy",
  title: "Case study",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      description: "Shown as the monospace identifier in the card header.",
      options: { source: "title", maxLength: 60 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "section",
      type: "string",
      options: {
        list: [
          { title: "What have you owned?", value: "owned" },
          { title: "Real customer", value: "customer" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "lede",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagHm",
      title: "Tag (hiring manager)",
      type: "string",
    }),
    defineField({
      name: "tagEngineer",
      title: "Tag (engineer)",
      type: "string",
    }),
    defineField({
      name: "hmDetails",
      title: "Details (hiring manager)",
      type: "array",
      of: [defineArrayMember({ type: "detailRow" })],
    }),
    defineField({
      name: "engineerDetails",
      title: "Details (engineer)",
      type: "array",
      of: [defineArrayMember({ type: "detailRow" })],
    }),
    defineField({
      name: "chips",
      title: "Tech chips",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({
      name: "links",
      type: "array",
      of: [defineArrayMember({ type: "linkRef" })],
      description: "Leave empty for internal work and set the label below.",
    }),
    defineField({
      name: "internalLabel",
      type: "string",
      description: 'Shown when there are no links, e.g. "internal · Microsoft".',
    }),
    defineField({
      name: "featured",
      type: "boolean",
      description: "Featured cards span the full width.",
      initialValue: false,
    }),
    orderField,
  ],
  preview: { select: { title: "title", subtitle: "section" } },
});

const deltaRow = defineType({
  name: "deltaRow",
  title: "Delta (before → after)",
  type: "document",
  fields: [
    defineField({
      name: "label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "before",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "after",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    orderField,
  ],
  preview: {
    select: { title: "label", before: "before", after: "after" },
    prepare: ({ title, before, after }) => ({
      title,
      subtitle: `${before} → ${after}`,
    }),
  },
});

const leadershipCard = defineType({
  name: "leadershipCard",
  title: "Leadership card",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      type: "text",
      rows: 4,
      description: "Supports **bold**.",
      validation: (rule) => rule.required(),
    }),
    orderField,
  ],
  preview: { select: { title: "title", subtitle: "body" } },
});

const stackTier = defineType({
  name: "stackTier",
  title: "Stack tier",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      description: 'e.g. "daily", "strong", "familiar".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "pip",
      title: "Indicator colour",
      type: "string",
      options: {
        list: [
          { title: "Green", value: "ok" },
          { title: "Amber", value: "warn" },
          { title: "Grey", value: "idle" },
        ],
      },
      initialValue: "ok",
    }),
    defineField({
      name: "items",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({
      name: "strong",
      title: "Emphasise items",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "quiet",
      title: "De-emphasise items",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "subName",
      title: "Sub-group label",
      type: "string",
    }),
    defineField({
      name: "subItems",
      title: "Sub-group items",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    orderField,
  ],
  preview: { select: { title: "name" } },
});

const historyItem = defineType({
  name: "historyItem",
  title: "Employment history",
  type: "document",
  fields: [
    defineField({
      name: "role",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "detail",
      type: "string",
      description: 'Employer and dates, e.g. "Microsoft · Azure · Mar 2021 – Present".',
      validation: (rule) => rule.required(),
    }),
    orderField,
  ],
  preview: { select: { title: "role", subtitle: "detail" } },
});

const credential = defineType({
  name: "credential",
  title: "Clearance / education",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "detail", type: "string" }),
    orderField,
  ],
  preview: { select: { title: "title", subtitle: "detail" } },
});

const repo = defineType({
  name: "repo",
  title: "Public repository",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "codeUrl",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "liveUrl", type: "url" }),
    defineField({
      name: "liveLabel",
      type: "string",
      initialValue: "live ↗",
    }),
    orderField,
  ],
  preview: { select: { title: "name", subtitle: "description" } },
});

const shippedItem = defineType({
  name: "shippedItem",
  title: "Shipped item (recruiter list)",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "url", type: "url" }),
    defineField({ name: "codeUrl", type: "url" }),
    defineField({
      name: "badge",
      type: "string",
      description: 'Shown when there is no code link, e.g. "Microsoft".',
    }),
    orderField,
  ],
  preview: { select: { title: "name", subtitle: "description" } },
});

const snapshotRow = defineType({
  name: "snapshotRow",
  title: "Snapshot row (recruiter)",
  type: "document",
  fields: [
    defineField({
      name: "label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "value",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "highlight",
      type: "boolean",
      description: "Render the value in green.",
      initialValue: false,
    }),
    defineField({
      name: "href",
      type: "string",
      description: 'Optional link, e.g. "#s-contact".',
    }),
    defineField({
      name: "isResume",
      title: "Link to the résumé PDF",
      type: "boolean",
      description:
        "Overrides the link above with the PDF uploaded in Site settings.",
      initialValue: false,
    }),
    orderField,
  ],
  preview: { select: { title: "label", subtitle: "value" } },
});

const endpoint = defineType({
  name: "endpoint",
  title: "Contact endpoint",
  type: "document",
  fields: [
    defineField({ name: "method", type: "string", initialValue: "GET" }),
    defineField({
      name: "path",
      type: "string",
      description: 'e.g. "/email"',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "value", type: "string" }),
    defineField({
      name: "url",
      type: "string",
      description: "Leave blank on the résumé row — it uses the uploaded PDF.",
    }),
    defineField({ name: "arrow", type: "string", initialValue: "↗" }),
    defineField({
      name: "primary",
      title: "Résumé row",
      type: "boolean",
      description: "Highlights the row and points it at the uploaded PDF.",
      initialValue: false,
    }),
    orderField,
  ],
  preview: { select: { title: "path", subtitle: "value" } },
});

export const schemaTypes = [
  // objects
  metric,
  agendaItem,
  detailRow,
  linkRef,
  lensSectionConfig,
  // documents
  siteSettings,
  lensHero,
  sectionCopy,
  caseStudy,
  deltaRow,
  leadershipCard,
  stackTier,
  historyItem,
  credential,
  repo,
  shippedItem,
  snapshotRow,
  endpoint,
];
