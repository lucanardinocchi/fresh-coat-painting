"use client";

import { useEffect } from "react";

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
    <section className="pt-20 min-h-screen bg-white">
      <div className="container-max py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm text-charcoal-light mb-4 tracking-wide">Quote</p>
            <h1 className="mb-4">Get your free quote</h1>
            <p className="text-charcoal-light">
              Answer a few questions about your project. Takes about 2 minutes.
            </p>
          </div>

          <div className="bg-cream rounded-lg overflow-hidden border border-border">
            <div id="quotrr-chat" style={{ height: "550px" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
