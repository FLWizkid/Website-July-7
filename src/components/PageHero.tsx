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
      <div className={cn("container-xl mx-auto", align === "center" ? "flex flex-col items-center" : "")}>
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className={cn("text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-5", align === "center" ? "max-w-3xl" : "max-w-3xl")}>
          {title}
        </h1>
        {subtitle && (
          <p className={cn("text-brand-muted text-base md:text-lg leading-relaxed mb-8", align === "center" ? "max-w-2xl" : "max-w-2xl")}>
            {subtitle}
          </p>
        )}
        {actions && <div className="flex flex-wrap gap-3 justify-center">{actions}</div>}
      </div>
    </div>
  );
}
