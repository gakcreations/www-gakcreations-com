import type { ImgHTMLAttributes, SyntheticEvent } from "react";
import { imageManifest } from "@/lib/image-manifest";

export const IMAGE_FALLBACK_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 1200'%3E%3Crect width='1600' height='1200' fill='%23f2ede6'/%3E%3C/svg%3E";

export function handleImageError(event: SyntheticEvent<HTMLImageElement>) {
  const image = event.currentTarget;
  if (image.dataset.fallbackApplied === "true") return;
  image.dataset.fallbackApplied = "true";
  image.srcset = "";
  image.src = IMAGE_FALLBACK_SRC;
}

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  /** CSS sizes hint; defaults to a full-width responsive hint. */
  sizes?: string;
};

const DEFAULT_SIZES = "(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 700px";

/**
 * Serves compressed, responsive versions (WebP with JPEG fallback) of any
 * image that has generated variants in the manifest. Falls back to the
 * original file when no optimized variants exist.
 */
export function ResponsiveImage({ src, alt, sizes, onError, ...rest }: Props) {
  const entry = imageManifest[src];

  if (!entry || entry.variants.length === 0) {
    return <img src={src} alt={alt} onError={onError ?? handleImageError} {...rest} />;
  }

  const webp = entry.variants.map((v) => `${v.webp} ${v.w}w`).join(", ");
  const jpg = entry.variants.map((v) => `${v.jpg} ${v.w}w`).join(", ");
  const largest = entry.variants[entry.variants.length - 1]!;

  return (
    <picture>
      <source type="image/webp" srcSet={webp} sizes={sizes ?? DEFAULT_SIZES} />
      <source type="image/jpeg" srcSet={jpg} sizes={sizes ?? DEFAULT_SIZES} />
      <img
        src={largest.jpg}
        alt={alt}
        width={rest.width ?? entry.width}
        height={rest.height ?? entry.height}
        onError={onError ?? handleImageError}
        {...rest}
      />
    </picture>
  );
}
