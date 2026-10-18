import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/app/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} — Sonia Sharma`,
    description: project.summary,
  };
}

const sections = [
  { key: "executiveSummary", label: "Overview" },
  { key: "context", label: "Context" },
  { key: "problemDetail", label: "The challenge" },
  { key: "discovery", label: "Discovery" },
  { key: "strategy", label: "Strategy" },
  { key: "execution", label: "Execution" },
  { key: "measurement", label: "Outcomes" },
  { key: "reflection", label: "Reflection" },
] as const;

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="case-study-page">
      <header className="case-study-nav">
        <div className="case-study-wrap case-study-nav-inner">
          <Link href="/" className="case-study-brand">
            Sonia Sharma
          </Link>
          <Link href="/#work" className="case-study-back">
            <span aria-hidden="true">←</span> All projects
          </Link>
        </div>
      </header>

      <main>
        <section className="case-study-hero">
          <div className="case-study-wrap">
            <div className="case-study-kicker">
              <span>{project.industry}</span>
              <span className="case-study-kicker-dot" aria-hidden="true" />
              <span>{project.category}</span>
            </div>
            <div className="case-study-hero-grid">
              <div>
                <p className="case-study-eyebrow">Selected case study</p>
                <h1>{project.title}</h1>
                <p className="case-study-problem">{project.problem}</p>
              </div>
              <aside className="case-study-outcome">
                <span>Key outcome</span>
                <strong>{project.outcome}</strong>
              </aside>
            </div>

            <div className="case-study-role">
              <span>My role</span>
              <p>{project.myRole}</p>
            </div>
          </div>
        </section>

        <section className="case-study-overview">
          <div className="case-study-wrap case-study-overview-inner">
            <span className="case-study-overview-number">01</span>
            <div>
              <p className="case-study-eyebrow">At a glance</p>
              <h2>A focused product response to a meaningful customer problem.</h2>
              <p>{project.executiveSummary}</p>
            </div>
          </div>
        </section>

        <div className="case-study-wrap case-study-content">
          <aside className="case-study-toc">
            <p className="case-study-eyebrow">In this case study</p>
            <nav aria-label="Case study sections">
              {sections.map((section, index) => (
                <a key={section.key} href={`#${section.key}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="case-study-sections">
            {sections.slice(1).map((section, index) => (
              <section
                key={section.key}
                id={section.key}
                className="case-study-section"
              >
                <div className="case-study-section-heading">
                  <span>{String(index + 2).padStart(2, "0")}</span>
                  <h2>{section.label}</h2>
                </div>
                <p>{project[section.key]}</p>
              </section>
            ))}
          </div>
        </div>

        <section className="case-study-next">
          <div className="case-study-wrap case-study-next-inner">
            <Link href="/#work" className="case-study-all-link">
              ← Back to all projects
            </Link>
            <Link href={`/work/${nextProject.slug}`} className="case-study-next-link">
              <span className="case-study-eyebrow">Continue exploring</span>
              <strong>{nextProject.title}</strong>
              <span aria-hidden="true">View next project →</span>
            </Link>
          </div>
        </section>
      </main>

      <footer className="case-study-footer">
        <div className="case-study-wrap">
          <span>© 2025 Sonia Sharma</span>
          <span>Product strategy · Fintech · Digital growth</span>
        </div>
      </footer>
    </div>
  );
}
