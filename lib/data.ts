export type Project = {
  slug: string;
  name: string;
  client: string;
  industry: string;
  platform: "Webflow" | "Framer";
  services: string[];
  year: string;
  timeline: string;
  summary: string;
  heroHeadline: string;
  objective: string;
  liveUrl?: string;
  featured: boolean;
  layout: "wide" | "split" | "feature" | "tall";
  tags: string[];
  challenge: { title: string; body: string }[];
  clientContext: string;
  strategy: string[];
  outcomes: { label: string; value: string }[];
  qualitativeOutcomes: string[];
  quote: { text: string; name: string; role: string };
  nextSlug: string;
};

export const projects: Project[] = [
  {
    slug: "solace-health",
    name: "Solace Health",
    client: "Solace Health",
    industry: "Healthcare",
    platform: "Webflow",
    services: ["Strategy", "UX/UI", "Webflow Development", "CMS"],
    year: "2025",
    timeline: "7 weeks",
    summary:
      "A patient-acquisition website for a multi-location clinic group, rebuilt around clarity, trust and appointment conversion.",
    heroHeadline: "Transforming Solace Health into a digital front door built for patient trust.",
    objective: "increasing qualified appointment requests",
    liveUrl: "#",
    featured: true,
    layout: "wide",
    tags: ["Webflow", "Healthcare"],
    challenge: [
      { title: "Brand", body: "A visual identity that read more like a hospital form than a modern care provider." },
      { title: "UX", body: "Location and service information buried three levels deep, causing drop-off before booking." },
      { title: "Conversion", body: "No clear path from landing page to appointment request across any device." },
      { title: "Technology", body: "A static site with no CMS, meaning every location update required a developer." },
    ],
    clientContext:
      "Solace Health operates a growing network of outpatient clinics. Their existing site was built years earlier on a legacy platform and hadn't kept pace with the number of locations, providers or services they now offer. Marketing couldn't make basic content changes without engineering help, and prospective patients were bouncing before finding what they needed.",
    strategy: [
      "Interviewed intake staff to map the real questions patients ask before booking.",
      "Restructured information architecture around symptoms and services rather than internal department names.",
      "Designed a location-and-provider CMS so non-technical staff can manage content independently.",
      "Built a persistent, low-friction booking path present on every template.",
    ],
    outcomes: [],
    qualitativeOutcomes: [
      "Marketing team now publishes new locations and providers without engineering support.",
      "Booking path reduced from five steps to two on every core page template.",
      "Unified visual system replaces four inconsistent sub-brand treatments.",
    ],
    quote: {
      text: "Revamp Webz understood our patients before they understood our CMS. The new site finally feels like the care we provide.",
      name: "Dana Whitfield",
      role: "VP of Marketing, Solace Health",
    },
    nextSlug: "northbeam",
  },
  {
    slug: "northbeam",
    name: "Northbeam Analytics",
    client: "Northbeam Analytics",
    industry: "SaaS",
    platform: "Framer",
    services: ["Website Strategy", "UX/UI", "Framer Development", "Motion"],
    year: "2025",
    timeline: "5 weeks",
    summary:
      "A launch-ready marketing site for a Series A data platform, built to communicate technical credibility in under ten seconds.",
    heroHeadline: "Transforming Northbeam into a digital experience built for enterprise credibility.",
    objective: "supporting an enterprise sales motion",
    liveUrl: "#",
    featured: true,
    layout: "split",
    tags: ["Framer", "SaaS"],
    challenge: [
      { title: "Brand", body: "The product had matured past its scrappy launch identity, but the website hadn't." },
      { title: "UX", body: "Dense technical messaging with no clear narrative for non-technical buyers." },
      { title: "Conversion", body: "Demo requests were the only CTA, with no path for earlier-stage evaluators." },
    ],
    clientContext:
      "Northbeam builds attribution infrastructure for growth teams. Fresh off a Series A, they were moving upmarket into enterprise deals, but their site still read like a weekend side project — a single long-scroll page with no clear proof points for a buying committee.",
    strategy: [
      "Rebuilt messaging hierarchy around the three personas in a typical buying committee.",
      "Introduced a lighter-weight 'See a live workspace' path alongside the primary demo CTA.",
      "Designed a component system in Framer that the founding team can extend without a developer.",
      "Used restrained motion to demonstrate the product's real-time data model.",
    ],
    outcomes: [],
    qualitativeOutcomes: [
      "Sales team now sends the homepage directly to prospects instead of a separate deck.",
      "Founding team ships new landing pages independently using the Framer component library.",
    ],
    quote: {
      text: "We needed a site that could hold its own in an enterprise sales cycle. Revamp Webz delivered that in five weeks.",
      name: "Priya Anand",
      role: "Co-founder, Northbeam Analytics",
    },
    nextSlug: "aerial-stays",
  },
  {
    slug: "aerial-stays",
    name: "Aerial Stays",
    client: "Aerial Stays",
    industry: "Hospitality",
    platform: "Webflow",
    services: ["UX/UI", "Webflow Development", "CMS", "Migration"],
    year: "2024",
    timeline: "8 weeks",
    summary:
      "A boutique short-term rental brand migrated from a templated builder into a scalable, CMS-driven Webflow experience.",
    heroHeadline: "Transforming Aerial Stays into a digital experience built for a growing portfolio.",
    objective: "scaling content across a growing property portfolio",
    liveUrl: "#",
    featured: true,
    layout: "feature",
    tags: ["Webflow", "Hospitality"],
    challenge: [
      { title: "Brand", body: "Visually inconsistent listing pages undermined a premium positioning." },
      { title: "Conversion", body: "Direct booking rates lagged behind third-party marketplaces." },
      { title: "Technology", body: "Adding a new property required duplicating an entire page by hand." },
    ],
    clientContext:
      "Aerial Stays curates a portfolio of design-forward vacation properties. Their previous site was built on a template builder with no real content structure — every new property meant copying an existing page and manually swapping content, with drift and inconsistency compounding over time.",
    strategy: [
      "Modeled a property CMS covering amenities, pricing, availability messaging and gallery structure.",
      "Designed a flexible property template that scales from a studio to a multi-bedroom villa.",
      "Rebuilt the direct-booking path to compete visually with marketplace listings.",
    ],
    outcomes: [],
    qualitativeOutcomes: [
      "New properties go live in under an hour instead of a full day of manual page-building.",
      "Design system extended to email and paid social for the first time.",
    ],
    quote: {
      text: "Every property now looks like it belongs to the same brand — because for the first time, it actually is one.",
      name: "Marcus Ellery",
      role: "Founder, Aerial Stays",
    },
    nextSlug: "vantage-legal",
  },
  {
    slug: "vantage-legal",
    name: "Vantage Legal Partners",
    client: "Vantage Legal Partners",
    industry: "Professional Services",
    platform: "Webflow",
    services: ["Website Strategy", "UX/UI", "Webflow Development", "SEO"],
    year: "2024",
    timeline: "6 weeks",
    summary:
      "A referral-driven law firm repositioned around practice-area authority, with technical SEO foundations built in from day one.",
    heroHeadline: "Transforming Vantage Legal into a digital experience built for referral confidence.",
    objective: "strengthening organic visibility in competitive practice areas",
    liveUrl: "#",
    featured: false,
    layout: "split",
    tags: ["Webflow", "Professional Services"],
    challenge: [
      { title: "Brand", body: "A dated design was quietly undermining an otherwise strong referral reputation." },
      { title: "Technology", body: "No structured data, thin metadata, and no CMS for attorney or practice-area pages." },
    ],
    clientContext:
      "Vantage Legal Partners built their practice almost entirely on referrals, but prospective clients increasingly searched the firm's name before calling — and found a site that didn't match the firm's reputation.",
    strategy: [
      "Structured practice-area and attorney content for both readability and search visibility.",
      "Implemented technical SEO foundations: schema, sitemap, metadata and internal linking.",
      "Designed a credibility-first homepage built around outcomes rather than legal jargon.",
    ],
    outcomes: [],
    qualitativeOutcomes: [
      "Attorneys can update bios and credentials directly through the CMS.",
      "Site now ranks on the first page for several previously untracked practice-area terms.",
    ],
    quote: {
      text: "Clients tell us the website matches how we actually work with them. That mattered more than we expected.",
      name: "Renata Vance",
      role: "Managing Partner, Vantage Legal Partners",
    },
    nextSlug: "loopline",
  },
  {
    slug: "loopline",
    name: "Loopline",
    client: "Loopline",
    industry: "AI",
    platform: "Framer",
    services: ["Website Strategy", "UX/UI", "Framer Development", "Motion"],
    year: "2024",
    timeline: "4 weeks",
    summary:
      "A pre-seed AI workflow startup's first real website, designed to earn credibility ahead of a public launch.",
    heroHeadline: "Transforming Loopline into a digital experience built for a category-defining launch.",
    objective: "establishing category credibility ahead of public launch",
    liveUrl: "#",
    featured: false,
    layout: "tall",
    tags: ["Framer", "AI"],
    challenge: [
      { title: "Brand", body: "No visual identity beyond a logo and a waitlist form." },
      { title: "UX", body: "A genuinely novel product with no established mental model for visitors." },
    ],
    clientContext:
      "Loopline builds workflow automation for operations teams. Ahead of a public launch, they needed a website that could explain a genuinely new category clearly enough to convert a cold visitor in under a minute.",
    strategy: [
      "Developed a simple three-step mental model to explain the product before any screenshot.",
      "Used motion deliberately to visualize automated workflows rather than for decoration.",
      "Built the entire site in Framer to support a fast, iterative pre-launch cadence.",
    ],
    outcomes: [],
    qualitativeOutcomes: [
      "Site shipped in time for a public launch date with room for founder-led iteration afterward.",
      "Waitlist messaging now mirrors the product's actual mental model for the first time.",
    ],
    quote: {
      text: "We finally have a website that explains what we do faster than we can say it out loud.",
      name: "Femi Adebayo",
      role: "Founder, Loopline",
    },
    nextSlug: "solace-health",
  },
];

export const capabilities = [
  {
    number: "01",
    title: "Strategy",
    items: ["Website Strategy", "Conversion Strategy", "Information Architecture", "Competitive Research"],
  },
  {
    number: "02",
    title: "Design",
    items: ["UX/UI Design", "Web Design", "Design Systems", "Responsive Design", "Motion Direction"],
  },
  {
    number: "03",
    title: "Webflow",
    items: ["Webflow Development", "CMS Architecture", "Interactions", "Custom Code", "Migration", "Technical SEO"],
  },
  {
    number: "04",
    title: "Framer",
    items: ["Framer Development", "Interactive Landing Pages", "Startup Websites", "Motion", "CMS", "Performance"],
  },
];

export const methodSteps = [
  { number: "01", title: "Reveal", body: "Understand the business, users, positioning, competitors and conversion problems." },
  { number: "02", title: "Rethink", body: "Develop the site strategy, messaging hierarchy, UX and creative direction." },
  { number: "03", title: "Reimagine", body: "Turn strategy into a premium visual system and interactive experience." },
  { number: "04", title: "Rebuild", body: "Develop the approved experience in Webflow or Framer." },
  { number: "05", title: "Refine", body: "QA, responsive optimization, performance, SEO and conversion refinement." },
  { number: "06", title: "Release", body: "Launch, measure and improve." },
];

export const testimonials = [
  {
    quote: "Revamp Webz understood our patients before they understood our CMS. The new site finally feels like the care we provide.",
    name: "Dana Whitfield",
    role: "VP of Marketing",
    company: "Solace Health",
  },
  {
    quote: "We needed a site that could hold its own in an enterprise sales cycle. Revamp Webz delivered that in five weeks.",
    name: "Priya Anand",
    role: "Co-founder",
    company: "Northbeam Analytics",
  },
  {
    quote: "Every property now looks like it belongs to the same brand — because for the first time, it actually is one.",
    name: "Marcus Ellery",
    role: "Founder",
    company: "Aerial Stays",
  },
  {
    quote: "Clients tell us the website matches how we actually work with them. That mattered more than we expected.",
    name: "Renata Vance",
    role: "Managing Partner",
    company: "Vantage Legal Partners",
  },
  {
    quote: "We finally have a website that explains what we do faster than we can say it out loud.",
    name: "Femi Adebayo",
    role: "Founder",
    company: "Loopline",
  },
];

export const clientLogos = [
  "Solace Health",
  "Northbeam",
  "Aerial Stays",
  "Vantage Legal",
  "Loopline",
  "Meridian",
  "Cohera",
  "Fireside",
];

export const services = [
  {
    number: "01",
    slug: "website-strategy",
    title: "Website Strategy",
    description: "Positioning, information architecture and conversion planning before a single pixel is drawn.",
  },
  {
    number: "02",
    slug: "web-design",
    title: "UX/UI & Web Design",
    description: "Interfaces engineered around clarity, hierarchy and the decisions you need visitors to make.",
  },
  {
    number: "03",
    slug: "webflow-development",
    title: "Webflow Development",
    description: "Scalable, CMS-driven Webflow builds for content-heavy marketing sites and growing businesses.",
  },
  {
    number: "04",
    slug: "framer-development",
    title: "Framer Development",
    description: "Fast, motion-led Framer sites for startups, launches and visually ambitious brands.",
  },
  {
    number: "05",
    slug: "website-redesign",
    title: "Website Redesign",
    description: "A full rebuild of an underperforming site — same business, an entirely different asset.",
  },
  {
    number: "06",
    slug: "migration",
    title: "Migration",
    description: "Moving from a legacy CMS or template builder without losing SEO equity or content structure.",
  },
  {
    number: "07",
    slug: "motion",
    title: "Motion & Interaction",
    description: "Purposeful animation that reinforces hierarchy and guides attention — never decoration alone.",
  },
  {
    number: "08",
    slug: "cro",
    title: "CRO & Optimization",
    description: "Ongoing refinement of conversion paths, messaging and UX based on how visitors actually behave.",
  },
];
