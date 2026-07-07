import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/cn";

type NavItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string; description?: string }[];
};

const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Product", to: "/product" },
  {
    label: "Solutions",
    children: [
      { label: "Healthcare", to: "/solutions/healthcare", description: "Hospitals, clinics, hospices" },
      { label: "Academic", to: "/solutions/academic", description: "Vocational programs & sim centers" },
    ],
  },
  { label: "ROI", to: "/roi" },
  { label: "Team", to: "/team" },
  { label: "About", to: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!solutionsRef.current?.contains(e.target as Node)) setSolutionsOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-brand-bg/95 backdrop-blur-md border-b border-white/10 shadow-soft"
          : "bg-brand-bg/80 backdrop-blur-sm border-b border-white/5"
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 btn-primary text-sm">
        Skip to main content
      </a>

      <div className="container-xl mx-auto flex h-16 items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" aria-label="Encountive home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} ref={solutionsRef} className="relative">
                <button
                  onClick={() => setSolutionsOpen((o) => !o)}
                  aria-expanded={solutionsOpen}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2.5 min-h-[44px] rounded-lg text-sm font-medium transition-colors",
                    solutionsOpen ? "text-brand-cyan" : "text-white hover:text-brand-cyan"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={cn("transition-transform", solutionsOpen && "rotate-180")}
                  />
                </button>

                {solutionsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 rounded-xl border border-white/10 bg-brand-surface shadow-soft py-2 animate-fade-up">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-4 py-3 min-h-[44px] hover:bg-white/5 transition-colors"
                      >
                        <span className="block text-sm font-medium text-white">{child.label}</span>
                        {child.description && (
                          <span className="block text-xs text-brand-muted mt-0.5">{child.description}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to!}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2.5 min-h-[44px] flex items-center rounded-lg text-sm font-medium transition-colors",
                    isActive ? "text-brand-cyan" : "text-white hover:text-brand-cyan"
                  )
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://app.encountive.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sm min-h-[44px]"
          >
            Login
          </a>
          <Link to="/contact" className="btn-secondary text-sm min-h-[44px]">
            Contact
          </Link>
          <Link to="/contact" className="btn-primary text-sm min-h-[44px]">
            Plan a pilot
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-3 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-white hover:text-brand-cyan transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-brand-bg/98 backdrop-blur-md pb-6 animate-fade-up">
          <nav className="container-xl mx-auto flex flex-col gap-1 pt-4">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className="block px-5 py-3 min-h-[44px] text-sm text-white hover:text-brand-cyan transition-colors"
                    >
                      {child.label}
                      {child.description && (
                        <span className="block text-xs text-brand-muted mt-0.5">{child.description}</span>
                      )}
                    </Link>
                  ))}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to!}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "block px-3 py-3 min-h-[44px] rounded-lg text-sm font-medium transition-colors",
                      isActive ? "text-brand-cyan" : "text-white hover:text-brand-cyan"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}

            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/10">
              <a
                href="https://app.encountive.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center min-h-[48px]"
              >
                Login
              </a>
              <Link to="/contact" className="btn-primary w-full justify-center min-h-[48px]">
                Plan a pilot
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
