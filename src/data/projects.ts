export type ProjectType = "App" | "Web";

export type Project = {
  slug: string;
  name: string;
  description: string;
  type: ProjectType;
  /** When true, project is shown on the home screen (up to 3). */
  picked: boolean;
  /** Short description for home card; falls back to description if not set. */
  shortDescription?: string;
  /** Slug of custom product page component under src/products/<customComponent>. */
  customComponent?: string;
};

export const projects: Project[] = [
  {
    slug: "wayfarer-mobile",
    name: "Wayfarer Mobile Tools",
    description:
      "Wayfarer in-app with community scripts and tools for Pokemon Go. Review and nominate on the go.",
    shortDescription: "Wayfarer tools for Pokemon Go. Review and nominate on the go.",
    type: "App",
    picked: true,
    customComponent: "wayfarer-mobile",
  },
  {
    slug: "project-2",
    name: "Project 2",
    description: "Website and web utilities. Utils and tools on the web.",
    shortDescription: "Utils & tools on the web.",
    type: "Web",
    picked: false,
  },
  {
    slug: "project-3",
    name: "Project 3",
    description: "Another homelab68 project. Coming soon.",
    shortDescription: "Another homelab68 project. Coming soon.",
    type: "App",
    picked: false,
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getPickedProjects(limit = 3): Project[] {
  return projects.filter((p) => p.picked).slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectHref(slug: string): string {
  return `/projects/${slug}`;
}
