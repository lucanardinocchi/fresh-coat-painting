import Image from "next/image";
import { Shield, ShieldCheck, Award, BadgeCheck } from "lucide-react";
import { ValueCard } from "@/components/ui/Card";
import { CTABanner } from "@/components/sections/CTABanner";
import { COMPANY } from "@/lib/constants";

const credentials = [
  {
    icon: Shield,
    text: `BLD Licence ${COMPANY.licence.replace("BLD ", "")}`,
  },
  {
    icon: ShieldCheck,
    text: "Fully Insured — $20M Public Liability",
  },
  {
    icon: Award,
    text: "Master Painters Member",
  },
  {
    icon: BadgeCheck,
    text: "3-Year Workmanship Warranty",
  },
];

const values = [
  {
    title: "On Time, Every Time",
    text: "We show up when we say we will. If something changes, you'll hear from us before it's a problem.",
  },
  {
    title: "Prep Makes the Finish",
    text: "We spend more time prepping than most painters spend on the whole job. It's the only way to get edges that last.",
  },
  {
    title: "Honest Pricing",
    text: "No hidden extras, no surprise invoices. The quote we give is the price you pay — unless you change the scope.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[40vh] flex items-center justify-center pt-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy/50" />
        <div className="relative z-10 container-max text-center py-16">
          <h1 className="text-white">About Fresh Coat</h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="mb-6">A Family Business That Takes Pride in the Finish</h2>
              <div className="space-y-5 text-charcoal leading-relaxed">
                <p>
                  Fresh Coat started in 2012 when I left a commercial painting company to do things properly. Too many shortcuts, too much rushing, too many callbacks. I wanted to build something different — a small team that treats every home like it&apos;s our own.
                </p>
                <p>
                  Twelve years later, we&apos;re still a small team. That&apos;s deliberate. I&apos;m on every quote, I know every job, and our painters have been with us for years. You won&apos;t get a rotating crew of subcontractors — you&apos;ll get the same faces from start to finish.
                </p>
                <p>
                  We&apos;re not the cheapest painters in Adelaide. But we prep properly, we use quality paint, and we don&apos;t cut corners on edges or coats. If that&apos;s what you&apos;re looking for, we&apos;d love to quote your job.
                </p>
              </div>
              <p className="mt-6 font-semibold text-navy">— Matt Turner, Owner</p>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Matt Turner, Owner of Fresh Coat Painting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-warm-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {credentials.map((cred, index) => (
              <div key={index} className="text-center">
                <cred.icon className="w-10 h-10 text-terracotta mx-auto mb-3" />
                <p className="text-charcoal font-medium text-sm">{cred.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <h2 className="text-center mb-12">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} title={value.title} text={value.text} />
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
