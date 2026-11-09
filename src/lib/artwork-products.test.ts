import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { getArtwork, homepageFeaturedArtworks, HOMEPAGE_FEATURED_SLUGS } from "../data/artworks";
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
    assert.equal(node.material, "Paper");
    assert.deepEqual(node.additionalProperty.find((p) => p.name === "Presentation"), {
      "@type": "PropertyValue", name: "Presentation", value: "Framed paper poster",
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

  test("a listing with no verified print material does not claim one", () => {
    const artwork = getArtwork("cathedrale-saint-pierre-saintes");
    if (!artwork) throw new Error("Missing Saintes listing");
    const node = productNode(artwork, { includeOffer: true });
    assert.equal(node["@type"], "Product");
    assert.equal("material" in node, false);
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
