import { useEffect, useMemo, useState } from "react";

import { buildTimeContent, fetchSiteContent } from "./sanity/queries";
import type { SiteContent } from "./types";

/**
 * Renders instantly from the snapshot captured at build time, then swaps in
 * live Sanity data when it arrives. A failed fetch is non-fatal — the build
 * time snapshot simply stays.
 */
export function useSiteContent(): SiteContent {
  const [content, setContent] = useState<SiteContent>(buildTimeContent);

  useEffect(() => {
    let active = true;

    fetchSiteContent()
      .then((next) => {
        if (active) setContent(next);
      })
      .catch((error) => {
        // Usually a missing CORS origin in Sanity; the build-time snapshot covers it.
        console.warn("Live Sanity read failed; using build-time content.", error);
      });

    return () => {
      active = false;
    };
  }, []);

  return useMemo(() => content, [content]);
}
