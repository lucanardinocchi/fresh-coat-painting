import { Star } from "lucide-react";

interface ReviewCardProps {
  text: string;
  name: string;
  suburb: string;
  rating: number;
}

export function ReviewCard({ text, name, suburb, rating }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "fill-terracotta text-terracotta"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Review text */}
      <p className="text-charcoal mb-4 leading-relaxed">&ldquo;{text}&rdquo;</p>

      {/* Attribution */}
      <div className="pt-4 border-t border-gray-100">
        <p className="font-semibold text-navy">{name}</p>
        <p className="text-sm text-charcoal/70">{suburb}</p>
      </div>
    </div>
  );
}
