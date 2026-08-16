import { FormEvent, useMemo, useState } from "react";

type FormKind = "membership" | "benevolence" | "contact" | "advocacy";

type PublicInquiryFormProps = {
  kind: FormKind;
  title: string;
  submitLabel: string;
  checkboxLabel: string;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  cityState: string;
  interestArea: string;
  inquiryType: string;
  needType: string;
  urgency: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  cityState: "",
  interestArea: "",
  inquiryType: "",
  needType: "",
  urgency: "",
  message: "",
  consent: false,
};

const interestAreas = [
  "Faith & Discipleship",
  "Fellowship",
  "Benevolence & Mutual Aid",
  "Survivor Advocacy & Restoration",
  "Education",
  "Family & Community Support",
  "Stewardship",
  "Volunteer Service",
];

const inquiryTypes = [
  "General inquiry",
  "Ministry support inquiry",
  "Membership inquiry",
  "Donation inquiry",
  "Benevolence inquiry",
  "Survivor advocacy inquiry",
];

const needTypes = [
  "Food or household essentials",
  "Housing or utilities",
  "Transportation",
  "Family support",
  "Medical or caregiving support",
  "Other practical need",
];

const advocacySupportAreas = [
  "Referral navigation",
  "Documentation organization",
  "Benevolence or community resource referral",
  "Financial identity recovery education",
  "Training or volunteer interest",
  "Partnership or coalition inquiry",
];

const urgencyLevels = ["Routine", "Soon", "Urgent"];

export function PublicInquiryForm({ kind, title, submitLabel, checkboxLabel }: PublicInquiryFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const fields = useMemo(
    () => ({
      showCityState: kind === "membership" || kind === "advocacy",
      showInterest: kind === "membership",
      showInquiryType: kind === "contact",
      showNeed: kind === "benevolence" || kind === "advocacy",
      showUrgency: kind === "benevolence",
      needLabel: kind === "advocacy" ? "Support area" : "Type of need",
      needOptions: kind === "advocacy" ? advocacySupportAreas : needTypes,
      messageLabel:
        kind === "benevolence"
          ? "Brief description"
          : kind === "advocacy"
            ? "Brief, non-sensitive message"
            : "Message",
    }),
    [kind],
  );

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function validate() {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Please enter a valid email address.";
    if (fields.showCityState && !form.cityState.trim()) nextErrors.cityState = "Please enter your city and state.";
    if (fields.showInterest && !form.interestArea) nextErrors.interestArea = "Please choose an interest area.";
    if (fields.showInquiryType && !form.inquiryType) nextErrors.inquiryType = "Please choose an inquiry type.";
    if (fields.showNeed && !form.needType) nextErrors.needType = "Please choose a type of need.";
    if (fields.showUrgency && !form.urgency) nextErrors.urgency = "Please choose an urgency level.";
    if (!form.message.trim()) nextErrors.message = "Please include a brief message.";
    if (!form.consent) nextErrors.consent = "Please confirm consent before submitting.";
    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    // TODO: Connect this form to email, Supabase, Formspree, or the ministry's backend.
    setSubmitted(true);
    setForm(initialState);
  }

  if (submitted) {
    return (
      <div className="surface-card p-6" role="status" aria-live="polite">
        <h3 className="text-2xl font-semibold text-navy-950">Thank you for reaching out.</h3>
        <p className="mt-3 leading-7 text-ink/75">
          Your inquiry has been received in this demo experience. A live site should connect this form to the
          ministry's approved contact workflow.
        </p>
        <button
          className="focus-ring mt-6 rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
          type="button"
          onClick={() => setSubmitted(false)}
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="surface-card grid gap-5 p-6" noValidate onSubmit={handleSubmit}>
      <h2 className="font-serif text-2xl font-semibold text-navy-950">{title}</h2>
      {kind === "advocacy" ? (
        <p className="rounded-lg border border-gold-300 bg-gold-100/70 p-4 text-sm leading-6 text-navy-950">
          Please do not include urgent safety details, identifying information about another person, or a full trafficking
          history in this form. If someone is in immediate danger, contact local emergency services.
        </p>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2">
        <TextInput
          error={errors.name}
          label="Full name"
          name="name"
          onChange={(value) => updateField("name", value)}
          required
          value={form.name}
        />
        <TextInput
          error={errors.email}
          label="Email"
          name="email"
          onChange={(value) => updateField("email", value)}
          required
          type="email"
          value={form.email}
        />
        <TextInput
          label="Phone"
          name="phone"
          onChange={(value) => updateField("phone", value)}
          type="tel"
          value={form.phone}
        />
        {fields.showCityState ? (
          <TextInput
            error={errors.cityState}
            label="City / State"
            name="cityState"
            onChange={(value) => updateField("cityState", value)}
            required
            value={form.cityState}
          />
        ) : null}
      </div>

      {fields.showInterest ? (
        <SelectInput
          error={errors.interestArea}
          label="Interest area"
          name="interestArea"
          onChange={(value) => updateField("interestArea", value)}
          options={interestAreas}
          required
          value={form.interestArea}
        />
      ) : null}

      {fields.showInquiryType ? (
        <SelectInput
          error={errors.inquiryType}
          label="Inquiry type"
          name="inquiryType"
          onChange={(value) => updateField("inquiryType", value)}
          options={inquiryTypes}
          required
          value={form.inquiryType}
        />
      ) : null}

      {fields.showNeed ? (
        <div className={`grid gap-5 ${fields.showUrgency ? "md:grid-cols-2" : ""}`}>
          <SelectInput
            error={errors.needType}
            label={fields.needLabel}
            name="needType"
            onChange={(value) => updateField("needType", value)}
            options={fields.needOptions}
            required
            value={form.needType}
          />
          {fields.showUrgency ? (
            <SelectInput
              error={errors.urgency}
              label="Urgency"
              name="urgency"
              onChange={(value) => updateField("urgency", value)}
              options={urgencyLevels}
              required
              value={form.urgency}
            />
          ) : null}
        </div>
      ) : null}

      <TextArea
        error={errors.message}
        label={fields.messageLabel}
        name="message"
        onChange={(value) => updateField("message", value)}
        required
        value={form.message}
      />

      <div>
        <label className="flex items-start gap-3 text-sm leading-6 text-ink/78">
          <input
            checked={form.consent}
            className="mt-1 h-4 w-4 rounded border-sand-200 text-navy-900 focus:ring-gold-400"
            onChange={(event) => updateField("consent", event.target.checked)}
            type="checkbox"
          />
          <span>{checkboxLabel}</span>
        </label>
        {errors.consent ? <p className="mt-2 text-sm text-red-700">{errors.consent}</p> : null}
      </div>

      <button
        className="focus-ring inline-flex min-h-11 w-full items-center justify-center rounded-md bg-gold-400 px-5 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-300 sm:w-auto"
        type="submit"
      >
        {submitLabel}
      </button>
    </form>
  );
}

type TextInputProps = {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
};

function TextInput({ label, name, value, onChange, error, required, type = "text" }: TextInputProps) {
  const id = `field-${name}`;

  return (
    <div>
      <label className="text-sm font-semibold text-navy-950" htmlFor={id}>
        {label}
        {required ? <span className="text-red-700"> *</span> : null}
      </label>
      <input
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={Boolean(error)}
        className="mt-2 w-full rounded-md border border-sand-200 bg-white px-4 py-3 text-ink outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-100"
        id={id}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        value={value}
      />
      {error ? (
        <p className="mt-2 text-sm text-red-700" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

type SelectInputProps = Omit<TextInputProps, "type"> & {
  options: string[];
};

function SelectInput({ label, name, value, onChange, error, required, options }: SelectInputProps) {
  const id = `field-${name}`;

  return (
    <div>
      <label className="text-sm font-semibold text-navy-950" htmlFor={id}>
        {label}
        {required ? <span className="text-red-700"> *</span> : null}
      </label>
      <select
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={Boolean(error)}
        className="mt-2 w-full rounded-md border border-sand-200 bg-white px-4 py-3 text-ink outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-100"
        id={id}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        <option value="">Select one</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p className="mt-2 text-sm text-red-700" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

function TextArea({ label, name, value, onChange, error, required }: TextInputProps) {
  const id = `field-${name}`;

  return (
    <div>
      <label className="text-sm font-semibold text-navy-950" htmlFor={id}>
        {label}
        {required ? <span className="text-red-700"> *</span> : null}
      </label>
      <textarea
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={Boolean(error)}
        className="mt-2 min-h-36 w-full rounded-md border border-sand-200 bg-white px-4 py-3 text-ink outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-100"
        id={id}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
      {error ? (
        <p className="mt-2 text-sm text-red-700" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
