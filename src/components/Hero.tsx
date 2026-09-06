import type { LensHero, SiteSettings } from "../types";

export function Hero({
  hero,
  settings,
}: {
  hero: LensHero;
  settings: SiteSettings;
}) {
  return (
    <section className="hero-q" id="s-hero">
      <p className="kicker">{settings.kicker}</p>

      <h1 className="q-hero-title">
        {hero.titleLead}
        {hero.titleHighlight ? (
          <>
            {hero.titleLead ? <br /> : null}
            <span className="hl">{hero.titleHighlight}</span>
          </>
        ) : null}
        {hero.titleTail}
      </h1>

      <p className="q-hero-lede">{hero.lede}</p>

      <div className="hero-metrics" aria-label="At a glance">
        {hero.metrics.map((metric, i) => (
          <div key={i}>
            <span className={`m-val${metric.small ? " m-val--sm" : ""}`}>
              {metric.value}
              {metric.unit ? <i>{metric.unit}</i> : null}
            </span>
            <span className="m-lab">{metric.label}</span>
          </div>
        ))}
      </div>

      <nav className="agenda" aria-label="On this page">
        <ol>
          {hero.agenda.map((item) => (
            <li key={item.target}>
              <a href={`#s-${item.target}`}>
                <span>{item.num}</span> {item.question}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
