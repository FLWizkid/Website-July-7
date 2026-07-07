import { Link } from "react-router-dom";

type CtaBannerProps = {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

export default function CtaBanner({
  title = "Ready to improve clinical training outcomes?",
  subtitle = "Start with a scoped pilot. We'll help you plan deployment, define metrics, and design scale.",
  primaryLabel = "Plan a pilot",
  primaryTo = "/contact",
  secondaryLabel = "Contact us",
  secondaryTo = "/contact",
}: CtaBannerProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container-xl mx-auto">
        <div className="relative rounded-3xl border border-brand-cyan/20 overflow-hidden p-6 sm:p-10 md:p-16 text-center"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,211,238,0.12), transparent 70%), linear-gradient(180deg, #131A2E 0%, #0a0f1f 100%)",
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-4 max-w-2xl mx-auto">{title}</h2>
          <p className="text-brand-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">{subtitle}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to={primaryTo} className="btn-primary min-h-[48px]">{primaryLabel}</Link>
            <Link to={secondaryTo} className="btn-secondary min-h-[48px]">{secondaryLabel}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
