export const SITE_URL = "https://www.gakcreations.com";
export const SHOP_URL = "https://artprints.gakcreations.com";
export const SITE_NAME = "GAK Creations";
export const ARTIST_NAME = "Gerald Allen Knowles";
export const CONTACT_EMAIL = "info@gakcreations.com";
export const DEFAULT_SEO_TITLE = "Shop Fine Art Prints, Architectural Drawings & Coastal Wall Art | GAK Creations";
export const DEFAULT_SEO_DESCRIPTION =
  "Shop museum-quality fine art prints by Gerald Allen Knowles, from architectural drawings and coastal wall art to travel collages and Fuerteventura landscapes. Worldwide delivery.";
export const DEFAULT_SOCIAL_IMAGE = "/images/Abbaye Aux Dames Saintes France.jpg";
export const DEFAULT_SOCIAL_IMAGE_ALT =
  "Architectural art print of Abbaye aux Dames in Saintes by Gerald Allen Knowles";
export const DEFAULT_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

export const abs = (path: string) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const LOGO_PATH = "/images/Logo GAK Creations copy.png";

/** ISO 3166-1 alpha-2 codes — Google requires 2-letter codes, not "Worldwide". */
export const SHIPPING_COUNTRIES = [
  "US",
  "CA",
  "GB",
  "IE",
  "FR",
  "ES",
  "DE",
  "NL",
  "BE",
  "IT",
  "PT",
  "SE",
  "DK",
  "AU",
  "NZ",
];

const SHIPPING_RATE = {
  "@type": "MonetaryAmount",
  value: "5.90",
  currency: "EUR",
} as const;

const SHIPPING_DELIVERY_TIME = {
  "@type": "ShippingDeliveryTime",
  handlingTime: {
    "@type": "QuantitativeValue",
    minValue: 2,
    maxValue: 7,
    unitCode: "DAY",
  },
  transitTime: {
    "@type": "QuantitativeValue",
    minValue: 4,
    maxValue: 20,
    unitCode: "DAY",
  },
} as const;

const SHIPPING_DETAILS = SHIPPING_COUNTRIES.map((addressCountry) => ({
  "@type": "OfferShippingDetails",
  shippingDestination: {
    "@type": "DefinedRegion",
    addressCountry,
  },
  shippingRate: SHIPPING_RATE,
  deliveryTime: SHIPPING_DELIVERY_TIME,
}));

const MERCHANT_RETURN_POLICIES = SHIPPING_COUNTRIES.map((applicableCountry) => ({
  "@type": "MerchantReturnPolicy",
  applicableCountry,
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 30,
  returnMethod: "https://schema.org/ReturnByMail",
  returnFees: "https://schema.org/FreeReturn",
  merchantReturnLink: `${SITE_URL}/refund-policy`,
}));

const IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/images/Abbaye Aux Dames Saintes France.jpg": { width: 1181, height: 1191 },
  "/images/Chruch of San Juan Bautista de Banos, Spain.jpg": { width: 2669, height: 3109 },
  "/images/Fuerteventura Chapel.jpg": { width: 787, height: 1105 },
  "/images/Guggenheim Museum Bilba, Spain.jpg": { width: 528, height: 787 },
  "/images/Logo GAK Creations copy.png": { width: 1181, height: 1181 },
  "/images/The Boat That Dreams Of Sea.jpg": { width: 787, height: 1025 },
  "/images/studio.jpg": { width: 1200, height: 900 },
  "/images/printify/saintes-cathedral.jpg": { width: 1200, height: 1200 },
  "/images/printify/palm-trees-symphony.jpg": { width: 1200, height: 1200 },
  "/images/printify/mystical-chapel.jpg": { width: 1200, height: 1200 },
  "/images/printify/magical-landscape.jpg": { width: 1200, height: 1200 },
  "/images/printify/dream-nights.jpg": { width: 1200, height: 1200 },
  "/images/printify/arch-of-wind-and-time.jpg": { width: 1200, height: 1200 },
  "/images/printify/erosion-gate.jpg": { width: 1200, height: 1200 },
  "/images/printify/symphony-of-waves.jpg": { width: 1200, height: 1200 },
};

export interface ArtworkSeoWork {
  sku: string;
  title: string;
  image: string;
  alt?: string;
  medium: string;
  place: string;
  description: string;
}

type SeoImageInput =
  | string
  | {
      path: string;
      alt?: string;
      width?: number;
      height?: number;
    };

interface SeoInput {
  title?: string;
  description?: string;
  path: string;
  image?: SeoImageInput;
  type?: "website" | "article" | "product";
  publishedTime?: string;
  keywords?: string[];
  noindex?: boolean;
}

export function getImageDimensions(path: string) {
  return IMAGE_DIMENSIONS[path];
}

function resolveSeoImage(image?: SeoImageInput, fallbackTitle?: string) {
  if (!image) {
    const dimensions = getImageDimensions(DEFAULT_SOCIAL_IMAGE);
    return {
      path: DEFAULT_SOCIAL_IMAGE,
      alt: DEFAULT_SOCIAL_IMAGE_ALT ?? fallbackTitle ?? DEFAULT_SEO_TITLE,
      width: dimensions?.width,
      height: dimensions?.height,
    };
  }

  if (typeof image === "string") {
    const dimensions = getImageDimensions(image);
    return {
      path: image,
      alt: fallbackTitle ?? DEFAULT_SOCIAL_IMAGE_ALT,
      width: dimensions?.width,
      height: dimensions?.height,
    };
  }

  const dimensions = getImageDimensions(image.path);

  return {
    path: image.path,
    alt: image.alt ?? fallbackTitle ?? DEFAULT_SOCIAL_IMAGE_ALT,
    width: image.width ?? dimensions?.width,
    height: image.height ?? dimensions?.height,
  };
}

export function artworkAltText(
  work: Pick<ArtworkSeoWork, "title" | "alt" | "medium" | "place">,
  collectionName?: string,
) {
  if (work.alt?.trim()) return work.alt;

  const collectionLabel = collectionName ? ` from the ${collectionName} collection` : "";
  return `${work.title}, ${work.medium.toLowerCase()} artwork of ${work.place}${collectionLabel} by ${ARTIST_NAME}`;
}

export function productSeoTitle(work: Pick<ArtworkSeoWork, "title" | "place">, collectionName?: string) {
  const collectionLabel = collectionName ? ` | ${collectionName}` : "";
  return `${work.title} Fine Art Print${collectionLabel} | ${SITE_NAME}`;
}

export function productSeoDescription(
  work: Pick<ArtworkSeoWork, "description" | "medium" | "place">,
  collectionName?: string,
) {
  const collectionLabel = collectionName ? ` from the ${collectionName} collection` : "";
  return `${work.description} ${work.medium} fine art print${collectionLabel}, inspired by ${work.place}.`;
}

export function artworkKeywords(
  work: Pick<ArtworkSeoWork, "title" | "medium" | "place">,
  collectionKeywords: string[] = [],
  extraKeywords: string[] = [],
) {
  return [...new Set([...collectionKeywords, work.title, work.place, work.medium, ...extraKeywords])];
}

/** Builds a full, Google-compliant meta set for a route. */
export function seoMeta({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  keywords,
  noindex = false,
}: SeoInput) {
  const resolvedTitle = title ?? DEFAULT_SEO_TITLE;
  const resolvedDescription = description ?? DEFAULT_SEO_DESCRIPTION;
  const url = abs(path);
  const resolvedImage = resolveSeoImage(image, resolvedTitle);
  const imageUrl = abs(resolvedImage.path);

  const meta: Array<Record<string, string>> = [
    { title: resolvedTitle },
    { name: "description", content: resolvedDescription },
    { name: "author", content: ARTIST_NAME },
    { name: "robots", content: noindex ? "noindex, nofollow" : DEFAULT_ROBOTS },
    { property: "og:title", content: resolvedTitle },
    { property: "og:description", content: resolvedDescription },
    { property: "og:url", content: url },
    { property: "og:type", content: type === "product" ? "website" : type },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: imageUrl },
    { property: "og:image:alt", content: resolvedImage.alt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: resolvedTitle },
    { name: "twitter:description", content: resolvedDescription },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: resolvedImage.alt },
  ];

  if (resolvedImage.width && resolvedImage.height) {
    meta.push({ property: "og:image:width", content: `${resolvedImage.width}` });
    meta.push({ property: "og:image:height", content: `${resolvedImage.height}` });
  }
  if (keywords?.length) {
    meta.push({ name: "keywords", content: keywords.join(", ") });
  }
  if (publishedTime) {
    meta.push({ property: "article:published_time", content: publishedTime });
    meta.push({ property: "article:author", content: ARTIST_NAME });
  }

  return meta;
}

export const canonical = (path: string) => [{ rel: "canonical", href: abs(path) }];

export const organizationNode = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  email: CONTACT_EMAIL,
  sameAs: [SHOP_URL],
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: abs(LOGO_PATH),
    caption: "GAK Creations",
  },
  founder: { "@id": `${SITE_URL}/#artist` },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: CONTACT_EMAIL,
    availableLanguage: "en",
    contactOption: "TollFree",
  },
};

export const artistNode = {
  "@type": ["Person", "Artist"],
  "@id": `${SITE_URL}/#artist`,
  name: ARTIST_NAME,
  alternateName: "GAK",
  jobTitle: "Architect, Artist and Traveler",
  description:
    "Gerald Allen Knowles is an architect, artist and traveler whose drawings and collages trace the quiet geometry of places across Europe and the islands of the Atlantic.",
  url: `${SITE_URL}/`,
  image: abs("/images/Abbaye Aux Dames Saintes France.jpg"),
  knowsAbout: [
    "Architectural drawing",
    "Urban sketching",
    "Mixed-media collage",
    "Coastal landscape painting",
    "Travel illustration",
    "Fine art printmaking",
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: { "@type": "Product", name: "Fine art prints by Gerald Allen Knowles" },
    url: SHOP_URL,
  },
  worksFor: { "@id": `${SITE_URL}/#organization` },
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  inLanguage: "en",
  description:
    "The official website of GAK Creations — a global art brand specialising in fine art prints, architectural drawings, coastal wall art, travel collages, and modern home décor. Worldwide shipping.",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function webPageNode(path: string, name: string, description: string) {
  return {
    "@type": "WebPage",
    "@id": `${abs(path)}#webpage`,
    url: abs(path),
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#artist` },
    inLanguage: "en",
  };
}

export function breadcrumbNode(trail: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function imageObjectNode(image: string, name: string, caption: string) {
  const dimensions = getImageDimensions(image);
  return {
    "@type": "ImageObject",
    "@id": `${abs(image)}#image`,
    contentUrl: abs(image),
    url: abs(image),

    name,
    caption,
    width: dimensions?.width,
    height: dimensions?.height,
    creditText: SITE_NAME,
    creator: { "@id": `${SITE_URL}/#artist` },
    copyrightNotice: `© ${SITE_NAME}`,
    license: `${SITE_URL}/terms`,
  };
}

export function productNode(work: {
  title: string;
  image: string;
  alt?: string;
  medium: string;
  place: string;
  description: string;
  sku: string;
}, options?: { collectionName?: string; keywords?: string[]; pageUrl?: string; offerUrl?: string }) {
  const image = resolveSeoImage({ path: work.image, alt: artworkAltText(work, options?.collectionName) });
  return {
    "@type": "Product",
    "@id": `${options?.pageUrl ?? options?.offerUrl ?? SHOP_URL}#${work.sku}`,
    name: productSeoTitle(work, options?.collectionName),
    sku: work.sku,
    image: abs(image.path),
    description: productSeoDescription(work, options?.collectionName),
    keywords: artworkKeywords(work, options?.keywords),
    brand: { "@type": "Brand", name: SITE_NAME },
    category: "Home & Garden > Decor > Artwork > Posters, Prints & Visual Artwork",
    material: "Museum-grade matte fine art paper",
    creator: { "@id": `${SITE_URL}/#artist` },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Medium", value: work.medium },
      { "@type": "PropertyValue", name: "Location", value: work.place },
    ],
    offers: {
      "@type": "Offer",
      url: options?.offerUrl ?? SHOP_URL,
      priceCurrency: "EUR",
      price: "29.00",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": `${SITE_URL}/#organization` },
      shippingDetails: SHIPPING_DETAILS,
      hasMerchantReturnPolicy: MERCHANT_RETURN_POLICIES,
    },
  };
}

export const ldJson = (graph: unknown[]) => [
  {
    type: "application/ld+json",
    children: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
  },
];
