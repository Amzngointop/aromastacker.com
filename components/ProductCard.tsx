import { Check, X, ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";
import CTAButton from "./CTAButton";

type Props = {
  product: Product;
  index?: number;
  compact?: boolean;
};

export default function ProductCard({ product, index, compact = false }: Props) {
  if (compact) {
    return (
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-square bg-beige rounded-xl mb-4 overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="font-display text-sm font-semibold text-charcoal leading-tight mb-1">
          {product.name}
        </p>
        <p className="text-xs text-gray-500 mb-3">{product.bestFor}</p>
        <CTAButton href={product.affiliateUrl} variant="outline" external className="w-full justify-center text-xs py-2">
          View on Amazon
        </CTAButton>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      {index !== undefined && (
        <div className="bg-forest px-6 py-3">
          <span className="text-white font-body text-sm font-semibold">
            #{index + 1} Pick
          </span>
        </div>
      )}

      <div className="p-6 sm:p-8">
        {/* Image placeholder */}
        <div className="flex flex-col sm:flex-row gap-6 mb-6">
          <div className="flex-shrink-0">
            <div className="w-full sm:w-40 aspect-square bg-beige rounded-xl overflow-hidden border border-gray-100">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-display text-xl font-bold text-charcoal mb-2">
              {product.name}
            </h3>
            <div className="inline-flex items-center gap-2 bg-sage-light text-forest text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Best for: {product.bestFor}
            </div>
            {product.scentNotes.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3">
                {product.scentNotes.map((note) => (
                  <span
                    key={note}
                    className="text-xs bg-beige text-charcoal px-2.5 py-0.5 rounded-full capitalize"
                  >
                    {note}
                  </span>
                ))}
              </div>
            )}
            <p className="text-sm text-gray-600 leading-relaxed">{product.summary}</p>
          </div>
        </div>

        {/* Pros / Cons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-3">
              Pros
            </p>
            <ul className="space-y-2">
              {product.pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-sm text-charcoal">
                  <Check size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-3">
              Cons
            </p>
            <ul className="space-y-2">
              {product.cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-sm text-charcoal">
                  <X size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <CTAButton href={product.affiliateUrl} external variant="primary" className="flex-1 justify-center">
            <ExternalLink size={15} />
            Check Price on Amazon
          </CTAButton>
        </div>

        <p className="text-xs text-gray-400 mt-3 text-center">
          As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </div>
    </div>
  );
}
