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
    <div className={cn("hero-glow pt-20 sm:pt-28 md:pt-32 pb-14 sm:pb-18 md:pb-20", align === "center" ? "text-center" : "")}>
      <div className={cn("container-wide mx-auto px-4 sm:px-6 lg:px-8", align === "center" ? "flex flex-col items-center" : "")}>
        {actions && (
          <div className="flex flex-wrap gap-3 justify-start mb-8 w-full">
            {actions}
          </div>
        )}
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-5">
          {title}
        </h1>
        {subtitle && (
          <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-8">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
