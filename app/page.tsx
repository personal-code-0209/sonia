import Link from "next/link";
import { projects } from "./data/projects";
import { philosophy, domains, delivery, stats, glance, skills, timeline, contacts } from "./constants";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const C = {
  cream: "#FFF9F0",
  blush: "#F3D9D8",
  espresso: "#382821",
  butter: "#F7E7A8",
  butter2: "#EDD97A",
  muted: "#7a6258",
  border: "#E8D8D0",
  surface: "#FAF3EC",
};

const sectionHeaderStyle = {
  marginBottom: "26px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
} as const;

const cardStyle = {
  background: "rgba(255,255,255,0.42)",
  border: `1px solid ${C.border}`,
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(56, 40, 33, 0.04)",
} as const;

const credentialLinks = [
  {
    label: "Certified Scrum Product Owner",
    source: "Scrum Alliance",
    href: "/images/certificates/cspo.jpg",
    image: "/images/certificates/cspo.jpg",
  },
  {
    label: "Diploma in Software Development",
    source: "Indian Institute of Skill Development Training",
    href: "/images/certificates/software-development-diploma.jpg",
    image: "/images/certificates/software-development-diploma.jpg",
  },
  {
    label: "Business Data Analysis with SQL & Tableau",
    source: "Udemy · Data Science Guide",
    href: "/images/certificates/sql-tableau-data-analysis.jpg",
    image: "/images/certificates/sql-tableau-data-analysis.jpg",
  },
  {
    label: "Salesforce Certified AI Associate",
    source: "Salesforce Trailhead",
    href: "/images/certificates/salesforce-ai-associate.jpg",
    image: "/images/certificates/salesforce-ai-associate.jpg",
  },
  {
    label: "Complete Web Development Course",
    source: "Udemy · Hitesh Choudhary",
    href: "/images/certificates/complete-web-development.jpg",
    image: "/images/certificates/complete-web-development.jpg",
  },
  {
    label: "HTML, CSS & JavaScript",
    source: "Udemy · YouAccel Training",
    href: "/images/certificates/html-css-javascript.jpg",
    image: "/images/certificates/html-css-javascript.jpg",
  },
];

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        color: C.espresso,
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(14px)",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div
          className="w site-nav-inner"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "18px",
            padding: "18px 0",
          }}
        >
          <a
            href="#top"
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "1.15rem",
              fontStyle: "italic",
              color: C.espresso,
              textDecoration: "none",
            }}
          >
            Sonia Sharma
          </a>

          <nav className="site-nav" style={{ display: "flex", gap: "28px", alignItems: "center" }}>
            {[["Work", "#work"], ["Philosophy", "#philosophy"], ["Domains", "#domains"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
              <a
                key={label}
                href={href}
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  color: C.muted,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="site-nav-cta"
            style={{
              fontFamily: "var(--font-poppins)",
              fontWeight: 700,
              fontSize: "0.76rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: C.cream,
              background: C.espresso,
              padding: "10px 22px",
              borderRadius: "100px",
              textDecoration: "none",
            }}
          >
            Let&apos;s talk
          </a>
        </div>
      </header>

      <main id="top">
        <section
          className="section-white"
          style={{
            padding: "68px 0 30px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "auto auto 30px -100px",
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              background: "rgba(243, 217, 216, 0.5)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "-90px",
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              border: "1px solid rgba(56,40,33,0.08)",
              pointerEvents: "none",
            }}
          />

          <div className="w" style={{ position: "relative", zIndex: 1 }}>
            <div
              className="hero-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1.25fr 0.75fr",
                gap: "36px",
                alignItems: "center",
              }}
            >
              <div>
                <span className="pill" style={{ marginBottom: "20px", display: "inline-flex" }}>
                  ✦ Product Manager
                </span>

                <h1
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: "clamp(2.1rem, 4.2vw, 3.8rem)",
                    fontWeight: 400,
                    lineHeight: 1.08,
                    letterSpacing: "-0.05em",
                    color: C.espresso,
                    margin: 0,
                  }}
                >
                  Curious mind.
                  <br />
                  <span style={{ color: C.muted }}>Product mindset.</span>
                </h1>

                <p
                  style={{
                    color: C.muted,
                    fontSize: "0.98rem",
                    marginTop: "22px",
                    lineHeight: 1.8,
                    maxWidth: "510px",
                  }}
                >
                  I help fintech teams turn ambitious ideas into clear product decisions,
                  intuitive journeys, and measurable commercial outcomes.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "30px" }}>
                  <a
                    href="#work"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontWeight: 700,
                      fontSize: "0.76rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: C.cream,
                      background: C.espresso,
                      padding: "12px 24px",
                      borderRadius: "999px",
                      textDecoration: "none",
                    }}
                  >
                    Case studies
                  </a>
                  <a
                    href="#about"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontWeight: 600,
                      fontSize: "0.76rem",
                      letterSpacing: "0.06em",
                      color: C.espresso,
                      border: `1.5px solid ${C.espresso}`,
                      padding: "12px 24px",
                      borderRadius: "999px",
                      textDecoration: "none",
                    }}
                  >
                    About me
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    width: "100%",
                    maxWidth: "360px",
                    background: "rgba(255, 249, 240, 0.72)",
                    border: `1px solid rgba(56,40,33,0.08)`,
                    borderRadius: "26px",
                    boxShadow: "0 18px 45px rgba(56,40,33,0.06)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      padding: "20px 20px 14px",
                      borderBottom: `1px solid ${C.border}`,
                      background: "rgba(255, 249, 240, 0.58)",
                    }}
                  >
                    <div style={{ fontSize: "0.68rem", letterSpacing: "0.13em", textTransform: "uppercase", color: C.muted, fontWeight: 700 }}>
                      Profile
                    </div>
                    <div
                      style={{
                        marginTop: "18px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: "1.15rem", fontWeight: 700 }}>Sonia Sharma</div>
                        <div style={{ fontSize: "0.78rem", color: C.muted }}>Product Manager · Fintech &amp; Digital Products</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: "18px 20px 20px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
                      {[
                        ["5 Years", "Total Professional Experience"],
                        ["4", "Major launches"],
                        ["35%", "Engagement uplift"],
                        ["BFSI", "Core domain"],
                      ].map(([value, label]) => (
                        <div
                          key={label}
                          style={{
                            border: `1px solid ${C.border}`,
                            borderRadius: "16px",
                            background: "rgba(255, 249, 240, 0.58)",
                            padding: "14px 12px",
                          }}
                        >
                          <div style={{ fontSize: "1.25rem", fontWeight: 800, color: C.espresso }}>{value}</div>
                          <div style={{ marginTop: "6px", fontSize: "0.68rem", lineHeight: 1.5, color: C.muted }}>{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="hero-glance"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                marginTop: "54px",
                borderTop: `1px solid ${C.border}`,
                background: "rgba(255,255,255,0.18)",
              }}
            >
              {glance.map((g, i) => (
                <div
                  key={g.title}
                  style={{
                    padding: "22px 18px",
                    borderRight: i < glance.length - 1 ? `1px solid ${C.border}` : "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontWeight: 800,
                      fontSize: "0.74rem",
                      color: C.espresso,
                      marginBottom: "6px",
                    }}
                  >
                    {g.title}
                  </p>
                  <p style={{ fontSize: "0.72rem", color: C.muted, lineHeight: 1.7 }}>{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section-gray" style={{ padding: "84px 0" }}>
          <div className="w">
            <div style={{ ...sectionHeaderStyle, marginBottom: "28px" }}>
              <span className="eyebrow" style={{ color: C.muted }}>Selected work</span>
              <h2 style={{ fontSize: "clamp(2.1rem, 4vw, 3.2rem)", lineHeight: 1.1 }}>
                Strategic product work that moves revenue and trust.
              </h2>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <p
                style={{
                  color: C.muted,
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                }}
              >
                Websites I helped create
              </p>
              <div className="website-links" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
                {[
                  ["Religare Online", "https://www.religareonline.com/"],
                  ["Religare Digital", "https://religaredigital.in/"],
                  ["Fawaris One", "https://www.fawarisone.com/"],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...cardStyle,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      padding: "14px 16px",
                      color: C.espresso,
                      textDecoration: "none",
                      background: "#fff",
                    }}
                  >
                    <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>{label}</span>
                    <span aria-hidden="true" style={{ color: C.muted }}>↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="project-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "18px" }}>
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  style={{
                    ...cardStyle,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  <div style={{ padding: "24px 22px 22px" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: C.muted,
                        marginBottom: "10px",
                      }}
                    >
                      {project.industry}
                    </p>

                    <h3 style={{ fontSize: "1.45rem", lineHeight: 1.25, marginBottom: "10px" }}>
                      {project.title}
                    </h3>

                    <p style={{ color: C.muted, lineHeight: 1.7, marginBottom: "16px", fontSize: "0.96rem" }}>
                      {project.summary}
                    </p>

                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        color: C.espresso,
                        fontWeight: 700,
                        fontSize: "0.78rem",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      <span>View project</span>
                      <span aria-hidden="true">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="philosophy" className="section-white" style={{ padding: "84px 0" }}>
          <div className="w">
            <div style={{ ...sectionHeaderStyle, marginBottom: "24px" }}>
              <span className="eyebrow" style={{ color: C.muted }}>Product philosophy</span>
              <h2 style={{ fontSize: "clamp(2.1rem, 4vw, 3.2rem)", lineHeight: 1.1 }}>
                Product choices built around customer needs and business leverage.
              </h2>
            </div>

            <div className="philosophy-list">
              {philosophy.map((item) => (
                <article className="philosophy-item" key={item.title}>
                  <span className="philosophy-number">{item.n}</span>
                  <div className="philosophy-copy">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                  <span className="philosophy-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="domains" className="section-gray" style={{ padding: "84px 0" }}>
          <div className="w">
            <div
              className="domain-section-heading"
              style={{
                ...sectionHeaderStyle,
                alignItems: "center",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              <span className="eyebrow" style={{ color: C.muted }}>Domains I solve in</span>
              <h2 style={{ fontSize: "clamp(1rem, 1.7vw, 1.4rem)", lineHeight: 1.4, textAlign: "center", whiteSpace: "nowrap" }}>
                Fintech, investing, distribution, and digital operations.
              </h2>
            </div>

            <div
              className="domain-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "16px",
              }}
            >
              {domains.map((item, index) => (
                <article className={`domain-card domain-card-${index + 1}`} key={item.title} style={{ textAlign: "center" }}>
                  <div className="domain-card-top" style={{ justifyContent: "center", gap: "10px" }}>
                    <span className="domain-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="domain-label">
                      {["INVESTOR JOURNEYS", "WEALTH PRODUCTS", "DISTRIBUTION", "OPERATIONS"][index]}
                    </span>
                  </div>
                  <h3
                    style={{
                      marginBottom: "9px",
                      fontSize: "0.82rem",
                      letterSpacing: "-0.03em",
                      lineHeight: 1.35,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ maxWidth: "52ch", marginInline: "auto" }}>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-white" style={{ padding: "84px 0" }}>
          <div className="w">
            <div style={{ ...sectionHeaderStyle, marginBottom: "28px" }}>
              <span className="eyebrow" style={{ color: C.muted }}>How I Build Products</span>
              <h2 style={{ fontSize: "clamp(2.1rem, 4vw, 3.2rem)", lineHeight: 1.1 }}>
                From understanding user needs to launching, learning, and improving.
              </h2>
            </div>

            <div className="delivery-timeline" aria-label="Five-step product delivery timeline">
              {delivery.map((step) => (
                <article key={step.title} className="delivery-step" style={cardStyle}>
                  <div className="delivery-step-heading">
                    <span className="delivery-step-number">{step.n}</span>
                    <h3>{step.title}</h3>
                  </div>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-gray" style={{ padding: "84px 0" }}>
          <div className="w">
            <div style={{ ...sectionHeaderStyle, marginBottom: "28px" }}>
              <span className="eyebrow" style={{ color: C.muted }}>About</span>
              <h2 style={{ fontSize: "clamp(2.1rem, 4vw, 3.2rem)", lineHeight: 1.1, maxWidth: "760px" }}>
                A PM who blends strategy, product thinking, and digital execution.
              </h2>
            </div>

            <div className="about-overview">
              <article className="about-intro" style={cardStyle}>
                <span className="about-label">How I work</span>
                <p>
                  I bring product, marketing, and technology together to create clear, useful
                  digital experiences. I work closely with marketing teams on SEO, social media,
                  and content creation, while my software development diploma and hands-on
                  technical experience help me collaborate confidently with design and
                  engineering teams.
                </p>
              </article>

              <article className="about-career" style={cardStyle}>
                <div className="about-card-heading">
                  <span className="about-label">Experience</span>
                  <h3>Career timeline</h3>
                </div>
                <ol className="career-timeline">
                  {timeline.map((item) => (
                    <li key={item.year} className="career-item">
                      <span className="career-year">{item.year}</span>
                      <div>
                        <h4>{item.role}</h4>
                        <p>{item.co}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            </div>

            <div className="about-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <article className="about-skills" style={cardStyle}>
              <div className="about-card-heading">
                <span className="about-label">Toolkit</span>
                <h3>Skills & tools</h3>
              </div>
              <div className="skills-list">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section-white credentials-section" style={{ padding: "48px 0 64px" }}>
          <div className="w">
            <div style={{ ...sectionHeaderStyle, marginBottom: "20px" }}>
              <span className="eyebrow" style={{ color: C.muted }}>Certificates</span>
            </div>

            <div className="credentials-grid">
              {credentialLinks.map((credential, index) => (
                <a
                  key={credential.label}
                  href={`${basePath}${credential.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credential-card"
                >
                  {credential.image ? (
                    <span className="credential-preview">
                      <img src={`${basePath}${credential.image}`} alt={`${credential.label} certificate`} loading="lazy" />
                      <span className="credential-index">{String(index + 1).padStart(2, "0")}</span>
                    </span>
                  ) : (
                    <span className="credential-index credential-index-standalone">{String(index + 1).padStart(2, "0")}</span>
                  )}
                  <span className="credential-copy">
                    <strong>{credential.label}</strong>
                    <span>{credential.source}</span>
                  </span>
                  <span className="credential-link">
                    {credential.image ? "View certificate" : "Visit institution"}
                    <span aria-hidden="true"> ↗</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-gray contact-section">
          <div className="w">
            <div className="contact-panel">
              <div className="contact-intro">
                <span className="eyebrow">Contact</span>
                <h2>Let&apos;s build the next meaningful financial product.</h2>
                <p>Have a product challenge or an opportunity to discuss? I&apos;d love to hear from you.</p>
              </div>

              <div className="contact-options">
                {contacts.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                    className="contact-option"
                  >
                    <span className="contact-option-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="contact-option-copy">
                      <span>{contact.label}</span>
                      <strong>{contact.value}</strong>
                    </span>
                    <span className="contact-option-arrow" aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="section-white" style={{ borderTop: `1px solid ${C.border}` }}>
        <div className="w footer-inner">
          <span>© 2025 Sonia Sharma</span>
          <span>Product strategy · Fintech · Digital growth</span>
        </div>
      </footer>
    </div>
  );
}
