import Image from "next/image";
import { Check, CloudSun } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTABanner } from "@/components/sections/CTABanner";

const serviceItems = [
  "Rendered walls (cement, acrylic, texture coat)",
  "Weatherboard walls",
  "Brick painting (with sealer)",
  "Fascias and gutters",
  "Eaves and soffits",
  "Front doors and garage doors",
  "Timber and Colorbond fencing",
];

const processSteps = [
  {
    number: "1",
    title: "Get Your Quote",
    text: "We'll visit your property, assess the surfaces, and provide a detailed written quote.",
  },
  {
    number: "2",
    title: "Prep & Wash",
    text: "We pressure wash walls, scrape flaking paint, fill cracks, and prime bare spots.",
  },
  {
    number: "3",
    title: "Paint",
    text: "Two coats of exterior-grade paint. We work section by section and watch the weather.",
  },
  {
    number: "4",
    title: "Final Inspection",
    text: "We walk the perimeter with you and touch up any areas before packing up.",
  },
];

const faqItems = [
  {
    question: "How long does an exterior paint job take?",
    answer:
      "A single-storey home typically takes 3–5 days depending on prep required. Two-storey homes take 5–8 days.",
  },
  {
    question: "Do you paint in winter?",
    answer:
      "Yes, Adelaide winters are mild enough for exterior painting. We avoid days below 10°C or with rain forecast.",
  },
  {
    question: "How do you handle high areas?",
    answer:
      "We use extension ladders for most work. For two-storey homes or difficult access, we arrange scaffold hire (quoted separately).",
  },
  {
    question: "How long will the paint last?",
    answer:
      "With proper prep and quality paint, you can expect 10–15 years on exteriors before a repaint is needed.",
  },
];

export default function ExteriorPaintingPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center pt-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy/40" />
        <div className="relative z-10 container-max text-center py-16">
          <h1 className="text-white mb-4">Exterior Painting</h1>
          <p className="text-xl text-white/90 max-w-[600px] mx-auto">
            Protection and kerb appeal that lasts.
          </p>
        </div>
      </section>

      {/* Service List */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="mb-8">What&apos;s Included</h2>
              <ul className="space-y-4 mb-6">
                {serviceItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-charcoal/80 text-sm italic">
                All exterior jobs include pressure washing or sugar soap preparation, and paint rated for Adelaide&apos;s UV and weather conditions.
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Completed exterior painting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-warm-white section-padding">
        <div className="container-max">
          <h2 className="text-center mb-12">How It Works</h2>
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* Weather Note */}
      <section className="bg-white section-padding">
        <div className="container-max max-w-[700px] text-center">
          <CloudSun className="w-12 h-12 text-terracotta mx-auto mb-4" />
          <h3 className="mb-4">We Work With Adelaide Weather</h3>
          <p className="text-charcoal">
            Exterior painting requires dry conditions and moderate temperatures. We monitor forecasts closely and will reschedule if rain is likely. Your job won&apos;t be compromised by bad timing.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-warm-white section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="text-center mb-10">Common Questions</h2>
          <Accordion items={faqItems} />
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
