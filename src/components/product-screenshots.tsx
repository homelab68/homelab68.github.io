"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export type ScreenshotItem = {
  src: string;
  alt: string;
  /** Optional: use for external or unoptimized URLs */
  unoptimized?: boolean;
};

type ProductScreenshotsProps = {
  /** List of screenshot image paths and alt text */
  screenshots: ScreenshotItem[];
  /** Optional section title */
  title?: string;
  /** Aspect ratio of each screenshot, e.g. "9/19.5" for phone. Defaults to 9/19.5 */
  aspectRatio?: string;
  /** Class name for the section wrapper (title + slider) */
  className?: string;
  /** Class name for the slider strip only (e.g. "h-80" or "max-h-96" to control height) */
  sliderClassName?: string;
};

/**
 * Reusable horizontal screenshot slider for product/app pages.
 * Always shows a single horizontal scroll strip (App Store–style) at all breakpoints.
 * Uses snap scroll, stable hover (shadow only), and smooth transitions per ui-ux-pro-max.
 */
export function ProductScreenshots({
  screenshots,
  title = "Screenshots",
  aspectRatio = "9/19.5",
  className,
  sliderClassName,
}: ProductScreenshotsProps) {
  if (!screenshots.length) return null;

  return (
    <section className={cn("space-y-4", className)} aria-label={title}>
      <h2 className="font-heading text-xl font-semibold text-foreground">{title}</h2>
      <div
        className={cn(
          "flex items-stretch gap-4 overflow-x-auto overflow-y-hidden pb-2 snap-x snap-mandatory scroll-smooth [scrollbar-gutter:stable] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-lg min-h-[25rem]",
          sliderClassName
        )}
        style={{ scrollPaddingInline: "1rem" }}
        tabIndex={0}
        role="region"
        aria-label={`${title} carousel`}
      >
        {screenshots.map((item, i) => (
          <figure
            key={i}
            className="flex-shrink-0 h-full w-auto snap-center"
            style={{ aspectRatio }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={320}
              height={320 * (19.5 / 9)}
              className="h-full w-full rounded-lg border border-border object-cover object-center shadow-sm transition-shadow duration-200 hover:shadow-md cursor-default"
              unoptimized={item.unoptimized}
              sizes="(max-width: 640px) 72vw, 40vw"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
