import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface CardProps {
  icon?: LucideIcon;
  title: string;
  text: string;
  link?: {
    href: string;
    label: string;
  };
  className?: string;
}

export function Card({ icon: Icon, title, text, link, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {Icon && (
        <div className="w-14 h-14 bg-terracotta/10 rounded-lg flex items-center justify-center mb-5">
          <Icon className="w-7 h-7 text-terracotta" />
        </div>
      )}
      <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-charcoal mb-4">{text}</p>
      {link && (
        <Link
          href={link.href}
          className="inline-flex items-center text-terracotta font-semibold hover:gap-2 transition-all"
        >
          {link.label}
          <span className="ml-1">→</span>
        </Link>
      )}
    </div>
  );
}

interface ValueCardProps {
  title: string;
  text: string;
}

export function ValueCard({ title, text }: ValueCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-terracotta">
      <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-charcoal">{text}</p>
    </div>
  );
}
