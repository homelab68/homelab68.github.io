import { ProductScreenshots } from "@/components/product-screenshots";
import { StoreDownloadCard } from "@/components/store-download-card";
import type { Project } from "@/data/projects";
import type { ScreenshotItem } from "@/components/product-screenshots";
import { Smartphone, Globe, Code2, Layers } from "lucide-react";

const STORE_LINKS = {
  appStore: "#",
  googlePlay: "#",
} as const;

const WAYFARER_SCREENSHOTS: ScreenshotItem[] = [
  // Add paths to your app screenshots in /public, e.g.:
  { src: "/projects/wayfarer-mobile/screen1.png", alt: "Select the correct cell for the nomination" },
  { src: "/projects/wayfarer-mobile/screen2.png", alt: "View the entry map" },
  { src: "/projects/wayfarer-mobile/screen3.png", alt: "View nomination information" },
  { src: "/projects/wayfarer-mobile/screen4.png", alt: "Easily and quickly enable scripts" },
  { src: "/projects/wayfarer-mobile/screen5.png", alt: "Add a custom script" },
];

const FEATURES = [
  {
    icon: Globe,
    title: "Full Wayfarer in-app",
    description: "Load the Wayfarer portal in-app and use it like the desktop site.",
  },
  {
    icon: Code2,
    title: "Community scripts",
    description:
      "Use a curated set of community-developed tools that add stats, maps, timers, keyboard shortcuts, and more to your workflow.",
  },
  {
    icon: Layers,
    title: "Custom scripts",
    description: "Add your own scripts by URL and enable or disable them anytime.",
  },
  {
    icon: Smartphone,
    title: "One place for tools",
    description:
      "Access the Unofficial Wayfarer Tools Index–style tools without switching between browser and app.",
  },
];

const DISCLAIMER =
  "This app is unofficial and not affiliated with or endorsed by Niantic or Wayfarer. Community tools are used at your own risk.";

type WayfarerMobilePageProps = {
  project: Project;
};

export function WayfarerMobilePage({ project }: WayfarerMobilePageProps) {
  void project; // reserved for future use (e.g. metadata, dynamic title)

  return (
    <div className="space-y-4">
      {/* Hero */}
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-2">
            Wayfarer Mobile Tools
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Community tools for Wayfarer and Pokemon Go. Review nominations, submit new wayspots,
            and manage contributions on the go—all in one app.
          </p>
        </div>

        {/* Screenshots */}
        {WAYFARER_SCREENSHOTS.length > 0 && (
          <ProductScreenshots
            sliderClassName="h-80"
            screenshots={WAYFARER_SCREENSHOTS}
            title="Screenshots"
          />
        )}

        {/* Description */}
        <div className="max-w-2xl">
          <p className="text-foreground mb-6">
            Wayfarer Mobile brings the Wayfarer experience to your phone with built-in community
            tools and custom scripts. For Pokemon Go and other Niantic games—whether you review for
            quality, nominate new POIs, or track your contributions, Wayfarer Mobile keeps everything
            in one place with optional extras from the community.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Features</h2>
          <ul className="space-y-4">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex">
                <span className="flex-shrink-0 mt-0.5 text-muted-foreground" aria-hidden>
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <span className="font-medium text-foreground">{title}</span>
                  <span className="text-muted-foreground"> — {description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Store download */}
        <div className="max-w-2xl">
          <StoreDownloadCard
            appStoreHref={STORE_LINKS.appStore}
            googlePlayHref={STORE_LINKS.googlePlay}
          />
        </div>

        {/* Disclaimer */}
        <div className="max-w-2xl">
          <p className="text-sm text-muted-foreground border-l-2 border-muted pl-4 py-1">
            Disclaimer: {DISCLAIMER}
          </p>
        </div>
    </div>
  );
}
