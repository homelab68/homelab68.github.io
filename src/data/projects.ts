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
};

export const projects: Project[] = [
  {
    slug: "project-1",
    name: "Project 1",
    description: "Mobile app available on App Store and Google Play.",
    shortDescription: "Mobile app available on App Store and Google Play.",
    type: "App",
    picked: true,
  },
  {
    slug: "project-2",
    name: "Project 2",
    description: "Website and web utilities. Utils and tools on the web.",
    shortDescription: "Utils & tools on the web.",
    type: "Web",
    picked: true,
  },
  {
    slug: "project-3",
    name: "Project 3",
    description: "Another homelab68 project. Coming soon.",
    shortDescription: "Another homelab68 project. Coming soon.",
    type: "Web",
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
