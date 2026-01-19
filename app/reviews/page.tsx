import { Button } from "@/components/ui/Button";
import { ReviewCard } from "@/components/sections/ReviewCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { COMPANY } from "@/lib/constants";

const reviews = [
  {
    rating: 5,
    text: "Matt and his team painted our entire house interior — 4 beds, 2 living areas, all the trim. The edges are razor sharp and they left the place spotless. Highly recommend.",
    name: "Sarah M.",
    suburb: "Burnside",
  },
  {
    rating: 5,
    text: "Great communication from quote to completion. Price was fair and the quality is excellent. Will use again for the exterior next year.",
    name: "James T.",
    suburb: "Unley",
  },
  {
    rating: 5,
    text: "We had a strict deadline before settlement and they made it happen. Professional, fast, and the finish is perfect.",
    name: "Lisa & Mark W.",
    suburb: "Prospect",
  },
  {
    rating: 5,
    text: "Third time using Fresh Coat across different properties. Consistent quality every time. They're my go-to painters now.",
    name: "David R.",
    suburb: "Norwood",
  },
  {
    rating: 4,
    text: "Very happy with the work. Only minor issue was a small scheduling delay due to weather, but they kept us informed. End result is great.",
    name: "Karen H.",
    suburb: "Glenelg",
  },
  {
    rating: 5,
    text: "Our 1920s bungalow needed careful prep work and they nailed it. Patient with our colour indecision too!",
    name: "Michael S.",
    suburb: "Goodwood",
  },
  {
    rating: 5,
    text: "Spray painted our kitchen cabinets and the finish is like a factory job. Transformed the whole kitchen for a fraction of replacement cost.",
    name: "Amanda L.",
    suburb: "Mitcham",
  },
  {
    rating: 5,
    text: "Exterior repaint on our two-storey weatherboard. Neighbours have already asked for Matt's number. Says it all.",
    name: "Chris P.",
    suburb: "Semaphore",
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy min-h-[40vh] flex items-center justify-center pt-20">
        <div className="container-max text-center py-16">
          <h1 className="text-white mb-4">What Our Customers Say</h1>
          <p className="text-xl text-white/90 max-w-[600px] mx-auto">
            {COMPANY.googleRating}★ average from {COMPANY.totalReviews} Google reviews
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                rating={review.rating}
                text={review.text}
                name={review.name}
                suburb={review.suburb}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Google CTA */}
      <section className="bg-warm-white section-padding">
        <div className="container-max text-center">
          <p className="text-charcoal mb-6">See all our reviews on Google</p>
          <Button href={COMPANY.googleReviewsUrl} external>
            Read More Reviews
          </Button>
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
