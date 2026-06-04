import { Sun, Flower2, Layers } from "lucide-react";

const levels = [
  {
    label: "Top Notes",
    sublabel: "First Impression — 15 to 30 minutes",
    desc: "Light, volatile molecules that evaporate quickly and create the opening impression of your scent stack.",
    examples: ["Citrus", "Mint", "Eucalyptus", "Lemon", "Bergamot"],
    bg: "#D4E6C3",
    textColor: "#3D5A47",
    pillBg: "rgba(61,90,71,0.12)",
    width: "w-1/2",
    Icon: Sun,
  },
  {
    label: "Heart Notes",
    sublabel: "The Core — 30 min to 2 hours",
    desc: "Warm, fuller molecules that define the character of your fragrance stack and bridge top to base.",
    examples: ["Lavender", "Rose", "Cinnamon", "Cedarwood", "Jasmine"],
    bg: "#A8B89A",
    textColor: "#fff",
    pillBg: "rgba(255,255,255,0.25)",
    width: "w-[70%]",
    Icon: Flower2,
  },
  {
    label: "Base Notes",
    sublabel: "The Foundation — 2 hours or more",
    desc: "Heavy, slow-evaporating molecules that provide lasting depth and anchor the entire composition.",
    examples: ["Vanilla", "Musk", "Sandalwood", "Amber", "Patchouli"],
    bg: "#3D5A47",
    textColor: "#fff",
    pillBg: "rgba(255,255,255,0.12)",
    width: "w-full",
    Icon: Layers,
  },
];

export default function AromaPyramid() {
  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-md mx-auto">
      {levels.map(({ label, sublabel, desc, examples, bg, textColor, pillBg, width, Icon }) => (
        <div
          key={label}
          className={`${width} rounded-2xl px-5 py-4 text-center`}
          style={{ backgroundColor: bg, color: textColor }}
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <Icon size={15} style={{ opacity: 0.85 }} />
            <p className="font-display font-bold text-base sm:text-lg">{label}</p>
          </div>
          <p className="text-xs mb-1" style={{ opacity: 0.7 }}>{sublabel}</p>
          <p className="text-xs mb-2.5 leading-relaxed" style={{ opacity: 0.8 }}>{desc}</p>
          <div className="flex flex-wrap justify-center gap-1.5">
            {examples.map((ex) => (
              <span
                key={ex}
                className="text-xs px-2.5 py-0.5 rounded-full font-semibold"
                style={{ backgroundColor: pillBg }}
              >
                {ex}
              </span>
            ))}
          </div>
        </div>
      ))}
      <p className="text-xs text-gray-400 mt-1 text-center italic">
        Molecular weight determines evaporation rate — lighter molecules rise first, heavier ones linger longest.
      </p>
    </div>
  );
}
