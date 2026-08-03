import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, LineChart } from "lucide-react";
import Logo from "./Logo";

const explore = [
  { label: "Product", to: "/product" },
  { label: "Healthcare", to: "/solutions/healthcare" },
  { label: "Academic", to: "/solutions/academic" },
  { label: "ROI Calculator", to: "/roi" },
];

const company = [
  { label: "About", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
];

const pillars = [
  {
    icon: ShieldCheck,
    label: "Rubric-first design",
  },
  {
    icon: Sparkles,
    label: "Adaptive remediation",
  },
  {
    icon: LineChart,
    label: "Evidence at scale",
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 sm:mt-24 border-t border-white/10">
      {/* Top CTA strip */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 100% 160% at 50% 0%, rgba(34,211,238,0.10), transparent 70%), linear-gradient(180deg, #0e1629 0%, #060b18 100%)",
        }}
      >
        <div className="container-xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 md:py-20">
          {/* Pillars row */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-12">
            {pillars.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-sm text-brand-ink">
                <div className="w-7 h-7 rounded-lg bg-brand-cyan/10 flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-brand-cyan" />
                </div>
                {label}
              </div>
            ))}
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-16">
            {/* Brand column */}
            <div className="space-y-5">
              <Logo />
              <p className="text-brand-muted text-sm leading-relaxed max-w-sm">
                AI-adaptive clinical simulation for healthcare teams — turning the AI readiness gap into structured,
                coached practice in communication, scope, and safety.
              </p>
              <Link
                to="/contact"
                className="btn-primary text-sm px-5 py-2.5 min-h-[40px] w-fit"
              >
                Plan a Pilot <ArrowRight size={15} />
              </Link>
            </div>

            {/* Explore */}
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-cyan mb-5">
                Explore
              </p>
              <ul className="space-y-0">
                {explore.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="group flex items-center gap-1.5 py-2 text-sm text-brand-muted hover:text-white transition-colors"
                    >
                      <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <ArrowRight size={11} className="text-brand-cyan shrink-0" />
                      </span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-cyan mb-5">
                Company
              </p>
              <ul className="space-y-0">
                {company.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="group flex items-center gap-1.5 py-2 text-sm text-brand-muted hover:text-white transition-colors"
                    >
                      <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-200 opacity-0 group-hover:opacity-100">
                        <ArrowRight size={11} className="text-brand-cyan shrink-0" />
                      </span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#050913] border-t border-white/[0.07]">
        <div className="container-xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-muted">
            &copy; {new Date().getFullYear()} Encountive, Inc. All rights reserved.
          </p>
          <p className="text-xs text-brand-muted/60">Patent Pending 2026</p>
          <p className="text-xs text-brand-muted/60 text-center sm:text-right">
            Captions &middot; Transcripts &middot; WCAG-compliant &middot; Keyboard navigation
          </p>
        </div>
      </div>
    </footer>
  );
}
