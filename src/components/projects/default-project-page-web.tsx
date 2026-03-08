import type { Project } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DefaultProjectPageLayout } from "./default-project-page-layout";

type DefaultProjectPageWebProps = { project: Project };

/** Default project page for type "Web": placeholder card. */
export function DefaultProjectPageWeb({ project }: DefaultProjectPageWebProps) {
  return (
    <DefaultProjectPageLayout project={project}>
      <Card>
        <CardHeader>
          <CardTitle>Web app</CardTitle>
          <CardDescription>
            Utils and tools on the web. Link and details coming soon.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This is a placeholder. More info will be added later.
          </p>
        </CardContent>
      </Card>
    </DefaultProjectPageLayout>
  );
}
