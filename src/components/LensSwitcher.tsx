import { LENS_KEYS, LENS_LABELS } from "../types";
import { useLens } from "../lens/LensContext";

export function LensSwitcher() {
  const { lens, setLens, chosen } = useLens();

  return (
    <div
      className={`lens${chosen ? "" : " lens--new"}`}
      role="group"
      aria-label="Tailor this page to your role"
    >
      <span className="lens-label">Viewing as</span>
      <div className="lens-btns">
        {LENS_KEYS.map((key) => (
          <button
            key={key}
            type="button"
            aria-pressed={lens === key}
            onClick={() => setLens(key)}
          >
            {LENS_LABELS[key]}
          </button>
        ))}
      </div>
    </div>
  );
}
