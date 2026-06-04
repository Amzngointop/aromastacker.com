import { Sparkles } from "lucide-react";

type MoodCard = {
  name: string;
  notes: string[];
  description: string;
  color: string;
};

const moodCards: MoodCard[] = [
  {
    name: "Cozy Autumn Library",
    notes: ["Amber", "Cedar", "Vanilla"],
    description:
      "The warmth of worn leather and old paper, softened by amber and sweetened by vanilla — a sanctuary for slow evenings.",
    color: "border-amber-400",
  },
  {
    name: "Spa Bathroom",
    notes: ["Eucalyptus", "Mint", "White Tea"],
    description:
      "Cool, clean, and instantly calming — eucalyptus opens the air, mint sharpens the senses, white tea lingers in the warmth.",
    color: "border-sage",
  },
  {
    name: "Sunday Morning Kitchen",
    notes: ["Citrus", "Basil", "Light Musk"],
    description:
      "Bright and grounding: zesty citrus wakes you up, fresh basil keeps you present, and a clean musk holds it all together.",
    color: "border-yellow-400",
  },
  {
    name: "Romantic Evening",
    notes: ["Rose", "Sandalwood", "Amber"],
    description:
      "An intimate composition — rose petals over warm sandalwood, with amber adding depth and quiet permanence.",
    color: "border-rose-400",
  },
];

export default function MoodBoard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {moodCards.map((card) => (
        <div
          key={card.name}
          className={`bg-white rounded-2xl p-6 border-l-4 ${card.color} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={16} className="text-sage" />
            <h3 className="font-display text-lg font-bold text-charcoal">{card.name}</h3>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {card.notes.map((note) => (
              <span
                key={note}
                className="text-xs font-semibold bg-beige text-forest px-3 py-1 rounded-full"
              >
                {note}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
