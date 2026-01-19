"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
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

    // Simulate form submission
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
      {/* Hero Section */}
      <section className="bg-navy min-h-[40vh] flex items-center justify-center pt-20">
        <div className="container-max text-center py-16">
          <h1 className="text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-white/90 max-w-[600px] mx-auto">
            Questions? Prefer to talk? We&apos;re here.
          </p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Contact Details */}
            <div>
              <h2 className="mb-8">Contact Details</h2>

              <div className="space-y-6 mb-10">
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 text-charcoal hover:text-terracotta transition-colors"
                >
                  <div className="w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-terracotta" />
                  </div>
                  <span className="font-medium">{COMPANY.phone}</span>
                </a>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-4 text-charcoal hover:text-terracotta transition-colors"
                >
                  <div className="w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-terracotta" />
                  </div>
                  <span className="font-medium">{COMPANY.email}</span>
                </a>

                <div className="flex items-center gap-4 text-charcoal">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-terracotta" />
                  </div>
                  <span className="font-medium">{COMPANY.hours}</span>
                </div>

                <div className="flex items-start gap-4 text-charcoal">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-terracotta" />
                  </div>
                  <span className="font-medium">{COMPANY.serviceArea}</span>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209891.37507983677!2d138.44370345!3d-34.92114895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab735c7c526b33f%3A0x4033654628ec640!2sAdelaide%20SA%2C%20Australia!5e0!3m2!1sen!2sus!4v1699000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Service area map"
                />
              </div>
            </div>

            {/* Right Column: Form */}
            <div>
              <h2 className="mb-8">Send a Message</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <h3 className="text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="suburb"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Suburb
                    </label>
                    <input
                      type="text"
                      id="suburb"
                      name="suburb"
                      value={formData.suburb}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all resize-none"
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-sm text-charcoal/70 text-center">
                    For instant estimates, try our{" "}
                    <Link
                      href="/get-a-quote"
                      className="text-terracotta hover:underline"
                    >
                      online quote tool
                    </Link>{" "}
                    instead.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Licence & Insurance */}
      <section className="bg-warm-white section-padding py-8">
        <div className="container-max text-center">
          <p className="text-charcoal/70 text-sm">
            ABN {COMPANY.abn} | Licence {COMPANY.licence} | {COMPANY.insurance}
          </p>
        </div>
      </section>
    </>
  );
}
