import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  COMPANY,
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICES,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-white">Fresh Coat</span>{" "}
                <span className="text-terracotta">Painting Co.</span>
              </span>
            </Link>
            <p className="text-light-grey mb-4">{COMPANY.tagline}</p>
            <div className="text-sm text-light-grey space-y-1">
              <p>ABN {COMPANY.abn}</p>
              <p>Licence {COMPANY.licence}</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-light-grey hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-light-grey hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-light-grey hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-terracotta flex-shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-light-grey hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-terracotta flex-shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-light-grey">
                <MapPin className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                {COMPANY.serviceArea}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-light-grey text-sm">
            © {new Date().getFullYear()} Fresh Coat Painting Co. All rights
            reserved.
          </p>
          <Link
            href="/privacy"
            className="text-light-grey text-sm hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
