import Image from "next/image";
import { CTABanner } from "@/components/sections/CTABanner";

const projects = [
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    suburb: "Unley",
    description: "Full interior, 4-bed house, neutral palette",
  },
  {
    src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    suburb: "Glenelg",
    description: "Exterior weatherboards, white with charcoal trim",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    suburb: "Norwood",
    description: "Kitchen cabinetry spray, white gloss",
  },
  {
    src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
    suburb: "Prospect",
    description: "Living room feature wall, dark green",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    suburb: "Burnside",
    description: "Whole house interior, heritage home",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
    suburb: "Henley Beach",
    description: "Exterior render, coastal tones",
  },
  {
    src: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&q=80",
    suburb: "Mitcham",
    description: "Deck staining, spotted gum",
  },
  {
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    suburb: "Goodwood",
    description: "Master bedroom and ensuite refresh",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    suburb: "North Adelaide",
    description: "Exterior brick painting, white",
  },
  {
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    suburb: "Parkside",
    description: "Hallway and skirting boards",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    suburb: "Semaphore",
    description: "Exterior weatherboards, two-storey",
  },
  {
    src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80",
    suburb: "Fullarton",
    description: "Interior repaint, investment property turnover",
  },
];

export default function OurWorkPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[40vh] flex items-center justify-center pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 95, 0.7), rgba(30, 58, 95, 0.7)),
            url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80'),
            url('https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80'),
            url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80')`,
          backgroundSize: "cover, 33% 100%, 34% 100%, 33% 100%",
          backgroundPosition: "center, left, center, right",
        }}
      >
        <div className="relative z-10 container-max text-center py-16">
          <h1 className="text-white mb-4">Our Work</h1>
          <p className="text-xl text-white/90 max-w-[600px] mx-auto">
            500+ homes and counting.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={project.src}
                  alt={`${project.suburb} project`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <p className="font-bold text-lg mb-1">{project.suburb}</p>
                    <p className="text-sm text-white/80">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
