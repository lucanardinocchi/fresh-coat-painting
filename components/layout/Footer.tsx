"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Shield, Award, ArrowRight } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { COMPANY, FOOTER_LINKS } from "@/lib/constants";

const trustBadges = [
  { icon: Shield, label: "Licensed BLD 274819" },
  { icon: Award, label: "$20M Insured" },
  { icon: Clock, label: "3-Year Warranty" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      {/* Pre-footer CTA */}
      <div className="container-max py-12 md:py-16">
        <AnimateOnScroll variant="fadeUp">
          <div className="bg-cream rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl text-navy mb-2">Ready to transform your home?</h3>
              <p className="text-charcoal-light">Get a free quote in under 2 minutes.</p>
            </div>
            <Button href="/get-a-quote" size="lg">
              Get a Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-border">
        <div className="container-max py-8">
          <StaggerContainer className="flex flex-wrap justify-center gap-4 md:gap-8" staggerDelay={0.1}>
            {trustBadges.map((badge) => (
              <StaggerItem key={badge.label}>
                <div className="trust-badge">
                  <badge.icon className="w-4 h-4 text-navy" />
                  <span>{badge.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-border">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: Logo & About */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block text-navy font-semibold tracking-tight text-xl mb-4">
                Fresh Coat
              </Link>
              <p className="text-sm text-charcoal-light leading-relaxed mb-6">
                Adelaide&apos;s trusted residential painters since 2012. Quality work, honest pricing, guaranteed satisfaction.
              </p>
              <div className="flex items-center gap-3">
                <StarRating rating={COMPANY.googleRating} size={14} animated={false} />
                <span className="text-sm text-charcoal-light">{COMPANY.googleRating} Google Rating</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-charcoal-light hover:text-navy transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-navy/30 group-hover:bg-navy transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/get-a-quote"
                    className="text-sm text-charcoal-light hover:text-navy transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-navy/30 group-hover:bg-navy transition-colors" />
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-3">
                {[
                  { label: "Interior Painting", href: "/services#interior" },
                  { label: "Exterior Painting", href: "/services#exterior" },
                  { label: "Specialty Services", href: "/services#specialty" },
                  { label: "Colour Consulting", href: "/services#specialty" },
                ].map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-charcoal-light hover:text-navy transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-navy/30 group-hover:bg-navy transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-sm text-charcoal-light hover:text-navy transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-3 text-sm text-charcoal-light hover:text-navy transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-charcoal-light">
                  <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{COMPANY.serviceArea}</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-charcoal-light">
                  <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span>{COMPANY.hours}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-max py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-charcoal-light text-center sm:text-left">
            © {new Date().getFullYear()} Fresh Coat Painting Co. · ABN {COMPANY.abn} · {COMPANY.licence}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-charcoal-light hover:text-navy transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href={COMPANY.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-charcoal-light hover:text-navy transition-colors"
            >
              Leave a Review
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
