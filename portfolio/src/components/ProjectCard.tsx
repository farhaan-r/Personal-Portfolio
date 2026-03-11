"use client";
import Image from "next/image";
import { Project } from "../data/projects";

interface Props {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: Props) {
  return (
    <div
      className={`fade-up fade-up-${index + 1}`}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-lg)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-strong)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
      }}
    >
      {/* Single image */}
      {project.image && !project.comparison && (
        <div style={{ position: "relative", width: "100%", height: 220, overflow: "hidden", background: "var(--accent-light)" }}>
          <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} />
        </div>
      )}

      {/* Side-by-side comparison */}
      {project.comparison && (
        <div style={{ width: "100%", background: "#0f0f0f" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", height: 220 }}>
            {/* Before */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              <Image
                src={project.comparison.before}
                alt={project.comparison.beforeLabel ?? "Before"}
                fill
                style={{ objectFit: "cover" }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  background: "rgba(0,0,0,0.65)",
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "3px 8px",
                  borderRadius: "4px",
                  backdropFilter: "blur(4px)",
                }}
              >
                {project.comparison.beforeLabel ?? "Before"}
              </span>
            </div>

            {/* Divider */}
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "rgba(255,255,255,0.3)", zIndex: 2, transform: "translateX(-50%)", pointerEvents: "none" }} />

            {/* After */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              <Image
                src={project.comparison.after}
                alt={project.comparison.afterLabel ?? "After"}
                fill
                style={{ objectFit: "cover" }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  background: "rgba(26,86,219,0.8)",
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "3px 8px",
                  borderRadius: "4px",
                  backdropFilter: "blur(4px)",
                }}
              >
                {project.comparison.afterLabel ?? "After"}
              </span>
            </div>
          </div>

          {/* Caption bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              background: "#0f0f0f",
            }}
          >
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em" }}>
              ← Original
            </span>
            <span style={{ width: 32, height: 1, background: "rgba(255,255,255,0.2)", display: "inline-block" }} />
            <span style={{ fontSize: "11px", color: "rgba(26,86,219,0.9)", letterSpacing: "0.06em", fontWeight: 600 }}>
              Generated →
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "14px", flex: 1 }}>

        {/* Title row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.3rem",
              lineHeight: 1.2,
              color: "var(--text-primary)",
            }}
          >
            {project.title}
          </h3>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "12px",
                color: "var(--text-muted)",
                whiteSpace: "nowrap",
                padding: "4px 10px",
                border: "1px solid var(--border)",
                borderRadius: "100px",
                transition: "all 0.2s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--text-primary)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
              }}
            >
              GitHub ↗
            </a>
          )}
        </div>

        {/* Description */}
        <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
          {project.longDescription}
        </p>

        {/* Highlights */}
        <ul style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
          {project.highlights.map((h) => (
            <li key={h} style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto", paddingTop: "8px" }}>
          {project.tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
