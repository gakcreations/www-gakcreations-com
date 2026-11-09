import type { Artwork } from "@/data/artworks";
import { collections } from "@/data/collections";

export const FORMAT_FILTERS = [
  { value: "framed", label: "Framed" },
  { value: "mounted", label: "Mounted (passepartout)" },
  { value: "canvas", label: "Canvas" },
  { value: "print", label: "Unframed print" },
  { value: "enquire", label: "Ask about a print" },
] as const;

export type FormatFilter = (typeof FORMAT_FILTERS)[number]["value"];

export interface ArtworkFilters {
  q?: string;
  theme?: string;
  format?: FormatFilter;
}

/**
 * Words buyers type that don't literally appear in the artwork records.
 * Each key expands to the terms it should also match.
 */
const SYNONYMS: Record<string, string[]> = {
  beach: ["coastal", "shore", "sand", "waves", "sea"],
  ocean: ["sea", "atlantic", "waves", "coastal"],
  sea: ["coastal", "waves", "atlantic", "seascape"],
  seaside: ["coastal", "beach"],
  nautical: ["boat", "harbour", "coastal"],
  harbor: ["harbour"],
  church: ["cathedral", "abbey", "chapel", "abbaye", "church"],
  cathedral: ["cathedral", "cathédrale"],
  religious: ["cathedral", "abbey", "chapel", "church"],
  building: ["architecture", "architectural"],
  buildings: ["architecture", "architectural"],
  architect: ["architecture", "architectural"],
  sketch: ["drawing", "ink", "pencil", "sketchbook"],
  sketches: ["drawing", "ink", "pencil", "sketchbook"],
  drawing: ["ink", "pencil", "drawing"],
  watercolor: ["watercolour"],
  island: ["fuerteventura", "canary"],
  islands: ["fuerteventura", "canary"],
  canaries: ["canary", "fuerteventura"],
  spain: ["spain", "fuerteventura", "bilbao", "castile"],
  france: ["france", "saintes"],
  french: ["france", "saintes"],
  palm: ["palm"],
  palms: ["palm"],
  tropical: ["palm", "coastal"],
  volcano: ["volcanic"],
  desert: ["fuerteventura", "volcanic", "landscape"],
  framed: ["framed"],
  frame: ["framed", "passepartout"],
  mount: ["passepartout", "mount"],
  mat: ["passepartout", "mount"],
  matted: ["passepartout", "mount"],
  canvas: ["canvas"],
  poster: ["poster", "print"],
  blue: ["turquoise", "blue", "waves"],
  gift: ["gift"],
};

const normalise = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

function haystack(a: Artwork) {
  const collectionNames = a.collections
    .map((slug) => collections.find((c) => c.slug === slug)?.name ?? slug)
    .join(" ");
  return normalise(
    [
      a.title,
      a.place,
      a.medium,
      a.description,
      a.productFormat ?? "",
      a.printMaterial ?? "",
      collectionNames,
      ...a.keywords,
    ].join(" "),
  );
}

export function formatOf(a: Pick<Artwork, "productPath" | "productFormat">): FormatFilter {
  if (!a.productPath) return "enquire";
  const f = normalise(a.productFormat ?? "");
  if (f.includes("canvas")) return "canvas";
  if (f.includes("passepartout") || f.includes("mount")) return "mounted";
  if (f.includes("framed")) return "framed";
  return "print";
}

/** Every query word (or one of its synonyms) must appear somewhere in the artwork record. */
export function matchesQuery(a: Artwork, q: string) {
  const words = normalise(q).split(/\s+/).filter(Boolean);
  if (words.length === 0) return true;
  const text = haystack(a);
  return words.every((w) => {
    const options = [w, ...(SYNONYMS[w] ?? [])].map(normalise);
    // Match at the start of a word so "sea" finds "seascape" but not "research".
    return options.some((o) => new RegExp(`(^|[^a-z0-9])${o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`).test(text));
  });
}

export function filterArtworks(list: Artwork[], filters: ArtworkFilters) {
  return list.filter(
    (a) =>
      (!filters.theme || a.collections.includes(filters.theme)) &&
      (!filters.format || formatOf(a) === filters.format) &&
      (!filters.q || matchesQuery(a, filters.q)),
  );
}
