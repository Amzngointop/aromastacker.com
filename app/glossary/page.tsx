import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Scent Layering Glossary — Key Fragrance Terms Defined",
  description:
    "A complete editorial glossary of home fragrance and scent layering terminology. From top notes to sillage, understand every term before you buy.",
  alternates: { canonical: `${site.url}/glossary` },
  openGraph: {
    title: "Scent Layering Glossary | AromaStacker",
    description: "Every fragrance term you need to know to master home scent layering.",
    url: `${site.url}/glossary`,
  },
};

const terms = [
  {
    term: "Top Notes",
    definition:
      "Top notes are the opening impression of any fragrance — the first compounds to evaporate and reach your nose. They are light, bright, and volatile, typically lasting only 15 to 30 minutes before giving way to heart notes. Common top notes in home fragrance include citrus (lemon, bergamot, grapefruit), light herbs (basil, mint), and delicate florals. In scent layering, your diffuser is often the ideal device for top notes because it can be switched off once you want the atmospheric focus to shift to deeper levels.",
  },
  {
    term: "Heart Notes (Mid Notes)",
    definition:
      "Heart notes, also called mid notes, form the structural core and character of a fragrance. They emerge after top notes dissipate and remain perceptible for 30 minutes to two hours. Heart notes tend to be warmer, fuller, and more complex than top notes — common examples include lavender, rose, geranium, jasmine, and warming spices like cinnamon and clove. In a home scent layering stack, candles and wax melts in heart-note fragrances provide the identity and emotional resonance of the overall atmosphere.",
  },
  {
    term: "Base Notes",
    definition:
      "Base notes are the final, lingering layer of a fragrance — heavy, slow-evaporating molecules that persist for hours and often become detectable only after top and heart notes have faded. Classic base notes include sandalwood, cedar, vetiver, amber, musk, vanilla, and patchouli. In home fragrance layering, reed diffusers and long-burn candles with base-note fragrances serve as the passive, always-present foundation of your scent stack, providing continuity and depth regardless of what else is burning.",
  },
  {
    term: "Scent Layering",
    definition:
      "Scent layering is the deliberate combination of multiple fragrance sources — typically operating at different pyramid levels — to create a complex, evolving atmospheric scent in a space. Borrowed from fine perfumery, the practice applied to home fragrance involves using separate products (a reed diffuser for base notes, a candle for heart notes, an essential oil diffuser for top notes) simultaneously, chosen so their individual fragrance characters complement rather than compete with each other. The goal is a room that smells curated, three-dimensional, and distinctly yours.",
  },
  {
    term: "Olfactory Fatigue",
    definition:
      "Olfactory fatigue — sometimes called nose blindness — is the temporary adaptation of the olfactory system to a persistent scent, rendering it imperceptible to the person experiencing it after prolonged exposure. This is why your home can smell strongly of a candle to a guest who has just walked in, while you no longer notice it at all after an hour. In practical terms for scent layering, this means rotating your fragrance elements and allowing rooms to air between sessions so your perception remains fresh.",
  },
  {
    term: "Diffusion",
    definition:
      "Diffusion in home fragrance refers to the process by which aromatic molecules are dispersed from a source into the surrounding air. Different delivery methods achieve diffusion through different mechanisms: ultrasonic diffusers vibrate water and essential oil into a mist, nebulizing diffusers atomize pure oil without water, reed diffusers rely on capillary action through porous rattan, and candles vaporize fragrance through the heat of the flame. The rate and intensity of diffusion determines how quickly a room fills with fragrance and how far that fragrance reaches.",
  },
  {
    term: "Sillage",
    definition:
      "Sillage (pronounced see-YAZH) is a French term from perfumery meaning 'wake' — as in the wake left by a boat. In fragrance, sillage refers to the trail a scent leaves behind as a person moves through a space, or the radius of perceptibility around a fragrance source in a room. A candle with excellent sillage fills a large room with perceptible fragrance; one with poor sillage can only be detected if you stand directly over it. In scent layering, sillage varies by fragrance molecule size: top notes have wide initial sillage that fades quickly; base notes have narrower but longer-lasting sillage.",
  },
  {
    term: "Fragrance Throw",
    definition:
      "Fragrance throw is the practical measure of how well a scented product projects its aroma into a room. It is typically discussed in two states: cold throw (the fragrance detectable when a candle is unlit, or a wax melt is at room temperature) and hot throw (the fragrance released during active burning or warming). A product with excellent hot throw fills a large room effectively; one with poor hot throw may smell pleasant up close but fail to project. In scent layering, understanding each product's throw strength helps you calibrate how many active sources you need to fill your space without overwhelming it.",
  },
  {
    term: "Reed Diffuser",
    definition:
      "A reed diffuser is a passive home fragrance device consisting of a vessel of fragrance oil and a set of porous rattan or fiber reeds inserted into the oil. The reeds absorb the fragrance oil through capillary action and release it slowly into the surrounding air through evaporation. Reed diffusers require no electricity, no flame, and no active management — they operate continuously for 60 to 120 days, making them the most maintenance-free method of home fragrance diffusion. Their steady, low-intensity output makes them ideal as the passive base-note layer in a scent layering setup.",
  },
  {
    term: "Essential Oil vs. Fragrance Oil",
    definition:
      "Essential oils are concentrated aromatic compounds extracted directly from plant material — flowers, bark, leaves, rinds — through steam distillation or cold pressing. They contain only naturally occurring aromatic molecules and no synthetic additives. Fragrance oils are blended aromatic compounds created by perfumers, which may contain synthetic molecules alongside or instead of natural plant extracts. Fragrance oils are typically less expensive, more consistent batch-to-batch, and can replicate scents that cannot be directly extracted from nature (such as 'ocean breeze' or 'rain'). Both work effectively in diffusers and warmers; the distinction matters primarily to buyers concerned with natural-only formulations.",
  },
];

export default function GlossaryPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ backgroundColor: "#3D5A47" }} className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/40 text-sm">/</span>
            <span className="text-sage text-sm">Glossary</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Scent Layering Glossary
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
            Every fragrance term you need to understand before building your first
            scent stack. Defined in plain English, written for home fragrance enthusiasts.
          </p>
        </div>
      </section>

      {/* TERMS */}
      <section style={{ backgroundColor: "#FAF7F2" }} className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {terms.map((item, i) => (
              <div
                key={item.term}
                id={item.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className={`rounded-2xl p-7 sm:p-9 ${
                  i % 2 === 0 ? "bg-white border border-gray-100" : "bg-beige"
                }`}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-forest mb-4">
                  {item.term}
                </h2>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#D4E6C3" }} className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Ready to Build Your First Stack?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Now that you know the vocabulary, put it into practice. Browse our curated
            buying guides to find the right products for every level of your scent pyramid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/best/best-scent-diffusers"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest text-white font-body font-bold text-sm hover:bg-opacity-90 hover:scale-105 transition-all shadow-md"
            >
              Browse Diffusers <span>→</span>
            </Link>
            <Link
              href="/best/best-essential-oil-sets"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-forest text-forest font-body font-bold text-sm hover:bg-forest hover:text-white transition-all"
            >
              Essential Oil Sets <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
