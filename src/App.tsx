import { useEffect } from "react";

import { StatusBar, TopBar } from "./components/Chrome";
import { Hero } from "./components/Hero";
import { QuestionSection } from "./components/QuestionSection";
import {
  CaseStudies,
  Deltas,
  Endpoints,
  History,
  Leadership,
  Repos,
  Shipped,
  Snapshot,
  Stack,
} from "./components/Sections";
import { LensProvider, useLens } from "./lens/LensContext";
import type { SectionKey, SiteContent } from "./types";
import { useSiteContent } from "./useSiteContent";

function SiteBody({ content }: { content: SiteContent }) {
  const { lens } = useLens();
  const { settings } = content;

  const hero =
    content.heroes.find((h) => h.lens === lens) ?? content.heroes[0];

  useEffect(() => {
    document.title = settings.metaTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", settings.metaDescription);
  }, [settings.metaTitle, settings.metaDescription]);

  /** Section configs visible in this lens, in render order. */
  const visible = content.sections
    .map((section) => ({ key: section.key, config: section.lenses[lens] }))
    .filter(
      (entry): entry is { key: SectionKey; config: NonNullable<typeof entry.config> } =>
        entry.config != null,
    )
    .sort((a, b) => a.config.order - b.config.order);

  const renderBody = (key: SectionKey) => {
    switch (key) {
      case "snapshot":
        return <Snapshot rows={content.snapshot} />;
      case "shipped":
        return <Shipped items={content.shipped} />;
      case "owned":
        return (
          <CaseStudies
            lens={lens}
            studies={content.caseStudies.filter((s) => s.section === "owned")}
          />
        );
      case "changed":
        return <Deltas rows={content.deltas} />;
      case "lead":
        return (
          <Leadership
            cards={content.leadership}
            pullQuote={settings.pullQuote}
          />
        );
      case "customer":
        return (
          <CaseStudies
            lens={lens}
            studies={content.caseStudies.filter((s) => s.section === "customer")}
          />
        );
      case "code":
        return <Repos repos={content.repos} />;
      case "stack":
        return <Stack tiers={content.stack} lens={lens} settings={settings} />;
      case "history":
        return (
          <History roles={content.history} credentials={content.credentials} />
        );
      case "contact":
        return <Endpoints endpoints={content.endpoints} />;
      default:
        return null;
    }
  };

  return (
    <>
      <a className="skip-link" href="#s-hero">
        Skip to content
      </a>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      <StatusBar settings={settings} />
      <TopBar settings={settings} />

      <main id="top">
        <Hero hero={hero} settings={settings} />
        {visible.map(({ key, config }) => (
          <QuestionSection key={key} id={key} config={config}>
            {renderBody(key)}
          </QuestionSection>
        ))}
      </main>

      <footer className="footer">
        <span>
          <span className="pip pip-ok" />
          {settings.footerStatus}
        </span>
        <span>{settings.footerNote}</span>
      </footer>
    </>
  );
}

export default function App() {
  const content = useSiteContent();

  return (
    <LensProvider defaultLens={content.settings.defaultLens}>
      <SiteBody content={content} />
    </LensProvider>
  );
}
