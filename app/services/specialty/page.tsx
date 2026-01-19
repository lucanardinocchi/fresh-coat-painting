import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "Wallpaper Removal",
    description:
      "We strip old wallpaper, repair the surface underneath, and prepare walls for a fresh paint finish.",
  },
  {
    title: "Timber Staining & Varnishing",
    description:
      "Decks, pergolas, front doors, and timber features. We sand, prep, and apply quality oil or varnish for lasting protection.",
  },
  {
    title: "Spray Finishes",
    description:
      "For cabinetry, doors, and new builds where a flawless factory-style finish matters. We spray on-site or remove doors for off-site spraying.",
  },
];

export default function SpecialtyServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-max">
          <p className="text-sm text-charcoal-light mb-4 tracking-wide">Services</p>
          <h1 className="max-w-2xl mb-6">Specialty Services</h1>
          <p className="text-lg text-charcoal-light max-w-xl">
            Beyond the basics—wallpaper, timber, spray finishes, and colour advice.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <div className="space-y-0 divide-y divide-border">
            {services.map((service, index) => (
              <div key={service.title} className="py-12 first:pt-0 last:pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
                  <div>
                    <p className="text-sm text-charcoal-light mb-2">0{index + 1}</p>
                    <h2 className="text-xl font-medium">{service.title}</h2>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-charcoal-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colour Consulting */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl">
            <h2 className="mb-6">Stuck on colours?</h2>
            <p className="text-charcoal-light leading-relaxed mb-6">
              Choosing paint colours is harder than it looks. We&apos;ve partnered 
              with a Dulux colour consultant who can visit your home, assess your 
              lighting and furnishings, and recommend a palette that works.
            </p>
            <p className="text-charcoal-light leading-relaxed">
              <span className="text-navy font-medium">Consultation fee: $150</span>
              <br />
              <span className="text-sm">(Refunded if you book your job with us)</span>
            </p>
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
