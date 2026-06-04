"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site, nav } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-display text-xl font-bold text-forest hover:opacity-80 transition-opacity">
            {site.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-body text-charcoal hover:text-forest transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/#aroma-builder"
              className="text-sm font-body font-medium text-white px-4 py-2 rounded-full transition-colors duration-200"
              style={{ backgroundColor: "#3D5A47" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2e4436")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3D5A47")}
            >
              Build Your Scent
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-charcoal hover:text-forest transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col py-4 px-4 gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2.5 px-3 text-sm font-body text-charcoal hover:text-forest hover:bg-cream rounded-lg transition-all"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/#aroma-builder"
              onClick={() => setOpen(false)}
              className="mt-2 py-2.5 text-sm font-body font-medium text-white text-center rounded-full transition-colors duration-200"
              style={{ backgroundColor: "#3D5A47" }}
            >
              Build Your Scent
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
