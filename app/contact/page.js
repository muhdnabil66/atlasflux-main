"use client";
import { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const result = await emailjs.sendForm(
        "service_xkpkpeg",
        "template_2klhh0g",
        e.target,
        "FYRViqFN2k-AxknhK",
      );
      if (result.text === "OK") {
        setSuccess(true);
        e.target.reset();
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="policy-container">
      <div className="policy-paper">
        <Link href="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
        <h1>Contact Us</h1>
        <h2>Get in Touch</h2>
        <p>
          If you have any questions, feedback, or need assistance, feel free to
          reach out. I'll do my best to respond promptly.
        </p>
        <p>
          <strong>Email:</strong> support.atlasflux@gmail.com
        </p>
        <p>
          <strong>Digital Ecosystem:</strong>
        </p>
        <ul>
          <li>
            Main Portal:{" "}
            <a
              href="https://atlasflux.my"
              target="_blank"
              rel="noopener noreferrer"
            >
              atlasflux.my
            </a>
          </li>
          <li>
            AI Research:{" "}
            <a
              href="https://ai.atlasflux.my"
              target="_blank"
              rel="noopener noreferrer"
            >
              ai.atlasflux.my
            </a>
          </li>
        </ul>
        <div style={{ marginTop: 40 }}>
          <p>Or send me a message directly:</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input type="text" name="from_name" id="name" required />
            <label htmlFor="email">Email address</label>
            <input type="email" name="user_email" id="email" required />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5" required></textarea>
            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
          {success && (
            <p style={{ color: "#10b981", marginTop: 10 }}>
              ✓ Message sent successfully!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
