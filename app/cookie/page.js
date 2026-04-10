import Link from "next/link";

export default function CookiePage() {
  return (
    <div className="policy-container">
      <div className="policy-paper">
        <Link href="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Back
        </Link>
        <h1>Cookie Policy</h1>
        <p>
          <strong>Last updated:</strong> April 10, 2026
        </p>
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They are widely used to make websites work more efficiently
          and provide information to the site owners.
        </p>
        <h2>How AtlasFlux Uses Cookies</h2>
        <p>I use cookies for the following purposes:</p>
        <ul>
          <li>
            <strong>Essential cookies:</strong> Necessary for the website to
            function properly (e.g., maintaining your session, remembering
            cookie preferences).
          </li>
          <li>
            <strong>Analytics cookies:</strong> To understand how visitors
            interact with the site and improve the experience.
          </li>
          <li>
            <strong>Functional cookies:</strong> To remember your preferences
            (e.g., language selection).
          </li>
        </ul>
        <h2>Third‑Party Cookies</h2>
        <p>
          Some third‑party services I use (e.g., Clerk for authentication,
          Vercel for hosting) may set their own cookies. Please refer to their
          respective privacy policies for more information.
        </p>
        <h2>Managing Cookies</h2>
        <p>
          You can control and delete cookies through your browser settings. Note
          that disabling essential cookies may affect the functionality of the
          site.
        </p>
        <h2>Consent</h2>
        <p>
          By using AtlasFlux, you consent to the use of cookies as described in
          this policy. You can change your preference at any time using the
          cookie banner.
        </p>
      </div>
    </div>
  );
}
