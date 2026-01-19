import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-max">
          <p className="text-sm text-charcoal-light mb-4 tracking-wide">About</p>
          <h1 className="max-w-3xl">A family business that takes pride in the finish</h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
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
              <p className="text-navy font-medium pt-4">
                — Matt Turner, Owner
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-b border-border pb-8">
                <p className="text-sm text-charcoal-light mb-2">Licence</p>
                <p className="text-navy font-medium">BLD {COMPANY.licence.replace("BLD ", "")}</p>
              </div>
              <div className="border-b border-border pb-8">
                <p className="text-sm text-charcoal-light mb-2">Insurance</p>
                <p className="text-navy font-medium">{COMPANY.insurance}</p>
              </div>
              <div className="border-b border-border pb-8">
                <p className="text-sm text-charcoal-light mb-2">Warranty</p>
                <p className="text-navy font-medium">3-year workmanship guarantee</p>
              </div>
              <div>
                <p className="text-sm text-charcoal-light mb-2">Membership</p>
                <p className="text-navy font-medium">Master Painters Australia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="mb-12">What we stand for</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                title: "On time, every time",
                description: "We show up when we say we will. If something changes, you'll hear from us before it's a problem.",
              },
              {
                title: "Prep makes the finish",
                description: "We spend more time prepping than most painters spend on the whole job. It's the only way to get edges that last.",
              },
              {
                title: "Honest pricing",
                description: "No hidden extras, no surprise invoices. The quote we give is the price you pay—unless you change the scope.",
              },
            ].map((value) => (
              <div key={value.title}>
                <h3 className="text-base font-medium text-navy mb-3">{value.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="container-max text-center">
          <h2 className="text-white mb-4">Let&apos;s talk about your project</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Get a quote and see what we can do.
          </p>
          <Button href="/get-a-quote" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
            Get Your Free Quote
          </Button>
        </div>
      </section>
    </>
  );
}
