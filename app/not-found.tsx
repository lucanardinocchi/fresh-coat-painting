import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center pt-20">
      <div className="container-max">
        <div className="max-w-xl">
          <p className="text-sm text-charcoal-light mb-4 tracking-wide">404</p>
          <h1 className="mb-6">Page not found</h1>
          <p className="text-lg text-charcoal-light mb-8">
            Sorry, that page doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-navy font-medium hover:text-navy-light transition-colors"
            >
              Go home →
            </Link>
            <Link
              href="/contact"
              className="text-navy font-medium hover:text-navy-light transition-colors"
            >
              Contact us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
