import { Linkedin, ArrowRight } from "lucide-react";
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
      "Leads technology and platform architecture. Builds the AI systems that power The Encountive Engine, with XR capabilities in development.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {team.map((m) => (
            <div key={m.name} className="card flex flex-col gap-4">
              <div className="flex items-start gap-4">
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
              <p className="text-sm text-brand-muted leading-relaxed">{m.blurb}</p>
              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-brand-muted hover:text-brand-cyan transition-colors"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Contact/Plan a Pilot <ArrowRight size={16} />
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
