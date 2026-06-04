"use client";

import { site } from "@/data/site";

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-1.5">
          Your Name
        </label>
        <input
          type="text"
          placeholder="Jane Smith"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all text-sm text-charcoal placeholder-gray-400"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          placeholder="jane@example.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all text-sm text-charcoal placeholder-gray-400"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-charcoal mb-1.5">
          Message
        </label>
        <textarea
          rows={5}
          placeholder="What would you like to share or ask?"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all text-sm text-charcoal placeholder-gray-400 resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3.5 rounded-full bg-forest text-white font-body font-bold text-sm hover:bg-opacity-90 hover:scale-105 transition-all shadow-md"
      >
        Send Message
      </button>
      <p className="text-xs text-gray-400 text-center">
        This form is for demonstration. Email us directly at{" "}
        <a href={`mailto:${site.email}`} className="text-forest underline underline-offset-2">
          {site.email}
        </a>
      </p>
    </form>
  );
}
