import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Farhaan Rashid",
  description: "CS & Mathematics student. Background, interests, and experience.",
};

const timeline = [
  {
    year: "2024 – Present",
    title: "Computer Science & Mathematics",
    org: "University of Queensland",
    desc: "Switched from Information Technology after developing a deep interest in algorithms, machine learning, and applied mathematics. Currently focused on ML systems and quantitative reasoning.",
  },
  {
    year: "2025 – 2026",
    title: "Machine Learning Consulting",
    org: "Whiley Group",
    desc: "",
  },
  {
    year: "2024 – 2024",
    title: "Data Analytics Intern",
    org: "Caliba Group",
    desc: "",
  },
  {
    year: "2023 – 2023",
    title: "Information Technology",
    org: "University of Queensland",
    desc: "Started in IT before pivoting to CS and Mathematics, driven by curiosity about the engineering behind intelligent systems.",
  },
  {
    year: "2023 – Present",
    title: "Team Member",
    org: "Coles Group",
    desc: "Developed teamwork, communication, and time management skills in a fast-paced environment alongside my studies.",
  },
];

const interests = [
  { title: "Machine Learning", desc: "Generative models, representation learning, model architecture design." },
  { title: "Computer Vision", desc: "Real-time inference, object detection, GPU-accelerated pipelines." },
  { title: "Quantitative Finance", desc: "Algorithmic trading, backtesting frameworks, alpha signal research." },
  { title: "Backend Systems", desc: "APIs, data pipelines, scalable infrastructure." },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "var(--nav-height)" }}>

        {/* Header */}
        <section
          style={{
            padding: "80px 0 64px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="container">
            <p className="section-label fade-up">About</p>
            <h1
              className="fade-up fade-up-1 section-title"
              style={{ marginBottom: "20px", maxWidth: "600px" }}
            >
              Building things that matter with code and mathematics.
            </h1>
            <p
              className="fade-up fade-up-2"
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                maxWidth: "580px",
              }}
            >
              I am Farhaan — a Computer Science and Mathematics student with a passion for
              machine learning and systems that solve real problems. I switched degrees after
              realising I wanted to go deeper than IT: into the algorithms, the maths, and
              the engineering that power intelligent systems.
            </p>
          </div>
        </section>

        {/* Interests */}
        <section className="section">
          <div className="container">
            <p className="section-label">What I care about</p>
            <h2 className="section-title">Interests & Focus Areas</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
                marginTop: "40px",
              }}
            >
              {interests.map((item, i) => (
                <div
                  key={item.title}
                  className={`fade-up fade-up-${i + 1}`}
                  style={{
                    padding: "28px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      marginBottom: "10px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section
          className="section"
          style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}
        >
          <div className="container">
            <p className="section-label">Background</p>
            <h2 className="section-title">Education & Experience</h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
                marginTop: "40px",
                maxWidth: "680px",
              }}
            >
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`fade-up fade-up-${i + 1}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr",
                    gap: "24px",
                    padding: "28px 0",
                    borderBottom: i < timeline.length - 1 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                      paddingTop: "3px",
                    }}
                  >
                    {item.year}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
                        color: "var(--text-primary)",
                        marginBottom: "4px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "var(--accent)",
                        fontWeight: 500,
                        marginBottom: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {item.org}
                    </p>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connect CTA */}
        <section className="section">
          <div className="container">
            <div
              style={{
                background: "var(--accent-light)",
                borderRadius: "var(--radius)",
                padding: "48px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "24px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    color: "var(--text-primary)",
                    marginBottom: "8px",
                  }}
                >
                  Want to connect?
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                  Open to internships, research opportunities, and collaborations.
                </p>
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="https://www.linkedin.com/in/farhaanrashid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="mailto:farhaan.rash@gmail.com"
                  className="btn btn-outline"
                >
                  Email me
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
