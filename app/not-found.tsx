import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-navy">
      <div className="container-max text-center py-16">
        <h1 className="text-white mb-4">Page Not Found</h1>
        <p className="text-xl text-white/80 mb-8 max-w-[500px] mx-auto">
          Sorry, that page doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="white">
            Go Home
          </Button>
          <Button href="/get-a-quote" variant="primary">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
