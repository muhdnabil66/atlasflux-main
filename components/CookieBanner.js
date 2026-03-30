"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const reject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      id="cookie-banner"
      className="cookie-banner"
      style={{ display: "block" }}
    >
      <div className="cookie-content">
        <p>
          This website uses cookies to enhance your experience. By continuing to
          visit this site, you agree to our{" "}
          <Link href="/privacy">Privacy Policy</Link> and{" "}
          <Link href="/cookie">Cookie Policy</Link>.
        </p>
        <div className="cookie-buttons">
          <button onClick={accept} className="cookie-btn accept">
            Accept
          </button>
          <button onClick={reject} className="cookie-btn reject">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
