import type { SiteSettings } from "../types";
import { LensSwitcher } from "./LensSwitcher";

export function StatusBar({ settings }: { settings: SiteSettings }) {
  const open = settings.isAvailable;
  const label = open ? settings.availableLabel : settings.unavailableLabel;
  const detail = open ? settings.availability : settings.unavailableDetail;

  return (
    <div className={`statusbar${open ? "" : " statusbar--closed"}`}>
      <span className="sb-left">
        <span className={`pip ${open ? "pip-ok" : "pip-warn"}`} />
        <strong>{label}</strong>
        {/* Redundant on mobile, the hero lede says the same thing. */}
        {detail ? <span className="sb-detail">· {detail}</span> : null}
      </span>
      <span className="sb-right">
        <span className="sb-clearance">{settings.clearance}</span>
        <span className="sb-sep">/</span>
        <span className="sb-location">{settings.location}</span>
      </span>
    </div>
  );
}

export function TopBar({ settings }: { settings: SiteSettings }) {
  return (
    <header className="topbar">
      <a className="brand" href="#top">
        <span className="brand-mark">{settings.brandMark}</span>
        <span className="brand-name">
          {settings.name.toLowerCase()}
          <span className="brand-role">{settings.role}</span>
        </span>
      </a>

      <LensSwitcher />

      <a
        className="btn-mono btn-resume"
        href={settings.resumeUrl || "#s-contact"}
        {...(settings.resumeUrl
          ? { target: "_blank", rel: "noreferrer" }
          : {})}
      >
        résumé.pdf ↓
      </a>
    </header>
  );
}
