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
    seoTitle: "Abbaye aux Dames, Saintes Fine Art Print | Architectural Wall Art | GAK Creations",
    seoDescription:
      "Shop a museum-quality architectural art print of the Romanesque Abbaye aux Dames in Saintes, hand-drawn in ink and watercolour by Gerald Allen Knowles.",
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
    seoTitle: "Guggenheim Bilbao Fine Art Print | Modern Architecture Wall Art | GAK Creations",
    seoDescription:
      "Shop a Guggenheim Bilbao fine art print by Gerald Allen Knowles, rendered as a mixed-media collage with metallic paper, ink and modern architectural detail.",
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
    seoTitle: "San Juan Bautista de Baños Fine Art Print | Travel Collage Wall Art | GAK Creations",
    seoDescription:
      "Shop a San Juan Bautista de Baños fine art print by Gerald Allen Knowles, with warm mixed-media collage textures and hand-drawn architectural detail.",
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
    seoTitle: "Volcanic Landscape of Fuerteventura Fine Art Print | Canary Islands Wall Art | GAK Creations",
    seoDescription:
      "Shop a Fuerteventura fine art print by Gerald Allen Knowles, featuring a whitewashed chapel, volcanic landscape and quiet Canary Islands light.",
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
    seoTitle: "The Blue Boat That Dreams of Sea Fine Art Print | Coastal Wall Art | GAK Creations",
    seoDescription:
      "Shop a coastal fine art print of a blue boat at rest, hand-drawn by Gerald Allen Knowles for calm bedrooms, hallways and seaside-inspired interiors.",
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
  {
    slug: "cathedrale-saint-pierre-saintes",
    sku: "GAK-ARCH-002",
    title: "Cathédrale Saint-Pierre, Saintes",
    image: "/images/printify/saintes-cathedral.jpg",
    alt: "Watercolour and ink art print of the tower of Cathédrale Saint-Pierre in Saintes, France, seen from a narrow street",
    medium: "Ink and watercolour on paper",
    place: "Saintes, France",
    year: "Charente-Maritime, France",
    description:
      "The great flamboyant tower of Saint-Pierre seen from the street below, drawn in warm ochre wash with two figures left in to give the stonework its true scale.",
    seoTitle: "Cathédrale Saint-Pierre, Saintes Fine Art Print | Architectural Wall Art | GAK Creations",
    seoDescription:
      "Shop a Cathédrale Saint-Pierre fine art print by Gerald Allen Knowles, with warm watercolour, Gothic stonework and hand-drawn architectural detail.",
    keywords: [
      "Saintes cathedral art print",
      "French cathedral wall art",
      "architectural watercolour print",
      "Charente-Maritime artwork",
      "gothic architecture art print",
      "France travel wall art",
    ],
    story: [
      "Saint-Pierre dominates Saintes the way a cathedral is supposed to: you cannot get far enough away from it to see it comfortably. This drawing accepts that and works from a narrow street, looking up, with the façades on either side squeezing the tower into the middle of the sheet.",
      "The tower is late gothic and unfinished at the top, capped instead of spired. Drawn from below, its buttresses lean into the picture, so the pencil setting-out was done as a series of converging verticals rather than a flat elevation.",
      "Colour is kept to warm ochres, a green-grey for the shadowed stone, and small marks of dark for the openings. Two figures at the base of the street are the only human note, and they are there for one reason: without them nothing tells you how tall the building is.",
      "The handwritten note and signature at the foot of the sheet are part of the original drawing and are reproduced with it.",
    ],
    hanging: [
      "A tall, upright composition that suits a narrow wall, a stair landing, or a pair of alcoves either side of a chimney breast.",
      "Warm oak or natural ash frames pick up the ochres. Hang it near the Abbaye aux Dames print for a two-piece Saintes grouping — nine centuries of the same town.",
    ],
    collections: ["architecture", "travel"],
    productPath: "/product/28619938/watercolor-cathedrale-saint-pierre-saintes-france-poster-textured-matte-art-print",
    related: ["abbaye-aux-dames-saintes", "guggenheim-museum-bilbao"],
  },
  {
    slug: "arch-of-wind-and-time",
    sku: "GAK-FUER-002",
    title: "Arch of Wind & Time",
    image: "/images/printify/arch-of-wind-and-time.jpg",
    alt: "Black and white pen drawing art print of a wind-eroded rock arch on the coast of Fuerteventura, Canary Islands",
    medium: "Pen and ink on paper",
    place: "Fuerteventura, Canary Islands",
    year: "Canary Islands, Spain",
    description:
      "A wind-cut arch on the Fuerteventura coast, drawn entirely in pen. Thousands of short strokes build the eroded basalt, with the sea left as bare paper through the opening.",
    seoTitle: "Arch of Wind & Time Fine Art Print | Fuerteventura Ink Wall Art | GAK Creations",
    seoDescription:
      "Shop an Arch of Wind & Time fine art print by Gerald Allen Knowles, with monochrome pen work capturing a wind-eroded Fuerteventura coastal arch.",
    keywords: [
      "Fuerteventura rock arch print",
      "black and white ink art print",
      "Canary Islands wall art",
      "pen drawing landscape print",
      "monochrome coastal art",
      "geology inspired wall art",
    ],
    story: [
      "The arch is what is left after the wind has taken everything softer away. Standing under it, the surprise is not the shape but the texture: the basalt is pitted and stringy, closer to something poured than something carved.",
      "That texture is the whole drawing. There is no wash and no colour — only pen, worked in short directional strokes that follow the grain of the rock. Where the stone turns away from the light the strokes cross; where it faces the sun the paper is simply left alone.",
      "The opening was drawn last and deliberately kept empty. A blank sheet behind all that dense mark-making reads as distance, light and sea at once, and any attempt to describe it would have closed the arch up.",
      "It is the most graphic piece in the Fuerteventura work and the one that holds its own in a room with no colour in it at all.",
    ],
    hanging: [
      "Pure black and white makes this an easy print to place: it works in a monochrome interior, a gallery wall of mixed frames, or a small dark room that needs contrast rather than colour.",
      "Slim black frame, generous white mount. It pairs naturally with Erosion Gate — the same coast, ten minutes further along.",
    ],
    collections: ["fuerteventura", "nature", "coastal"],
    productPath: "/product/29077506/fine-art-print-arch-of-wind-and-amp-time-fuerteventura",
    related: ["erosion-gate-fuerteventura", "volcanic-landscape-fuerteventura"],
  },
  {
    slug: "erosion-gate-fuerteventura",
    sku: "GAK-FUER-003",
    title: "Erosion Gate",
    image: "/images/printify/erosion-gate.jpg",
    alt: "Monochrome ink art print of an eroded volcanic rock gateway on the Fuerteventura coastline, Canary Islands",
    medium: "Pen and ink on paper",
    place: "Fuerteventura, Canary Islands",
    year: "Canary Islands, Spain",
    description:
      "A hollowed volcanic gateway on the north coast, drawn looking through it rather than at it — the rock as doorway, with the shoreline running out beyond.",
    seoTitle: "Erosion Gate Fine Art Print | Fuerteventura Coastal Ink Art | GAK Creations",
    seoDescription:
      "Shop an Erosion Gate fine art print by Gerald Allen Knowles, with monochrome ink detail focused on a volcanic Fuerteventura coastal gateway.",
    keywords: [
      "Erosion Gate Fuerteventura print",
      "volcanic rock art print",
      "Canary Islands ink drawing",
      "black and white landscape art",
      "coastal rock formation print",
      "travel art print Spain",
    ],
    story: [
      "An architect draws openings all day: doors, windows, thresholds. This one was made by the sea over some very long period, and it behaves exactly like a doorway — you stand in it, the light changes, and the landscape on the other side is framed for you.",
      "So it is drawn as an opening. The rock mass is dense, dark and worked over; the aperture is clean; and the composition is arranged so your eye is pulled through it rather than held on the surface.",
      "The technique is the same as in Arch of Wind & Time: no colour, no wash, all pen. Value is built by how close the strokes sit to each other, which is slower than shading and much more honest about the direction of a surface.",
      "It reads as almost abstract from across a room, then resolves into stone as you approach it.",
    ],
    hanging: [
      "A strong, quiet print for an entrance hall, study or bedroom. It needs a plain wall behind it — patterned wallpaper fights the pen work.",
      "Frame it with a wide off-white mount so the dense drawing has space around it. It hangs well as a pair with Arch of Wind & Time.",
    ],
    collections: ["fuerteventura", "nature", "coastal"],
    productPath: "/product/29079266/fuerteventura-erosion-gate-framed-paper-poster-canary-islands-travel-art",
    related: ["arch-of-wind-and-time", "volcanic-landscape-fuerteventura"],
  },
  {
    slug: "mystical-fuerteventura-dream-nights",
    sku: "GAK-FUER-004",
    title: "Mystical Fuerteventura — Dream Nights",
    image: "/images/printify/dream-nights.jpg",
    alt: "Black and white art print of Canary palms against a dark night sky in Fuerteventura, drawn in ink",
    medium: "Pen and ink on paper",
    place: "Fuerteventura, Canary Islands",
    year: "Canary Islands, Spain",
    description:
      "Canary palms against a worked black sky. The night is drawn rather than printed — layer on layer of ink until the fronds come forward as pale silhouettes.",
    seoTitle: "Mystical Fuerteventura — Dream Nights Fine Art Print | Palm Tree Wall Art | GAK Creations",
    seoDescription:
      "Shop a Dream Nights fine art print by Gerald Allen Knowles, with monochrome Canary palms and a dramatic Fuerteventura night sky.",
    keywords: [
      "palm tree art print black and white",
      "Fuerteventura night art print",
      "Canary palm wall art",
      "monochrome tropical print",
      "dramatic ink drawing print",
      "Canary Islands artwork",
    ],
    story: [
      "Away from the resorts, Fuerteventura at night is genuinely dark, and the palms stop being holiday decoration. They become structure — trunks like columns, crowns like vaulting.",
      "Getting a night sky right on white paper is the whole problem of this drawing. Ink was laid down in successive passes, allowed to dry, then worked again, so the black has depth in it instead of sitting flat. Some of the sky was scratched back to give the impression of stars behind cloud.",
      "The palms themselves are barely outlined. They exist because the sky stops where they are. That reversal — drawing the space and letting the subject appear in the gap — is the reason the piece feels lit from behind.",
      "The ground is handled quickly and low in the sheet, so nearly the whole composition is sky.",
    ],
    hanging: [
      "The most dramatic print in the archive. It carries a dark feature wall, a bedroom, or a dining room lit by lamplight rather than daylight.",
      "Black frame, white mount, matte glazing — reflections are the enemy of a print with this much black in it.",
    ],
    collections: ["fuerteventura", "nature"],
    productPath: "/product/29077201/mystical-fuerteventura-dream-nights-fine-art-print",
    related: ["fuerteventura-palm-trees-symphony", "arch-of-wind-and-time"],
  },
  {
    slug: "fuerteventura-palm-trees-symphony",
    sku: "GAK-FUER-005",
    title: "Palm Trees Symphony",
    image: "/images/printify/palm-trees-symphony.jpg",
    alt: "Watercolour and ink art print of a group of palm trees above a beach in Fuerteventura, Canary Islands",
    medium: "Ink and watercolour on paper",
    place: "Fuerteventura, Canary Islands",
    year: "Canary Islands, Spain",
    description:
      "A stand of palms above the sand, drawn in soft rose and blue-grey. The same trees as the night drawing, seen in flat midday light.",
    seoTitle: "Palm Trees Symphony Fine Art Print | Fuerteventura Coastal Wall Art | GAK Creations",
    seoDescription:
      "Shop a Palm Trees Symphony fine art print by Gerald Allen Knowles, with soft coastal colour, Canary palms and relaxed Fuerteventura light.",
    keywords: [
      "palm tree watercolour print",
      "Fuerteventura beach art print",
      "Canary Islands coastal art",
      "soft colour wall art",
      "tropical watercolour print",
      "calm living room art",
    ],
    story: [
      "This is the daylight version of the same subject as Dream Nights, and it could hardly be more different. In flat island light the palms lose their drama and become a group — leaning, uneven, each one shaped by the same prevailing wind.",
      "The drawing sets them out as a rhythm rather than as individual trees: five trunks at uneven intervals, crowns overlapping, so the eye travels across the sheet the way it does along a colonnade.",
      "Colour is thin and warm — dusty rose in the sand, blue-grey in the sea, a muted green that never becomes tropical. Anything brighter would have turned an ordinary afternoon into a postcard.",
      "The ink line stays visible underneath throughout. It is a drawing that has been coloured, not a painting.",
    ],
    hanging: [
      "Soft, low-contrast colour makes this a gentle print for a bedroom, nursery or a bright living room where a strong monochrome piece would feel heavy.",
      "Pale oak or white frames suit it. Hung beside Dream Nights it makes the day-and-night pairing explicit.",
    ],
    collections: ["fuerteventura", "coastal", "nature"],
    productPath: "/product/29076799/fine-art-print-fuerteventura-palm-trees-symphony",
    related: ["mystical-fuerteventura-dream-nights", "fuerteventura-magical-landscape"],
  },
  {
    slug: "fuerteventura-magical-landscape",
    sku: "GAK-FUER-006",
    title: "Magical Landscape",
    image: "/images/printify/magical-landscape.jpg",
    alt: "Art print of three palm trees standing against a dry stone terrace wall on a Fuerteventura hillside",
    medium: "Ink and watercolour on paper",
    place: "Fuerteventura, Canary Islands",
    year: "Canary Islands, Spain",
    description:
      "Three palms against a terraced hillside wall, high above the sea. A drawing about dry stone, patience, and the few things that grow on a volcanic island.",
    seoTitle: "Magical Landscape Fine Art Print | Fuerteventura Hillside Wall Art | GAK Creations",
    seoDescription:
      "Shop a Magical Landscape fine art print by Gerald Allen Knowles, featuring dry stone terraces, Canary palms and a volcanic Fuerteventura hillside.",
    keywords: [
      "Fuerteventura hillside art print",
      "dry stone wall artwork",
      "Canary Islands landscape print",
      "palm tree wall art",
      "muted green wall art",
      "island landscape print",
    ],
    story: [
      "The terraces on this hillside were built by hand, stone on stone, to hold soil that the wind keeps trying to remove. Nobody signed them and nobody knows exactly when they were made, which is a fair definition of vernacular architecture.",
      "So the wall is treated as the building in this drawing. It gets the careful line work — course by course, each stone placed — while the hill behind it is handled loosely in a pale green-grey wash.",
      "The three palms give the sheet its verticals and its scale. They are drawn with the fronds cut short by the wind, which is how they actually grow here.",
      "There is almost no sky. The composition stops just above the top terrace, so the eye stays on the ground and the effort that went into it.",
    ],
    hanging: [
      "Muted greens and stone greys make this an easy print for a kitchen, garden room or study, and a good neighbour to plants and natural materials.",
      "Black frame with a wide white mount sharpens it up; natural oak softens it. Both work.",
    ],
    collections: ["fuerteventura", "nature", "travel"],
    productPath: "/product/29077058/fuerteventura-magical-landscape-framed-poster",
    related: ["fuerteventura-palm-trees-symphony", "mystical-chapel-fuerteventura"],
  },
  {
    slug: "mystical-chapel-fuerteventura",
    sku: "GAK-FUER-007",
    title: "Mystical Chapel in a Mountainous Landscape",
    image: "/images/printify/mystical-chapel.jpg",
    alt: "Watercolour art print of a tiny white chapel among ochre and green hills in Fuerteventura, Canary Islands",
    medium: "Ink and watercolour on paper",
    place: "Fuerteventura, Canary Islands",
    year: "Canary Islands, Spain",
    description:
      "A small white ermita almost lost among folded hills, drawn in soft ochre, green and rose. The building is the smallest thing in the picture and the reason for it.",
    seoTitle: "Mystical Chapel Fine Art Print | Fuerteventura Landscape Wall Art | GAK Creations",
    seoDescription:
      "Shop a Mystical Chapel fine art print by Gerald Allen Knowles, with a white ermita, warm volcanic hills and calm Fuerteventura colour.",
    keywords: [
      "Fuerteventura chapel art print",
      "ermita watercolour print",
      "Canary Islands landscape wall art",
      "warm ochre wall art",
      "mountain landscape print",
      "Spanish island artwork",
    ],
    story: [
      "There is a particular kind of building on this island: whitewashed, single-roomed, sited where two valleys meet, and visible from a very long way off precisely because it is white and everything else is not.",
      "This drawing puts it where it belongs — small, low in the composition, surrounded by ground. The hills are given the space, drawn in overlapping washes of ochre, olive and a rose that appears in the rock here at certain hours.",
      "The chapel is the only place where the ink line is allowed to be crisp. Everything else is soft-edged, wet-into-wet, so the eye lands on the one hard-drawn object in the sheet without being told to.",
      "It is a companion to the Volcanic Landscape print and uses the same argument: on Fuerteventura the landscape is the architecture, and buildings are guests in it.",
    ],
    hanging: [
      "Warm and low in contrast — good above a bed, a sideboard, or in a sitting room with clay, cream or olive walls.",
      "Use a wide off-white mount and a slim frame. It pairs beautifully with Volcanic Landscape of Fuerteventura.",
    ],
    collections: ["fuerteventura", "nature", "architecture"],
    productPath: "/product/29076921/framed-paper-poster-fuerteventura-mystical-chapel-in-mountainous-landscape",
    related: ["volcanic-landscape-fuerteventura", "fuerteventura-magical-landscape"],
  },
  {
    slug: "symphony-of-waves",
    sku: "GAK-COAST-002",
    title: "Symphony of Waves",
    image: "/images/printify/symphony-of-waves.jpg",
    alt: "Coastal art print of turquoise waves breaking around dark rocks on the Fuerteventura shoreline",
    medium: "Ink and watercolour on paper",
    place: "Fuerteventura, Canary Islands",
    year: "Canary Islands, Spain",
    description:
      "Turquoise water running in around black volcanic rock, with the wet sand holding the reflection. The most colour-led piece in the coastal work.",
    seoTitle: "Symphony of Waves Fine Art Print | Turquoise Coastal Wall Art | GAK Creations",
    seoDescription:
      "Shop a Symphony of Waves fine art print by Gerald Allen Knowles, with turquoise Atlantic water, volcanic rock and cool coastal colour.",
    keywords: [
      "turquoise coastal art print",
      "ocean wave wall art",
      "Fuerteventura beach print",
      "Atlantic seascape print",
      "blue green wall art",
      "bathroom wall art print",
    ],
    story: [
      "Volcanic coastlines produce a colour that is difficult to believe until you stand in front of it: black rock, pale sand under shallow water, and a green-turquoise where the two meet that no photograph quite carries.",
      "The drawing chases that colour and gives it most of the sheet. The rocks are placed first in dark, dry-brushed ink to anchor the composition, then the water is laid in wet and left to find its own edges.",
      "The wet sand in the foreground does the quiet work. It reflects everything above it at half strength, which is why the eye reads the beach as level and the rocks as standing up out of it.",
      "It is the calmest print in the archive and the one people most often choose for a room they want to feel cool in.",
    ],
    hanging: [
      "A horizontal composition — the right shape for above a bed, a sofa, or a long low sideboard where upright prints look cramped.",
      "Cool blues and greens sit well with white, pale grey and natural timber. Matte glazing keeps the washes reading as watercolour.",
    ],
    collections: ["coastal", "fuerteventura", "nature"],
    productPath: "/product/29106370/fuerteventura-waves-fine-art-print-syphonmy-of-waves-passepartout-frame",
    related: ["the-blue-boat-that-dreams-of-sea", "erosion-gate-fuerteventura"],
  },
];


export const getArtwork = (slug: string) => artworks.find((a) => a.slug === slug);

/** Artworks belonging to a given collection slug, in archive order. */
export const artworksInCollection = (collectionSlug: string) =>
  artworks.filter((a) => a.collections.includes(collectionSlug));

/** Maps a collection work image back to its canonical artwork page. */
export const artworkByImage = (image: string) => artworks.find((a) => a.image === image);
