export const SITE_URL = "https://www.gakcreations.com";
export const SHOP_URL = "https://gak-creations.printify.me";
export const SITE_NAME = "GAK Creations";
export const ARTIST_NAME = "Gerald Allen Knowles";
export const CONTACT_EMAIL = "gakcreationsx.gmail.com";

export const abs = (path: string) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const LOGO_PATH = "/images/Logo GAK Creations copy.png";

interface SeoInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "product";
  publishedTime?: string;
  keywords?: string[];
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
}: SeoInput) {
  const url = abs(path);
  const imageUrl = abs(image ?? LOGO_PATH);

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { name: "author", content: ARTIST_NAME },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: type === "product" ? "website" : type },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: imageUrl },
    { property: "og:image:alt", content: title },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ];

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
    "The archive of architect and artist Gerald Allen Knowles — architectural drawings, coastal artwork and travel collages, available as fine art prints.",
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
  return {
    "@type": "ImageObject",
    contentUrl: abs(image),
    url: abs(image),
    name,
    caption,
    creditText: SITE_NAME,
    creator: { "@id": `${SITE_URL}/#artist` },
    copyrightNotice: `© ${SITE_NAME}`,
    license: `${SITE_URL}/terms`,
  };
}

export function productNode(work: {
  title: string;
  image: string;
  medium: string;
  description: string;
  sku: string;
}) {
  return {
    "@type": "Product",
    name: `${work.title} — Fine Art Print`,
    sku: work.sku,
    image: abs(work.image),
    description: work.description,
    brand: { "@type": "Brand", name: SITE_NAME },
    category: "Home & Garden > Decor > Artwork > Posters, Prints & Visual Artwork",
    material: "Museum-grade matte fine art paper",
    creator: { "@id": `${SITE_URL}/#artist` },
    offers: {
      "@type": "Offer",
      url: SHOP_URL,
      priceCurrency: "EUR",
      price: "29.00",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": `${SITE_URL}/#organization` },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "Worldwide" },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "Worldwide",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 30,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
        merchantReturnLink: `${SITE_URL}/refund-policy`,
      },
    },
  };
}

export const ldJson = (graph: unknown[]) => [
  {
    type: "application/ld+json",
    children: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
  },
];
