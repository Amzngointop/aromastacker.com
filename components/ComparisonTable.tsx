import { ExternalLink, Check, X } from "lucide-react";
import type { Product } from "@/data/products";

type Props = {
  products: Product[];
};

export default function ComparisonTable({ products }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-forest text-white">
            <th className="text-left px-4 py-4 font-body font-semibold min-w-[180px]">
              Product
            </th>
            <th className="text-left px-4 py-4 font-body font-semibold min-w-[140px]">
              Best For
            </th>
            <th className="text-left px-4 py-4 font-body font-semibold min-w-[130px]">
              Scent Notes
            </th>
            <th className="text-center px-4 py-4 font-body font-semibold">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr
              key={product.id}
              className={`border-t border-gray-100 hover:bg-cream transition-colors ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <td className="px-4 py-4">
                <span className="font-semibold text-charcoal leading-tight block">
                  {product.name}
                </span>
                <span className="text-xs text-gray-400 mt-0.5 block">
                  #{i + 1} Pick
                </span>
              </td>
              <td className="px-4 py-4">
                <span className="inline-flex items-center bg-sage-light text-forest text-xs font-semibold px-2.5 py-1 rounded-full">
                  {product.bestFor}
                </span>
              </td>
              <td className="px-4 py-4 text-gray-600">
                {product.scentNotes.length > 0
                  ? product.scentNotes.slice(0, 3).join(", ")
                  : "Various"}
              </td>
              <td className="px-4 py-4 text-center">
                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1.5 bg-forest text-white text-xs font-semibold px-3.5 py-2 rounded-full hover:bg-opacity-90 transition-all hover:scale-105"
                >
                  <ExternalLink size={12} />
                  Amazon
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
