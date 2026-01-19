"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-navy font-medium tracking-tight text-lg">
            Fresh Coat
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  "children" in link && setOpenDropdown(link.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {"children" in link ? (
                  <>
                    <button className="flex items-center gap-1.5 text-sm text-charcoal-light hover:text-navy transition-colors">
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    <div
                      className={`absolute top-full left-0 pt-3 transition-all duration-200 ${
                        openDropdown === link.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-1"
                      }`}
                    >
                      <div className="bg-white border border-border py-2 min-w-[180px] shadow-sm">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-charcoal-light hover:text-navy hover:bg-cream transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm text-charcoal-light hover:text-navy transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button + Mobile Menu Toggle */}
          <div className="flex items-center gap-6">
            <Button href="/get-a-quote" size="sm" className="hidden sm:inline-flex">
              Get a Quote
            </Button>
            <button
              className="lg:hidden p-2 text-charcoal hover:text-navy transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen border-t border-border" : "max-h-0"
          }`}
        >
          <div className="py-4">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {"children" in link ? (
                  <div className="py-1">
                    <button
                      className="flex items-center justify-between w-full py-3 text-sm text-charcoal-light"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.label ? null : link.label
                        )
                      }
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        openDropdown === link.label ? "max-h-48" : "max-h-0"
                      }`}
                    >
                      <div className="pl-4 py-1 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 text-sm text-charcoal-light hover:text-navy transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-3 text-sm text-charcoal-light hover:text-navy transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 sm:hidden">
              <Button href="/get-a-quote" className="w-full">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
