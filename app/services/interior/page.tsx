import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";

const serviceItems = [
  "Walls and ceilings (standard heights up to 2.7m)",
  "Doors — brush, roller, or spray finish",
  "Skirting boards and architraves",
  "Window frames and sills",
  "Built-in wardrobes (exterior faces)",
  "Feature walls and accent colours",
  "High ceilings and voids (scaffold additional)",
];

const processSteps = [
  {
    number: "01",
    title: "Get Your Quote",
    text: "Use our online estimator or book a free site visit. We'll measure up and confirm pricing.",
  },
  {
    number: "02",
    title: "Prep & Protect",
    text: "We cover floors, mask edges, fill cracks, and sand surfaces. Prep makes the finish.",
  },
  {
    number: "03",
    title: "Paint",
    text: "Two coats minimum. Ceilings first, then walls, then trim. We cut clean edges by hand.",
  },
  {
    number: "04",
    title: "Walkthrough",
    text: "We walk the job with you, touch up anything needed, and leave your home spotless.",
  },
];

const faqItems = [
  {
    question: "Do I need to move my furniture?",
    answer:
      "We ask that you clear small items and valuables. We can work around large furniture and will cover everything with drop sheets.",
  },
  {
    question: "How long does a room take to paint?",
    answer:
      "A standard bedroom takes 1 day including prep and two coats. Larger rooms or those needing repairs may take longer.",
  },
  {
    question: "Can you paint over dark colours?",
    answer:
      "Yes, but it typically requires an additional undercoat. We'll note this in your quote if applicable.",
  },
  {
    question: "What paint brands do you use?",
    answer:
      "We use Dulux Wash&Wear for interiors as standard. Premium upgrades like Dulux Professional are available on request.",
  },
];

export default function InteriorPaintingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-max">
          <p className="text-sm text-charcoal-light mb-4 tracking-wide">Services</p>
          <h1 className="max-w-2xl mb-6">Interior Painting</h1>
          <p className="text-lg text-charcoal-light max-w-xl">
            Walls, ceilings, doors, and every detail in between.
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
            </div>

            <div className="lg:pl-8 lg:border-l border-border">
              <h3 className="text-base font-medium text-navy mb-4">Standard inclusions</h3>
              <ul className="space-y-3 text-sm text-charcoal-light">
                <li>• Dulux or Taubmans paint (mid-range)</li>
                <li>• 2 coats on all surfaces</li>
                <li>• Light sanding and sugar soap prep</li>
                <li>• Filling of minor cracks and nail holes</li>
                <li>• Masking of edges, switches, skirting</li>
                <li>• Drop sheets throughout</li>
                <li>• Clean-up and rubbish removal</li>
                <li>• 3-year workmanship warranty</li>
              </ul>
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
