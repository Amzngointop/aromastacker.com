import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions — AromaStacker",
  description: "Terms and conditions governing use of the AromaStacker website.",
  alternates: { canonical: `${site.url}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <section style={{ backgroundColor: "#3D5A47" }} className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">Home</Link>
            <span className="text-white/40 text-sm">/</span>
            <span className="text-sage text-sm">Terms & Conditions</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-white/60 text-sm">Last updated: May 28, 2026</p>
        </div>
      </section>

      <section style={{ backgroundColor: "#FAF7F2" }} className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700 text-base leading-relaxed">

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using {site.url} (&quot;the Site&quot;), you accept and agree to be bound by these
                Terms and Conditions. If you do not agree to these terms, please do not use the Site. These
                terms apply to all visitors, users, and others who access or use the Site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">2. Use of the Site</h2>
              <p className="mb-3">You agree to use the Site only for lawful purposes and in a manner that does not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Infringe the rights of others</li>
                <li>Interfere with or disrupt the Site or its servers</li>
                <li>Attempt to gain unauthorized access to any part of the Site</li>
                <li>Collect or harvest personal data from other users</li>
                <li>Use the Site to distribute spam, malware, or harmful content</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">3. Affiliate Relationships</h2>
              <p>
                AromaStacker participates in the Amazon Services LLC Associates Program. Product links on this
                Site may be affiliate links — when you click and make a purchase, we may earn a commission at
                no additional cost to you. Our editorial recommendations are not influenced by these affiliate
                relationships. See our{" "}
                <Link href="/affiliate-disclosure" className="text-forest underline underline-offset-2">
                  full Affiliate Disclosure
                </Link>{" "}
                for complete details.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">4. Intellectual Property</h2>
              <p>
                All content on this Site — including articles, descriptions, graphics, and the site design — is
                the property of AromaStacker Media LLC and is protected by applicable copyright, trademark, and
                other intellectual property laws. You may not reproduce, distribute, or create derivative works
                without our express written permission. Brief quotations with attribution and a link back are
                generally permitted under fair use principles.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">5. Disclaimer of Warranties</h2>
              <p>
                The Site and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without any
                warranties of any kind, express or implied. We do not warrant that the Site will be error-free,
                uninterrupted, or free of viruses or other harmful components. Product information, including
                pricing and availability, is provided for general guidance only; always verify current details
                on Amazon.com before making a purchase.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, AromaStacker Media LLC shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages arising from your
                use of or inability to use the Site or its content, even if we have been advised of the
                possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">7. Third-Party Links</h2>
              <p>
                The Site contains links to third-party websites, including Amazon.com. These links are provided
                for your convenience. We have no control over the content, privacy practices, or policies of
                third-party sites and accept no responsibility for them.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">8. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of
                Oregon, United States, without regard to its conflict of law provisions. Any disputes arising
                under these Terms shall be subject to the exclusive jurisdiction of the courts of Oregon.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be posted on this page
                with an updated &quot;Last updated&quot; date. Continued use of the Site after any changes constitutes
                acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">10. Contact</h2>
              <p>
                Questions about these Terms? Contact us at{" "}
                <a href={`mailto:${site.email}`} className="text-forest underline underline-offset-2">
                  {site.email}
                </a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
