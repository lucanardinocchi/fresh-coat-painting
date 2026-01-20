"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";
import { COMPANY } from "@/lib/constants";

const benefits = [
  { icon: Clock, text: "Response within 24 hours" },
  { icon: CheckCircle, text: "No obligation quote" },
  { icon: Shield, text: "Licensed & insured" },
];

export default function GetAQuotePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://autoquote-phi.vercel.app/embed/quotrr-chat-fullpage.js";
    script.setAttribute("data-api-key", "ck_911efddcdecd488fa348f43a08ca53c9829666ffb0e7da89f3e87848a71cd322");
    script.setAttribute("data-container", "quotrr-chat");
    script.setAttribute("data-primary-color", "#1a2e44");
    script.setAttribute("data-header-text", "Get Your Free Quote");
    script.setAttribute("data-show-header", "true");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <main id="main-content">
      <style>{`
        /* Override Quotrr header styles for better contrast */
        .quotrr-fullpage-header {
          background: #1a2e44 !important;
        }
        .quotrr-fullpage-header * {
          color: white !important;
        }
        .quotrr-fullpage-header button {
          background: rgba(255,255,255,0.15) !important;
          color: white !important;
        }
        .quotrr-fullpage-header button:hover {
          background: rgba(255,255,255,0.25) !important;
        }
      `}</style>
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 min-h-screen bg-gradient-radial">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="badge mb-4">Free Quote</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl mb-4"
              >
                Get your free quote
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-charcoal-light mb-8"
              >
                Answer a few questions about your project. Takes about 2 minutes, 
                and we&apos;ll get back to you within 24 hours.
              </motion.p>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-3 mb-10"
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-charcoal-light">
                    <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center">
                      <benefit.icon className="w-4 h-4 text-navy" />
                    </div>
                    {benefit.text}
                  </div>
                ))}
              </motion.div>

              {/* Contact Alternative */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl p-6 card-shadow"
              >
                <p className="text-sm font-medium text-navy mb-4">Prefer to talk?</p>
                <div className="space-y-3">
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-sm text-charcoal-light hover:text-navy transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    {COMPANY.phone}
                  </a>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-3 text-sm text-charcoal-light hover:text-navy transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    {COMPANY.email}
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Chat Widget */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl overflow-hidden card-shadow-lg border border-border">
                <div id="quotrr-chat" style={{ height: "600px" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
