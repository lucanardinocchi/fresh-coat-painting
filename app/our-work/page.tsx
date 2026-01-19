import { Button } from "@/components/ui/Button";

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
              <div key={index} className="py-8 first:pt-0 last:pb-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
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
