"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FAQItem[];
  title?: string;
};

export default function FAQ({ items, title = "Frequently Asked Questions" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {title && (
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-8">
          {title}
        </h2>
      )}
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-cream transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sage"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              <span className="font-body font-semibold text-charcoal pr-4 text-sm sm:text-base">
                {item.question}
              </span>
              <ChevronDown
                size={18}
                className={`flex-shrink-0 text-sage transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="px-6 py-4 bg-cream border-t border-gray-100">
                <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
