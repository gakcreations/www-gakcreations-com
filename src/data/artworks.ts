/**
 * Canonical, per-artwork records. Each entry gets its own indexable page at
 * /artwork/$slug so that search engines have something of ours to rank for
 * individual artwork titles (the shop itself lives on Printify).
 */
export interface Artwork {
  slug: string;
  sku: string;
  title: string;
  image: string;
  alt: string;
  medium: string;
  place: string;
  year: string;
  /** Short description reused in cards, meta descriptions and schema. */
  description: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  /** Long-form narrative, rendered as paragraphs on the artwork page. */
  story: string[];
  /** Practical buyer notes: sizing, framing, where it hangs well. */
  hanging: string[];
  /** Collection slugs this artwork belongs to. */
  collections: string[];
  /** Path of the matching listing in the Printify shop, if it has one. */
  productPath?: string;
  /** Other artwork slugs shown as companion pieces. */
  related: string[];

}

const ABBAYE = "/images/Abbaye Aux Dames Saintes France.jpg";
const GUGGENHEIM = "/images/Guggenheim Museum Bilba, Spain.jpg";
const SAN_JUAN = "/images/Chruch of San Juan Bautista de Banos, Spain.jpg";
const FUERTEVENTURA = "/images/Fuerteventura Chapel.jpg";
const BOAT = "/images/The Boat That Dreams Of Sea.jpg";

export const artworks: Artwork[] = [
  {
    slug: "abbaye-aux-dames-saintes",
    sku: "GAK-ARCH-001",
    title: "Abbaye aux Dames, Saintes",
    image: ABBAYE,
    alt: "Architectural art print of the Romanesque Abbaye aux Dames in Saintes, France, drawn in ink and watercolour wash with visible pencil construction lines",
    medium: "Ink and wash on paper",
    place: "Saintes, France",
    year: "Charente-Maritime, France",
    description:
      "A Romanesque abbey in south-west France, drawn from the square in a single morning. The tiered bell tower is set out with the construction lines still showing, while diluted ink carries the shadow down the west front.",
    seoTitle: "Abbaye aux Dames, Saintes — Architectural Art Print | GAK Creations",
    seoDescription:
      "Architectural art print of the Romanesque Abbaye aux Dames in Saintes, France. Hand-drawn in ink and watercolour wash by Gerald Allen Knowles. Museum-quality print, shipped worldwide.",
    keywords: [
      "Abbaye aux Dames art print",
      "Saintes France wall art",
      "Romanesque abbey drawing",
      "architectural art print",
      "ink and wash architecture print",
      "French architecture wall art",
    ],
    story: [
      "The Abbaye aux Dames has stood in Saintes since the eleventh century, and its west front is one of the most worked pieces of Romanesque carving in the Charente. This drawing was made from the square in front of it, in one sitting, before the light moved round far enough to flatten the arch mouldings.",
      "The construction lines are left visible on purpose. Before any ink went down, the tiered bell tower was set out by eye — a horizon, a centre line, the rhythm of the arcading measured off against a thumb. Those pencil marks are the honest record of how the building was understood, and erasing them would remove the part of the drawing that is actually about looking.",
      "Ink follows the pencil in two weights: a fine technical line for the structural edges, and a diluted wash that finds the shadow beneath each cornice and carries it down the façade. The limestone is described almost entirely by what the brush does rather than by outline — dry-brushed where the stone has weathered, left as bare paper where the sun hits it directly.",
      "It is the quietest of the architectural pieces, and the one that most rewards a large print. At A2 and above the pencil work comes forward and the sheet reads as a drawing rather than a reproduction of one.",
    ],
    hanging: [
      "High contrast in the tower and a great deal of open paper around it make this a print that settles a room instead of competing with it. It suits a study, a hallway, a stairwell, or the wall above a desk.",
      "Frame it in narrow natural oak or matte black with an off-white mount of 5–7 cm. Hung opposite the Guggenheim Bilbao collage it makes a nine-century argument about how mass meets light.",
    ],
    collections: ["architecture", "travel", "gaudi-and-modern-landmarks"],
    related: ["guggenheim-museum-bilbao", "church-of-san-juan-bautista-de-banos"],
  },
  {
    slug: "guggenheim-museum-bilbao",
    sku: "GAK-MOD-001",
    title: "Guggenheim Museum Bilbao",
    image: GUGGENHEIM,
    alt: "Mixed-media collage art print of the Guggenheim Museum Bilbao in Spain, showing titanium curves rendered in torn metallic paper and ink",
    medium: "Mixed-media collage",
    place: "Bilbao, Spain",
    year: "Basque Country, Spain",
    description:
      "Gehry's titanium curves rendered in torn metallic paper and ink, so the surface of the print behaves the way the building behaves in Basque light — reflective one moment, matte the next.",
    seoTitle: "Guggenheim Bilbao — Modern Architecture Art Print | GAK Creations",
    seoDescription:
      "Guggenheim Museum Bilbao art print: Frank Gehry's titanium curves drawn as a mixed-media collage of torn metallic paper and ink by Gerald Allen Knowles. Shipped worldwide.",
    keywords: [
      "Guggenheim Bilbao art print",
      "Frank Gehry wall art",
      "modern architecture poster",
      "Bilbao Spain art print",
      "contemporary architecture collage",
      "titanium building art",
    ],
    story: [
      "Gehry's museum sets a trap for anyone trained in architectural drawing: nothing in it is straight. The vanishing point, the plumb line, the parallel run of a cornice — the whole toolkit is useless in front of a building whose surfaces were generated rather than drawn.",
      "The answer arrived after several failed attempts on site. Stop drawing the outline and start drawing what the metal is doing to the light coming off the Nervión. Once the reflections are placed correctly, the shape resolves itself around them.",
      "That is why the piece is a collage rather than a painting. Torn metallic paper behaves the way titanium behaves — matte under flat cloud, mirror-bright in low sun, and different again as you move past it. No pigment reproduces that shift; the paper simply does it. Ink line work is laid over the top only where the building needs holding steady.",
      "The result is the most graphic print in the archive: high contrast, confident shapes, and enough physical texture to escape the flatness of a standard architectural poster.",
    ],
    hanging: [
      "A strong single statement piece for a modern living room, studio or office. It carries a large wall on its own and does not need a companion.",
      "Because the collage passages read as metallic, avoid glossy glazing — matte or museum glass keeps the tonal shift working. A simple black or white frame with a wide mount suits it best.",
    ],
    collections: ["gaudi-and-modern-landmarks", "architecture", "travel"],
    related: ["abbaye-aux-dames-saintes", "church-of-san-juan-bautista-de-banos"],
  },
  {
    slug: "church-of-san-juan-bautista-de-banos",
    sku: "GAK-TRAV-001",
    title: "Church of San Juan Bautista de Baños",
    image: SAN_JUAN,
    alt: "Mixed-media travel collage art print of the Visigothic church of San Juan Bautista de Baños in Spain, layering architectural sketch line with torn ochre paper",
    medium: "Collage and ink",
    place: "Baños de Cerrato, Spain",
    year: "Castile, Spain",
    description:
      "One of the oldest churches on the Iberian peninsula, rebuilt in paper. Torn ochre fragments stand in for the Castilian plain while the horseshoe arch is left as clean drawing.",
    seoTitle: "San Juan Bautista de Baños — Travel Collage Art Print | GAK Creations",
    seoDescription:
      "Mixed-media collage art print of the seventh-century Visigothic church of San Juan Bautista de Baños, Spain, by Gerald Allen Knowles. Warm, graphic travel wall art shipped worldwide.",
    keywords: [
      "San Juan Bautista de Baños print",
      "Visigothic church art",
      "travel collage print",
      "Spanish architecture wall art",
      "mixed media collage art print",
      "Castile Spain artwork",
    ],
    story: [
      "San Juan Bautista de Baños was consecrated in 661, which makes it one of the oldest standing churches on the Iberian peninsula. It sits low on the Castilian plain with almost nothing around it — a small, thick-walled building that has outlasted every civilisation that passed it.",
      "Collage was the only honest method here. The church is made of reused Roman stone; the drawing is made of reused paper. Ochre fragments, printed matter and kraft stand in for the plain and for the rubble walls, torn rather than cut so the edges stay soft the way weathered masonry does.",
      "One element resists the paper entirely. The horseshoe arch over the entrance is left as pure line — a clean, measured piece of drawing surrounded by texture, because that arch is the whole reason the building matters architecturally and it should not be allowed to blur into collage.",
      "It reads as contemporary and graphic from across a room, then resolves into careful observation up close. That double life is what makes it the most flexible piece in the travel work.",
    ],
    hanging: [
      "Warm ochres make this a good fit above a sideboard, in an entrance hall, or in a home office — anywhere a wall can hold something with texture.",
      "It sits particularly well against clay, olive, deep green or plain white walls. Use a wide mount so the torn edges have room to do their work.",
    ],
    collections: ["travel", "architecture"],
    related: ["abbaye-aux-dames-saintes", "volcanic-landscape-fuerteventura"],
  },
  {
    slug: "volcanic-landscape-fuerteventura",
    sku: "GAK-FUER-001",
    title: "Volcanic Landscape of Fuerteventura",
    image: FUERTEVENTURA,
    alt: "Fuerteventura art print of a small white chapel set into a black volcanic hillside under an open Atlantic sky, in ink and watercolour wash",
    medium: "Ink and wash on paper",
    place: "Fuerteventura, Canary Islands",
    year: "Canary Islands, Spain",
    description:
      "A whitewashed chapel dug into a volcanic slope above the Atlantic. Lava blacks and ochres against lime white — a landscape print with real weight rather than prettiness.",
    seoTitle: "Volcanic Landscape of Fuerteventura — Canary Islands Art Print | GAK Creations",
    seoDescription:
      "Fuerteventura art print of a whitewashed chapel on a volcanic hillside in the Canary Islands, drawn on location in ink and watercolour by Gerald Allen Knowles. Shipped worldwide.",
    keywords: [
      "Fuerteventura art print",
      "Canary Islands wall art",
      "volcanic landscape print",
      "Canarian chapel art",
      "Atlantic island artwork",
      "watercolour landscape print",
    ],
    story: [
      "Fuerteventura is the oldest of the Canary Islands and it looks it. Wind has taken the volcanic cones down to soft shoulders, and there are stretches where the only vertical thing for a kilometre is a whitewashed ermita or a dry-stone wall.",
      "This drawing gives the ground the leading role. The chapel is reduced almost to a scale marker — a small white mark whose job is to prove how large everything around it is. That reversal is deliberate: on this island the landscape is the architecture, and the buildings are guests.",
      "Volcanic terrain resists conventional landscape technique. There is little green to break up the field and almost no atmospheric perspective in dry air, so distance is carried by value alone. The solution is granulating earth pigment — colours that separate on damp paper and imitate the grain of the ground itself. Some of the texture in the original is genuinely grit, carried onto the wet sheet by the wind and left there.",
      "It is the strongest piece in the archive at large sizes. Below A3 the granulation closes up; above A2 the volcanic passages open out the way they did on the original paper.",
    ],
    hanging: [
      "Lava blacks and lime white give this print enough contrast to hold a bright room where softer watercolour work would wash out. It suits plaster walls, natural stone and warm neutral interiors.",
      "Buy it larger than feels obvious — this is the one piece in the archive where scale genuinely changes what you see. Pair it with the Blue Boat for a calm two-piece island grouping.",
    ],
    collections: ["fuerteventura", "nature", "coastal"],
    related: ["the-blue-boat-that-dreams-of-sea", "church-of-san-juan-bautista-de-banos"],
  },
  {
    slug: "the-blue-boat-that-dreams-of-sea",
    sku: "GAK-COAST-001",
    title: "The Blue Boat That Dreams of Sea",
    image: BOAT,
    alt: "Coastal art print of a blue wooden boat at rest beside tall plants in front of a windowed wall, painted in ink and watercolour wash",
    medium: "Ink and wash on paper",
    place: "Atlantic coast",
    year: "Atlantic coast",
    description:
      "A working boat pulled up and left among the plants for a season, drawn where the harbour meets the town. Calm, blue-led coastal wall art with an architect's sense of line.",
    seoTitle: "The Blue Boat That Dreams of Sea — Coastal Art Print | GAK Creations",
    seoDescription:
      "Coastal art print of a blue wooden boat at rest among tall plants, drawn in ink and watercolour by Gerald Allen Knowles. Calm blue seaside wall art, shipped worldwide.",
    keywords: [
      "blue boat art print",
      "coastal art prints",
      "harbour wall art",
      "nautical watercolour print",
      "seaside wall art",
      "calm bedroom wall art",
    ],
    story: [
      "This boat had been out of the water long enough for the plants to grow up around it. That is the subject — not the sea, which barely appears, but the pause: a working object at rest, still shaped entirely by the water it is waiting for.",
      "An architect's eye does not switch off at the shoreline. The hull here is drawn as a structure. The keel is a spine, the gunwale a datum line, and the tall plants behind it are given the same line weight as the masonry of the wall, so they stand as equals in the composition rather than as decoration.",
      "Colour is deliberately narrow: Payne's grey, indigo, a chalked-out white, and one insistent boat blue that recurs across the coastal series like a signature. Where green appears it is only the plant life that grows where nobody maintains anything.",
      "That restraint is why the piece reads as calm rather than sentimental. There is no drama in the water and no attempt at a sunset. It is an ordinary morning, recorded accurately.",
    ],
    hanging: [
      "The most-chosen print in the archive for bedrooms, bathrooms and long hallways — spaces where the eye wants somewhere to rest.",
      "Pair it with natural materials: oak, linen, unglazed ceramic, pale plaster. A white or off-white mount continues the paper of the original. Avoid glossy glazing so the washes keep reading as watercolour.",
    ],
    collections: ["coastal", "fuerteventura", "nature"],
    related: ["volcanic-landscape-fuerteventura", "abbaye-aux-dames-saintes"],
  },
];

export const getArtwork = (slug: string) => artworks.find((a) => a.slug === slug);

/** Artworks belonging to a given collection slug, in archive order. */
export const artworksInCollection = (collectionSlug: string) =>
  artworks.filter((a) => a.collections.includes(collectionSlug));

/** Maps a collection work image back to its canonical artwork page. */
export const artworkByImage = (image: string) => artworks.find((a) => a.image === image);
