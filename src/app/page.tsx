import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { getPickedProjects, getProjectHref } from "@/data/projects";

export default function HomePage() {
  const newProjects = getPickedProjects(3);
  const { contactEmail, brandName, tagline } = siteConfig;

  return (
    <div className="flex flex-col">
      {/* Section 1: CTA Contact / Support */}
      <section className="border-b bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {brandName}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{tagline}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="cursor-pointer">
              <a href={`mailto:${contactEmail}`}>Contact / Support</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="cursor-pointer">
              <Link href="/projects">View projects</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            <a
              href={`mailto:${contactEmail}`}
              className="text-accent hover:underline cursor-pointer"
            >
              {contactEmail}
            </a>
          </p>
        </div>
      </section>

      {/* Section 2: Our projects (picked, limit 3) */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-8">Our projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newProjects.map((project) => (
              <Link
                key={project.slug}
                href={getProjectHref(project.slug)}
                className="cursor-pointer group"
              >
                <Card className="h-full transition-colors duration-200 hover:border-accent/50 hover:shadow-md cursor-pointer">
                  <CardHeader>
                    <CardTitle className="group-hover:text-accent transition-colors duration-200">
                      {project.name}
                    </CardTitle>
                    <CardDescription>
                      {project.shortDescription ?? project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm font-medium text-accent group-hover:underline">
                      Learn more →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Coming soon */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">Coming soon</h2>
          <p className="text-muted-foreground">Something new is in the works. Stay tuned.</p>
        </div>
      </section>

      {/* Section 4: Coming soon */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">Coming soon</h2>
          <p className="text-muted-foreground">More projects on the way.</p>
        </div>
      </section>
    </div>
  );
}
