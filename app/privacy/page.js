import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="policy-container">
      <div className="policy-paper">
        <Link href="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Back
        </Link>
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last updated:</strong> April 10, 2026
        </p>
        <h2>1. Data Collection</h2>
        <p>I collect only the data necessary to provide the service:</p>
        <ul>
          <li>
            <strong>Account information:</strong> Email address, username
            (provided via Clerk).
          </li>
          <li>
            <strong>Usage data:</strong> AI prompts, responses, credit logs,
            chat sessions, generated images, generated music tracks.
          </li>
          <li>
            <strong>Technical data:</strong> IP address, browser type (for
            analytics and security).
          </li>
        </ul>
        <h2>2. How I Use Your Data</h2>
        <p>
          Your data is used to operate the service, improve the platform, and
          prevent abuse. I do not sell or rent your personal information to
          third parties. Anonymized data may be used for model training or
          performance analysis.
        </p>
        <h2>3. Third‑Party Services</h2>
        <p>AtlasFlux relies on trusted third‑party providers:</p>
        <ul>
          <li>
            <strong>Clerk:</strong> Handles authentication.
          </li>
          <li>
            <strong>Supabase & Neon:</strong> Store user profiles, chat history,
            credit logs, and generated media.
          </li>
          <li>
            <strong>Vercel:</strong> Hosts the web applications.
          </li>
          <li>
            <strong>OpenRouter & Replicate:</strong> Process AI requests.
          </li>
        </ul>
        <h2>4. Data Retention & Your Rights</h2>
        <p>
          Your data is retained as long as your account is active. You may
          request deletion of your account and all associated data by contacting
          me at support.atlasflux@gmail.com. I will process such requests within
          a reasonable time.
        </p>
        <h2>5. Security</h2>
        <p>
          I implement industry‑standard security measures (encryption, access
          controls) to protect your data. However, no system is 100% secure.
        </p>
      </div>
    </div>
  );
}
