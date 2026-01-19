"use client";

import { useEffect } from "react";

export default function GetAQuotePage() {
  useEffect(() => {
    // Load the Quotrr chat script
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
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="pt-20 min-h-screen bg-white">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Info Column */}
          <div className="lg:sticky lg:top-32">
            <p className="text-sm text-charcoal-light mb-4 tracking-wide">Quote</p>
            <h1 className="mb-6">Get your free quote</h1>
            <p className="text-charcoal-light leading-relaxed mb-8">
              Our assistant will guide you through a few questions about your 
              project. Takes about 2 minutes.
            </p>

            <div className="space-y-6 text-sm">
              <div>
                <p className="text-navy font-medium mb-2">What you&apos;ll need</p>
                <ul className="space-y-2 text-charcoal-light">
                  <li>• Project address</li>
                  <li>• Approximate room sizes</li>
                  <li>• Photos (optional but helpful)</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-navy font-medium mb-2">Prefer to talk?</p>
                <p className="text-charcoal-light">
                  Call us on{" "}
                  <a href="tel:0872254183" className="text-navy hover:text-navy-light transition-colors">
                    08 7225 4183
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Chat Column */}
          <div className="bg-cream rounded-lg overflow-hidden border border-border min-h-[600px]">
            <div id="quotrr-chat" className="h-[600px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
