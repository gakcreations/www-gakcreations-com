/**
 * Buyer-intent guides: room-by-room and gift/occasion landing pages.
 * Each entry becomes its own indexable route rendered by <BuyerGuide />.
 */
export interface BuyerGuide {
  slug: string;
  kind: "Room guide" | "Gift guide";
  breadcrumb: string;
  h1: string;
  lede: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  published: string;
  hero: string;
  heroAlt: string;
  heroCaption: string;
  intro: string[];
  sections: Array<{ heading: string; paragraphs: string[] }>;
  faqs: Array<{ q: string; a: string }>;
  /** Artwork slugs recommended on this page. */
  picks: string[];
  ctaHeading: string;
  ctaLabel: string;
}

const ABBAYE = "/images/Abbaye Aux Dames Saintes France.jpg";
const BOAT = "/images/The Boat That Dreams Of Sea.jpg";
const GUGGENHEIM = "/images/Guggenheim Museum Bilba, Spain.jpg";
const DREAM_NIGHTS = "/images/printify/dream-nights.jpg";
const PALMS = "/images/printify/palm-trees-symphony.jpg";
const SAINTES = "/images/printify/saintes-cathedral.jpg";

export const guides: BuyerGuide[] = [
  {
    slug: "living-room-wall-art",
    kind: "Room guide",
    breadcrumb: "Living Room Wall Art",
    h1: "Living Room Wall Art That Anchors the Room",
    lede:
      "How to choose, size and hang a single strong print above a sofa — with architectural drawings and Atlantic landscapes made to hold a wall from across the room.",
    seoTitle: "Living Room Wall Art | Shop Large Prints Above the Sofa | GAK Creations",
    seoDescription:
      "Shop living room wall art by Gerald Allen Knowles, with large architectural and coastal prints plus sizing, framing and hanging advice for above the sofa.",
    keywords: [
      "living room wall art",
      "art prints for living room",
      "large wall art above sofa",
      "architectural prints living room",
      "neutral living room art",
    ],
    published: "2026-09-04",
    hero: ABBAYE,
    heroAlt:
      "Large architectural art print of Abbaye aux Dames, suited to a living room wall above a sofa",
    heroCaption: "Abbaye aux Dames, Saintes · ink and wash on paper",
    intro: [
      "A living room is the one wall in a house that people look at for hours without meaning to. That changes what works there. A print that is clever on first sight becomes tiring by the third week, while a drawing with real structure underneath keeps giving something back: a line you had not followed, a shadow that turns out to be a doorway.",
      "The pieces below are drawn on location — buildings measured by eye, coastlines watched through moving weather — which is why they read as calmly at four metres as they do at forty centimetres.",
    ],
    sections: [
      {
        heading: "Size it to the sofa, not to the wall",
        paragraphs: [
          "The most common mistake in a living room is a print that is too small. Work from the furniture: the artwork should span roughly two thirds of the width of the sofa or sideboard beneath it. For a standard three-seater of about 210 cm, that means a single print 100–140 cm wide, or a pair of 50–70 cm sheets hung with a hand's width between them.",
          "If the ceiling is high, gain height rather than width — a portrait-format architectural drawing draws the eye upward and makes the room feel intentional instead of stretched.",
        ],
      },
      {
        heading: "Hang lower than instinct tells you",
        paragraphs: [
          "Centre the artwork at about 145–150 cm from the floor, and leave 15–25 cm between the top of the sofa back and the bottom of the frame. Hung higher, the print floats loose from the furniture; hung within that band, wall and seating read as one composition.",
          "In a room where people mostly sit, dropping the centre by another 5 cm is often better still — the picture meets a seated eye rather than a standing one.",
        ],
      },
      {
        heading: "One strong piece beats a gallery wall",
        paragraphs: [
          "Gallery walls suit corridors and stairs, where you pass. A living room rewards a single anchor with breathing space around it. If you want more than one work, hang two of the same size at a shared centre line and let them behave as a diptych rather than a collection.",
          "Where you do want a pairing, choose contrast of subject and agreement of palette: an architectural elevation beside an Atlantic landscape works because both are drawn in the same restrained range of ink, stone and paper white.",
        ],
      },
      {
        heading: "Framing and light",
        paragraphs: [
          "Pale oak or ash with a 5–7 cm off-white mount suits these drawings in most neutral rooms; a slim black frame sharpens them against a dark or deeply coloured wall. Keep the moulding narrow — the drawn line should stay the strongest edge in the picture.",
          "Living rooms are usually the brightest rooms in a house, so use UV glazing if the wall catches direct afternoon sun. Every print is made with archival pigment inks on museum-grade matte stock, which resists fading far better than dye-based printing, and matte avoids the glare a glossy sheet throws across a sunny room.",
        ],
      },
    ],
    faqs: [
      {
        q: "What size art print should I hang above a sofa?",
        a: "Roughly two thirds of the sofa's width. Above a 210 cm three-seater that means a single print about 100–140 cm wide, or two 50–70 cm prints hung a hand's width apart with a shared centre line.",
      },
      {
        q: "How high should living room art be hung?",
        a: "Centre the work at 145–150 cm from the floor, leaving 15–25 cm of clear wall between the sofa back and the bottom of the frame.",
      },
      {
        q: "Which artwork suits a neutral living room?",
        a: "Drawings with a narrow palette — ink, warm stone, indigo and paper white — sit comfortably with oak, linen and plaster. Architectural studies add structure; coastal and volcanic landscapes add quiet depth.",
      },
      {
        q: "Do the prints come framed?",
        a: "Prints are supplied unframed unless a framed option is shown at checkout, which lets you match the frame to your room. Sizes, paper and framing choices appear on each listing in the shop.",
      },
      {
        q: "How long does delivery take?",
        a: "Each print is made to order at the production facility nearest you — typically 2–7 business days to produce and 4–20 business days to arrive, depending on destination.",
      },
    ],
    picks: [
      "abbaye-aux-dames-saintes",
      "guggenheim-museum-bilbao",
      "symphony-of-waves",
      "fuerteventura-magical-landscape",
    ],
    ctaHeading: "Choose a living room print",
    ctaLabel: "Shop living room prints",
  },
  {
    slug: "bedroom-wall-art",
    kind: "Room guide",
    breadcrumb: "Bedroom Wall Art",
    h1: "Bedroom Wall Art for a Quieter Room",
    lede:
      "Soft Atlantic light, night skies and resting boats — prints chosen for the one room where artwork should lower the volume rather than raise it.",
    seoTitle: "Bedroom Wall Art | Shop Calm Prints Above the Bed | GAK Creations",
    seoDescription:
      "Shop bedroom wall art by Gerald Allen Knowles, with calm coastal and landscape prints plus sizing, framing and hanging advice for above the bed.",
    keywords: [
      "bedroom wall art",
      "art prints for bedroom",
      "calm wall art above bed",
      "coastal bedroom art",
      "neutral bedroom prints",
    ],
    published: "2026-09-04",
    hero: DREAM_NIGHTS,
    heroAlt: "Night-toned Fuerteventura landscape print suited to a bedroom wall above the bed",
    heroCaption: "Mystical Fuerteventura — Dream Nights",
    intro: [
      "A bedroom is the last thing you see at night and the first in the morning, which is a demanding job for a picture. Anything loud becomes an irritation. What survives is work with a narrow palette and a slow subject: water at rest, a hillside under evening light, a chapel with nothing happening around it.",
      "These are the drawings from the archive that behave well in a room designed for stopping.",
    ],
    sections: [
      {
        heading: "Width, symmetry and the bed below",
        paragraphs: [
          "Work to the bed. Above a double (140 cm) or king (180 cm), a single print of 70–110 cm wide reads correctly; anything narrower looks stranded between the bedside tables. A symmetrical pair of 40–50 cm sheets is the reliable alternative, especially in a room where the bed is already the strongest shape.",
          "Leave 20–30 cm between the headboard and the frame, and centre the work on the bed rather than on the wall — a bed that sits slightly off-centre in a room still wants its artwork aligned to it.",
        ],
      },
      {
        heading: "Choose subject over statement",
        paragraphs: [
          "Night and dusk scenes suit bedrooms particularly well because their contrast is already low: the eye rests instead of scanning. Coastal work does the same job in a lighter register, holding the room in soft indigo and stone.",
          "Avoid busy, high-contrast compositions here. Save the sharp architectural elevations for a hallway or study, where you pass or concentrate rather than sleep.",
        ],
      },
      {
        heading: "Palette pairing with bed linen and walls",
        paragraphs: [
          "These prints live between indigo, Payne's grey, warm stone and paper white, so they sit naturally with white or oatmeal linen, oak and clay-toned walls. Against a deeper wall — a slate or a muted green — the same works gain weight without needing a bolder frame.",
          "If the room already has strong pattern in curtains or a rug, a single restrained drawing is the correction the wall needs.",
        ],
      },
      {
        heading: "Framing for low light",
        paragraphs: [
          "Bedrooms are lit softly and often from one side, so glare matters less than depth. Pale oak or ash with a wide off-white mount lets the wash breathe; a 6–7 cm mount gives the print a moment of silence before the wall begins.",
          "Museum-grade matte paper and pigment inks keep the tonal steps in a dusk sky readable under lamplight, where a glossy print would flatten them.",
        ],
      },
    ],
    faqs: [
      {
        q: "What size print should hang above a bed?",
        a: "Above a double or king bed, choose a single print 70–110 cm wide, or a matched pair of 40–50 cm prints hung a hand's width apart and centred on the bed.",
      },
      {
        q: "How high should artwork hang above a headboard?",
        a: "Leave 20–30 cm of clear wall between the top of the headboard and the bottom of the frame, keeping the work visually tied to the bed.",
      },
      {
        q: "What kind of art is most calming in a bedroom?",
        a: "Low-contrast subjects with a narrow palette — dusk landscapes, still water, quiet architecture. They give the eye somewhere to rest instead of something to solve.",
      },
      {
        q: "Will a print fade in a sunny bedroom?",
        a: "Prints use archival pigment inks on museum-grade matte stock, which are far more stable than dye inks. Keep the work out of direct midday sun and use UV glazing on a south-facing wall.",
      },
      {
        q: "Can I order two matching prints as a pair?",
        a: "Yes — order the same size twice from the shop. Hanging two sheets of identical size at a shared centre line is the simplest way to fill a wide wall above a bed.",
      },
    ],
    picks: [
      "mystical-fuerteventura-dream-nights",
      "the-blue-boat-that-dreams-of-sea",
      "fuerteventura-palm-trees-symphony",
      "volcanic-landscape-fuerteventura",
    ],
    ctaHeading: "Choose a bedroom print",
    ctaLabel: "Shop bedroom prints",
  },
  {
    slug: "home-office-wall-art",
    kind: "Room guide",
    breadcrumb: "Home Office Wall Art",
    h1: "Home Office Wall Art with Structure",
    lede:
      "Architectural drawings for the wall behind the desk and the wall behind you on camera — precise, quiet and legible at close range.",
    seoTitle: "Home Office Wall Art | Architectural Prints for Desk & Studio | GAK Creations",
    seoDescription:
      "Shop home office wall art by Gerald Allen Knowles, with architectural prints that read well behind a desk and on video calls, plus sizing and framing advice.",
    keywords: [
      "home office wall art",
      "office art prints",
      "architectural prints for office",
      "art behind desk",
      "study wall art",
    ],
    published: "2026-09-04",
    hero: GUGGENHEIM,
    heroAlt: "Architectural drawing of the Guggenheim Museum Bilbao, suited to a home office wall",
    heroCaption: "Guggenheim Museum Bilbao · drawn on location",
    intro: [
      "A home office has two audiences: you, at close range for hours, and everyone who sees the wall behind you on a call. Architectural drawings serve both. Up close they reward attention — construction lines running past a tower, a shadow resolved in three strokes. On camera they read as one confident shape.",
      "This is work made by an architect, so the geometry holds up to the kind of looking that a working day produces.",
    ],
    sections: [
      {
        heading: "The wall behind the desk",
        paragraphs: [
          "If the artwork sits behind you in the room, size it to the desk: a print spanning about two thirds of the desk width, centred at 150–155 cm because you are usually standing or on a raised chair when you look at it.",
          "One print, generously sized, is better than three small ones. A camera flattens depth, and a cluster of frames turns into visual noise on a video call.",
        ],
      },
      {
        heading: "The wall you actually face",
        paragraphs: [
          "The wall in front of your desk is the one you look at when thinking. Here, detail is an asset: a drawing with visible pencil workings gives the eye somewhere useful to go during the pause between two sentences.",
          "Hang it at seated eye level — around 120–130 cm to the centre — so you are not tilting your head to look at it.",
        ],
      },
      {
        heading: "Subjects that suit working rooms",
        paragraphs: [
          "Landmarks and studied buildings carry a professional register without becoming corporate: a Romanesque abbey, a Gaudí facade, a modern museum drawn as structure rather than spectacle. They are also good conversation openers with clients, which a generic abstract is not.",
          "For a studio or workshop, a travel collage brings movement and colour while keeping the same drawn discipline underneath.",
        ],
      },
      {
        heading: "Framing, glare and screens",
        paragraphs: [
          "Matte paper is essential in an office: a glossy print opposite a window or a bright monitor becomes a mirror. Frame in slim black for a graphic, workshop feel, or pale oak if the room shares its palette with the rest of the house.",
          "Keep the mount narrower here than in a living room — 4–5 cm — so more drawing sits inside the same wall space.",
        ],
      },
    ],
    faqs: [
      {
        q: "What art works well behind a desk on video calls?",
        a: "One large, low-contrast drawing with a clear shape. Cameras flatten depth, so a single architectural study reads far better than a cluster of small frames.",
      },
      {
        q: "What size print suits a home office?",
        a: "Around two thirds of the desk width — commonly 60–90 cm wide for a standard 120–140 cm desk.",
      },
      {
        q: "How do I stop glare from a window or monitor?",
        a: "Choose matte paper, which every print here uses, and avoid hanging directly opposite a window. Non-reflective glazing helps in the brightest rooms.",
      },
      {
        q: "Are these prints suitable as a gift for an architect or designer?",
        a: "Yes — the drawings are made by a practising architect, and the buildings are drawn from measurement by eye rather than photographs. See the guide to art gifts for architects.",
      },
      {
        q: "Can I buy a set for a whole office?",
        a: "Yes. Order several prints in the same size from the shop; multiple copies of a size keep framing costs and wall alignment simple.",
      },
    ],
    picks: [
      "guggenheim-museum-bilbao",
      "abbaye-aux-dames-saintes",
      "cathedrale-saint-pierre-saintes",
      "church-of-san-juan-bautista-de-banos",
    ],
    ctaHeading: "Choose a print for the office",
    ctaLabel: "Shop office prints",
  },
  {
    slug: "hallway-wall-art",
    kind: "Room guide",
    breadcrumb: "Hallway Wall Art",
    h1: "Hallway and Stairway Wall Art",
    lede:
      "Corridors are for sequences. Three or four prints at a shared centre line turn a passage into an approach — here is how to plan the run.",
    seoTitle: "Hallway Wall Art | Shop Matching Prints for Corridors & Stairs | GAK Creations",
    seoDescription:
      "Shop hallway wall art by Gerald Allen Knowles, with matching print sets, spacing advice and stair-hanging tips for corridors and landings.",
    keywords: [
      "hallway wall art",
      "corridor art prints",
      "stairway wall art",
      "set of 3 prints",
      "entryway art",
    ],
    published: "2026-09-04",
    hero: SAINTES,
    heroAlt: "Architectural print of Cathédrale Saint-Pierre in Saintes, suited to a hallway run",
    heroCaption: "Cathédrale Saint-Pierre, Saintes",
    intro: [
      "A hallway is the one place in a house where a gallery wall genuinely belongs. You move past it, so the artwork is read in sequence rather than all at once — and a sequence wants rhythm, not variety.",
      "The simplest version, and the one that almost always works, is three prints of the same size, evenly spaced, at one shared centre line.",
    ],
    sections: [
      {
        heading: "Plan the run before you hang anything",
        paragraphs: [
          "Measure the usable wall, subtract 30 cm at each end, then divide what remains between the frames and the gaps. For three prints of 40 cm wide, allow 8–10 cm between frames; the gap should always be smaller than the narrowest frame so the group reads as one object.",
          "Mark the centre line at 150 cm and keep every frame on it, regardless of whether the prints are portrait or landscape. A consistent centre line is what separates a considered run from a scattering.",
        ],
      },
      {
        heading: "Stairs: follow the pitch, not the steps",
        paragraphs: [
          "On a staircase, set an imaginary line parallel to the handrail and hang each frame with its centre on that line, spaced as evenly as the treads allow. The eye accepts the diagonal instantly because it matches your own movement upward.",
          "Keep the frames identical on a stair. Mixed sizes climbing a diagonal look accidental.",
        ],
      },
      {
        heading: "Choose a theme the run can carry",
        paragraphs: [
          "A hallway is where a body of work makes sense: three French churches; three Atlantic landscapes from the same island; three studies of the same coastline in different weather. The repeated subject is what makes the corridor feel curated.",
          "Because you view them close and briefly, hallway prints can carry more detail than living room pieces — pencil construction lines and small notation read well at arm's length.",
        ],
      },
      {
        heading: "Light and practicalities",
        paragraphs: [
          "Hallways are usually dim, so matte paper is again the right choice: it holds tone under low, direct downlights that would blow out a glossy surface. If the corridor has a single wall light, hang the run on the opposite wall to avoid a hotspot.",
          "Narrow frames also matter here for a physical reason — a deep moulding in a tight corridor catches shoulders and coats.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many prints should a hallway have?",
        a: "Three is the reliable number for a typical corridor wall — enough to read as a sequence, few enough to keep the spacing generous. Four or five suits a long hall.",
      },
      {
        q: "How far apart should the frames be?",
        a: "Between 8 and 12 cm for prints up to about 50 cm wide. Keep the gap narrower than the frames themselves so the run reads as one group.",
      },
      {
        q: "How do I hang art up a staircase?",
        a: "Set a line parallel to the handrail, keep every frame the same size, and centre each one on that line with even horizontal spacing.",
      },
      {
        q: "Should hallway prints match?",
        a: "Match the size and framing; vary the image. A shared subject — one region, one building type, one coastline — is what makes the run feel deliberate.",
      },
      {
        q: "Can I order a matching set of three?",
        a: "Yes. Choose three drawings and order them in the same size from the shop so the framing and spacing stay consistent.",
      },
    ],
    picks: [
      "cathedrale-saint-pierre-saintes",
      "church-of-san-juan-bautista-de-banos",
      "mystical-chapel-fuerteventura",
      "erosion-gate-fuerteventura",
    ],
    ctaHeading: "Build a hallway set",
    ctaLabel: "Shop prints for a run",
  },
  {
    slug: "art-gifts-for-architects",
    kind: "Gift guide",
    breadcrumb: "Art Gifts for Architects",
    h1: "Art Gifts for Architects and Designers",
    lede:
      "Drawings made by a practising architect — measured by eye, built from construction lines, and finished on location. A gift that another architect will read properly.",
    seoTitle: "Art Gifts for Architects | Shop Drawings by an Architect | GAK Creations",
    seoDescription:
      "Shop art gifts for architects and designers, with hand-drawn architectural prints by Gerald Allen Knowles and delivery guidance for thoughtful gifting.",
    keywords: [
      "art gifts for architects",
      "gifts for architects",
      "architectural drawing gift",
      "gifts for designers",
      "graduation gift architect",
    ],
    published: "2026-09-04",
    hero: ABBAYE,
    heroAlt:
      "Architectural drawing print with visible construction lines, a considered gift for an architect",
    heroCaption: "Abbaye aux Dames, Saintes · construction lines left visible",
    intro: [
      "Architects are difficult to buy for because they notice. A generic city-skyline poster is spotted for what it is within a second; a drawing that was actually made in front of the building is spotted just as fast, for the opposite reason.",
      "Every print in this archive was drawn on location by Gerald Allen Knowles, an architect by training, in one sitting and without erasing. The pencil workings are left in the finished sheet — which is precisely the detail another architect will look for.",
    ],
    sections: [
      {
        heading: "Why these read as a professional's gift",
        paragraphs: [
          "The drawings begin as diagrams: a horizon line set at eye height, vanishing points placed by judgement, total height measured against total width. Only then does the building arrive. That sequence is visible in the finished print, and it is the difference between a picture of a building and a drawing of one.",
          "Ink carries what will not change — structural edges, the depth of a reveal, the shadow under a cornice. Wash carries what changes by lunchtime. Anyone who has drawn on site recognises the discipline immediately.",
        ],
      },
      {
        heading: "Choosing by what they work on",
        paragraphs: [
          "For someone in heritage or conservation, the Romanesque studies — Abbaye aux Dames and the Church of San Juan Bautista de Baños — are the obvious pieces: mass, arcade and repetition, drawn as structure.",
          "For a contemporary practice, the Guggenheim Bilbao study is the strongest choice: curved titanium reduced to line, which is a harder problem than it looks. For an interiors or landscape designer, the Atlantic and volcanic landscapes bring the same rigour to terrain instead of building.",
        ],
      },
      {
        heading: "Occasions this suits",
        paragraphs: [
          "Qualification and graduation, a new practice, a promotion to associate or partner, a retirement, or the completion of a long project. In each case a drawing marks the occasion in the recipient's own language.",
          "It also works as a studio gift rather than a personal one: a single large print in a meeting room does more for a small practice than another framed certificate.",
        ],
      },
      {
        heading: "Practical notes for gifting",
        paragraphs: [
          "Prints are made to order and supplied unframed unless a framed option is chosen at checkout, which lets the recipient match their own room — usually the right call for someone with strong opinions about frames. If you want it ready to hang, choose a framed size in the shop.",
          "Allow 2–7 business days for production and 4–20 business days for delivery, so order roughly three weeks ahead of the date. Returns are accepted within 30 days if something is not right.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a good gift for an architect?",
        a: "A hand-drawn architectural study of a building they admire, printed at a size they can hang. Drawings that keep their construction lines visible are read by architects as work, not decoration.",
      },
      {
        q: "Who makes these drawings?",
        a: "Gerald Allen Knowles, an architect, artist and traveller who draws buildings and landscapes on location across Europe and the Atlantic islands.",
      },
      {
        q: "Do the prints arrive framed?",
        a: "They are supplied unframed unless you select a framed option at checkout. Unframed suits recipients who prefer to choose their own moulding.",
      },
      {
        q: "How far in advance should I order a gift?",
        a: "About three weeks. Production takes 2–7 business days and delivery a further 4–20 business days depending on destination.",
      },
      {
        q: "Can I return a gift print?",
        a: "Yes — see the refund and returns policy for the 30-day window and the process for damaged or misprinted items.",
      },
    ],
    picks: [
      "guggenheim-museum-bilbao",
      "abbaye-aux-dames-saintes",
      "church-of-san-juan-bautista-de-banos",
      "cathedrale-saint-pierre-saintes",
    ],
    ctaHeading: "Find a gift for an architect",
    ctaLabel: "Shop architectural prints",
  },
  {
    slug: "housewarming-art-gifts",
    kind: "Gift guide",
    breadcrumb: "Housewarming Art Gifts",
    h1: "Housewarming Art Gifts for a New Home",
    lede:
      "A new house has empty walls and no agreed taste yet. These are the prints that fit almost any room — restrained palette, real craft, nothing to argue with.",
    seoTitle: "Housewarming Art Gifts | Shop Prints for a New Home | GAK Creations",
    seoDescription:
      "Shop housewarming art gifts by Gerald Allen Knowles, with calm museum-quality prints, gifting advice and delivery details for a new home.",
    keywords: [
      "housewarming art gifts",
      "housewarming gift art print",
      "new home gift art",
      "wall art gift",
      "moving in present",
    ],
    published: "2026-09-04",
    hero: BOAT,
    heroAlt: "Coastal art print of a blue boat, a calm housewarming gift for a new home",
    heroCaption: "The Blue Boat That Dreams of Sea",
    intro: [
      "Giving artwork for a new home is a small risk with a large payoff. The risk is taste; the payoff is that a print outlasts every other housewarming present in the room.",
      "The way to manage the risk is to choose restraint. A drawing in a narrow palette of ink, stone, indigo and paper white will find a wall in any house, and it will still be right when the sofa changes.",
    ],
    sections: [
      {
        heading: "Choose the safest strong option",
        paragraphs: [
          "Safe does not mean bland. A coastal study or a quiet landscape has a definite point of view, but it does not impose a colour scheme. That is exactly what a new home needs while the rooms are still being decided.",
          "Avoid anything tied to a specific place the recipients have no connection to — unless the place is theirs. A drawing of the region they have just moved to, or the city they met in, turns a good gift into a memorable one.",
        ],
      },
      {
        heading: "What size to give",
        paragraphs: [
          "For a gift, a mid-size print of 40–60 cm is the sensible band: substantial enough to matter, small enough to find a wall in a house that is still in boxes.",
          "Go larger only if you know where it will hang. A 100 cm print is a wonderful present and an awkward one if there is no wall waiting for it.",
        ],
      },
      {
        heading: "Framed or unframed",
        paragraphs: [
          "Unframed prints let the recipients choose a moulding that fits their rooms, and they post more safely. Framed is the better choice when you want the gift to be usable the same evening — pale oak suits almost every interior.",
          "Whichever you pick, the print itself is made on museum-grade matte paper with archival pigment inks, so it will not yellow or shift over the years they spend in the house.",
        ],
      },
      {
        heading: "Timing and delivery",
        paragraphs: [
          "Everything is made to order at the facility nearest the delivery address, which keeps shipping short but means production time is real: allow 2–7 business days to print and 4–20 business days to deliver.",
          "You can have the print sent directly to the new address. If a piece arrives damaged or misprinted, the returns policy covers a replacement within 30 days.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is art a good housewarming gift?",
        a: "Yes, if you choose restraint. A print in a narrow, neutral palette fits a house whose decoration is not settled yet, and it lasts far longer than most housewarming presents.",
      },
      {
        q: "What size print makes the best gift?",
        a: "40–60 cm. It is generous without demanding a specific wall, and it is easy to frame from stock sizes.",
      },
      {
        q: "Should I give it framed?",
        a: "Framed if you want it hung immediately; unframed if the recipients have clear taste and would rather choose the moulding themselves.",
      },
      {
        q: "Can you deliver straight to the new home?",
        a: "Yes — enter the recipient's address at checkout. Prints are produced at the nearest facility and shipped directly.",
      },
      {
        q: "What if they do not like it?",
        a: "Returns are accepted within 30 days under the refund and returns policy, including replacements for damaged or misprinted items.",
      },
    ],
    picks: [
      "the-blue-boat-that-dreams-of-sea",
      "symphony-of-waves",
      "fuerteventura-palm-trees-symphony",
      "abbaye-aux-dames-saintes",
    ],
    ctaHeading: "Send a housewarming print",
    ctaLabel: "Shop gift prints",
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
export const roomGuides = guides.filter((g) => g.kind === "Room guide");
export const giftGuides = guides.filter((g) => g.kind === "Gift guide");

export const HERO_PALMS = PALMS;
