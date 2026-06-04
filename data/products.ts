export type Product = {
  id: string;
  name: string;
  asin: string;
  affiliateUrl: string;
  imageUrl: string;
  category: string;
  scentNotes: string[];
  noteType: "top" | "middle" | "base" | "all";
  mood: string[];
  room: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  summary: string;
};

const tag = "YOURTAG-20";
const amazonUrl = (asin: string) =>
  `https://www.amazon.com/dp/${asin}?tag=${tag}`;

export const products: Product[] = [
  // ── DIFFUSERS ──────────────────────────────────────────────────────────────
  {
    id: "diffuser-1",
    name: "MRS. MEYER'S CLEAN DAY Premium Scented Oil Diffuser Kit, Rain Water",
    asin: "B0FPGT6QHJ",
    affiliateUrl: amazonUrl("B0FPGT6QHJ"),
    imageUrl: "https://m.media-amazon.com/images/I/81sLUmNrgxL._AC_SL1500_.jpg",
    category: "diffusers",
    scentNotes: ["rain water", "clean linen", "light floral"],
    noteType: "top",
    mood: ["Fresh", "Calm"],
    room: ["Living Room", "Bathroom", "Office"],
    pros: [
      "Complete kit includes diffuser and scented oil for immediate use",
      "Rain Water scent profile delivers a clean, neutral base for layering",
      "Mrs. Meyer's plant-derived ingredients philosophy extends to fragrance",
      "Compact warmer design suits countertops without dominating the space",
    ],
    cons: [
      "Proprietary oil format limits scent variety without brand-specific refills",
      "Scent throw is gentle — better for small rooms than open-plan spaces",
    ],
    bestFor: "Clean-scent layering in kitchens and bathrooms",
    summary:
      "Mrs. Meyer's diffuser kit is built for the home that values simplicity and clean ingredients. The Rain Water fragrance serves as an airy, neutral top note that pairs well with heavier reed diffusers or candles running alongside it.",
  },
  {
    id: "diffuser-2",
    name: "ASAKUKI Essential Oil Diffuser 500ML with Remote Control, 7 Color LED",
    asin: "B01MR4Y0CZ",
    affiliateUrl: amazonUrl("B01MR4Y0CZ"),
    imageUrl: "https://m.media-amazon.com/images/I/61KskoaRxpL._AC_SL1500_.jpg",
    category: "diffusers",
    scentNotes: [],
    noteType: "all",
    mood: ["Calm", "Cozy", "Fresh"],
    room: ["Living Room", "Bedroom", "Office"],
    pros: [
      "500 ml tank delivers extended run time suitable for all-day diffusing",
      "Remote control allows mist and light adjustments without leaving your seat",
      "Seven LED color modes double as ambient mood lighting",
      "Waterless auto-shutoff protects the unit from damage",
    ],
    cons: [
      "LED lighting cannot be fully disabled without powering down the unit",
      "Footprint is slightly larger than single-function models",
    ],
    bestFor: "All-day living room scent layering with atmosphere",
    summary:
      "The ASAKUKI 500 ml punches well above its price point — remote operation and a large tank make it genuinely practical for scent layering routines that run morning to night without constant adjustment.",
  },
  {
    id: "diffuser-3",
    name: "Drift Home Scent Diffuser Starter Kit in Teak",
    asin: "B0DP7F137W",
    affiliateUrl: amazonUrl("B0DP7F137W"),
    imageUrl: "https://m.media-amazon.com/images/I/61QgxcpxvaL._AC_SL1500_.jpg",
    category: "diffusers",
    scentNotes: ["teak wood", "warm spice", "soft musk"],
    noteType: "base",
    mood: ["Cozy", "Romantic"],
    room: ["Living Room", "Bedroom"],
    pros: [
      "Teak housing integrates with natural wood and mid-century modern interiors",
      "Starter kit provides everything needed to begin diffusing immediately",
      "Warm teak scent profile anchors a full fragrance pyramid as a base note",
      "Low-profile design sits unobtrusively on shelves and side tables",
    ],
    cons: [
      "Teak scent may not suit those building fresh or citrus-forward stacks",
      "Smaller tank capacity requires more frequent refills",
    ],
    bestFor: "Design-led interiors seeking a warm wood base note",
    summary:
      "The Drift Home Teak kit treats a diffuser as furniture as much as fragrance hardware. Its warm woody profile layers naturally under floral or herbal heart notes, and the teak housing disappears into natural-material interiors.",
  },
  {
    id: "diffuser-4",
    name: "500ML Large Essential Oil Diffuser, 20-Hour Long-Lasting Aromatherapy",
    asin: "B0D66B75R7",
    affiliateUrl: amazonUrl("B0D66B75R7"),
    imageUrl: "https://m.media-amazon.com/images/I/61IQwNaBuvL._AC_SL1500_.jpg",
    category: "diffusers",
    scentNotes: [],
    noteType: "all",
    mood: ["Fresh", "Calm", "Energizing"],
    room: ["Living Room", "Bedroom", "Office"],
    pros: [
      "500 ml tank sustains up to 20 hours of continuous operation",
      "Minimalist cylindrical design suits contemporary home aesthetics",
      "Adjustable mist output accommodates rooms of different sizes",
      "Quiet ultrasonic operation rated below 35 dB",
    ],
    cons: [
      "Minimalist design offers no LED accent lighting",
      "No timer function — requires manual shutoff or use with a smart plug",
    ],
    bestFor: "Whole-day fragrance coverage in a modern interior",
    summary:
      "With its 20-hour run time and clean silhouette, this diffuser is built for the home that wants continuous scent layering without visual clutter. The long tank life means your base or heart note runs uninterrupted through an entire day.",
  },
  {
    id: "diffuser-5",
    name: "InnoGear Essential Oil Diffuser, Basic White, 7 Colors LED",
    asin: "B00V9JP8EE",
    affiliateUrl: amazonUrl("B00V9JP8EE"),
    imageUrl: "https://m.media-amazon.com/images/I/41YMvPK9RFL._AC_SL1500_.jpg",
    category: "diffusers",
    scentNotes: [],
    noteType: "all",
    mood: ["Calm", "Fresh", "Cozy"],
    room: ["Bedroom", "Bathroom", "Office"],
    pros: [
      "Proven, long-running model with a strong track record of reliability",
      "Seven color LED modes provide flexible ambient lighting",
      "Compact footprint fits nightstands and bathroom counters without crowding",
      "Auto-shutoff when water runs low prevents dry-run damage",
    ],
    cons: [
      "Smaller tank than 500 ml competitors requires more frequent refills",
      "Mist output is gentle — works best in rooms under 250 sq ft",
    ],
    bestFor: "Bedrooms and small spaces needing quiet fragrance",
    summary:
      "The InnoGear Basic is the entry point that has introduced countless users to diffuser-based scent layering. Its small size, quiet operation, and LED versatility make it a bedroom staple that complements candles and reed diffusers running elsewhere.",
  },

  // ── CANDLES ────────────────────────────────────────────────────────────────
  {
    id: "candle-1",
    name: "Bath & Body Works Mahogany Teakwood Intense 3-Wick Candle",
    asin: "B01M7TTA2S",
    affiliateUrl: amazonUrl("B01M7TTA2S"),
    imageUrl: "https://m.media-amazon.com/images/I/71l2RQCha7L._AC_SL1500_.jpg",
    category: "candles",
    scentNotes: ["mahogany", "teakwood", "dark musk", "black pepper"],
    noteType: "base",
    mood: ["Cozy", "Romantic"],
    room: ["Living Room", "Bedroom"],
    pros: [
      "Three-wick design fills large rooms with fragrance efficiently",
      "Deep mahogany and teak base provides a powerful anchor for any scent stack",
      "Well-known for consistent hot throw across the entire burn",
      "45-ounce size delivers generous burn time",
    ],
    cons: [
      "Intense version is bold — may overwhelm smaller rooms under 200 sq ft",
      "Paraffin wax base is not the cleanest-burning option available",
    ],
    bestFor: "Bold base-note anchoring in large living spaces",
    summary:
      "Mahogany Teakwood Intense earns its reputation as one of the most recognizable masculine base notes in consumer candles. Its dark wood profile is a powerful foundation for layering lighter floral or herbal top notes above it.",
  },
  {
    id: "candle-2",
    name: "Chesapeake Bay Candle Serenity + Calm, Lavender Thyme",
    asin: "B07GH691SM",
    affiliateUrl: amazonUrl("B07GH691SM"),
    imageUrl: "https://m.media-amazon.com/images/I/51nsAvPf7DL._AC_SL1500_.jpg",
    category: "candles",
    scentNotes: ["lavender", "thyme", "light herb", "clean musk"],
    noteType: "middle",
    mood: ["Calm", "Fresh"],
    room: ["Bedroom", "Bathroom", "Office"],
    pros: [
      "Lavender-thyme combination bridges herbal and floral scent families cleanly",
      "Straightforward heart-note profile makes it easy to build a stack around",
      "Clean-burning soy wax formula with modest soot output",
      "Accessible price makes it practical for multi-room use",
    ],
    cons: [
      "Burn time is moderate — not intended as an all-day anchor",
      "Fragrance throw is balanced rather than bold — best in smaller spaces",
    ],
    bestFor: "Calming heart-note layering in bedrooms and offices",
    summary:
      "Chesapeake Bay's Lavender Thyme fills the heart-note position in a layering stack with quiet authority. Its herbal-floral profile bridges woody base candles and citrus top notes without competing with either.",
  },
  {
    id: "candle-3",
    name: "Yankee Candle Pink Sands Large Jar, up to 150 Hour Burn Time",
    asin: "B0F3DQK6YY",
    affiliateUrl: amazonUrl("B0F3DQK6YY"),
    imageUrl: "https://m.media-amazon.com/images/I/71ODpRAcIHL._AC_SL1500_.jpg",
    category: "candles",
    scentNotes: ["citrus", "vanilla", "light musk", "soft floral"],
    noteType: "all",
    mood: ["Fresh", "Romantic", "Cozy"],
    room: ["Living Room", "Bedroom"],
    pros: [
      "Up to 150-hour burn time offers exceptional longevity",
      "Pink Sands layered fragrance spans top, heart, and base naturally",
      "Classic Yankee large jar delivers strong cold and hot throw",
      "Universally appealing profile suits shared living spaces",
    ],
    cons: [
      "Paraffin wax base is not a natural or clean-burn option",
      "Multi-note blend leaves less room to layer additional fragrances on top",
    ],
    bestFor: "Long-duration ambiance in living rooms",
    summary:
      "Pink Sands is a Yankee classic for good reason: its soft citrus-vanilla arc spans all three fragrance layers in a single burn, making it one of the most forgiving candles for scent layering beginners working out which elements to add.",
  },
  {
    id: "candle-4",
    name: "Capri Blue Volcano Scented Candle, Soy Wax Blend, 19 oz",
    asin: "B000YBFJQU",
    affiliateUrl: amazonUrl("B000YBFJQU"),
    imageUrl: "https://m.media-amazon.com/images/I/61OaZLhib8L._AC_SL1500_.jpg",
    category: "candles",
    scentNotes: ["tropical fruits", "sugared citrus", "mountain fresh"],
    noteType: "top",
    mood: ["Fresh", "Energizing"],
    room: ["Living Room", "Bathroom"],
    pros: [
      "Volcano is one of the most-recognized signature home fragrance profiles",
      "19-oz soy wax blend provides a cleaner burn than pure paraffin",
      "Bright tropical-citrus top note layers over virtually any base or heart candle",
      "Cobalt blue vessel is a decorative statement beyond its burn life",
    ],
    cons: [
      "Distinctive scent may divide opinion — strongly associated with Anthropologie",
      "Premium price point relative to burn time",
    ],
    bestFor: "Bright citrus top-note layering in living areas",
    summary:
      "Capri Blue Volcano has become a cultural shorthand for sophisticated home fragrance. Its bright, tropical-citrus explosion works best as the energetic top note in a stack anchored by a deeper wood or vanilla base candle.",
  },
  {
    id: "candle-5",
    name: "Lulu Candles Jasmine, Oud & Sandalwood Luxury Soy Jar Candle, 9 oz",
    asin: "B07J5S5Z9D",
    affiliateUrl: amazonUrl("B07J5S5Z9D"),
    imageUrl: "https://m.media-amazon.com/images/I/71ZxUIQ7SUL._AC_SL1500_.jpg",
    category: "candles",
    scentNotes: ["jasmine", "oud", "sandalwood", "warm resin"],
    noteType: "base",
    mood: ["Romantic", "Cozy"],
    room: ["Bedroom", "Living Room"],
    pros: [
      "Jasmine-oud-sandalwood trio covers all three fragrance pyramid levels",
      "Soy wax blend burns cleaner than paraffin with a steady, even pool",
      "Oud and sandalwood base notes project for hours after the initial burn",
      "Compact 9-oz jar is well-suited to bedside tables and powder rooms",
    ],
    cons: [
      "Oud is a polarizing note — distinctive and persistent in small rooms",
      "Smaller jar size means more frequent replacement than 19-oz alternatives",
    ],
    bestFor: "Romantic evening atmosphere with Oriental base notes",
    summary:
      "Lulu's Jasmine, Oud & Sandalwood candle delivers a complete Oriental fragrance pyramid from a single jar. Its deep, resinous base makes it an ideal anchor for layering lighter floral diffuser oils above it in the evening.",
  },

  // ── ESSENTIAL OILS ─────────────────────────────────────────────────────────
  {
    id: "oil-1",
    name: "Majestic Pure Lavender Essential Oil, 100% Pure and Natural, 4 Fl Oz",
    asin: "B00TSTZQEY",
    affiliateUrl: amazonUrl("B00TSTZQEY"),
    imageUrl: "https://m.media-amazon.com/images/I/51IUL1Sw8JL._AC_SL1015_.jpg",
    category: "essential-oils",
    scentNotes: ["lavender", "floral", "herbal"],
    noteType: "middle",
    mood: ["Calm", "Romantic"],
    room: ["Bedroom", "Bathroom"],
    pros: [
      "4 fl oz bottle provides months of daily diffuser use at an accessible price",
      "100% pure lavender with no carrier oil dilution or synthetic additives",
      "Versatile heart note that bridges citrus tops and woody bases effortlessly",
      "Amber glass bottle preserves oil quality over extended shelf life",
    ],
    cons: [
      "Single-note oil — requires pairing with other oils for a complete fragrance pyramid",
      "Bulgarian versus French lavender distinction is not specified on label",
    ],
    bestFor: "Daily lavender heart-note diffusing in bedrooms",
    summary:
      "Majestic Pure's lavender oil delivers the most used heart note in home fragrance at a scale that makes daily diffusing practical. A single 4 fl oz bottle provides enough oil to anchor your bedroom scent routine for several months.",
  },
  {
    id: "oil-2",
    name: "Handcraft Blends Eucalyptus Essential Oil, 100% Pure and Natural, 4 Fl Oz",
    asin: "B0757Y3MF9",
    affiliateUrl: amazonUrl("B0757Y3MF9"),
    imageUrl: "https://m.media-amazon.com/images/I/71p9Uj1mjtL._AC_SL1500_.jpg",
    category: "essential-oils",
    scentNotes: ["eucalyptus", "camphor", "cool herbal"],
    noteType: "top",
    mood: ["Fresh", "Energizing"],
    room: ["Bathroom", "Office", "Living Room"],
    pros: [
      "Sharp eucalyptus top note cuts through heavier base and heart notes cleanly",
      "100% pure without dilution — full aromatic intensity for diffuser blending",
      "4 fl oz gives excellent economy for a high-use fresh-air top note",
      "Therapeutic-grade sourcing with consistent quality across batches",
    ],
    cons: [
      "Medicinal camphor character can dominate if overdosed in a blend",
      "Single note — pairs best with lavender or mint heart notes for balance",
    ],
    bestFor: "Fresh, spa-like top-note layering in bathrooms",
    summary:
      "Handcraft's eucalyptus oil is the clean-air top note that transforms a bathroom or home office into a focused, invigorating space. Its sharp clarity layers over softer lavender or chamomile heart notes without conflict.",
  },
  {
    id: "oil-3",
    name: "Lagunamoon Essential Oils Gift Set Top 10 Blends for Diffusers",
    asin: "B06XRPG669",
    affiliateUrl: amazonUrl("B06XRPG669"),
    imageUrl: "https://m.media-amazon.com/images/I/81M9qtL4amL._SL1500_.jpg",
    category: "essential-oils",
    scentNotes: ["lavender", "peppermint", "eucalyptus", "lemon", "orange", "tea tree"],
    noteType: "all",
    mood: ["Fresh", "Calm", "Energizing"],
    room: ["Living Room", "Bathroom", "Office"],
    pros: [
      "Ten blended oils provide a ready-to-use layering palette from day one",
      "Pre-blended combinations remove the guesswork from proportion balancing",
      "Covers fresh, floral, woody, and herbal scent families across the set",
      "Gift-ready packaging makes this a straightforward introduction to diffusing",
    ],
    cons: [
      "Blends rather than single-note oils limit customization of individual ratios",
      "Not all bottles specify GC/MS batch testing documentation",
    ],
    bestFor: "Beginners building their first diffuser oil palette",
    summary:
      "Lagunamoon's 10-blend set removes the most common beginner obstacle — not knowing where to start. Each pre-blended oil delivers a coherent fragrance from first use, making this the most accessible entry point into diffuser-based scent layering.",
  },
  {
    id: "oil-4",
    name: "Wtrcsv Essential Oils Set Top 15 Scents for Diffuser, 5ml each",
    asin: "B0F18RY1FR",
    affiliateUrl: amazonUrl("B0F18RY1FR"),
    imageUrl: "https://m.media-amazon.com/images/I/81tKmviuaOL._AC_SL1500_.jpg",
    category: "essential-oils",
    scentNotes: ["lavender", "peppermint", "eucalyptus", "lemon", "cedarwood", "frankincense"],
    noteType: "all",
    mood: ["Fresh", "Calm", "Cozy", "Energizing"],
    room: ["Living Room", "Bedroom", "Office", "Bathroom"],
    pros: [
      "15 individual oils span all three pyramid levels for complete layering flexibility",
      "Includes woody and resinous base notes — cedarwood and frankincense — often absent in beginner sets",
      "5 ml per bottle is the right volume for experimentation without commitment",
      "Wide scent family coverage allows room-specific fragrance customization",
    ],
    cons: [
      "5 ml bottles deplete quickly for any oil that becomes a daily go-to",
      "GC/MS testing documentation not prominently featured",
    ],
    bestFor: "Intermediate layerers building a room-by-room palette",
    summary:
      "The Wtrcsv 15-set is the natural step up from single-brand starter kits. With cedarwood and frankincense sitting alongside the usual citrus and lavender, you gain the base notes that make sophisticated room-by-room customization genuinely possible.",
  },
  {
    id: "oil-5",
    name: "ASAKUKI Essential Oils Well-Being Kit, 6 Blends x 10ml",
    asin: "B09CGZC3PW",
    affiliateUrl: amazonUrl("B09CGZC3PW"),
    imageUrl: "https://m.media-amazon.com/images/I/81hvsmGRsTL._AC_SL1500_.jpg",
    category: "essential-oils",
    scentNotes: ["lavender", "eucalyptus", "peppermint", "lemon", "bergamot", "frankincense"],
    noteType: "all",
    mood: ["Calm", "Fresh", "Energizing"],
    room: ["Bedroom", "Living Room", "Bathroom"],
    pros: [
      "Six purpose-built wellness blends cover sleep, focus, energy, and calm",
      "10 ml per bottle is generous for regular diffuser use",
      "ASAKUKI's blends are formulated to work directly in their diffusers",
      "Well-being focus means each blend is designed for a specific atmosphere",
    ],
    cons: [
      "Blended oils cannot be adjusted note-by-note once the formula is fixed",
      "Wellness-oriented profiles may not satisfy those seeking purely decorative fragrance",
    ],
    bestFor: "Mood-specific scent layering by room function",
    summary:
      "ASAKUKI's Well-Being Kit is organized around outcomes rather than ingredients — each blend is calibrated for a specific atmosphere. This makes it straightforward to match the right oil to your bedroom wind-down, morning focus, or midday reset routine.",
  },

  // ── REED DIFFUSERS ─────────────────────────────────────────────────────────
  {
    id: "reed-1",
    name: "Cocorrína Reed Diffuser Set, Clean Linen, 6.7 fl oz with Sticks",
    asin: "B0B24QJ217",
    affiliateUrl: amazonUrl("B0B24QJ217"),
    imageUrl: "https://m.media-amazon.com/images/I/71G8H9JSwXL._AC_SL1500_.jpg",
    category: "reed-diffusers",
    scentNotes: ["clean linen", "light floral", "soft musk"],
    noteType: "top",
    mood: ["Fresh", "Calm"],
    room: ["Bedroom", "Bathroom", "Office"],
    pros: [
      "6.7 fl oz volume delivers 60–90 days of passive fragrance",
      "Clean Linen scent provides a neutral, universally pleasing top note",
      "Natural rattan reeds wick oil consistently without synthetic fiber saturation",
      "Minimal glass bottle design suits any interior without competing for attention",
    ],
    cons: [
      "Clean Linen profile is deliberately understated — not suited to bold fragrance preferences",
      "Reed count moderate — flip more frequently for stronger output",
    ],
    bestFor: "Neutral passive top-note layering in bedrooms and offices",
    summary:
      "Cocorrína's Clean Linen set is the reed diffuser equivalent of a blank canvas — its neutral freshness layers under almost any candle or wax melt fragrance without conflict, making it an ideal passive anchor for a rotating layering stack.",
  },
  {
    id: "reed-2",
    name: "Airkeep Reed Diffuser Set, Clean Linen, 3.38 fl oz with 8 Reed Sticks",
    asin: "B0CMQRVRFF",
    affiliateUrl: amazonUrl("B0CMQRVRFF"),
    imageUrl: "https://m.media-amazon.com/images/I/71IZ+rdkUiL._AC_SL1500_.jpg",
    category: "reed-diffusers",
    scentNotes: ["clean linen", "aquatic", "light musk"],
    noteType: "top",
    mood: ["Fresh", "Calm"],
    room: ["Bathroom", "Bedroom", "Office"],
    pros: [
      "Compact 3.38 fl oz size is well-suited to smaller rooms and powder rooms",
      "Eight reed sticks allow output intensity adjustment",
      "Clean Linen scent reads as fresh without being sharp or medicinal",
      "Affordable entry point for multi-room passive scenting",
    ],
    cons: [
      "Smaller volume means shorter lifespan than larger competing sets",
      "Aquatic freshness may not layer cleanly with heavier floral or woody candles",
    ],
    bestFor: "Small-space fresh-air layering on a budget",
    summary:
      "The Airkeep Clean Linen set is a practical multi-room solution — its compact size and accessible price make it easy to place one in every bathroom or guest room, creating a consistent fresh baseline throughout the home.",
  },
  {
    id: "reed-3",
    name: "COCODOR Flower Reed Diffuser Set, White Jasmine, 6.7 oz",
    asin: "B0848JGM78",
    affiliateUrl: amazonUrl("B0848JGM78"),
    imageUrl: "https://m.media-amazon.com/images/I/61h2tXuDjjL._AC_SL1000_.jpg",
    category: "reed-diffusers",
    scentNotes: ["white jasmine", "light floral", "soft musk"],
    noteType: "middle",
    mood: ["Romantic", "Calm"],
    room: ["Bedroom", "Living Room", "Bathroom"],
    pros: [
      "Dried flower decoration elevates the vessel into a genuine decorative piece",
      "White Jasmine heart note bridges citrus tops and woody bases beautifully",
      "6.7 oz volume provides reliable 60–90 day fragrance output",
      "Jasmine profile is consistently romantic without being heavy",
    ],
    cons: [
      "Dried flower decoration can collect dust over a multi-month lifespan",
      "Jasmine is a strong, distinctive note — not universally preferred",
    ],
    bestFor: "Romantic heart-note layering with decorative appeal",
    summary:
      "COCODOR's White Jasmine set is as much a floral arrangement as a fragrance tool. Its jasmine heart note works as a natural bridge between fresh citrus diffusers and warm sandalwood or vanilla candles running alongside it.",
  },
  {
    id: "reed-4",
    name: "Xcleen Reed Diffuser Set, Hyacinth Peony & Citrus, 3.7 oz",
    asin: "B09SFZJM67",
    affiliateUrl: amazonUrl("B09SFZJM67"),
    imageUrl: "https://m.media-amazon.com/images/I/81gDG50Q6eL._AC_SL1500_.jpg",
    category: "reed-diffusers",
    scentNotes: ["hyacinth", "peony", "citrus", "light green"],
    noteType: "top",
    mood: ["Fresh", "Energizing", "Romantic"],
    room: ["Living Room", "Bathroom", "Office"],
    pros: [
      "Hyacinth-peony combination is an underused and distinctive floral top note",
      "Citrus accent keeps the floral from feeling heavy or overpowering",
      "Compact 3.7 oz size fits easily on shelves and bathroom counters",
      "Spring-fresh profile works year-round as a contrast to warm base candles",
    ],
    cons: [
      "Hyacinth is a bold, distinctive note not suited to minimalist fragrance preferences",
      "Shorter lifespan than 6.7 oz alternatives at this price tier",
    ],
    bestFor: "Spring-fresh floral top notes in living rooms and baths",
    summary:
      "Xcleen's Hyacinth Peony set brings an unusual floral angle to reed diffusing — the hyacinth note is fresh and distinctive in a way that generic clean-linen alternatives cannot match. It layers naturally over warm woody or amber candle bases.",
  },
  {
    id: "reed-5",
    name: "WEALD TRIBE Flower Reed Diffuser, Eucalyptus & Lavender, 4.0 fl oz",
    asin: "B0BHWC6N41",
    affiliateUrl: amazonUrl("B0BHWC6N41"),
    imageUrl: "https://m.media-amazon.com/images/I/8117+GbraCL._AC_SL1500_.jpg",
    category: "reed-diffusers",
    scentNotes: ["eucalyptus", "lavender", "herbal", "soft floral"],
    noteType: "middle",
    mood: ["Calm", "Fresh"],
    room: ["Bedroom", "Bathroom"],
    pros: [
      "Eucalyptus-lavender combination spans fresh top and floral heart simultaneously",
      "Botanical pressed flower decoration integrates with natural home aesthetics",
      "Herbal freshness makes it one of the most versatile passive layering tools",
      "4 fl oz provides a full 30–60 days of consistent fragrance",
    ],
    cons: [
      "Floral decoration may not suit minimalist interiors",
      "Herbal profile is subtle — may be overwhelmed next to very strong candles",
    ],
    bestFor: "Herbal calm layering in bedrooms and wellness spaces",
    summary:
      "WEALD TRIBE's eucalyptus-lavender diffuser handles two pyramid levels in one passive vessel — the eucalyptus brings fresh top-note clarity while the lavender settles into a calming heart note. It is the most self-sufficient reed diffuser in this group.",
  },

  // ── WAX MELTS ──────────────────────────────────────────────────────────────
  {
    id: "wax-1",
    name: "Innqoo Candle Warmer Lamp with Timer, Dimmable, Height Adjustable",
    asin: "B0DZFGTCLR",
    affiliateUrl: amazonUrl("B0DZFGTCLR"),
    imageUrl: "https://m.media-amazon.com/images/I/71t96oyL+UL._AC_SL1500_.jpg",
    category: "wax-melts",
    scentNotes: [],
    noteType: "all",
    mood: ["Cozy", "Calm", "Romantic", "Fresh", "Energizing"],
    room: ["Living Room", "Bedroom", "Bathroom", "Office"],
    pros: [
      "Built-in timer eliminates the need for a smart plug or manual shutoff",
      "Dimmable lamp head doubles as ambient accent lighting",
      "Height-adjustable arm accommodates candles of different jar heights",
      "Flameless operation is completely safe around children and pets",
    ],
    cons: [
      "Lamp-style warming takes longer to release fragrance than direct-heat warmers",
      "Height adjustment mechanism requires occasional tightening with use",
    ],
    bestFor: "Flameless candle warming with built-in lighting and timer",
    summary:
      "The Innqoo warmer lamp solves the two main inconveniences of candle use — open flame and forgetting to extinguish. Its timer and dimmer make it practical for bedside use, and the height adjustment means virtually any candle jar becomes compatible.",
  },
  {
    id: "wax-2",
    name: "GODONLIF Candle Warmer Lamp with Cycle Timer, 2 Bulbs Included",
    asin: "B0CTJGJL2T",
    affiliateUrl: amazonUrl("B0CTJGJL2T"),
    imageUrl: "https://m.media-amazon.com/images/I/810vcJJDrkL._AC_SL1500_.jpg",
    category: "wax-melts",
    scentNotes: [],
    noteType: "all",
    mood: ["Cozy", "Calm", "Romantic"],
    room: ["Living Room", "Bedroom"],
    pros: [
      "Cycle timer automates on/off intervals without a separate smart plug",
      "Two bulbs included — spare means no downtime when the first burns out",
      "Dimmable light output adjusts to suit morning or evening ambiance",
      "Adjustable arm fits standard to large candle jar heights",
    ],
    cons: [
      "Cycle timer intervals are preset — not fully custom",
      "Lamp-style warming is less intense than direct plate warmers",
    ],
    bestFor: "Automated candle warming with preset cycle intervals",
    summary:
      "GODONLIF's cycle timer warmer is the set-and-forget option for candle enthusiasts. The automated intervals keep fragrance output consistent without constant attention, and the bundled spare bulb prevents the frustration of mid-session downtime.",
  },
  {
    id: "wax-3",
    name: "CRMILL Candle Warmer Lamp Electric Timer, Dimmable, No Flame",
    asin: "B0DT9QTQ4S",
    affiliateUrl: amazonUrl("B0DT9QTQ4S"),
    imageUrl: "https://m.media-amazon.com/images/I/71CWAp0NCzL._AC_SL1500_.jpg",
    category: "wax-melts",
    scentNotes: [],
    noteType: "all",
    mood: ["Cozy", "Calm", "Fresh", "Romantic", "Energizing"],
    room: ["Living Room", "Bedroom", "Bathroom", "Office"],
    pros: [
      "Electric timer with programmable settings removes the guesswork from fragrance scheduling",
      "Dimmable bulb works as standalone ambient lighting without a candle",
      "No-flame design eliminates open-fire risk in any room",
      "Clean, minimal lamp aesthetic integrates with modern and Scandinavian interiors",
    ],
    cons: [
      "Timer programming interface requires initial setup patience",
      "Only suited for standard-neck jar candles — wide-mouth jars may not heat evenly",
    ],
    bestFor: "Programmable flameless candle warming in modern interiors",
    summary:
      "The CRMILL warmer lamp brings programmable precision to candle fragrance — its electric timer lets you schedule exactly when your space should begin filling with scent, whether that is thirty minutes before waking or just before guests arrive.",
  },
  {
    id: "wax-4",
    name: "UCC Plant Based Natural Wax Melts, Strong Fragrance, 4 Pack",
    asin: "B0D8NQ5161",
    affiliateUrl: amazonUrl("B0D8NQ5161"),
    imageUrl: "https://m.media-amazon.com/images/I/71PEasg9hZL._AC_SL1200_.jpg",
    category: "wax-melts",
    scentNotes: ["botanical blend", "natural fragrance"],
    noteType: "all",
    mood: ["Fresh", "Calm", "Cozy"],
    room: ["Living Room", "Bedroom", "Bathroom"],
    pros: [
      "Plant-based wax formula burns cleaner than standard paraffin alternatives",
      "Strong fragrance load per cube delivers noticeable throw in medium-size rooms",
      "Four-pack variety allows testing multiple scents before committing",
      "Natural ingredient focus suits homes avoiding synthetic fragrance compounds",
    ],
    cons: [
      "Plant-based formulas typically cost more per cube than paraffin equivalents",
      "Individual scent descriptions not always detailed on packaging",
    ],
    bestFor: "Natural wax melt layering for health-conscious homes",
    summary:
      "UCC's plant-based wax melts bring a cleaner ingredient philosophy to the wax melt category. The strong fragrance load means you do not need to compensate for the absence of paraffin with extra cubes — one is sufficient to fill a standard room.",
  },
  {
    id: "wax-5",
    name: "Yankee Candle Midsummer's Night Wax Melts, Pack of 18",
    asin: "B08XKLNDTC",
    affiliateUrl: amazonUrl("B08XKLNDTC"),
    imageUrl: "https://m.media-amazon.com/images/I/71B-nRnjTYL._AC_SL1500_.jpg",
    category: "wax-melts",
    scentNotes: ["dark musk", "sandalwood", "mahogany", "midnight woods"],
    noteType: "base",
    mood: ["Cozy", "Romantic"],
    room: ["Living Room", "Bedroom"],
    pros: [
      "Pack of 18 provides extended supply at a practical per-cube value",
      "Midsummer's Night deep musk and wood profile is a proven masculine base note",
      "Yankee formulation delivers consistent hot throw across the full pack",
      "Dark, complex base works exceptionally well under lighter floral or herbal top notes",
    ],
    cons: [
      "Bold dark-musk profile is not suited to fresh or clean layering stacks",
      "Paraffin base is not the cleanest-burning wax format available",
    ],
    bestFor: "Deep base-note layering in evening and bedroom settings",
    summary:
      "Yankee's Midsummer's Night is one of the most effective dark-base wax melts available at a mainstream price. Its sandalwood and mahogany core makes it an outstanding foundation for layering lighter lavender, jasmine, or citrus elements above it.",
  },
];

// Aroma Builder recommendation mapping
export type BuilderSelection = {
  mood: string;
  room: string;
};

export type RecommendedStack = {
  top: Product;
  middle: Product;
  base: Product;
  description: string;
};

export function getBuilderRecommendation(
  mood: string,
  room: string
): RecommendedStack {
  const recommendations: Record<string, Record<string, RecommendedStack>> = {
    Cozy: {
      "Living Room": {
        top: products.find((p) => p.id === "wax-1")!,
        middle: products.find((p) => p.id === "candle-2")!,
        base: products.find((p) => p.id === "candle-4")!,
        description:
          "Layer warm apple and cinnamon wax melts as your top note, lavender candle in the middle, and WoodWick Fireside as the deep amber base for the ultimate autumn living room.",
      },
      Bedroom: {
        top: products.find((p) => p.id === "oil-4")!,
        middle: products.find((p) => p.id === "candle-2")!,
        base: products.find((p) => p.id === "candle-1")!,
        description:
          "Diffuse lavender essential oil as your airy top note over a lavender soy candle heart, with vanilla cupcake anchoring the warm, sleep-ready base.",
      },
      Bathroom: {
        top: products.find((p) => p.id === "reed-5")!,
        middle: products.find((p) => p.id === "wax-3")!,
        base: products.find((p) => p.id === "candle-5")!,
        description:
          "A passive lavender reed diffuser supplies continuous top notes; chamomile wax melts add a warm heart; Voluspa's coconut wax candle grounds the stack with cade wood.",
      },
      Office: {
        top: products.find((p) => p.id === "oil-1")!,
        middle: products.find((p) => p.id === "reed-1")!,
        base: products.find((p) => p.id === "candle-2")!,
        description:
          "Diffuse lemon essential oil for mental clarity up top, let the eucalyptus reed diffuser carry the heart, and a lavender candle keeps the base calming without distraction.",
      },
    },
    Fresh: {
      "Living Room": {
        top: products.find((p) => p.id === "wax-2")!,
        middle: products.find((p) => p.id === "reed-2")!,
        base: products.find((p) => p.id === "candle-3")!,
        description:
          "Lemongrass wax melts burst as the bright top note, NEST Bamboo reed diffuser holds the airy heart, and HOMESICK NYC candle provides the clean cedar base.",
      },
      Bedroom: {
        top: products.find((p) => p.id === "oil-1")!,
        middle: products.find((p) => p.id === "reed-4")!,
        base: products.find((p) => p.id === "candle-3")!,
        description:
          "A eucalyptus diffuser opens the top with freshness, Vitruvi stone diffuser runs bergamot in the heart, and the cedar note from HOMESICK NYC anchors the base.",
      },
      Bathroom: {
        top: products.find((p) => p.id === "wax-5")!,
        middle: products.find((p) => p.id === "reed-1")!,
        base: products.find((p) => p.id === "candle-3")!,
        description:
          "Clean linen wax melts reset the air, eucalyptus reed diffuser carries the spa-like heart, and HOMESICK NYC provides a woody finish.",
      },
      Office: {
        top: products.find((p) => p.id === "wax-2")!,
        middle: products.find((p) => p.id === "diffuser-2")!,
        base: products.find((p) => p.id === "reed-2")!,
        description:
          "Lemongrass melts brighten the top, the InnoGear diffuser runs peppermint through the midday, and NEST Bamboo provides the clean, grounding base all afternoon.",
      },
    },
    Romantic: {
      "Living Room": {
        top: products.find((p) => p.id === "oil-3")!,
        middle: products.find((p) => p.id === "candle-5")!,
        base: products.find((p) => p.id === "reed-3")!,
        description:
          "Geranium and bergamot essential oils open with floral complexity, Voluspa cade wood provides the heart, and Ellia Balance's sandalwood runs as a warm, lasting base.",
      },
      Bedroom: {
        top: products.find((p) => p.id === "oil-3")!,
        middle: products.find((p) => p.id === "candle-5")!,
        base: products.find((p) => p.id === "candle-4")!,
        description:
          "Bergamot and geranium drift as top notes from the diffuser, Voluspa lavender cade holds the romantic heart, and WoodWick Fireside sets the deep amber base.",
      },
      Bathroom: {
        top: products.find((p) => p.id === "oil-3")!,
        middle: products.find((p) => p.id === "reed-3")!,
        base: products.find((p) => p.id === "candle-5")!,
        description:
          "Grapefruit and jasmine oils open brightly, Ellia Balance holds jasmine-sandalwood in the heart, and Voluspa Cade wraps the space in warm wood.",
      },
      Office: {
        top: products.find((p) => p.id === "oil-3")!,
        middle: products.find((p) => p.id === "reed-3")!,
        base: products.find((p) => p.id === "candle-2")!,
        description:
          "Bergamot opens the top note, jasmine holds the romantic heart via the reed diffuser, and a soft lavender candle base keeps the environment professional yet warm.",
      },
    },
    Energizing: {
      "Living Room": {
        top: products.find((p) => p.id === "wax-2")!,
        middle: products.find((p) => p.id === "oil-3")!,
        base: products.find((p) => p.id === "reed-2")!,
        description:
          "Lemongrass wax melts deliver an invigorating citrus top, grapefruit essential oil carries the heart, and NEST Bamboo grounds the stack with a clean, airy base.",
      },
      Bedroom: {
        top: products.find((p) => p.id === "oil-1")!,
        middle: products.find((p) => p.id === "diffuser-4")!,
        base: products.find((p) => p.id === "reed-2")!,
        description:
          "Lemon and peppermint essential oils wake you up from the top, nebulizing diffuser runs eucalyptus at full intensity through the heart, bamboo reed holds the clean base.",
      },
      Bathroom: {
        top: products.find((p) => p.id === "wax-5")!,
        middle: products.find((p) => p.id === "oil-1")!,
        base: products.find((p) => p.id === "reed-4")!,
        description:
          "Clean linen wax melts open the space, peppermint and lemon essential oils sharpen the heart note, and Vitruvi's botanical reed diffuser grounds the base.",
      },
      Office: {
        top: products.find((p) => p.id === "oil-1")!,
        middle: products.find((p) => p.id === "diffuser-4")!,
        base: products.find((p) => p.id === "reed-2")!,
        description:
          "Citrus oils open focus at the top of your desk stack, the nebulizing diffuser delivers peppermint at full strength through the work hours, bamboo reed provides the calm foundation.",
      },
    },
    Calm: {
      "Living Room": {
        top: products.find((p) => p.id === "oil-4")!,
        middle: products.find((p) => p.id === "reed-1")!,
        base: products.find((p) => p.id === "candle-2")!,
        description:
          "Lavender diffuses as the top note, the eucalyptus reed diffuser supplies a cool herbal heart, and the lavender soy candle anchors everything in a unified calming base.",
      },
      Bedroom: {
        top: products.find((p) => p.id === "oil-5")!,
        middle: products.find((p) => p.id === "wax-3")!,
        base: products.find((p) => p.id === "candle-2")!,
        description:
          "doTERRA's relaxation blend opens the top, chamomile wax melts carry the calming heart, and a clean-burning lavender soy candle settles the room for rest.",
      },
      Bathroom: {
        top: products.find((p) => p.id === "reed-5")!,
        middle: products.find((p) => p.id === "wax-3")!,
        base: products.find((p) => p.id === "candle-5")!,
        description:
          "Passive lavender reed diffuser holds the top note all day, chamomile wax melts add a bath-time heart, and Voluspa Cade & Lavender closes with a warm woody base.",
      },
      Office: {
        top: products.find((p) => p.id === "oil-4")!,
        middle: products.find((p) => p.id === "diffuser-1")!,
        base: products.find((p) => p.id === "reed-5")!,
        description:
          "Lavender essential oil diffuses at the top, the URPOWER diffuser cycles herbal middle notes throughout the day, and a passive lavender chamomile reed diffuser holds the base.",
      },
    },
  };

  // Fallback to a default stack if specific combination not found
  const moodRecs = recommendations[mood] || recommendations["Calm"];
  return (
    moodRecs[room] ||
    moodRecs["Living Room"] || {
      top: products.find((p) => p.id === "oil-1")!,
      middle: products.find((p) => p.id === "candle-2")!,
      base: products.find((p) => p.id === "reed-1")!,
      description:
        "A classic, versatile combination that works in any room: citrus top notes, lavender heart, and eucalyptus base.",
    }
  );
}
