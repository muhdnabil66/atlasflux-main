// script.js
// Initialize EmailJS
emailjs.init("FYRViqFN2k-AxknhK");

// ========== Single Page Navigation with Smooth Scroll ==========
const mainContent = document.getElementById("main-content");
const policyContent = document.getElementById("policy-content");
const policyText = document.getElementById("policy-text");

// Store scroll position when leaving home
let homeScrollPosition = 0;

// Content for each page
const pages = {
  about: `
        <h1>About AtlasFlux</h1>
        <h2>The Vision of a Solo Developer</h2>
        <p>AtlasFlux is a personal project born from my passion for software development and artificial intelligence. I am Muhd Nabil, a self‑taught developer from Malaysia with a non‑technical academic background. This ecosystem represents my journey to explore how modern AI, cloud infrastructure, and good engineering practices can come together to create something valuable for the community.</p>
        <p>AtlasFlux is built entirely with the help of AI tools, but every line of code is reviewed, secured, and maintained by me. The platform is not a commercial entity—it’s a laboratory for learning, experimentation, and sharing knowledge.</p>
        <h2>The Core Service</h2>
        <ul>
            <li><strong>AtlasFlux AI (ai.atlasflux.my):</strong> A playground for frontier AI models. Users get 30 free credits daily to interact with models like OpenAI GPT‑5.4 Pro, Claude 4.6 Opus, DeepSeek R1, and many more. It’s a hands‑on way to experience the state of the art in large language models.</li>
        </ul>
        <p>This project is my way of giving back to the developer community and demonstrating that with the right tools and dedication, even a solo developer can build something that rivals larger teams.</p>
    `,
  terms: `
        <h1>Terms of Service</h1>
        <p><strong>Last updated:</strong> March 20, 2026</p>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing atlasflux.my or its subdomain (ai.atlasflux.my), you agree to be bound by these Terms of Service. These terms apply to all users of the AtlasFlux ecosystem.</p>
        <h2>2. Description of Service</h2>
        <p>AtlasFlux is a personal project that provides access to AI models (via OpenRouter). The AI services operate on a Daily Credit System: registered users receive 30 free credits every 24 hours. Each interaction with an AI model costs 2 credits (or 4 credits if DeepSearch is enabled). Credits are non‑transferable and have no monetary value.</p>
        <h2>3. User Conduct and Account Security</h2>
        <p>You are responsible for maintaining the security of your account (authentication provided by Clerk). You agree not to misuse the service—this includes attempting to bypass credit limits, reverse‑engineer API calls, or use the platform for illegal activities. I reserve the right to suspend or terminate any account that violates these rules.</p>
        <h2>4. Service Availability & Liability</h2>
        <p>As a solo‑developed project, AtlasFlux does not guarantee 100% uptime. Services may be interrupted for maintenance, system updates, or outages of third‑party providers (OpenRouter, Vercel, etc.). I am not liable for any direct or indirect damages arising from your use of the platform. AI outputs may contain errors; you are responsible for verifying critical information.</p>
        <h2>5. Intellectual Property</h2>
        <p>The original code, UI design, and the “AtlasFlux” brand are owned by me, Muhd Nabil. Users retain ownership of the content they input. The AI outputs are subject to the license terms of the respective models (see Third‑Party Licenses).</p>
        <h2>6. Changes to Terms</h2>
        <p>I may update these terms from time to time. Continued use of the platform after changes constitutes acceptance of the new terms.</p>
        <h2>7. Governing Law</h2>
        <p>These terms are governed by the laws of Malaysia.</p>
    `,
  privacy: `
        <h1>Privacy Policy</h1>
        <p><strong>Last updated:</strong> March 20, 2026</p>
        <h2>1. Data Collection</h2>
        <p>I collect only the data necessary to provide the service:</p>
        <ul>
            <li><strong>Account information:</strong> Email address, username (provided via Clerk).</li>
            <li><strong>Usage data:</strong> AI prompts, responses, credit logs, chat sessions.</li>
            <li><strong>Technical data:</strong> IP address, browser type (for analytics and security).</li>
        </ul>
        <h2>2. How I Use Your Data</h2>
        <p>Your data is used to operate the service, improve the platform, and prevent abuse. I do not sell or rent your personal information to third parties. Anonymized data may be used for model training or performance analysis.</p>
        <h2>3. Third‑Party Services</h2>
        <p>AtlasFlux relies on trusted third‑party providers:</p>
        <ul>
            <li><strong>Clerk:</strong> Handles authentication. Your login credentials are stored securely by Clerk.</li>
            <li><strong>Supabase & Neon:</strong> Store user profiles, chat history, and credit logs.</li>
            <li><strong>Vercel:</strong> Hosts the web applications.</li>
            <li><strong>OpenRouter:</strong> Processes AI requests. Your prompts are sent to OpenRouter, which may forward them to model providers under their respective privacy policies.</li>
        </ul>
        <h2>4. Data Retention & Your Rights</h2>
        <p>Your data is retained as long as your account is active. You may request deletion of your account and all associated data by contacting me at support.atlasflux@gmail.com. I will process such requests within a reasonable time.</p>
        <h2>5. Security</h2>
        <p>I implement industry‑standard security measures (encryption, access controls) to protect your data. However, no system is 100% secure.</p>
    `,
  disclaimer: `
        <h1>Disclaimer</h1>
        <h2>AI Content Disclosure</h2>
        <p>All content generated by AtlasFlux AI (ai.atlasflux.my) is produced by third‑party large language models accessed through OpenRouter. While I strive to provide accurate and helpful responses, AI models are known to sometimes produce incorrect, misleading, or biased information (often called “hallucinations”).</p>
        <h2>1. Accuracy of Information</h2>
        <p>I make no guarantees regarding the accuracy, completeness, or reliability of any AI‑generated content. You are solely responsible for verifying any information obtained through the platform, especially in technical, legal, or financial contexts.</p>
        <h2>2. User Responsibility</h2>
        <p>The use of any information provided by AtlasFlux is at your own risk. I shall not be held liable for any loss, damage, or consequence resulting from decisions made based on AI outputs.</p>
        <h2>3. No Professional Advice</h2>
        <p>Content provided is for informational and educational purposes only. It does not constitute professional, legal, medical, or financial advice.</p>
    `,
  cookie: `
        <h1>Cookie Policy</h1>
        <h2>1. Use of Cookies</h2>
        <p>AtlasFlux uses cookies to enhance your experience, maintain session state, and remember preferences. Cookies are small text files stored on your device by your browser.</p>
        <h2>2. Types of Cookies</h2>
        <ul>
            <li><strong>Necessary Cookies:</strong> Essential for authentication (via Clerk) and site security.</li>
            <li><strong>Functional Cookies:</strong> Remember your preferences, such as your remaining daily credits.</li>
            <li><strong>Analytical Cookies:</strong> Help me understand how the platform is used to improve performance.</li>
        </ul>
        <h2>3. Managing Cookies</h2>
        <p>You can disable cookies through your browser settings. However, doing so may prevent you from logging in and accessing core features.</p>
    `,
  legal: `
        <h1>Legal & Compliance</h1>
        <h2>Project Status</h2>
        <p>AtlasFlux is a personal project built by Muhd Nabil, a solo developer. It is not a registered business entity under the Companies Commission of Malaysia (SSM) and does not engage in commercial trading or the sale of services.</p>
        <h2>Intellectual Property</h2>
        <p>All original code, UI designs, and the “AtlasFlux” brand are owned by the developer. You may not reproduce or distribute any part of the platform without explicit permission.</p>
        <h2>Regulatory Compliance</h2>
        <p>I strive to adhere to the Personal Data Protection Act (PDPA) 2010 of Malaysia and the Communications and Multimedia Act 1998, ensuring a safe and ethical digital space.</p>
    `,
  systems: `
        <h1>Systems Update</h1>
        <p><strong>Current Status:</strong> All systems operational.</p>
        <ul>
            <li>Supabase RLS fully implemented.</li>
            <li>Neon database optimized.</li>
            <li>Webhook integration for user profile sync.</li>
            <li>Daily credit system active.</li>
        </ul>
        <p>Last update: March 20, 2026</p>
    `,
  faq: `
        <h1>Frequently Asked Questions</h1>
        <p><strong>Q: How do I get credits?</strong><br>A: All registered users receive 30 free credits daily. Signing up gives you an extra 15 bonus credits once.</p>
        <p><strong>Q: Which AI models are available?</strong><br>A: AtlasFlux AI provides access to dozens of models, including OpenAI GPT‑5.4 Pro, Claude 4.6 Opus, DeepSeek R1, Gemini 3.1 Pro, and many free models. The system automatically selects the best model for your request.</p>
        <p><strong>Q: What is DeepSearch?</strong><br>A: DeepSearch performs web searches and reads pages to provide up‑to‑date information. It costs 2 extra credits (total 4 per message).</p>
        <p><strong>Q: Can I upload files?</strong><br>A: Yes, you can upload images (up to 20MB) and PDFs (up to 50MB). You can upload up to 5 images per message. No daily limits—only the 2‑credit cost per message applies.</p>
        <p><strong>Q: How do refunds work?</strong><br>A: If all AI models fail to respond due to an error from OpenRouter, credits are automatically refunded. DeepSearch is not refundable.</p>
        <p><strong>Q: Is there a free model?</strong><br>A: Yes, many free models are automatically prioritized by the system.</p>
        <p><strong>Q: How do I delete my account?</strong><br>A: Contact me at support.atlasflux@gmail.com and I’ll assist you.</p>
        <p><strong>Q: Can I use the service without signing in?</strong><br>A: Yes, guest users can use the service with up to 5 chat sessions stored locally. Credits are managed in your browser.</p>
    `,
  contact: `
        <h1>Contact Us</h1>
        <h2>Get in Touch</h2>
        <p>If you have any questions, feedback, or need assistance, feel free to reach out. I’ll do my best to respond promptly.</p>
        <p><strong>Email:</strong> support.atlasflux@gmail.com</p>
        <p><strong>Digital Ecosystem:</strong></p>
        <ul>
            <li>Main Portal: <a href="https://atlasflux.my" target="_blank">atlasflux.my</a></li>
            <li>AI Research: <a href="https://ai.atlasflux.my" target="_blank">ai.atlasflux.my</a></li>
        </ul>
        <div style="margin-top: 40px;">
            <p>Or send me a message directly:</p>
            <form id="contact-form">
                <label for="name">Full name</label>
                <input type="text" name="from_name" id="name" required>
                
                <label for="email">Email address</label>
                <input type="email" name="user_email" id="email" required>
                
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="5" required></textarea>
                
                <button type="submit" id="submit-btn">Send Message</button>
            </form>
        </div>
    `,
};

function showPage(pageId) {
  if (mainContent.style.display !== "none") {
    homeScrollPosition = window.scrollY;
  }
  mainContent.style.display = "none";
  policyContent.style.display = "block";
  policyText.innerHTML = pages[pageId] || "<h1>Page not found</h1>";
  history.pushState({ page: pageId }, "", `/${pageId}`);
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.dataset.page === pageId) link.classList.add("active");
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (pageId === "contact") {
    attachContactForm();
  }
}

function showHome() {
  mainContent.style.display = "block";
  policyContent.style.display = "none";
  history.pushState({ page: "home" }, "", "/");
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.dataset.page === "home") link.classList.add("active");
  });
  window.scrollTo({ top: homeScrollPosition, behavior: "smooth" });
  animateOnScroll();
}

function attachContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    try {
      const result = await emailjs.sendForm(
        "service_xkpkpeg",
        "template_2klhh0g",
        form,
        "FYRViqFN2k-AxknhK",
      );
      if (result.text === "OK") {
        showSuccessModal();
        form.reset();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
}

function showSuccessModal() {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.style.display = "flex";
  modal.innerHTML = `
        <div style="background: #111; border: 1px solid #333; border-radius: 20px; padding: 30px; max-width: 400px; text-align: center;">
            <div style="width: 60px; height: 60px; background: #00aa00; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                <i class="fas fa-check" style="font-size: 30px; color: white;"></i>
            </div>
            <h3 style="margin-bottom: 10px;">Message Sent!</h3>
            <p style="color: #aaa; margin-bottom: 20px;">You will receive an auto-reply shortly. We'll get back to you as soon as possible.</p>
            <p style="color: #666;">Redirecting to homepage...</p>
        </div>
    `;
  document.body.appendChild(modal);
  setTimeout(() => {
    modal.remove();
    showHome();
  }, 2500);
}

document.querySelectorAll("[data-page]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.dataset.page;
    if (page === "home") {
      showHome();
    } else {
      showPage(page);
    }
  });
});

document.getElementById("back-to-main").addEventListener("click", (e) => {
  e.preventDefault();
  showHome();
});

window.addEventListener("popstate", (event) => {
  if (event.state && event.state.page) {
    if (event.state.page === "home") {
      showHome();
    } else {
      showPage(event.state.page);
    }
  } else {
    showHome();
  }
});

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle – hanya pada click hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navbar.classList.toggle("menu-open");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navbar.classList.remove("menu-open");
  });
});

function animateOnScroll() {
  const animatedElements = document.querySelectorAll(
    ".animate-on-scroll, .slide-left, .slide-right",
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2, rootMargin: "0px" },
  );
  animatedElements.forEach((el) => observer.observe(el));
}
animateOnScroll();

const flipCard = document.getElementById("flipCard");
if (flipCard) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          flipCard.classList.add("flipped");
        } else {
          flipCard.classList.remove("flipped");
        }
      });
    },
    { threshold: 0.7 },
  );
  observer.observe(flipCard);
}

const phrases = document.querySelectorAll(".rotating-phrase");
let currentIndex = 0;

function rotatePhrase() {
  phrases[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % phrases.length;
  phrases[currentIndex].classList.add("active");
}

setInterval(rotatePhrase, 6000);

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

const cookieBanner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("cookie-accept");
const rejectBtn = document.getElementById("cookie-reject");

if (cookieBanner && !getCookie("cookieConsent")) {
  cookieBanner.style.display = "block";
}

if (acceptBtn) {
  acceptBtn.addEventListener("click", () => {
    setCookie("cookieConsent", "accepted", 365);
    cookieBanner.style.display = "none";
  });
}

if (rejectBtn) {
  rejectBtn.addEventListener("click", () => {
    setCookie("cookieConsent", "rejected", 365);
    cookieBanner.style.display = "none";
  });
}

document.querySelectorAll("#cookie-banner a[data-page]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.dataset.page;
    showPage(page);
  });
});
