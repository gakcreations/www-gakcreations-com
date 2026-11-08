import assert from "node:assert/strict";
import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const output = path.resolve(".output/public");
const site = "https://www.gakcreations.com";
const readOutput = (file) => readFile(path.join(output, file), "utf8");

function tags(html, tag) {
  return [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, "gi"))].map(([value]) => value);
}

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}="([^"]*)"`, "i"))?.[1];
}

function graph(html) {
  const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  assert.ok(scripts.length, "page must have JSON-LD");
  return scripts.flatMap(([, json]) => {
    const data = JSON.parse(json);
    assert.equal(data["@context"], "https://schema.org");
    return data["@graph"];
  });
}

async function htmlPages(dir = "") {
  const entries = await readdir(path.join(output, dir), { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const relative = path.join(dir, entry.name);
    if (entry.isDirectory()) return htmlPages(relative);
    return entry.name === "index.html" ? [relative] : [];
  }));
  return files.flat();
}

test("sitemap covers every prerendered page and matches its canonical metadata", async () => {
  const sitemap = await readOutput("sitemap.xml");
  const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) =>
    url.replaceAll("&amp;", "&"),
  );
  assert.ok(locations.length > 0);
  assert.equal(new Set(locations).size, locations.length, "sitemap URLs must be unique");
  const pages = await htmlPages();
  const expected = new Set(pages.map((file) => {
    const route = path.dirname(file);
    return route === "." ? `${site}/` : `${site}/${route.split(path.sep).join("/")}`;
  }));
  assert.deepEqual(new Set(locations), expected);

  for (const file of pages) {
    const html = await readOutput(file);
    const route = path.dirname(file);
    const canonical = route === "." ? `${site}/` : `${site}/${route.split(path.sep).join("/")}`;
    const links = tags(html, "link").filter((tag) => attribute(tag, "rel") === "canonical");
    assert.equal(links.length, 1, `${file} must have one canonical`);
    assert.equal(attribute(links[0], "href"), canonical);
    const metas = tags(html, "meta");
    assert.equal(metas.filter((tag) => attribute(tag, "name") === "description").length, 1, file);
    assert.equal(metas.filter((tag) => attribute(tag, "name") === "robots").length, 1, file);
    assert.equal(attribute(metas.find((tag) => attribute(tag, "property") === "og:url"), "content"), canonical);
    assert.ok(metas.some((tag) => attribute(tag, "property") === "og:image:alt" && attribute(tag, "content")), file);
    graph(html);
  }
});

test("product and article schema describe their own pages", async () => {
  const home = graph(await readOutput("index.html"));
  assert.ok(!home.some((node) => node["@type"] === "Product"), "homepage is not a single product page");

  const articleHtml = await readOutput("journal/architectural-sketching-on-location/index.html");
  const articleGraph = graph(articleHtml);
  const article = articleGraph.find((node) => node["@type"] === "BlogPosting");
  assert.ok(article?.datePublished);
  assert.ok(articleGraph.some((node) => node["@id"] === article.mainEntityOfPage["@id"]));
  assert.match(articleHtml, /By (?:<!-- -->)?Gerald Allen Knowles/);
  const socialAlt = tags(articleHtml, "meta").find((tag) => attribute(tag, "property") === "og:image:alt");
  assert.match(attribute(socialAlt, "content"), /Architectural sketch of Abbaye/);

  const productGraph = graph(await readOutput("artwork/waves-matte-canvas/index.html"));
  const product = productGraph.find((node) => node["@type"] === "Product");
  assert.ok(product?.sku && product.offers?.price && product.offers?.priceCurrency);
  assert.match(product.material, /canvas/i);
});

test("merchant feed contains only matching product pages and listing prices", async () => {
  const feed = await readOutput("merchant-feed.xml");
  const items = [...feed.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, item]) => item);
  assert.ok(items.length > 0, "merchant feed must include listings");
  const products = new Map();
  for (const file of await htmlPages()) {
    if (!file.startsWith(`artwork${path.sep}`)) continue;
    const html = await readOutput(file);
    for (const node of graph(html)) {
      if (node["@type"] === "Product") {
        assert.ok(!products.has(node.sku), `duplicate product SKU ${node.sku}`);
        const price = new Intl.NumberFormat("en", {
          style: "currency",
          currency: node.offers.priceCurrency,
        }).format(Number(node.offers.price));
        assert.ok(html.includes(price), `${file} must display its structured-data price`);
        products.set(node.sku, node);
      }
    }
  }
  assert.equal(items.length, products.size);
  for (const item of items) {
    const id = item.match(/<g:id>(.*?)<\/g:id>/)?.[1];
    const price = item.match(/<g:price>(.*?)<\/g:price>/)?.[1];
    const product = products.get(id);
    assert.ok(product, `feed SKU ${id} must have a product page`);
    assert.equal(price, `${product.offers.price} ${product.offers.priceCurrency}`);
    const image = item.match(/<g:image_link>(.*?)<\/g:image_link>/)?.[1];
    assert.ok(image?.startsWith(`${site}/images/`));
    await access(path.join(output, decodeURIComponent(new URL(image).pathname)));
    assert.ok(!item.includes("<g:additional_image_link>"), "resized copies are not distinct images");
  }
});
