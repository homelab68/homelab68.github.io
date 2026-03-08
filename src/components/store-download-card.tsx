import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/** Apple logo (App Store). 24×24, currentColor. */
function AppleLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/** Google Play logo (play triangle). 24×24, currentColor. */
function GooglePlayLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L12.001 12l5.697-3.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
    </svg>
  );
}

export type StoreDownloadCardProps = {
  /** App Store URL (iOS). Omit when comingSoon is true. */
  appStoreHref?: string;
  /** Google Play URL (Android). Omit when comingSoon is true. */
  googlePlayHref?: string;
  /** When true, show disabled "coming soon" buttons with logos. */
  comingSoon?: boolean;
  /** Card title. */
  title?: string;
  /** Card description. */
  description?: string;
  /** Optional class for the wrapper. */
  className?: string;
};

/**
 * Card section with App Store and Google Play download buttons, including store logos.
 */
export function StoreDownloadCard({
  appStoreHref = "#",
  googlePlayHref = "#",
  comingSoon = false,
  title = "Download",
  description = "Get the app on your preferred store.",
  className,
}: StoreDownloadCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        {comingSoon ? (
          <>
            <Button className="cursor-pointer gap-2" disabled>
              <AppleLogo className="h-5 w-5 shrink-0" />
              App Store (coming soon)
            </Button>
            <Button variant="outline" className="cursor-pointer gap-2" disabled>
              <GooglePlayLogo className="h-5 w-5 shrink-0" />
              Google Play (coming soon)
            </Button>
          </>
        ) : (
          <>
            <Button asChild className="cursor-pointer gap-2">
              <a
                href={appStoreHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
              >
                <AppleLogo className="h-5 w-5 shrink-0" />
                App Store
              </a>
            </Button>
            <Button asChild variant="outline" className="cursor-pointer gap-2">
              <a
                href={googlePlayHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
              >
                <GooglePlayLogo className="h-5 w-5 shrink-0" />
                Google Play
              </a>
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
