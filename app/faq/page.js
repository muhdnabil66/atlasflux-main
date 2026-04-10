import Link from "next/link";

export default function FaqPage() {
  return (
    <div className="policy-container">
      <div className="policy-paper">
        <Link href="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Back
        </Link>
        <h1>Frequently Asked Questions</h1>

        <div style={{ marginTop: "2rem" }}>
          <p>
            <strong>Q: How do I get more credits?</strong>
          </p>
          <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
            A: Wait for daily reset (30 free), use referral (50 for you, 30 for
            friend), or purchase credit packs from the Purchase page.
          </p>

          <p>
            <strong>Q: Can I use the service without signing in?</strong>
          </p>
          <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
            A: Yes, guest mode works. Your data is stored in your browser.
            Maximum 5 chat sessions. Some premium features require sign‑in.
          </p>

          <p>
            <strong>Q: Why did my image generation fail?</strong>
          </p>
          <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
            A: It could be a temporary issue with the provider. Credits are
            automatically refunded. Try again later or choose a different
            quality mode.
          </p>

          <p>
            <strong>Q: Are my chat messages private?</strong>
          </p>
          <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
            A: Yes, messages are stored in Supabase with Row Level Security.
            Only you can access your own data. The developer may view logs for
            debugging but does not share them.
          </p>

          <p>
            <strong>Q: How do I delete my account?</strong>
          </p>
          <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
            A: Contact the developer via the contact form or email
            support.atlasflux@gmail.com. Account deletion will remove all your
            data.
          </p>

          <p>
            <strong>Q: What is DeepSearch?</strong>
          </p>
          <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
            A: DeepSearch performs web searches and reads pages to provide
            up‑to‑date information. It costs 2 extra credits (total 4 per
            message). Sources are displayed after the response.
          </p>

          <p>
            <strong>Q: Can I upload files?</strong>
          </p>
          <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
            A: Yes, you can upload images (up to 20MB, max 5 per message) and
            documents like PDF, DOCX, XLSX (up to 50MB). Text is extracted
            automatically.
          </p>

          <p>
            <strong>Q: How do refunds work?</strong>
          </p>
          <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
            A: If all AI models fail to respond or image generation fails,
            credits are automatically refunded. You can see this in your Credit
            Logs.
          </p>

          <p>
            <strong>Q: What is the Music Generator?</strong>
          </p>
          <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
            A: Create original songs with AI. Lyrics generation is always free.
            Audio track generation costs 30–50 credits depending on the model
            you choose.
          </p>

          <p>
            <strong>Q: Do purchased credits expire?</strong>
          </p>
          <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
            A: No. Bonus credits (including purchased packs) never expire. Daily
            credits reset every 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
