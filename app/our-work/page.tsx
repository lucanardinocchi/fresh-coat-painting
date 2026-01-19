import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

const projects = [
  {
    suburb: "Burnside",
    scope: "Full interior repaint",
    detail: "4 bedrooms, 2 living areas, all trim",
    review: "The edges are razor sharp and they left the place spotless. Highly recommend.",
    client: "Sarah M.",
  },
  {
    suburb: "Unley",
    scope: "Whole house interior",
    detail: "Heritage home, neutral palette",
    review: "Great communication from quote to completion. Price was fair and the quality is excellent.",
    client: "James T.",
  },
  {
    suburb: "Prospect",
    scope: "Feature walls and refresh",
    detail: "Living areas and ceiling",
    review: "We had a strict deadline before settlement and they made it happen. The finish is perfect.",
    client: "Lisa & Mark W.",
  },
  {
    suburb: "Norwood",
    scope: "Kitchen cabinetry spray",
    detail: "White gloss finish",
    review: "Third time using Fresh Coat across different properties. Consistent quality every time.",
    client: "David R.",
  },
  {
    suburb: "Glenelg",
    scope: "Exterior weatherboards",
    detail: "Single storey, white with charcoal trim",
    review: "Very happy with the work. They kept us informed throughout. End result is great.",
    client: "Karen H.",
  },
  {
    suburb: "Goodwood",
    scope: "Master bedroom and ensuite",
    detail: "1920s bungalow",
    review: "Our bungalow needed careful prep work and they nailed it. Patient with our colour indecision too!",
    client: "Michael S.",
  },
  {
    suburb: "Mitcham",
    scope: "Kitchen cabinetry",
    detail: "Spray finish",
    review: "The finish is like a factory job. Transformed the whole kitchen for a fraction of replacement cost.",
    client: "Amanda L.",
  },
  {
    suburb: "Semaphore",
    scope: "Exterior weatherboards",
    detail: "Two storey home",
    review: "Neighbours have already asked for Matt's number. Says it all.",
    client: "Chris P.",
  },
];

export default function OurWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-max">
          <p className="text-sm text-charcoal-light mb-4 tracking-wide">Work</p>
          <h1 className="max-w-2xl mb-6">What our clients say</h1>
          <p className="text-lg text-charcoal-light max-w-xl">
            {COMPANY.homesPainted}+ homes painted. {COMPANY.googleRating}★ from {COMPANY.totalReviews} reviews.
          </p>
        </div>
      </section>

      {/* Projects with Reviews */}
      <section className="border-t border-border">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`section-padding ${index % 2 === 1 ? "bg-white" : ""}`}
          >
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Project Info */}
                <div>
                  <p className="text-sm text-charcoal-light mb-2">{project.scope}</p>
                  <h2 className="text-2xl mb-2">{project.suburb}</h2>
                  <p className="text-charcoal-light">{project.detail}</p>
                </div>

                {/* Review */}
                <div className="lg:border-l lg:border-border lg:pl-16">
                  <blockquote className="text-charcoal-light leading-relaxed mb-4">
                    &ldquo;{project.review}&rdquo;
                  </blockquote>
                  <p className="text-sm text-navy font-medium">{project.client}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Google Link */}
      <section className="py-12 border-t border-border">
        <div className="container-max text-center">
          <a
            href={COMPANY.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-charcoal-light hover:text-navy transition-colors"
          >
            Read all reviews on Google →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="container-max text-center">
          <h2 className="text-white mb-4">Your home could be next</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Get a quote and see what we can do for you.
          </p>
          <Button href="/get-a-quote" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
            Get Your Free Quote
          </Button>
        </div>
      </section>
    </>
  );
}
