"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton
  extends BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  href?: never;
  external?: never;
}

interface ButtonAsLink
  extends BaseButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  href: string;
  external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-light",
  outline:
    "border border-navy text-navy hover:bg-navy hover:text-white",
  ghost:
    "text-navy hover:text-navy-light",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, external, ...linkProps } = props as ButtonAsLink;

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
          {...linkProps}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedStyles} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
