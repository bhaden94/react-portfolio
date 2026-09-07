import type { SiteContent } from "../types";

/**
 * Canonical content for the site.
 *
 * This serves three purposes:
 *  1. Renders immediately on first paint, so the page is never blank.
 *  2. Acts as the fallback if Sanity is unreachable or a collection is empty.
 *  3. Feeds `scripts/generate-seed.mjs`, which produces the Sanity import file.
 *
 * Once content lives in Sanity, Sanity wins on a per-collection basis.
 */
export const defaultContent: SiteContent = {
  settings: {
    name: "Brady Haden",
    role: "senior software engineer · microsoft",
    brandMark: "bh",
    kicker:
      "// Senior Software Engineer · Microsoft Azure · Active TS/SCI + Full Scope Poly",
    defaultLens: "hm",
    isAvailable: true,
    availableLabel: "Available",
    availability: "open to senior cloud & distributed systems roles",
    unavailableLabel: "Not looking",
    unavailableDetail:
      "happy where I am, but glad to hear about exceptional roles",
    clearance: "TS/SCI + Full Scope Poly · active",
    location: "US · Remote",
    pullQuote:
      "Make the architecture clear enough that someone else can own it.",
    keywordsLabel: "All technologies",
    keywords:
      "C# · .NET · ASP.NET · Azure · Azure Government · TypeScript · JavaScript · React · Next.js · Node · Docker · Kubernetes · Linux · PostgreSQL · MySQL · SQL · Python · Java · Spring · PowerShell · Bash · Terraform · CI/CD · GitHub Actions · REST API design · Distributed systems · Microservices · Observability · Grafana · AWS · MongoDB · Elasticsearch · Sanity · Zod · Git",
    footerStatus: "all systems operational",
    footerNote: "Brady Haden · 2026",
    metaTitle: "Brady Haden · Senior Software Engineer",
    metaDescription:
      "Brady Haden is a Senior Software Engineer at Microsoft building mission-critical distributed cloud systems, including Azure's air-gapped clouds. Active TS/SCI with Full Scope Polygraph.",
    resumeUrl: "",
    resumeLabel: "Updated 2026",
  },

  heroes: [
    {
      lens: "recruiter",
      titleLead: "Everything you need, on one screen.",
      lede: "Senior Software Engineer at Microsoft, five years, currently on Azure's managed database platform. Active TS/SCI with Full Scope Polygraph. U.S. Air Force veteran.",
      metrics: [
        { value: "5", unit: "+ yrs", label: "software engineering" },
        { value: "Microsoft", label: "current employer", small: true },
        { value: "TS/SCI + FSP", label: "active clearance", small: true },
        { value: "Available", label: "US · remote", small: true },
      ],
      agenda: [
        { num: "01", question: "Who is this?", target: "snapshot" },
        { num: "02", question: "What have they shipped?", target: "shipped" },
        { num: "03", question: "What do they know?", target: "stack" },
        { num: "04", question: "Where have they worked?", target: "history" },
      ],
    },
    {
      lens: "hm",
      titleLead: "These are the questions I'd want answered.",
      titleHighlight: "Here are my answers.",
      lede: "Five years at Microsoft owning control planes, fleet automation, and migration tooling for federal and enterprise customers, and mentoring the engineers who now run them.",
      metrics: [
        { value: "40k", unit: "+", label: "servers patched monthly" },
        { value: "99.98", unit: "%", label: "upgrade success rate" },
        { value: "$4", unit: "M", label: "MRR from a system I led" },
        { value: "5", label: "engineers mentored" },
      ],
      agenda: [
        { num: "01", question: "What have you owned?", target: "owned" },
        {
          num: "02",
          question: "What changed because you were there?",
          target: "changed",
        },
        { num: "03", question: "How do you lead?", target: "lead" },
        {
          num: "04",
          question: "Can you ship for a real customer?",
          target: "customer",
        },
      ],
    },
    {
      lens: "engineer",
      titleLead: "Constraints first.",
      titleHighlight: "Then what I did about them",
      titleTail: ".",
      lede: "Azure's managed Postgres/MySQL platform: upgrade orchestration across 40k+ Linux VMs a month, a control plane that has to work with no outbound network, and migration tooling for thousands of live customer workloads.",
      metrics: [
        { value: "40k", unit: "+", label: "Linux VMs per rollout" },
        { value: "99.98", unit: "%", label: "upgrade success rate" },
        { value: "~0", unit: "s", label: "incident triage latency" },
        { value: "4", unit: "+", label: "services modernized" },
      ],
      agenda: [
        {
          num: "01",
          question: "What's the hardest thing you've built?",
          target: "owned",
        },
        {
          num: "02",
          question: "What do you build unsupervised?",
          target: "customer",
        },
        { num: "03", question: "What can I actually read?", target: "code" },
        { num: "04", question: "What do you actually use?", target: "stack" },
      ],
    },
  ],

  sections: [
    {
      key: "snapshot",
      lenses: {
        recruiter: { order: 2, num: "01", question: "Who is this?" },
      },
    },
    {
      key: "shipped",
      lenses: {
        recruiter: { order: 3, num: "02", question: "What have they shipped?" },
      },
    },
    {
      key: "owned",
      lenses: {
        hm: {
          order: 2,
          num: "01",
          question: "What have you owned?",
          answer:
            "Three systems, end to end: the design, the rollout, the on-call, and the engineers who took them over afterward.",
        },
        engineer: {
          order: 2,
          num: "01",
          question: "What's the hardest thing you've built?",
          answer:
            "The control plane, because the constraints removed every normal escape hatch.",
        },
      },
    },
    {
      key: "changed",
      lenses: {
        hm: {
          order: 3,
          num: "02",
          question: "What changed because you were there?",
          answer: "Measured before and after, not adjectives.",
        },
      },
    },
    {
      key: "lead",
      lenses: {
        hm: { order: 4, num: "03", question: "How do you lead?" },
      },
    },
    {
      key: "customer",
      lenses: {
        hm: {
          order: 5,
          num: "04",
          question: "Can you ship for a real customer?",
          answer:
            "I built a paid production platform and then **made myself unnecessary.**",
        },
        engineer: {
          order: 3,
          num: "02",
          question: "What do you build unsupervised?",
          answer:
            "A CMS-driven booking platform where every behaviour is data, not code, so the client never has to call me.",
        },
      },
    },
    {
      key: "code",
      lenses: {
        engineer: {
          order: 4,
          num: "03",
          question: "What can I actually read?",
          answer: "The Microsoft work is internal. This is what's public.",
        },
      },
    },
    {
      key: "stack",
      lenses: {
        recruiter: {
          order: 4,
          num: "03",
          question: "What do they know?",
          answer: "Full keyword list first, then grouped by real depth.",
        },
        hm: {
          order: 6,
          num: "05",
          question: "What do you bring?",
          answer:
            "Grouped by how often I reach for it. No percentages, because they don't mean anything.",
        },
        engineer: {
          order: 5,
          num: "04",
          question: "What do you actually use?",
          answer:
            "Grouped by how often I reach for it. No percentages, because they don't mean anything.",
        },
      },
    },
    {
      key: "history",
      lenses: {
        recruiter: { order: 5, num: "04", question: "Where have they worked?" },
        hm: { order: 7, num: "06", question: "Where have you been?" },
        engineer: { order: 6, num: "05", question: "Where have you been?" },
      },
    },
    {
      key: "contact",
      lenses: {
        recruiter: {
          order: 6,
          num: "05",
          question: "What's next?",
          answer: "Email is fastest. I reply within 24 hours.",
        },
        hm: {
          order: 8,
          num: "07",
          question: "What's next?",
          answer: "Happy to walk through any of the above in detail.",
        },
        engineer: {
          order: 7,
          num: "06",
          question: "What's next?",
          answer: "Ask me about the air-gap constraints. That's the fun one.",
        },
      },
    },
  ],

  caseStudies: [
    {
      id: "cds-control-plane",
      slug: "cds-control-plane",
      title: "Cross-Domain Solution Control Plane",
      lede: "The control plane API behind a new cross-domain solution running in Azure's air-gapped clouds.",
      tagHm: "$4M MRR",
      tagEngineer: "no outbound network",
      hmDetails: [
        {
          label: "problem",
          body: "Air-gapped clouds invalidate most of what a control plane normally leans on. No external dependencies, no shortcuts, and a very high bar for correctness.",
        },
        {
          label: "what i owned",
          body: "Design and development end to end, from resource model through rollout. The service now drives **$4M in monthly recurring revenue**.",
        },
      ],
      engineerDetails: [
        {
          label: "constraint",
          body: "No outbound network. No reachable identity provider, no public package feeds, no telemetry egress, and no hotfix on the normal cadence. Every dependency resolved and vendored before the seal.",
        },
        {
          label: "approach",
          body: "Designed the resource model and API surface first, then worked backward to what could actually be satisfied inside the boundary. Deploy and rollback had to be provable offline, so correctness moved left into schema and contract validation.",
        },
      ],
      chips: ["C#", ".NET", "Azure air-gapped", "API design"],
      links: [],
      internalLabel: "internal · Microsoft",
      featured: true,
      section: "owned",
      order: 1,
    },
    {
      id: "fleet-os-upgrades",
      slug: "fleet-os-upgrades",
      title: "Fleet OS Upgrade Automation",
      lede: "Linux patching across tens of thousands of production servers.",
      tagHm: "99.98% success",
      tagEngineer: "99.98% success",
      hmDetails: [
        {
          label: "problem",
          body: "Every server is somebody's running database. Patching happens monthly and must never become a customer-visible event.",
        },
        {
          label: "what i owned",
          body: "The tooling and the rollout. **40k+ servers monthly** at a sustained **99.98% success rate**.",
        },
      ],
      engineerDetails: [
        {
          label: "constraint",
          body: "Monthly patch cycle across 40k+ Linux VMs, each hosting a live customer database. A reboot is a customer-visible availability event.",
        },
        {
          label: "approach",
          body: "Moved upgrade execution into containers so one rollout fans out across the fleet, then split the modes: security-only and allow-listed package sets apply without a reboot. Failure handling is per-node so a bad host doesn't stall the wave.",
        },
      ],
      chips: ["C#", "Linux", "Docker"],
      links: [],
      internalLabel: "internal",
      featured: false,
      section: "owned",
      order: 2,
    },
    {
      id: "workflow-observability",
      slug: "workflow-observability",
      title: "Production Workflow Observability",
      lede: "A secure, read-only window into what production workflows actually did.",
      tagHm: "15 min → real time",
      tagEngineer: "15 min → real time",
      hmDetails: [
        {
          label: "problem",
          body: "On-call investigations opened with a ~15 minute wait just to see workflow state.",
        },
        {
          label: "what i owned",
          body: "Built it for my team; a sister team adopted it without me driving it. Triage latency dropped to **real time**.",
        },
      ],
      engineerDetails: [
        {
          label: "constraint",
          body: "Engineers needed production workflow state mid-incident, but the data is sensitive and the tool could not become a write path or a new blast radius.",
        },
        {
          label: "approach",
          body: "Read-only by construction, scoped access, surfaced live instead of through the batch query path that cost ~15 minutes per lookup.",
        },
      ],
      chips: ["C#", "React", "TypeScript"],
      links: [],
      internalLabel: "internal",
      featured: false,
      section: "owned",
      order: 3,
    },
    {
      id: "modern-alchemy",
      slug: "modern-alchemy-site",
      title: "Modern Alchemy Tattoo Co.",
      lede: "Public site, booking platform, and self-service CMS for a tattoo studio in North East, MD.",
      tagHm: "paid client work · 2025 · live",
      tagEngineer: "paid client work · 2025 · live",
      hmDetails: [
        {
          label: "problem",
          body: "The studio's content changes constantly: artists, portfolios, booking availability, announcements. Any design that routed those edits through me would have gone stale within a month.",
        },
        {
          label: "result",
          body: "Owner and artists edit every page, image, and form field themselves through an embedded Sanity Studio and a role-scoped staff portal. **Shipped 2025, still running, zero maintenance requests.**",
        },
      ],
      engineerDetails: [
        {
          label: "design",
          body: "Next.js App Router, server components reading from Sanity. Every page is a CMS document with an `isActive` flag, so the owner can pull a page without a deploy.",
        },
        {
          label: "auth",
          body: "NextAuth with Google as sole provider; the session is enriched from the artist record so routes authorize against Owner/Resident/Guest roles rather than a static allowlist.",
        },
        {
          label: "forms",
          body: "Booking schemas generated per artist with Zod: available days, budget options, required fields all come from that artist's CMS record. Three booking modes per artist: native form, embedded third-party widget, or external redirect. Images upload straight to Sanity; the admin view subscribes to a Sanity listener so bookings appear without a refresh.",
        },
      ],
      chips: ["Next.js", "TypeScript", "Sanity", "NextAuth", "Zod", "Vercel"],
      links: [
        { label: "live ↗", url: "https://www.modernalchemytattoo.com/" },
        {
          label: "code ↗",
          url: "https://github.com/bhaden94/modern-alchemy-site",
        },
      ],
      featured: true,
      section: "customer",
      order: 1,
    },
  ],

  deltas: [
    {
      label: "Incident triage latency",
      before: "~15 min",
      after: "real time",
      order: 1,
    },
    {
      label: "New-engineer ramp",
      before: "2 sprints",
      after: "1 sprint",
      order: 2,
    },
    {
      label: "Resource-type onboarding",
      before: "~2 months",
      after: "~2 weeks",
      order: 3,
    },
    {
      label: "Feature planning cycle",
      before: "4 hrs",
      after: "20 min",
      order: 4,
    },
    {
      label: "Cross-domain control plane",
      before: "did not exist",
      after: "$4M MRR",
      order: 5,
    },
    {
      label: "MySQL business-critical tier",
      before: "did not exist",
      after: "4k instances · $2M MRR",
      order: 6,
    },
    {
      label: "Upstream OSS security fix",
      before: "open vulnerability",
      after: "900k+ weekly users protected",
      order: 7,
    },
  ],

  leadership: [
    {
      title: "Mentorship",
      body: "Technical mentor to **5 engineers**: 3 formal weekly 1:1s, 2 informal cross-org. Structured onboarding cut new-engineer ramp time in half.",
      order: 1,
    },
    {
      title: "Growing owners, not dependents",
      body: "Architected configuration modernization across **4+ services**, defined the target design, and mentored engineers through implementation. A junior engineer on that work now leads live-site debugging for the system.",
      order: 2,
    },
    {
      title: "Leverage beyond my team",
      body: "Pilot adopter with a central platform team for onboarding new resource types, cutting onboarding from ~2 months to **~2 weeks** for every team that followed.",
      order: 3,
    },
    {
      title: "Raising the floor",
      body: "Coached an engineer through landing a security fix in an upstream open-source API generator, later mirrored into internal feeds, protecting **900k+ weekly downstream users**.",
      order: 4,
    },
  ],

  stack: [
    {
      name: "daily",
      pip: "ok",
      strong: true,
      items: ["C#", ".NET", "Azure", "TypeScript", "React", "Docker"],
      order: 1,
    },
    {
      name: "strong",
      pip: "warn",
      items: [
        "PostgreSQL",
        "MySQL",
        "Linux",
        "Python",
        "Java",
        "PowerShell",
        "SQL",
      ],
      order: 2,
    },
    {
      name: "familiar",
      pip: "idle",
      quiet: true,
      items: [
        "Next.js",
        "Node",
        "AWS",
        "MongoDB",
        "Kubernetes",
        "Terraform",
        "Grafana",
        "Elasticsearch",
      ],
      subName: "practice",
      subItems: [
        "distributed systems",
        "cloud architecture",
        "air-gapped cloud",
        "API design",
        "CI/CD & IaC",
        "security & compliance",
        "observability",
        "technical mentorship",
      ],
      order: 3,
    },
  ],

  history: [
    {
      role: "Senior Software Engineer",
      detail: "Microsoft · Azure · Mar 2021 – Present",
      order: 1,
    },
    {
      role: "Cloud Engineer",
      detail: "John Deere · Jan – Mar 2021",
      order: 2,
    },
    {
      role: "Full-Stack Software Engineer",
      detail: "LevelUP Code Works · Sep – Dec 2020",
      order: 3,
    },
    {
      role: "Data Analyst",
      detail: "U.S. Air Force · Aug 2014 – Mar 2021",
      order: 4,
    },
  ],

  credentials: [
    {
      title: "Active TS/SCI with Full Scope Polygraph",
      detail: "current",
      order: 1,
    },
    {
      title: "B.S. Information & Computer Science",
      detail: "Park University",
      order: 2,
    },
    { title: "A.A.S. Intelligence Studies", detail: "CCAF", order: 3 },
    { title: "A.A.S. Aviation Maintenance", detail: "CCAF", order: 4 },
    { title: "Full-Stack Software Engineering", detail: "Galvanize", order: 5 },
  ],

  repos: [
    {
      name: "modern-alchemy-site",
      description:
        "Next.js + Sanity. Per-artist Zod form generation, role-scoped NextAuth, live booking listeners.",
      codeUrl: "https://github.com/bhaden94/modern-alchemy-site",
      liveUrl: "https://www.modernalchemytattoo.com/",
      liveLabel: "live ↗",
      order: 1,
    },
    {
      name: "va-calculator",
      description:
        "Second-tier VA entitlement math, county-indexed. Next.js server rendering, no backend.",
      codeUrl: "https://github.com/bhaden94/va-calculator",
      liveUrl: "https://va-calculator.com",
      liveLabel: "live ↗",
      order: 2,
    },
    {
      name: "Covid-19-Tracker-V2",
      description:
        "Multi-threaded Java/Spring ingestion into MongoDB, React front end, CI static analysis.",
      codeUrl: "https://github.com/bhaden94/Covid-19-Tracker-V2",
      liveUrl: "https://covid-19-tracker-v2-fe.vercel.app/",
      liveLabel: "live ↗",
      order: 3,
    },
    {
      name: "LokiDiscordChatbot",
      description:
        "Transcript sanitizing pipeline into a GPT-2 fine-tune on Hugging Face.",
      codeUrl: "https://github.com/bhaden94/LokiDiscordChatbot",
      liveUrl: "https://huggingface.co/bhaden94/LokiDiscordBot-medium",
      liveLabel: "model ↗",
      order: 4,
    },
    {
      name: "spacex-app",
      description:
        "Custom vertical-timeline pagination and responsive sidebar, built from scratch.",
      codeUrl: "https://github.com/bhaden94/spacex-app",
      liveUrl: "https://bhaden94.github.io/spacex-app/",
      liveLabel: "live ↗",
      order: 5,
    },
  ],

  shipped: [
    {
      name: "Cross-Domain Solution Control Plane",
      description:
        "Led the control plane API for a new secure-cloud offering. Drives $4M monthly recurring revenue.",
      badge: "Microsoft",
      order: 1,
    },
    {
      name: "Fleet OS Upgrade Automation",
      description:
        "Automated Linux patching across 40,000+ production servers monthly at a 99.98% success rate.",
      badge: "Microsoft",
      order: 2,
    },
    {
      name: "MySQL Business Critical Tier",
      description:
        "Backend and UX for a premium database tier: 4,000 new paid instances, $2M MRR.",
      badge: "Microsoft",
      order: 3,
    },
    {
      name: "Modern Alchemy Tattoo Co.",
      description:
        "Paid client project, 2025. Full site and booking platform the owner maintains herself.",
      url: "https://www.modernalchemytattoo.com/",
      codeUrl: "https://github.com/bhaden94/modern-alchemy-site",
      order: 4,
    },
  ],

  snapshot: [
    {
      label: "Current title",
      value: "Senior Software Engineer, Microsoft (Azure), since Mar 2021",
      order: 1,
    },
    {
      label: "Years experience",
      value: "5+ in software engineering; 7 prior in the U.S. Air Force",
      order: 2,
    },
    {
      label: "Clearance",
      value: "Active TS/SCI with Full Scope Polygraph",
      highlight: true,
      order: 3,
    },
    {
      label: "Location",
      value: "United States · open to remote",
      order: 4,
    },
    {
      label: "Core skills",
      value:
        "C#, .NET, Azure, TypeScript, React, Docker, PostgreSQL, MySQL, Linux, Python, Kubernetes, CI/CD, Terraform, distributed systems, API design, observability",
      order: 5,
    },
    {
      label: "Looking for",
      value: "Senior cloud, platform, or distributed systems roles",
      order: 6,
    },
    {
      label: "Education",
      value: "B.S. Information & Computer Science, Park University",
      order: 7,
    },
    {
      label: "Résumé",
      value: "Download PDF ↓",
      href: "#s-contact",
      isResume: true,
      order: 8,
    },
  ],

  endpoints: [
    {
      method: "GET",
      path: "/resume.pdf",
      value: "Updated 2026",
      url: "",
      arrow: "↓",
      primary: true,
      order: 1,
    },
    {
      method: "GET",
      path: "/email",
      value: "brady.s.haden@gmail.com",
      url: "mailto:brady.s.haden@gmail.com",
      arrow: "↗",
      order: 2,
    },
    {
      method: "GET",
      path: "/linkedin",
      value: "linkedin.com/in/brady-haden",
      url: "https://www.linkedin.com/in/brady-haden/",
      arrow: "↗",
      order: 3,
    },
    {
      method: "GET",
      path: "/github",
      value: "github.com/bhaden94",
      url: "https://github.com/bhaden94",
      arrow: "↗",
      order: 4,
    },
  ],
};
