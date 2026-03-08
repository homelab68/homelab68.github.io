import { siteConfig } from "@/config/site";

export function Footer() {
  const { brandName, author } = siteConfig;
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
        <span className="text-foreground">{brandName}</span>
        <span className="text-foreground">{" · by "}</span>
        <span className="font-medium text-foreground">
          <a
            href={author.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline cursor-pointer"
            aria-label={`${author.name} on GitHub`}
          >
            {author.name}
          </a>
        </span>
      </div>
    </footer>
  );
}
