import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy — AromaStacker",
  description: "AromaStacker privacy policy. How we collect, use, and protect your information.",
  alternates: { canonical: `${site.url}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section style={{ backgroundColor: "#3D5A47" }} className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">Home</Link>
            <span className="text-white/40 text-sm">/</span>
            <span className="text-sage text-sm">Privacy Policy</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/60 text-sm">Last updated: May 28, 2026</p>
        </div>
      </section>

      <section style={{ backgroundColor: "#FAF7F2" }} className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <div className="space-y-10 text-gray-700 text-base leading-relaxed">

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">1. Introduction</h2>
              <p>
                AromaStacker (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates {site.url}. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you visit our website. Please read
                this policy carefully. By using the site, you consent to the practices described here.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Usage Data:</strong> Pages viewed, time on site, referring URLs, browser type, and device information collected automatically via server logs and analytics tools.</li>
                <li><strong>Voluntarily Submitted Information:</strong> Name and email address if you contact us through our contact form or subscribe to our newsletter.</li>
                <li><strong>Cookies:</strong> Small data files stored on your device by your browser. We use cookies for site functionality and aggregate analytics. See Section 5 for details.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To operate and improve the website and its content</li>
                <li>To respond to your messages and inquiries</li>
                <li>To send editorial newsletters if you have subscribed (you may unsubscribe at any time)</li>
                <li>To analyze aggregated site usage trends</li>
                <li>To comply with legal obligations</li>
              </ul>
              <p className="mt-3">We do not sell, rent, or trade your personal information to third parties.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">4. Amazon Associates Disclosure</h2>
              <p>
                AromaStacker participates in the Amazon Services LLC Associates Program, an affiliate advertising
                program that allows us to earn advertising fees by linking to Amazon.com. When you click an Amazon
                link on this site and make a qualifying purchase, Amazon may use cookies to track the referral.
                Amazon&apos;s privacy practices are governed by{" "}
                <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496" target="_blank" rel="noopener noreferrer" className="text-forest underline underline-offset-2">
                  Amazon&apos;s Privacy Notice
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">5. Cookies</h2>
              <p>
                We use essential cookies necessary for the site to function and may use analytics cookies
                (such as Google Analytics) to understand site traffic in aggregate. You may disable cookies
                through your browser settings, though doing so may affect site functionality. We do not use
                advertising cookies or cross-site tracking cookies.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">6. Third-Party Links</h2>
              <p>
                Our site contains links to Amazon.com and other third-party websites. We are not responsible
                for the privacy practices of those sites. We encourage you to review the privacy policies of
                any external sites you visit.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">7. Data Retention</h2>
              <p>
                We retain contact form submissions and email addresses for as long as reasonably necessary to
                fulfill the purpose for which they were collected, or as required by applicable law. You may
                request deletion of your data at any time by emailing {site.email}.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">8. Children&apos;s Privacy</h2>
              <p>
                This website is not directed to children under the age of 13. We do not knowingly collect
                personal information from children. If you believe a child has submitted personal information
                to us, please contact us at {site.email} and we will promptly delete it.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">9. Your Rights</h2>
              <p>
                Depending on your jurisdiction, you may have the right to access, correct, or delete personal
                information we hold about you. To exercise these rights, email us at{" "}
                <a href={`mailto:${site.email}`} className="text-forest underline underline-offset-2">{site.email}</a>.
                We will respond within 30 days.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top of
                this page indicates when changes were last made. Continued use of the site after updates
                constitutes acceptance of the revised policy.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-4">11. Contact</h2>
              <p>
                Questions about this Privacy Policy? Contact us at{" "}
                <a href={`mailto:${site.email}`} className="text-forest underline underline-offset-2">{site.email}</a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
