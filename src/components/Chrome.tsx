import type { SiteSettings } from "../types";
import { LensSwitcher } from "./LensSwitcher";

export function StatusBar({ settings }: { settings: SiteSettings }) {
  return (
    <div className="statusbar">
      <span className="sb-left">
        <span className="pip pip-ok" />
        <strong>Available</strong> — {settings.availability}
      </span>
      <span className="sb-right">
        <span className="sb-clearance">{settings.clearance}</span>
        <span className="sb-sep">/</span>
        <span>{settings.location}</span>
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
