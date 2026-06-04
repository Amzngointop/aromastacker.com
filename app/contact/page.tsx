import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { site } from "@/data/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — AromaStacker",
  description:
    "Get in touch with the AromaStacker team. Questions about our guides, product recommendations, or partnerships — we would love to hear from you.",
  alternates: { canonical: `${site.url}/contact` },
};

const faqs = [
  {
    question: "How do I suggest a product for review?",
    answer:
      "We welcome product recommendations from our readers. Send us an email at contact@aromastacker.com with the product name, Amazon ASIN, and why you think it belongs in our guides. We review every submission, though we cannot guarantee coverage.",
  },
  {
    question: "Do you accept sponsored content or paid placements?",
    answer:
      "No. Our editorial recommendations are independent and not influenced by manufacturer payments, free product samples, or advertising relationships. We participate in the Amazon Associates program but this does not affect which products we select or how we review them.",
  },
  {
    question: "Can I reprint or quote your articles?",
    answer:
      "Short quotes with proper attribution and a link back to the original article are generally acceptable. Reproducing full articles or significant portions is not permitted without written consent. Email us to discuss licensing arrangements.",
  },
  {
    question: "How quickly do you respond to emails?",
    answer:
      "We typically respond to all inquiries within 2–3 business days. During high-volume periods (seasonal launches, major editorial releases), response times may extend to 5 business days.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ backgroundColor: "#3D5A47" }} className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/40 text-sm">/</span>
            <span className="text-sage text-sm">Contact</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
            Questions, suggestions, corrections, or partnership inquiries — we read
            every message and respond to each one personally.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section style={{ backgroundColor: "#FAF7F2" }} className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Info */}
            <div>
              <h2 className="font-display text-3xl font-bold text-charcoal mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sage-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm mb-1">Email</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-forest hover:underline underline-offset-2 text-sm"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sage-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm mb-1">Office Address</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      AromaStacker Media LLC
                      <br />
                      4821 Holloway Ridge Lane, Suite 200
                      <br />
                      Portland, OR 97201
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sage-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm mb-1">Business Hours</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Monday – Friday: 9:00 AM – 5:00 PM PT
                      <br />
                      Saturday – Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sage-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm mb-1">Response Time</p>
                    <p className="text-gray-600 text-sm">
                      We respond to all emails within 2–3 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-display text-3xl font-bold text-charcoal mb-8">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#E8E0D0" }} className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-10">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-forest mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
