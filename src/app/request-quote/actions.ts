"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { businessSettings } from "@/content/business";
import { rateLimit } from "@/lib/rate-limit";
import {
  escapeHtml,
  propertyTypeLabel,
  serviceLabels,
  serviceTimingLabel,
  validateQuote,
  type QuoteInput,
} from "@/lib/quote";

export type QuoteResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Record<string, string> };

function contactFallback(): string {
  return `We could not send this request automatically. Call ${businessSettings.phoneDisplay} or email ${businessSettings.primaryEmail}.`;
}

function row(label: string, value: string): string {
  const display = value.trim() || "Not provided";
  return `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(display)}</p>`;
}

function textRow(label: string, value: string): string {
  return `${label}: ${value.trim() || "Not provided"}`;
}

export async function submitQuote(input: QuoteInput): Promise<QuoteResult> {
  if (input.website.trim()) {
    return { ok: true };
  }

  if (businessSettings.formMode !== "live") {
    return { ok: false, error: contactFallback() };
  }

  const headerStore = await headers();
  const ip =
    headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerStore.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(`quote:${ip}`, 5, 10 * 60 * 1000)) {
    return {
      ok: false,
      error: `Too many requests were sent. Call ${businessSettings.phoneDisplay} or email ${businessSettings.primaryEmail}.`,
    };
  }

  const fieldErrors = validateQuote(input);
  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      error: "Please complete the highlighted fields. Nothing has been sent.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.QUOTE_TO_EMAIL || businessSettings.primaryEmail;

  if (!apiKey || !from) {
    return { ok: false, error: contactFallback() };
  }

  const services = serviceLabels(input.services);
  const propertyType = propertyTypeLabel(input.propertyType);
  const timing = serviceTimingLabel(input.serviceTiming);

  const text = [
    "New site visit request from powerandcleaning.com",
    "",
    textRow("Name", input.fullName),
    textRow("Company", input.companyName),
    textRow("Email", input.email),
    textRow("Phone", input.phone),
    textRow("Property address", input.propertyAddress),
    textRow("City", input.city),
    textRow("ZIP", input.zip),
    textRow("Property type", propertyType),
    textRow("Square footage", input.squareFootage),
    textRow("Services", services),
    textRow("One-time or recurring", timing),
    textRow("Frequency", input.frequency),
    textRow("Walkthrough date", input.walkthroughDate),
    textRow("Time window", input.timeWindow),
    textRow("Desired start date", input.startDate),
    textRow("Details", input.details),
  ].join("\n");

  const html = `
    <h1>New site visit request</h1>
    ${row("Name", input.fullName)}
    ${row("Company", input.companyName)}
    ${row("Email", input.email)}
    ${row("Phone", input.phone)}
    ${row("Property address", input.propertyAddress)}
    ${row("City", input.city)}
    ${row("ZIP", input.zip)}
    ${row("Property type", propertyType)}
    ${row("Square footage", input.squareFootage)}
    ${row("Services", services)}
    ${row("One-time or recurring", timing)}
    ${row("Frequency", input.frequency)}
    ${row("Walkthrough date", input.walkthroughDate)}
    ${row("Time window", input.timeWindow)}
    ${row("Desired start date", input.startDate)}
    ${row("Details", input.details)}
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: input.email.trim(),
    subject: `Site visit request from ${input.fullName.trim()}`,
    text,
    html,
  });

  if (error) {
    return { ok: false, error: contactFallback() };
  }

  return { ok: true };
}
