import Link from "next/link";

export default function SystemsPage() {
  return (
    <div className="policy-container">
      <div className="policy-text">
        <Link href="/" className="back-btn">
          <i className="fas fa-arrow-left"></i> Back
        </Link>
        <h1>Systems Update</h1>
        <p>
          <strong>Current Status:</strong> All systems operational.
        </p>
        <ul>
          <li>
            AI platform live with 30+ models (Grok 4.20, GPT‑5.4 Pro, Claude 4.6
            Opus, DeepSeek R1, etc.)
          </li>
          <li>Image generation with 3 quality modes (15/30/50 credits)</li>
          <li>DeepSearch (web search) active</li>
          <li>Daily credit system (30 free credits/day) functioning</li>
          <li>Supabase RLS fully implemented</li>
          <li>Neon database optimized</li>
          <li>Webhook integration for user profile sync</li>
        </ul>
        <p>Last update: March 30, 2026</p>
      </div>
    </div>
  );
}
