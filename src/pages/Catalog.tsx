import { Link } from "react-router-dom";
import {
  Cpu,
  Layers,
  Zap,
  BarChart3,
  Glasses,
  Hospital,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  ArrowUp,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CtaBanner from "@/components/CtaBanner";

type CatalogItem = {
  id: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  learnMore?: { label: string; to: string };
};

const CATALOG: CatalogItem[] = [
  {
    id: "encountive-engine",
    icon: Cpu,
    name: "The Encountive Engine",
    tagline: "Adaptive clinical intelligence platform",
    description:
      "Our proprietary AI core that powers everything in the catalog. The Engine orchestrates scenario flow, coaching logic, remediation sequencing, and evidence generation in a single integrated system — purpose-built for healthcare training.",
    features: [
      "Real-time branching driven by learner responses",
      "Rubric-anchored scoring aligned to your protocols",
      "Automated remediation sequencing per learner",
      "Web and mobile delivery on any device, any time",
    ],
    learnMore: { label: "Explore the product", to: "/product" },
  },
  {
    id: "scenario-library",
    icon: Layers,
    name: "Modular Scenario Library",
    tagline: "Pre-built, customizable clinical scenarios",
    description:
      "A growing library of branching scenarios covering the moments that matter in clinical practice. Every scenario adapts to learner decisions so each path teaches the consequence of clinical choices — and each can be customized to your rubrics and protocols.",
    features: [
      "Clinical communication & SBAR handoffs",
      "Patient deterioration recognition & escalation",
      "Medication safety & documentation fidelity",
      "Difficult conversations & goals-of-care discussions",
      "Custom scenario authoring for your programs",
    ],
    learnMore: { label: "See core capabilities", to: "/product" },
  },
  {
    id: "adaptive-coaching",
    icon: Zap,
    name: "Adaptive Coaching & Remediation",
    tagline: "Targeted feedback after every attempt",
    description:
      "Learners never get a generic score. After each attempt, the coaching layer identifies the specific competency gap, delivers rubric-anchored feedback, and sequences the right remediation — so practice converts into measurable growth.",
    features: [
      "Immediate, rubric-anchored feedback per attempt",
      "Gap-specific remediation pathways",
      "Empathy and communication scoring",
      "Scope-of-practice guardrails built in",
    ],
    learnMore: { label: "Explore the product", to: "/product" },
  },
  {
    id: "analytics",
    icon: BarChart3,
    name: "Cohort Analytics & Evidence",
    tagline: "Exportable insight for QI and accreditation",
    description:
      "Program-level evidence your leaders and accreditors can act on: attempt histories, heatmaps of common misses, time-to-competence curves, and rubric delta views — all exportable for quality improvement and accreditation workflows.",
    features: [
      "Cohort heatmaps of common misses",
      "Time-to-competence tracking",
      "Rubric delta views across attempts",
      "Structured exports for QI and accreditation teams",
    ],
    learnMore: { label: "See the ROI model", to: "/roi" },
  },
  {
    id: "xr-modules",
    icon: Glasses,
    name: "XR / AR-VR Modules",
    tagline: "Immersive practice for hands-on skills",
    description:
      "Phone-based AR/VR modules for procedural and hands-on skills — designed to complement web and mobile practice, not replace it. Mastery rules and telemetry integrate with the core Engine, and learner progress follows them across modalities.",
    features: [
      "Phone-based AR/VR — no dedicated hardware required to start",
      "Mastery rules and telemetry integrated with the Engine",
      "Scenario continuity across web, mobile, and XR",
      "Deploy where immersion truly moves the needle",
    ],
    learnMore: { label: "See XR capabilities", to: "/product" },
  },
  {
    id: "healthcare-solutions",
    icon: Hospital,
    name: "Healthcare Workforce Solutions",
    tagline: "For hospital systems, clinics, and hospices",
    description:
      "Standardized, rubric-anchored simulation across every shift and unit — from Med-Surg and ICU deterioration recognition to ED teamwork and hospice goals-of-care conversations — with the evidence leaders need to justify investment.",
    features: [
      "Med-Surg & ICU deterioration and escalation training",
      "Emergency Department teamwork and handoffs",
      "Hospice & palliative care communication",
      "New hire and traveling staff onboarding",
      "Add-ons: peri-op handoffs, medication safety, virtual care workflows",
    ],
    learnMore: { label: "Healthcare solutions", to: "/solutions/healthcare" },
  },
  {
    id: "academic-solutions",
    icon: GraduationCap,
    name: "Academic & Simulation Center Solutions",
    tagline: "For nursing, MA, and allied health programs",
    description:
      "Align course objectives to scenario rubrics so every learner gets consistent practice, targeted coaching, and measurable growth — without expanding faculty load. Extends manikin-based simulation with repeatable, asynchronous practice.",
    features: [
      "Nursing & MA program alignment to course objectives",
      "Vocational & allied health scope-aware practice",
      "Simulation center extension with standardized evaluation",
      "Competency tracking across cohorts and semesters",
    ],
    learnMore: { label: "Academic solutions", to: "/solutions/academic" },
  },
  {
    id: "governance",
    icon: ShieldCheck,
    name: "Governance, CE & Accessibility",
    tagline: "Built for institutional deployment",
    description:
      "Instructional, non-clinical content aligned to delegated duties and scope — no diagnosis or treatment training. CE-ready process templates for accredited providers, with accessibility built in from the start.",
    features: [
      "CE-ready templates (NCPD / Joint Accreditation)",
      "Objectives, time-on-task, and assessment blueprints",
      "Captions, transcripts, and WCAG-compliant delivery",
      "Alt text and full keyboard navigation",
    ],
    learnMore: { label: "Governance details", to: "/product" },
  },
];

function BackToMenu() {
  return (
    <a
      href="#catalog-menu"
      className="inline-flex items-center gap-1.5 text-sm text-brand-muted hover:text-brand-cyan transition-colors mt-6"
    >
      <ArrowUp size={14} /> Back to catalog menu
    </a>
  );
}

export default function Catalog() {
  return (
    <>
      <PageHero
        eyebrow="Product Catalog"
        title={
          <>
            Everything we offer, <span className="gradient-text">in one place</span>
          </>
        }
        subtitle="Browse the full Encountive catalog — the Engine, scenario library, coaching, analytics, XR modules, and solutions for healthcare and academic programs. Jump to any product below."
      />

      {/* Catalog menu — anchor links to each product section */}
      <Section
        id="catalog-menu"
        eyebrow="Catalog menu"
        title="Our products"
        subtitle="Click any product to jump to its details."
        className="scroll-mt-24"
      >
        <nav aria-label="Product catalog menu">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATALOG.map(({ id, icon: Icon, name, tagline }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="card flex flex-col h-full group focus:outline-none focus:ring-2 focus:ring-brand-cyan rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-gradient-soft flex items-center justify-center mb-4">
                    <Icon size={20} className="text-brand-cyan" />
                  </div>
                  <span className="font-semibold text-white mb-1 group-hover:text-brand-cyan transition-colors">
                    {name}
                  </span>
                  <span className="text-xs text-brand-muted leading-relaxed">{tagline}</span>
                  <span className="inline-flex items-center gap-1 text-xs text-brand-cyan mt-3">
                    View details <ArrowRight size={12} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Section>

      {/* Product detail sections */}
      {CATALOG.map(({ id, icon: Icon, name, tagline, description, features, learnMore }, i) => (
        <Section key={id} id={id} tone={i % 2 === 0 ? "muted" : "default"} className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-gradient-soft flex items-center justify-center mb-5">
                <Icon size={24} className="text-brand-cyan" />
              </div>
              <p className="eyebrow mb-3">{tagline}</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">{name}</h2>
              <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-6">{description}</p>
              <div className="flex flex-wrap items-center gap-4">
                {learnMore && (
                  <Link to={learnMore.to} className="btn-secondary text-sm">
                    {learnMore.label} <ArrowRight size={14} />
                  </Link>
                )}
                <Link to="/contact" className="btn-primary text-sm">
                  Plan a pilot
                </Link>
              </div>
            </div>
            <div>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-cyan mt-1 shrink-0" />
                    <span className="text-brand-ink">{f}</span>
                  </li>
                ))}
              </ul>
              <BackToMenu />
            </div>
          </div>
        </Section>
      ))}

      <CtaBanner
        title="Want a guided tour of the catalog?"
        subtitle="We'll walk you through the Engine, the scenario library, and the right mix of products for your organization."
        primaryLabel="Plan a pilot"
        secondaryLabel="Contact us"
      />
    </>
  );
}
