export const COMPANY = {
  name: "Fresh Coat Painting Co.",
  tagline: "Adelaide's Trusted Residential Painters Since 2012",
  phone: "08 7225 4183",
  email: "quotes@freshcoatadelaide.com.au",
  abn: "47 621 853 094",
  licence: "BLD 274819",
  insurance: "$20M Public Liability Insurance",
  serviceArea: "Adelaide Metro — all suburbs within 40km of CBD",
  hours: "Monday–Friday, 7am–5pm",
  googleReviewsUrl: "https://google.com/maps",
  yearsInBusiness: 12,
  homesPainted: 500,
  googleRating: 4.9,
  totalReviews: 127,
} as const;

export const NAV_LINKS = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Interior Painting", href: "/services/interior" },
      { label: "Exterior Painting", href: "/services/exterior" },
      { label: "Specialty Services", href: "/services/specialty" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Work", href: "/our-work" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/interior" },
  { label: "Pricing", href: "/pricing" },
  { label: "Work", href: "/our-work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_SERVICES = [
  { label: "Interior Painting", href: "/services/interior" },
  { label: "Exterior Painting", href: "/services/exterior" },
  { label: "Specialty Services", href: "/services/specialty" },
] as const;
