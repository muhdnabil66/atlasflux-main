import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="policy-container">
      <div className="policy-text">
        <Link href="/" className="back-btn">
          <i className="fas fa-arrow-left"></i> Back
        </Link>
        <h1>About AtlasFlux</h1>
        <h2>The Vision of a Solo Developer</h2>
        <p>
          AtlasFlux is a personal project born from my passion for software
          development and artificial intelligence. I am Muhd Nabil, a
          self‑taught developer from Malaysia with a non‑technical academic
          background. This ecosystem represents my journey to explore how modern
          AI, cloud infrastructure, and good engineering practices can come
          together to create something valuable for the community.
        </p>
        <p>
          AtlasFlux is built entirely with the help of AI tools, but every line
          of code is reviewed, secured, and maintained by me. The platform is
          not a commercial entity—it’s a laboratory for learning,
          experimentation, and sharing knowledge.
        </p>
        <h2>The Core Service</h2>
        <ul>
          <li>
            <strong>AtlasFlux AI (ai.atlasflux.my):</strong> A playground for
            frontier AI models. Users get <strong>30 free credits daily</strong>{" "}
            to interact with models like Grok 4.20 Multi‑Agent Beta, GPT‑5.4
            Pro, Claude 4.6 Opus, DeepSeek R1, and many more.{" "}
            <strong>Image generation</strong> is available in three modes: Fast
            & Cheap (15 credits), Best Quality (30 credits), Ultra (50 credits).{" "}
            <strong>DeepSearch</strong> (web search + page reading) costs 4
            credits per message. You can upload images (vision) and PDFs (text
            extraction).
          </li>
        </ul>
        <p>
          This project is my way of giving back to the developer community and
          demonstrating that with the right tools and dedication, even a solo
          developer can build something that rivals larger teams.
        </p>
      </div>
    </div>
  );
}
