import { useState, useRef, useEffect } from "react";
import { CheckCircle2, AlertCircle, Mail, Phone, Building2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

type FormState = {
  name: string;
  title: string;
  organization: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const interestOptions = [
  "Hospital / health system pilot",
  "Academic program pilot",
  "Simulation center partnership",
  "Workforce development",
  "General inquiry",
  "Investor / partnership",
];

const INITIAL: FormState = {
  name: "",
  title: "",
  organization: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const formCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success" || status === "error") {
      formCardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [status]);

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            title: form.title || null,
            organization: form.organization || null,
            email: form.email,
            phone: form.phone || null,
            interest: form.interest || null,
            message: form.message,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok || data.error) {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong.");
        console.error("[contact-form] submission error:", res.status, data);
      } else {
        setStatus("success");
        setForm(INITIAL);
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error — please check your connection and try again.");
      console.error("[contact-form] network error:", err);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact us"
        subtitle="For general inquiries, product questions, or to learn more about our pilots and partnerships."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info Panel */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Get in touch</h2>
              <p className="text-brand-muted leading-relaxed">
                For procurement or implementation questions, please include your institution name and timeline in your
                message.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-ink">
                <div className="w-9 h-9 rounded-xl bg-brand-gradient-soft flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-brand-cyan" />
                </div>
                <a href="mailto:contact@encountive.com" className="hover:text-brand-cyan transition-colors text-sm">
                  contact@encountive.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-brand-ink">
                <div className="w-9 h-9 rounded-xl bg-brand-gradient-soft flex items-center justify-center shrink-0">
                  <Building2 size={16} className="text-brand-cyan" />
                </div>
                <span className="text-sm text-brand-muted">Encountive, Inc.</span>
              </div>
              <div className="flex items-center gap-3 text-brand-ink">
                <div className="w-9 h-9 rounded-xl bg-brand-gradient-soft flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-brand-cyan" />
                </div>
                <span className="text-sm text-brand-muted">Response within 1–2 business days</span>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 p-4 bg-brand-surface/30">
              <p className="text-xs text-brand-muted leading-relaxed">
                <strong className="text-brand-dim">Note:</strong> Do not include patient identifiers or PHI. This form
                is for training and procurement discussions only.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div ref={formCardRef} className="rounded-2xl border border-white/10 bg-brand-surface/30 p-8">
              <h2 className="text-xl font-semibold text-white mb-6">Send us a message</h2>
              <p className="text-sm text-brand-muted mb-6">
                Fill out the form below and we'll get back to you within 1–2 business days.
              </p>

              {status === "success" ? (
                <div className="flex items-start gap-3 rounded-xl border border-brand-cyan/30 bg-brand-cyan/5 p-5">
                  <CheckCircle2 size={20} className="text-brand-cyan mt-0.5 shrink-0" />
                  <p className="text-brand-ink">
                    Thanks! We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {status === "error" && (
                    <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/5 p-4">
                      <AlertCircle size={18} className="text-red-400 mt-0.5 shrink-0" />
                      <p className="text-sm text-red-300">
                        {errorMsg || "Something went wrong."} Please try again, or email{" "}
                        <a href="mailto:contact@encountive.com" className="underline">
                          contact@encountive.com
                        </a>{" "}
                        directly.
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Name *" hint="Required">
                      <input
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={set("name")}
                        className="form-input"
                        placeholder="Your name"
                      />
                    </Field>
                    <Field label="Title" hint="">
                      <input
                        type="text"
                        autoComplete="organization-title"
                        value={form.title}
                        onChange={set("title")}
                        className="form-input"
                        placeholder="e.g. Director of Education"
                      />
                    </Field>
                  </div>

                  <Field label="Organization" hint="">
                    <input
                      type="text"
                      autoComplete="organization"
                      value={form.organization}
                      onChange={set("organization")}
                      className="form-input"
                      placeholder="Hospital, university, or company name"
                    />
                  </Field>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Email *" hint="Required">
                      <input
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={set("email")}
                        className="form-input"
                        placeholder="you@organization.com"
                      />
                    </Field>
                    <Field label="Phone" hint="">
                      <input
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={set("phone")}
                        className="form-input"
                        placeholder="Optional"
                      />
                    </Field>
                  </div>

                  <Field label="Interested in" hint="">
                    <select value={form.interest} onChange={set("interest")} className="form-input">
                      <option value="">Select an option</option>
                      {interestOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Message *" hint="Required">
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={set("message")}
                      className="form-input resize-none"
                      placeholder="Tell us about your organization, training needs, or questions..."
                      maxLength={5000}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary w-full justify-center"
                  >
                    {status === "submitting" ? "Sending…" : "Send message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({ label, hint, children }: { label: string; hint: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-brand-ink mb-1.5">
        {label}
        {hint && <span className="sr-only">{hint}</span>}
      </label>
      {children}
    </div>
  );
}
