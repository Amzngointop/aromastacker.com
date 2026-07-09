import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Leaf,
  FlaskConical,
  Shield,
  Home,
  Moon,
  Droplets,
  Monitor,
  Layers,
  Heart,
  Wind,
  Package,
  Sparkles,
  Check,
  Sun,
  Snowflake,
  TreePine,
  ChevronRight,
  Star,
} from "lucide-react";
import { site, articleList } from "@/data/site";
import { articles } from "@/data/articles";
import { products } from "@/data/products";
import AromaBuilder from "@/components/AromaBuilder";
import ScentSpotlight from "@/components/ScentSpotlight";
import NewsletterForm from "@/components/NewsletterForm";
import AromaPyramid from "@/components/AromaPyramid";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: site.url },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    type: "website",
  },
};

// ─── Static data ─────────────────────────────────────────────────────────────

const articleCategories = [
  "Diffusers",
  "Candles",
  "Essential Oils",
  "Reed Diffusers",
  "Wax Melts",
  "Plug-Ins",
];

const categoryLabels: Record<string, string> = {
  "best-scent-diffusers": "Diffuser",
  "best-scented-candles": "Candle",
  "best-essential-oil-sets": "Essential Oil",
  "best-reed-diffusers": "Reed Diffuser",
  "best-wax-melts-warmers": "Wax Melt",
  "best-plug-in-air-fresheners": "Plug-In",
};

const topProducts = [
  "best-scent-diffusers",
  "best-scented-candles",
  "best-essential-oil-sets",
  "best-reed-diffusers",
  "best-wax-melts-warmers",
  "best-plug-in-air-fresheners",
].map((slug) => {
  const article = articles.find((a) => a.slug === slug)!;
  const product = products.find((p) => p.id === article.productIds[0])!;
  return { slug, category: categoryLabels[slug], product };
});

const roomCards = [
  {
    icon: <Home size={22} className="text-forest" />,
    room: "Living Room",
    profile: "Welcoming, complex, social",
    products: ["Reed diffuser (base)", "Soy candle (heart)", "Oil diffuser (top)"],
    combos: ["Cedar + Vanilla", "Bergamot + Lavender", "Citrus + Amber"],
    body: "The living room carries the most scent traffic in any home — guests encounter it first, and it runs longest. Aim for a medium-intensity base note from a passive reed diffuser, a warm-scented candle for heart-note presence, and a diffuser you can switch on when company arrives.",
  },
  {
    icon: <Moon size={22} className="text-forest" />,
    room: "Bedroom",
    profile: "Calming, sensual, sleep-ready",
    products: ["Long-burn candle (base)", "Reed diffuser (heart)", "Wax melt (accent)"],
    combos: ["Sandalwood + Lavender", "Vanilla + Chamomile", "Rose + Musk"],
    body: "The bedroom demands restraint — heavy throw can disrupt sleep rather than enhance it. Choose base notes from the musk and sandalwood family, pair them with lavender or chamomile at the heart level, and use a wax melt as a light evening accent you can stop before bed.",
  },
  {
    icon: <Droplets size={22} className="text-forest" />,
    room: "Bathroom",
    profile: "Fresh, clean, spa-like",
    products: ["Reed diffuser (base)", "Wax melt (heart)", "Oil diffuser (top)"],
    combos: ["Eucalyptus + Mint", "White Tea + Lemon", "Sea Salt + Bergamot"],
    body: "Bathrooms benefit most from fresh, aquatic, and herbal fragrance families — scents that reinforce cleanliness rather than contrast with it. A passive reed diffuser handles the baseline; a wax melt or oil diffuser during shower time adds the active top-note punch that makes the space feel like a spa.",
  },
  {
    icon: <Monitor size={22} className="text-forest" />,
    room: "Home Office",
    profile: "Focused, energising, productive",
    products: ["Reed diffuser (base)", "Oil diffuser (heart)", "Single oil (top)"],
    combos: ["Rosemary + Lemon", "Peppermint + Cedar", "Bergamot + Lavender"],
    body: "Home offices require scent profiles that sharpen cognition without creating distraction. Rosemary and lemon are the most widely studied for focus-enhancement; cedar and bamboo provide grounded base notes that promote sustained attention. Run your diffuser on a 30-minutes-on, 30-minutes-off timer to prevent olfactory fatigue during long sessions.",
  },
];

const seasons = [
  {
    icon: <Leaf size={20} className="text-green-600" />,
    name: "Spring",
    accent: "bg-green-50 border-green-200",
    notes: ["Jasmine", "Green Tea", "Lily", "Light Musk"],
    product: "Reed Diffuser",
    body: "As warmth returns, lean into fresh florals and green notes that feel newly alive — light enough for open windows.",
  },
  {
    icon: <Sun size={20} className="text-yellow-500" />,
    name: "Summer",
    accent: "bg-yellow-50 border-yellow-200",
    notes: ["Coconut", "Sea Breeze", "Lemon Verbena", "Aquatic Musk"],
    product: "Oil Diffuser",
    body: "High temperatures amplify every scent — keep stacks light, citrus-forward, and aquatic to complement warm air rather than overpower it.",
  },
  {
    icon: <TreePine size={20} className="text-orange-600" />,
    name: "Autumn",
    accent: "bg-orange-50 border-orange-200",
    notes: ["Apple", "Cinnamon", "Cedar", "Warm Amber"],
    product: "Soy Candle",
    body: "Rich, warm layering reaches its peak seasonal expression — base-heavy stacks anchored in amber, cedar, and spice feel perfectly seasonal.",
  },
  {
    icon: <Snowflake size={20} className="text-blue-500" />,
    name: "Winter",
    accent: "bg-blue-50 border-blue-200",
    notes: ["Fir Needle", "Clove", "Sandalwood", "Vanilla"],
    product: "Long-Burn Candle",
    body: "The coldest months suit the deepest, most complex base-heavy stacks — woody, resinous, and spiced profiles that make sealed rooms feel genuinely luxurious.",
  },
];

const glossaryTerms = [
  { term: "Top Notes", accent: "border-sage-light", def: "The first molecules you detect — bright and volatile, they evaporate within 15 to 30 minutes of diffusion. Citrus and herbal oils live here. In a stack, your oil diffuser carries the top." },
  { term: "Heart Notes", accent: "border-sage", def: "The structural core that defines the character of your scent stack. They emerge after top notes fade and persist for 30 minutes to two hours. Lavender, rose, and jasmine are classic hearts." },
  { term: "Base Notes", accent: "border-forest", def: "Heavy, slow-evaporating molecules that provide long-lasting depth and anchor the entire composition. Sandalwood, amber, vanilla, and musk are typical bases — they linger for hours." },
  { term: "Olfactory Fatigue", accent: "border-amber-400", def: "The temporary adaptation of your nose to a persistent scent — why a room can smell strongly to a guest but not to you after an hour. Rotate scents and air rooms to counter it." },
  { term: "Fragrance Throw", accent: "border-rose-400", def: "How far a scent projects from its source into the surrounding space. Cold throw is scent at room temperature; hot throw is the fragrance released during active burning or warming." },
  { term: "Sillage", accent: "border-purple-400", def: "From the French word for wake, sillage is the aromatic trail a scent leaves in the air as it disperses. A diffuser with excellent sillage fills a large room evenly from a single point source." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#3D5A47" }}
      >
        {/* Decorative SVG background */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 640"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path d="M0 380 Q360 300 720 380 Q1080 460 1440 380 L1440 640 L0 640 Z" fill="#A8B89A" fillOpacity="0.12" />
          <path d="M0 470 Q360 400 720 470 Q1080 540 1440 470 L1440 640 L0 640 Z" fill="#A8B89A" fillOpacity="0.07" />
          <ellipse cx="130" cy="110" rx="55" ry="26" transform="rotate(-35 130 110)" fill="#D4E6C3" fillOpacity="0.18" />
          <ellipse cx="85" cy="175" rx="38" ry="18" transform="rotate(-22 85 175)" fill="#A8B89A" fillOpacity="0.2" />
          <ellipse cx="1310" cy="90" rx="48" ry="23" transform="rotate(25 1310 90)" fill="#D4E6C3" fillOpacity="0.18" />
          <ellipse cx="1360" cy="155" rx="32" ry="16" transform="rotate(14 1360 155)" fill="#A8B89A" fillOpacity="0.2" />
          <ellipse cx="720" cy="55" rx="42" ry="20" transform="rotate(-8 720 55)" fill="#D4E6C3" fillOpacity="0.14" />
          <circle cx="260" cy="520" r="130" fill="#A8B89A" fillOpacity="0.05" />
          <circle cx="1180" cy="140" r="95" fill="#D4E6C3" fillOpacity="0.07" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-44">
          <div className="max-w-3xl">
            <p className="text-sage text-xs sm:text-sm font-bold uppercase tracking-widest mb-5">
              The Home Fragrance Layering Guide
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Layer Your Home.
              <br />
              <span style={{ color: "#D4E6C3" }}>Craft Your Scent.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-4">
              Scent layering is the art of combining multiple fragrance sources — diffusers, candles,
              reed diffusers, and wax melts — to create an atmosphere that feels intentional,
              complex, and uniquely yours.
            </p>
            <p className="text-base text-white/65 leading-relaxed max-w-xl mb-10">
              Just as perfumers compose top, heart, and base notes into a signature fragrance, you
              can build a living scent that opens differently in the morning, deepens through the
              afternoon, and settles into something unforgettable by evening.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <CTAButton href="/best/best-scent-diffusers" variant="white" className="text-base px-8 py-4 rounded-full">
                Build Your First Stack
                <ArrowRight size={18} />
              </CTAButton>
              <Link
                href="/best/best-essential-oil-sets"
                className="inline-flex items-center gap-2 text-base px-8 py-4 rounded-full font-body font-semibold transition-all duration-200 hover:scale-105 shadow-md bg-cream text-forest hover:bg-beige"
              >
                Explore All Guides
                <ChevronRight size={18} />
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 sm:gap-10 pt-6 border-t border-white/15">
              {[
                ["25+", "Products Reviewed"],
                ["5", "Expert Guides"],
                ["10,000+", "Scent Stacks Built"],
              ].map(([num, label]) => (
                <div key={label}>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-white">{num}</p>
                  <p className="text-xs text-white/55 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1b — SCENT SPOTLIGHT
      ══════════════════════════════════════════════════════════════════════ */}
      <ScentSpotlight items={topProducts} />

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 — WHAT IS SCENT LAYERING
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#FAF7F2" }} className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* Editorial copy */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-sage mb-4">
                The Concept
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-8 leading-tight">
                What Is Scent Layering?
              </h2>
              <div className="space-y-5 text-gray-700 text-base leading-relaxed">
                <p>
                  Scent layering is the practice of combining multiple fragrance sources — each operating at
                  a different level of the olfactory pyramid — to create a home atmosphere that feels
                  composed rather than accidental. The concept is borrowed directly from fine perfumery,
                  where perfumers have spent centuries constructing multi-note compositions designed to
                  evolve over time: bright and volatile top notes that greet you first, warm heart notes
                  that define the character of the fragrance, and deep base notes that linger and anchor
                  the whole composition for hours or even days.
                </p>
                <p>
                  In a home context, different fragrance formats naturally occupy different levels of that
                  pyramid. An essential oil diffuser, because you control when it runs, is ideal for top
                  notes — bright citrus, fresh mint, invigorating eucalyptus. A long-burning soy candle
                  sits perfectly in the heart note position, releasing its fragrance steadily over several
                  hours. A reed diffuser, entirely passive and always-on, serves as the base note anchor:
                  musky, woody, resinous, or sweetly vanillic, it provides the invisible foundation that
                  every other scent element builds upon.
                </p>
                <p>
                  The reason layering produces such dramatically better results than a single scented
                  product is the same reason a single instrument cannot match an orchestra. A candle that
                  smells of lavender is pleasant. A room where a sandalwood reed diffuser runs quietly in
                  the background while a lavender candle burns in the foreground and an oil diffuser cycles
                  brief bursts of bergamot has depth, texture, and movement. It smells designed. Visitors
                  notice — even if they cannot articulate exactly why — that the room feels different from
                  any other room they have been in.
                </p>
                <p>
                  The practical implication is that you do not need to buy expensive products to layer
                  effectively. What you need is an understanding of which notes work together, which formats
                  carry which levels of the pyramid, and how to calibrate intensity so that none of your
                  sources overpowers the others. The guides and tools on this site are designed to give you
                  exactly that understanding, applied to the specific rooms in your home.
                </p>
              </div>

              {/* Comparison table */}
              <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: "#3D5A47" }}>
                      <th className="text-left px-5 py-3.5 font-body font-semibold text-white/80 text-xs uppercase tracking-wide">
                        Dimension
                      </th>
                      <th className="text-left px-5 py-3.5 font-body font-semibold text-white text-xs uppercase tracking-wide">
                        Single Scent
                      </th>
                      <th className="text-left px-5 py-3.5 font-body font-semibold text-white text-xs uppercase tracking-wide">
                        Layered Stack
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Complexity", "Flat, one-dimensional", "Rich, multi-dimensional depth"],
                      ["Evolution", "Same from first to last hour", "Unfolds and changes over time"],
                      ["Persistence", "Fades as one note dissipates", "Layered notes persist at different rates"],
                      ["Customisation", "Fixed — buy what you get", "Fully adjustable — mix and match"],
                      ["Atmosphere", "Decorative accent", "Immersive, designed environment"],
                    ].map(([dim, single, stack], i) => (
                      <tr key={dim} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                        <td className="px-5 py-3.5 font-semibold text-charcoal text-xs">{dim}</td>
                        <td className="px-5 py-3.5 text-gray-500">{single}</td>
                        <td className="px-5 py-3.5 text-forest font-medium">{stack}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pyramid */}
            <div className="lg:sticky lg:top-24">
              <p className="text-xs font-bold uppercase tracking-widest text-sage mb-6 text-center lg:text-left">
                The Fragrance Pyramid
              </p>
              <AromaPyramid />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3 — HOW IT WORKS (3-step process)
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#E8E0D0" }} className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-sage mb-4">
              The Process
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-5">
              How Scent Layering Works
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Building a scent stack follows the same three-step structure that professional perfumers
              use — starting from the foundation and working upward. Each layer plays a distinct role,
              and choosing the right fragrance format for each level is as important as choosing the
              right scent itself.
            </p>
          </div>

          {/* 3 steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                number: "01",
                icon: <Package size={26} className="text-forest" />,
                title: "Choose Your Base",
                body: "Base notes anchor the entire stack with slow-evaporating molecules that persist for hours. Sandalwood, amber, vanilla, cedar, and musk are the classic choices. In home fragrance, a reed diffuser or a long-burning candle is the ideal vehicle — something that runs continuously and reliably without needing your attention. The base should be the quietest note in the room, present but not dominant: it is what people sense without consciously identifying, the reason the room feels settled and complete.",
              },
              {
                number: "02",
                icon: <Heart size={26} className="text-forest" />,
                title: "Add Heart Notes",
                body: "Heart notes define the identity and emotional character of your scent stack. They emerge as top notes fade and hold the composition together at its core. Lavender, rose, jasmine, geranium, and warm spices like cinnamon sit in this category. A wax melt system or a shorter-burn candle works well here — something you can activate for three to four hours and then switch off. The heart note is what people consciously notice and remember when they describe the fragrance of your home to a friend.",
              },
              {
                number: "03",
                icon: <Wind size={26} className="text-forest" />,
                title: "Layer Top Notes",
                body: "Top notes are the most volatile and most immediate layer of your stack. Citrus oils, mint, eucalyptus, bergamot, and light herbs burst brightly and then dissipate within 30 minutes. An essential oil diffuser on a timer is perfect for this role — run it for 20 minutes when guests arrive, or during the first hour of working from home to set your mental state. Because top notes are transient, they add dynamic texture to your stack without permanently altering its base character.",
              },
            ].map((step) => (
              <div key={step.number} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-display text-4xl font-bold text-forest/20 leading-none">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          {/* Pro tip */}
          <div
            className="rounded-2xl px-7 py-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            style={{ backgroundColor: "#A8B89A" }}
          >
            <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Star size={20} className="text-white" />
            </div>
            <div>
              <p className="font-display font-bold text-white text-base mb-1">
                Pro Tip: The 1-2-1 Rule
              </p>
              <p className="text-white/90 text-sm leading-relaxed">
                Start with <strong className="text-white">1 base source</strong> (reed diffuser or long-burn candle),{" "}
                <strong className="text-white">2 heart sources</strong> (a wax melt + a medium-burn candle), and{" "}
                <strong className="text-white">1 top note source</strong> (an oil diffuser on a timer). This ratio
                gives you depth without chaos — and it is easy to adjust by swapping one element at a time until
                the balance feels right for your space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4 — BY ROOM
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-sage mb-4">
              Room by Room
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-5">
              Scent Layering by Room
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Different rooms carry different fragrance objectives. The living room greets guests; the
              bedroom prepares you for sleep; the bathroom reinforces cleanliness; the office supports
              focus. Each demands a different scent profile and a different combination of fragrance
              delivery formats.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {roomCards.map((card) => (
              <div
                key={card.room}
                className="rounded-2xl p-7 border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-sage-light rounded-xl flex items-center justify-center flex-shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-charcoal">{card.room}</h3>
                    <p className="text-xs text-sage font-semibold">{card.profile}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed my-4">{card.body}</p>

                <div className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Suggested Formats
                  </p>
                  <ul className="space-y-1">
                    {card.products.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs text-charcoal">
                        <Check size={12} className="text-forest flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Scent Combinations
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {card.combos.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-3 py-1 rounded-full font-semibold"
                        style={{ backgroundColor: "#D4E6C3", color: "#3D5A47" }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 5 — ARTICLES GRID
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#D4E6C3" }} className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-forest mb-4">
              Buying Guides
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-4">
              Expert Buying Guides
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our editorial team researched the home fragrance market to bring you six comprehensive
              category guides. Each features hand-picked products with detailed pros, cons, and
              scent layering analysis — so you know exactly where each product fits in your stack.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {articleList.map((article, i) => (
              <Link
                key={article.slug}
                href={`/best/${article.slug}`}
                className={`group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-transparent hover:border-sage ${
                  i % 2 === 0 ? "bg-white" : "bg-cream"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span
                    className="text-5xl font-display font-bold leading-none"
                    style={{ color: "rgba(61,90,71,0.12)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-sage-light text-forest mt-1">
                    {articleCategories[i]}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-2 leading-tight group-hover:text-forest transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium flex items-center gap-1.5">
                    <BookOpen size={12} />
                    {articles.find((a) => a.slug === article.slug)?.productIds.length ?? 5} products reviewed
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-forest text-sm font-bold group-hover:gap-3 transition-all">
                    Read Guide <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 6 — FEATURED PRODUCTS TABLE
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#FAF7F2" }} className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-sage mb-4">
              Quick Reference
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-4">
              Top-Rated Products at a Glance
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The table below shows the top-ranked product from each of our six buying guides —
              one pick per category, drawn directly from our reviewed catalog. Use it as a quick
              reference before diving into a full category guide.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr style={{ backgroundColor: "#3D5A47" }}>
                  {["Product", "Category", "Best For", "Link"].map((h) => (
                    <th key={h} className="text-left px-4 py-4 font-body font-semibold text-white text-xs uppercase tracking-wide whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {topProducts.map(({ slug, category, product }, i) => (
                  <tr key={slug} className={`border-t border-gray-100 hover:bg-beige/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-4 py-3.5 font-semibold text-charcoal">{product.name}</td>
                    <td className="px-4 py-3.5 text-gray-500 whitespace-nowrap">{category}</td>
                    <td className="px-4 py-3.5 text-gray-600">{product.bestFor}</td>
                    <td className="px-4 py-3.5">
                      <a
                        href={product.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-forest font-semibold hover:underline whitespace-nowrap"
                      >
                        Amazon →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            All products link to Amazon.com via our affiliate link. We earn a commission when you
            purchase — see our{" "}
            <Link href="/affiliate-disclosure" className="text-forest underline underline-offset-2">
              Affiliate Disclosure
            </Link>{" "}
            for details.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 7 — AROMA BUILDER
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="aroma-builder" style={{ backgroundColor: "#D4E6C3" }} className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-forest mb-4">
              Interactive Tool
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-4">
              Build Your Scent Stack
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Not sure where to begin? Tell us your mood and the room you are designing for — our
              builder will suggest a complete three-level scent stack with one product type for each
              level of the fragrance pyramid, matched to your selection.
            </p>
          </div>
          <AromaBuilder />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 8 — SCENT STORIES / MOOD BOARDS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-sage mb-4">
              Inspiration
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-4">
              Scent Stories — Curated Atmospheres
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These four signature scent stacks are editorial compositions — complete fragrance
              environments assembled from multiple sources and designed to evoke a specific atmosphere.
              Use them as starting points for your own layering experiments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Cozy Autumn Library",
                icon: <BookOpen size={20} className="text-amber-700" />,
                bg: "#FEF3E2",
                border: "border-amber-300",
                notes: [
                  { label: "Amber", c: "bg-amber-100 text-amber-800" },
                  { label: "Cedar", c: "bg-orange-100 text-orange-800" },
                  { label: "Vanilla", c: "bg-yellow-100 text-yellow-800" },
                ],
                desc: "The warmth of worn leather binding and old paper, deepened by amber resin and sweetened by vanilla — a sanctuary built for slow, unhurried evenings. This is the scent of a room that rewards you for staying in it.",
                base: "Long-Burn Cedar Candle",
                heart: "Vanilla & Amber Reed Diffuser",
                top: "Cinnamon Oil Diffuser",
              },
              {
                title: "Spa Bathroom",
                icon: <Droplets size={20} className="text-teal-600" />,
                bg: "#EBF5F5",
                border: "border-teal-300",
                notes: [
                  { label: "Eucalyptus", c: "bg-teal-100 text-teal-800" },
                  { label: "Mint", c: "bg-green-100 text-green-800" },
                  { label: "White Tea", c: "bg-cyan-100 text-cyan-800" },
                ],
                desc: "Cool, clean, and instantly calming — eucalyptus opens the air and signals that something restorative is about to begin. Mint sharpens the senses at the mid-level, while white tea lingers as a clean, barely-there base that closes without sweetness.",
                base: "White Tea Reed Diffuser",
                heart: "Eucalyptus Wax Melt",
                top: "Peppermint Oil Diffuser",
              },
              {
                title: "Sunday Morning Kitchen",
                icon: <Sun size={20} className="text-yellow-500" />,
                bg: "#FFFBEB",
                border: "border-yellow-300",
                notes: [
                  { label: "Citrus", c: "bg-yellow-100 text-yellow-800" },
                  { label: "Basil", c: "bg-green-100 text-green-800" },
                  { label: "Light Musk", c: "bg-amber-100 text-amber-700" },
                ],
                desc: "Bright and grounding at the same time: zesty citrus wakes you up the moment you enter, fresh herb in the middle register keeps you present and energised, and a clean musk at the base holds everything together without ever drawing attention to itself.",
                base: "Light Musk Reed Diffuser",
                heart: "Basil & Herb Candle",
                top: "Lemon & Grapefruit Diffuser",
              },
              {
                title: "Romantic Evening",
                icon: <Sparkles size={20} className="text-rose-500" />,
                bg: "#FDF2F8",
                border: "border-rose-300",
                notes: [
                  { label: "Rose", c: "bg-rose-100 text-rose-800" },
                  { label: "Sandalwood", c: "bg-amber-100 text-amber-800" },
                  { label: "Amber", c: "bg-orange-100 text-orange-800" },
                ],
                desc: "An intimate composition designed to slow the pace of an evening down. Rose petals hover at the heart note level, warm sandalwood deepens the atmosphere from the base, and amber wraps the room in a golden permanence that stays long after the candles are extinguished.",
                base: "Sandalwood & Amber Candle",
                heart: "Rose Jasmine Reed Diffuser",
                top: "Bergamot Oil Diffuser",
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl p-7 border ${card.border} hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                style={{ backgroundColor: card.bg }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  {card.icon}
                  <h3 className="font-display text-xl font-bold text-charcoal">{card.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {card.notes.map((n) => (
                    <span key={n.label} className={`text-xs font-semibold px-3 py-1 rounded-full ${n.c}`}>
                      {n.label}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-700 leading-relaxed mb-5">{card.desc}</p>

                <div className="border-t border-black/8 pt-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2.5">
                    Fragrance Stack
                  </p>
                  <div className="space-y-1.5">
                    {[
                      { layer: "Base", product: card.base },
                      { layer: "Heart", product: card.heart },
                      { layer: "Top", product: card.top },
                    ].map(({ layer, product }) => (
                      <div key={layer} className="flex items-center gap-2 text-xs text-gray-600">
                        <span className="font-bold w-10 text-charcoal">{layer}</span>
                        <span className="text-gray-400">→</span>
                        <span>{product}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 9 — SEASONAL GUIDE
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#E8E0D0" }} className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-sage mb-4">
              Seasonal Shifts
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-4">
              Scent Layering by Season
            </h2>
            <p className="text-gray-600">
              The most evocative home fragrance changes with the calendar. Temperature, light levels,
              and the rhythm of daily life all affect which fragrance profiles feel right — and which
              feel off. Here is how to shift your scent stack across the four seasons.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {seasons.map((s) => (
              <div
                key={s.name}
                className={`rounded-2xl p-6 border ${s.accent} transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  {s.icon}
                  <h3 className="font-display text-xl font-bold text-charcoal">{s.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {s.notes.map((n) => (
                    <span key={n} className="text-xs font-semibold bg-white/70 text-charcoal px-2.5 py-0.5 rounded-full">
                      {n}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 font-semibold mb-2">
                  Primary format: {s.product}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 10 — GLOSSARY PREVIEW
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#FAF7F2" }} className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-sage mb-4">
                Reference
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-3">
                Scent Vocabulary — Key Terms
              </h2>
              <p className="text-gray-600">
                These six terms give you the vocabulary to think and talk about home fragrance
                with clarity and confidence before you buy anything.
              </p>
            </div>
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 text-forest font-semibold text-sm hover:gap-3 transition-all whitespace-nowrap"
            >
              Full Glossary <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {glossaryTerms.map((item) => (
              <div
                key={item.term}
                className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 ${item.accent}`}
              >
                <h3 className="font-display text-lg font-bold text-forest mb-3">{item.term}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 11 — METHODOLOGY
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#3D5A47" }} className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-sage mb-4">
              Our Standards
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
              How We Research &amp; Recommend
            </h2>
            <p className="text-white/70 leading-relaxed">
              Every product recommendation on AromaStacker goes through the same rigorous
              editorial process. Here is what that process looks like — in full transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <BookOpen size={28} className="text-sage" />,
                title: "Editorial Research",
                body: "Our research process begins long before a product earns a place in our guides. We cross-reference verified buyer feedback across multiple platforms, study fragrance oil specifications and wax compositions, and consult with home fragrance community experts to understand real-world performance across different room sizes, humidity levels, and home layouts. Products that appear consistently in positive buyer discussions and fragrance community recommendations earn deeper investigation, while products with widespread complaints about inconsistency are removed from consideration regardless of brand reputation.",
              },
              {
                icon: <FlaskConical size={28} className="text-sage" />,
                title: "Fragrance Analysis",
                body: "Every product we recommend is analysed within the context of scent layering — not as a standalone item but as a component in a fragrance stack. We identify where each product sits in the scent pyramid, assess its throw intensity relative to typical room sizes, and evaluate its fragrance profile for compatibility with commonly paired notes. This means our recommendations function well together, not just in isolation. A candle that smells wonderful alone but clashes with the most common reed diffuser base notes will not make our lists, however impressive its individual fragrance may be.",
              },
              {
                icon: <Shield size={28} className="text-sage" />,
                title: "Honest Assessment",
                body: "We never fabricate ratings, invent expert testing scenarios, or allow affiliate relationships to influence our editorial direction. If a product has meaningful drawbacks — a wax formulation that performs inconsistently, a reed diffuser whose fragrance fades faster than advertised — we document it plainly. Our pros and cons sections reflect the genuine trade-offs that real users encounter, presented so you can make an informed decision rather than a marketed one. No product earns a position on this site through payment, gifting, or commercial arrangement of any kind.",
              },
            ].map((p) => (
              <div key={p.title} className="bg-white/8 border border-white/12 rounded-2xl p-7">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          {/* Affiliate disclosure */}
          <div className="bg-white/8 border border-white/12 rounded-2xl p-6 max-w-3xl">
            <p className="text-sm text-white/75 leading-relaxed">
              <strong className="text-white">Affiliate Disclosure:</strong>{" "}
              AromaStacker participates in the Amazon Services LLC Associates Program. When you click
              a product link and make a qualifying purchase, we may earn a commission at no additional
              cost to you. This never influences which products we select or how we describe them.{" "}
              <Link href="/affiliate-disclosure" className="text-sage underline underline-offset-2 hover:text-white transition-colors">
                Read our full disclosure.
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 12 — NEWSLETTER CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#D4E6C3" }} className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-forest mb-4">
                Stay Inspired
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-5">
                Get Weekly Scent Inspiration
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Join thousands of home fragrance enthusiasts who receive our weekly editorial
                newsletter. Each issue brings a curated scent stack, a seasonal layering guide,
                and our editors&#39; latest product discoveries — never more than once a week.
              </p>
              <ul className="space-y-3">
                {[
                  "Seasonal layering guides and new curated scent stacks",
                  "New product reviews and buying guide updates",
                  "Exclusive fragrance combinations and editorial inspiration",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check size={15} className="text-forest flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="font-display text-xl font-bold text-charcoal mb-5">
                  Subscribe to the AromaStacker Letter
                </p>
                <NewsletterForm />
                <p className="text-xs text-gray-400 mt-4 text-center">
                  No spam. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
