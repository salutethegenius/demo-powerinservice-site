"use client";

import { useMemo, useState } from "react";
import {
  businessSettings,
  quotePropertyTypes,
  quoteServiceOptions,
  serviceFrequencyOptions,
  timeWindowOptions,
} from "@/content/business";
import { buttonClassName } from "@/components/ui/button-styles";
import { PhoneIcon } from "@/components/ui/Icons";

type FormState = {
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
};

const empty: FormState = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  propertyAddress: "",
  city: "",
  zip: "",
  propertyType: "",
  squareFootage: "",
  services: [],
  serviceTiming: "",
  frequency: "",
  walkthroughDate: "",
  timeWindow: "",
  startDate: "",
  details: "",
  consent: false,
};

function Field({
  label,
  htmlFor,
  hint,
  children,
  error,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-forest">
        {label}
      </label>
      {hint ? <p className="mt-1 text-xs text-muted">{hint}</p> : null}
      <div className="mt-2">{children}</div>
      {error ? (
        <p className="mt-1 text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  "min-h-12 w-full rounded-md border border-line bg-white px-3 text-charcoal outline-none transition-colors focus:border-gold";

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [attempted, setAttempted] = useState(false);
  const demo = businessSettings.formMode === "demo";

  const valid = useMemo(() => {
    const next: Record<string, string> = {};
    if (!form.fullName.trim()) next.fullName = "Enter your full name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
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
  }, [form]);

  function toggleService(id: string) {
    setForm((current) => ({
      ...current,
      services: current.services.includes(id)
        ? current.services.filter((item) => item !== id)
        : [...current.services, id],
    }));
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setErrors(valid);
    setAttempted(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-lg border border-line bg-white p-5 shadow-sm sm:p-8"
    >
      {demo ? (
        <div className="mb-6 rounded-md border border-gold/40 bg-ivory px-4 py-3 text-sm leading-6 text-charcoal">
          This concept form does not submit information. No estimate request is
          sent. Call{" "}
          <a className="font-semibold text-forest underline" href={businessSettings.phoneHref}>
            {businessSettings.phoneDisplay}
          </a>{" "}
          or email{" "}
          <a
            className="font-semibold text-forest underline"
            href={`mailto:${businessSettings.primaryEmail}`}
          >
            {businessSettings.primaryEmail}
          </a>
          .
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="fullName" error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            className={inputClass}
            value={form.fullName}
            onChange={(event) => setForm({ ...form, fullName: event.target.value })}
            required
          />
        </Field>
        <Field label="Company name" htmlFor="companyName" hint="Optional">
          <input
            id="companyName"
            name="companyName"
            autoComplete="organization"
            className={inputClass}
            value={form.companyName}
            onChange={(event) => setForm({ ...form, companyName: event.target.value })}
          />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            required
          />
        </Field>
        <Field label="Phone" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            required
          />
        </Field>
        <Field label="Property address" htmlFor="propertyAddress" hint="The service location, not a mailing address we publish.">
          <input
            id="propertyAddress"
            name="propertyAddress"
            autoComplete="street-address"
            className={inputClass}
            value={form.propertyAddress}
            onChange={(event) => setForm({ ...form, propertyAddress: event.target.value })}
          />
        </Field>
        <Field label="City" htmlFor="city" error={errors.city}>
          <input
            id="city"
            name="city"
            autoComplete="address-level2"
            className={inputClass}
            value={form.city}
            onChange={(event) => setForm({ ...form, city: event.target.value })}
            required
          />
        </Field>
        <Field label="ZIP code" htmlFor="zip">
          <input
            id="zip"
            name="zip"
            autoComplete="postal-code"
            inputMode="numeric"
            className={inputClass}
            value={form.zip}
            onChange={(event) => setForm({ ...form, zip: event.target.value })}
          />
        </Field>
        <Field label="Property type" htmlFor="propertyType" error={errors.propertyType}>
          <select
            id="propertyType"
            name="propertyType"
            className={inputClass}
            value={form.propertyType}
            onChange={(event) => setForm({ ...form, propertyType: event.target.value })}
            required
          >
            <option value="">Select a property type</option>
            {quotePropertyTypes.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Approximate square footage" htmlFor="squareFootage" hint="An estimate is enough.">
          <input
            id="squareFootage"
            name="squareFootage"
            className={inputClass}
            value={form.squareFootage}
            onChange={(event) => setForm({ ...form, squareFootage: event.target.value })}
          />
        </Field>
        <Field label="One-time or recurring service" htmlFor="serviceTiming" error={errors.serviceTiming}>
          <select
            id="serviceTiming"
            name="serviceTiming"
            className={inputClass}
            value={form.serviceTiming}
            onChange={(event) => setForm({ ...form, serviceTiming: event.target.value })}
            required
          >
            <option value="">Select an option</option>
            <option value="one-time">One-time</option>
            <option value="recurring">Recurring</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </Field>
        <Field label="Preferred service frequency" htmlFor="frequency">
          <select
            id="frequency"
            name="frequency"
            className={inputClass}
            value={form.frequency}
            onChange={(event) => setForm({ ...form, frequency: event.target.value })}
          >
            <option value="">Select if known</option>
            {serviceFrequencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Preferred walkthrough date" htmlFor="walkthroughDate">
          <input
            id="walkthroughDate"
            name="walkthroughDate"
            type="date"
            className={inputClass}
            value={form.walkthroughDate}
            onChange={(event) => setForm({ ...form, walkthroughDate: event.target.value })}
          />
        </Field>
        <Field label="Preferred time window" htmlFor="timeWindow">
          <select
            id="timeWindow"
            name="timeWindow"
            className={inputClass}
            value={form.timeWindow}
            onChange={(event) => setForm({ ...form, timeWindow: event.target.value })}
          >
            <option value="">Select if known</option>
            {timeWindowOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Desired start date" htmlFor="startDate">
          <input
            id="startDate"
            name="startDate"
            type="date"
            className={inputClass}
            value={form.startDate}
            onChange={(event) => setForm({ ...form, startDate: event.target.value })}
          />
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-forest">Services needed</legend>
        <p className="mt-1 text-xs text-muted">Select every service that may apply.</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {quoteServiceOptions.map((option) => (
            <label
              key={option.id}
              className="flex min-h-11 items-center gap-3 rounded-md border border-line px-3 py-2 text-sm text-charcoal"
            >
              <input
                type="checkbox"
                name="services"
                value={option.id}
                checked={form.services.includes(option.id)}
                onChange={() => toggleService(option.id)}
                className="h-4 w-4 accent-forest"
              />
              {option.label}
            </label>
          ))}
        </div>
        {errors.services ? (
          <p className="mt-2 text-sm text-red-800" role="alert">
            {errors.services}
          </p>
        ) : null}
      </fieldset>

      <div className="mt-6">
        <Field label="Additional details" htmlFor="details" hint="Access notes, recurring needs, or anything that helps us prepare for a walkthrough.">
          <textarea
            id="details"
            name="details"
            rows={5}
            className={`${inputClass} min-h-32 py-3`}
            value={form.details}
            onChange={(event) => setForm({ ...form, details: event.target.value })}
          />
        </Field>
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold text-forest">Optional photographs</p>
        <p className="mt-2 rounded-md border border-dashed border-line bg-ivory px-4 py-3 text-sm leading-6 text-muted">
          Photo upload is not enabled in this concept. Secure storage has not been
          configured, so files are not collected here. Mention photographs in the
          details above, or email them after we speak.
        </p>
      </div>

      <div className="mt-6">
        <label className="flex items-start gap-3 text-sm leading-6 text-charcoal">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={(event) => setForm({ ...form, consent: event.target.checked })}
            className="mt-1 h-4 w-4 accent-forest"
            required
          />
          <span>
            I agree that Power In Service Inc. may use these details to contact me
            about a site visit or estimate. Do not include financial, identity,
            medical, or insurance information.
          </span>
        </label>
        {errors.consent ? (
          <p className="mt-2 text-sm text-red-800" role="alert">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className={buttonClassName("gold", "lg")}>
          Review request
        </button>
        <a href={businessSettings.phoneHref} className={buttonClassName("forest", "lg")}>
          <PhoneIcon />
          Call {businessSettings.phoneDisplay}
        </a>
      </div>

      {attempted ? (
        <div
          className="mt-6 rounded-md border border-forest/20 bg-ivory px-4 py-4 text-sm leading-6 text-charcoal"
          role="status"
        >
          {Object.keys(valid).length > 0 ? (
            <p>Please complete the highlighted fields. Nothing has been sent.</p>
          ) : demo ? (
            <p>
              The form is complete, but this concept does not submit information and
              no request has been delivered. Call{" "}
              <a className="font-semibold text-forest underline" href={businessSettings.phoneHref}>
                {businessSettings.phoneDisplay}
              </a>{" "}
              or email{" "}
              <a
                className="font-semibold text-forest underline"
                href={`mailto:${businessSettings.primaryEmail}`}
              >
                {businessSettings.primaryEmail}
              </a>
              .
            </p>
          ) : (
            <p>Ready for live delivery once form handling is connected.</p>
          )}
        </div>
      ) : null}
    </form>
  );
}
