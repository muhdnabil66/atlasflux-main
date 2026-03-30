"use client";

import { useEffect, useRef } from "react";

export default function FlipCard() {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current.classList.add("flipped");
        } else {
          cardRef.current.classList.remove("flipped");
        }
      },
      { threshold: 0.7 },
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flip-card-wrapper">
      <div className="flip-card" ref={cardRef}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src="/assets/atlas.png"
              alt="AtlasFlux Logo"
              className="flip-logo"
            />
            <h3>AtlasFlux</h3>
          </div>
          <div className="flip-card-back">
            <div className="flip-content">
              <h4>About the Developer</h4>
              <p>
                My name is Muhd Nabil, and I’m a self‑taught developer from
                Malaysia. Coming from a non‑technical academic background, I’ve
                always been fascinated by the intersection of software and
                creativity. AtlasFlux is the culmination of that curiosity—a
                personal project built entirely with the help of artificial
                intelligence, modern cloud tools, and countless hours of
                hands‑on experimentation.
              </p>
              <h4>A Solo Developer’s Journey</h4>
              <p>
                This platform is the second major release in the AtlasFlux
                ecosystem, following the launch of AtlasFlux AI
                (ai.atlasflux.my). It represents my passion for AI research and
                my desire to create a professional‑grade playground for frontier
                AI models.
              </p>
              <h4>Why I Built This</h4>
              <p>
                I wanted to prove that a solo developer—without a corporate
                team—can build secure, scalable, and high‑performance web
                platforms. By integrating industry‑standard tools and relying on
                AI for code generation, I’ve focused on architecture, security,
                and user experience. The result is a professional‑grade
                ecosystem that remains completely free for the community.
              </p>
              <h4>The Tech Stack: Powering AtlasFlux</h4>
              <p>
                To achieve professional performance, I integrated the following
                technologies:
              </p>
              <ul>
                <li>
                  <strong>Visual Studio Code:</strong> The world’s most popular
                  source‑code editor, where I refine AI‑generated code and
                  ensure it meets production standards.
                </li>
                <li>
                  <strong>GitHub:</strong> Version control that tracks every
                  change and keeps the project’s history safe.
                </li>
                <li>
                  <strong>Vercel:</strong> The hosting platform that delivers
                  instant global performance with automated deployments.
                </li>
                <li>
                  <strong>Supabase & Neon:</strong> A powerful PostgreSQL
                  backend that handles user data securely and scales on demand.
                </li>
                <li>
                  <strong>Clerk:</strong> Authentication that provides secure,
                  hassle‑free login (Google, email, etc.) without me having to
                  manage passwords myself.
                </li>
                <li>
                  <strong>OpenRouter & Replicate:</strong> Unified gateways that
                  give AtlasFlux access to dozens of advanced AI models (OpenAI,
                  Anthropic, DeepSeek, xAI, Flux, etc.) through a single API.
                </li>
              </ul>
              <h4>The Evolution: From UND AI to AtlasFlux AI</h4>
              <p>
                The journey began on February 26, 2026, with the launch of UND
                AI under Und Performance. Initially, the project was modest,
                offering only three “legacy” models via free API tiers. However,
                the limitations of outdated data soon became apparent. To
                provide the latest 2026 updates and high‑tier intelligence, the
                project underwent a massive rebranding and technical overhaul.
                UND AI evolved into AtlasFlux AI.
              </p>
              <h4>A Symbol of Innovation</h4>
              <p>
                AtlasFlux AI represents a leap into premium territory. By
                transitioning to paid professional tiers on OpenRouter, the
                platform now offers a “Super‑App” of AI, featuring nearly 20
                elite models that users can toggle between, including xAI’s Grok
                4.20 Multi‑Agent Beta, OpenAI’s GPT‑5.4 Pro, Anthropic’s Claude
                4.6 Opus, and DeepSeek R1 (my personal favorite for its
                unexpected and highly nuanced reasoning capabilities). With
                image vision and PDF scanner support, you can analyze pictures
                and extract information from documents seamlessly.
              </p>
              <h4>Ethical AI & Future Vision</h4>
              <p>
                As a solo developer starting without massive capital, I have
                implemented usage limits to prevent credit exhaustion and spam,
                ensuring the platform remains 100% free for the community during
                this testing phase. Building three websites in just two weeks
                proved that AI is the ultimate guide, but it is not a
                replacement for IT professionals. Instead, it is a tool that
                empowers those outside the field to learn and create. This
                journey has also taught me the vital importance of Digital
                Law—understanding why we need Cookies, Terms of Service, and
                Privacy Policies to protect both the user and the creator. In
                the era of AI, the only limit is how we choose to respond to the
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
