import { Linkedin } from "lucide-react";
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
    title: "Founder",
    role: "Chief Executive Officer",
    credentials: "BSN, MHPE, RN-BC",
    initials: "MT",
    blurb:
      "Healthcare simulation educator and CEO with 20+ years in clinical practice and education design. Leads product vision and clinical rigor.",
    linkedin: "https://www.linkedin.com/in/melissajotully/",
  },
  {
    name: "Jeff Plaza",
    title: "Founder",
    role: "Chief Commercial Officer",
    initials: "JP",
    blurb:
      "Partners with healthcare organizations and academic programs to understand training needs and scope pilots that measure what matters.",
    linkedin: "https://www.linkedin.com/in/jeff-plaza-creatingsolutions/",
  },
  {
    name: "Douglas Tully",
    title: "Founder",
    role: "President and CIO",
    credentials: "PMP",
    initials: "DT",
    blurb:
      "Leads technology and platform architecture. Builds the AI and XR systems that power The Encountive Engine.",
    linkedin: "https://www.linkedin.com/in/douglastully/",
  },
  {
    name: "Nisha Patel",
    title: "Founder",
    role: "Chief Product Officer",
    initials: "NP",
    blurb:
      "Defines product strategy and user experience. Makes sure Encountive works for clinicians, educators, and administrators.",
    linkedin: "https://www.linkedin.com/in/nishap299/",
  },
];

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Built by clinicians and technologists"
        subtitle="Our team combines deep clinical experience with cutting-edge technology to build training solutions that make a real difference."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((m) => (
            <div key={m.name} className="card flex flex-col gap-4">
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {m.initials}
                </div>
                <div className="min-w-0">
                  <h2 className="font-semibold text-white text-lg leading-tight">{m.name}</h2>
                  <p className="text-xs text-brand-cyan mt-0.5">{m.title}</p>
                  <p className="text-xs text-brand-muted">{m.role}</p>
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
        title="Interested in joining us?"
        subtitle="We're building with clinical enterprises and academic programs. Reach out if you'd like to collaborate or learn more."
        primaryLabel="Contact us"
        secondaryLabel="Plan a pilot"
      />
    </>
  );
}
