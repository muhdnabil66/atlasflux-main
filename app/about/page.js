import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="policy-container">
      <div className="policy-paper">
        <Link href="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
        <h1>About AtlasFlux</h1>
        <h2>The Vision of a AtlasFlux</h2>
        <p>
          AtlasFlux is a personal project born from my passion for software
          development and artificial intelligence. I am Muhammad Nabil, a
          self‑taught developer from Malaysia with a non‑technical academic
          background. This ecosystem represents my journey to explore how modern
          AI, cloud infrastructure, and good engineering practices can come
          together to create something valuable for the community.
        </p>
        <p>
          AtlasFlux is built entirely with the help of AI tools, but every line
          of code is reviewed, secured, and maintained by me. The platform is
          not a commercial entity — it’s a laboratory for learning,
          experimentation, and sharing knowledge.
        </p>
        <h2>The Core Service</h2>
        <ul>
          <li>
            <strong>AtlasFlux AI (ai.atlasflux.my):</strong> A playground for
            advanced AI capabilities. Users get{" "}
            <strong>30 free credits daily</strong> to interact with powerful
            models for chat, web research, code analysis, file processing, image
            generation, and music creation.
          </li>
        </ul>
        <p>
          This project is my way of giving back to the developer community and
          demonstrating that with the right tools and dedication, even a solo
          developer can build something that rivals larger teams.
        </p>
        <p style={{ marginTop: "2rem", fontStyle: "italic" }}>
          — Muhammad Nabil, AtlasFlux
        </p>
      </div>
    </div>
  );
}
