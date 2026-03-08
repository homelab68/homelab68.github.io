import type { ReactElement } from "react";
import type { Project, ProjectType } from "@/data/projects";
import { DefaultProjectPageApp } from "./default-project-page-app";
import { DefaultProjectPageWeb } from "./default-project-page-web";
import { WayfarerMobilePage } from "./wayfarer-mobile";

export type CustomProjectPageComponent = (props: { project: Project }) => ReactElement;

/** Static registry for custom project page components. */
export const customProjectRegistry: Record<string, CustomProjectPageComponent> = {
  "wayfarer-mobile": WayfarerMobilePage,
};

/** Static map: default page component by project type (avoids creating component during render). */
export const defaultProjectPageByType: Record<ProjectType, CustomProjectPageComponent> = {
  App: DefaultProjectPageApp,
  Web: DefaultProjectPageWeb,
};

/** Returns the custom page component for a project slug, or null if none. */
export function getCustomProjectComponent(
  slug: string
): CustomProjectPageComponent | null {
  return customProjectRegistry[slug] ?? null;
}

export { DefaultProjectPageApp } from "./default-project-page-app";
export { DefaultProjectPageLayout } from "./default-project-page-layout";
export { DefaultProjectPageWeb } from "./default-project-page-web";
export { ProjectDetailLayout } from "./project-detail-layout";
export { WayfarerMobilePage } from "./wayfarer-mobile";
