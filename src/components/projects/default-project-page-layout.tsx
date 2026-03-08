import type { Project } from "@/data/projects";
import { ProjectDetailLayout } from "./project-detail-layout";

type DefaultProjectPageLayoutProps = {
  project: Project;
  children: React.ReactNode;
};

/** Shared layout for default project pages: same shell as project detail + title, description, then content. */
export function DefaultProjectPageLayout({ project, children }: DefaultProjectPageLayoutProps) {
  return (
    <ProjectDetailLayout>
      <div className="max-w-2xl">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-2">{project.name}</h1>
        <p className="text-muted-foreground mb-8">{project.description}</p>
        {children}
      </div>
    </ProjectDetailLayout>
  );
}
