import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Farhaan Rashid",
  description: "ML, computer vision, and backend projects.",
};

export default function Projects() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "var(--nav-height)" }}>

        {/* Header */}
        <section style={{ padding: "80px 0 64px", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <p className="section-label fade-up">Work</p>
            <h1 className="fade-up fade-up-1 section-title" style={{ maxWidth: "520px" }}>
              Projects & Research
            </h1>
            <p
              className="fade-up fade-up-2 section-subtitle"
            >
              A selection of engineering and research projects spanning machine learning,
              computer vision, and quantitative systems.
            </p>
          </div>
        </section>

        {/* Projects grid */}
        <section className="section">
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                gap: "24px",
              }}
            >
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>

            {/* GitHub CTA */}
            <div
              style={{
                marginTop: "64px",
                padding: "40px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    marginBottom: "6px",
                  }}
                >
                  See more on GitHub
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Repos, experiments, and work in progress.
                </p>
              </div>
              <a
                href="https://github.com/farhaan-r"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                github.com/farhaan-r ↗
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
