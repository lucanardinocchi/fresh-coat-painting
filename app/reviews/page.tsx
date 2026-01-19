import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

const reviews = [
  {
    text: "Matt and his team painted our entire house interior—4 beds, 2 living areas, all the trim. The edges are razor sharp and they left the place spotless.",
    name: "Sarah M.",
    suburb: "Burnside",
  },
  {
    text: "Great communication from quote to completion. Price was fair and the quality is excellent. Will use again for the exterior next year.",
    name: "James T.",
    suburb: "Unley",
  },
  {
    text: "We had a strict deadline before settlement and they made it happen. Professional, fast, and the finish is perfect.",
    name: "Lisa & Mark W.",
    suburb: "Prospect",
  },
  {
    text: "Third time using Fresh Coat across different properties. Consistent quality every time. They're my go-to painters now.",
    name: "David R.",
    suburb: "Norwood",
  },
  {
    text: "Very happy with the work. Only minor issue was a small scheduling delay due to weather, but they kept us informed. End result is great.",
    name: "Karen H.",
    suburb: "Glenelg",
  },
  {
    text: "Our 1920s bungalow needed careful prep work and they nailed it. Patient with our colour indecision too!",
    name: "Michael S.",
    suburb: "Goodwood",
  },
  {
    text: "Spray painted our kitchen cabinets and the finish is like a factory job. Transformed the whole kitchen for a fraction of replacement cost.",
    name: "Amanda L.",
    suburb: "Mitcham",
  },
  {
    text: "Exterior repaint on our two-storey weatherboard. Neighbours have already asked for Matt's number. Says it all.",
    name: "Chris P.",
    suburb: "Semaphore",
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-max">
          <p className="text-sm text-charcoal-light mb-4 tracking-wide">Reviews</p>
          <h1 className="max-w-2xl mb-6">What our customers say</h1>
          <p className="text-lg text-charcoal-light">
            {COMPANY.googleRating} average from {COMPANY.totalReviews} Google reviews
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {reviews.map((review, index) => (
              <div key={index} className="bg-cream p-8 md:p-10">
                <blockquote className="text-charcoal-light leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <div>
                  <p className="text-navy font-medium">{review.name}</p>
                  <p className="text-sm text-charcoal-light">{review.suburb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Link */}
      <section className="py-12 bg-white">
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
          <h2 className="text-white mb-4">Ready to start?</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Get a quote and see what we can do.
          </p>
          <Button href="/get-a-quote" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
            Get Your Free Quote
          </Button>
        </div>
      </section>
    </>
  );
}
