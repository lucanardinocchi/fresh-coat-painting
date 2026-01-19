import Image from "next/image";
import { ServiceBlock } from "@/components/sections/ServiceBlock";
import { CTABanner } from "@/components/sections/CTABanner";

export default function SpecialtyServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center pt-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy/40" />
        <div className="relative z-10 container-max text-center py-16">
          <h1 className="text-white mb-4">Specialty Services</h1>
          <p className="text-xl text-white/90 max-w-[600px] mx-auto">
            Beyond the basics — wallpaper, timber, spray finishes, and colour advice.
          </p>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="bg-white section-padding">
        <div className="container-max space-y-16">
          {/* Block 1: Wallpaper Removal */}
          <ServiceBlock
            title="Wallpaper Removal"
            text="We strip old wallpaper, repair the surface underneath, and prepare walls for a fresh paint finish."
            imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
            imageAlt="Wallpaper removal in progress"
            imagePosition="left"
          />

          {/* Block 2: Timber Staining */}
          <ServiceBlock
            title="Timber Staining & Varnishing"
            text="Decks, pergolas, front doors, and timber features. We sand, prep, and apply quality oil or varnish for lasting protection."
            imageSrc="https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&q=80"
            imageAlt="Freshly stained timber deck"
            imagePosition="right"
          />

          {/* Block 3: Spray Painting */}
          <ServiceBlock
            title="Spray Finishes"
            text="For cabinetry, doors, and new builds where a flawless factory-style finish matters. We spray on-site or remove doors for off-site spraying."
            imageSrc="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
            imageAlt="Kitchen cabinetry with spray finish"
            imagePosition="left"
          />
        </div>
      </section>

      {/* Colour Consulting */}
      <section className="bg-warm-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="mb-6">Stuck on Colours?</h2>
              <p className="text-charcoal leading-relaxed">
                Choosing paint colours is harder than it looks. We&apos;ve partnered with a Dulux colour consultant who can visit your home, assess your lighting and furnishings, and recommend a palette that works. Consultation fee: $150 (refunded if you book your job with us).
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&q=80"
                alt="Colour swatches on table"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
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
