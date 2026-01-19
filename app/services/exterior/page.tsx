import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";

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
    number: "01",
    title: "Site Visit",
    text: "We visit your property, assess the surfaces, and provide a detailed written quote.",
  },
  {
    number: "02",
    title: "Prep & Wash",
    text: "We pressure wash walls, scrape flaking paint, fill cracks, and prime bare spots.",
  },
  {
    number: "03",
    title: "Paint",
    text: "Two coats of exterior-grade paint. We work section by section and watch the weather.",
  },
  {
    number: "04",
    title: "Inspection",
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
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-max">
          <p className="text-sm text-charcoal-light mb-4 tracking-wide">Services</p>
          <h1 className="max-w-2xl mb-6">Exterior Painting</h1>
          <p className="text-lg text-charcoal-light max-w-xl">
            Protection and kerb appeal that lasts.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-8">What&apos;s included</h2>
              <ul className="space-y-4">
                {serviceItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal-light">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-charcoal-light/70 italic">
                All exterior jobs include pressure washing and paint rated for Adelaide&apos;s UV and weather conditions.
              </p>
            </div>

            <div className="lg:pl-8 lg:border-l border-border">
              <h3 className="text-base font-medium text-navy mb-4">Weather policy</h3>
              <p className="text-sm text-charcoal-light leading-relaxed mb-6">
                Exterior painting requires dry conditions and moderate temperatures. 
                We monitor forecasts closely and will reschedule if rain is likely. 
                Your job won&apos;t be compromised by bad timing.
              </p>
              <h3 className="text-base font-medium text-navy mb-4">Expected lifespan</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">
                With proper prep and quality paint, expect 10–15 years before 
                a repaint is needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="mb-12">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.number}>
                <p className="text-sm text-charcoal-light mb-3">{step.number}</p>
                <h3 className="text-base font-medium text-navy mb-3">{step.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-10 text-center">Common questions</h2>
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="container-max text-center">
          <h2 className="text-white mb-4">Get a quote for your project</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Free estimates, no obligation.
          </p>
          <Button href="/get-a-quote" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
            Get Your Free Quote
          </Button>
        </div>
      </section>
    </>
  );
}
