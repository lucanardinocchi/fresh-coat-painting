import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center pt-20">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-sm text-charcoal-light mb-6 tracking-wide">
              Adelaide&apos;s residential painting specialists
            </p>
            <h1 className="text-balance mb-8">
              Quality painting for homes that deserve better
            </h1>
            <p className="text-lg text-charcoal-light max-w-xl mb-10 leading-relaxed">
              Clean edges, honest pricing, zero shortcuts. We&apos;ve been painting 
              Adelaide homes for {COMPANY.yearsInBusiness} years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/get-a-quote" size="lg">
                Get a Quote
              </Button>
              <Button href="/our-work" variant="ghost" size="lg">
                View Our Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border">
        <div className="container-max py-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-light text-navy">{COMPANY.yearsInBusiness}</p>
              <p className="text-sm text-charcoal-light mt-2">Years in business</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-light text-navy">{COMPANY.homesPainted}+</p>
              <p className="text-sm text-charcoal-light mt-2">Homes painted</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-light text-navy">{COMPANY.googleRating}</p>
              <p className="text-sm text-charcoal-light mt-2">Google rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-xl mb-16">
            <p className="text-sm text-charcoal-light mb-4 tracking-wide">Services</p>
            <h2>What we do</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              {
                title: "Interior Painting",
                description: "Walls, ceilings, doors, and trim. From single rooms to whole-house repaints.",
                href: "/services#interior",
              },
              {
                title: "Exterior Painting",
                description: "Weatherboards, render, brick, fascias, and fences. Built for Adelaide weather.",
                href: "/services#exterior",
              },
              {
                title: "Specialty Services",
                description: "Wallpaper removal, timber staining, colour consulting, and spray finishes.",
                href: "/services#specialty",
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-cream p-8 md:p-10 hover:bg-cream-dark transition-colors"
              >
                <h3 className="text-navy mb-4 group-hover:text-navy-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-charcoal-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm text-navy group-hover:gap-3 gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-sm text-charcoal-light mb-4 tracking-wide">Why us</p>
              <h2 className="mb-8">A small team that does things properly</h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                We&apos;re not a franchise and we don&apos;t subcontract. When you hire 
                Fresh Coat, you get our team—the same painters who&apos;ve been with 
                us for years.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                We show up on time, prep properly, and leave your home cleaner 
                than we found it.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Licensed & insured",
                  description: `BLD ${COMPANY.licence.replace("BLD ", "")} with $20M public liability coverage.`,
                },
                {
                  title: "3-year warranty",
                  description: "Workmanship guarantee on every job we complete.",
                },
                {
                  title: "Quality paint only",
                  description: "We use Dulux and Taubmans—never cheap alternatives.",
                },
                {
                  title: "Free colour advice",
                  description: "Stuck on colours? We'll help you choose.",
                },
              ].map((item) => (
                <div key={item.title} className="border-b border-border pb-8 last:border-0">
                  <h3 className="text-base font-medium text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-charcoal-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-light text-navy leading-relaxed mb-8">
              &ldquo;Fresh Coat was the only painter who actually explained what 
              prep work was needed. The finish is flawless—you&apos;d think it 
              was a display home.&rdquo;
            </blockquote>
            <p className="text-sm text-charcoal-light">
              Sarah M. — Burnside
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="container-max text-center">
          <h2 className="text-white mb-4">Ready to start?</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Get a ballpark estimate in under 2 minutes.
          </p>
          <Button href="/get-a-quote" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
            Get Your Free Quote
          </Button>
        </div>
      </section>
    </>
  );
}
