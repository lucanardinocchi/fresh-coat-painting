export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-max">
          <p className="text-sm text-charcoal-light mb-4 tracking-wide">Legal</p>
          <h1 className="max-w-2xl">Privacy Policy</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <div className="max-w-2xl space-y-12">
            <div>
              <p className="text-charcoal-light leading-relaxed">
                Fresh Coat Painting Co. (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
                protecting your privacy. This policy explains how we collect, use,
                and safeguard your information.
              </p>
            </div>

            <div>
              <h2 className="text-xl mb-4">Information we collect</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                We may collect personal information when you:
              </p>
              <ul className="space-y-2 text-charcoal-light">
                <li>• Request a quote through our website</li>
                <li>• Contact us via phone, email, or form</li>
                <li>• Subscribe to our newsletter</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl mb-4">How we use your information</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-charcoal-light">
                <li>• Provide quotes and schedule services</li>
                <li>• Communicate with you about your project</li>
                <li>• Send promotional materials (with your consent)</li>
                <li>• Improve our website and services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl mb-4">Contact</h2>
              <p className="text-charcoal-light leading-relaxed">
                Questions about this policy? Contact us at{" "}
                <a
                  href="mailto:quotes@freshcoatadelaide.com.au"
                  className="text-navy hover:text-navy-light transition-colors"
                >
                  quotes@freshcoatadelaide.com.au
                </a>
              </p>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-charcoal-light">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
