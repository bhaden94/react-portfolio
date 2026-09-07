export type LensKey = "recruiter" | "hm" | "engineer";

export const LENS_KEYS: LensKey[] = ["recruiter", "hm", "engineer"];

export const LENS_LABELS: Record<LensKey, string> = {
  recruiter: "Recruiter",
  hm: "Hiring manager",
  engineer: "Engineer",
};

/** Section identifiers. Order and visibility are driven per lens by `SectionCopy`. */
export type SectionKey =
  | "snapshot"
  | "shipped"
  | "owned"
  | "changed"
  | "lead"
  | "customer"
  | "code"
  | "stack"
  | "history"
  | "contact";

export interface Metric {
  value: string;
  /** Rendered smaller and muted next to the value, e.g. the "+" in "40k+". */
  unit?: string;
  label: string;
  /** Use a reduced type size for word values like "TS/SCI + FSP". */
  small?: boolean;
}

export interface AgendaItem {
  num: string;
  question: string;
  /** Section key the item scrolls to. */
  target: SectionKey;
}

export interface LensHero {
  lens: LensKey;
  /** Text before the highlighted run. */
  titleLead: string;
  titleHighlight?: string;
  titleTail?: string;
  lede: string;
  metrics: Metric[];
  agenda: AgendaItem[];
}

/** A `key: value` row inside a case study. Values support `**bold**`. */
export interface DetailRow {
  label: string;
  body: string;
}

export interface LinkRef {
  label: string;
  url: string;
}

export interface CaseStudy {
  id: string;
  /** Monospace identifier in the panel header, e.g. `cds-control-plane`. */
  slug: string;
  title: string;
  lede: string;
  tagHm?: string;
  tagEngineer?: string;
  hmDetails: DetailRow[];
  engineerDetails: DetailRow[];
  chips: string[];
  links: LinkRef[];
  /** Shown instead of links when the work is not public. */
  internalLabel?: string;
  featured: boolean;
  section: "owned" | "customer";
  order: number;
}

export interface DeltaRow {
  label: string;
  before: string;
  after: string;
  order: number;
}

export interface LeadershipCard {
  title: string;
  body: string;
  order: number;
}

export interface StackTier {
  name: string;
  pip: "ok" | "warn" | "idle";
  items: string[];
  strong?: boolean;
  quiet?: boolean;
  subName?: string;
  subItems?: string[];
  order: number;
}

export interface HistoryItem {
  role: string;
  detail: string;
  order: number;
}

export interface Credential {
  title: string;
  detail: string;
  order: number;
}

export interface Repo {
  name: string;
  description: string;
  codeUrl: string;
  liveUrl?: string;
  liveLabel?: string;
  order: number;
}

export interface ShippedItem {
  name: string;
  description: string;
  url?: string;
  codeUrl?: string;
  badge?: string;
  order: number;
}

export interface SnapshotRow {
  label: string;
  value: string;
  /** Renders the value in the accent colour. */
  highlight?: boolean;
  /** Renders the value as a link. */
  href?: string;
  /** Points the link at the uploaded résumé PDF when one exists. */
  isResume?: boolean;
  order: number;
}

export interface LensSectionConfig {
  order: number;
  num: string;
  question: string;
  answer?: string;
}

export interface SectionCopy {
  key: SectionKey;
  lenses: Partial<Record<LensKey, LensSectionConfig>>;
}

export interface Endpoint {
  method: string;
  path: string;
  value: string;
  url: string;
  arrow: string;
  primary?: boolean;
  order: number;
}

export interface SiteSettings {
  name: string;
  role: string;
  brandMark: string;
  kicker: string;
  /** Drives the status bar wording and colour. */
  isAvailable: boolean;
  availableLabel: string;
  /** Detail shown after the label while available. */
  availability: string;
  unavailableLabel: string;
  unavailableDetail: string;
  clearance: string;
  location: string;
  pullQuote: string;
  keywords: string;
  keywordsLabel: string;
  footerStatus: string;
  footerNote: string;
  metaTitle: string;
  metaDescription: string;
  resumeUrl: string;
  resumeLabel: string;
}

export interface SiteContent {
  settings: SiteSettings;
  heroes: LensHero[];
  sections: SectionCopy[];
  caseStudies: CaseStudy[];
  deltas: DeltaRow[];
  leadership: LeadershipCard[];
  stack: StackTier[];
  history: HistoryItem[];
  credentials: Credential[];
  repos: Repo[];
  shipped: ShippedItem[];
  snapshot: SnapshotRow[];
  endpoints: Endpoint[];
}
