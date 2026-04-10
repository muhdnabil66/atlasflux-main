import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img
              src="/assets/atlas.png"
              alt="AtlasFlux"
              className="footer-logo-img"
            />
            <span>AtlasFlux</span>
          </div>
          <div className="footer-status">
            <span
              className="status-dot"
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#10b981",
                display: "inline-block",
              }}
            ></span>
            <Link href="/systems">All systems operational</Link>
          </div>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.9rem",
              marginTop: "0.5rem",
            }}
          >
            Premium AI ecosystem crafted by a AtlasFlux.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Platform</h4>
            <ul>
              <li>
                <Link href="/#features">Features</Link>
              </li>
              <li>
                <Link href="/#pricing">Pricing</Link>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my"
                  target="_blank"
                  rel="noopener"
                >
                  AI App
                </a>
              </li>
              <li>
                <Link href="/story">Our Story</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>
                <a
                  href="https://ai.atlasflux.my/docs"
                  target="_blank"
                  rel="noopener"
                >
                  Documentation
                </a>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/updates">Updates</Link>{" "}
              </li>
              <li>
                <Link href="/systems">System Status</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/disclaimer">Disclaimer</Link>
              </li>
              <li>
                <Link href="/cookie">Cookies</Link>
              </li>
              <li>
                <Link href="/legal">Compliance</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "2rem" }}>
        <div className="social-links">
          <a
            href="https://github.com/muhdnabil66"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/atlasflux.my?igsh=andvb3NsNDZ1eHV5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.tiktok.com/@atlasflux.my?_r=1&_t=ZS-95QEU1QGA1k"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} AtlasFlux. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
