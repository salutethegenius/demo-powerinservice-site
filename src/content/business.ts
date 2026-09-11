import type { BusinessSettings } from "./types";

export const businessSettings: BusinessSettings = {
  businessName: "Power In Service Inc.",
  phoneDisplay: "954-540-4410",
  phoneHref: "tel:+19545404410",
  primaryEmail: "powerinservice@gmail.com",
  secondaryEmail: "patmoncur@gmail.com",
  displaySecondaryEmail: false,
  areaServed: "Orlando and Central Florida",
  servingSince: 2005,
  insuranceStatement: "Insured up to $1 million in liability coverage",
  insuranceShort: "Insured up to $1 million",
  angiUrl:
    "https://www.angi.com/companylist/us/fl/azalea-park/power-in-services-inc-reviews-156521772.htm",
  angiUrlNote:
    "This Angi listing still appears under a former business name and may redirect. Confirm the public URL before launch.",
  formMode: "demo",
  emergencyServicesEnabled: false,
  emergencyServicesNote:
    "Angi listings mention emergency services. Keep this off until the owner confirms what those services include.",
  promotionEnabled: false,
  promotionNote:
    "Do not display the former 20% off first $400 flyer promotion unless the owner confirms it remains active.",
  demoMode: true,
  websiteUrl: "",
  ownerStory: "",
  positioning:
    "Commercial cleaning and property services from one dependable team.",
  demoNotice:
    "Independent website concept prepared for Power In Service Inc. review.",
  stockDisclosure:
    "Representative service imagery. Genuine Power In Service project photographs will be added after owner approval.",
  wordmarkPrimary: "POWER IN",
  wordmarkSecondary: "SERVICE INC.",
  wordmarkIsOfficialLogo: false,
};

export const trustItems = [
  {
    id: "since",
    label: "Serving since 2005",
    detail: `Serving Central Florida since ${businessSettings.servingSince}`,
  },
  {
    id: "insured",
    label: "$1 million liability coverage",
    detail: businessSettings.insuranceStatement,
  },
  {
    id: "estimates",
    label: "Free estimates",
    detail: "Talk through the property before work is scheduled.",
  },
  {
    id: "scope",
    label: "Commercial and residential",
    detail: "Commercial work leads. Residential service remains available.",
  },
] as const;

export const managerChecklist = [
  "One-time and recurring service options",
  "Property walkthroughs",
  "Cleaning and light maintenance from one team",
  "Scheduling based on property needs",
  "Clear service discussions before work begins",
] as const;

export const processSteps = [
  {
    step: 1,
    title: "Tell us about the property",
    body: "Share the space type, approximate size, access notes, and the services you need.",
  },
  {
    step: 2,
    title: "Schedule a walkthrough",
    body: "A site visit helps us see the floors, traffic patterns, and turnover or maintenance work involved.",
  },
  {
    step: 3,
    title: "Receive a service recommendation",
    body: "We outline a practical plan for cleaning, floor care, and any light property work requested.",
  },
  {
    step: 4,
    title: "Approve the work and schedule",
    body: "Once the scope is clear, we set a start date that fits the property.",
  },
] as const;

export const quotePropertyTypes = [
  { id: "office", label: "Office" },
  { id: "retail", label: "Retail" },
  { id: "apartment-community", label: "Apartment community" },
  { id: "commercial-common-area", label: "Commercial common area" },
  { id: "restaurant-entertainment", label: "Restaurant or entertainment space" },
  { id: "residential", label: "Residential property" },
  { id: "other", label: "Other" },
] as const;

export const quoteServiceOptions = [
  { id: "commercial-cleaning", label: "Commercial cleaning" },
  { id: "carpet-cleaning", label: "Carpet cleaning" },
  { id: "tile-grout-cleaning", label: "Tile and grout cleaning" },
  { id: "floor-care", label: "Floor care" },
  { id: "water-extraction", label: "Water extraction" },
  { id: "apartment-turnover", label: "Apartment turnover" },
  { id: "painting", label: "Painting" },
  { id: "sheetrock-work", label: "Sheetrock work" },
  { id: "handyman-services", label: "Handyman services" },
  { id: "residential-cleaning", label: "Residential cleaning" },
  { id: "other", label: "Other" },
] as const;

export const serviceFrequencyOptions = [
  "One-time",
  "Weekly",
  "Biweekly",
  "Monthly",
  "As needed",
  "Not sure yet",
] as const;

export const timeWindowOptions = [
  "Morning",
  "Afternoon",
  "Evening",
  "Flexible",
] as const;
