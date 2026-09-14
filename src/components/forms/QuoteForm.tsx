"use client";

import { useMemo, useState, useTransition } from "react";
import {
  businessSettings,
  quotePropertyTypes,
  quoteServiceOptions,
  serviceFrequencyOptions,
  timeWindowOptions,
} from "@/content/business";
import { buttonClassName } from "@/components/ui/button-styles";
import { PhoneIcon } from "@/components/ui/Icons";
import { submitQuote } from "@/app/request-quote/actions";
import { validateQuote, type QuoteInput } from "@/lib/quote";

type FormState = Omit<QuoteInput, "website">;

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
      <label htmlFor={htmlFor} className="block text-base font-semibold text-forest">
        {label}
      </label>
      {hint ? <p className="mt-1 text-base leading-7 text-muted">{hint}</p> : null}
      <div className="mt-2">{children}</div>
      {error ? (
        <p className="mt-1 text-base leading-7 text-red-800" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  "min-h-12 w-full rounded-md border border-line bg-white px-3 text-base text-charcoal outline-none transition-colors focus:border-gold";

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const [pending, startTransition] = useTransition();
  const live = businessSettings.formMode === "live";

  const valid = useMemo(
    () => validateQuote({ ...form, website: honeypot }),
    [form, honeypot],
  );

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
    setStatus("idle");
    setServerError("");
    if (Object.keys(valid).length > 0 || !live) return;

    startTransition(async () => {
      const result = await submitQuote({ ...form, website: honeypot });
      if (result.ok) {
        setStatus("success");
        setForm(empty);
        setHoneypot("");
        setAttempted(false);
        setErrors({});
        return;
      }
      setStatus("error");
      setServerError(result.error);
      if (result.fieldErrors) setErrors(result.fieldErrors);
    });
  }

  if (status === "success") {
    return (
      <div
        className="rounded-lg border border-forest/20 bg-white p-5 shadow-sm sm:p-8"
        role="status"
      >
        <h2 className="text-2xl font-semibold text-forest">We received your request.</h2>
        <p className="mt-4 text-base leading-7 text-charcoal">
          Thank you. Power In Service Inc. will review the details and follow up
          about a site visit or estimate. If you need to reach us sooner, call{" "}
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
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="relative rounded-lg border border-line bg-white p-5 shadow-sm sm:p-8"
    >
      {!live ? (
        <div className="mb-6 rounded-md border border-gold/40 bg-ivory px-4 py-3 text-base leading-7 text-charcoal">
          Online requests are paused. Call{" "}
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

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

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
        <legend className="text-base font-semibold text-forest">Services needed</legend>
        <p className="mt-1 text-base leading-7 text-muted">Select every service that may apply.</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {quoteServiceOptions.map((option) => (
            <label
              key={option.id}
              className="flex min-h-11 items-center gap-3 rounded-md border border-line px-3 py-2 text-base text-charcoal"
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
          <p className="mt-2 text-base leading-7 text-red-800" role="alert">
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
        <p className="text-base font-semibold text-forest">Optional photographs</p>
        <p className="mt-2 rounded-md border border-dashed border-line bg-ivory px-4 py-3 text-base leading-7 text-muted">
          Photo upload is not available on this form. Mention photographs in the
          details above, or email them after we speak.
        </p>
      </div>

      <div className="mt-6">
        <label className="flex items-start gap-3 text-base leading-7 text-charcoal">
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
          <p className="mt-2 text-base leading-7 text-red-800" role="alert">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className={`${buttonClassName("gold", "lg")} disabled:cursor-not-allowed disabled:opacity-60`}
          disabled={pending || !live}
        >
          {pending ? "Sending request…" : "Send request"}
        </button>
        <a href={businessSettings.phoneHref} className={buttonClassName("forest", "lg")}>
          <PhoneIcon />
          Call {businessSettings.phoneDisplay}
        </a>
      </div>

      {attempted && Object.keys(valid).length > 0 ? (
        <div
          className="mt-6 rounded-md border border-forest/20 bg-ivory px-4 py-4 text-base leading-7 text-charcoal"
          role="status"
        >
          <p>Please complete the highlighted fields. Nothing has been sent.</p>
        </div>
      ) : null}

      {status === "error" ? (
        <div
          className="mt-6 rounded-md border border-red-200 bg-ivory px-4 py-4 text-base leading-7 text-charcoal"
          role="alert"
        >
          <p>{serverError}</p>
        </div>
      ) : null}
    </form>
  );
}
