import { Button } from "@/components/ui/Button";

interface CTABannerProps {
  headline: string;
  subtext?: string;
  buttonLabel: string;
  buttonHref: string;
  variant?: "terracotta" | "navy";
}

export function CTABanner({
  headline,
  subtext,
  buttonLabel,
  buttonHref,
  variant = "terracotta",
}: CTABannerProps) {
  const bgClass = variant === "terracotta" ? "bg-terracotta" : "bg-navy";
  const buttonVariant = variant === "terracotta" ? "white" : "navy";

  return (
    <section className={`${bgClass} section-padding`}>
      <div className="container-max text-center">
        <h2 className="text-white mb-4">{headline}</h2>
        {subtext && (
          <p className="text-white/90 text-lg mb-8 max-w-[600px] mx-auto">
            {subtext}
          </p>
        )}
        <Button href={buttonHref} variant={buttonVariant} size="lg">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
