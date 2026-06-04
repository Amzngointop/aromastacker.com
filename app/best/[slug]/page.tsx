import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import CTAButton from "@/components/CTAButton";
import { site, articleList } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: { absolute: article.metaTitle },
    description: article.metaDescription,
    alternates: { canonical: `${site.url}/best/${slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${site.url}/best/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const articleProducts = article.productIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as typeof products;

  const relatedArticles = articleList.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section style={{ backgroundColor: "#3D5A47" }} className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/40 text-sm">/</span>
            <span className="text-sage text-sm">Buying Guide</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {article.title}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
            {article.metaDescription}
          </p>
        </div>
      </section>

      {/* AFFILIATE DISCLOSURE */}
      <section style={{ backgroundColor: "#FAF7F2" }} className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 bg-beige rounded-xl px-5 py-3">
            <strong>Affiliate Disclosure:</strong> This page contains affiliate links. If you click a link
            and make a purchase, we may earn a commission at no extra cost to you.{" "}
            <Link href="/affiliate-disclosure" className="text-forest underline underline-offset-2">
              Full disclosure.
            </Link>
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ backgroundColor: "#FAF7F2" }} className="pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{article.intro}</p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ backgroundColor: "#E8E0D0" }} className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-8">
            Quick Comparison
          </h2>
          <ComparisonTable products={articleProducts} />
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{ backgroundColor: "#FAF7F2" }} className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-10">
            Our Top Picks — Reviewed
          </h2>
          <div className="space-y-8">
            {articleProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* BUYING GUIDE */}
      <section style={{ backgroundColor: "#D4E6C3" }} className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-6">
            Buying Guide
          </h2>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            {article.buyingGuide}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#E8E0D0" }} className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ items={article.faqs} />
        </div>
      </section>

      {/* FINAL RECOMMENDATION */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-6">
            Our Final Recommendation
          </h2>
          <div className="bg-sage-light rounded-2xl p-7 sm:p-9">
            <p className="text-charcoal leading-relaxed text-base sm:text-lg">
              {article.finalRecommendation}
            </p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <section style={{ backgroundColor: "#FAF7F2" }} className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-8">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/best/${a.slug}`}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-sage hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-display text-base font-bold text-charcoal mb-2 leading-tight group-hover:text-forest transition-colors">
                  {a.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-forest text-xs font-semibold mt-2 group-hover:gap-2.5 transition-all">
                  Read Guide <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
