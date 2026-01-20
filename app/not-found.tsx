"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-radial">
      <div className="container-max py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-24 h-24 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-8">
            <Home className="w-10 h-10 text-navy" />
          </div>

          <h1 className="text-4xl md:text-5xl mb-4">Page not found</h1>
          <p className="text-charcoal-light text-lg mb-8 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. 
            It might have been moved or doesn&apos;t exist.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/" size="lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <Button href="/get-a-quote" variant="outline" size="lg">
              Get a Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
