# Content Architecture — What the site should say

> This is the information layer. All three visual concepts render *this* content.
> The current site is organized around **sections that exist** (About / Skills / Projects / Experience / Education).
> A recruiter-facing site should be organized around **questions a hiring manager asks**.

---

## The 7 questions the site must answer

| # | Question in their head | Where it's answered |
|---|---|---|
| 1 | Who is this and what do they do? | Hero — one sentence, no fluff |
| 2 | Are they credible? | Proof bar — revenue, scale, clearance, mentorship |
| 3 | Can they clear our bar? | Active TS/SCI + Full Scope Polygraph, stated up front |
| 4 | Can they actually build? | Selected work — Microsoft case studies, outcome-first |
| 5 | Will they fit my stack? | Stack, grouped by depth of use, not a logo wall |
| 6 | What's their trajectory? | Experience — impact bullets, not duty descriptions |
| 7 | How do I reach them? | Persistent contact + one-click résumé |

Everything else is noise and should be cut.

---

## 1. Identity / Hero

**Name:** Brady Haden
**Role:** Senior Software Engineer — Microsoft, Azure
**Clearance:** Active TS/SCI with Full Scope Polygraph

**Positioning line (the single most important sentence on the site):**
> I own mission-critical cloud systems end to end — including inside Azure's air-gapped clouds.

**Support line:**
> Five years at Microsoft designing control planes, fleet automation, and migration tooling
> for federal and enterprise customers, then mentoring the engineers who keep them running.
> U.S. Air Force veteran. Open to senior cloud &amp; distributed systems roles.

**Primary CTA:** View the work · **Secondary:** Download résumé (PDF) · **Tertiary:** Email

> **Why this changes:** the current hero says *"Featured: VA Loan Second Tier Entitlement Calculator"* — it
> leads with a side project instead of the strongest credential. Lead with the Microsoft platform work.

> **Surface the clearance early.** An active TS/SCI with Full Scope Polygraph is the single most
> filterable attribute on the résumé — cleared roles are a different, smaller, better-paid market.
> It belongs above the fold, not buried in a footer.

---

## 2. Proof bar (credibility in 3 seconds)

Four hard numbers, above the fold:

| Value | Label |
|---|---|
| **$4M** | Monthly recurring revenue from a control plane I led |
| **40k+** | Production servers upgraded monthly, at 99.98% success |
| **TS/SCI** | Active, with Full Scope Polygraph |
| **5** | Engineers mentored — new-hire ramp time cut in half |

Numbers > adjectives. This replaces the current "Strengths & Focus Areas" section
("Beautifully Simplistic UI", "Performance Optimized Code"), which is unverifiable
self-description that every portfolio has.

---

## 3. Selected work — lead with the systems, not the side projects

The old site showed four personal projects, the newest from 2023. The Microsoft platform work
and the Modern Alchemy client build are both far stronger, so those become the primary content
and the older side projects drop to a compact strip underneath.

Each case study carries: **what it is → the hard part → the result**. The Microsoft work has no
live links — it's internal, and the site says so plainly rather than pretending otherwise.

### Cross-Domain Solution Control Plane — *flagship*
The control plane API behind a new cross-domain solution running in Azure's air-gapped clouds.
- The hard part: air-gapped clouds invalidate most of what a control plane normally leans on. No external dependencies, no shortcuts, a very high bar for correctness.
- Result: led design and development end to end. **$4M in monthly recurring revenue.**
- Stack: C# · .NET · Azure air-gapped · API design

### Modern Alchemy Tattoo Co. — *commissioned client work, 2025*
A public site, booking platform, and self-service CMS for a tattoo studio in North East, MD.
- The hard part: the studio's content changes constantly — artists, portfolios, booking availability, announcements. Any design that routed those edits through the developer would have gone stale within a month.
- Result: the owner and artists edit every page, image, and form field themselves through an embedded Sanity Studio and a role-scoped staff portal. **Shipped 2025, still running with zero maintenance requests.**
- Notable: Google SSO with Owner/Resident/Guest roles · three booking modes per artist (custom form, embedded widget, external link) · direct image upload to the CMS · live booking updates · per-artist SEO metadata with JSON-LD.
- Stack: Next.js App Router · TypeScript · Sanity · Mantine · NextAuth · Zod · Vercel
- [modernalchemytattoo.com](https://www.modernalchemytattoo.com/) · [code](https://github.com/bhaden94/modern-alchemy-site)

> **This one carries unusual weight.** It's the only item that is recent, public, paid, *and*
> fully inspectable — a hiring manager can read the source and then click through to the
> running product. It also shows range the Microsoft bullets don't: product thinking, client
> communication, and shipping something a non-technical owner operates without you.

### Fleet OS Upgrade Automation
Linux patching across tens of thousands of production servers.
- The hard part: every server is somebody's running database. Patching happens monthly and must never become a customer-visible event.
- Result: **40k+ servers per month at a sustained 99.98% success rate.**
- Stack: C# · Linux · Docker · Azure

### Production Workflow Observability
A secure, read-only window into what production workflows actually did.
- The hard part: on-call investigations opened with a ~15 minute wait just to see workflow state.
- Result: adopted by two teams. Investigation latency went from **~15 minutes to real time.**
- Stack: C# · React · TypeScript

### MySQL Flexible Server — Business Critical
A premium database tier, plus the learning path that got customers onto it.
- The hard part: shipping the tier is half the job; customers also have to understand it well enough to adopt it.
- Result: UX and backend architecture plus a 45-module learning center — **4k new paid instances, $2M MRR**, +20% engagement, +15% satisfaction.
- Stack: C# · .NET · React · MySQL

### Also built, in the open (compact strip)
[VA Calculator](https://va-calculator.com) · [Covid-19 Tracker V2](https://covid-19-tracker-v2-fe.vercel.app/) ·
[Loki Discord Bot](https://huggingface.co/bhaden94/LokiDiscordBot-medium) · [SpaceX Timeline](https://bhaden94.github.io/spacex-app/)

One line and a code link each. They prove you ship outside work; they no longer have to carry the page.

---

## 4. Stack — grouped by depth, not by category

The current site shows a flat wall of ~35 logos. That signals nothing; a wall of 35 logos
reads the same as a wall of 5. Group by honest depth instead:

**Daily** — C# · .NET · Azure · TypeScript · React · Docker
**Strong** — PostgreSQL · MySQL · Linux · Python · Java · PowerShell · SQL
**Familiar** — Next.js · Node · AWS · MongoDB · Kubernetes · Terraform · Grafana · Elasticsearch

**Practice** (named explicitly — recruiters search these and they're invisible today):
distributed systems &amp; cloud architecture · air-gapped cloud · API design · CI/CD &amp;
infrastructure as code · security &amp; compliance · observability &amp; monitoring ·
AI-assisted engineering · technical mentorship

---

## 5. Experience — impact, not duties

**Senior Software Engineer — Microsoft · Azure** · Mar 2021 – Present
- Led design and development of a control plane API for a new cross-domain solution in Azure's air-gapped clouds, driving $4M in monthly recurring revenue.
- Automated Linux OS upgrade tooling across 40k+ production servers monthly, sustaining a 99.98% success rate.
- Delivered UX and backend architecture for MySQL Flexible Server's business-critical tier plus a 45-module learning center — 4k new paid instances, $2M MRR, +20% engagement, +15% satisfaction.
- Shipped a secure, read-only production workflow-observability tool for two teams, cutting incident-investigation latency from ~15 minutes to real time.
- Spearheading a multi-semester migration of thousands of legacy customer workloads, tracked by a self-built parity-validation dashboard that surfaced 20+ outstanding gaps.
- Piloted onboarding of new resource types with a central platform team, cutting onboarding from ~2 months to ~2 weeks for every team that followed.
- Built AI-assisted tooling for release documentation and PM-ready proposal one-pagers, cutting feature-planning time ~92% (4 hrs → 20 min).
- Architected configuration modernization across 4+ services and mentors 5 engineers, cutting new-engineer ramp time 50%.

**Cloud Engineer — John Deere** · Jan – Mar 2021
- AWS data-aggregation and anomaly-detection pipelines in Python.

**Full-Stack Software Engineer — LevelUP Code Works** · Sep – Dec 2020
- Raised backend test coverage 65% across a 250K-line codebase.

**Data Analyst — U.S. Air Force** · Aug 2014 – Mar 2021
- Seven years of high-stakes analysis and operations. The origin of the active clearance.

> The military service stays, condensed to a single line. It's a differentiator — it's where
> the clearance comes from — but it should not outweigh the engineering work visually.

---

## 6. Clearance & education

- **Active TS/SCI with Full Scope Polygraph**
- **B.S. Information & Computer Science** — Park University
- **A.A.S. Intelligence Studies** — CCAF
- **A.A.S. Aviation Maintenance** — CCAF
- **Full-Stack Software Engineering** — Galvanize

Compact list, clearance first. This is a checkbox for recruiters, not a feature.

---

## 7. Contact — always reachable

Sticky/persistent, not just a bottom section:
Email · GitHub · LinkedIn · **Résumé (PDF)**
Plus an availability line: *"Open to senior cloud &amp; distributed systems roles. Active TS/SCI + FSP."*

---

## Structural changes from today's site

| Today | Proposed | Why |
|---|---|---|
| 240px permanent sidebar drawer eating desktop width | Slim top nav or scroll-spy rail | Reclaims the canvas; drawers are for apps, not portfolios |
| Full-viewport hero of app screenshots | Hero = positioning sentence + proof bar | A screenshot doesn't say what you do |
| Title reads "Software Engineer" | "Senior Software Engineer" | Match the résumé; level is a filter |
| Clearance not mentioned anywhere | TS/SCI + FSP above the fold | The most filterable attribute you have |
| Side projects are the whole portfolio | Microsoft case studies + Modern Alchemy first, older side projects as a strip | The platform work and the paid client build are much stronger |
| "Strengths & Focus Areas" hover overlays | Deleted, replaced by metrics | Unverifiable claims |
| Flip cards hiding project detail | Flat cards, everything visible | Never hide substance behind an interaction |
| 35-logo skill wall | 3 tiers by depth + a named "practice" list | Signals seniority instead of breadth-panic |
| Contact only at the very bottom | Persistent + footer | Reduce friction at the moment of intent |
| No résumé link | Résumé PDF as a primary CTA | The #1 thing a recruiter wants |
| No page metadata / OG image | Full meta + OG card | It gets shared in DMs and Slack |
