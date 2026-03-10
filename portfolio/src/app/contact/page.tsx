"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


const links = [
  {
    label: "Email",
    value: "farhaan.rash@gmail.com",
    href: "mailto:farhaan.rash@gmail.com",
    desc: "Best for internship enquiries, collaborations, or anything else.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/farhaanrashid",
    href: "https://www.linkedin.com/in/farhaanrashid/",
    desc: "Connect professionally — I check this regularly.",
  },
  {
    label: "GitHub",
    value: "github.com/farhaan-r",
    href: "https://github.com/farhaan-r",
    desc: "Browse my code, repos, and experiments.",
  },
];

export default function Contact() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "var(--nav-height)" }}>

        {/* Header */}
        <section style={{ padding: "80px 0 64px", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <p className="section-label fade-up">Contact</p>
            <h1 className="fade-up fade-up-1 section-title" style={{ maxWidth: "480px" }}>
              Let's get in touch
            </h1>
            <p className="fade-up fade-up-2 section-subtitle">
              I'm open to internships, research roles, and interesting projects. Feel free
              to reach out through any of the channels below.
            </p>
          </div>
        </section>

        {/* Contact cards */}
        <section className="section">
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                maxWidth: "900px",
              }}
            >
              {links.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`fade-up fade-up-${i + 1}`}
                  style={{
                    display: "block",
                    padding: "32px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "var(--shadow-md)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-strong)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      marginBottom: "8px",
                    }}
                  >
                    {link.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.05rem",
                      color: "var(--text-primary)",
                      marginBottom: "10px",
                      wordBreak: "break-all",
                    }}
                  >
                    {link.value}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                    {link.desc}
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: "16px",
                      fontSize: "13px",
                      color: "var(--accent)",
                      fontWeight: 500,
                    }}
                  >
                    {link.href.startsWith("mailto") ? "Send email →" : "Open →"}
                  </span>
                </a>
              ))}
            </div>

            {/* Availability note */}
            <div
              className="fade-up fade-up-4"
              style={{
                marginTop: "48px",
                padding: "24px 32px",
                background: "var(--accent-light)",
                borderRadius: "var(--radius)",
                maxWidth: "540px",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>👋</span>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                  }}
                >
                  Currently available
                </p>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  Open to internships, part-time roles, and research collaborations.
                  Based in Australia.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
