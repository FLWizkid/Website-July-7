import type { ReactNode } from "react";

type CtaBannerProps = {
  title?: string;
  subtitle?: string;
  actions: ReactNode;
};

export default function CtaBanner({
  title = "Ready to improve clinical training outcomes?",
  subtitle = "Start with a scoped pilot. We'll help you plan deployment, define metrics, and design scale.",
  actions,
}: CtaBannerProps) {
  return (
    <section className="py-6 sm:py-8 md:py-10">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl border border-brand-cyan/20 overflow-hidden p-6 sm:p-8 md:p-10 text-center"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,211,238,0.12), transparent 70%), linear-gradient(180deg, #131A2E 0%, #0a0f1f 100%)",
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-8">{subtitle}</p>
          <div className="flex flex-wrap gap-3 justify-center">{actions}</div>
        </div>
      </div>
    </section>
  );
}
