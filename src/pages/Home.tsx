import { Link } from "react-router-dom";
import {
  Building2,
  Hospital,
  GraduationCap,
  Users,
  ShieldCheck,
  Sparkles,
  LineChart,
  CheckCircle2,
  ArrowRight,
  Play,
} from "lucide-react";
import Section from "@/components/Section";
import CtaBanner from "@/components/CtaBanner";

const audiences = [
  {
    icon: GraduationCap,
    title: "Nursing Programs",
    subtitle: "Student training + assessment",
    body: "Align course objectives to scenario rubrics and watch competency growth in the data, not just in debriefs.",
  },
  {
    icon: Hospital,
    title: "Hospital Systems",
    subtitle: "Staff training + competency",
    body: "Standardize coaching across cohorts and sites with exportable evidence your leaders can defend.",
  },
  {
    icon: Building2,
    title: "Clinical Training Centers",
    subtitle: "Scenario delivery + evaluation",
    body: "Scale simulation beyond manikin-based sessions with repeatable, measurable practice.",
  },
  {
    icon: Users,
    title: "Workforce Development",
    subtitle: "Onboarding + readiness",
    body: "Shorten time-to-competence for new hires and traveling staff with rubric-based practice and targeted remediation.",
  },
];

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Rubric-first design",
    body: "Every scenario is anchored to clear competencies. Scoring is transparent and auditable — never a black box.",
  },
  {
    icon: Sparkles,
    title: "Adaptive remediation",
    body: "The platform recognizes error patterns and serves the next best practice: a targeted micro-lesson, branched redo, or harder case.",
  },
  {
    icon: LineChart,
    title: "Evidence at scale",
    body: "Attempt histories, heatmaps of common misses, and time-to-competence insights you can use for QI and accreditation.",
  },
];

const whyNowStats = [
  { value: "90%", label: "anticipate AI's major role in health care" },
  { value: "79%", label: "feel excited to use AI in their work" },
  { value: "under 15%", label: "feel proficient in core AI concepts" },
];

const roiStats = [
  { value: "4.0x", label: "Projected ROI for hospital cohorts" },
  { value: "Up to $150,000", label: "Turnover cost savings per year" },
  { value: "~1.3 months", label: "Modeled payback period" },
  { value: "40%", label: "Reduction in faculty prep time" },
];

const beforeAfter = [
  {
    before: "Feedback quality varies by instructor and time pressure",
    after: "Structured coaching and analytics so learners get consistent guidance",
  },
  {
    before: "Hard to prove outcomes beyond anecdotes",
    after: "Exportable evidence: completion, repeats, rubric deltas, cohort views",
  },
  {
    before: "Limited practice hours and scarce simulated patients",
    after: "Repeatable encounters anywhere — desktop, mobile, or XR",
  },
  {
    before: "Rollouts stall on security and governance questions",
    after: "Implementation plan aligned to your review process and policies",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="hero-glow pt-36 pb-24">
        <div className="container-xl mx-auto">
          <p className="eyebrow mb-4 animate-fade-up">AI-adaptive clinical simulation</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl animate-fade-up [animation-delay:0.1s]">
            AI-Powered Clinical Simulation for{" "}
            <span className="gradient-text">Safer, More Confident</span>{" "}
            Healthcare Teams
          </h1>
          <p className="text-brand-muted text-xl leading-relaxed max-w-2xl mb-10 animate-fade-up [animation-delay:0.2s]">
            Encountive improves communication, decision-making, emotional resilience, and clinical safety across the
            healthcare workforce. Powered by The Encountive Engine, your adaptive clinical intelligence engine.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up [animation-delay:0.3s]">
            <Link to="/contact" className="btn-primary">
              Plan a pilot <ArrowRight size={16} />
            </Link>
            <Link to="/product" className="btn-secondary">
              About the product
            </Link>
          </div>
        </div>
      </div>

      {/* Engine Overview */}
      <Section
        eyebrow="The Encountive Engine"
        title="Scenario → coaching → evidence, at scale"
        tone="muted"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {[
            "Branching scenarios anchored to your rubrics",
            "Immediate, targeted coaching after every attempt",
            "Cohort-level analytics leaders can defend",
            "Web and mobile today; XR when immersion matters",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-brand-cyan mt-0.5 shrink-0" />
              <span className="text-brand-ink">{item}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map(({ icon: Icon, title, subtitle, body }) => (
            <div key={title} className="card">
              <div className="w-10 h-10 rounded-xl bg-brand-gradient-soft flex items-center justify-center mb-4">
                <Icon size={20} className="text-brand-cyan" />
              </div>
              <h3 className="font-semibold text-white mb-1">{title}</h3>
              <p className="text-xs text-brand-cyan mb-2">{subtitle}</p>
              <p className="text-sm text-brand-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Now */}
      <Section eyebrow="Why now" title="The AI readiness gap in healthcare">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {whyNowStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-brand-muted text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Lancet Quote */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-[#1a1535] border border-white/10 p-6 sm:p-8 md:p-12 mb-6 sm:mb-8">
            <div className="text-brand-cyan text-4xl sm:text-5xl font-bold leading-none mb-5 sm:mb-6 text-center select-none">"</div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight text-center">
              "90% of students anticipated AI's major role in health care and 79% felt excited to use it,{" "}
              <span className="text-brand-cyan">yet fewer than 15% felt proficient in core AI concepts.</span>"
            </blockquote>
            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-white font-bold text-sm tracking-wide">The Lancet Regional Health — Americas</p>
              <p className="text-brand-muted text-xs mt-1">"AI literacy among healthcare professionals and students in the Americas"</p>
            </div>
          </div>
          <p className="text-brand-muted text-base leading-relaxed">
            Healthcare learners expect AI to shape their careers — but most don't yet feel ready to work with it.
            Encountive turns that gap into structured, coached practice in clinical communication, scope, and safety.
          </p>
        </div>
      </Section>

      {/* Before / After */}
      <Section
        eyebrow="The difference"
        title="From anecdotes to evidence"
        tone="muted"
      >
        <div className="grid grid-cols-1 gap-4">
          {beforeAfter.map((row, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-5 bg-black/20">
                <p className="text-xs text-brand-muted uppercase tracking-widest mb-2">Before</p>
                <p className="text-brand-ink flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-muted mt-2 shrink-0" />
                  {row.before}
                </p>
              </div>
              <div className="p-5 bg-brand-gradient-soft">
                <p className="text-xs text-brand-cyan uppercase tracking-widest mb-2">Potential outcome</p>
                <p className="text-white flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-brand-cyan mt-1 shrink-0" />
                  {row.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Differentiators */}
      <Section eyebrow="How it works" title="Built differently">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentiators.map(({ icon: Icon, title, body }) => (
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

      {/* Demo Video */}
      <Section eyebrow="Demo" title="Watch how Encountive transforms clinical learning" align="center" tone="muted">
        <p className="text-brand-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8 text-center">
          See how our AI-adaptive engine coaches learners through realistic scenarios, identifies knowledge gaps in real
          time, and delivers measurable outcomes your institution can defend — all with the rigor clinical teams demand.
        </p>
        <div className="flex justify-center">
          <a
            href="https://www.youtube.com/watch?v=aAeJr9tXrGg"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Play size={16} />
            Watch the demo (2 min)
          </a>
        </div>
      </Section>

      {/* ROI Stats */}
      <Section eyebrow="Results" title="Outcomes that matter">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {roiStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-brand-muted text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/roi" className="btn-secondary">
            See the full ROI breakdown <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* Pilot Info */}
      <Section tone="muted">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="font-semibold text-white mb-3">In development with clinical experts</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              We're building Encountive with simulation educators, nurse leaders, and academic programs — so scenarios,
              rubrics, and evidence match how your teams actually work.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-white mb-3">Preparing pilots — limited spots</h3>
            <p className="text-sm text-brand-muted leading-relaxed mb-4">
              We run scoped 60–90 day pilots with baseline-to-post measurement, conversion terms on success, and
              evaluation reports suitable for QI and credentialing.
            </p>
            <Link to="/contact" className="btn-primary text-sm">
              Plan a pilot <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
