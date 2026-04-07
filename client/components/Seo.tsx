import { useEffect } from "react";

const BASE_URL = "https://lsbeautysalon.com";
const DEFAULT_IMAGE = `${BASE_URL}/images/hero/hero.webp`;

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector(
    `meta[${attribute}="${key}"]`,
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  element.href = href;
}

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  noindex = false,
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    const canonicalUrl = `${BASE_URL}${normalizedPath}`;
    const absoluteImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;
    const robots = noindex
      ? "noindex, nofollow, max-image-preview:large"
      : "index, follow, max-image-preview:large";

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "LS Beauty Salon & Spa");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", absoluteImage);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", absoluteImage);
    upsertCanonical(canonicalUrl);

    const existingJsonLd = document.head.querySelector(
      'script[data-seo-jsonld="true"]',
    );

    if (jsonLd) {
      const script = existingJsonLd ?? document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-seo-jsonld", "true");
      script.textContent = JSON.stringify(jsonLd);

      if (!existingJsonLd) {
        document.head.appendChild(script);
      }
    } else if (existingJsonLd) {
      existingJsonLd.remove();
    }
  }, [description, image, jsonLd, noindex, path, title]);

  return null;
}