"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 px-5 py-3.5 rounded-full bg-gray-50 border border-gray-200 text-charcoal placeholder-gray-400 focus:outline-none focus:border-forest focus:bg-white transition-all font-body text-sm"
      />
      <button
        type="submit"
        className="px-7 py-3.5 rounded-full bg-forest text-white font-body font-bold text-sm hover:opacity-90 hover:scale-105 transition-all shadow-md whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
