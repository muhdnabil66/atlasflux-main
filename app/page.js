import PricingCards from "@/components/PricingCards";
import FlipCard from "@/components/FlipCard";
import RotatingText from "@/components/RotatingText";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <h1 className="hero-title animate-on-scroll">
            <span className="gradient-text">AtlasFlux</span>
            <br />
            <RotatingText />
          </h1>
          <p className="hero-subtitle animate-on-scroll">
            Experience the most advanced AI models for free: Grok 4.20
            Multi‑Agent Beta, GPT‑5.4 Pro, Claude 4.6 Opus, DeepSeek R1, image
            vision, PDF scanner, and more. Use your 30 daily credits for chat,
            DeepSearch (4⚡), or image generation (15/30/50⚡).
          </p>
          <div className="hero-buttons animate-on-scroll">
            <a
              href="https://ai.atlasflux.my"
              className="btn btn-primary"
              target="_blank"
            >
              Explore AI
            </a>
          </div>
        </div>
        <div className="hero-bg-pattern"></div>
      </section>

      {/* What We Offer */}
      <section className="offers">
        <div className="container">
          <h2 className="section-title animate-on-scroll">What We Offer</h2>
          <div className="cards-grid">
            <div className="card animate-on-scroll slide-left">
              <div className="card-icon-wrapper">
                <i className="fas fa-robot card-icon"></i>
              </div>
              <h3>Artificial Intelligence</h3>
              <p>
                Harness the power of Grok 4.20 Multi‑Agent Beta, GPT‑5.4 Pro,
                Claude 4.6 Opus, DeepSeek R1, and 30+ other elite models. Upload
                images for vision‑based analysis or extract text from PDFs.
                <strong>Image generation</strong> in 3 quality modes: Fast &
                Cheap (15⚡), Best Quality (30⚡), Ultra (50⚡).{" "}
                <strong>DeepSearch</strong> (web search) costs 4⚡ per message.
                All users get 30 daily credits – no subscription.
              </p>
              <a
                href="https://ai.atlasflux.my"
                className="card-link"
                target="_blank"
              >
                Learn more <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Pricing Plans</h2>
          <p className="section-subtitle animate-on-scroll">
            One‑time purchases, no subscription. Credits never expire.
          </p>
          <PricingCards />
          <p className="pricing-note">
            All prices in Malaysian Ringgit (MYR). Purchases are non‑refundable.{" "}
            <a href="https://ai.atlasflux.my/legal" target="_blank">
              Terms apply
            </a>
            .
          </p>
        </div>
      </section>

      {/* Flip Card Story */}
      <section className="flip-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">
            The Story Behind AtlasFlux
          </h2>
          <FlipCard />
        </div>
      </section>

      {/* Policies & Resources */}
      <section className="policies">
        <div className="container">
          <h2 className="section-title animate-on-scroll">
            Policies & Resources
          </h2>
          <div className="policies-grid">
            <div className="policy-card animate-on-scroll">
              <i className="fas fa-gavel policy-icon"></i>
              <h3>Legal & Compliance</h3>
              <p>Our commitment to regulatory standards.</p>
              <a href="/legal" className="policy-link">
                Read more
              </a>
            </div>
            <div className="policy-card animate-on-scroll">
              <i className="fas fa-question-circle policy-icon"></i>
              <h3>FAQ</h3>
              <p>Frequently asked questions.</p>
              <a href="/faq" className="policy-link">
                Read more
              </a>
            </div>
            <div className="policy-card animate-on-scroll">
              <i className="fas fa-cookie-bite policy-icon"></i>
              <h3>Cookie Policy</h3>
              <p>How we use cookies.</p>
              <a href="/cookie" className="policy-link">
                Read more
              </a>
            </div>
            <div className="policy-card animate-on-scroll">
              <i className="fas fa-sync-alt policy-icon"></i>
              <h3>Systems Update</h3>
              <p>Latest updates and maintenance.</p>
              <a href="/systems" className="policy-link">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
