"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { COMPANY } from "@/lib/constants";

export default function PrivacyPage() {
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
            <span className="badge mb-4">Legal</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-charcoal-light mt-4"
          >
            Last updated: January 2024
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <div className="max-w-3xl">
            <AnimateOnScroll variant="fadeUp">
              <div className="prose prose-lg text-charcoal-light">
                <h2 className="text-navy">Information We Collect</h2>
                <p>
                  When you request a quote or contact us, we collect information such as your name, 
                  email address, phone number, and details about your painting project. This information 
                  is necessary to provide you with an accurate quote and deliver our services.
                </p>

                <h2 className="text-navy">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide you with quotes and estimates</li>
                  <li>Communicate with you about your project</li>
                  <li>Schedule and complete painting work</li>
                  <li>Send you relevant updates about our services</li>
                  <li>Improve our services and customer experience</li>
                </ul>

                <h2 className="text-navy">Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties. 
                  We may share information with trusted service providers who assist us in operating our 
                  business, provided they agree to keep this information confidential.
                </p>

                <h2 className="text-navy">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. 
                  However, no method of transmission over the internet is 100% secure, and we cannot 
                  guarantee absolute security.
                </p>

                <h2 className="text-navy">Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of marketing communications</li>
                </ul>

                <h2 className="text-navy">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or your personal information, 
                  please contact us at:
                </p>
                <ul>
                  <li>Email: {COMPANY.email}</li>
                  <li>Phone: {COMPANY.phone}</li>
                </ul>

                <h2 className="text-navy">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new policy on this page with an updated date.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}
