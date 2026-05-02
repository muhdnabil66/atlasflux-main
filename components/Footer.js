export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 text-sm text-neutral-400">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Grid lajur – 4 kolum pada desktop, 2 pada mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Kolum 1: Tools */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-xs">
              AI Tools
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://ai.atlasflux.my/tools/ai-image"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  AI Image Generator
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/tools/video-generation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Video Generation
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/tools/music"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  AI Music
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/tools/voice-cloning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Voice Cloning
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/tools/audio-separation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Audio Separation
                </a>
              </li>
            </ul>
          </div>

          {/* Kolum 2: More Tools */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-xs">
              More Tools
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://ai.atlasflux.my/tools/face-restoration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Face Restoration
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/tools/remove-background"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Remove Background
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/tools/upscaler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Upscaler
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/tools/image-to-3d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Image to 3D
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/tools/image-prompt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Prompt Creator
                </a>
              </li>
            </ul>
          </div>

          {/* Kolum 3: Platform */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-xs">
              Platform
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://ai.atlasflux.my/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  AI Chat
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  All Tools
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/stats"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Analytics
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/explore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Explore Models
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/updates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Kolum 4: Legal & Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-xs">
              Legal & Help
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://ai.atlasflux.my/legal#terms-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/legal#privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/legal#refund-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/legal#ban-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Ban Policy
                </a>
              </li>
              <li>
                <a
                  href="https://ai.atlasflux.my/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="mailto:support.atlasflux@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Email Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Garis pemisah + nama domain + hak cipta */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-neutral-500">
          <div className="flex flex-wrap gap-1.5 items-center">
            <span>© {currentYear} AtlasFlux.</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">
              AtlasFlux AI is an independent aggregator of AI models.
            </span>
          </div>
          <div className="flex gap-4">
            <a
              href="https://ai.atlasflux.my"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              ai.atlasflux.my
            </a>
            <a
              href="mailto:support.atlasflux@gmail.com"
              className="hover:text-white transition-colors"
            >
              support.atlasflux@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
