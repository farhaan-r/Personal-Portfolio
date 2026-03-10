import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { projects, skills } from "../data/projects";
import Link from "next/link";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "var(--nav-height)" }}>

        {/* ── HERO ── */}
        <section
          style={{
            minHeight: "calc(100vh - var(--nav-height))",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle background grid */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle at 70% 40%, rgba(26,86,219,0.06) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />

          <div className="container">
            <div style={{ maxWidth: "700px" }}>
              <p className="section-label fade-up" style={{ marginBottom: "20px" }}>
                Available for internships & roles
              </p>

              <h1
                className="fade-up fade-up-1"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  marginBottom: "24px",
                }}
              >
                Farhaan Rashid
              </h1>

              <p
                className="fade-up fade-up-2"
                style={{
                  fontSize: "1.15rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  marginBottom: "36px",
                  maxWidth: "560px",
                }}
              >
                CS & Mathematics student building at the intersection of{" "}
                <em style={{ color: "var(--text-primary)", fontStyle: "normal", fontWeight: 500 }}>
                  machine learning
                </em>
                ,{" "}
                <em style={{ color: "var(--text-primary)", fontStyle: "normal", fontWeight: 500 }}>
                  computer vision
                </em>
                , and{" "}
                <em style={{ color: "var(--text-primary)", fontStyle: "normal", fontWeight: 500 }}>
                  backend systems
                </em>
                .
              </p>

              <div className="fade-up fade-up-3" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/projects" className="btn btn-primary">
                  View Projects →
                </Link>
                <a
                  href="https://github.com/farhaan-r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/farhaanrashid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  LinkedIn ↗
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED PROJECTS ── */}
        <section className="section" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <p className="section-label">Selected Work</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Featured Projects</h2>
              <Link
                href="/projects"
                style={{ fontSize: "14px", color: "var(--accent)", fontWeight: 500 }}
              >
                All projects →
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
              }}
            >
              {featuredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="section">
          <div className="container">
            <p className="section-label">Capabilities</p>
            <h2 className="section-title">Skills & Technologies</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "24px",
                marginTop: "40px",
              }}
            >
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    padding: "24px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      marginBottom: "16px",
                    }}
                  >
                    {category}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {items.map((item) => (
                      <span
                        key={item}
                        style={{
                          fontSize: "14px",
                          color: "var(--text-secondary)",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "var(--accent)",
                            flexShrink: 0,
                            display: "inline-block",
                          }}
                        />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            background: "var(--text-primary)",
            padding: "80px 0",
          }}
        >
          <div className="container" style={{ textAlign: "center" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#fff",
                marginBottom: "16px",
              }}
            >
              Let's work together
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "32px", fontSize: "1rem" }}>
              Open to internships, research roles, and interesting projects.
            </p>
            <a
              href="mailto:farhaan.rash@gmail.com"
              className="btn"
              style={{ background: "#fff", color: "var(--text-primary)" }}
            >
              Get in touch →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
