import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Clock, DollarSign, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CtaBanner from "@/components/CtaBanner";

const hospitalStats = [
  { value: "4.0x", label: "Projected ROI" },
  { value: "$293,088", label: "Modeled annual benefit" },
  { value: "~1.3 mo", label: "Payback period" },
  { value: "40%", label: "Faculty time saved" },
];

const academicStats = [
  { value: "3.88x", label: "Projected ROI" },
  { value: "$122,000", label: "Modeled annual benefit" },
  { value: "200", label: "Students per cohort" },
  { value: "30%+", label: "Reduction in prep time" },
];

const hospitalDrivers = [
  {
    icon: DollarSign,
    title: "Turnover cost reduction",
    body: "Modeled $50,000–$150,000 in annual savings from improved retention through stronger onboarding and continuous coaching.",
  },
  {
    icon: Clock,
    title: "Training time reduction",
    body: "Asynchronous, on-demand practice reduces scheduled training hours. Faculty and preceptors focus on high-value coaching.",
  },
  {
    icon: TrendingUp,
    title: "Adverse event risk reduction",
    body: "Repeatable practice on clinical safety behaviors reduces risk exposure and associated liability costs.",
  },
];

const academicDrivers = [
  {
    icon: Users,
    title: "Faculty time savings",
    body: "Automated scenario delivery and coaching reduces per-student faculty contact hours by an estimated 30%+.",
  },
  {
    icon: TrendingUp,
    title: "Improved pass rates",
    body: "Targeted remediation and repeat practice improve NCLEX and competency exam pass rates across cohorts.",
  },
  {
    icon: DollarSign,
    title: "Accreditation efficiency",
    body: "Pre-built evidence packages, objectives, and evaluation templates reduce the cost of accreditation cycles.",
  },
];

export default function ROI() {
  return (
    <>
      <PageHero
        eyebrow="ROI model"
        title={
          <>
            Outcomes <span className="gradient-text">tied to investment</span>
          </>
        }
        subtitle="Illustrative models built on real cost drivers. We'll customize projections for your specific cohort, scenario mix, and baseline metrics during the pilot planning process."
      />

      {/* Hospital */}
      <Section eyebrow="Hospital cohort model" title="Up to $293k in annual benefit for a 100-nurse cohort">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {hospitalStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-brand-muted text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-brand-cyan/20 bg-brand-gradient-soft p-6 mb-8">
          <p className="text-sm text-brand-muted">
            <strong className="text-white">Illustrative figure.</strong> Benefit — not price. Pilot scope and pricing
            are built around your footprint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {hospitalDrivers.map(({ icon: Icon, title, body }) => (
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

      {/* Academic */}
      <Section eyebrow="Academic cohort model" title="3.88x ROI for a 200-student cohort" tone="muted">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {academicStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-brand-muted text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-brand-cyan/20 bg-brand-gradient-soft p-6 mb-8">
          <p className="text-sm text-brand-muted">
            <strong className="text-white">Illustrative figure.</strong> Benefit — not price.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {academicDrivers.map(({ icon: Icon, title, body }) => (
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

      {/* Outcome-based contracts */}
      <Section eyebrow="Pricing philosophy" title="Contracts tied to outcomes, not features">
        <p className="text-brand-muted text-lg leading-relaxed max-w-2xl mb-8">
          As our evidence base matures, we're preparing outcome-based contracts tied to the measures your leaders
          already track — so value and cost move together.
        </p>
        <Link to="/contact" className="btn-primary">
          Discuss your pilot <ArrowRight size={16} />
        </Link>
      </Section>

      <CtaBanner
        title="Let's build a model for your organization"
        subtitle="Share your cohort size, priority scenarios, and baseline metrics — we'll build a custom ROI projection for your pilot planning."
        primaryLabel="Plan a pilot"
        secondaryLabel="Contact us"
      />
    </>
  );
}
