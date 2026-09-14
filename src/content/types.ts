export type FormMode = "demo" | "live";

export type ImageSourceType = "stock" | "company";

export type ServiceCategoryId =
  | "commercial-cleaning"
  | "floor-care"
  | "property-services"
  | "residential";

export type PropertyTypeId =
  | "office"
  | "retail"
  | "apartment-community"
  | "airbnb"
  | "commercial-common-area"
  | "restaurant-entertainment"
  | "residential"
  | "other";

export type QuoteServiceId =
  | "commercial-cleaning"
  | "carpet-cleaning"
  | "tile-grout-cleaning"
  | "floor-care"
  | "water-extraction"
  | "apartment-turnover"
  | "airbnb-punch-out"
  | "painting"
  | "sheetrock-work"
  | "handyman-services"
  | "residential-cleaning"
  | "other";

export interface BusinessSettings {
  businessName: string;
  phoneDisplay: string;
  phoneHref: string;
  primaryEmail: string;
  secondaryEmail: string;
  displaySecondaryEmail: boolean;
  areaServed: string;
  servingSince: number;
  insuranceStatement: string;
  insuranceShort: string;
  angiUrl: string;
  angiUrlNote: string;
  formMode: FormMode;
  emergencyServicesEnabled: boolean;
  emergencyServicesNote: string;
  promotionEnabled: boolean;
  promotionNote: string;
  demoMode: boolean;
  websiteUrl: string;
  ownerStory: string;
  slogan: string;
  positioning: string;
  stockDisclosure: string;
  wordmarkPrimary: string;
  wordmarkSecondary: string;
  wordmarkIsOfficialLogo: boolean;
}

export interface SiteImage {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  sourceType: ImageSourceType;
  ownershipVerified: boolean;
  publicationApproved: boolean;
  sourceUrl: string;
  photographer: string;
  platform: "Pexels" | "Unsplash" | "Company";
  projectId?: string;
  intendedSection: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  summary: string;
}

export interface ServiceCategory {
  id: ServiceCategoryId;
  name: string;
  shortName: string;
  href: string;
  headline: string;
  supporting: string;
  prominence: "primary" | "secondary";
  imageId: string;
  services: ServiceItem[];
}

export interface PropertyType {
  id: PropertyTypeId;
  name: string;
  summary: string;
  imageId: string;
}

export interface NavItem {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

export interface ReviewRecord {
  id: string;
  source: "Angi";
  rating: number;
  reviewCount: number;
  recommendationPercent?: number;
  excerpt?: string;
  attribution?: string;
  dateLabel?: string;
  url: string;
}

export interface ProjectRecord {
  id: string;
  title: string;
  serviceCategory: ServiceCategoryId;
  propertyType: string;
  serviceArea: string;
  challenge: string;
  workCompleted: string;
  result: string;
  beforeImageIds: string[];
  afterImageIds: string[];
  videoId?: string;
  publicationApproved: boolean;
  clientNameApproved: boolean;
}

export interface ProjectVideo {
  id: string;
  publicYoutubeUrl: string;
  title: string;
  description: string;
  posterImageId?: string;
  serviceCategory: ServiceCategoryId;
  publicationApproved: boolean;
  captionsOrTranscript: "available" | "needed" | "unknown";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  body: string;
}

export interface PageSeo {
  title: string;
  description: string;
  path: string;
}
