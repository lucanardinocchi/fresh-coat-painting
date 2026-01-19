import Link from "next/link";
import {
  COMPANY,
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICES,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Logo & Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-navy font-medium tracking-tight text-lg">
              Fresh Coat
            </Link>
            <p className="mt-4 text-sm text-charcoal-light leading-relaxed">
              {COMPANY.tagline}
            </p>
            <div className="mt-6 text-xs text-charcoal-light space-y-1">
              <p>ABN {COMPANY.abn}</p>
              <p>Licence {COMPANY.licence}</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-charcoal mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_QUICK_LINKS.map((link) => (
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

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-charcoal mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((link) => (
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

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-charcoal mb-4">
              Contact
            </h4>
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
              <li className="pt-2">
                {COMPANY.serviceArea}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-max py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-charcoal-light">
            © {new Date().getFullYear()} Fresh Coat Painting Co.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-charcoal-light hover:text-navy transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
