import Link from "next/link";
import { COMPANY, FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo & Info */}
          <div>
            <Link href="/" className="text-navy font-medium tracking-tight text-lg">
              Fresh Coat
            </Link>
            <p className="mt-4 text-sm text-charcoal-light leading-relaxed">
              {COMPANY.tagline}
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-charcoal-light hover:text-navy transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <ul className="space-y-2.5 text-sm text-charcoal-light">
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="hover:text-navy transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-navy transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-max py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-charcoal-light">
            © {new Date().getFullYear()} Fresh Coat Painting Co. · ABN {COMPANY.abn} · {COMPANY.licence}
          </p>
          <Link
            href="/privacy"
            className="text-xs text-charcoal-light hover:text-navy transition-colors"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
