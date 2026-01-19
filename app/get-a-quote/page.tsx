"use client";

import { useEffect } from "react";

export default function GetAQuotePage() {
  useEffect(() => {
    // Programmatically open the chat widget when page loads
    const checkAndOpen = setInterval(() => {
      if (typeof window !== "undefined" && (window as unknown as { QuotrrChat?: { open: () => void } }).QuotrrChat) {
        (window as unknown as { QuotrrChat: { open: () => void } }).QuotrrChat.open();
        clearInterval(checkAndOpen);
      }
    }, 500);

    return () => clearInterval(checkAndOpen);
  }, []);

  return (
    <section className="pt-20 min-h-screen bg-white">
      <div className="container-max py-12">
        <div className="max-w-xl">
          <p className="text-sm text-charcoal-light mb-4 tracking-wide">Quote</p>
          <h1 className="mb-6">Get your free quote</h1>
          <p className="text-charcoal-light leading-relaxed mb-8">
            Our assistant will guide you through a few questions about your 
            project. Takes about 2 minutes.
          </p>
          <p className="text-charcoal-light leading-relaxed mb-8">
            The chat should open automatically. If not, click the button in the bottom right corner.
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
      </div>

      {/* Floating widget script - loaded globally */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var script = document.createElement('script');
              script.src = 'https://autoquote-phi.vercel.app/embed/quotrr-chat.js';
              script.setAttribute('data-api-key', 'ck_911efddcdecd488fa348f43a08ca53c9829666ffb0e7da89f3e87848a71cd322');
              script.setAttribute('data-primary-color', '#1a2e44');
              script.setAttribute('data-button-text', 'Get Quote');
              script.setAttribute('data-header-text', 'Get Your Free Quote');
              script.async = true;
              document.body.appendChild(script);
            })();
          `,
        }}
      />
    </section>
  );
}
