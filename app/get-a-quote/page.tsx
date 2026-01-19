"use client";

import { useEffect, useState } from "react";

export default function GetAQuotePage() {
  const [debugLog, setDebugLog] = useState<string[]>([]);

  const addLog = (msg: string) => {
    setDebugLog(prev => [...prev, `${new Date().toLocaleTimeString()}: ${msg}`]);
  };

  useEffect(() => {
    addLog("Starting script load...");
    addLog(`Origin: ${window.location.origin}`);

    const script = document.createElement("script");
    script.src = "https://autoquote-phi.vercel.app/embed/quotrr-chat-fullpage.js";
    script.setAttribute("data-api-key", "ck_911efddcdecd488fa348f43a08ca53c9829666ffb0e7da89f3e87848a71cd322");
    script.setAttribute("data-container", "quotrr-chat");
    script.setAttribute("data-primary-color", "#1a2e44");
    script.setAttribute("data-header-text", "Get Your Free Quote");
    script.setAttribute("data-show-header", "true");
    script.async = true;

    script.onload = () => {
      addLog("✓ Script loaded successfully");
      addLog(`QuotrrChatFullPage exists: ${!!(window as any).QuotrrChatFullPage}`);
    };

    script.onerror = (error) => {
      addLog(`✗ Script failed to load: ${error}`);
    };

    document.body.appendChild(script);

    // Monitor for WebSocket connections
    const OriginalWebSocket = window.WebSocket;
    (window as any).WebSocket = function(url: string, protocols?: string | string[]) {
      addLog(`WebSocket connecting to: ${url}`);
      const ws = new OriginalWebSocket(url, protocols);
      ws.addEventListener('open', () => addLog('✓ WebSocket opened'));
      ws.addEventListener('error', () => addLog('✗ WebSocket error'));
      ws.addEventListener('close', (e) => addLog(`WebSocket closed: code=${e.code}`));
      return ws;
    };
    (window as any).WebSocket.prototype = OriginalWebSocket.prototype;

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      (window as any).WebSocket = OriginalWebSocket;
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

            {/* Debug Log */}
            <div className="mt-8 p-4 bg-gray-100 rounded text-xs font-mono">
              <p className="font-bold mb-2">Debug Log:</p>
              {debugLog.map((log, i) => (
                <p key={i} className={log.includes('✗') ? 'text-red-600' : log.includes('✓') ? 'text-green-600' : 'text-gray-600'}>
                  {log}
                </p>
              ))}
            </div>
          </div>

          {/* Chat Column */}
          <div className="bg-cream rounded-lg overflow-hidden border border-border min-h-[600px]">
            <div id="quotrr-chat" style={{ height: "600px" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
