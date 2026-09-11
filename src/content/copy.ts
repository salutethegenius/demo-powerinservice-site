import { businessSettings } from "./business";
import type { FaqItem, PageSeo } from "./types";

export const faqs: FaqItem[] = [
  {
    id: "area",
    question: "Where does Power In Service work?",
    answer: `Power In Service Inc. serves ${businessSettings.areaServed}. Tell us the property location when you request a site visit.`,
  },
  {
    id: "walkthrough",
    question: "Do commercial properties need a walkthrough?",
    answer:
      "A walkthrough is the most reliable way to discuss square footage, access, frequency, and the mix of cleaning, floor care, or light maintenance involved. We do not promise instant pricing for commercial properties.",
  },
  {
    id: "residential-booking",
    question: "Can I book residential cleaning online?",
    answer:
      "Not through this website. Residential customers should request an estimate so the work can be discussed before a date is set.",
  },
  {
    id: "insurance",
    question: "Is the company insured?",
    answer: businessSettings.insuranceStatement + ".",
  },
  {
    id: "licensed-trades",
    question: "Does the company handle electrical, plumbing, or roofing?",
    answer:
      "No. Property services are limited to cleaning, turnovers, painting, sheetrock work, home repairs, and general handyman assistance. Licensed electrical, plumbing, roofing, structural, or regulated construction work is not offered.",
  },
];

export const pageSeo: Record<string, PageSeo> = {
  home: {
    title: "Commercial Cleaning Orlando | Power In Service Inc.",
    description:
      "Power In Service Inc. provides commercial cleaning, floor care, property turnovers, and light maintenance throughout Orlando and Central Florida.",
    path: "/",
  },
  commercial: {
    title: "Commercial Cleaning in Orlando",
    description:
      "Recurring and one-time commercial cleaning for offices, retail spaces, common areas, floors, carpets, and restrooms in Orlando and Central Florida.",
    path: "/commercial-cleaning",
  },
  floorCare: {
    title: "Floor Care and Carpet Cleaning",
    description:
      "Carpet cleaning, tile and grout cleaning, floor cleaning, floor restoration, and water extraction from Power In Service Inc.",
    path: "/floor-care",
  },
  property: {
    title: "Property Turnovers and Light Maintenance",
    description:
      "Apartment punch-outs, move-in and move-out preparation, painting, sheetrock work, and handyman services for Central Florida properties.",
    path: "/property-services",
  },
  residential: {
    title: "Residential Cleaning and Home Services",
    description:
      "Residential cleaning, carpet and tile care, water extraction, painting, sheetrock work, and home repairs in Orlando and Central Florida.",
    path: "/residential",
  },
  ourWork: {
    title: "Our Work",
    description:
      "See how Power In Service presents completed property work. Genuine project photographs will be added after owner approval.",
    path: "/our-work",
  },
  about: {
    title: "About Power In Service Inc.",
    description:
      "Power In Service Inc. has served Central Florida since 2005 with commercial cleaning, floor care, turnovers, and light maintenance.",
    path: "/about",
  },
  quote: {
    title: "Request a Site Visit",
    description:
      "Request a property walkthrough or free estimate from Power In Service Inc. for commercial cleaning and property services in Central Florida.",
    path: "/request-quote",
  },
  contact: {
    title: "Contact",
    description:
      "Call 954-540-4410 or email powerinservice@gmail.com to discuss commercial cleaning and property services in Orlando and Central Florida.",
    path: "/contact",
  },
  privacy: {
    title: "Privacy",
    description:
      "Privacy information for the Power In Service Inc. website concept.",
    path: "/privacy",
  },
};
