import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  suburb?: string;
  rating?: number;
}

export function TestimonialCard({
  quote,
  name,
  suburb,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {/* Stars */}
      <div className="flex justify-center gap-1 mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-6 h-6 fill-terracotta text-terracotta" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-xl md:text-2xl text-white/95 leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <p className="text-white/80">
        — {name}
        {suburb && `, ${suburb}`}
      </p>
    </div>
  );
}
