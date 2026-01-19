import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";

const services = [
  {
    id: "interior",
    title: "Interior Painting",
    description: "Walls, ceilings, doors, and every detail in between.",
    items: [
      "Walls and ceilings",
      "Doors — brush, roller, or spray finish",
      "Skirting boards and architraves",
      "Window frames and sills",
      "Built-in wardrobes",
      "Feature walls and accent colours",
    ],
  },
  {
    id: "exterior",
    title: "Exterior Painting",
    description: "Protection and kerb appeal that lasts.",
    items: [
      "Rendered walls",
      "Weatherboard walls",
      "Brick painting with sealer",
      "Fascias and gutters",
      "Eaves and soffits",
      "Front doors and garage doors",
      "Timber and Colorbond fencing",
    ],
  },
  {
    id: "specialty",
    title: "Specialty Services",
    description: "Beyond the basics.",
    items: [
      "Wallpaper removal",
      "Timber staining and varnishing",
      "Spray finishes for cabinetry",
      "Deck and pergola restoration",
      "Colour consulting ($150, refunded on booking)",
    ],
  },
];

const faqItems = [
  {
    question: "How long does a typical job take?",
    answer:
      "A standard bedroom takes 1 day. Full interior repaints take 3–5 days. Exterior single-storey homes take 3–5 days, two-storey 5–8 days.",
  },
  {
    question: "What paint brands do you use?",
    answer:
      "We use Dulux and Taubmans as standard. Premium upgrades are available on request.",
  },
  {
    question: "Do you paint in winter?",
    answer:
      "Yes, Adelaide winters are mild enough. We avoid days below 10°C or with rain forecast.",
  },
  {
    question: "What's included in every quote?",
    answer:
      "Quality paint, 2 coats on all surfaces, prep work, masking, drop sheets, clean-up, and a 3-year workmanship warranty.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-max">
          <p className="text-sm text-charcoal-light mb-4 tracking-wide">Services</p>
          <h1 className="max-w-2xl mb-6">What we do</h1>
          <p className="text-lg text-charcoal-light max-w-xl">
            Interior, exterior, and specialty painting for Adelaide homes.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`section-padding ${index % 2 === 1 ? "bg-white" : ""}`}
          >
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                <div>
                  <p className="text-sm text-charcoal-light mb-3">0{index + 1}</p>
                  <h2 className="mb-4">{service.title}</h2>
                  <p className="text-charcoal-light">{service.description}</p>
                </div>
                <div>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-navy flex-shrink-0 mt-1" />
                        <span className="text-charcoal-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
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
