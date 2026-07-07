import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  tone?: "default" | "muted" | "dark" | "gradient";
  align?: "left" | "center";
};

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-transparent",
  muted: "bg-brand-surface/40 border-y border-white/5",
  dark: "bg-black/40 border-y border-white/10",
  gradient: "bg-brand-gradient text-white",
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  innerClassName,
  tone = "default",
  align = "left",
}: SectionProps) {
  return (
    <section id={id} className={cn("py-12 sm:py-16 md:py-20", toneClasses[tone], className)}>
      <div className={cn("container-xl mx-auto", innerClassName)}>
        {(eyebrow || title || subtitle) && (
          <div className={cn("mb-8 sm:mb-10 md:mb-12", align === "center" ? "text-center" : "")}>
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight mb-4">{title}</h2>
            )}
            {subtitle && (
              <p className={cn("text-brand-muted text-base md:text-lg leading-relaxed", align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl")}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
