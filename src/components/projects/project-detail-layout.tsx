import Link from "next/link";

type ProjectDetailLayoutProps = {
  children: React.ReactNode;
};

/** Shared layout for all project detail pages: back link + container. */
export function ProjectDetailLayout({ children }: ProjectDetailLayoutProps) {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8 cursor-pointer"
      >
        ← Projects
      </Link>
      {children}
    </div>
  );
}
