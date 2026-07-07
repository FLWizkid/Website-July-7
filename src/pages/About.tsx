import { Link } from "react-router-dom";
import { ArrowRight, Target, Lightbulb, BarChart3, CheckCircle2 } from "lucide-react";
import Section from "@/components/Section";
import CtaBanner from "@/components/CtaBanner";

const pillars = [
  {
    icon: Target,
    title: "Purpose",
    body: "Elevate the human side of healthcare — communication, judgment, empathy, resilience.",
  },
  {
    icon: Lightbulb,
    title: "Mission",
    body: "AI-adaptive simulation + XR with real-time analytics so every learner improves and every leader sees the impact.",
  },
  {
    icon: BarChart3,
    title: "Stage",
    body: "Pre-seed. Building toward MVP. Preparing scoped pilots with clinical enterprises and academic programs.",
  },
];

const visionPoints = [
  "An integrated learning stack for healthcare that links practice to outcomes",
  "Scenario libraries spanning every clinical discipline and role",
  "Outcome-based contracting tied to the metrics leaders already track",
  "XR immersion layered into existing simulation workflows",
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <div className="hero-glow pt-36 pb-20">
        <div className="container-xl mx-auto max-w-3xl">
          <p className="eyebrow mb-4">About Encountive</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Practice should be safe, coached, and{" "}
            <span className="gradient-text">grown</span>
          </h1>
          <p className="text-brand-muted text-xl leading-relaxed">
            Clinical teams are expected to navigate conflict, grief, uncertainty, and high-stakes conversations —
            often with limited practice and inconsistent feedback. Encountive is designed to close that gap with
            simulation that feels real, supports repeat practice, and makes growth measurable through coaching and
            reporting.
          </p>
        </div>
      </div>

      {/* Pillars */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map(({ icon: Icon, title, body }) => (
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

      {/* Founder Letter */}
      <Section eyebrow="From the founder" tone="muted">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-brand-gradient flex items-center justify-center text-white font-bold text-xl shrink-0">
              MT
            </div>
            <div>
              <p className="font-semibold text-white text-lg">Melissa Jo Tully</p>
              <p className="text-sm text-brand-cyan">BSN, MHPE, RN-BC</p>
              <p className="text-sm text-brand-muted">Founder, CEO, and Chief Simulation Architect</p>
            </div>
          </div>

          <div className="space-y-5 text-brand-ink leading-relaxed">
            <p>
              I've spent my career in and around healthcare simulation. First as a nurse at the bedside, then as a
              clinical educator designing scenarios to help people practice the hardest parts of care. Across roles and
              settings, one truth kept repeating: <strong className="text-white">skills are taught through practice and
              feedback.</strong>
            </p>
            <p>
              We teach the science well, but miss the judgment, communication, teamwork, documentation, and escalation.
              The human systems where safety actually happens don't get enough reps.
            </p>
            <p>
              Simulation has been our best tool to close that gap. Yet even simulation struggles to keep up with today's
              reality: teams are stretched, expert time is scarce, competencies keep multiplying, and learners are
              everywhere — on the unit, in the clinic, on the road, at home.
            </p>
            <p className="text-white font-medium text-lg">That is why I'm building Encountive.</p>
            <p>
              Encountive is my answer to a simple question: how do we give every healthcare worker safe, repeatable
              practice on the moments that matter — anytime, anywhere — and prove that it worked?
            </p>
            <p>
              We're creating an AI-adaptive simulation platform that honors the best of our field and extends it. Not
              replacing people but amplifying them. Educators still set the goals, define the rubrics, and decide what
              "good" looks like. Encountive handles the scale.
            </p>
            <p>
              This is not about chasing shiny tech. It's about{" "}
              <strong className="text-white">dignity and safety.</strong> Dignity for the learner who deserves more
              than "watch a video, sign the attestation." Safety for patients who assume we've practiced the exact
              conversation and coordination that their care requires.
            </p>
            <p>
              We are early, on purpose. We're partnering with clinical enterprises and academic programs across
              disciplines to run focused pilots. Each pilot chooses a meaningful slice and measures what matters:
              fewer errors, stronger communication, faster time-to-competence, and time saved for faculty and
              preceptors.
            </p>
            <p className="text-brand-muted italic">
              If you lead a unit, a service line, a school, or a system — and you believe, like I do, that practice
              should be safe, coached, and grown — I'd love to build this with you.
            </p>
            <p className="font-semibold text-white">
              Melissa Jo Tully, BSN, MHPE, RN-BC
              <br />
              <span className="text-brand-muted font-normal">Founder & CEO, Encountive, Inc.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* Vision */}
      <Section eyebrow="Long-term vision" title="An integrated learning stack for healthcare">
        <ul className="space-y-3 mb-8">
          {visionPoints.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-brand-cyan mt-1 shrink-0" />
              <span className="text-brand-ink">{item}</span>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn-primary">
          Let's talk <ArrowRight size={16} />
        </Link>
      </Section>

      <CtaBanner
        title="Bring us your pain points"
        subtitle="We'll bring the scaffolding that turns them into skills. Contact us to start a conversation about piloting Encountive at your organization."
        primaryLabel="Start the conversation"
        secondaryLabel="Learn about the product"
        secondaryTo="/product"
      />
    </>
  );
}
