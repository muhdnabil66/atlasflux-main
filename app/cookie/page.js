import Link from "next/link";

export default function CookiePage() {
  return (
    <div className="policy-container">
      <div className="policy-text">
        <Link href="/" className="back-btn">
          <i className="fas fa-arrow-left"></i> Back
        </Link>
        <h1>Cookie Policy</h1>
        <h2>1. Use of Cookies</h2>
        <p>
          AtlasFlux uses cookies to enhance your experience, maintain session
          state, and remember preferences. Cookies are small text files stored
          on your device by your browser.
        </p>
        <h2>2. Types of Cookies</h2>
        <ul>
          <li>
            <strong>Necessary Cookies:</strong> Essential for authentication
            (via Clerk) and site security.
          </li>
          <li>
            <strong>Functional Cookies:</strong> Remember your preferences, such
            as your remaining daily credits.
          </li>
          <li>
            <strong>Analytical Cookies:</strong> Help me understand how the
            platform is used to improve performance.
          </li>
        </ul>
        <h2>3. Managing Cookies</h2>
        <p>
          You can disable cookies through your browser settings. However, doing
          so may prevent you from logging in and accessing core features.
        </p>
      </div>
    </div>
  );
}
