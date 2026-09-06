import type {
  CaseStudy,
  Credential,
  DeltaRow,
  Endpoint,
  HistoryItem,
  LeadershipCard,
  LensKey,
  Repo,
  ShippedItem,
  SiteSettings,
  SnapshotRow,
  StackTier,
} from "../types";
import { RichText } from "./RichText";

/* ── case studies ──────────────────────────────────────── */

export function CaseStudyCard({
  study,
  lens,
}: {
  study: CaseStudy;
  lens: LensKey;
}) {
  const details = lens === "engineer" ? study.engineerDetails : study.hmDetails;
  const tag = lens === "engineer" ? study.tagEngineer : study.tagHm;

  return (
    <article className={`panel svc${study.featured ? " svc-featured" : ""}`}>
      <header className="panel-head">
        <span className="panel-title">
          <span className="pip pip-ok" />
          {study.slug}
        </span>
        {tag ? (
          <span
            className={`panel-tag${study.featured ? " tag-featured" : ""}`}
          >
            {tag}
          </span>
        ) : null}
      </header>

      <div className="svc-body">
        <h3>{study.title}</h3>
        <p className="svc-lede">{study.lede}</p>
        <div className="kv">
          {details.map((row, i) => (
            <DetailPair key={i} label={row.label} body={row.body} />
          ))}
        </div>
      </div>

      <footer className="svc-foot">
        <ul className="chips">
          {study.chips.map((chip) => (
            <li key={chip}>{chip}</li>
          ))}
        </ul>
        <div className="svc-links">
          {study.links.length > 0
            ? study.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))
            : study.internalLabel && (
                <span className="internal">{study.internalLabel}</span>
              )}
        </div>
      </footer>
    </article>
  );
}

/** Label and body must land as flat grid siblings, so this returns a fragment. */
function DetailPair({ label, body }: { label: string; body: string }) {
  return (
    <>
      <span className="k">{label}</span>
      <span className="v">
        <RichText text={body} />
      </span>
    </>
  );
}

export function CaseStudies({
  studies,
  lens,
}: {
  studies: CaseStudy[];
  lens: LensKey;
}) {
  return (
    <div className="services">
      {studies.map((study) => (
        <CaseStudyCard key={study.id} study={study} lens={lens} />
      ))}
    </div>
  );
}

/* ── deltas ────────────────────────────────────────────── */

export function Deltas({ rows }: { rows: DeltaRow[] }) {
  return (
    <ul className="deltas">
      {rows.map((row, i) => (
        <li key={i}>
          <span className="d-label">{row.label}</span>
          <span className="d-before">{row.before}</span>
          <span className="d-arrow" aria-hidden="true">
            →
          </span>
          <span className="d-after">{row.after}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── leadership ────────────────────────────────────────── */

export function Leadership({
  cards,
  pullQuote,
}: {
  cards: LeadershipCard[];
  pullQuote: string;
}) {
  return (
    <>
      <blockquote className="pullquote">{pullQuote}</blockquote>
      <div className="lead-grid">
        {cards.map((card, i) => (
          <article className="panel scope-card" key={i}>
            <h3>{card.title}</h3>
            <p>
              <RichText text={card.body} />
            </p>
          </article>
        ))}
      </div>
    </>
  );
}

/* ── recruiter snapshot ────────────────────────────────── */

export function Snapshot({ rows }: { rows: SnapshotRow[] }) {
  return (
    <div className="panel snapshot">
      <dl>
        {rows.map((row, i) => {
          const external = row.href ? /^https?:/i.test(row.href) : false;
          return (
            <div key={i}>
              <dt>{row.label}</dt>
              <dd>
                {row.href ? (
                  <a
                    className="inline-link"
                    href={row.href}
                    {...(external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {row.value}
                  </a>
                ) : row.highlight ? (
                  <b>{row.value}</b>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

/* ── recruiter shipped list ────────────────────────────── */

export function Shipped({ items }: { items: ShippedItem[] }) {
  return (
    <div className="panel">
      <ul className="oss-list">
        {items.map((item, i) => (
          <li key={i}>
            {item.url ? (
              <a
                className="oss-name"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {item.name} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="oss-name">{item.name}</span>
            )}
            <span className="oss-desc">{item.description}</span>
            {item.codeUrl ? (
              <a
                className="oss-code"
                href={item.codeUrl}
                target="_blank"
                rel="noreferrer"
              >
                code ↗
              </a>
            ) : item.badge ? (
              <span className="internal">{item.badge}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── stack ─────────────────────────────────────────────── */

export function Stack({
  tiers,
  lens,
  settings,
}: {
  tiers: StackTier[];
  lens: LensKey;
  settings: SiteSettings;
}) {
  return (
    <>
      {lens === "recruiter" ? (
        <div className="panel keyword-block">
          <p className="tier-label">{settings.keywordsLabel}</p>
          <p className="keywords">{settings.keywords}</p>
        </div>
      ) : null}

      <div className="capacity">
        {tiers.map((tier, i) => (
          <div key={i}>
            <h3 className="cap-tier">
              <span className={`pip pip-${tier.pip}`} />
              {tier.name}
            </h3>
            <ul
              className={`tag-cloud${tier.strong ? " tag-cloud--strong" : ""}${
                tier.quiet ? " tag-cloud--quiet" : ""
              }`}
            >
              {tier.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {tier.subName && tier.subItems?.length ? (
              <>
                <h3 className="cap-tier cap-tier--sub">{tier.subName}</h3>
                <ul className="tag-cloud tag-cloud--quiet">
                  {tier.subItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}

/* ── history + credentials ─────────────────────────────── */

export function History({
  roles,
  credentials,
}: {
  roles: HistoryItem[];
  credentials: Credential[];
}) {
  return (
    <>
      <div className="panel certs">
        <ul className="history">
          {roles.map((role, i) => (
            <li key={i}>
              <strong>{role.role}</strong>
              <span>{role.detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="panel certs certs-edu">
        <header className="panel-head">
          <span className="panel-title">clearance &amp; education</span>
          <span className="panel-tag tag-featured">TS/SCI + FSP active</span>
        </header>
        <ul>
          {credentials.map((credential, i) => (
            <li key={i}>
              <strong>{credential.title}</strong>
              <span>{credential.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

/* ── public code ───────────────────────────────────────── */

export function Repos({ repos }: { repos: Repo[] }) {
  return (
    <div className="panel">
      <ul className="oss-list">
        {repos.map((repo) => (
          <li key={repo.name}>
            <a
              className="oss-name"
              href={repo.codeUrl}
              target="_blank"
              rel="noreferrer"
            >
              {repo.name} <span aria-hidden="true">↗</span>
            </a>
            <span className="oss-desc">{repo.description}</span>
            {repo.liveUrl ? (
              <a
                className="oss-code"
                href={repo.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                {repo.liveLabel ?? "live ↗"}
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── endpoints ─────────────────────────────────────────── */

export function Endpoints({ endpoints }: { endpoints: Endpoint[] }) {
  return (
    <div className="endpoints">
      {endpoints.map((endpoint, i) => {
        const external = /^https?:/i.test(endpoint.url);
        return (
          <a
            key={i}
            className={`ep${endpoint.primary ? " ep-primary" : ""}`}
            href={endpoint.url || "#s-contact"}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            <span className="ep-method">{endpoint.method}</span>
            <span className="ep-path">{endpoint.path}</span>
            <span className="ep-val">{endpoint.value}</span>
            <span className="ep-arrow" aria-hidden="true">
              {endpoint.arrow}
            </span>
          </a>
        );
      })}
    </div>
  );
}
