"use client";

import { useState } from "react";
import {
  Flame,
  Wind,
  Heart,
  Zap,
  Waves,
  Home,
  Moon,
  Droplets,
  Monitor,
  ArrowRight,
  RefreshCw,
  Check,
  Package,
  Leaf,
} from "lucide-react";
import Link from "next/link";

type MoodKey = "Cozy" | "Fresh" | "Romantic" | "Energizing" | "Calm";
type RoomKey = "Living Room" | "Bedroom" | "Bathroom" | "Office";

type Layer = {
  level: "Base Note" | "Heart Note" | "Top Note";
  productType: string;
  scent: string;
  why: string;
};

type Stack = readonly [Layer, Layer, Layer]; // [Base, Heart, Top]

const recommendations: Record<MoodKey, Record<RoomKey, Stack>> = {
  Cozy: {
    "Living Room": [
      { level: "Base Note", productType: "Soy Candle", scent: "Amber & Cedarwood", why: "Amber grounds the room with lasting warmth that anchors every lighter note above it." },
      { level: "Heart Note", productType: "Reed Diffuser", scent: "Vanilla & Sandalwood", why: "Vanilla bridges the woody base to the top note layer with a comforting softness." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Cinnamon & Sweet Orange", why: "Spiced citrus adds a lively seasonal greeting note that lifts the whole composition." },
    ],
    Bedroom: [
      { level: "Base Note", productType: "Long-Burn Candle", scent: "Warm Musk & Patchouli", why: "Warm musk creates quiet, sleep-friendly intimacy that persists through the night." },
      { level: "Heart Note", productType: "Wax Melt", scent: "Vanilla & Tonka Bean", why: "Tonka bean and vanilla hold the middle register with a deeply comforting sweetness." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Sweet Orange & Clove", why: "A soft spiced citrus top adds warmth without disrupting an evening wind-down routine." },
    ],
    Bathroom: [
      { level: "Base Note", productType: "Reed Diffuser", scent: "Sandalwood & Amber", why: "Sandalwood runs passively all day, giving the bathroom a warm, spa-adjacent base note." },
      { level: "Heart Note", productType: "Wax Melt", scent: "Vanilla & Cardamom", why: "Warm spice softens the woody base and adds inviting complexity to the middle layer." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Sweet Orange", why: "A single bright citrus top note adds a lively accent to the warm-spice foundation." },
    ],
    Office: [
      { level: "Base Note", productType: "Reed Diffuser", scent: "Cedarwood & Vetiver", why: "Cedar provides a quiet forested backdrop that encourages focused, settled attention." },
      { level: "Heart Note", productType: "Wax Melt", scent: "Amber & Vanilla", why: "Gentle amber warmth in the mid-layer keeps the workspace comfortable and grounded." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Cardamom & Bergamot", why: "A grounding yet bright spice-citrus top that sustains energy through long work sessions." },
    ],
  },
  Fresh: {
    "Living Room": [
      { level: "Base Note", productType: "Reed Diffuser", scent: "White Tea & Bamboo", why: "Clean bamboo holds a fresh baseline throughout the day without ever feeling heavy." },
      { level: "Heart Note", productType: "Oil Diffuser", scent: "Eucalyptus & Green Tea", why: "Eucalyptus opens the heart layer with crisp clarity that freshens any size of room." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Lemon & Bergamot", why: "Bright citrus crowns the stack with immediate, energising freshness." },
    ],
    Bedroom: [
      { level: "Base Note", productType: "Reed Diffuser", scent: "Clean Linen & Light Musk", why: "A barely-there musk base keeps the bedroom fresh overnight without asserting itself." },
      { level: "Heart Note", productType: "Wax Melt", scent: "Lavender & Eucalyptus", why: "Cool lavender-eucalyptus creates a sleep-ready mid-layer that is refreshing, not heavy." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Bergamot & Lime", why: "A few drops of citrus at bedside adds a refreshing accent to close the reading hour." },
    ],
    Bathroom: [
      { level: "Base Note", productType: "Reed Diffuser", scent: "Sea Salt & Mineral", why: "An aquatic base note evokes clean coastal air and runs passively all day." },
      { level: "Heart Note", productType: "Oil Diffuser", scent: "Eucalyptus & Peppermint", why: "Cool mint-eucalyptus creates the crisp, spa-like heart of a morning shower stack." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Lemon & Grapefruit", why: "Intense citrus tops complete the fresh-clean trio for maximum morning energy." },
    ],
    Office: [
      { level: "Base Note", productType: "Reed Diffuser", scent: "Bamboo & Clean Linen", why: "Clean bamboo establishes a professional, distraction-free fragrance baseline." },
      { level: "Heart Note", productType: "Oil Diffuser", scent: "Rosemary & Mint", why: "Rosemary's focus-supporting properties pair with mint for a sharp, clear mid-layer." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Lemongrass", why: "A single sharp lemongrass top cuts through afternoon mental fog effectively." },
    ],
  },
  Romantic: {
    "Living Room": [
      { level: "Base Note", productType: "Soy Candle", scent: "Amber & Tonka Bean", why: "Amber and tonka create a rich, lingering base ideal for intimate evenings at home." },
      { level: "Heart Note", productType: "Reed Diffuser", scent: "Jasmine & Rose", why: "Two of fragrance's most romantic florals form a classic, timeless heart note layer." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Bergamot & Ylang Ylang", why: "Bergamot softens the florals at the top for a refined effect that avoids cloying sweetness." },
    ],
    Bedroom: [
      { level: "Base Note", productType: "Candle", scent: "Sandalwood & Patchouli", why: "Sandalwood grounds the romantic composition with deep, quiet sensuality." },
      { level: "Heart Note", productType: "Reed Diffuser", scent: "Rose & Jasmine", why: "The quintessential romantic heart combination — lush, full, and unmistakable." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Bergamot & Neroli", why: "Light citrus-floral tops lift the heavier base without competing with the rose-jasmine heart." },
    ],
    Bathroom: [
      { level: "Base Note", productType: "Candle", scent: "Patchouli & Warm Musk", why: "A dark musky base creates romantic depth appropriate for intimate bathroom atmospheres." },
      { level: "Heart Note", productType: "Wax Melt", scent: "Jasmine & Ylang Ylang", why: "Rich floral warmth in the heart makes this stack unmistakably romantic." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Rose & Bergamot", why: "A light floral-citrus top completes the romantic profile with graceful lightness." },
    ],
    Office: [
      { level: "Base Note", productType: "Reed Diffuser", scent: "Cedarwood & Sandalwood", why: "Grounded woody notes create a professional yet warmly romantic undertone." },
      { level: "Heart Note", productType: "Oil Diffuser", scent: "Geranium & Jasmine", why: "Soft florals in the heart layer stay refined without pulling attention from your work." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Bergamot", why: "A single bergamot top note adds the lightest touch of brightness to the subtle stack." },
    ],
  },
  Energizing: {
    "Living Room": [
      { level: "Base Note", productType: "Wax Melt", scent: "Lemongrass & Ginger", why: "Lemongrass grounds the energising stack with an uplifting, warm-spice base." },
      { level: "Heart Note", productType: "Oil Diffuser", scent: "Eucalyptus & Peppermint", why: "Cool, sharp heart notes that sharpen the senses and open the airways in the room." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Grapefruit & Lime", why: "Intense citrus at the top delivers an immediate, motivating burst of energy." },
    ],
    Bedroom: [
      { level: "Base Note", productType: "Wax Melt", scent: "Citrus & Light Cedarwood", why: "A light citrus-wood base transitions a sleep space into an energised morning room." },
      { level: "Heart Note", productType: "Oil Diffuser", scent: "Rosemary & Lemon", why: "Rosemary stimulates cognition while lemon brightens mood — a powerful morning heart layer." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Peppermint", why: "Pure peppermint as a top note is the most potent energising final layer available." },
    ],
    Bathroom: [
      { level: "Base Note", productType: "Reed Diffuser", scent: "Sea Salt & Cypress", why: "Cypress and sea salt ground the energising morning stack with a clean aquatic base." },
      { level: "Heart Note", productType: "Oil Diffuser", scent: "Peppermint & Spearmint", why: "Mint aromatics in the heart create a powerful wake-up energy boost in the shower." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Grapefruit & Lemon", why: "Bright grapefruit crowns the mint heart for a complete morning invigorating stack." },
    ],
    Office: [
      { level: "Base Note", productType: "Reed Diffuser", scent: "Cedar & Pine", why: "Woody base notes create a forest-like clarity that sharpens long-session focus." },
      { level: "Heart Note", productType: "Oil Diffuser", scent: "Rosemary & Basil", why: "Cognitive-supporting aromatics in the heart layer sustain deep concentration." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Lemon & Peppermint", why: "The most effective pairing for mental clarity and peak productivity as a top note." },
    ],
  },
  Calm: {
    "Living Room": [
      { level: "Base Note", productType: "Reed Diffuser", scent: "Sandalwood & Vetiver", why: "Sandalwood anchors a calming stack with quiet permanence that soothes the whole room." },
      { level: "Heart Note", productType: "Soy Candle", scent: "Lavender & Chamomile", why: "The most trusted calming combination in home fragrance — gentle, reliable, and effective." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Bergamot & Clary Sage", why: "Bergamot softens the heavier calming notes with a light, grounding floral top note." },
    ],
    Bedroom: [
      { level: "Base Note", productType: "Candle", scent: "Warm Musk & Sandalwood", why: "A musk-sandalwood base is among the most sleep-conducive foundation scents available." },
      { level: "Heart Note", productType: "Reed Diffuser", scent: "Lavender & Vanilla", why: "Lavender-vanilla at the heart level is consistently associated with deep relaxation." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Roman Chamomile", why: "A quiet, subtle top note that adds the final whisper to a complete sleep-ready stack." },
    ],
    Bathroom: [
      { level: "Base Note", productType: "Reed Diffuser", scent: "Sandalwood & White Musk", why: "White musk and sandalwood create an enveloping calm that turns bathing into ritual." },
      { level: "Heart Note", productType: "Wax Melt", scent: "Lavender & Milk", why: "Soft lavender-milk wax melts provide continuous, quiet fragrance during bath time." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Roman Chamomile & Neroli", why: "Delicate floral tops complete the bath-time calm stack without asserting themselves." },
    ],
    Office: [
      { level: "Base Note", productType: "Reed Diffuser", scent: "Sandalwood & Cedarwood", why: "Stabilising woody notes calm the workspace without dulling the senses during work." },
      { level: "Heart Note", productType: "Oil Diffuser", scent: "Lavender & Clary Sage", why: "Lavender creates focused calm in the heart layer — the ideal profile for sustained work." },
      { level: "Top Note", productType: "Oil Diffuser", scent: "Bergamot", why: "A single bergamot top keeps the calm stack from feeling heavy during long work sessions." },
    ],
  },
} as const;

const moods: { key: MoodKey; icon: React.ReactNode; desc: string }[] = [
  { key: "Cozy", icon: <Flame size={18} />, desc: "Warm & inviting" },
  { key: "Fresh", icon: <Wind size={18} />, desc: "Clean & airy" },
  { key: "Romantic", icon: <Heart size={18} />, desc: "Floral & sensual" },
  { key: "Energizing", icon: <Zap size={18} />, desc: "Sharp & citrus" },
  { key: "Calm", icon: <Waves size={18} />, desc: "Soft & grounding" },
];

const rooms: { key: RoomKey; icon: React.ReactNode }[] = [
  { key: "Living Room", icon: <Home size={16} /> },
  { key: "Bedroom", icon: <Moon size={16} /> },
  { key: "Bathroom", icon: <Droplets size={16} /> },
  { key: "Office", icon: <Monitor size={16} /> },
];

const layerStyles: Record<Layer["level"], { bg: string; text: string; border: string; tag: string }> = {
  "Base Note": {
    bg: "#3D5A47",
    text: "#fff",
    border: "border-forest",
    tag: "bg-white/20 text-white",
  },
  "Heart Note": {
    bg: "#A8B89A",
    text: "#fff",
    border: "border-sage",
    tag: "bg-white/25 text-white",
  },
  "Top Note": {
    bg: "#D4E6C3",
    text: "#3D5A47",
    border: "border-sage-light",
    tag: "bg-white/60 text-forest",
  },
};

export default function AromaBuilder() {
  const [mood, setMood] = useState<MoodKey | null>(null);
  const [room, setRoom] = useState<RoomKey | null>(null);
  const [showResult, setShowResult] = useState(false);

  const stack =
    mood && room ? recommendations[mood][room] : null;

  const handleBuild = () => {
    if (mood && room) setShowResult(true);
  };

  const handleReset = () => {
    setMood(null);
    setRoom(null);
    setShowResult(false);
  };

  return (
    <div>
      {!showResult ? (
        <div className="max-w-2xl mx-auto">
          {/* Step 1 */}
          <div className="mb-8">
            <p className="font-body text-xs font-bold uppercase tracking-widest text-forest mb-4">
              Step 1 — Choose Your Mood
            </p>
            <div className="flex flex-wrap gap-3">
              {moods.map(({ key, icon, desc }) => (
                <button
                  key={key}
                  onClick={() => setMood(key)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-body font-semibold text-sm border-2 transition-all duration-200 ${
                    mood === key
                      ? "bg-forest text-white border-forest shadow-md scale-105"
                      : "bg-white text-charcoal border-gray-200 hover:border-forest hover:text-forest"
                  }`}
                >
                  {icon}
                  <span>{key}</span>
                  {mood !== key && (
                    <span className="text-xs text-gray-400 font-normal">{desc}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-8">
            <p className="font-body text-xs font-bold uppercase tracking-widest text-forest mb-4">
              Step 2 — Choose Your Room
            </p>
            <div className="flex flex-wrap gap-3">
              {rooms.map(({ key, icon }) => (
                <button
                  key={key}
                  onClick={() => setRoom(key)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-body font-semibold text-sm border-2 transition-all duration-200 ${
                    room === key
                      ? "bg-forest text-white border-forest shadow-md scale-105"
                      : "bg-white text-charcoal border-gray-200 hover:border-forest hover:text-forest"
                  }`}
                >
                  {icon}
                  {key}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleBuild}
            disabled={!mood || !room}
            className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-bold text-sm transition-all duration-200 ${
              mood && room
                ? "bg-forest text-white hover:scale-105 shadow-md cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Build My Scent Stack
            <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <div>
          {stack && (
            <>
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                <div className="inline-flex items-center gap-2 bg-forest/10 text-forest text-sm font-bold px-4 py-2 rounded-full">
                  {mood} · {room}
                </div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-forest transition-colors"
                >
                  <RefreshCw size={12} />
                  Start over
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {stack.map((layer) => {
                  const s = layerStyles[layer.level];
                  return (
                    <div
                      key={layer.level}
                      className="rounded-2xl p-5 flex flex-col gap-3"
                      style={{ backgroundColor: s.bg, color: s.text }}
                    >
                      <span
                        className={`self-start text-xs font-bold px-3 py-1 rounded-full ${s.tag}`}
                      >
                        {layer.level}
                      </span>
                      <div>
                        <p className="font-display font-bold text-base leading-tight mb-0.5">
                          {layer.scent}
                        </p>
                        <p className="text-xs opacity-80 font-semibold">
                          via {layer.productType}
                        </p>
                      </div>
                      <p className="text-xs leading-relaxed opacity-90">
                        {layer.why}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="text-center">
                <Link
                  href="/best/best-scent-diffusers"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-forest text-white font-body font-bold text-sm hover:scale-105 transition-all shadow-md"
                >
                  Browse Diffusers to Complete Your Stack
                  <ArrowRight size={15} />
                </Link>
              </div>
            </>
          )}
        </div>
      )}

      {/* How it works */}
      <div className="mt-10 border-t border-forest/20 pt-8">
        <p className="text-xs font-bold uppercase tracking-widest text-forest mb-4">
          How the Builder Works
        </p>
        <ul className="space-y-2">
          {[
            "Your mood determines the fragrance family — warm and spicy, fresh and airy, floral, energising, or calming.",
            "Your room determines the intensity and delivery method best suited to the space and its airflow.",
            "The result gives you one base note, one heart note, and one top note source to combine into a complete scent pyramid.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
              <Check size={14} className="text-forest flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
