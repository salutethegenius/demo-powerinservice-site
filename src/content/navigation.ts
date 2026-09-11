import type { NavItem } from "./types";

export const primaryNav: NavItem[] = [
  {
    href: "/commercial-cleaning",
    label: "Services",
    children: [
      { href: "/commercial-cleaning", label: "Commercial Cleaning" },
      { href: "/floor-care", label: "Floor Care" },
      { href: "/property-services", label: "Property Services" },
      { href: "/residential", label: "Residential" },
    ],
  },
  { href: "/commercial-cleaning", label: "Commercial Cleaning" },
  { href: "/floor-care", label: "Floor Care" },
  { href: "/property-services", label: "Property Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/request-quote", label: "Request a Quote" },
];

export const footerNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/request-quote", label: "Request a Site Visit" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export const footerServiceLinks = [
  { href: "/commercial-cleaning", label: "Commercial Cleaning" },
  { href: "/floor-care", label: "Floor Care" },
  { href: "/property-services", label: "Turnovers & Maintenance" },
  { href: "/residential", label: "Residential Services" },
];
