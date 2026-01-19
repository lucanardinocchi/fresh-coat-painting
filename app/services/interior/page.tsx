import Image from "next/image";
import { Check } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTABanner } from "@/components/sections/CTABanner";

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
    number: "1",
    title: "Get Your Quote",
    text: "Use our online estimator or book a free site visit. We'll measure up and confirm pricing.",
  },
  {
    number: "2",
    title: "Prep & Protect",
    text: "We cover floors, mask edges, fill cracks, and sand surfaces. Prep makes the finish.",
  },
  {
    number: "3",
    title: "Paint",
    text: "Two coats minimum. Ceilings first, then walls, then trim. We cut clean edges by hand.",
  },
  {
    number: "4",
    title: "Walkthrough & Handover",
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
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center pt-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy/40" />
        <div className="relative z-10 container-max text-center py-16">
          <h1 className="text-white mb-4">Interior Painting</h1>
          <p className="text-xl text-white/90 max-w-[600px] mx-auto">
            Walls, ceilings, doors, and every detail in between.
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
              <ul className="space-y-4">
                {serviceItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80"
                alt="Painter taping off skirting boards"
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

      {/* FAQ */}
      <section className="bg-white section-padding">
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
