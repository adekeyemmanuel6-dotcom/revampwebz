"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NEEDS = ["New Website", "Website Redesign", "Webflow Development", "Framer Development", "Landing Page", "Migration", "Ongoing Support"];
const BUDGETS = ["$3k–$5k", "$5k–$10k", "$10k–$20k", "$20k–$50k", "$50k+"];
const TIMELINES = ["ASAP", "1–2 Months", "2–3 Months", "3+ Months"];

type FormState = {
  need: string;
  name: string;
  company: string;
  website: string;
  email: string;
  budget: string;
  timeline: string;
  details: string;
  company_website_url: string;
};

const initial: FormState = {
  need: "",
  name: "",
  company: "",
  website: "",
  email: "",
  budget: "",
  timeline: "",
  details: "",
  company_website_url: "",
};

const TOTAL_STEPS = 5;

export default function StartProjectForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const update = (key: keyof FormState, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const canContinue = () => {
    if (step === 1) return form.need.length > 0;
    if (step === 2) return form.name.length > 1 && form.email.includes("@") && form.company.length > 0;
    if (step === 3) return form.budget.length > 0;
    if (step === 4) return form.timeline.length > 0;
    return true;
  };

  const next = () => setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const submit = async () => {
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/start-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, projectType: form.need }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-hairline bg-navy-surface p-12 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rust text-off">✓</span>
        <h3 className="mt-6 font-display text-3xl font-semibold text-off">Message received.</h3>
        <p className="mx-auto mt-4 max-w-sm text-base text-muted">
          We&apos;ll review what you&apos;ve shared and follow up within one business day.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-hairline bg-navy-surface p-6 md:p-10">
      <div className="mb-10 flex items-center gap-2">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div key={i} className={cn("h-1 flex-1 rounded-full", i < step ? "bg-rust" : "bg-white/10")} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.3 }}
        >
          {step === 1 && (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Step 1 of 5</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-off">What do you need?</h2>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {NEEDS.map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => update("need", n)}
                    className={cn(
                      "rounded-xl border px-5 py-4 text-left text-sm font-medium transition-colors",
                      form.need === n ? "border-rust bg-rust/10 text-off" : "border-hairline text-off/70 hover:border-off/40"
                    )}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Step 2 of 5</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-off">Tell us about your company.</h2>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Name" value={form.name} onChange={(v) => update("name", v)} />
                <Field label="Company" value={form.company} onChange={(v) => update("company", v)} />
                <Field label="Website" value={form.website} onChange={(v) => update("website", v)} placeholder="Optional" />
                <Field label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} />
              </div>
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.company_website_url}
                onChange={(e) => update("company_website_url", e.target.value)}
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
                aria-hidden="true"
              />
            </div>
          )}

          {step === 3 && (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Step 3 of 5</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-off">Project investment.</h2>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => update("budget", b)}
                    className={cn(
                      "rounded-xl border px-5 py-4 text-left text-sm font-medium transition-colors",
                      form.budget === b ? "border-rust bg-rust/10 text-off" : "border-hairline text-off/70 hover:border-off/40"
                    )}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Step 4 of 5</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-off">Timeline.</h2>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {TIMELINES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => update("timeline", t)}
                    className={cn(
                      "rounded-xl border px-5 py-4 text-left text-sm font-medium transition-colors",
                      form.timeline === t ? "border-rust bg-rust/10 text-off" : "border-hairline text-off/70 hover:border-off/40"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Step 5 of 5</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-off">Tell us what you&apos;re building.</h2>
              <textarea
                value={form.details}
                onChange={(e) => update("details", e.target.value)}
                rows={6}
                placeholder="Share as much or as little as you'd like."
                className="mt-8 w-full rounded-xl border border-hairline bg-navy-deep p-4 text-sm text-off placeholder:text-muted focus:border-rust focus:outline-none"
              />
              {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={back}
          disabled={step === 1}
          className="text-sm font-medium text-off/60 transition-colors hover:text-off disabled:opacity-0"
        >
          ← Back
        </button>

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            disabled={!canContinue()}
            onClick={next}
            className="rounded-full bg-rust px-7 py-3 text-sm font-semibold text-off transition-opacity disabled:opacity-30"
          >
            Continue →
          </button>
        ) : (
          <button
            type="button"
            disabled={status === "submitting"}
            onClick={submit}
            className="rounded-full bg-rust px-7 py-3 text-sm font-semibold text-off transition-opacity disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Send Project →"}
          </button>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted">{label}</span>
      <input
        type={type}
        required={!placeholder}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-hairline bg-navy-deep p-3.5 text-sm text-off placeholder:text-muted/60 focus:border-rust focus:outline-none"
      />
    </label>
  );
}
