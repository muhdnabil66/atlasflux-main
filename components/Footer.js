// components/Footer.js
import Link from "next/link";

// Custom icons yang takde dalam lucide-react
const XIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const HuggingFaceIcon = ({ size = 16 }) => (
  <span
    style={{
      fontSize: size,
      lineHeight: 1,
      filter: "grayscale(100%) brightness(1.5)", // Match your monochrome theme
    }}
  >
    🤗
  </span>
);

const TikTokIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const companyName = "RAINSPEED LABS SOLUTIONS";
  const companyRegNo = "202603148143 / 003857582-W";

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/rainspeedlabs",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/rainspeedlabs",
      icon: <XIcon size={16} />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/rainspeedlabs",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@rainspeedlabs",
      icon: <TikTokIcon size={16} />,
    },
    {
      name: "Hugging Face",
      href: "https://huggingface.co/rainspeed",
      icon: <HuggingFaceIcon size={16} />,
    },
  ];

  return (
    <footer className="border-t-2 border-[#2a2a2a] bg-[#0c0c0c] lg:pl-20">
      <div className="px-6 lg:px-16 py-16 lg:py-24">
        {/* Top section — big statement */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight max-w-2xl mb-6">
            Built by humans,{" "}
            <span className="text-[#6b6560]">powered by machines.</span>
          </h2>
          <p className="text-[#6b6560] max-w-md">
            AtlasFlux is a product of {companyName}.
          </p>
        </div>

        {/* Grid — asymmetric, editorial */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Col 1 */}
          <div>
            <h4 className="font-mono text-xs text-[#6b6560] uppercase tracking-widest mb-6">
              Platform
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://ai.atlasflux.my/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#e8e4dc] hover:text-[#00D4FF] transition-colors strike-hover"
                >
                  AI Chat
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#e8e4dc] hover:text-[#00D4FF] transition-colors strike-hover"
                >
                  All Tools
                </a>
              </li>
              <li>
                <Link
                  href="/models"
                  className="text-sm text-[#e8e4dc] hover:text-[#00D4FF] transition-colors strike-hover"
                >
                  AI Models
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-[#e8e4dc] hover:text-[#00D4FF] transition-colors strike-hover"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/updates"
                  className="text-sm text-[#e8e4dc] hover:text-[#00D4FF] transition-colors strike-hover"
                >
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-mono text-xs text-[#6b6560] uppercase tracking-widest mb-6">
              Tools
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://ai.atlasflux.my/tools/ai-image"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#e8e4dc] hover:text-[#00D4FF] transition-colors strike-hover"
                >
                  Image Generator
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/tools/video-generation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#e8e4dc] hover:text-[#00D4FF] transition-colors strike-hover"
                >
                  Video Generation
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/tools/music"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#e8e4dc] hover:text-[#00D4FF] transition-colors strike-hover"
                >
                  AI Music
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/tools/voice-cloning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#e8e4dc] hover:text-[#00D4FF] transition-colors strike-hover"
                >
                  Voice Cloning
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/tools/upscaler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#e8e4dc] hover:text-[#00D4FF] transition-colors strike-hover"
                >
                  Upscaler
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-mono text-xs text-[#6b6560] uppercase tracking-widest mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://ai.atlasflux.my/legal#terms-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#e8e4dc] hover:text-[#00D4FF] transition-colors strike-hover"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/legal#privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#e8e4dc] hover:text-[#00D4FF] transition-colors strike-hover"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/legal#refund-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#e8e4dc] hover:text-[#00D4FF] transition-colors strike-hover"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#e8e4dc] hover:text-[#00D4FF] transition-colors strike-hover"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — raw info block + social */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-mono text-xs text-[#6b6560] uppercase tracking-widest mb-6">
              Legal
            </h4>
            <div className="space-y-4 text-sm text-[#6b6560] mb-8">
              <p>
                {companyName}
                <br />
                {companyRegNo}
              </p>
            </div>

            {/* Social Links — RAINSPEED LABS */}
            <div>
              <h5 className="font-mono text-[10px] text-[#6b6560] uppercase tracking-widest mb-4">
                Follow RAINSPEED
              </h5>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center text-[#6b6560] hover:text-[#00D4FF] hover:border-[#00D4FF] transition-all duration-200 hover:-translate-y-0.5"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar — raw, utilitarian */}
        <div className="border-t-2 border-[#2a2a2a] pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div>
            <p className="text-sm text-[#6b6560]">
              &copy; {currentYear} AtlasFlux AI. All rights reserved.
            </p>
            <p className="text-neutral-600 mt-1 text-xs">
              Operated by {companyName} ({companyRegNo})
            </p>
          </div>

          {/* Big logo mark */}
          <div className="text-right">
            <span className="text-6xl lg:text-8xl font-bold text-[#1a1a1a] select-none">
              AF
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
