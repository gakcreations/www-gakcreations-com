export interface JournalPost {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  published: string;
  readingTime: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  /** Body blocks: h2 headings and paragraphs. */
  body: Array<{ heading: string; paragraphs: string[] }>;
  intro: string[];
  relatedCollection: string;
}

const ABBAYE = "/images/Abbaye Aux Dames Saintes France.jpg";
const GUGGENHEIM = "/images/Guggenheim Museum Bilba, Spain.jpg";
const SAN_JUAN = "/images/Chruch of San Juan Bautista de Banos, Spain.jpg";
const FUERTEVENTURA = "/images/Fuerteventura Chapel.jpg";
const BOAT = "/images/The Boat That Dreams Of Sea.jpg";

export const journal: JournalPost[] = [
  {
    slug: "architectural-sketching-on-location",
    title: "Architectural Sketching on Location: How a Building Becomes a Drawing",
    seoTitle: "Architectural Sketching on Location | How Buildings Become Art Prints | GAK Creations",
    seoDescription:
      "Learn how Gerald Allen Knowles turns on-location building sketches into architectural art prints using construction lines, ink and wash.",
    excerpt:
      "Construction lines, one sitting, no erasing. The working method behind the architectural drawings in the GAK Creations archive.",
    published: "2026-02-10",
    readingTime: "6 min read",
    keywords: [
      "architectural sketching",
      "urban sketching techniques",
      "how to draw buildings",
      "ink and wash architecture",
      "architectural drawing prints",
    ],
    image: ABBAYE,
    imageAlt:
      "Architectural sketch of Abbaye aux Dames in Saintes, France, showing pencil construction lines beneath ink and watercolour wash",
    intro: [
      "There is a moment, standing in front of a building with an empty sheet, when the whole thing looks impossible. Every window is a decision. The honest way through is not to draw the building at all — not yet. It is to measure it by eye, and let the drawing arrive afterwards.",
    ],
    body: [
      {
        heading: "Start with the horizon, not the building",
        paragraphs: [
          "The first mark on the page is never architecture. It is a horizon line set at the height of your own eye, and one or two vanishing points placed by judgement rather than instrument. Everything that follows hangs from that line. Get it wrong and no amount of careful window drawing will rescue the sheet.",
          "The second set of marks is proportional: total height against total width, then the position of the largest openings. At this stage the sheet looks like a diagram, and it should. A drawing that begins as a diagram can become atmospheric later; a drawing that begins as atmosphere can never become accurate.",
        ],
      },
      {
        heading: "Leave the construction lines visible",
        paragraphs: [
          "Architectural training teaches you to hide your workings. Drawing on location teaches the opposite. Those faint pencil lines running past the edges of a tower are the record of how the building was understood, and erasing them removes the most human part of the sheet.",
          "In the finished prints from the archive — the Abbaye aux Dames study in particular — the construction lines are deliberately left in. They tell the viewer that someone stood there, looked, and worked it out.",
        ],
      },
      {
        heading: "Ink for structure, wash for weather",
        paragraphs: [
          "Ink handles the things that will not change: the structural edges, the depth of a reveal, the shadow line under a cornice. Two pens are usually enough — a fine technical nib for edges and a brush pen for weight.",
          "Wash handles everything that will change by lunchtime. Sky goes down wet-into-wet and fast. Stone is dry-brushed so the paper's tooth carries the texture. The whole wash stage should take a fraction of the time the line work took; hesitation is what turns watercolour muddy.",
        ],
      },
      {
        heading: "One sitting, one drawing",
        paragraphs: [
          "The rule across the archive is that a location drawing is finished on location. Studio corrections tidy a sheet but drain it. If the light has moved too far, the drawing is done — the next one can be better.",
          "Practically, this means working small enough to finish: a sketchbook page rather than a board. Scale can be recovered later in printing, and the fine art prints are produced at sizes where the original pencil work becomes visible again.",
        ],
      },
      {
        heading: "What to draw first if you are starting out",
        paragraphs: [
          "Choose a building with strong repetition — an arcade, a bell tower, a row of identical windows. Repetition is forgiving: once you have established the rhythm, the eye accepts small inaccuracies within it.",
          "Then draw the same building three times over three days. The third drawing is always the one worth keeping, and it is the reason the archive contains more sheets of a handful of places than single sheets of many.",
        ],
      },
    ],
    relatedCollection: "architecture",
  },
  {
    slug: "coastal-artwork-atlantic-light",
    title: "Coastal Artwork and the Problem of Atlantic Light",
    seoTitle: "Coastal Artwork & Atlantic Light | How Harbour Paintings Are Built | GAK Creations",
    seoDescription:
      "Learn how Atlantic light, structure and palette shape the coastal artwork and harbour prints of Gerald Allen Knowles.",
    excerpt:
      "Why the coastal work is grey before it is blue, and how an architect draws a hull like a building.",
    published: "2026-03-04",
    readingTime: "5 min read",
    keywords: [
      "coastal artwork",
      "painting harbours",
      "atlantic light painting",
      "boat art prints",
      "watercolour seascape technique",
    ],
    image: BOAT,
    imageAlt:
      "Coastal artwork of a blue boat resting beside tall plants in front of a windowed wall, in ink and watercolour",
    intro: [
      "Coastal painting has a reputation for being easy and pretty. It is neither, mostly because of the light. On the Atlantic edge the sun rarely commits, and a palette built for Mediterranean contrast will produce something that looks like a postcard of somewhere else.",
    ],
    body: [
      {
        heading: "Grey is a colour, not an absence",
        paragraphs: [
          "The working palette for the coastal collection is narrow: Payne's grey, indigo, raw sienna, a single boat blue, and the white of the paper. Almost every tone in a finished piece is mixed from the first three.",
          "Restricting the palette does two things. It keeps the sheet coherent under changing light, and it forces the drawing to carry the interest — which suits an artist who came to painting through architecture.",
        ],
      },
      {
        heading: "Draw the boat as a structure",
        paragraphs: [
          "A hull has a spine, a datum and a set of ribs. Drawn that way it sits convincingly on the ground; drawn as a silhouette it floats, wrongly, off the sheet. The keel line goes down first, the gunwale second, and only then the shape most people would call the boat.",
          "The same applies to a harbour wall, a slipway, a mooring bollard. They are small pieces of civil engineering and they respond to being drawn as such.",
        ],
      },
      {
        heading: "Work early, and accept the tide",
        paragraphs: [
          "The best hours are before the harbour becomes busy, when boats are out of the water and the composition is still legible. It is also when the light is flattest, which is a gift: flat light shows form without theatre.",
          "Weather interferes constantly. Grit lands in the wash, rain lifts pigment, wind takes the sheet. Very little of this is worth correcting. The marks the coast leaves on a drawing are part of what the drawing is for.",
        ],
      },
      {
        heading: "Choosing coastal art for a room",
        paragraphs: [
          "Because the palette is quiet, coastal prints do the opposite of competing with a room. They pair well with linen, oak and pale plaster, and they are the pieces most often chosen for bedrooms and bathrooms.",
          "A single large print above a bed works; a vertical stack of two suits a narrow wall by a window. Matte glazing preserves the watercolour reading — gloss turns it into a photograph.",
        ],
      },
    ],
    relatedCollection: "coastal",
  },
  {
    slug: "travel-inspired-art-sketchbook-to-collage",
    title: "Travel-Inspired Art: From Sketchbook Page to Finished Collage",
    seoTitle: "Travel-Inspired Art | From Sketchbook to Mixed-Media Collage | GAK Creations",
    seoDescription:
      "See how Gerald Allen Knowles turns travel sketches, found paper and studio collage into museum-quality travel art prints.",
    excerpt:
      "Ticket stubs, torn paper, and drawings made on the day — how a journey becomes a sheet you can hang.",
    published: "2026-04-01",
    readingTime: "6 min read",
    keywords: [
      "travel inspired art",
      "travel sketchbook",
      "mixed media collage technique",
      "travel art prints",
      "sketchbook journaling art",
    ],
    image: SAN_JUAN,
    imageAlt:
      "Travel-inspired mixed-media collage of the church of San Juan Bautista de Baños, Spain, built from sketch line and torn ochre paper",
    intro: [
      "A travel drawing made on the day is rarely the finished work. It is evidence. The finished work happens weeks later, at a table, when the trip has settled into something with a shape — and when the pocketful of paper you carried home turns out to be as useful as the sketch.",
    ],
    body: [
      {
        heading: "Collect while you draw",
        paragraphs: [
          "The habit is simple: everything flat goes in the back of the sketchbook. Tickets, wrappers, a torn corner of a map, the printed band from a bundle of postcards. None of it is chosen for beauty. It is chosen because it was there.",
          "Months later that material carries a specificity no art-shop paper can imitate. The ochre of a Castilian wall is more convincing when it is literally a fragment of something bought in Castile.",
        ],
      },
      {
        heading: "The drawing stays in charge",
        paragraphs: [
          "The risk with collage is that texture takes over and the sheet becomes decoration. The safeguard used across the travel collection is that the architectural under-drawing is never fully buried. In the San Juan Bautista de Baños piece, the horseshoe arch is left as clean line while everything around it is built from paper.",
          "Practically: draw first, in ink, at full strength. Collage on top only where the line has already done its job.",
        ],
      },
      {
        heading: "Tear, don't cut",
        paragraphs: [
          "A cut edge reads as graphic design. A torn edge reads as geology — it has a fibrous transition that catches light and sits closer to how a wall or a shoreline actually ends.",
          "Adhesive is used sparingly and off-centre so the paper can still move a little. Over-gluing flattens a collage into a print of itself.",
        ],
      },
      {
        heading: "Composing at a distance",
        paragraphs: [
          "The final arrangement is judged from across the room, not at the table. If the composition survives at three metres it will hold on a wall; if it only works close up it is a sketchbook page and should stay one.",
          "That test is why the travel collages are the most graphic works in the archive, and why they tend to be the single statement piece people choose for a living room or entrance hall.",
        ],
      },
    ],
    relatedCollection: "travel",
  },
  {
    slug: "fuerteventura-landscapes-drawing-volcanic-ground",
    title: "Fuerteventura Landscapes: Drawing Volcanic Ground",
    seoTitle: "Fuerteventura Landscapes | Drawing Volcanic Canary Island Light | GAK Creations",
    seoDescription:
      "Learn how Gerald Allen Knowles draws Fuerteventura landscapes with granulating pigments, whitewashed chapels and Atlantic light from the Canary Islands sketchbooks.",
    excerpt:
      "The oldest Canary Island, drawn in lava black and lime white — and why the wind is part of the technique.",
    published: "2026-05-06",
    readingTime: "6 min read",
    keywords: [
      "fuerteventura landscape",
      "canary islands art",
      "volcanic landscape painting",
      "granulating watercolour",
      "canarian chapel architecture",
    ],
    image: FUERTEVENTURA,
    imageAlt:
      "Fuerteventura landscape painting of a white chapel set into a volcanic hillside in the Canary Islands",
    intro: [
      "Fuerteventura is the oldest island in the Canaries and the most worn down. Its volcanoes have lost their edges. For weeks at a time the only vertical thing in view is a whitewashed chapel or a dry-stone wall, and that scarcity is precisely what makes it worth drawing.",
    ],
    body: [
      {
        heading: "Distance without atmosphere",
        paragraphs: [
          "In dry island air there is almost no atmospheric perspective. Distant hills stay nearly as dark as near ones, which removes the landscape painter's usual method of pushing space back with pale blue.",
          "The alternative is value and texture. Near ground is drawn with granulating pigment that separates on the paper into visible grain; far ground is laid in flat. The eye reads texture as proximity, and the space opens up without a single cool wash.",
        ],
      },
      {
        heading: "A palette taken from the ground",
        paragraphs: [
          "Lava black, burnt umber, raw sienna, iron oxide red and the white of the sheet. Green appears rarely and never brightly. The palette was chosen by walking, not by theory — these are the colours you have on your boots at the end of the day.",
          "Because the pigments granulate, they do most of the descriptive work by themselves. Painting volcanic scree stroke by stroke is a losing battle; letting the paint behave like the ground is not.",
        ],
      },
      {
        heading: "The chapels",
        paragraphs: [
          "Canarian ermitas are vernacular building at its most reduced: thick rubble walls, lime render, a bell arch, and a door turned away from the prevailing wind. Nothing is ornamental because nothing could be spared.",
          "Drawn beside a volcanic slope, a chapel becomes a unit of measurement. Reduce it to a small white mark and the hillside behind it suddenly has a real size — that single relationship is the subject of most sheets in the collection.",
        ],
      },
      {
        heading: "Working in the wind",
        paragraphs: [
          "Fuerteventura is one of the windiest places in the Atlantic. Grit lands in wet washes, paper flexes, and any attempt at a controlled gradient fails.",
          "So the technique adapts. Washes go down in short, decisive passes; the sheet is worked flat and low; and the grit that arrives is left where it lands. Some of the texture in these prints is genuinely the island, which is a better outcome than a clean sheet would have been.",
        ],
      },
    ],
    relatedCollection: "fuerteventura",
  },
  {
    slug: "gaudi-architecture-drawing-the-curve",
    title: "Gaudí and the Curve: Drawing Architecture That Refuses the Right Angle",
    seoTitle: "Gaudí Architecture Drawing | How to Draw Curves & Landmarks | GAK Creations",
    seoDescription:
      "Explore how Gerald Allen Knowles draws Gaudí and Guggenheim landmarks through catenary curves, ruled surfaces and metallic collage.",
    excerpt:
      "Gaudí's curves obey rules. Find the rule and the building draws itself — a note on Barcelona, Bilbao and structural logic.",
    published: "2026-06-03",
    readingTime: "6 min read",
    keywords: [
      "gaudi architecture",
      "catenary arch",
      "barcelona architecture drawing",
      "guggenheim bilbao",
      "modern architecture art prints",
    ],
    image: GUGGENHEIM,
    imageAlt:
      "Mixed-media collage of the Guggenheim Museum Bilbao showing titanium curves rendered in metallic paper and ink",
    intro: [
      "There are buildings that punish a draughtsman for using the tools he was trained with. Gaudí's Barcelona is the classic case: no straight lines, no repeated bay, no cornice to run a parallel against. Bilbao, a century later, sets the same trap with different materials.",
    ],
    body: [
      {
        heading: "Find the rule before the outline",
        paragraphs: [
          "Gaudí's forms are structural arguments, not decoration. The catenary arch is the shape a hanging chain makes, inverted — the most efficient way to carry load in pure compression. The columns are ruled surfaces: curved forms generated entirely by straight lines in motion.",
          "Once you can see the governing rule, the curve stops being arbitrary. Draw the rule lightly in pencil first — the chain, the axis, the sweep — and the visible surface follows almost on its own.",
        ],
      },
      {
        heading: "Ornament that is doing a job",
        paragraphs: [
          "Trencadís, the broken-ceramic surfacing, looks like pure decoration and is partly a solution to cladding a double-curved surface with flat material. Drawing it as pattern misses the point; the studies here handle it with collage, so the fragments are literally fragments.",
          "The same logic applies to the ironwork and the bone-like balconies. Draw the function, and the strangeness reads as inevitability rather than whimsy.",
        ],
      },
      {
        heading: "Bilbao: drawing a surface, not a shape",
        paragraphs: [
          "Gehry's Guggenheim is not really a shape. It is a set of surfaces doing different things to the same daylight — matte under cloud, mirror-bright in low sun off the Nervión. An outline drawing of it is almost meaningless.",
          "Torn metallic paper solves what pigment cannot: the finished sheet shifts as you move in front of it, the way the building does. That behaviour survives into the fine art print, which is why this piece is best hung where it will catch changing light.",
        ],
      },
      {
        heading: "Hanging a century of curves together",
        paragraphs: [
          "A Gaudí study and a Bilbao collage on the same wall make a clear argument: a hundred years apart, both buildings solve the problem of mass and light by refusing the right angle.",
          "Add a Romanesque sheet — the Abbaye aux Dames, all repetition and compression — and the conversation gets better still. The archive is built for these pairings.",
        ],
      },
    ],
    relatedCollection: "gaudi-and-modern-landmarks",
  },
  {
    slug: "when-architecture-becomes-art",
    title: "When Architecture Becomes Art",
    seoTitle: "Architecture Art Explained | How Buildings Become Wall Art | GAK Creations",
    seoDescription:
      "Learn what turns a building into architecture art, and how to choose architectural wall art that feels thoughtful, structured and collectible.",
    excerpt:
      "Where the discipline of building drawing ends and artwork begins — and what to look for when buying architecture art for a room.",
    published: "2026-08-04",
    readingTime: "7 min read",
    keywords: [
      "architecture art",
      "architectural art prints",
      "architecture wall art",
      "buildings as art",
      "art for architects",
    ],
    image: ABBAYE,
    imageAlt:
      "Architectural art print of Abbaye aux Dames, Saintes, France, with visible construction lines and watercolour wash",
    intro: [
      "Every architect draws. Very few of those drawings become art. The line between the two is not talent and it is not subject matter — it is intention. A construction drawing is made so a building can be built. An artwork is made so a place can be felt. The same hand, the same pencil, and the same façade can produce either.",
      "This note sets out where that line falls in the GAK Creations archive, and what it means practically if you are looking for architecture art to live with rather than a technical print to file away.",
    ],
    body: [
      {
        heading: "Architecture teaches you what to leave out",
        paragraphs: [
          "Years of professional drawing train the eye to find the governing geometry of a building before anything else: the module that repeats, the line that carries the load, the proportion that everything else answers to. That training is the reason an architectural artist can suggest an entire abbey with six confident strokes while a careful copyist is still counting windows.",
          "Architecture art works because of subtraction. The drawing keeps the structure that makes the place recognisable and discards the rest — the parked cars, the signage, the accidental clutter of a Tuesday afternoon. What remains is the quiet geometry of the place, which is what the viewer actually remembers.",
        ],
      },
      {
        heading: "The moment a building drawing becomes artwork",
        paragraphs: [
          "There is usually a single decision that tips a sheet over. Sometimes it is leaving the pencil construction lines visible so the viewer sees the thinking. Sometimes it is letting a wash granulate and run rather than correcting it. Sometimes it is choosing an eye-level that no survey drawing would ever use, because that is where a person actually stands.",
          "None of these decisions improve the drawing's accuracy. All of them improve its truth. That is the difference: a technical drawing answers what the building measures, an artwork answers what the building is like to stand in front of.",
        ],
      },
      {
        heading: "Light is the second subject",
        paragraphs: [
          "Buildings are static; light is not. Romanesque stone in Saintes reads heavy and shadowed at midday and almost weightless at dusk. Atlantic light on a Fuerteventura chapel bleaches colour out of the walls and pushes everything into silhouette. A metallic collage of the Guggenheim in Bilbao changes as you move past it, exactly as the titanium does.",
          "Good architecture art treats light as a co-subject rather than a finishing touch. It is also the most practical thing to consider when buying: hang a high-contrast architectural study where daylight rakes across it, and hang a soft-wash piece where the light is even.",
        ],
      },
      {
        heading: "Why architects and non-architects buy the same prints",
        paragraphs: [
          "Architects tend to read these sheets structurally — they follow the construction lines, notice where a proportion has been judged rather than measured, and enjoy seeing the working exposed. Everyone else reads them as places: a street remembered, a holiday, a church seen once on a walk.",
          "Both readings are correct, and a drawing that supports both is doing its job. It is also why architecture wall art suits studios, offices and hospitality interiors as comfortably as it suits a hallway at home — it rewards a glance and it rewards a long look.",
        ],
      },
      {
        heading: "Choosing architecture art for a room",
        paragraphs: [
          "Scale first: a single large architectural study anchors a wall better than three small ones competing for attention. Pair second: a Romanesque façade and a modern curve hung together make an argument about a century of building, and that argument gives a room a subject.",
          "Paper last, but it matters. Museum-grade matte stock holds granulating wash and fine construction lines without gloss glare, which is why every print in the archive is produced that way and made to order.",
        ],
      },
      {
        heading: "Where to start in the archive",
        paragraphs: [
          "The architecture collection holds the strictest studies — abbeys, arches and Romanesque fronts drawn on location. The Gaudí and modern landmarks collection carries the same discipline into curved and metallic surfaces, and the Fuerteventura collection shows what happens when the architecture is small and the landscape does most of the talking.",
          "If you want the reasoning behind the marks before you choose, the note on architectural sketching on location covers the working method sheet by sheet.",
        ],
      },
    ],
    relatedCollection: "architecture",
  },
  {
    slug: "what-size-art-print-should-i-buy",
    title: "What Size Art Print Should You Buy? A Room-by-Room Guide",
    seoTitle: "What Size Art Print Should You Buy? Room-by-Room Sizing Guide | GAK Creations",
    seoDescription:
      "Use this room-by-room art print sizing guide to choose wall art widths, hanging heights and framing allowances before you order.",
    excerpt:
      "The two-thirds rule, the 145 cm centre line and how much wall a frame really eats — practical sizing advice before you order a print.",
    published: "2026-09-03",
    readingTime: "7 min read",
    keywords: [
      "what size art print to buy",
      "art print size guide",
      "how high to hang art",
      "gallery wall spacing",
      "wall art sizes",
      "framing art prints",
    ],
    image: ABBAYE,
    imageAlt:
      "Framed architectural art print hung above furniture, illustrating art print sizing and hanging height",
    intro: [
      "Almost every art print that disappoints on arrival is the right drawing at the wrong size. The picture was chosen on a screen, where everything is the same size, and hung on a wall, where nothing is. A few numbers fix this permanently.",
      "This is the sizing advice an architect would give you before you order — measured, unfussy, and applicable to any print, not only the ones in this archive.",
    ],
    body: [
      {
        heading: "The two-thirds rule",
        paragraphs: [
          "Artwork hung above furniture should span roughly two thirds of the width of that furniture. A 180 cm sofa wants about 120 cm of framed artwork; a 120 cm console wants about 80 cm. Below two thirds the picture floats and looks accidental; above about 90 per cent it crowds the piece underneath.",
          "That figure is the framed width, not the paper width. A 70 cm print with a 6 cm mount and a 3 cm moulding measures about 88 cm on the wall — so work backwards from the wall measurement to the print size, never the other way round.",
        ],
      },
      {
        heading: "Hanging height: the 145 cm centre line",
        paragraphs: [
          "Galleries hang the centre of a work between 145 and 150 cm from the floor, which is average standing eye level. Use the same line at home and rooms instantly look considered, even with mismatched frames.",
          "Two exceptions. Above furniture, leave 15–25 cm between the top of the sofa or headboard and the bottom of the frame — the picture should read as belonging to the furniture. And in a room you mostly sit in, such as a dining room, drop the centre line by 5–10 cm.",
        ],
      },
      {
        heading: "Room by room",
        paragraphs: [
          "Above a sofa: one print of 70–100 cm wide, or a pair of 40–50 cm sheets. Above a double bed: 70–100 cm centred on the bed, not on the wall. Hallway: a run of three 30–40 cm prints at a shared centre line, spaced 5–8 cm apart. Home office or studio: 50–70 cm, hung so it is readable from the desk rather than from the door.",
          "Bathrooms and kitchens take smaller work, 20–30 cm, well away from steam and splash. Stairwells are the one place to go large — a single 100 cm-plus piece hung to the centre line of the middle step.",
        ],
      },
      {
        heading: "Portrait, landscape or square",
        paragraphs: [
          "Match the format to the wall, not to the subject. Tall narrow walls, chimney breasts and the space between two windows want portrait sheets. Wide low walls above sideboards and beds want landscape. Square works best in groups and in awkward areas where neither dimension dominates.",
          "It is worth knowing that architectural studies are frequently portrait — buildings rise — while coastal and volcanic landscape works are usually horizontal. Choosing the wall first narrows the archive for you.",
        ],
      },
      {
        heading: "Spacing a gallery wall",
        paragraphs: [
          "Keep 5–8 cm between frames and treat the whole group as one rectangle, then apply the two-thirds rule to that rectangle. Uneven gaps read as a mistake even when the individual frames are beautiful.",
          "Mix sizes but not too many: three sizes maximum, one clearly dominant. And keep the frame family consistent — the same pale oak throughout will hold together a group of very different drawings.",
        ],
      },
      {
        heading: "Mounts, frames and paper",
        paragraphs: [
          "A mount of 5–7 cm gives a fine art print breathing room and stops the drawing fighting the wall colour. Narrow mouldings suit line work; heavy black frames tend to overpower wash. Use UV glazing in bright rooms.",
          "Order the print with the framing in mind: if a framer wants a standard size, choose the print size that fits it. Museum-grade matte paper is worth insisting on — gloss throws glare across exactly the soft gradients you paid for.",
        ],
      },
      {
        heading: "Before you order",
        paragraphs: [
          "Cut the framed dimensions out of newspaper or masking tape and stick the shape to the wall for a day. It costs nothing and it settles the question faster than any amount of measuring.",
          "Then choose the drawing. The archive is browsable by collection and by individual artwork, and every sheet is available made to order in a range of sizes, so the wall can decide and the picture can follow.",
        ],
      },
    ],
    relatedCollection: "architecture",
  },
  {
    slug: "how-to-choose-art-for-every-room",
    title: "How to Choose Art for Every Room in the House",
    seoTitle: "How to Choose Art for Every Room | Wall Art Buying Guide | GAK Creations",
    seoDescription:
      "Follow this wall art buying guide for living rooms, bedrooms, home offices and hallways, with sizing, palette and framing advice from Gerald Allen Knowles.",
    excerpt:
      "Living room, bedroom, office, hallway — each room asks a different question of a picture. Here are the answers, with sizes and heights.",
    published: "2026-09-04",
    readingTime: "7 min read",
    keywords: [
      "how to choose wall art",
      "art for every room",
      "wall art size guide",
      "hanging height for art",
      "room by room art guide",
    ],
    image: BOAT,
    imageAlt:
      "Coastal art print of a blue boat, used to illustrate how to choose artwork for different rooms",
    intro: [
      "People usually choose a picture and then look for a wall. It is far easier the other way round. Once you know what a room is for — sitting, sleeping, working, passing through — the size, height, palette and even the subject narrow down almost by themselves.",
      "This is the practical version of advice normally given in vague terms, drawn from hanging work in the houses of people who bought it.",
    ],
    body: [
      {
        heading: "Living rooms: one anchor, generously sized",
        paragraphs: [
          "The living room is the wall people look at longest, so it wants a single strong piece rather than a scattering. Size it to the furniture below: about two thirds of the sofa's width, centred at 145–150 cm from the floor, with 15–25 cm of clear wall between the sofa back and the frame.",
          "Because this room is usually the brightest in a house, matte paper matters and so does UV glazing on a sun-facing wall. Architectural studies and large landscapes both work; what does not work is a small print floating in the middle of a big wall.",
        ],
      },
      {
        heading: "Bedrooms: lower contrast, softer subject",
        paragraphs: [
          "A bedroom picture is seen last at night and first in the morning, so its job is to be restful. Dusk and night scenes, still water and quiet architecture all have low internal contrast, which lets the eye stop rather than scan.",
          "Above a double or king bed, use a single print of 70–110 cm or a matched pair of 40–50 cm sheets, centred on the bed rather than the wall, with 20–30 cm above the headboard.",
        ],
      },
      {
        heading: "Home offices: detail you can live with",
        paragraphs: [
          "In a working room the artwork has two jobs — the wall you face while thinking, and the wall behind you on camera. In front of you, choose detail: a drawing with visible construction lines gives the eye somewhere useful to go between two sentences. Behind you, choose one clear shape, because a camera flattens depth and turns clusters into noise.",
          "Hang the facing piece at seated eye level, roughly 120–130 cm to the centre, and keep the mount narrower — 4–5 cm — so more picture fits the same wall.",
        ],
      },
      {
        heading: "Hallways and stairs: sequences, not statements",
        paragraphs: [
          "Corridors are read in motion, which makes them the one place a group genuinely belongs. Three prints of the same size, 8–12 cm apart, all on a centre line at 150 cm, will look considered in almost any hallway.",
          "On a staircase, run an imaginary line parallel to the handrail and centre every frame on it. Keep the sizes identical; mixed sizes on a diagonal look accidental rather than relaxed.",
        ],
      },
      {
        heading: "Kitchens, bathrooms and awkward corners",
        paragraphs: [
          "Small rooms take small work: 20–30 cm, hung away from steam, splash and direct heat. A bathroom will happily carry a single coastal study; a kitchen suits something with a bit of humour or movement.",
          "Awkward corners — the space beside a door, the wall under a slope — are best treated with one square print rather than an attempt at symmetry.",
        ],
      },
      {
        heading: "The test that saves a bad decision",
        paragraphs: [
          "Before ordering, cut the framed dimensions out of newspaper and tape the shape to the wall for a day. Walk past it. Sit under it. Almost every sizing mistake announces itself within a few hours, and it costs nothing to find out.",
          "Then choose the drawing. The archive is browsable by collection and by individual work, and each sheet is made to order in a range of sizes, so the wall can decide and the picture can follow.",
        ],
      },
    ],
    relatedCollection: "coastal",
  },
  {
    slug: "why-buy-original-art-prints",
    title: "Why Buy an Original Artist's Print Rather Than a Poster",
    seoTitle: "Artist's Print vs Poster | Why Museum-Quality Art Prints Cost More | GAK Creations",
    seoDescription:
      "Learn the difference between a museum-quality artist's print and a poster, from paper and pigment inks to provenance, longevity and value.",
    excerpt:
      "Paper, pigment, provenance and the hand that made the drawing — what you are actually paying for, and why it shows on the wall.",
    published: "2026-09-04",
    readingTime: "6 min read",
    keywords: [
      "artist art prints",
      "giclee print vs poster",
      "buying art prints online",
      "museum quality art print",
      "archival pigment print",
    ],
    image: ABBAYE,
    imageAlt:
      "Detail of an architectural art print on museum-grade matte paper, showing pencil construction lines and ink work",
    intro: [
      "A poster and a fine art print can show the same image at the same size for very different prices. The difference is not branding. It is in three things you can see at arm's length — the paper, the ink and the origin of the image — and one you can only see over years.",
    ],
    body: [
      {
        heading: "The paper does most of the work",
        paragraphs: [
          "Mass-market posters are printed on thin coated stock with a slight sheen. It photographs well and it dies under a frame: the surface throws glare across exactly the soft gradients that make a wash drawing worth looking at.",
          "Museum-grade matte fine art paper is heavy, slightly toothed and completely non-reflective. Under glazing it holds tonal steps that a coated sheet flattens, and it gives the printed line the same slight bite the original pencil had on the page.",
        ],
      },
      {
        heading: "Pigment inks versus dye",
        paragraphs: [
          "Cheap printing uses dye inks, which sit in the coating and shift within a few years in daylight — blues go first, then the warm greys turn muddy. Archival pigment inks suspend solid particles in the paper fibre, and independent testing puts their lightfastness in decades rather than seasons.",
          "This is why the phrase 'giclée' persists despite being over-used: it describes pigment inkjet printing at high resolution on rag or alpha-cellulose paper. It is the standard every print in this archive is made to.",
        ],
      },
      {
        heading: "Where the image came from",
        paragraphs: [
          "The largest difference is upstream of the printer. A poster is usually a licensed photograph or a generated composition. Every drawing here was made in front of its subject — a Romanesque abbey in Saintes, a titanium curve in Bilbao, a volcanic ridge on Fuerteventura — measured by eye, drawn in one sitting, without erasing.",
          "That process leaves traces: pencil construction lines running past a tower, a wash that stopped where the light moved. Those marks are the record of someone standing there, and they are the part of the sheet that keeps rewarding attention years later.",
        ],
      },
      {
        heading: "Made to order, not warehoused",
        paragraphs: [
          "Each print is produced when it is ordered, at the production facility nearest the delivery address. Nothing sits in stock fading under warehouse lighting, and the shipping leg is short — typically 2–7 business days to produce and 4–20 business days to arrive.",
          "It also means sizes are genuinely open: the same drawing can be a 30 cm sheet beside a desk or a 100 cm anchor above a sofa, printed at a resolution where the original pencil work stays visible.",
        ],
      },
      {
        heading: "What it costs and what it holds",
        paragraphs: [
          "An artist's print costs more than a poster and far less than an original. What it buys is a piece that survives framing, sunlight and a decade of moving house, and an image with an author you can read about rather than a stock reference number.",
          "If something arrives damaged or misprinted, the returns policy covers a replacement within 30 days — a practical difference from most poster shops, and one worth checking before buying art anywhere online.",
        ],
      },
    ],
    relatedCollection: "architecture",
  },
];



export const getPost = (slug: string) => journal.find((p) => p.slug === slug);
