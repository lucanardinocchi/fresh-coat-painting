"use client";

import { ArrowRight, Star, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";
import { StarRating } from "@/components/ui/StarRating";
import { ImageSlider } from "@/components/ui/ImageSlider";
import { COMPANY } from "@/lib/constants";

const projects = [
  {
    suburb: "Norwood",
    scope: "Kitchen cabinetry spray",
    detail: "White gloss finish on timber cabinets",
    review: "Third time using Fresh Coat across different properties. Consistent quality every time.",
    client: "David R.",
    rating: 5,
    beforeImage: "/images/projects/kitchen-before.jpg",
    afterImage: "/images/projects/kitchen-after.jpg",
  },
  {
    suburb: "Prospect",
    scope: "Feature wall and refresh",
    detail: "Living areas and ceiling restoration",
    review: "We had a strict deadline before settlement and they made it happen. The finish is perfect.",
    client: "Lisa & Mark W.",
    rating: 5,
    beforeImage: "/images/projects/feature-wall-before.jpg",
    afterImage: "/images/projects/feature-wall-after.jpg",
  },
  {
    suburb: "Unley",
    scope: "Heritage home restoration",
    detail: "Full interior, ornate ceilings and trim",
    review: "Great communication from quote to completion. Price was fair and the quality is excellent.",
    client: "James T.",
    rating: 5,
    beforeImage: "/images/projects/heritage-before.jpg",
    afterImage: "/images/projects/heritage-after.jpg",
  },
  {
    suburb: "Burnside",
    scope: "Full interior repaint",
    detail: "Living areas, walls and ceiling",
    review: "The edges are razor sharp and they left the place spotless. Highly recommend.",
    client: "Sarah M.",
    rating: 5,
    beforeImage: "/images/projects/living-before.png",
    afterImage: "/images/projects/living-after.png",
  },
];

export default function OurWorkPage() {
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
            <span className="badge mb-4">Our Work</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mb-6"
          >
            What our clients say
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl font-light text-navy">{COMPANY.homesPainted}+</span>
              <span className="text-charcoal-light">homes painted</span>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <div className="flex items-center gap-3">
              <StarRating rating={COMPANY.googleRating} size={20} />
              <span className="text-charcoal-light">
                {COMPANY.googleRating} from {COMPANY.totalReviews} reviews
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" staggerDelay={0.1}>
            {projects.map((project, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden card-shadow card-shadow-hover"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Before/After Slider */}
                  <ImageSlider
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                    className="aspect-[16/10]"
                  />

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-charcoal-light mb-1">
                          <MapPin className="w-3 h-3" />
                          {project.suburb}
                        </div>
                        <h3 className="text-xl text-navy">{project.scope}</h3>
                        <p className="text-sm text-charcoal-light">{project.detail}</p>
                      </div>
                      <StarRating rating={project.rating} size={14} animated={false} />
                    </div>

                    <div className="border-t border-border pt-4 mt-4">
                      <blockquote className="text-charcoal-light leading-relaxed mb-3 italic">
                        &ldquo;{project.review}&rdquo;
                      </blockquote>
                      <p className="text-sm font-medium text-navy">{project.client}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Google Reviews Link */}
      <section className="py-16 bg-cream-dark">
        <div className="container-max">
          <AnimateOnScroll variant="fadeUp" className="text-center">
            <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-4 card-shadow">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-navy">{COMPANY.googleRating} on Google</p>
                  <p className="text-xs text-charcoal-light">{COMPANY.totalReviews} reviews</p>
                </div>
              </div>
              <a
                href={COMPANY.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-navy hover:text-navy-light transition-colors"
              >
                Read all reviews
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimateOnScroll variant="fadeUp" className="text-center mb-12">
            <h2>Our track record</h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.1}>
            {[
              { value: "12", label: "Years experience" },
              { value: "500+", label: "Homes painted" },
              { value: "100%", label: "Satisfaction rate" },
              { value: "3yr", label: "Warranty included" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-light text-navy mb-2">{stat.value}</p>
                  <p className="text-sm text-charcoal-light">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding mesh-gradient relative overflow-hidden">
        <div className="container-max relative z-10 text-center">
          <AnimateOnScroll variant="scale">
            <h2 className="text-white mb-4">Your home could be next</h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto text-lg">
              Get a quote and see what we can do for you.
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
