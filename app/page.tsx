"use client";

import Link from "next/link";
import { ArrowRight, Paintbrush, Home, Sparkles, Shield, Clock, Palette, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";
import { CountUp } from "@/components/ui/CountUp";
import { StarRating } from "@/components/ui/StarRating";
import { TiltCard } from "@/components/ui/TiltCard";
import { Carousel } from "@/components/ui/Carousel";
import { COMPANY } from "@/lib/constants";

const testimonials = [
  {
    quote: "Fresh Coat was the only painter who actually explained what prep work was needed. The finish is flawless—you'd think it was a display home.",
    author: "Sarah M.",
    location: "Burnside",
    rating: 5,
  },
  {
    quote: "Great communication from quote to completion. Price was fair and the quality is excellent. Would absolutely recommend.",
    author: "James T.",
    location: "Unley",
    rating: 5,
  },
  {
    quote: "We had a strict deadline before settlement and they made it happen. The finish is perfect and the team was professional throughout.",
    author: "Lisa & Mark W.",
    location: "Prospect",
    rating: 5,
  },
  {
    quote: "Third time using Fresh Coat across different properties. Consistent quality every time. They're my go-to painters.",
    author: "David R.",
    location: "Norwood",
    rating: 5,
  },
];

const services = [
  {
    title: "Interior Painting",
    description: "Walls, ceilings, doors, and trim. From single rooms to whole-house repaints.",
    href: "/services#interior",
    icon: Paintbrush,
  },
  {
    title: "Exterior Painting",
    description: "Weatherboards, render, brick, fascias, and fences. Built for Adelaide weather.",
    href: "/services#exterior",
    icon: Home,
  },
  {
    title: "Specialty Services",
    description: "Wallpaper removal, timber staining, colour consulting, and spray finishes.",
    href: "/services#specialty",
    icon: Sparkles,
  },
];

const features = [
  {
    title: "Licensed & insured",
    description: `BLD ${COMPANY.licence.replace("BLD ", "")} with $20M public liability coverage.`,
    icon: Shield,
  },
  {
    title: "3-year warranty",
    description: "Workmanship guarantee on every job we complete.",
    icon: Award,
  },
  {
    title: "Quality paint only",
    description: "We use Dulux and Taubmans—never cheap alternatives.",
    icon: Palette,
  },
  {
    title: "Free colour advice",
    description: "Stuck on colours? We'll help you choose.",
    icon: Clock,
  },
];

export default function HomePage() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image with Ken Burns effect */}
        <div className="hero-image">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear" }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=2000&auto=format&fit=crop"
              alt="Beautifully painted modern living room"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="container-max relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="badge badge-navy">
                <Paintbrush className="w-3 h-3" />
                Adelaide&apos;s Residential Painting Specialists
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-balance mb-6"
            >
              Quality painting for homes that deserve better
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-charcoal-light max-w-xl mb-10 leading-relaxed"
            >
              Clean edges, honest pricing, zero shortcuts. We&apos;ve been painting 
              Adelaide homes for {COMPANY.yearsInBusiness} years.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/get-a-quote" size="lg">
                Get a Quote
              </Button>
              <Button href="/our-work" variant="ghost" size="lg">
                View Our Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2"
        >
          <div className="bg-white rounded-2xl p-6 card-shadow-lg animate-float">
            <div className="flex items-center gap-2 mb-2">
              <StarRating rating={COMPANY.googleRating} size={18} />
            </div>
            <p className="text-2xl font-semibold text-navy">{COMPANY.googleRating}</p>
            <p className="text-sm text-charcoal-light">{COMPANY.totalReviews} Google reviews</p>
            <a
              href={COMPANY.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-navy hover:text-navy-light mt-3 link-underline"
            >
              Read reviews
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-navy/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-navy" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-y border-border">
        <div className="container-max py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <AnimateOnScroll variant="fadeUp" className="text-center">
              <div className="icon-container mx-auto mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <p className="text-4xl md:text-5xl font-light text-navy mb-2">
                <CountUp end={COMPANY.yearsInBusiness} duration={2} />
              </p>
              <p className="text-sm text-charcoal-light">Years in business</p>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeUp" delay={0.1} className="text-center">
              <div className="icon-container mx-auto mb-4">
                <Home className="w-5 h-5" />
              </div>
              <p className="text-4xl md:text-5xl font-light text-navy mb-2">
                <CountUp end={COMPANY.homesPainted} duration={2} suffix="+" />
              </p>
              <p className="text-sm text-charcoal-light">Homes painted</p>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeUp" delay={0.2} className="text-center">
              <div className="icon-container mx-auto mb-4">
                <Award className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <p className="text-4xl md:text-5xl font-light text-navy">
                  <CountUp end={COMPANY.googleRating} duration={2} decimals={1} />
                </p>
                <StarRating rating={COMPANY.googleRating} size={20} />
              </div>
              <p className="text-sm text-charcoal-light">Google rating</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gradient-radial">
        <div className="container-max">
          <AnimateOnScroll variant="fadeUp" className="max-w-xl mb-16">
            <span className="badge mb-4">What we do</span>
            <h2>Expert painting services for every project</h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {services.map((service, index) => (
              <StaggerItem key={service.title}>
                <TiltCard className="h-full perspective-1000">
                  <Link
                    href={service.href}
                    className="group block h-full bg-white rounded-xl p-8 md:p-10 card-shadow card-shadow-hover"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="icon-container">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <span className="number-badge">0{index + 1}</span>
                    </div>
                    <h3 className="text-navy mb-3 group-hover:text-navy-light transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-charcoal-light mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-navy group-hover:gap-3 gap-2 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimateOnScroll variant="slideLeft">
              <span className="badge mb-4">Why choose us</span>
              <h2 className="mb-8">A small team that does things properly</h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                We&apos;re not a franchise and we don&apos;t subcontract. When you hire 
                Fresh Coat, you get our team—the same painters who&apos;ve been with 
                us for years.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-8">
                We show up on time, prep properly, and leave your home cleaner 
                than we found it.
              </p>
              <Button href="/about" variant="outline">
                More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </AnimateOnScroll>

            <StaggerContainer className="space-y-6" staggerDelay={0.1}>
              {features.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="flex gap-4 p-6 bg-cream rounded-xl">
                    <div className="icon-container flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-navy mb-1">{item.title}</h3>
                      <p className="text-sm text-charcoal-light">{item.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-cream-dark relative overflow-hidden">
        {/* Decorative quote mark */}
        <div className="absolute top-12 left-8 quote-mark hidden lg:block">&ldquo;</div>

        <div className="container-max relative z-10">
          <AnimateOnScroll variant="fadeUp" className="text-center mb-12">
            <span className="badge mb-4">Testimonials</span>
            <h2>What our clients say</h2>
          </AnimateOnScroll>

          <div className="max-w-3xl mx-auto">
            <Carousel autoplayInterval={6000}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow text-center">
                    <StarRating rating={testimonial.rating} size={20} className="justify-center mb-6" />
                    <blockquote className="text-xl md:text-2xl font-light text-navy leading-relaxed mb-8">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div>
                      <p className="font-medium text-navy">{testimonial.author}</p>
                      <p className="text-sm text-charcoal-light">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          <AnimateOnScroll variant="fadeUp" delay={0.2} className="text-center mt-10">
            <a
              href={COMPANY.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-charcoal-light hover:text-navy transition-colors link-underline"
            >
              Read all {COMPANY.totalReviews} reviews on Google
              <ArrowRight className="w-4 h-4" />
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding mesh-gradient relative overflow-hidden">
        <div className="container-max relative z-10 text-center">
          <AnimateOnScroll variant="scale">
            <h2 className="text-white mb-4">Ready to start?</h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto text-lg">
              Get a ballpark estimate in under 2 minutes.
            </p>
            <Button 
              href="/get-a-quote" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Get Your Free Quote
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
