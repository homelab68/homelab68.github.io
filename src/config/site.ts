/**
 * Site-wide config and static content for homelab68.
 */

export const siteConfig = {
  /** Brand / contact email for support and privacy. */
  contactEmail: "homelab68@gmail.com",

  /** Brand name used in header, hero, and metadata. */
  brandName: "homelab68",

  /** Short tagline for the hero. */
  tagline: "Pet projects — apps and web. Built for fun and learning.",

  /** Default metadata. */
  metadata: {
    title: "homelab68 — pet projects",
    description: "Apps and web projects by homelab68",
  },

  /** Author / creator info for footer and credits. */
  author: {
    name: "Nhuan Vu",
    githubUrl: "https://github.com/nhuanvd",
  },

  /** Nav links for header. */
  nav: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
