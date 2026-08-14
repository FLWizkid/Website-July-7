import { Linkedin, ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CtaBanner from "@/components/CtaBanner";

type Member = {
  name: string;
  title: string;
  role: string;
  blurb: string;
  credentials?: string;
  linkedin?: string;
  initials: string;
};

const team: Member[] = [
  {
    name: "Melissa Tully",
    title: "CEO and Co-Founder",
    role: "Chief Executive Officer",
    credentials: "BSN, MHPE, RN-BC",
    initials: "MT",
    blurb:
      "Healthcare simulation educator and CEO with 20+ years in clinical practice and education design. Leads product vision and clinical rigor.",
    linkedin: "https://www.linkedin.com/in/melissajotully/",
  },
  {
    name: "Douglas Tully",
    title: "CIO and Co-Founder",
    role: "Chief Information Officer",
    credentials: "CTO, PMP",
    initials: "DT",
    blurb:
      "Leads technology and platform architecture. Builds the AI systems that power The Encountive Engine, including with XR capabilities in development.",
    linkedin: "https://www.linkedin.com/in/douglastully/",
  },
];

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Built by clinicians and technologists"
        subtitle="Our team combines deep clinical experience with cutting-edge technology to build training solutions that make a real difference."
        actions={
          <>
            <Link to="/about" className="btn-secondary">
              About Encountive
            </Link>
          </>
        }
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {team.map((m) => (
            <div key={m.name} className="card flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {m.initials}
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-semibold text-white text-lg leading-tight">{m.name}</h2>
                    <p className="text-xs text-brand-cyan mt-0.5">{m.title}</p>
                    {m.credentials && (
                      <p className="text-xs text-brand-dim mt-0.5">{m.credentials}</p>
                    )}
                  </div>
                </div>
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-brand-muted hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
              </div>
              <p className="text-sm text-brand-muted leading-relaxed">{m.blurb}</p>
            </div>
          ))}

          {/* Extended Team Card */}
          <div className="card flex flex-col gap-4 md:col-span-2">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-gradient-soft flex items-center justify-center shrink-0">
                <Users size={24} className="text-brand-cyan" />
              </div>
              <div className="min-w-0">
                <h2 className="font-semibold text-white text-lg leading-tight">Our Extended Team</h2>
                <p className="text-xs text-brand-cyan mt-0.5">Clinical advisors & technology partners</p>
              </div>
            </div>
            <p className="text-sm text-brand-muted leading-relaxed">
              Encountive is guided by a growing network of simulation educators, nurse leaders, clinical
              faculty, and AI/UX specialists who help shape scenarios, rubrics, and platform capabilities.
              Their expertise ensures every product decision is grounded in real clinical practice and
              measurable learning outcomes.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Simulation Educators",
                "Nurse Leaders",
                "Clinical Faculty",
                "AI Specialists",
                "UX Researchers",
                "Patient Safety Advisors",
              ].map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-brand-gradient-soft text-brand-cyan border border-white/5"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CtaBanner
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              <span className="flex flex-col items-center leading-tight whitespace-nowrap">
                <span>Contact Us</span>
                <span>Or</span>
                <span>Plan a</span>
                <span>Pilot</span>
              </span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn-secondary">
              About Encountive
            </Link>
          </>
        }
      />
    </>
  );
}
