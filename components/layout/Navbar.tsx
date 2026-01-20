"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Progress bar
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Skip to main content */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Progress bar */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[2px] bg-navy"
          style={{ width: progressWidth }}
        />

        <div className="container-max">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative text-navy font-semibold tracking-tight text-xl group"
            >
              <span className="relative z-10">Fresh Coat</span>
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-navy group-hover:w-full transition-all duration-300"
                layoutId="nav-underline"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative text-sm text-charcoal-light hover:text-navy transition-colors py-2 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* CTA Button + Phone + Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              {/* Phone number - desktop only */}
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="hidden lg:flex items-center gap-2 text-sm text-charcoal-light hover:text-navy transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY.phone}</span>
              </a>

              <Button href="/get-a-quote" size="sm" className="hidden sm:inline-flex">
                Get a Quote
              </Button>

              <motion.button
                className="md:hidden p-2 text-charcoal hover:text-navy transition-colors relative z-50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-navy/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-cream z-40 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 px-6 pb-8">
                <nav className="flex-1">
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="block py-4 text-2xl font-medium text-navy hover:text-navy-light transition-colors border-b border-border"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4"
                >
                  <Button href="/get-a-quote" className="w-full" size="lg">
                    Get a Quote
                  </Button>
                  
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 text-charcoal-light hover:text-navy transition-colors py-3"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{COMPANY.phone}</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating CTA on mobile - appears after scroll */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-6 left-4 right-4 z-40 sm:hidden"
          >
            <Button href="/get-a-quote" className="w-full shadow-lg" size="lg">
              Get a Quote
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
