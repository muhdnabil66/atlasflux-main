import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="policy-container">
      <div className="policy-paper">
        <Link href="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Back
        </Link>
        <h1>Terms of Service</h1>
        <p>
          <strong>Last updated:</strong> April 10, 2026
        </p>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing atlasflux.my or its subdomain (ai.atlasflux.my), you
          agree to be bound by these Terms of Service. These terms apply to all
          users of the AtlasFlux ecosystem.
        </p>
        <h2>2. Description of Service</h2>
        <p>
          AtlasFlux is a personal project that provides access to AI
          capabilities via a Daily Credit System: registered users receive 30
          free credits every 24 hours. Each standard chat message costs 2
          credits; DeepSearch (web research) costs 4 credits. Image generation
          costs 15, 30, or 50 credits depending on quality mode. Credits are
          non‑transferable and have no monetary value.
        </p>
        <h2>3. User Conduct and Account Security</h2>
        <p>
          You are responsible for maintaining the security of your account
          (authentication provided by Clerk). You agree not to misuse the
          service — this includes attempting to bypass credit limits,
          reverse‑engineer API calls, or use the platform for illegal
          activities. I reserve the right to suspend or terminate any account
          that violates these rules.
        </p>
        <h2>4. Service Availability & Liability</h2>
        <p>
          As a solo‑developed project, AtlasFlux does not guarantee 100% uptime.
          Services may be interrupted for maintenance, system updates, or
          outages of third‑party providers. I am not liable for any direct or
          indirect damages arising from your use of the platform. AI outputs may
          contain errors; you are responsible for verifying critical
          information.
        </p>
        <h2>5. Intellectual Property</h2>
        <p>
          The original code, UI design, and the “AtlasFlux” brand are owned by
          me, Muhammad Nabil. Users retain ownership of the content they input.
          The AI outputs are subject to the license terms of the respective
          model providers.
        </p>
        <h2>6. Changes to Terms</h2>
        <p>
          I may update these terms from time to time. Continued use of the
          platform after changes constitutes acceptance of the new terms.
        </p>
        <h2>7. Governing Law</h2>
        <p>These terms are governed by the laws of Malaysia.</p>
      </div>
    </div>
  );
}
