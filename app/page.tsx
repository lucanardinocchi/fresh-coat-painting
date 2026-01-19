import Image from "next/image";
import Link from "next/link";
import { PaintRoller, Home as HomeIcon, Paintbrush, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CTABanner } from "@/components/sections/CTABanner";
import { COMPANY } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center pt-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy/40" />
        <div className="relative z-10 container-max text-center py-16">
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Quality Painting for Adelaide Homes
          </h1>
          <p className="text-xl text-white/90 max-w-[600px] mx-auto mb-8">
            Interior and exterior painting done right. Clean edges, honest pricing, zero shortcuts.
          </p>
          <Button href="/get-a-quote" size="lg">
            Get Your Free Quote
          </Button>

          {/* Trust Bar */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-0">
            <div className="flex items-center text-white font-medium">
              <span>{COMPANY.yearsInBusiness} Years in Business</span>
              <span className="hidden md:block mx-6 h-5 w-px bg-white/40" />
            </div>
            <div className="flex items-center text-white font-medium">
              <span>{COMPANY.homesPainted}+ Homes Painted</span>
              <span className="hidden md:block mx-6 h-5 w-px bg-white/40" />
            </div>
            <div className="flex items-center text-white font-medium">
              <span>{COMPANY.googleRating}★ on Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <h2 className="text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              icon={PaintRoller}
              title="Interior Painting"
              text="Walls, ceilings, doors, and trim. From single rooms to whole-house repaints."
              link={{ href: "/services/interior", label: "Learn more →" }}
            />
            <Card
              icon={HomeIcon}
              title="Exterior Painting"
              text="Weatherboards, render, brick, fascias, and fences. Built to handle Adelaide weather."
              link={{ href: "/services/exterior", label: "Learn more →" }}
            />
            <Card
              icon={Paintbrush}
              title="Specialty Services"
              text="Wallpaper removal, timber staining, colour consulting, and spray finishes."
              link={{ href: "/services/specialty", label: "Learn more →" }}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-warm-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image first on mobile */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Painter shaking hands with homeowner"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="lg:order-1">
              <h2 className="mb-6">Why Adelaide Homeowners Trust Us</h2>
              <p className="text-charcoal mb-8 leading-relaxed">
                We&apos;re not a franchise and we don&apos;t subcontract your job out. When you hire Fresh Coat, you get our team — the same painters who&apos;ve been with us for years. We show up on time, prep properly, and leave your home cleaner than we found it.
              </p>
              <ul className="space-y-4">
                {[
                  `Licensed and fully insured (${COMPANY.licence})`,
                  "3-year workmanship warranty on every job",
                  "We use Dulux and Taubmans — no cheap paint",
                  "Free colour consulting for indecisive moments",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <h2 className="text-center mb-12">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
                suburb: "Unley",
                description: "Full interior repaint, 4 bedrooms",
              },
              {
                src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
                suburb: "Glenelg",
                description: "Exterior weatherboards and fascias",
              },
              {
                src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
                suburb: "Norwood",
                description: "Kitchen cabinetry spray finish",
              },
              {
                src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
                suburb: "Prospect",
                description: "Feature walls and ceiling refresh",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="relative group aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={project.src}
                  alt={`${project.suburb} project`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <p className="font-bold text-lg mb-1">{project.suburb}</p>
                    <p className="text-sm text-white/80">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/our-work"
              className="inline-flex items-center text-terracotta font-semibold hover:gap-2 transition-all"
            >
              See more of our work
              <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-navy section-padding">
        <div className="container-max max-w-3xl text-center">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-terracotta text-terracotta" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl text-white/95 leading-relaxed mb-6">
            &ldquo;We had three painters quote our job and Fresh Coat was the only one who actually explained what prep work was needed. The finish is flawless — you&apos;d think it was a display home.&rdquo;
          </blockquote>
          <p className="text-white/80">— Sarah M., Burnside</p>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to refresh your home?"
        subtext="Get a ballpark estimate in under 2 minutes."
        buttonLabel="Get Your Free Quote"
        buttonHref="/get-a-quote"
      />
    </>
  );
}
