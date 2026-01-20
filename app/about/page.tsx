"use client";

import { ArrowRight, Shield, Award, Palette, Users, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/AnimateOnScroll";
import { COMPANY } from "@/lib/constants";

const credentials = [
  {
    icon: Shield,
    title: "Licence",
    value: `BLD ${COMPANY.licence.replace("BLD ", "")}`,
    description: "Registered Building Work Contractor",
  },
  {
    icon: Award,
    title: "Insurance",
    value: "$20M Coverage",
    description: "Public Liability Insurance",
  },
  {
    icon: CheckCircle,
    title: "Warranty",
    value: "3 Years",
    description: "Workmanship Guarantee",
  },
  {
    icon: Users,
    title: "Membership",
    value: "Master Painters",
    description: "Australia Association",
  },
];

const values = [
  {
    icon: Clock,
    title: "On time, every time",
    description: "We show up when we say we will. If something changes, you'll hear from us before it's a problem.",
  },
  {
    icon: Palette,
    title: "Prep makes the finish",
    description: "We spend more time prepping than most painters spend on the whole job. It's the only way to get edges that last.",
  },
  {
    icon: Shield,
    title: "Honest pricing",
    description: "No hidden extras, no surprise invoices. The quote we give is the price you pay—unless you change the scope.",
  },
];

const timeline = [
  { year: "2012", event: "Fresh Coat founded by Matt Turner" },
  { year: "2015", event: "Expanded team to 4 full-time painters" },
  { year: "2018", event: "500th home completed" },
  { year: "2020", event: "Introduced spray finishing services" },
  { year: "2024", event: "Still a small team, still doing things properly" },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-radial relative overflow-hidden">
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-4">About Us</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl"
          >
            A family business that takes pride in the finish
          </motion.h1>
        </div>

        {/* Decorative element */}
        <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
      </section>

      {/* Story */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimateOnScroll variant="slideLeft">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden card-shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop"
                    alt="Professional painter at work"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -bottom-6 -right-6 bg-navy text-white rounded-2xl p-6 card-shadow-lg"
                >
                  <p className="text-3xl font-light mb-1">{COMPANY.yearsInBusiness}</p>
                  <p className="text-sm text-white/70">Years of Excellence</p>
                </motion.div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="slideRight" className="lg:pt-12">
              <h2 className="mb-8">Our Story</h2>
              <div className="space-y-6 text-charcoal-light leading-relaxed">
                <p>
                  Fresh Coat started in 2012 when I left a commercial painting company 
                  to do things properly. Too many shortcuts, too much rushing, too many 
                  callbacks. I wanted to build something different—a small team that 
                  treats every home like it&apos;s our own.
                </p>
                <p>
                  Twelve years later, we&apos;re still a small team. That&apos;s deliberate. 
                  I&apos;m on every quote, I know every job, and our painters have been 
                  with us for years. You won&apos;t get a rotating crew of subcontractors—
                  you&apos;ll get the same faces from start to finish.
                </p>
                <p>
                  We&apos;re not the cheapest painters in Adelaide. But we prep properly, 
                  we use quality paint, and we don&apos;t cut corners on edges or coats. 
                  If that&apos;s what you&apos;re looking for, we&apos;d love to quote your job.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-navy font-medium text-lg">Matt Turner</p>
                <p className="text-sm text-charcoal-light">Owner & Lead Painter</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimateOnScroll variant="fadeUp" className="text-center mb-12">
            <span className="badge mb-4">Credentials</span>
            <h2>Licensed, insured, guaranteed</h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {credentials.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-cream rounded-xl p-6 text-center h-full">
                  <div className="icon-container mx-auto mb-4">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-charcoal-light uppercase tracking-wider mb-1">{item.title}</p>
                  <p className="text-xl font-medium text-navy mb-1">{item.value}</p>
                  <p className="text-sm text-charcoal-light">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream-dark">
        <div className="container-max">
          <AnimateOnScroll variant="fadeUp" className="max-w-xl mb-12">
            <span className="badge mb-4">Our Values</span>
            <h2>What we stand for</h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  className="bg-white rounded-xl p-8 h-full card-shadow"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="icon-container mb-6">
                    <value.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium text-navy mb-3">{value.title}</h3>
                  <p className="text-charcoal-light leading-relaxed">{value.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimateOnScroll variant="fadeUp" className="text-center mb-12">
            <span className="badge mb-4">Our Journey</span>
            <h2>12 years of quality work</h2>
          </AnimateOnScroll>

          <div className="max-w-2xl mx-auto">
            <StaggerContainer className="relative" staggerDelay={0.1}>
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              {timeline.map((item, index) => (
                <StaggerItem key={item.year}>
                  <div className="relative pl-12 pb-10 last:pb-0">
                    {/* Dot */}
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-navy flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div className="bg-cream rounded-xl p-6">
                      <p className="text-sm font-medium text-navy mb-1">{item.year}</p>
                      <p className="text-charcoal-light">{item.event}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding mesh-gradient relative overflow-hidden">
        <div className="container-max relative z-10 text-center">
          <AnimateOnScroll variant="scale">
            <h2 className="text-white mb-4">Let&apos;s talk about your project</h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto text-lg">
              Get a quote and see what we can do.
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
