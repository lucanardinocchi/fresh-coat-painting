import { Button } from "@/components/ui/Button";

const interiorPricing = [
  { item: "Walls", price: "$12–18 per m²" },
  { item: "Ceilings", price: "$14–20 per m²" },
  { item: "Walls + Ceilings (combined)", price: "$22–32 per m²" },
  { item: "Feature wall (dark/bold colour)", price: "$18–25 per m²" },
  { item: "Doors (flush, painted in place)", price: "$65–95 each" },
  { item: "Doors (panel, painted in place)", price: "$85–120 each" },
  { item: "Door (spray finish, removed)", price: "$120–160 each" },
  { item: "Skirting boards", price: "$6–10 per linear metre" },
  { item: "Architraves", price: "$5–8 per linear metre" },
  { item: "Window frames", price: "$45–80 each" },
  { item: "Built-in wardrobe (per robe)", price: "$180–350 each" },
];

const exteriorPricing = [
  { item: "Rendered walls", price: "$18–28 per m²" },
  { item: "Weatherboard walls", price: "$22–35 per m²" },
  { item: "Brick walls (sealed + painted)", price: "$25–38 per m²" },
  { item: "Fascias", price: "$12–18 per linear metre" },
  { item: "Gutters", price: "$10–15 per linear metre" },
  { item: "Eaves/soffits", price: "$16–24 per m²" },
  { item: "Front door", price: "$150–280 each" },
  { item: "Garage door (single)", price: "$250–400 each" },
  { item: "Garage door (double)", price: "$380–550 each" },
  { item: "Timber fence (both sides)", price: "$18–28 per m²" },
];

const additionalCharges = [
  { item: "Wallpaper removal", price: "$15–25 per m²" },
  { item: "Minor plaster repairs", price: "$65 per hour" },
  { item: "Hole/crack fill (fist-sized+)", price: "$25–50 each" },
  { item: "High ceilings (2.7–3.5m)", price: "+15%" },
  { item: "Void ceilings (3.5m+)", price: "+25–40%" },
  { item: "Scaffold hire", price: "$180–350 per day" },
  { item: "Dark to light colour change", price: "+$3–5 per m²" },
];

function PricingTable({ rows }: { rows: { item: string; price: string }[] }) {
  return (
    <div className="divide-y divide-border">
      {rows.map((row, index) => (
        <div key={index} className="py-4 flex justify-between items-baseline gap-4">
          <span className="text-charcoal-light">{row.item}</span>
          <span className="text-navy font-medium text-right">{row.price}</span>
        </div>
      ))}
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-max">
          <p className="text-sm text-charcoal-light mb-4 tracking-wide">Pricing</p>
          <h1 className="max-w-2xl mb-6">Transparent rates</h1>
          <p className="text-lg text-charcoal-light max-w-xl">
            Realistic pricing for quality work with proper prep. Every job is different—use 
            this as a guide, then get your free quote.
          </p>
        </div>
      </section>

      {/* Interior */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <h2 className="mb-10">Interior Painting</h2>
          <PricingTable rows={interiorPricing} />
        </div>
      </section>

      {/* Exterior */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="mb-10">Exterior Painting</h2>
          <PricingTable rows={exteriorPricing} />
        </div>
      </section>

      {/* Additional */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <h2 className="mb-10">Additional Charges</h2>
          <PricingTable rows={additionalCharges} />
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-8">Included in every quote</h2>
              <ul className="space-y-3 text-charcoal-light">
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
            <div>
              <h2 className="mb-8">Not included (unless quoted)</h2>
              <ul className="space-y-3 text-charcoal-light">
                <li>• Premium paint upgrades</li>
                <li>• Major plastering or repairs</li>
                <li>• Furniture moving</li>
                <li>• Scaffold for heights over 3.5m</li>
                <li>• After-hours or weekend work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="container-max text-center">
          <h2 className="text-white mb-4">Get your estimate</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Our online tool gives you a ballpark in under 2 minutes.
          </p>
          <Button href="/get-a-quote" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
            Get Your Free Quote
          </Button>
        </div>
      </section>
    </>
  );
}
