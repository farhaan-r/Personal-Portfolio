import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "40px 0",
        marginTop: "auto",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            color: "var(--text-secondary)",
          }}
        >
          Farhaan Rashid
        </span>

        <div style={{ display: "flex", gap: "24px" }}>
          <a
            href="https://github.com/farhaan-r"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "13px", color: "var(--text-muted)" }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/farhaanrashid/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "13px", color: "var(--text-muted)" }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:farhaan.rash@gmail.com"
            style={{ fontSize: "13px", color: "var(--text-muted)" }}
          >
            Email
          </a>
        </div>

        <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} — Built with Next.js
        </span>
      </div>
    </footer>
  );
}
