import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <img
            src="/assets/atlas.png"
            alt="AtlasFlux"
            className="footer-logo-img"
          />
          <span>AtlasFlux</span>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="https://ai.atlasflux.my" target="_blank">
                  AI
                </a>
              </li>
              <li>
                <Link href="/about">About</Link>
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
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/disclaimer">Disclaimer</Link>
              </li>
              <li>
                <Link href="/cookie">Cookie Policy</Link>
              </li>
              <li>
                <Link href="/legal">Legal & Compliance</Link>
              </li>
              <li>
                <Link href="/systems">Systems Update</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/atlasflux.my" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://atlasflux.my" target="_blank">
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 AtlasFlux. All rights reserved.</p>
      </div>
    </footer>
  );
}
