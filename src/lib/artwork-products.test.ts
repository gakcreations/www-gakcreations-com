import { describe, expect, test } from "bun:test";
import { getArtwork } from "../data/artworks";
import { productNode } from "./seo";

describe("listing-specific product material", () => {
  test("the waves canvas listing remains canvas in Product data", () => {
    const artwork = getArtwork("waves-matte-canvas");
    if (!artwork) throw new Error("Missing canvas listing");
    const node = productNode(artwork, {
      includeOffer: true,
      pageUrl: "https://www.gakcreations.com/artwork/waves-matte-canvas",
    });
    expect(node).toMatchObject({
      "@type": "Product",
      material: "Matte canvas",
      offers: {
        price: "52.23",
        priceCurrency: "USD",
        url: "https://artprints.gakcreations.com/product/29106517/fuerteventura-waves-matte-canvas-print-symphony-of-waves-framed-wall-art",
      },
    });
  });

  test("the framed Saintes edition retains its own listing and paper material", () => {
    const artwork = getArtwork("cathedral-saintes-framed");
    if (!artwork) throw new Error("Missing framed cathedral listing");
    expect(productNode(artwork, { includeOffer: true })).toMatchObject({
      "@type": "Product",
      material: "Paper",
      additionalProperty: expect.arrayContaining([
        { "@type": "PropertyValue", name: "Presentation", value: "Framed paper poster" },
      ]),
      offers: {
        price: "270.60",
        url: "https://artprints.gakcreations.com/product/28619889/cathedral-saint-pierre-saintes-france-framed-paper-poster",
      },
    });
  });

  test("a work without a purchasable listing does not become a Product offer", () => {
    const artwork = getArtwork("abbaye-aux-dames-saintes");
    if (!artwork) throw new Error("Missing archive drawing");
    const node = productNode(artwork, { includeOffer: true });
    expect(node["@type"]).toBe("VisualArtwork");
    expect(node).not.toHaveProperty("offers");
  });
});