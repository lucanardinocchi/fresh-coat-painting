import { Button } from "@/components/ui/Button";

interface HeroProps {
  headline: string;
  subheadline?: string;
  backgroundImage?: string;
  height?: "full" | "large" | "medium" | "small";
  ctaButton?: {
    label: string;
    href: string;
  };
  trustBar?: {
    items: string[];
  };
  overlay?: boolean;
}

const heightClasses = {
  full: "min-h-[70vh]",
  large: "min-h-[50vh]",
  medium: "min-h-[40vh]",
  small: "min-h-[30vh]",
};

export function Hero({
  headline,
  subheadline,
  backgroundImage,
  height = "large",
  ctaButton,
  trustBar,
  overlay = true,
}: HeroProps) {
  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* Overlay */}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-navy/40" />
      )}

      {/* Content */}
      <div className="relative z-10 container-max text-center py-16">
        <h1
          className={`mb-4 ${
            backgroundImage ? "text-white" : "text-navy"
          }`}
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          {headline}
        </h1>
        {subheadline && (
          <p
            className={`text-xl max-w-[600px] mx-auto mb-8 ${
              backgroundImage ? "text-white/90" : "text-charcoal"
            }`}
          >
            {subheadline}
          </p>
        )}
        {ctaButton && (
          <Button href={ctaButton.href} size="lg">
            {ctaButton.label}
          </Button>
        )}

        {/* Trust Bar */}
        {trustBar && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-0">
            {trustBar.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center text-white font-medium"
              >
                <span>{item}</span>
                {index < trustBar.items.length - 1 && (
                  <span className="hidden md:block mx-6 h-5 w-px bg-white/40" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

interface ColoredHeroProps {
  headline: string;
  subheadline?: string;
  backgroundColor?: "terracotta" | "navy";
}

export function ColoredHero({
  headline,
  subheadline,
  backgroundColor = "terracotta",
}: ColoredHeroProps) {
  const bgClass = backgroundColor === "terracotta" ? "bg-terracotta" : "bg-navy";

  return (
    <section className={`${bgClass} min-h-[40vh] flex items-center justify-center pt-20`}>
      <div className="container-max text-center py-16">
        <h1 className="text-white mb-4">{headline}</h1>
        {subheadline && (
          <p className="text-xl text-white/90 max-w-[600px] mx-auto">
            {subheadline}
          </p>
        )}
      </div>
    </section>
  );
}
