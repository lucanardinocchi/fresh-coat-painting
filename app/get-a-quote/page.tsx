import Link from "next/link";

export default function GetAQuotePage() {
  return (
    <section className="min-h-[80vh] flex items-center pt-20">
      <div className="container-max">
        <div className="max-w-xl">
          <p className="text-sm text-charcoal-light mb-4 tracking-wide">Quote</p>
          <h1 className="mb-6">Get your free quote</h1>
          <p className="text-lg text-charcoal-light mb-8">
            Our quote tool is coming soon. In the meantime, get in touch directly.
          </p>
          <Link
            href="/contact"
            className="text-navy font-medium hover:text-navy-light transition-colors"
          >
            Contact us →
          </Link>
        </div>
      </div>
    </section>
  );
}
