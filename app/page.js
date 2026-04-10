import PricingCards from "@/components/PricingCards";
import FeatureCards from "@/components/FeatureCards";
import Link from "next/link";
import RotatingIcons from "@/components/RotatingIcons";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-container">
          <div className="hero-content animate-on-scroll visible">
            <span className="hero-badge">✦ Premium AI Ecosystem</span>
            <h1 className="hero-title">
              Intelligence <br />
              <span className="gradient-text">without limits</span>
            </h1>
            <p className="hero-subtitle">
              30 free daily credits. Web research, intelligent coding, file
              analysis, and a creative studio — all in one transparent platform.
            </p>
            <div className="hero-actions">
              <a
                href="https://ai.atlasflux.my"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Exploring{" "}
                <i
                  className="fas fa-arrow-right"
                  style={{ marginLeft: "8px" }}
                ></i>
              </a>
              <Link href="/#features" className="btn btn-secondary">
                Discover Features
              </Link>
            </div>
          </div>
          <div className="hero-visual animate-on-scroll">
            <RotatingIcons />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">
              Capabilities that <span className="gradient-text">elevate</span>
            </h2>
            <p className="section-subtitle">
              No model names. Just powerful features that work.
            </p>
          </div>
          <FeatureCards />
        </div>
      </section>

      {/* AI Chat Section */}
      <section
        className="section"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">
              Intelligent <span className="gradient-text">Conversations</span>
            </h2>
            <p className="section-subtitle">
              Chat with advanced AI, attach files, and get accurate responses.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3 className="feature-title">Smart Chat</h3>
              <p className="feature-desc">
                Send messages with automatic model selection. The system picks
                the best AI for your query, prioritizing free models first.
              </p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-paperclip"></i>
              </div>
              <h3 className="feature-title">File Support</h3>
              <p className="feature-desc">
                Upload images (vision), PDFs, Word documents, Excel sheets, and
                text files. Content is extracted and sent to the AI.
              </p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="feature-title">Coding Mode</h3>
              <p className="feature-desc">
                Optimized for programming tasks. Detects coding keywords and
                uses high-performance models (10 credits per message).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">
              Deep <span className="gradient-text">Research</span>
            </h2>
            <p className="section-subtitle">
              Go beyond basic chat with web search and advanced analysis.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="feature-title">DeepSearch</h3>
              <p className="feature-desc">
                Performs web searches and reads top pages for up-to-date
                answers. Costs 2 extra credits (total 4). Sources are displayed
                with links and favicons.
              </p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-microscope"></i>
              </div>
              <h3 className="feature-title">Research Mode</h3>
              <p className="feature-desc">
                Advanced web search with deeper analysis, reading up to 10
                sources. Costs 8 credits per message. Ideal for complex topics.
              </p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-undo-alt"></i>
              </div>
              <h3 className="feature-title">Automatic Refunds</h3>
              <p className="feature-desc">
                If search fails (timeout or no results), extra credits are
                automatically refunded. Transparent and fair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Credit Economy */}
      <section
        className="section"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">
              Transparent <span className="gradient-text">credit economy</span>
            </h2>
            <p className="section-subtitle">
              Fair, simple, and generous. No subscriptions, no hidden fees.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3 className="feature-title">30 Daily Credits</h3>
              <p className="feature-desc">
                Reset every day at midnight Malaysia Time. Unused credits don't
                roll over — but you'll always have a fresh start.
              </p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-coins"></i>
              </div>
              <h3 className="feature-title">Bonus Credits</h3>
              <p className="feature-desc">
                Earn through referrals, sign-up, or purchase packs. Bonus
                credits never expire and are used after daily credits.
              </p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-undo-alt"></i>
              </div>
              <h3 className="feature-title">Automatic Refunds</h3>
              <p className="feature-desc">
                If a generation fails due to technical issues, your credits are
                automatically returned. Full transparency in your credit logs.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "4rem", textAlign: "center" }}>
            <Link href="/#pricing" className="btn btn-secondary">
              View Credit Costs{" "}
              <i
                className="fas fa-arrow-down"
                style={{ marginLeft: "8px" }}
              ></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Creative Studio Section */}
      <section id="studio" className="section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">
              Creative <span className="gradient-text">studio</span>
            </h2>
            <p className="section-subtitle">
              Generate images and music with precision control.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-image"></i>
              </div>
              <h3 className="feature-title">Image Generation</h3>
              <p className="feature-desc">
                Three quality tiers to match your needs: Fast drafts, detailed
                professional outputs, and ultra‑high‑fidelity with aspect ratio
                control.
              </p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-arrows-alt"></i>
              </div>
              <h3 className="feature-title">Image‑to‑Image</h3>
              <p className="feature-desc">
                Upload an existing image as a starting point. The AI will edit,
                transform, or enhance it based on your prompt.
              </p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-music"></i>
              </div>
              <h3 className="feature-title">Music Generator</h3>
              <p className="feature-desc">
                Create original songs. Lyrics generation is always free. Turn
                them into full audio tracks with premium sound models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="section"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">
              Simple, <span className="gradient-text">one‑time</span> packs
            </h2>
            <p className="section-subtitle">
              No subscriptions. Credits and bundles never expire.
            </p>
          </div>
          <PricingCards />
          <p
            style={{
              textAlign: "center",
              marginTop: "2rem",
              color: "var(--text-muted)",
            }}
          >
            All prices in Malaysian Ringgit (MYR). Purchases are non‑refundable.{" "}
            <Link href="/legal" style={{ color: "var(--accent-gold)" }}>
              Terms apply
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">
              Built on <span className="gradient-text">trust</span>
            </h2>
          </div>
          <div className="features-grid">
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="feature-title">Privacy First</h3>
              <p className="feature-desc">
                Your data is stored securely with row‑level security. Never sold
                to third parties.
              </p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3 className="feature-title">Install as App</h3>
              <p className="feature-desc">
                AtlasFlux is a PWA. Install it on your device for a native
                app‑like experience.
              </p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3 className="feature-title">Clear Policies</h3>
              <p className="feature-desc">
                Transparent terms, privacy, and refund policies. Read them in
                plain language.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
