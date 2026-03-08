import type { Project } from "@/data/projects";
import { StoreDownloadCard } from "@/components/store-download-card";
import { DefaultProjectPageLayout } from "./default-project-page-layout";

type DefaultProjectPageAppProps = { project: Project };

/** Default project page for type "App": store download card (coming soon). */
export function DefaultProjectPageApp({ project }: DefaultProjectPageAppProps) {
  return (
    <DefaultProjectPageLayout project={project}>
      <StoreDownloadCard comingSoon />
    </DefaultProjectPageLayout>
  );
}
