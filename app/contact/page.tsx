"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    suburb: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-max">
          <p className="text-sm text-charcoal-light mb-4 tracking-wide">Contact</p>
          <h1 className="max-w-2xl mb-6">Get in touch</h1>
          <p className="text-lg text-charcoal-light max-w-xl">
            Questions? Prefer to talk? We&apos;re here.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Details */}
            <div>
              <h2 className="mb-10">Contact details</h2>
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-charcoal-light mb-2">Phone</p>
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                    className="text-navy font-medium hover:text-navy-light transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-charcoal-light mb-2">Email</p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-navy font-medium hover:text-navy-light transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-charcoal-light mb-2">Hours</p>
                  <p className="text-navy font-medium">{COMPANY.hours}</p>
                </div>
                <div>
                  <p className="text-sm text-charcoal-light mb-2">Service area</p>
                  <p className="text-navy font-medium">{COMPANY.serviceArea}</p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-xs text-charcoal-light">
                  ABN {COMPANY.abn}<br />
                  Licence {COMPANY.licence}<br />
                  {COMPANY.insurance}
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="mb-10">Send a message</h2>

              {isSubmitted ? (
                <div className="border border-border p-8">
                  <h3 className="text-navy mb-2">Message sent</h3>
                  <p className="text-charcoal-light">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-charcoal-light mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-navy outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-charcoal-light mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-navy outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm text-charcoal-light mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-navy outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="suburb"
                      className="block text-sm text-charcoal-light mb-2"
                    >
                      Suburb (optional)
                    </label>
                    <input
                      type="text"
                      id="suburb"
                      name="suburb"
                      value={formData.suburb}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-navy outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-charcoal-light mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-navy outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>

                  <p className="text-sm text-charcoal-light pt-4">
                    For instant estimates, try our{" "}
                    <Link
                      href="/get-a-quote"
                      className="text-navy hover:text-navy-light transition-colors"
                    >
                      online quote tool
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
