import Link from "next/link";
import { site, footerLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-display text-2xl font-bold mb-3">{site.name}</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {site.description}
            </p>
            <p className="mt-4 text-xs text-gray-500">
              AromaStacker.com is a participant in the Amazon Services LLC Associates Program,
              an affiliate advertising program designed to provide a means for sites to earn
              advertising fees by advertising and linking to Amazon.com.
            </p>
          </div>

          {/* Guides */}
          <div>
            <p className="font-display text-lg font-semibold mb-4">Buying Guides</p>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-display text-lg font-semibold mb-4">Site Info</p>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Contact:{" "}
            <a href={`mailto:${site.email}`} className="hover:text-gray-300 transition-colors">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
