import Image from "next/image";
import type { Product } from "@/data/products";

type SpotlightItem = {
  product: Product;
  category: string;
};

type Props = {
  items: SpotlightItem[];
};

export default function ScentSpotlight({ items }: Props) {
  const first = items.slice(0, 3);
  const second = items.slice(3);

  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-sage mb-4">
            Scent Spotlight
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-3">
            Editor&rsquo;s Picks Across Every Category
          </h2>
          <p className="text-base text-charcoal/70 max-w-xl mx-auto mb-2">
            One standout pick from each category — check the price on Amazon without losing your place.
          </p>
          <p className="text-sm text-charcoal/60 text-center">
            As an Amazon Associate, AromaStacker earns from qualifying purchases.
          </p>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {first.map(({ product, category }) => (
            <SpotlightCard key={product.id} product={product} category={category} />
          ))}
        </div>

        {/* Row 2 — remaining cards centered */}
        <div
          className={`grid grid-cols-1 gap-6 mt-6 ${
            second.length >= 3
              ? "md:grid-cols-3"
              : "md:grid-cols-2 md:max-w-2xl md:mx-auto"
          }`}
        >
          {second.map(({ product, category }) => (
            <SpotlightCard key={product.id} product={product} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpotlightCard({ product, category }: { product: Product; category: string }) {
  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-square bg-beige">
        <Image
          unoptimized
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain p-4"
        />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category badge */}
        <span className="inline-block self-start bg-sage-light text-forest text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {category}
        </span>

        {/* Product name */}
        <p className="font-display font-bold text-charcoal text-base leading-snug line-clamp-2 mb-4 flex-1">
          {product.name}
        </p>

        {/* CTA */}
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="block w-full text-center bg-forest text-white text-sm font-semibold py-2.5 rounded-md hover:bg-[#2e4436] transition-colors"
        >
          View on Amazon →
        </a>
      </div>
    </div>
  );
}
