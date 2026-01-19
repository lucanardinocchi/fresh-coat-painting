import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

const projects = [
  { suburb: "Unley", scope: "Full interior repaint", type: "Interior", rooms: "4 bedrooms" },
  { suburb: "Glenelg", scope: "Weatherboards and fascias", type: "Exterior", rooms: "Single storey" },
  { suburb: "Norwood", scope: "Kitchen cabinetry spray", type: "Specialty", rooms: "White gloss" },
  { suburb: "Prospect", scope: "Feature walls", type: "Interior", rooms: "Living areas" },
  { suburb: "Burnside", scope: "Whole house interior", type: "Interior", rooms: "Heritage home" },
  { suburb: "Henley Beach", scope: "Exterior render", type: "Exterior", rooms: "Coastal tones" },
  { suburb: "Mitcham", scope: "Deck staining", type: "Specialty", rooms: "Spotted gum" },
  { suburb: "Goodwood", scope: "Master bedroom and ensuite", type: "Interior", rooms: "2 rooms" },
  { suburb: "North Adelaide", scope: "Exterior brick painting", type: "Exterior", rooms: "White finish" },
  { suburb: "Parkside", scope: "Hallway and skirting", type: "Interior", rooms: "High traffic" },
  { suburb: "Semaphore", scope: "Weatherboards", type: "Exterior", rooms: "Two storey" },
  { suburb: "Fullarton", scope: "Investment property", type: "Interior", rooms: "Full turnover" },
];

const reviews = [
  {
    text: "The edges are razor sharp and they left the place spotless. Highly recommend.",
    name: "Sarah M.",
    suburb: "Burnside",
  },
  {
    text: "Great communication from quote to completion. Price was fair and the quality is excellent.",
    name: "James T.",
    suburb: "Unley",
  },
  {
    text: "We had a strict deadline before settlement and they made it happen. The finish is perfect.",
    name: "Lisa & Mark W.",
    suburb: "Prospect",
  },
  {
    text: "Third time using Fresh Coat across different properties. Consistent quality every time.",
    name: "David R.",
    suburb: "Norwood",
  },
];

export default function OurWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-max">
          <p className="text-sm text-charcoal-light mb-4 tracking-wide">Work</p>
          <h1 className="max-w-2xl mb-6">500+ homes and counting</h1>
          <p className="text-lg text-charcoal-light max-w-xl">
            A selection of recent projects across Adelaide.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <div className="divide-y divide-border">
            {projects.map((project, index) => (
              <div key={index} className="py-6 first:pt-0 last:pb-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline">
                  <div className="md:col-span-3">
                    <p className="text-navy font-medium">{project.suburb}</p>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-charcoal-light">{project.scope}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-sm text-charcoal-light">{project.rooms}</p>
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <span className="text-xs text-charcoal-light uppercase tracking-wider">
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex items-baseline justify-between mb-10">
            <h2>What customers say</h2>
            <p className="text-sm text-charcoal-light">
              {COMPANY.googleRating}★ from {COMPANY.totalReviews} reviews
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="border-l-2 border-border pl-6">
                <blockquote className="text-charcoal-light leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <p className="text-sm">
                  <span className="text-navy font-medium">{review.name}</span>
                  <span className="text-charcoal-light"> · {review.suburb}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={COMPANY.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-charcoal-light hover:text-navy transition-colors"
            >
              Read all reviews on Google →
            </a>
          </div>
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
