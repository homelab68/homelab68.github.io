import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjectBySlug, getProjects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8 cursor-pointer"
      >
        ← Projects
      </Link>
      <div className="max-w-2xl">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-2">{project.name}</h1>
        <p className="text-muted-foreground mb-8">{project.description}</p>
        {project.type === "App" ? (
          <Card>
            <CardHeader>
              <CardTitle>Download</CardTitle>
              <CardDescription>Get the app on your preferred store.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button asChild className="cursor-pointer" disabled>
                <a href="#" aria-disabled="true">
                  App Store (coming soon)
                </a>
              </Button>
              <Button asChild variant="outline" className="cursor-pointer" disabled>
                <a href="#" aria-disabled="true">
                  Google Play (coming soon)
                </a>
              </Button>
            </CardContent>
          </Card>
        ) : (
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
        )}
      </div>
    </div>
  );
}
