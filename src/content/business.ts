import type { BusinessSettings } from "./types";

export const businessSettings: BusinessSettings = {
  businessName: "Power In Service Inc.",
  phoneDisplay: "689-347-4320",
  phoneHref: "tel:+16893474320",
  primaryEmail: "hello@powerandservice.com",
  secondaryEmail: "powerandservice@gmail.com",
  displaySecondaryEmail: false,
  areaServed: "Orlando and Central Florida",
  servingSince: 2005,
  insuranceStatement: "Insured up to $1 million in liability coverage",
  insuranceShort: "Insured up to $1 million",
  angiUrl:
    "https://www.angi.com/companylist/us/fl/azalea-park/power-in-services-inc-reviews-156521772.htm",
  angiUrlNote:
    "This Angi listing still appears under a former business name and may redirect. Confirm the public URL before launch.",
  formMode: "live",
  emergencyServicesEnabled: false,
  emergencyServicesNote:
    "Angi listings mention emergency services. Keep this off until the owner confirms what those services include.",
  promotionEnabled: false,
  promotionNote:
    "Do not display the former 20% off first $400 flyer promotion unless the owner confirms it remains active.",
  demoMode: false,
  websiteUrl: "https://powerandcleaning.com",
  slogan: "Forget the Rest, Come to the Best",
  ownerStory:
    "My name is Patrick Moncur, President of Power In Service Inc. My journey started in the Bahamas at the Princess Hotels & Resorts, where I did tile strip and wax and exterminating. I then moved to the United States, where I worked for Sean’s Carpet Cleaning and Tile & Grout Cleaning. I also worked for Dark Maintenance. Finally, I worked for Dry Concept, doing carpet dry cleaning. I was certified by the Institute of Inspection, Cleaning and Restoration Certification (IICRC).\n\nIn my company, we give you the best of service. What makes us special is the care, time, and personal effort we put into it — with joy and a smile on our faces.",
  positioning:
    "Commercial cleaning and property services from one dependable team.",
  stockDisclosure:
    "Representative service imagery. These photographs illustrate the kinds of spaces we service; they are not photographs of completed Power In Service projects.",
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
  { id: "airbnb", label: "Airbnb or short-term rental" },
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
  { id: "apartment-turnover", label: "Apartment punch-out" },
  { id: "airbnb-punch-out", label: "Airbnb punch-out" },
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
