import type { ReactNode } from "react";

import type { LensSectionConfig, SectionKey } from "../types";
import { RichText } from "./RichText";

export function QuestionSection({
  id,
  config,
  children,
}: {
  id: SectionKey;
  config: LensSectionConfig;
  children: ReactNode;
}) {
  return (
    <section className="section" id={`s-${id}`} style={{ order: config.order }}>
      <div className="q-head">
        <span className="q-num">{config.num}</span>
        <h2>{config.question}</h2>
      </div>
      {config.answer ? (
        <p className="q-answer">
          <RichText text={config.answer} />
        </p>
      ) : null}
      {children}
    </section>
  );
}
