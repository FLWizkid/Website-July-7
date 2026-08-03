import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  actions?: ReactNode;
  align?: "left" | "center";
};

export default function PageHero({ eyebrow, title, subtitle, actions, align = "center" }: PageHeroProps) {
  return (
    <div className={cn("hero-glow pt-12 sm:pt-14 md:pt-16 pb-12 sm:pb-14 md:pb-16", align === "center" ? "text-center" : "")}>
      <div className={cn("container-wide mx-auto px-4 sm:px-6 lg:px-8", align === "center" ? "flex flex-col items-center" : "")}>
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-5">
            {subtitle}
          </p>
        )}
        {actions && (
          <div className={cn("flex flex-wrap gap-3", align === "center" ? "justify-center" : "justify-start")}>
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
