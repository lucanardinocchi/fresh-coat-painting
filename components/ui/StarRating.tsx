"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  className?: string;
  animated?: boolean;
}

export function StarRating({
  rating,
  maxRating = 5,
  size = 16,
  className = "",
  animated = true,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const partialFill = rating - fullStars;
  const emptyStars = maxRating - Math.ceil(rating);

  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`}>
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <motion.div
          key={`full-${i}`}
          initial={animated ? { opacity: 0, scale: 0 } : {}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, duration: 0.3, type: "spring" }}
        >
          <Star
            size={size}
            className="text-amber-400 fill-amber-400"
          />
        </motion.div>
      ))}

      {/* Partial star */}
      {partialFill > 0 && (
        <motion.div
          key="partial"
          className="relative"
          initial={animated ? { opacity: 0, scale: 0 } : {}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: fullStars * 0.1, duration: 0.3, type: "spring" }}
        >
          <Star size={size} className="text-gray-300" />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${partialFill * 100}%` }}
          >
            <Star size={size} className="text-amber-400 fill-amber-400" />
          </div>
        </motion.div>
      )}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <motion.div
          key={`empty-${i}`}
          initial={animated ? { opacity: 0, scale: 0 } : {}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: (fullStars + (partialFill > 0 ? 1 : 0) + i) * 0.1,
            duration: 0.3,
            type: "spring",
          }}
        >
          <Star size={size} className="text-gray-300" />
        </motion.div>
      ))}
    </div>
  );
}
