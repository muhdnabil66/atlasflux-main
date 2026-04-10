import Link from "next/link";

export default function StoryPage() {
  return (
    <div className="story-container">
      <div className="story-card">
        <Link href="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
        <div className="story-header">
          <div className="story-avatar">MN</div>
          <h1 className="story-title">The AtlasFlux Story</h1>
        </div>
        <div className="story-content">
          <p>
            My name is <strong>Muhammad Nabil</strong>, and I’m a self‑taught
            developer from Malaysia. Coming from a non‑technical academic
            background, I’ve always been fascinated by the intersection of
            software and creativity. AtlasFlux is the culmination of that
            curiosity — a personal project built entirely with the help of
            artificial intelligence, modern cloud tools, and countless hours of
            hands‑on experimentation.
          </p>
          <h3>AtlasFlux’s AI Journey</h3>
          <p>
            This platform is the second major release in the AtlasFlux
            ecosystem, following the launch of AtlasFlux AI (ai.atlasflux.my).
            It represents my passion for AI research and my desire to create a
            professional‑grade playground for frontier AI capabilities — without
            the complexity or hype.
          </p>
          <h3>Why I Built This</h3>
          <p>
            I wanted to prove that a solo developer — without a corporate team —
            can build secure, scalable, and high‑performance web platforms. By
            integrating industry‑standard tools and relying on AI for code
            generation, I’ve focused on architecture, security, and user
            experience. The result is a premium ecosystem that remains
            accessible and transparent.
          </p>
          <h3>The Tech Stack</h3>
          <p>To achieve professional performance, I integrated:</p>
          <ul style={{ paddingLeft: "1.5rem", color: "var(--text-secondary)" }}>
            <li>
              <strong>Visual Studio Code</strong> – where I refine AI‑generated
              code.
            </li>
            <li>
              <strong>GitHub</strong> – version control and collaboration.
            </li>
            <li>
              <strong>Vercel</strong> – instant global deployments.
            </li>
            <li>
              <strong>Supabase & Neon</strong> – secure PostgreSQL backend.
            </li>
            <li>
              <strong>Clerk</strong> – hassle‑free authentication.
            </li>
            <li>
              <strong>OpenRouter & Replicate</strong> – unified AI gateways.
            </li>
          </ul>
          <h3>The Evolution</h3>
          <p>
            The journey began on February 26, 2026, with a modest AI project.
            After recognizing the limitations of outdated data, I rebranded and
            overhauled the entire stack. AtlasFlux AI was born — offering
            advanced capabilities with a credit system that puts users first.
          </p>
          <h3>Ethical AI & Future Vision</h3>
          <p>
            As a solo developer starting without massive capital, I’ve
            implemented usage limits to prevent abuse while keeping the platform
            free for the community during this testing phase. Building this
            ecosystem taught me the vital importance of digital law — why we
            need cookies, terms of service, and privacy policies to protect both
            the user and the creator.
          </p>
          <p>
            In the era of AI, the only limit is how we choose to respond to the
            technology. AtlasFlux is my response.
          </p>
          <p style={{ marginTop: "2rem", fontStyle: "italic" }}>
            — Muhammad Nabil, AtlasFlux
          </p>
        </div>
      </div>
    </div>
  );
}
