import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { LENS_KEYS, type LensKey } from "../types";

const STORAGE_KEY = "lens";
const FALLBACK_LENS: LensKey = "hm";

export function isLens(value: unknown): value is LensKey {
  return typeof value === "string" && LENS_KEYS.includes(value as LensKey);
}

/** URL wins, then the visitor's saved choice, then the CMS default. */
function readInitialLens(fallback: LensKey): { lens: LensKey; explicit: boolean } {
  if (typeof window === "undefined") return { lens: fallback, explicit: false };

  const fromUrl = new URLSearchParams(window.location.search).get("view");
  if (isLens(fromUrl)) return { lens: fromUrl, explicit: true };

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLens(stored)) return { lens: stored, explicit: true };
  } catch {
    // Private browsing or blocked storage, fall through to the default.
  }

  return { lens: fallback, explicit: false };
}

interface LensContextValue {
  lens: LensKey;
  setLens: (lens: LensKey) => void;
  /** False until the visitor has picked a lens, used to nudge the switcher once. */
  chosen: boolean;
}

const LensContext = createContext<LensContextValue | null>(null);

export function LensProvider({
  children,
  defaultLens,
}: {
  children: React.ReactNode;
  defaultLens?: LensKey;
}) {
  // Read once on mount; a later CMS change shouldn't move the page under someone.
  const initial = useMemo(
    () => readInitialLens(isLens(defaultLens) ? defaultLens : FALLBACK_LENS),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const [lens, setLensState] = useState<LensKey>(initial.lens);
  const [chosen, setChosen] = useState(initial.explicit);

  useEffect(() => {
    document.body.setAttribute("data-lens", lens);
  }, [lens]);

  const value = useMemo<LensContextValue>(
    () => ({
      lens,
      chosen,
      setLens: (next) => {
        setLensState(next);
        setChosen(true);
        try {
          window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
          // Ignore storage failures; the in-memory choice still applies.
        }
        const url = new URL(window.location.href);
        url.searchParams.set("view", next);
        window.history.replaceState(null, "", url);
      },
    }),
    [lens, chosen],
  );

  return <LensContext.Provider value={value}>{children}</LensContext.Provider>;
}

export function useLens(): LensContextValue {
  const ctx = useContext(LensContext);
  if (!ctx) throw new Error("useLens must be used within a LensProvider");
  return ctx;
}
