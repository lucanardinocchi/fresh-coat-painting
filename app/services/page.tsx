"use client";

import { Check, Paintbrush, Home, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";

const services = [
  {
    id: "interior",
    title: "Interior Painting",
    description: "Walls, ceilings, doors, and every detail in between. We transform your living spaces with precision and care.",
    icon: Paintbrush,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
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
    description: "Protection and kerb appeal that lasts. We use premium paints designed to withstand Adelaide's weather.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
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
    description: "Beyond the basics. Specialty finishes and restoration work that requires expert attention.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200&auto=format&fit=crop",
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
    <main id="main-content">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-radial">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-4">Our Services</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mb-6"
          >
            What we do
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal-light max-w-xl"
          >
            Interior, exterior, and specialty painting for Adelaide homes. 
            Every job gets the same attention to detail.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`scroll-mt-nav ${index % 2 === 1 ? "bg-white" : ""}`}
          >
            <div className="container-max section-padding">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}>
                {/* Content */}
                <AnimateOnScroll 
                  variant={index % 2 === 0 ? "slideLeft" : "slideRight"}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="icon-container">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <span className="number-badge text-sm">0{index + 1}</span>
                  </div>
                  <h2 className="mb-4">{service.title}</h2>
                  <p className="text-lg text-charcoal-light mb-8">{service.description}</p>
                  
                  <StaggerContainer className="space-y-3" staggerDelay={0.05}>
                    {service.items.map((item, i) => (
                      <StaggerItem key={i}>
                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-cream-dark/50 transition-colors">
                          <div className="w-5 h-5 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-navy" />
                          </div>
                          <span className="text-charcoal-light">{item}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </AnimateOnScroll>

                {/* Image */}
                <AnimateOnScroll 
                  variant={index % 2 === 0 ? "slideRight" : "slideLeft"}
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                >
                  <div className="relative rounded-2xl overflow-hidden card-shadow-lg aspect-[4/3]">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
                  </div>
                </AnimateOnScroll>
              </div>
            </div>

            {index < services.length - 1 && (
              <div className="container-max">
                <div className="border-b border-border" />
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="section-padding bg-cream-dark">
        <div className="container-max">
          <AnimateOnScroll variant="fadeUp" className="text-center mb-16">
            <span className="badge mb-4">Our Process</span>
            <h2>How we work</h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8" staggerDelay={0.1}>
            {[
              { step: "01", title: "Quote", desc: "We visit, measure, and provide a detailed written quote." },
              { step: "02", title: "Prep", desc: "Thorough preparation—cleaning, sanding, filling, and masking." },
              { step: "03", title: "Paint", desc: "Premium paint applied with care. 2 coats minimum." },
              { step: "04", title: "Inspect", desc: "Final walkthrough together before we clean up and leave." },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center text-xl font-semibold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-medium text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-charcoal-light">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <AnimateOnScroll variant="fadeUp" className="text-center mb-12">
              <span className="badge mb-4">FAQ</span>
              <h2>Common questions</h2>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fadeUp" delay={0.1}>
              <Accordion items={faqItems} />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding mesh-gradient relative overflow-hidden">
        <div className="container-max relative z-10 text-center">
          <AnimateOnScroll variant="scale">
            <h2 className="text-white mb-4">Get a quote for your project</h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto text-lg">
              Free estimates, no obligation. We&apos;ll get back to you within 24 hours.
            </p>
            <Button 
              href="/get-a-quote" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Get Your Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </AnimateOnScroll>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </section>
    </main>
  );
}
