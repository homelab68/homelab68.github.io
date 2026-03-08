import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjects, getProjectHref } from "@/data/projects";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="font-heading text-4xl font-bold text-foreground mb-2">Projects</h1>
      <p className="text-muted-foreground mb-10">Apps and web projects by homelab68.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={getProjectHref(project.slug)}
            className="cursor-pointer group"
          >
            <Card className="h-full transition-colors duration-200 hover:border-accent/50 hover:shadow-md cursor-pointer">
              <CardHeader>
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  {project.type}
                </span>
                <CardTitle className="group-hover:text-accent transition-colors duration-200">
                  {project.name}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm font-medium text-accent group-hover:underline">
                  View details →
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
