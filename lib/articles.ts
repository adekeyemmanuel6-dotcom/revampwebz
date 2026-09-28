export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "webflow-vs-framer",
    title: "Webflow vs. Framer: Choosing the Right Platform for Your Website",
    excerpt: "Both platforms can produce beautiful, fast websites. The right choice depends on your content model, not your taste.",
    category: "Webflow",
    date: "2025-08-14",
    body: [
      "The Webflow-versus-Framer question comes up in nearly every discovery call, and the honest answer is that it depends less on design ambition and more on content structure.",
      "Webflow's CMS is built for scale: nested collections, reference fields and filtering that hold up as a site grows past a few dozen pages. If your site will manage locations, team members, case studies or a blog with real editorial cadence, Webflow's data model earns its complexity.",
      "Framer, by contrast, is built for speed and motion. Its canvas-first workflow and lighter CMS make it the better fit for a startup landing page, a portfolio, or a launch site that needs to ship in weeks rather than months.",
      "We choose the platform after understanding the content, not before.",
    ],
  },
  {
    slug: "website-redesign-checklist",
    title: "Before You Redesign: A Website Audit Checklist",
    excerpt: "Most redesigns fail for the same reason — they start with visuals instead of a diagnosis.",
    category: "Website Strategy",
    date: "2025-07-02",
    body: [
      "A redesign is expensive to get wrong twice. Before any visual work begins, we audit five things: information architecture, conversion paths, content ownership, technical SEO health, and page performance.",
      "Most sites that 'need a redesign' actually need a smaller set of structural fixes — the visual refresh is often the easiest part.",
    ],
  },
  {
    slug: "cro-for-b2b-websites",
    title: "Conversion Optimization Isn't Just Button Color",
    excerpt: "Real CRO starts with the messaging hierarchy, not the shade of yellow on your CTA.",
    category: "CRO",
    date: "2025-05-19",
    body: [
      "Conversion rate optimization gets reduced to A/B testing button colors far too often. The highest-leverage CRO work happens earlier — in messaging hierarchy, page structure and the sequence of decisions you're asking a visitor to make.",
      "Fix the argument before you fix the button.",
    ],
  },
];
