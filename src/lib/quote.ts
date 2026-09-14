import {
  quotePropertyTypes,
  quoteServiceOptions,
} from "@/content/business";

export type QuoteInput = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  propertyAddress: string;
  city: string;
  zip: string;
  propertyType: string;
  squareFootage: string;
  services: string[];
  serviceTiming: string;
  frequency: string;
  walkthroughDate: string;
  timeWindow: string;
  startDate: string;
  details: string;
  consent: boolean;
  website: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateQuote(form: QuoteInput): Record<string, string> {
  const next: Record<string, string> = {};
  if (!form.fullName.trim()) next.fullName = "Enter your full name.";
  if (!form.email.trim() || !emailPattern.test(form.email.trim())) {
    next.email = "Enter a valid email address.";
  }
  if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) {
    next.phone = "Enter a phone number we can use to reach you.";
  }
  if (!form.city.trim()) next.city = "Enter the city.";
  if (!form.propertyType) next.propertyType = "Select a property type.";
  if (form.services.length === 0) next.services = "Select at least one service.";
  if (!form.serviceTiming) next.serviceTiming = "Tell us if this is one-time or recurring.";
  if (!form.consent) next.consent = "Consent is required before we can use these details.";
  return next;
}

export function propertyTypeLabel(id: string): string {
  return quotePropertyTypes.find((option) => option.id === id)?.label ?? id;
}

export function serviceLabels(ids: string[]): string {
  return ids
    .map((id) => quoteServiceOptions.find((option) => option.id === id)?.label ?? id)
    .join(", ");
}

export function serviceTimingLabel(value: string): string {
  if (value === "one-time") return "One-time";
  if (value === "recurring") return "Recurring";
  if (value === "not-sure") return "Not sure yet";
  return value;
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
