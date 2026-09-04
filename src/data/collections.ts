export interface Work {
  sku: string;
  title: string;
  image: string;
  alt: string;
  medium: string;
  place: string;
  description: string;
}

export interface Collection {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  heading: string;
  lede: string;
  keywords: string[];
  hero: string;
  heroAlt: string;
  /** Long-form collection narrative, rendered as paragraphs. */
  body: string[];
  sections: Array<{ heading: string; paragraphs: string[] }>;
  works: Work[];
  related: string[];
}

const ABBAYE = "/images/Abbaye Aux Dames Saintes France.jpg";
const GUGGENHEIM = "/images/Guggenheim Museum Bilba, Spain.jpg";
const SAN_JUAN = "/images/Chruch of San Juan Bautista de Banos, Spain.jpg";
const FUERTEVENTURA = "/images/Fuerteventura Chapel.jpg";
const BOAT = "/images/The Boat That Dreams Of Sea.jpg";

export const collections: Collection[] = [
  {
    slug: "architecture",
    name: "Architecture",
    seoTitle: "Architectural Art Prints | Hand-Drawn Building Wall Art | GAK Creations",
    seoDescription:
      "Shop architectural art prints by Gerald Allen Knowles, from abbeys and churches to modern landmarks. Museum-quality wall art for living rooms, offices and hallways.",
    eyebrow: "Collection N° 01",
    heading: "Architecture",
    lede: "Measured line, weathered stone, and the light that moves across a façade over the course of a morning.",
    keywords: [
      "architectural art prints",
      "architectural drawing prints",
      "building sketch wall art",
      "ink and wash architecture",
      "abbey drawing print",
      "architecture line art poster",
      "architect gift wall art",
    ],
    hero: ABBAYE,
    heroAlt:
      "Architectural drawing of Abbaye aux Dames in Saintes, France, in ink and watercolour wash with visible construction lines, by Gerald Allen Knowles",
    body: [
      "The Architecture collection is where GAK Creations begins. Gerald Allen Knowles trained as an architect before he ever thought of himself as an artist, and that training never left the hand. Each drawing in this collection starts the way a building starts — with a horizon, a datum, a set of light construction lines that measure the world before anything is committed to it. Many of those working lines are deliberately left visible in the finished piece, because they are the honest record of how a place was understood.",
      "What follows the measuring is slower. A wash of diluted ink finds the shadow beneath a cornice. A dry brush catches the grain of limestone that has been standing since the eleventh century. The drawings are not renderings and they are not blueprints; they sit in the space between observation and memory, where a building stops being a structure and becomes a place you once stood in.",
      "The subjects range across a working lifetime of travel. Romanesque abbeys in south-west France, brick and stone churches on the Castilian plain, titanium curves in Bilbao that answer the river rather than the street. Set beside one another they make an argument: that a Gothic buttress and a Gehry curve are both solutions to the same quiet problem of how mass meets light.",
      "As fine art prints, these works were chosen carefully. Architectural drawing rewards scale — the larger the print, the more the construction lines and the tooth of the paper come forward. Printed on museum-grade matte stock with pigment inks, the wash retains its softness and the graphite retains its bite.",
    ],
    sections: [
      {
        heading: "Techniques behind the architectural drawings",
        paragraphs: [
          "Every piece begins on location in a sketchbook, drawn in a single sitting wherever the weather allows. The under-drawing is pencil, laid out with a horizon line and one or two vanishing points established by eye rather than by ruler. Ink follows — a fine technical pen for structural edges, a brush pen for the heavier shadow lines that give a façade its weight.",
          "The wash stage is where architectural precision gives way to atmosphere. Watercolour is applied wet-into-wet in the sky and dry-brushed on stone, so that the material of the building is described by the behaviour of the paint as much as by the line. Collage elements — torn paper, printed fragments, occasional gold or ochre passages — are introduced when a building's surface asks for texture that the brush cannot give.",
        ],
      },
      {
        heading: "Choosing an architectural print for your wall",
        paragraphs: [
          "Architectural work sits well in rooms that already have geometry: a hallway with a run of doors, a study, a stairwell, a workspace above a desk. A single large print anchors a wall; a pair or a trio of the same medium reads as a series and suits a long corridor.",
          "For frames, a narrow black or natural oak profile with a generous white mount keeps the eye on the line work. Hang architectural pieces at eye level, and where possible on a wall that receives indirect daylight — the wash passages change subtly through the day, which is exactly what the original drawing was trying to record.",
        ],
      },
    ],
    works: [
      {
        sku: "GAK-ARCH-001",
        title: "Abbaye aux Dames, Saintes",
        image: ABBAYE,
        alt: "Architectural art print of the Romanesque Abbaye aux Dames in Saintes, France, drawn in ink and watercolour wash with visible pencil construction lines",
        medium: "Ink and wash on paper",
        place: "Saintes, France",
        description:
          "A Romanesque abbey in south-west France, drawn from the square in a single morning. The tiered bell tower is set out with the construction lines still showing, while diluted ink carries the shadow down the west front. A restrained, architectural print for a study, hallway or reading room.",
      },
      {
        sku: "GAK-ARCH-002",
        title: "Guggenheim Museum Bilbao",
        image: GUGGENHEIM,
        alt: "Mixed-media collage art print of the Guggenheim Museum Bilbao in Spain, showing titanium curves in metallic paper and ink",
        medium: "Mixed-media collage",
        place: "Bilbao, Spain",
        description:
          "Gehry's titanium curves rendered in torn metallic paper and ink, so the surface of the print behaves the way the building behaves in Basque light — reflective one moment, matte the next. A contemporary architectural collage print for modern interiors.",
      },
      {
        sku: "GAK-ARCH-003",
        title: "Church of San Juan Bautista de Baños",
        image: SAN_JUAN,
        alt: "Collage art print of the Visigothic Church of San Juan Bautista de Baños in Spain, combining architectural sketch lines with warm torn-paper fragments",
        medium: "Collage and ink",
        place: "Baños de Cerrato, Spain",
        description:
          "One of the oldest churches on the Iberian peninsula, drawn as a collage of ochre paper fragments and sketch line. The horseshoe arch is left as pure drawing while the surrounding plain is built from layered paper.",
      },
    ],
    related: ["travel", "coastal"],
  },
  {
    slug: "coastal",
    name: "Coastal",
    seoTitle: "Coastal Art Prints | Harbour, Boat & Seaside Wall Art | GAK Creations",
    seoDescription:
      "Shop coastal art prints by Gerald Allen Knowles, including boats, harbours and Atlantic light. Calm museum-quality seaside wall art shipped worldwide.",
    eyebrow: "Collection N° 02",
    heading: "Coastal",
    lede: "Harbour walls, hulls at rest, and the particular blue that only exists an hour before the wind changes.",
    keywords: [
      "coastal art prints",
      "boat art print",
      "harbour wall art",
      "nautical watercolour print",
      "seaside wall art",
      "blue boat painting print",
      "coastal decor art",
    ],
    hero: BOAT,
    heroAlt:
      "Coastal art print of a blue wooden boat resting beside tall plants in front of a windowed wall, painted in ink and watercolour by Gerald Allen Knowles",
    body: [
      "The Coastal collection is the quietest work in the archive. It was made along the edges of the Atlantic and the Mediterranean, in the hours when harbours are least photogenic and most themselves — early, grey, half-awake, with the boats out of the water and the light still deciding what kind of day it intends to be.",
      "An architect's eye does not switch off at the shoreline. These drawings treat a hull as a structure: a keel is a spine, a gunwale is a datum line, a mooring rope is a diagonal brace holding a composition in tension. That is why the coastal work reads as calm rather than sentimental. There is no attempt at drama in the water. The sea is usually a flat wash and the interest is left to the geometry sitting on top of it.",
      "Colour in this collection is deliberately narrow. Payne's grey, indigo, a chalked-out white, and one insistent boat blue that recurs across the series like a signature. When ochre appears it is the harbour wall; when green appears it is the plant life that grows where nobody maintains anything. That restraint is what allows coastal prints to sit in a room without shouting at it.",
      "These are the pieces buyers most often choose for bedrooms, bathrooms and long hallways — spaces where the eye wants somewhere to rest. Printed on matte fine art paper, the washes stay soft and the whites stay paper-white rather than turning grey.",
    ],
    sections: [
      {
        heading: "The light of the Atlantic edge",
        paragraphs: [
          "Atlantic light is not Mediterranean light. It arrives diffused through moving cloud, so shadows have soft edges and colour is desaturated by a half-step. Working in it teaches patience: a wash laid down at eight in the morning will read differently by ten, and the drawing has to decide which hour it belongs to.",
          "Much of this collection was drawn standing up, quickly, with a small palette and a jar of harbour water. The immediacy is part of the record — the tide does not wait for a careful painter.",
        ],
      },
      {
        heading: "Styling coastal prints at home",
        paragraphs: [
          "Coastal work pairs best with natural materials: oak, linen, unglazed ceramic, pale plaster. A white or off-white mount continues the paper of the original and keeps the palette clean.",
          "Two or three coastal prints hung in a vertical stack suit a narrow wall beside a window; a single large piece works above a bed or a bath. Avoid glossy glazing — a matte or museum glass keeps the wash reading as watercolour rather than as photograph.",
        ],
      },
    ],
    works: [
      {
        sku: "GAK-COAST-001",
        title: "The Blue Boat That Dreams of Sea",
        image: BOAT,
        alt: "Coastal art print of a blue wooden boat at rest beside tall plants in front of a windowed wall, in ink and watercolour wash",
        medium: "Ink and wash on paper",
        place: "Mediterranean coast",
        description:
          "A working boat pulled up and left among the plants for a season, drawn where the harbour meets the town. Calm, blue-led coastal wall art with an architect's sense of line — a natural choice for a bedroom or a quiet hallway.",
      },
      {
        sku: "GAK-COAST-002",
        title: "Fuerteventura Chapel Above the Shore",
        image: FUERTEVENTURA,
        alt: "Coastal landscape art print of a small white chapel set into a volcanic hillside above the shore on Fuerteventura, Canary Islands, in expressive ink and watercolour",
        medium: "Ink and wash on paper",
        place: "Fuerteventura, Canary Islands",
        description:
          "A whitewashed chapel holding its ground on a volcanic slope above the Atlantic. Ochres and blacks of lava rock set against an unbroken sky — coastal art with weight rather than prettiness.",
      },
    ],
    related: ["fuerteventura", "nature"],
  },
  {
    slug: "travel",
    name: "Travel Collages",
    seoTitle: "Travel Art Prints | Mixed-Media Collage Wall Art | GAK Creations",
    seoDescription:
      "Shop travel art prints and mixed-media collage wall art by Gerald Allen Knowles, inspired by Europe and the Atlantic islands. Museum-quality prints shipped worldwide.",
    eyebrow: "Collection N° 03",
    heading: "Travel Collages",
    lede: "Field notes from a life of wandering — torn paper, sketch line, and the residue of the places themselves.",
    keywords: [
      "travel art prints",
      "mixed media collage print",
      "europe travel wall art",
      "sketchbook art print",
      "travel journal art",
      "collage wall art contemporary",
    ],
    hero: SAN_JUAN,
    heroAlt:
      "Travel-inspired mixed-media collage art print of the Church of San Juan Bautista de Baños in Spain, built from sketch line and torn ochre paper",
    body: [
      "The Travel collection is the closest thing GAK Creations has to a diary. Where the architectural drawings record a building, these collages record a journey: the drawing made on the day, plus everything that was in the pocket at the end of it. Ticket stubs, wrapping paper, the ochre of a wall photographed and reprinted, a fragment of a map that no longer matches the road.",
      "Collage suits travel because travel is layered. You never arrive at a place cleanly — you arrive carrying the last place, and the drawing that comes out reflects that. A church on the Castilian plain ends up sharing a sheet with a colour lifted from a Basque estuary, and the composition is honest about it.",
      "The method is disciplined despite the materials. The architectural under-drawing goes down first and is never abandoned; paper is torn rather than cut so the edge stays soft; and each addition has to earn its place against the line beneath it. The result is work that reads as contemporary and graphic from across a room, then resolves into careful observation up close.",
      "For collectors, the travel collages are the most flexible pieces in the archive. They carry more colour than the architectural work and more structure than the coastal work, which makes them a good single statement print in a living room, studio or entrance hall.",
    ],
    sections: [
      {
        heading: "Building a collage from a sketchbook page",
        paragraphs: [
          "The sequence rarely changes: observe, draw, collect, and only later compose. Drawing happens on site; composition happens weeks later at the studio table, when enough distance has accumulated that the trip has become a memory with a shape.",
          "Papers are chosen for how they age rather than how they look new — kraft, sugar paper, printed matter with a grain. Adhesive is applied sparingly so the sheet stays flat, and any writing that survives into the final piece is left as it was written, in the moment, often badly.",
        ],
      },
      {
        heading: "Where travel collages belong",
        paragraphs: [
          "These are conversational pieces. They work above a sideboard, in a hallway that people pass slowly, or in a home office where a wall can hold something with texture.",
          "Because the palette is warmer than the rest of the archive, travel collages sit well against clay, olive, deep green or plain white walls. A wide mount and a simple frame let the torn edges do their work.",
        ],
      },
    ],
    works: [
      {
        sku: "GAK-TRAV-001",
        title: "Church of San Juan Bautista de Baños",
        image: SAN_JUAN,
        alt: "Mixed-media travel collage art print of the Visigothic church of San Juan Bautista de Baños, Spain, layering sketch line with torn ochre paper",
        medium: "Collage and ink",
        place: "Baños de Cerrato, Spain",
        description:
          "A seventh-century church rebuilt in paper. Torn ochre fragments stand in for the Castilian plain while the horseshoe arch is left as clean drawing. Warm, graphic travel wall art with real architectural bones.",
      },
      {
        sku: "GAK-TRAV-002",
        title: "Guggenheim Museum Bilbao",
        image: GUGGENHEIM,
        alt: "Travel collage art print of the Guggenheim Museum Bilbao, Spain, with metallic torn paper describing the titanium façade",
        medium: "Mixed-media collage",
        place: "Bilbao, Spain",
        description:
          "Bilbao as it is experienced rather than photographed: fragments of reflected river, metallic paper for titanium, and a sketch line holding the whole thing steady.",
      },
      {
        sku: "GAK-TRAV-003",
        title: "Abbaye aux Dames, Saintes",
        image: ABBAYE,
        alt: "Travel sketchbook art print of Abbaye aux Dames in Saintes, France, drawn on location in ink and watercolour wash",
        medium: "Ink and wash on paper",
        place: "Saintes, France",
        description:
          "A page from a French sketchbook, drawn on location in one sitting. The construction lines remain, which is the point — this is a record of looking, not a reconstruction.",
      },
    ],
    related: ["architecture", "fuerteventura"],
  },
  {
    slug: "fuerteventura",
    name: "Fuerteventura",
    seoTitle: "Fuerteventura Art Prints | Volcanic Canary Islands Wall Art | GAK Creations",
    seoDescription:
      "Shop Fuerteventura art prints by Gerald Allen Knowles, from volcanic landscapes and whitewashed chapels to Atlantic shorelines. Museum-quality Canary Islands wall art.",
    eyebrow: "Collection N° 04",
    heading: "Fuerteventura",
    lede: "Black rock, white lime, and a wind that has been shaping the island since before anyone drew it.",
    keywords: [
      "fuerteventura art print",
      "canary islands wall art",
      "volcanic landscape painting print",
      "canarian chapel art",
      "atlantic island art print",
      "fuerteventura landscape artwork",
    ],
    hero: FUERTEVENTURA,
    heroAlt:
      "Fuerteventura art print of a small white chapel built into a volcanic hillside in the Canary Islands, in expressive ink and watercolour",
    body: [
      "Fuerteventura is the oldest of the Canary Islands and it looks it. Wind has taken the volcanic cones down to soft shoulders; there are stretches where the only vertical thing for a kilometre is a whitewashed chapel or a dry-stone wall. For an artist trained to look for structure, that emptiness is not a problem — it is the subject.",
      "The Fuerteventura work is the most expressive in the archive. The line loosens, the wash gets darker and more granular, and the palette narrows to lava black, ochre, rust and lime white. What holds it together is still architectural thinking: a chapel is placed on the sheet the way it is placed on the hillside, with the land doing the work of supporting it.",
      "There is also a human story running underneath. These are small buildings made by people with almost no material to work with, in a landscape that offers no shelter. Drawing them is a way of noticing that persistence — the same instinct that draws an abbey in France, applied to something a hundredth of the size and a fraction as celebrated.",
      "As prints, the Fuerteventura pieces are the strongest in the archive at large sizes. The granulation in the volcanic passages only fully appears above A2, where the pigment settles the way it did on the original paper.",
    ],
    sections: [
      {
        heading: "Drawing a volcanic island",
        paragraphs: [
          "Volcanic terrain resists conventional landscape technique. There is little green to break up the field and almost no atmospheric perspective in dry air, so distance has to be described by value alone. The solution across this collection is granulating pigment — earth colours that separate on the paper and imitate the grain of the ground itself.",
          "Working conditions matter too. Wind carries grit onto wet paper, and rather than fight it the drawings accept it. Some of the texture in these pieces is genuinely the island.",
        ],
      },
      {
        heading: "Canarian chapels and vernacular building",
        paragraphs: [
          "The small ermitas of Fuerteventura are vernacular architecture at its most reduced: thick rubble walls, lime render, a bell arch, a single door facing away from the prevailing wind. They are drawn here without romance, as working buildings that have survived because they were built correctly.",
          "Prints from this series suit interiors with texture — plaster walls, natural stone, warm neutral palettes — and hold their own in bright rooms where softer watercolour work can wash out.",
        ],
      },
    ],
    works: [
      {
        sku: "GAK-FUER-001",
        title: "Volcanic Landscape of Fuerteventura",
        image: FUERTEVENTURA,
        alt: "Fuerteventura art print showing a white chapel set into a black volcanic hillside under an open Atlantic sky, in ink and watercolour wash",
        medium: "Ink and wash on paper",
        place: "Fuerteventura, Canary Islands",
        description:
          "A whitewashed chapel dug into a volcanic slope, drawn on location in the Canary Islands. Lava blacks and ochres against lime white — a landscape print with real weight, best appreciated at large scale.",
      },
      {
        sku: "GAK-FUER-002",
        title: "The Blue Boat That Dreams of Sea",
        image: BOAT,
        alt: "Atlantic coastal art print of a blue boat resting on land beside tall plants, in ink and watercolour",
        medium: "Ink and wash on paper",
        place: "Atlantic coast",
        description:
          "The other side of island life: a boat out of the water, waiting. A calm counterpoint to the volcanic interior work and a natural companion print.",
      },
    ],
    related: ["coastal", "nature"],
  },
  {
    slug: "gaudi-and-modern-landmarks",
    name: "Gaudí & Modern Landmarks",
    seoTitle: "Gaudí & Modern Architecture Art Prints | Barcelona to Bilbao | GAK Creations",
    seoDescription:
      "Shop Gaudí and modern architecture art prints by Gerald Allen Knowles, including Barcelona studies and the Guggenheim Bilbao. Graphic museum-quality wall art.",
    eyebrow: "Collection N° 05",
    heading: "Gaudí & Modern Landmarks",
    lede: "Curved stone, catenary arches and titanium — buildings that refuse the right angle and get away with it.",
    keywords: [
      "gaudi art print",
      "barcelona architecture wall art",
      "casa batllo print",
      "guggenheim bilbao art print",
      "modern architecture poster",
      "contemporary architecture art",
    ],
    hero: GUGGENHEIM,
    heroAlt:
      "Modern architecture art print of the Guggenheim Museum Bilbao rendered in metallic collage and ink by Gerald Allen Knowles",
    body: [
      "Most of the archive is concerned with buildings that were built to stand still. This collection is about the ones that appear to move. Gaudí's Barcelona and Gehry's Bilbao are separated by a century, but they set the same trap for a draughtsman: nothing in either is straight, and the usual tools of architectural drawing — the vanishing point, the plumb line, the parallel run of a cornice — are of almost no help.",
      "The answer, developed across many attempts, is to draw the logic rather than the outline. Gaudí worked from catenary curves and natural forms; if you understand the rule the building is obeying, the curve will draw itself. Gehry works from surface and reflection; if you understand what the metal is doing to the light off the Nervión, the shape resolves.",
      "Materially, this is the collection where collage becomes essential. Torn metallic paper, printed fragments and burnished passages do what a pen cannot — they behave differently as you move in front of them, which is exactly what these façades do in daylight.",
      "For anyone furnishing a contemporary interior, these are the most graphic prints in the archive: high contrast, confident shapes, and enough texture to avoid the flatness of a standard architectural poster.",
    ],
    sections: [
      {
        heading: "Drawing Gaudí's geometry",
        paragraphs: [
          "Gaudí's forms are not decorative accidents. The catenary arch, the hyperbolic paraboloid, the ruled surface of a column — each is a structural argument dressed as ornament. Studies in this collection begin by finding those governing curves in pencil before any ink is committed, which is why the finished drawings feel stable despite having almost no straight lines.",
          "The tilework and broken-ceramic trencadís surfaces are handled through collage rather than through painting, which keeps them from turning into pattern for its own sake.",
        ],
      },
      {
        heading: "Modern landmarks in mixed media",
        paragraphs: [
          "The Guggenheim Bilbao study treats titanium as a material problem: matte in flat cloud, mirror-bright in low sun. Metallic paper reproduces that behaviour in a way pigment cannot, and the print retains a shift in tone as you move past it.",
          "Hung together, a Gaudí study and a Bilbao collage make a strong two-piece wall — a century of structural invention, argued in curves.",
        ],
      },
    ],
    works: [
      {
        sku: "GAK-MOD-001",
        title: "Guggenheim Museum Bilbao",
        image: GUGGENHEIM,
        alt: "Art print of the Guggenheim Museum Bilbao by Frank Gehry, drawn as a metallic mixed-media collage with ink line work",
        medium: "Mixed-media collage",
        place: "Bilbao, Spain",
        description:
          "Titanium curves in torn metallic paper and ink. A bold, contemporary architecture print for modern living rooms, studios and offices.",
      },
      {
        sku: "GAK-MOD-002",
        title: "Abbaye aux Dames, Saintes",
        image: ABBAYE,
        alt: "Architectural art print of the Romanesque Abbaye aux Dames, Saintes, France, shown as a historical counterpoint to modern landmark studies",
        medium: "Ink and wash on paper",
        place: "Saintes, France",
        description:
          "The historical counterweight — Romanesque mass and repetition, hung opposite a modern curve, makes both buildings easier to see.",
      },
    ],
    related: ["architecture", "travel"],
  },
  {
    slug: "nature",
    name: "Nature & Landscape",
    seoTitle: "Nature & Landscape Art Prints | Atlantic Terrain Wall Art | GAK Creations",
    seoDescription:
      "Shop nature and landscape art prints by Gerald Allen Knowles, featuring volcanic terrain, coastal plant life and Atlantic skies. Museum-quality wall art shipped worldwide.",
    eyebrow: "Collection N° 06",
    heading: "Nature & Landscape",
    lede: "Ground, growth and weather — the parts of a place that were there before the building arrived.",
    keywords: [
      "nature art prints",
      "landscape wall art",
      "botanical ink print",
      "atlantic landscape art",
      "organic contemporary wall art",
      "watercolour landscape print",
    ],
    hero: FUERTEVENTURA,
    heroAlt:
      "Landscape art print of volcanic terrain and an isolated chapel in the Canary Islands, painted in ink and watercolour wash",
    body: [
      "Nature enters this archive the way it enters a site survey — as the condition everything else has to answer to. These works give the ground, the plant life and the sky the same attention the buildings usually get, and in several pieces the building is reduced to a small white mark placed to prove the scale of everything around it.",
      "The drawing method stays consistent. Terrain is set out in planes rather than in outlines, so a hillside is described by how it turns towards or away from the light. Vegetation is drawn as structure: a stand of tall plants has a rhythm and a spacing, and getting those right matters far more than getting individual leaves right.",
      "Colour comes almost entirely from earth pigments — raw sienna, burnt umber, indigo, and the granulating greys that separate on damp paper and give volcanic ground its grain. Greens are used sparingly and never brightly, which is truer to the Atlantic islands than the postcards suggest.",
      "These prints are the easiest in the archive to live with. They are quiet, tonal and largely abstract from a distance, which makes them well suited to bedrooms, dining rooms and any wall where a strong architectural line would be too assertive.",
    ],
    sections: [
      {
        heading: "Landscape as structure",
        paragraphs: [
          "An architect reads a landscape as loads and surfaces: where water runs, where wind arrives, which slope will hold a wall. That reading shows up in the drawings as a preference for section over scenery — you are usually looking across a landform rather than into a view.",
          "It also explains the restraint. There are no sunsets in this collection. The weather is ordinary, because ordinary weather is what a place actually looks like.",
        ],
      },
      {
        heading: "Plant life at the edge",
        paragraphs: [
          "The plants that appear in these works are survivors: agave, tall coastal grasses, whatever grows in the gap between a wall and a road. They are drawn with the same line weight as masonry, which places them as equals in the composition rather than as decoration.",
          "Paired with a coastal print, a nature study makes a calm two-piece grouping in a neutral, natural-material interior.",
        ],
      },
    ],
    works: [
      {
        sku: "GAK-NAT-001",
        title: "Volcanic Landscape of Fuerteventura",
        image: FUERTEVENTURA,
        alt: "Nature art print of volcanic hillside terrain in Fuerteventura with a small white chapel, in granulating ink and watercolour washes",
        medium: "Ink and wash on paper",
        place: "Fuerteventura, Canary Islands",
        description:
          "Volcanic ground given the leading role, with the chapel reduced to a scale marker. Granulating earth pigments make this a landscape print that rewards a large format.",
      },
      {
        sku: "GAK-NAT-002",
        title: "The Blue Boat That Dreams of Sea",
        image: BOAT,
        alt: "Nature and coastal art print of tall plants growing around a resting blue boat, drawn in ink and watercolour",
        medium: "Ink and wash on paper",
        place: "Atlantic coast",
        description:
          "Plant life drawn with the same weight as the hull it surrounds — a study of what grows where nothing is maintained.",
      },
    ],
    related: ["coastal", "fuerteventura"],
  },
];

export const getCollection = (slug: string) => collections.find((c) => c.slug === slug);
