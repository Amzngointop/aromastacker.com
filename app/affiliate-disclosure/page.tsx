import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — AromaStacker",
  description:
    "AromaStacker's full affiliate disclosure. We participate in Amazon Associates. Learn how this affects our recommendations.",
  alternates: { canonical: `${site.url}/affiliate-disclosure` },
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <section style={{ backgroundColor: "#3D5A47" }} className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">Home</Link>
            <span className="text-white/40 text-sm">/</span>
            <span className="text-sage text-sm">Affiliate Disclosure</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Affiliate Disclosure</h1>
          <p className="text-white/60 text-sm">Last updated: May 28, 2026</p>
        </div>
      </section>

      <section style={{ backgroundColor: "#FAF7F2" }} className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700 text-base leading-relaxed">

            <div className="bg-sage-light rounded-2xl p-7 border-l-4 border-forest">
              <p className="font-semibold text-forest text-base">
                Summary: AromaStacker earns commissions from Amazon when readers click our links and make purchases.
                This never affects which products we recommend or how we describe them.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Amazon Associates Program</h2>
              <p>
                AromaStacker (&quot;we,&quot; &quot;our,&quot; or &quot;the Site&quot;) is a participant in the Amazon Services LLC
                Associates Program, an affiliate advertising program designed to provide a means for websites
                to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate,
                we earn from qualifying purchases.
              </p>
              <p className="mt-3">
                This means that when you click a product link on our site and subsequently make a purchase
                on Amazon.com, we may receive a small commission. The price you pay is not affected in any
                way — Amazon pays our commission separately.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Editorial Independence</h2>
              <p>
                Our affiliate participation does not influence our editorial content. Products are selected
                for our guides based on fragrance quality, user-reported performance, value, and suitability
                for home scent layering — not on commission rates, manufacturer relationships, or payment
                arrangements of any kind.
              </p>
              <p className="mt-3">
                We do not accept free products in exchange for positive reviews. We do not accept paid
                placements, sponsored recommendations, or manufacturer-funded content. Every recommendation
                on this site is made because we believe it represents genuine value for home fragrance enthusiasts.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">How to Identify Affiliate Links</h2>
              <p>
                All product links that direct to Amazon.com are affiliate links. They can be identified by
                the presence of our affiliate tag (<code className="bg-beige px-2 py-0.5 rounded text-sm font-mono text-forest">YOURTAG-20</code>) in
                the URL. We do not disguise or obscure affiliate links. We also include disclosure notices on
                every article page where affiliate links appear.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">FTC Compliance</h2>
              <p>
                This disclosure is made in compliance with the Federal Trade Commission&apos;s guidelines on
                endorsements and testimonials (16 C.F.R. Part 255). The FTC requires that material connections
                between endorsers and product sellers — including affiliate relationships — be clearly disclosed
                to readers. We take this requirement seriously and maintain transparency about our affiliate
                relationships throughout the site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">Questions</h2>
              <p>
                If you have any questions about our affiliate relationships or how they may affect our content,
                please contact us at{" "}
                <a href={`mailto:${site.email}`} className="text-forest underline underline-offset-2">
                  {site.email}
                </a>.
                We are committed to full transparency and will answer any questions you have.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
