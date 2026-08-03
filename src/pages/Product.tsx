import { Link } from "react-router-dom";
import {
  Cpu,
  GitBranch,
  BarChart3,
  Smartphone,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Layers,
  Zap,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CtaBanner from "@/components/CtaBanner";

const coreFeatures = [
  {
    icon: GitBranch,
    title: "Branching scenario engine",
    body: "Every scenario adapts to learner responses in real time. Branching logic ensures each path teaches the consequence of clinical decisions.",
  },
  {
    icon: Zap,
    title: "Immediate adaptive coaching",
    body: "After every attempt, learners receive targeted, rubric-anchored feedback — not a generic score. The system identifies the specific gap and responds.",
  },
  {
    icon: BarChart3,
    title: "Cohort-level analytics",
    body: "Attempt histories, heatmaps of common misses, time-to-competence curves, and rubric delta views — all exportable for QI and accreditation.",
  },
  {
    icon: Cpu,
    title: "The Encountive Engine",
    body: "Our proprietary AI orchestrates scenario flow, coaching logic, remediation sequencing, and evidence generation in a single integrated system.",
  },
  {
    icon: Layers,
    title: "Modular scenario library",
    body: "Pre-built scenarios for clinical communication, deterioration, medication safety, handoffs, and more — with customization for your rubrics and protocols.",
  },
  {
    icon: Smartphone,
    title: "Any device, any time",
    body: "Web and mobile for broad reach today. XR modules are in active development and targeted for release in the first half of 2027.",
  },
];

const xrCapabilities = [
  "Phone-based AR/VR designed for hands-on procedural skills",
  "Mastery rules and telemetry planned for integration with the core engine",
  "Designed to complement, not replace, web and mobile practice",
  "Scenario continuity across modalities — learner progress will follow them",
];

const governance = [
  {
    icon: ShieldCheck,
    title: "Instructional, non-clinical",
    body: "Content is aligned to delegated duties and scope. No diagnosis or treatment training — designed with clinical governance in mind.",
  },
  {
    icon: BookOpen,
    title: "CE-ready process templates",
    body: "For accredited providers (NCPD / Joint Accreditation) and recordkeeping. Objectives, time-on-task, and assessment blueprints included.",
  },
];

export default function Product() {
  return (
    <>
      <PageHero
        eyebrow="The Product"
        title={
          <>
            The <span className="gradient-text">Encountive Engine</span> — adaptive clinical intelligence
          </>
        }
        subtitle="A complete simulation platform purpose-built for healthcare training. Rubric-anchored scenarios, adaptive coaching, and cohort-level evidence — web and mobile today, with XR capabilities in development."
      />

      {/* Core Features */}
      <Section eyebrow="Core capabilities" title="Everything in one engine">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreFeatures.map(({ icon: Icon, title, body }) => (
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

      {/* XR */}
      <Section eyebrow="Coming H1 2027" title="Phone-based AR/VR for hands-on skills" tone="muted">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-300 text-sm font-medium">Future product — in active development, not yet available</span>
        </div>
        <p className="text-brand-muted text-lg leading-relaxed max-w-2xl mb-8">
          We are developing XR modules to extend the Encountive platform into immersive, hands-on procedural training.
          This capability is targeted for release in the first half of 2027 and is subject to change.
        </p>
        <ul className="space-y-3">
          {xrCapabilities.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-brand-cyan mt-1 shrink-0" />
              <span className="text-brand-ink">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Governance */}
      <Section eyebrow="Governance & accessibility" title="Built for institutional deployment">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {governance.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card">
              <div className="w-10 h-10 rounded-xl bg-brand-gradient-soft flex items-center justify-center mb-4">
                <Icon size={20} className="text-brand-cyan" />
              </div>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-brand-surface/30">
          <p className="text-sm font-semibold text-brand-cyan mb-2 eyebrow">Accessibility</p>
          <p className="text-brand-ink">
            Captions, transcripts, WCAG-compliant delivery, alt text, and keyboard navigation — built in from the start.
          </p>
        </div>
      </Section>

      <CtaBanner
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Contact us <ArrowRight size={16} />
            </Link>
          </>
        }
      />
    </>
  );
}
