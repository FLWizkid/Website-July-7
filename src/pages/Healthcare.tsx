import { Link } from "react-router-dom";
import {
  Hospital,
  HeartPulse,
  Users,
  Activity,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CtaBanner from "@/components/CtaBanner";

const useCases = [
  {
    icon: HeartPulse,
    title: "Med-Surg & ICU",
    body: "Patient deterioration recognition, escalation, and SBAR communication — standardized across every shift and unit.",
  },
  {
    icon: Activity,
    title: "Emergency Department",
    body: "High-acuity teamwork, handoff communication, and triage decision-making with measurable rubric adherence.",
  },
  {
    icon: Hospital,
    title: "Hospice & Palliative Care",
    body: "Difficult conversations, goals-of-care discussions, and family communication scenarios with empathy scoring.",
  },
  {
    icon: Users,
    title: "New Hire Onboarding",
    body: "Shorten time-to-competence for new hires and traveling staff with rubric-based practice and targeted remediation.",
  },
];

const outcomes = [
  {
    icon: TrendingUp,
    title: "Reduced turnover cost",
    body: "Modeled $150,000+ in annual savings from improved retention through stronger onboarding and coaching.",
  },
  {
    icon: ShieldCheck,
    title: "Fewer adverse events",
    body: "Repeatable practice on clinical safety behaviors reduces risk exposure across your patient population.",
  },
  {
    icon: CheckCircle2,
    title: "Exportable QI evidence",
    body: "Attempt logs, rubric deltas, and cohort heatmaps — structured evidence for leaders and accreditation teams.",
  },
];

const addOns = ["Peri-op handoffs", "Medication safety", "Virtual care workflows", "Documentation fidelity"];

export default function Healthcare() {
  return (
    <>
      <PageHero
        eyebrow="Healthcare"
        title={
          <>
            Clinical training that <span className="gradient-text">scales with your workforce</span>
          </>
        }
        subtitle="Encountive delivers standardized, rubric-anchored simulation for hospital systems, clinics, and hospices — with the evidence your leaders need to justify investment."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Request a healthcare demo <ArrowRight size={16} />
            </Link>
            <Link to="/roi" className="btn-secondary">
              See ROI model
            </Link>
          </>
        }
      />

      {/* Use cases */}
      <Section eyebrow="Use cases" title="Built for your clinical environments">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {useCases.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card">
              <div className="w-10 h-10 rounded-xl bg-brand-gradient-soft flex items-center justify-center mb-4">
                <Icon size={20} className="text-brand-cyan" />
              </div>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Outcomes */}
      <Section eyebrow="Outcomes" title="Measurable impact for your organization" tone="muted">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {outcomes.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card">
              <div className="w-10 h-10 rounded-xl bg-brand-gradient-soft flex items-center justify-center mb-4">
                <Icon size={20} className="text-brand-cyan" />
              </div>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ROI Callout */}
      <Section eyebrow="Hospital cohort example" title="Up to $293k in annual benefit modeled for a 100-nurse cohort">
        <p className="text-brand-muted text-lg leading-relaxed max-w-2xl mb-6">
          Projected 4.0x ROI with payback around 1.3 months. Based on modeled reductions in turnover, training hours,
          and adverse event risk. Full assumptions on our ROI page.
        </p>
        <Link to="/roi" className="btn-secondary">
          See the full ROI breakdown <ArrowRight size={16} />
        </Link>
      </Section>

      {/* Add-ons */}
      <Section eyebrow="Scenario coverage" title="Core scenarios + add-ons for your priorities" tone="muted">
        <p className="text-brand-muted mb-6">
          Core scenario packs cover the highest-impact clinical communication and safety behaviors. Add-ons available:
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          {addOns.map((item) => (
            <span key={item} className="rounded-full border border-brand-cyan/30 px-4 py-1.5 text-sm text-brand-cyan">
              {item}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="card">
            <h3 className="font-semibold text-white mb-2">Pilot structure</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              Baseline → post outcomes, faculty time saved, error reduction, and learner competency gains. Conversion
              incentives on success.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-white mb-2">Evidence plan</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              Scenario rubrics, automated logs, and evaluation reports suitable for QI and credentialing.
            </p>
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Ready to improve clinical training outcomes?"
        subtitle="Start with a scoped pilot designed around your highest-priority scenarios and cohorts."
        primaryLabel="Plan a pilot"
        secondaryLabel="Contact us"
      />
    </>
  );
}
