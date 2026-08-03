import { Link } from "react-router-dom";
import Logo from "./Logo";

const explore = [
  { label: "Product", to: "/product" },
  { label: "Healthcare", to: "/solutions/healthcare" },
  { label: "Academic", to: "/solutions/academic" },
  { label: "ROI", to: "/roi" },
];

const company = [
  { label: "About", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-bg/60 mt-16 sm:mt-24">
      <div className="container-xl mx-auto py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-brand-muted leading-relaxed max-w-xs">
              AI-adaptive clinical simulation for healthcare teams.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-4">Explore</p>
            <ul className="space-y-1">
              {explore.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-block py-2 min-h-[44px] text-sm text-brand-ink hover:text-brand-cyan transition-colors leading-relaxed"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-4">Company</p>
            <ul className="space-y-1">
              {company.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-block py-2 min-h-[44px] text-sm text-brand-ink hover:text-brand-cyan transition-colors leading-relaxed"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-brand-muted">
          <p>&copy; {new Date().getFullYear()} Encountive, Inc. All rights reserved.</p>
          <p>Accessibility: captions, transcripts, WCAG-compliant delivery, keyboard navigation.</p>
        </div>
      </div>
    </footer>
  );
}
