import Link from "next/link";

export default function FaqPage() {
  return (
    <div className="policy-container">
      <div className="policy-text">
        <Link href="/" className="back-btn">
          <i className="fas fa-arrow-left"></i> Back
        </Link>
        <h1>Frequently Asked Questions</h1>
        <p>
          <strong>Q: How do I get credits?</strong>
          <br />
          A: All registered users receive 30 free credits daily. Signing up
          gives you an extra 15 bonus credits once.
        </p>
        <p>
          <strong>Q: Which AI models are available?</strong>
          <br />
          A: AtlasFlux AI provides access to dozens of models, including Grok
          4.20 Multi‑Agent Beta, GPT‑5.4 Pro, Claude 4.6 Opus, DeepSeek R1,
          Gemini 3.1 Pro, and many free models. The system automatically selects
          the best model for your request.
        </p>
        <p>
          <strong>Q: What is DeepSearch?</strong>
          <br />
          A: DeepSearch performs web searches and reads pages to provide
          up‑to‑date information. It costs 2 extra credits (total 4 per
          message).
        </p>
        <p>
          <strong>Q: Can I generate images?</strong>
          <br />
          A: Yes! Three quality modes: Fast & Cheap (15 credits), Best Quality
          (30 credits), Ultra (50 credits). Ultra supports image‑to‑image
          editing with compatible Flux models.
        </p>
        <p>
          <strong>Q: Can I upload files?</strong>
          <br />
          A: Yes, you can upload images (up to 20MB) and PDFs (up to 50MB). You
          can upload up to 5 images per message. No daily limits—only the
          2‑credit cost per message applies.
        </p>
        <p>
          <strong>Q: How do refunds work?</strong>
          <br />
          A: If all AI models fail to respond due to an error from OpenRouter,
          credits are automatically refunded. DeepSearch is not refundable.
          Image generation refunds happen if all fallback models fail.
        </p>
        <p>
          <strong>Q: Is there a free model?</strong>
          <br />
          A: Yes, many free models are automatically prioritized by the system.
        </p>
        <p>
          <strong>Q: How do I delete my account?</strong>
          <br />
          A: Contact me at support.atlasflux@gmail.com and I’ll assist you.
        </p>
        <p>
          <strong>Q: Can I use the service without signing in?</strong>
          <br />
          A: Yes, guest users can use the service with up to 5 chat sessions
          stored locally. Credits are managed in your browser.
        </p>
      </div>
    </div>
  );
}
