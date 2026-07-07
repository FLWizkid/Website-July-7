import { Link } from "react-router-dom";
import {
  GraduationCap,
  School,
  FlaskConical,
  BookOpenCheck,
  ClipboardCheck,
  LineChart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CtaBanner from "@/components/CtaBanner";

const segments = [
  {
    icon: GraduationCap,
    title: "Nursing & MA programs",
    body: "Align course objectives to scenario rubrics and watch competency growth in the data — not just in debriefs.",
  },
  {
    icon: School,
    title: "Vocational & allied health",
    body: "Scope-aware practice for MA, allied health, and expanding role boundaries, with guardrails built into the scenario engine.",
  },
  {
    icon: FlaskConical,
    title: "Simulation centers",
    body: "Extend manikin-based sim with repeatable, asynchronous practice that standardizes evaluation across cohorts.",
  },
];

const outcomes = [
  {
    icon: BookOpenCheck,
    title: "Better prepared graduates",
    body: "Repeatable practice on the moments that matter: identity verification, red-flag recognition, documentation fidelity, scope-of-practice boundaries.",
  },
  {
    icon: ClipboardCheck,
    title: "Competency tracking",
    body: "Rubric-based scoring generates objective, comparable evidence of growth across cohorts and semesters.",
  },
  {
    icon: LineChart,
    title: "Program-level evidence",
    body: "Attempt histories, heatmaps of common misses, and time-to-competence insights you can use for accreditation.",
  },
];

const objectives = [
  "Complete a standardized virtual intake with identity verification and privacy confirmation",
  "Communicate with empathy in difficult calls",
  "Recognize red flags and escalate within scope",
  "Document patient-reported information verbatim in the EHR",
  "Maintain HIPAA-aligned behaviors in remote environments",
];

export default function Academic() {
  return (
    <>
      <PageHero
        eyebrow="Academic"
        title={
          <>
            Better prepared graduates — with{" "}
            <span className="gradient-text">evidence programs can defend</span>
          </>
        }
        subtitle="Encountive aligns to your course objectives and rubrics so every learner gets consistent practice, targeted coaching, and measurable growth — without expanding faculty load."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Request an academic demo <ArrowRight size={16} />
            </Link>
            <Link to="/roi" className="btn-secondary">
              See program outcomes
            </Link>
          </>
        }
      />

      {/* Segments */}
      <Section eyebrow="Who we serve" title="Designed for your program type">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {segments.map(({ icon: Icon, title, body }) => (
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
      <Section eyebrow="Program outcomes" title="Measurable from day one" tone="muted">
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
      <Section eyebrow="Academic cohort example" title="3.88x ROI with $122k in modeled benefit for a 200-student cohort">
        <p className="text-brand-muted text-lg leading-relaxed max-w-2xl mb-6">
          Modeled reductions in faculty prep time, improved pass rates, and cohort-level competency growth. Full
          assumptions on our ROI page.
        </p>
        <Link to="/roi" className="btn-secondary">
          See the ROI breakdown <ArrowRight size={16} />
        </Link>
      </Section>

      {/* Sample Objectives */}
      <Section eyebrow="Sample scenario objectives" title="What learners practice" tone="muted">
        <ul className="space-y-3 mb-10">
          {objectives.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-brand-cyan mt-1 shrink-0" />
              <span className="text-brand-ink">{item}</span>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="card">
            <h3 className="font-semibold text-white mb-2">Pilot-based entry</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              Pilots with clear success criteria and conversion terms. Faculty time saved, competency deltas, and
              outcomes briefs you can share with your committee.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-white mb-2">Drop-in accreditation support</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              Objectives, time-on-task, assessment blueprints, evaluation templates, and recordkeeping SOPs to
              streamline provider approval.
            </p>
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Ready to elevate your program outcomes?"
        subtitle="Start with a scoped pilot aligned to your course objectives. We'll help you measure what matters."
        primaryLabel="Request an academic demo"
        secondaryLabel="Contact us"
      />
    </>
  );
}
