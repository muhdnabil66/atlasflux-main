import Link from "next/link";

export default function SystemsPage() {
  return (
    <div className="policy-container">
      <div className="policy-paper">
        <Link href="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Back
        </Link>
        <h1>Systems Update</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "2rem",
            color: "#10b981",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#10b981",
              display: "inline-block",
            }}
          ></span>
          <span style={{ fontWeight: 600 }}>All systems operational</span>
        </div>
        <p>
          <strong>Current Status:</strong> All services are running normally.
        </p>
        <h2>Active Services</h2>
        <ul>
          <li>AI chat platform with 30+ capabilities</li>
          <li>Image generation (Fast, Best, Ultra)</li>
          <li>Music generation (lyrics free, audio premium)</li>
          <li>DeepSearch (web research with source citation)</li>
          <li>Research Mode (advanced analysis)</li>
          <li>Coding Mode (optimized for programming tasks)</li>
          <li>File upload & processing (images, PDF, DOCX, XLSX)</li>
          <li>Daily credit system (30 free credits/day)</li>
          <li>Automatic credit refunds on failure</li>
          <li>Credit logs & transaction history</li>
          <li>Referral program (50/30 bonus credits)</li>
          <li>Gallery with unlimited storage</li>
          <li>PWA support (install as app)</li>
        </ul>
        <h2>Infrastructure</h2>
        <ul>
          <li>Supabase RLS fully implemented</li>
          <li>Neon database optimized</li>
          <li>Webhook integration for user profile sync</li>
          <li>Vercel edge deployment active</li>
          <li>Clerk authentication operational</li>
        </ul>
        <p>
          <strong>Last update:</strong> April 10, 2026
        </p>
        <p style={{ marginTop: "1.5rem", color: "var(--text-muted)" }}>
          For detailed change logs, visit the{" "}
          <a
            href="https://ai.atlasflux.my/updates"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-gold)" }}
          >
            Updates page
          </a>{" "}
          on the AI platform.
        </p>
      </div>
    </div>
  );
}
