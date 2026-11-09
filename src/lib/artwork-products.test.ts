import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { getArtwork, homepageFeaturedArtworks, HOMEPAGE_FEATURED_SLUGS, otherEditions, artworks } from "../data/artworks";
import { filterArtworks } from "./artwork-search";
import { buildLlmsTxt } from "../routes/llms[.]txt";
import { productNode } from "./seo";

describe("listing-specific product material", () => {
  test("the waves canvas listing remains canvas in Product data", () => {
    const artwork = getArtwork("waves-matte-canvas");
    if (!artwork) throw new Error("Missing canvas listing");
    const node = productNode(artwork, {
      includeOffer: true,
      pageUrl: "https://www.gakcreations.com/artwork/waves-matte-canvas",
    });
    assert.equal(node["@type"], "Product");
    if (!("offers" in node)) throw new Error("Missing canvas offer");
    assert.equal(node.material, "Matte canvas");
    assert.equal(node.offers.price, "52.23");
    assert.equal(node.offers.priceCurrency, "USD");
    assert.equal(node.offers.url, "https://artprints.gakcreations.com/product/29106517/fuerteventura-waves-matte-canvas-print-symphony-of-waves-framed-wall-art");
  });

  test("the framed Saintes edition retains its own listing and paper material", () => {
    const artwork = getArtwork("cathedral-saintes-framed");
    if (!artwork) throw new Error("Missing framed cathedral listing");
    const node = productNode(artwork, { includeOffer: true });
    assert.equal(node["@type"], "Product");
    if (!("offers" in node)) throw new Error("Missing framed offer");
    assert.equal(node.material, "310gsm fine art or 260gsm semi-gloss paper");
    assert.deepEqual(node.additionalProperty.find((p) => p.name === "Presentation"), {
      "@type": "PropertyValue", name: "Presentation", value: "Framed paper poster (matte black pinewood frame)",
    });
    assert.equal(node.offers.price, "270.60");
    assert.equal(node.offers.url, "https://artprints.gakcreations.com/product/28619889/cathedral-saint-pierre-saintes-france-framed-paper-poster");
  });

  test("a work without a purchasable listing does not become a Product offer", () => {
    const artwork = getArtwork("abbaye-aux-dames-saintes");
    if (!artwork) throw new Error("Missing archive drawing");
    const node = productNode(artwork, { includeOffer: true });
    assert.equal(node["@type"], "VisualArtwork");
    assert.equal("offers" in node, false);
  });

  test("the Saintes cathedral listing states its verified watercolour paper", () => {
    const artwork = getArtwork("cathedrale-saint-pierre-saintes");
    if (!artwork) throw new Error("Missing Saintes listing");
    const node = productNode(artwork, { includeOffer: true });
    assert.equal(node["@type"], "Product");
    if (!("material" in node)) throw new Error("Missing material");
    assert.equal(node.material, "Textured 285gsm watercolour paper");
  });

  test("passepartout editions say the outer frame is not included", () => {
    for (const slug of ["symphony-of-waves", "arch-of-wind-and-time", "erosion-gate-passepartout"]) {
      assert.equal(getArtwork(slug)?.productFormat, "Fine art print with passepartout mount (frame not included)");
    }
  });
});

describe("homepage featured prints", () => {
  test("all four featured homepage prints have their own shop listing and price", () => {
    const featured = homepageFeaturedArtworks();
    assert.equal(featured.length, 4);
    assert.equal(featured.length, HOMEPAGE_FEATURED_SLUGS.length);
    for (const a of featured) {
      assert.ok(a.productPath?.startsWith("/product/"), `${a.slug} needs a product listing`);
      assert.ok(Number(a.price) > 0, `${a.slug} needs a price`);
    }
  });
});

describe("other editions cross-sell", () => {
  test("Symphony of Waves offers its framed and canvas editions", () => {
    const a = getArtwork("symphony-of-waves");
    if (!a) throw new Error("Missing listing");
    assert.deepEqual(otherEditions(a).map((e) => e.slug).sort(), ["symphony-of-waves-framed", "waves-matte-canvas"]);
  });

  test("drawings without a listing have no editions", () => {
    const a = getArtwork("abbaye-aux-dames-saintes");
    if (!a) throw new Error("Missing drawing");
    assert.deepEqual(otherEditions(a), []);
  });
});

describe("artwork search and filters", () => {
  test("'beach' finds coastal prints through synonyms", () => {
    const found = filterArtworks(artworks, { q: "beach" }).map((a) => a.slug);
    assert.ok(found.includes("symphony-of-waves"));
  });

  test("'church' finds the Saintes cathedral", () => {
    const found = filterArtworks(artworks, { q: "church" }).map((a) => a.slug);
    assert.ok(found.includes("cathedrale-saint-pierre-saintes"));
  });

  test("the canvas filter returns only the canvas edition", () => {
    assert.deepEqual(filterArtworks(artworks, { format: "canvas" }).map((a) => a.slug), ["waves-matte-canvas"]);
  });

  test("the enquiry filter returns the five drawings not in the shop", () => {
    assert.equal(filterArtworks(artworks, { format: "enquire" }).length, 5);
  });
});

describe("AI summary (llms.txt)", () => {
  test("lists every shop print with USD prices and makes no museum-grade claim", () => {
    const txt = buildLlmsTxt();
    assert.match(txt, /16 prints are listed in the shop, priced from \$29\.99 to \$321\.85/);
    assert.doesNotMatch(txt, /museum-grade|€/i);
  });
});
