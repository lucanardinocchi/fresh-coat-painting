import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PricingTable } from "@/components/sections/PricingTable";
import { CTABanner } from "@/components/sections/CTABanner";

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

const includedItems = [
  "Dulux or Taubmans paint (mid-range)",
  "2 coats on all surfaces",
  "Light sanding and sugar soap prep",
  "Filling of minor cracks and nail holes",
  "Masking of edges, switches, skirting",
  "Drop sheets throughout",
  "Clean-up and rubbish removal",
  "3-year workmanship warranty",
];

const notIncludedItems = [
  "Premium paint upgrades",
  "Major plastering or repairs",
  "Furniture moving",
  "Scaffold for heights over 3.5m",
  "After-hours or weekend work",
];

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-terracotta min-h-[40vh] flex items-center justify-center pt-20">
        <div className="container-max text-center py-16">
          <h1 className="text-white mb-4">Pricing Guide</h1>
          <p className="text-xl text-white/90 max-w-[600px] mx-auto">
            Transparent, realistic rates for Adelaide homes.
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="bg-white section-padding">
        <div className="container-max max-w-[700px] text-center">
          <p className="text-charcoal mb-8 leading-relaxed">
            Every paint job is different — condition, access, colours, and scope all affect the final price. The guide below reflects typical Adelaide market rates for quality work with proper prep. For an accurate quote on your home, use our free online estimator.
          </p>
          <Button href="/get-a-quote">Get Your Free Quote</Button>
        </div>
      </section>

      {/* Interior Pricing */}
      <section className="bg-white section-padding pt-0">
        <div className="container-max">
          <h2 className="mb-8">Interior Painting</h2>
          <PricingTable rows={interiorPricing} />
        </div>
      </section>

      {/* Exterior Pricing */}
      <section className="bg-warm-white section-padding">
        <div className="container-max">
          <h2 className="mb-8">Exterior Painting</h2>
          <PricingTable rows={exteriorPricing} />
        </div>
      </section>

      {/* Additional Charges */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <h2 className="mb-8">Additional Charges</h2>
          <PricingTable rows={additionalCharges} />
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-warm-white section-padding">
        <div className="container-max">
          <h2 className="mb-8 text-center">What&apos;s Included in Every Quote</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {includedItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                <span className="text-charcoal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's NOT Included */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <h2 className="mb-8 text-center">What&apos;s Not Included (Unless Quoted)</h2>
          <ul className="max-w-xl mx-auto space-y-3">
            {notIncludedItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-terracotta font-bold">•</span>
                <span className="text-charcoal">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Want an Accurate Estimate?"
        subtext="Our online tool gives you a ballpark in under 2 minutes."
        buttonLabel="Get Your Free Quote"
        buttonHref="/get-a-quote"
        variant="navy"
      />
    </>
  );
}
